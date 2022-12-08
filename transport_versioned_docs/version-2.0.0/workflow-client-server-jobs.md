---
id: jobs
title: Efficient client and server
---

This section guides you through creating a jobified client and server. It extends and modifies the [minimal client and server example](workflow-client-server-udp.md) to use jobs to leverage parallel code execution.

:::warning
Before reading this tutorial, you should understand how the [C# Job System](https://docs.unity3d.com/Manual/JobSystem.html) works.
:::

## Create a jobified client

This section shows how to create a jobified client to handle inputs from the network. Because you only handle one client at a time, use [`IJob`](https://docs.unity3d.com/ScriptReference/Unity.Jobs.IJob.html) as your job type. You need to pass the driver and the connection to the job to handle updates within the job’s Execute method.

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
The data inside the `ClientUpdateJob` is copied. If you want to use the data after completing the job, you must have your data in a shared container, such as a [`NativeContainer`](https://docs.unity3d.com/Manual/JobSystemNativeContainer.html).
:::

You should update the `NetworkConnection` and the done variables inside the job because you might receive a disconnect message. Verify you can share the data between the job and the caller. In this case, use a [`NativeArray`](https://docs.unity3d.com/ScriptReference/Unity.Collections.NativeArray_1.html).

:::note
You can only use [blittable types](https://docs.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types) in a NativeContainer. In this case, because `bool` isn't blittable, you must use a `byte` instead of `bool`.
:::

Move the code from the Update method (from [`ClientBehaviour.cs`](samples/clientbehaviour.cs.md)) to the Execute method.

You need to change any call to `m_Connection` to `connection[0]` to refer to the first element inside the `NativeArray`. The same goes for your done variable; you must call `done[0]` when you refer to the done variable. See the following code snippet:

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

When you have a job, you must verify that you can execute the job. The following code sample shows the changes to `ClientBehaviour`:

* Change `m_Done` and `m_Connection` to type `NativeArray`.
* Add a [JobHandle](https://docs.unity3d.com/Manual/JobSystemJobDependencies.html) to track ongoing jobs.

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

The Start method looks similar to the one in the simple client example; the most significant update is that the jobified version verifies that you create a `NativeArray`.

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

#### `OnDestroy` method

In the `OnDestroy` method, dispose of all `NativeArray` objects. Then add a `ClientJobHandle.Complete()` call to ensure the jobs complete before you clean up and destroy the data they might be using.

```csharp
public void OnDestroy()
{
    ClientJobHandle.Complete();

    m_Connection.Dispose();
    m_Driver.Dispose();
    m_Done.Dispose();
}
```

#### Client `Update` loop

Update the core game loop. Ensure the last frame completes before running the new frame. Instead of calling `m_Driver.ScheduleUpdate().Complete()`, use the `JobHandle`, then call `ClientJobHandle.Complete()`.

```csharp
void Update()
{
    ClientJobHandle.Complete();
    ...
}
```

Next, create a job struct to chain the job:

```csharp
var job = new ClientUpdateJob
{
    driver = m_Driver,
    connection = m_Connection,
    done = m_Done
};
```

To schedule the job, pass the `JobHandle` dependency returned from the `m_Driver.ScheduleUpdate` call in the Schedule function of your `IJob`. Start by invoking the `m_Driver.ScheduleUpdate` without a call to `Complete`, and pass the returning `JobHandle` to the saved `ClientJobHandle`.

Pass the returned `ClientJobHandle` to the job you created, returning a newly updated `ClientJobHandle`.

```csharp
ClientJobHandle = m_Driver.ScheduleUpdate();
ClientJobHandle = job.Schedule(ClientJobHandle);
```

You now have a `JobifiedClientBehaviour` that looks like [this](samples/jobifiedclientbehaviour.cs.md).

## Create a jobified server

The jobified server is similar to the simple server in the earlier example. The only necessary modification is to create the jobs you need, then update the usage code.

The `NetworkDriver` has a `ScheduleUpdate` method that returns a `JobHandle` that populates the internal buffers of the `NetworkDriver` and provides the `PopEvent`/`PopEventForConnection` method. You can use the [`IJobParallelFor`](https://docs.unity3d.com/Manual/JobSystemParallelForJobs.html) job type to create a job to run the processing code for all connected clients in parallel.

:::note
There’s another `IJobPrarallelFor` job type you can use: `IJobParallelForDefer`. This job type suits the jobified server because you don’t know the exact number of requests the server might receive or the number of connections the server might need to process.
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

However, you can only run some of your code in parallel.

The jobified client begins by cleaning up closed connections and accepting new ones, which you can't do in parallel. Instead, you must create a connection job.

Create a `ServerUpdateConnectionJob` job, then pass both the driver and connections to the connection job. This job should clean up connections and accept new connections:

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

The code above is nearly the same as the non-jobified server code from the simple server example.

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

The `ServerUpdateJob` has two significant differences compared with the `ServerUpdateConnectionJob` job:

* The `ServerUpdateJob` uses the `NetworkDriver.Concurrent` type, which allows you to call the `NetworkDriver` from multiple threads. This is precisely what you need for the `IParallelForJobDefer`.
* The `ServerUpdateJob` passes a `NativeArray` of type `NetworkConnection` instead of a `NativeList`. The `IParallelForJobDefer` doesn't accept any other `Unity.Collections` type than a `NativeArray`.

### Execute method

The only difference in the Execute method between the simple server code and the jobified server code is that you remove the top-level for loop in the jobified server:

```csharp
for (int i = 0; i < m_Connections.Length; i++)
```

The jobified server doesn’t need this top-level for loop because it calls the Execute function for each connection, and passes in the index to that available connection.

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

The top-level `while` loop uses the index of the available connection:

```csharp
while ((cmd = driver.PopEventForConnection(connections[index], out stream)) != NetworkEvent.Type.Empty`
```

:::note
Use the index of the connection (passed into the `Execute` method) to iterate over all the connections.
:::

You now have two jobs:

* The first job, `ServerUpdateConnectionJob`, updates the connection status by adding new connections and removing old connections.
* The second job, `ServerUpdateJob`, parses the `NetworkEvent` for each connected client.

### Update the server `MonoBehaviour`

Next, access the jobified server [`MonoBehaviour`](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) and start updating the server.

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

The only change between the simple server and the jobified server variable declaration is that the jobified server adds a JobHandle to keep track of ongoing jobs.

#### Server `Start` method

You don’t need to change the `Start` method from the simple server example:

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

#### Server `OnDestroy` method

Remember to call `ServerJobHandle.Complete` in the `OnDestroy` method to clean up the code:

```csharp
public void OnDestroy()
{
    // Make sure we run our jobs to completion before exiting.
    if (m_Driver.IsCreated)
    {
        ServerJobHandle.Complete();
        m_Connections.Dispose();
        m_Driver.Dispose();
    }
}
```

#### Server `Update` loop

Call `Complete` on the `JobHandle` in the Update method to force the jobs to complete before you start a new frame:

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

Use the following process to chain the jobs:

1. `NetworkDriver.Update`
2. `ServerUpdateConnectionsJob`
3. `ServerUpdateJob`

Start by populating the `ServerUpdateConnectionsJob` with the `NetworkDriver` and the connections:

```csharp
var connectionJob = new ServerUpdateConnectionsJob
{
    driver = m_Driver,
    connections = m_Connections
};
```

Next, create the `ServerUpdateJob`. Remember to call `ToConcurrent` on the `NetworkDriver` to ensure you’re using a concurrent driver for the `IParallelForJobDefer`:

```csharp
var serverUpdateJob = new ServerUpdateJob
{
    driver = m_Driver.ToConcurrent(),
    connections = m_Connections.ToDeferredJobArray()
};
```

Verify the `NativeArray` is populated with the correct size. You can verify the `NativeArray` size using a `DeferredJobArray`. `DeferredJobArray` verifies that the connections array is populated with the same number of items in the connections list.

:::note
The size of the connections list might change when you first run `ServerUpdateConnectionsJob`.
:::

Create the job chain and call `Scheduele` as follows:

```csharp
ServerJobHandle = m_Driver.ScheduleUpdate();
ServerJobHandle = connectionJob.Schedule(ServerJobHandle);
ServerJobHandle = serverUpdateJob.Schedule(m_Connections, 1, ServerJobHandle);
```

In the code above, you:

* Scheduled the `NetworkDriver` job.
* `JobHandle` is returned as a dependency on the `ServerUpdateConnectionJob`.
* The final link in the chain is the `ServerUpdateJob`. It must run after `ServerUpdateConnectionsJob` to invoke the `IJobParallelForDeferExtensions`. `m_Connections` `NativeList` passed to the `Schedule` method, which updates the connections count before starting the job. It fans out and runs all `ServerUpdateConnectionJobs` in parallel.

You now have a fully functional [jobified server](https://docs.unity3d.com/Packages/com.unity.transport@2.0/manual/samples/jobifiedserverbehaviour.cs.html).

## Use Burst for extra performance

All the jobs in the example code adhere to [the subset of C# supported by Burst](https://docs.unity3d.com/Packages/com.unity.burst@1.7/manual/docs/CSharpLanguageSupport_Types.html). Burst is a compiler that pre-compiles Unity jobs into highly-performant native code. Unity Transport takes advantage of Burst and uses mostly Burst-friendly data structures (like `NetworkDriver`).

You can make a job Burst-compiled by adding the [`BurstCompile`] attribute to its definition. For example:

```csharp
[BurstCompile]
struct ClientUpdateJob : IJob
{
    ...
}
```

Refer to the [Burst documentation](https://docs.unity3d.com/Packages/com.unity.burst@latest) for more details on how to use it.
