---  
id: Unity.Netcode.NetworkManager.ConnectionApprovedDelegate  
title: Unity.Netcode.NetworkManager.ConnectionApprovedDelegate  
---

<div class="markdown level0 summary">

Delegate type called when connection has been approved. This only has to
be set on the server.

</div>

<div class="markdown level0 conceptual">

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public delegate void ConnectionApprovedDelegate(bool createPlayerObject, uint? playerPrefabHash, bool approved, Vector3? position, Quaternion? rotation);
```

</div>

##### Parameters

| Type                             | Name               | Description                                                                                                                                            |
|----------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean                   | createPlayerObject | If true, a player object will be created. Otherwise the client will have no object.                                                                    |
| System.Nullable\<System.UInt32\> | playerPrefabHash   | The prefabHash to use for the client. If createPlayerObject is false, this is ignored. If playerPrefabHash is null, the default player prefab is used. |
| System.Boolean                   | approved           | Whether or not the client was approved                                                                                                                 |
| System.Nullable\<Vector3\>       | position           | The position to spawn the client at. If null, the prefab position is used.                                                                             |
| System.Nullable\<Quaternion\>    | rotation           | The rotation to spawn the client with. If null, the prefab position is used.                                                                           |

 
