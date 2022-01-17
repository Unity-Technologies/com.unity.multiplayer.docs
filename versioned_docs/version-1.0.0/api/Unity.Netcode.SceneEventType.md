---  
id: Unity.Netcode.SceneEventType  
title: Unity.Netcode.SceneEventType  
---

<div class="markdown level0 summary">

The different types of scene events communicated between a server and
client.  
Used by NetworkSceneManager for Unity.Netcode.SceneEventMessage
messages.  
*Note: This is only when EnableSceneManagement is enabled.*  
See also:  
SceneEvent

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public enum SceneEventType : byte
```

## 

<table class="table table-bordered table-striped table-condensed">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td id="Unity_Netcode_SceneEventType_Load">Load</td>
<td><p>Load a scene<br />
<strong>Invocation:</strong> Server Side<br />
<strong>Message Flow:</strong> Server to client<br />
<strong>Event Notification:</strong> Both server and client are notified a load scene event started</p></td>
</tr>
<tr class="even">
<td id="Unity_Netcode_SceneEventType_LoadComplete">LoadComplete</td>
<td><p>A client has finished loading a scene<br />
<strong>Invocation:</strong> Client Side<br />
<strong>Message Flow:</strong> Client to Server<br />
<strong>Event Notification:</strong> Both server and client receive a local notification.</p></td>
</tr>
<tr class="odd">
<td id="Unity_Netcode_SceneEventType_LoadEventCompleted">LoadEventCompleted</td>
<td><p>All clients have finished loading a scene<br />
<strong>Invocation:</strong> Server Side<br />
<strong>Message Flow:</strong> Server to Client<br />
<strong>Event Notification:</strong> Both server and client receive a local notification containing the clients that finished as well as the clients that timed out(<em>if any</em>).</p></td>
</tr>
<tr class="even">
<td id="Unity_Netcode_SceneEventType_ReSynchronize">ReSynchronize</td>
<td><p>Game session re-synchronization of NetworkObjects that were destroyed during a Synchronize event<br />
<strong>Invocation:</strong> Server Side<br />
<strong>Message Flow:</strong> Server to client<br />
<strong>Event Notification:</strong> Both server and client receive a local notification<br />
<em>Note: This will be removed once snapshot and buffered messages are finalized as it will no longer be needed at that point.</em></p></td>
</tr>
<tr class="odd">
<td id="Unity_Netcode_SceneEventType_Synchronize">Synchronize</td>
<td><p>Synchronizes current game session state for newly approved clients<br />
<strong>Invocation:</strong> Server Side<br />
<strong>Message Flow:</strong> Server to client<br />
<strong>Event Notification:</strong> Server and Client receives a local notification (<em>server receives the ClientId being synchronized</em>).</p></td>
</tr>
<tr class="even">
<td id="Unity_Netcode_SceneEventType_SynchronizeComplete">SynchronizeComplete</td>
<td><p>A client has finished synchronizing from a Synchronize event<br />
<strong>Invocation:</strong> Client Side<br />
<strong>Message Flow:</strong> Client to Server<br />
<strong>Event Notification:</strong> Both server and client receive a local notification.</p></td>
</tr>
<tr class="odd">
<td id="Unity_Netcode_SceneEventType_Unload">Unload</td>
<td><p>Unload a scene<br />
<strong>Invocation:</strong> Server Side<br />
<strong>Message Flow:</strong> Server to client<br />
<strong>Event Notification:</strong> Both server and client are notified an unload scene event started.</p></td>
</tr>
<tr class="even">
<td id="Unity_Netcode_SceneEventType_UnloadComplete">UnloadComplete</td>
<td><p>A client has finished unloading a scene<br />
<strong>Invocation:</strong> Client Side<br />
<strong>Message Flow:</strong> Client to Server<br />
<strong>Event Notification:</strong> Both server and client receive a local notification.</p></td>
</tr>
<tr class="odd">
<td id="Unity_Netcode_SceneEventType_UnloadEventCompleted">UnloadEventCompleted</td>
<td><p>All clients have unloaded a scene<br />
<strong>Invocation:</strong> Server Side<br />
<strong>Message Flow:</strong> Server to Client<br />
<strong>Event Notification:</strong> Both server and client receive a local notification containing the clients that finished as well as the clients that timed out(<em>if any</em>).</p></td>
</tr>
</tbody>
</table>
