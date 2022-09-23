---
id: secureclientbehaviour
title: SecureClientBehaviour sample
---

Sample code for `SecureClient`:

```csharp
using UnityEngine;
using Unity.Networking.Transport;
using Unity.Networking.Transport.TLS;
public class SecureClientBehaviour : MonoBehaviour
{
    public NetworkDriver m_Driver;
    public NetworkConnection m_Connection;
    public bool m_Done;
    private NetworkSettings settings = new NetworkSettings();
    void Start ()
    {
         settings.WithSecureClientParameters(
            serverName: ref SecureParameters.ServerCommonName,       
            caCertificate: ref SecureParameters.MyGameClientCA  // Use the content of myGameClientCA.pem
        );
        m_Driver = NetworkDriver.Create(settings);
        m_Connection = default(NetworkConnection);  

        var endpoint = NetworkEndPoint.LoopbackIpv4;
        endpoint.Port = 9001; 
        m_Connection = m_Driver.Connect(endpoint);
    }

    public void OnDestroy()
    {
        m_Driver.Dispose();
    }

    void Update()
    {
        m_Driver.ScheduleUpdate().Complete();

        if (!m_Connection.IsCreated)
        {
            if (!m_Done)
                Debug.Log("Something went wrong during connect");
            return;
        }

        DataStreamReader stream;
        NetworkEvent.Type cmd;

        while ((cmd = m_Connection.PopEvent(m_Driver, out stream)) != NetworkEvent.Type.Empty)
        {
            if (cmd == NetworkEvent.Type.Connect)
            {
                Debug.Log("We are now connected to the server");

                uint value = 1;
                m_Driver.BeginSend(m_Connection, out var writer);
                writer.WriteUInt(value);
                m_Driver.EndSend(writer);
            }
            else if (cmd == NetworkEvent.Type.Data)
            {
                uint value = stream.ReadUInt();
                Debug.Log("Got the value = " + value + " back from the server");
                m_Done = true;
                m_Connection.Disconnect(m_Driver);
                m_Connection = default(NetworkConnection);
            }
            else if (cmd == NetworkEvent.Type.Disconnect)
            {
                Debug.Log("Client got disconnected from server");
                m_Connection = default(NetworkConnection);
            }
        }
    }
}