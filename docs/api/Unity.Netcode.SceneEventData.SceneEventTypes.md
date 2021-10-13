---  
id: Unity.Netcode.SceneEventData.SceneEventTypes  
title: Unity.Netcode.SceneEventData.SceneEventTypes  
---

<div class="markdown level0 summary">

The different types of scene events communicated between a server and
client. Scene event types can be: A Server To Client Event (S2C) A
Client to Server Event (C2S)

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public enum SceneEventTypes
```

## 

| Name               | Description                                                                                                                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C2S_LoadComplete   | A client has finished loading a scene Invocation: Client Side Message Flow: Client to Server Event Notification: Both server and client receive a local notification                                                                                          |
| C2S_SyncComplete   | A client has finished synchronizing from a S2C_Sync event Invocation: Client Side Message Flow: Client to Server Event Notification: Both server and client receive a local notification                                                                      |
| C2S_UnloadComplete | A client has finished unloading a scene Invocation: Client Side Message Flow: Client to Server Event Notification: Both server and client receive a local notification                                                                                        |
| S2C_Load           | Load a scene Invocation: Server Side Message Flow: Server to client Event Notification: Both server and client are notified a load scene event started                                                                                                        |
| S2C_LoadComplete   | All clients have finished loading a scene Invocation: Server Side Message Flow: Server to Client Event Notification: Both server and client receive a local notification containing the clients that finished as well as the clients that timed out (if any). |
| S2C_ReSync         | Game session re-synchronization of NetworkOjects that were destroyed during a S2C_Sync event Invocation: Server Side Message Flow: Server to client Event Notification: Both server and client receive a local notification                                   |
| S2C_Sync           | Synchronize current game session state for approved clients Invocation: Server Side Message Flow: Server to client Event Notification: Server and Client receives a local notification (server receives the ClientId being synchronized)                      |
| S2C_Unload         | Unload a scene Invocation: Server Side Message Flow: Server to client Event Notification: Both server and client are notified an unload scene event started                                                                                                   |
| S2C_UnLoadComplete | All clients have unloaded a scene Invocation: Server Side Message Flow: Server to Client Event Notification: Both server and client receive a local notification containing the clients that finished as well as the clients that timed out (if any).         |
