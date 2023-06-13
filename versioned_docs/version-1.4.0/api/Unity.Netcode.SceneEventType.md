---
id: Unity.Netcode.SceneEventType
title: Unity.Netcode.SceneEventType
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Tuesday, April 11th 2023, 8:29:00 pm
---

<div class="markdown level0 summary">

The different types of scene events communicated between a server and client.

Used by NetworkSceneManager for Unity.Netcode.SceneEventMessage messages.

*Note: This is only when EnableSceneManagement is enabled.*
See also:
SceneEvent

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public enum SceneEventType : byte
```

## Fields

|Name|Description|Invocation|Message Flow|Event Notification|
|--- |--- |--- |--- |--- |
|Load|Load a scene | Server Side | Server to Client | Both server and client are notified a load scene event started|
|LoadComplete|A client has finished loading a scene| Client Side| Client to Server| Both server and client receive a local notification.|
|LoadEventCompleted|All clients have finished loading a scene| Server Side| Server to Client |Both server and client receive a local notification containing the clients that finished as well as the clients that timed out(if any).|
|ReSynchronize|Game session re-synchronization of NetworkObjects that were destroyed during a Synchronize event| Server Side| Server to Client |Both server and client receive a local notification|
|Synchronize|Synchronizes current game session state for newly approved clients|Server Side|Server to client| Server and Client receives a local notification (server receives the ClientId being synchronized).|
|SynchronizeComplete|A client has finished synchronizing from a Synchronize event |Client Side| Client to Server|Both server and client receive a local notification.|
|Unload|Unload a scene| Server Side| Server to Client| Both server and client are notified an unload scene event started.|
|UnloadComplete|A client has finished unloading a scene| Client Side|Client to Server| Both server and client receive a local notification.|
|UnloadEventCompleted|All clients have unloaded a scene| Server Side|Server to Client|Both server and client receive a local notification containing the clients that finished as well as the clients that timed out (if any).|
