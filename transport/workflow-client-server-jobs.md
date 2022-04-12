---
id: jobs
title: Create jobified client and server
---

In the workflow [Creating a minimal client and server](workflow-client-server.md), the client should look like this [code example](samples/clientbehaviour.cs.md).

## Prerequisites

1. Before reading and using this workflow, you should understand how the [C# Job System](https://docs.unity3d.com/Manual/JobSystem.html) works. Review that information, then continue.
2. Install the jobs package to your `manifest.json` file, inside the */Packages* folder. To do this:
   1. Open your **Unity Editor** and create a new Project.
   2. Go to **Window** > **Package Manager** from the main menu to open the **Unity Package Manager**.
   3. Click on the ![Add](/img/add.png) (plus symbol) in the status bar and select **Add package from git URL...** from the dropdown.
   4. Enter `com.unity.jobs` for the latest version of the jobs package.

## Create a Jobified Client

Create a client job to handle your inputs from the network. As you only handle one client at a time, use [IJob](https://docs.unity3d.com/ScriptReference/Unity.Jobs.IJob.html) as your job type. You need to pass the driver and the connection to the job to handle updates within the `Execute` method of the job.

```csharp
struct ClientUpdateJob: IJob
{
    public NetworkDriver driver;
    public NativeArray<NetworkConnection> connection;
    public NativeArray<byte> done;

    public void Execute() { ... }
}
```

:::note
The data inside the `ClientUpdateJob` is **copied**. If you want to use the data after the job is completed, you need to have your data in a shared container, such as a [NativeContainer](https://docs.unity3d.com/Manual/JobSystemNativeContainer.html).
:::

You may want to update the `NetworkConnection` and the `done` variables inside your job as you may receive a disconnect message. Verify you can share the data between the job and the caller. In this case, use a [NativeArray](https://docs.unity3d.com/ScriptReference/Unity.Collections.NativeArray_1.html).

:::note
You can only use [blittable types](https://docs.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types) in a `NativeContainer`. In this case, instead of a `bool` you need to use a `byte`, as its a blittable type.
:::

In your `Execute` method, move over your code from the `Update` method that you have already in place from [_ClientBehaviour.cs_](samples/clientbehaviour.cs.md) and you are done.

You need to change any call to `m_Connection` to `connection[0]` to refer to the first element inside your `NativeArray`. The same goes for your `done` variable, you need to call `done[0]` when you refer to the `done` variable. See the following:

```csharp
public void Execute()
{
    if (!connection[0].IsCreated)
    {
        // Remember that its not a bool anymore.
        if (done[0] != 1)
            Debug.Log("Something went wrong during connect");
        return;
    }
    DataStreamReader stream;
    NetworkEvent.Type cmd;

    while ((cmd = connection[0].PopEvent(driver, out stream)) != NetworkEvent.Type.Empty)
    {
        if (cmd == NetworkEvent.Type.Connect)
        {
            Debug.Log("We are now connected to the server");

            var value = 1;
            driver.BeginSend(connection[0], out var writer);
            writer.WriteUInt(value);
            driver.EndSend(writer);
        }
        else if (cmd == NetworkEvent.Type.Data)
        {
            uint value = stream.ReadUInt();
            Debug.Log("Got the value = " + value + " back from the server");
            // And finally change the `done[0]` to `1`
            done[0] = 1;
            connection[0].Disconnect(driver);
            connection[0] = default(NetworkConnection);
        }
        else if (cmd == NetworkEvent.Type.Disconnect)
        {
            Debug.Log("Client got disconnected from server");
            connection[0] = default(NetworkConnection);
        }
    }
}
```

### Update the client MonoBehaviour

When you have a job, you need to verify that you can execute the job. 

Complete changes to `ClientBehaviour`:

* Change `m_Done` and `m_Connection` to type `NativeArray`
* Add a [JobHandle](https://docs.unity3d.com/Manual/JobSystemJobDependencies.html) to track ongoing jobs

```csharp
public class JobifiedClientBehaviour : MonoBehaviour
{
    public NetworkDriver m_Driver;
    public NativeArray<NetworkConnection> m_Connection;
    public NativeArray<byte> m_Done;
    public JobHandle ClientJobHandle;

    public void OnDestroy() { ... }
    public void Start() { ... }
    public void Update() { ... }
}
```

#### Start method

```csharp
void Start () {
    m_Driver = NetworkDriver.Create();
    m_Connection = new NativeArray<NetworkConnection>(1, Allocator.Persistent);
    m_Done = new NativeArray<byte>(1, Allocator.Persistent);

    var endpoint = NetworkEndPoint.LoopbackIpv4;
    endpoint.Port = 9000;

    m_Connection[0] = m_Driver.Connect(endpoint);
}
```

The `Start` method looks pretty similar to before, the major update here is to verify you create your `NativeArray`.

#### OnDestroy method

```csharp
public void OnDestroy()
{
    ClientJobHandle.Complete();

    m_Connection.Dispose();
    m_Driver.Dispose();
    m_Done.Dispose();
}
```

For the `OnDestroy` method, dispose all `NativeArray` objects. Add a `ClientJobHandle.Complete()` call. This ensures your jobs complete before cleaning up and destroying the data they might be using.

#### Client Update loop

Finally update your core game loop:

```csharp
void Update()
{
    ClientJobHandle.Complete();
    ...
}
```

Before you start running your new frame, check that the last frame has completed. Instead of calling `m_Driver.ScheduleUpdate().Complete()`, use the `JobHandle` and call `ClientJobHandle.Complete()`.

To chain your job, start by creating a job struct:

```csharp
var job = new ClientUpdateJob
{
    driver = m_Driver,
    connection = m_Connection,
    done = m_Done
};
```

 To schedule the job, pass the `JobHandle` dependency that was returned from the `m_Driver.ScheduleUpdate` call in the `Schedule` function of your `IJob`. Start by invoking the `m_Driver.ScheduleUpdate` without a call to `Complete`, and pass the returning `JobHandle` to your saved `ClientJobHandle`.

Pass the returned `ClientJobHandle` to your own job, returning a newly updated `ClientJobHandle`.

```csharp
ClientJobHandle = m_Driver.ScheduleUpdate();
ClientJobHandle = job.Schedule(ClientJobHandle);
```

You now have a *JobifiedClientBehaviour* that looks like [this](samples/jobifiedclientbehaviour.cs.md).

## Create a Jobified Server

The server side is pretty similar to start with. You create the jobs you need and then you update the usage code.

Consider this: you know that the `NetworkDriver` has a `ScheduleUpdate` method that returns a `JobHandle`. The job as you saw above populates the internal buffers of the `NetworkDriver` and lets us call `PopEvent`/`PopEventForConnection` method. What if you create a job that will fan out and run the processing code for all connected clients in parallel? If you look at the documentation for the C# Job System, you can see that there is a [IJobParallelFor](https://docs.unity3d.com/Manual/JobSystemParallelForJobs.html) job type that can handle this scenario

:::note
Because you do not know how many requests you may receive or how many connections you may need to process at any one time, there is another `IJobPrarallelFor` job type that you can use namely: `IJobParallelForDefer`.
:::

```csharp
struct ServerUpdateJob : IJobParallelForDefer
{
    public void Execute(int index)
    {
        throw new System.NotImplementedException();
    }
}
```

However, you cannot run all of your code in parallel.

In the client example above, you begin by cleaning up closed connections and accepting new ones, which cannot be done in parallel. You need to create a connection job.

Start by creating a `ServerUpdateConnectionJob` job. Pass both the `driver` and `connections` to the connection job. Then you want your job to "Clean up connections" and "Accept new connections":

```csharp
struct ServerUpdateConnectionsJob : IJob
{
    public NetworkDriver driver;
    public NativeList<NetworkConnection> connections;

    public void Execute()
    {
        // Clean up connections
        for (int i = 0; i < connections.Length; i++)
        {
            if (!connections[i].IsCreated)
            {
                connections.RemoveAtSwapBack(i);
                --i;
            }
        }
        // Accept new connections
        NetworkConnection c;
        while ((c = driver.Accept()) != default(NetworkConnection))
        {
            connections.Add(c);
            Debug.Log("Accepted a connection");
        }
    }
}
```

The code above should be almost identical to your old non-jobified code.

With the `ServerUpdateConnectionsJob` done, implement the `ServerUpdateJob` using `IJobParallelFor`:

```csharp
struct ServerUpdateJob : IJobParallelForDefer
{
    public NetworkDriver.Concurrent driver;
    public NativeArray<NetworkConnection> connections;

    public void Execute(int index)
    {
        ...
    }
}
```

There are two major differences compared with the other `job`:

* You are using the `NetworkDriver.Concurrent` type, this allows you to call the `NetworkDriver` from multiple threads, precisely what you need for the `IParallelForJobDefer`. Secondly, 
* You are now passing a `NativeArray` of type `NetworkConnection` instead of a `NativeList`. The `IParallelForJobDefer` does not accept any other `Unity.Collections` type than a `NativeArray` (more on this later).

### Execute method

The only difference between the old code and the jobified example is that you remove the top level `for` loop that you had in your code: `for (int i = 0; i < m_Connections.Length; i++)`. This is removed because the `Execute` function on this job will be called for each connection, and the `index` to that a available connection will be passed in. 

```csharp
public void Execute(int index)
{
    DataStreamReader stream;
    Assert.IsTrue(connections[index].IsCreated);

    NetworkEvent.Type cmd;
    while ((cmd = driver.PopEventForConnection(connections[index], out stream)) !=
    NetworkEvent.Type.Empty)
    {
        if (cmd == NetworkEvent.Type.Data)
        {
            uint number = stream.ReadUInt();

            Debug.Log("Got " + number + " from the Client adding + 2 to it.");
            number +=2;

            driver.BeginSend(connections[index], out var writer);
            writer.WriteUInt(number);
            driver.EndSend(writer);
        }
        else if (cmd == NetworkEvent.Type.Disconnect)
        {
            Debug.Log("Client disconnected from server");
            connections[index] = default(NetworkConnection);
        }
    }
}
```

You can see this `index` in use in the top level `while` loop:

```
while ((cmd = driver.PopEventForConnection(connections[index], out stream)) != NetworkEvent.Type.Empty`
```

:::note
You are using the `index` that was passed into your `Execute` method to iterate over all the `connections`.
:::

You now have two jobs:

* The first job is to update your connection status:
    * Add new connections.
    * Remove old or stale connections.
* The second job is to parse `NetworkEvent` on each connected client.

### Update the server MonoBehaviour

Access your [MonoBehaviour](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) and start updating the server.

```csharp
public class JobifiedServerBehaviour : MonoBehaviour
{
    public NetworkDriver m_Driver;
    public NativeList<NetworkConnection> m_Connections;
    private JobHandle ServerJobHandle;

    void Start () { ... }

    public void OnDestroy() { ... }

    void Update () { ... }
}
```

The only change made in your variable declaration is adding a `JobHandle` to keep track of your ongoing jobs.

#### Start method

You do not need to change your `Start` method as it should look the same:

```csharp
void Start ()
{
    m_Connections = new NativeList<NetworkConnection>(16, Allocator.Persistent);
    m_Driver = new NetworkDriver.Create();

    var endpoint = NetworkEndPoint.AnyIpv4;
    endpoint.Port = 9000;
    if (m_Driver.Bind(endpoint) != 0)
        Debug.Log("Failed to bind to port 9000");
    else
        m_Driver.Listen();
}
```

#### OnDestroy method

You need to remember to call `ServerJobHandle.Complete` in your `OnDestroy` method so you can properly clean up code:

```csharp
public void OnDestroy()
{
    // Make sure we run our jobs to completion before exiting.
    ServerJobHandle.Complete();
    m_Connections.Dispose();
    m_Driver.Dispose();
}
```

#### Server update loop

In your `Update` method, call `Complete` on the `JobHandle`. This forces the jobs to complete before you start a new frame:

```csharp
void Update ()
{
    ServerJobHandle.Complete();

    var connectionJob = new ServerUpdateConnectionsJob
    {
        driver = m_Driver,
        connections = m_Connections
    };

    var serverUpdateJob = new ServerUpdateJob
    {
        driver = m_Driver.ToConcurrent(),
        connections = m_Connections.ToDeferredJobArray()
    };

    ServerJobHandle = m_Driver.ScheduleUpdate();
    ServerJobHandle = connectionJob.Schedule(ServerJobHandle);
    ServerJobHandle = serverUpdateJob.Schedule(m_Connections, 1, ServerJobHandle);
}
```

To chain the jobs, you want to follow this process:
`NetworkDriver.Update` -> `ServerUpdateConnectionsJob` -> `ServerUpdateJob`.

Start by populating your `ServerUpdateConnectionsJob`:

```csharp
var connectionJob = new ServerUpdateConnectionsJob
{
    driver = m_Driver,
    connections = m_Connections
};
```

Then create your `ServerUpdateJob`. Remember to use the `ToConcurrent` call on your driver, to verify you are using a concurrent driver for the `IParallelForJobDefer`:

```csharp
var serverUpdateJob = new ServerUpdateJob
{
    driver = m_Driver.ToConcurrent(),
    connections = m_Connections.ToDeferredJobArray()
};
```

The final step is to verify the `NativeArray` is populated to the correct size. This
can be done using a `DeferredJobArray`. When executed, it verifies the connections array is populated with the correct number of items that you have in your list. When runnning `ServerUpdateConnectionsJob` first, this may change the **size** of the list.

Create your job chain and call `Scheduele` as follows:

```
ServerJobHandle = m_Driver.ScheduleUpdate();
ServerJobHandle = connectionJob.Schedule(ServerJobHandle);
ServerJobHandle = serverUpdateJob.Schedule(m_Connections, 1, ServerJobHandle);
```

In the code above, you have:

* Scheduled the `NetworkDriver` job.
* `JobHandle` returned as a dependency on the `ServerUpdateConnectionJob`.
* The final link in the chain is the `ServerUpdateJob` that needs to run after  `ServerUpdateConnectionsJob`. In this line of code, there is a trick to invoke the `IJobParallelForDeferExtensions`. `m_Connections` `NativeList` is passed to the `Schedule` method, which updates the count of connections before starting the job. It will fan out and run all `ServerUpdateConnectionJobs` in parallel.

You should now have a fully functional [jobified server](samples/jobifiedserverbehaviour.cs.md).


