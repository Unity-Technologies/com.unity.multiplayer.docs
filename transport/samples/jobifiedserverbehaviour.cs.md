---
id: jobifiedserverbehaviour
title: JobifiedServerBehaviour sample
---

Sample code for `JobifiedServerBehaviour`:

```csharp
using UnityEngine;
using UnityEngine.Assertions;

using Unity.Jobs;
using Unity.Collections;
using Unity.Networking.Transport;

struct ServerUpdateConnectionsJob : IJob
{
    public NetworkDriver driver;
    public NativeList<NetworkConnection> connections;

    public void Execute()
    {
        // CleanUpConnections
        for (int i = 0; i < connections.Length; i++)
        {
            if (!connections[i].IsCreated)
            {
                connections.RemoveAtSwapBack(i);
                --i;
            }
        }
        // AcceptNewConnections
        NetworkConnection c;
        while ((c = driver.Accept()) != default(NetworkConnection))
        {
            connections.Add(c);
            Debug.Log("Accepted a connection");
        }
    }
}

struct ServerUpdateJob : IJobParallelForDefer
{
    public NetworkDriver.Concurrent driver;
    public NativeArray<NetworkConnection> connections;

    public void Execute(int index)
    {
        DataStreamReader stream;
        Assert.IsTrue(connections[index].IsCreated);

        NetworkEvent.Type cmd;
        while ((cmd = driver.PopEventForConnection(connections[index], out stream)) != NetworkEvent.Type.Empty)
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
}

public class JobifiedServerBehaviour : MonoBehaviour
{
    public NetworkDriver m_Driver;
    public NativeList<NetworkConnection> m_Connections;
    private JobHandle ServerJobHandle;

    void Start ()
    {
        m_Connections = new NativeList<NetworkConnection>(16, Allocator.Persistent);
        m_Driver = NetworkDriver.Create();
        var endpoint = NetworkEndPoint.AnyIpv4;
        endpoint.Port = 9000;
        if (m_Driver.Bind(endpoint) != 0)
            Debug.Log("Failed to bind to port 9000");
        else
            m_Driver.Listen();
    }

    public void OnDestroy()
    {
        // Make sure we run our jobs to completion before exiting.
        ServerJobHandle.Complete();
        m_Connections.Dispose();
        m_Driver.Dispose();
    }

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
            connections = m_Connections.AsDeferredJobArray()
        };

        ServerJobHandle = m_Driver.ScheduleUpdate();
        ServerJobHandle = connectionJob.Schedule(ServerJobHandle);
        ServerJobHandle = serverUpdateJob.Schedule(m_Connections, 1, ServerJobHandle);
    }
}
```