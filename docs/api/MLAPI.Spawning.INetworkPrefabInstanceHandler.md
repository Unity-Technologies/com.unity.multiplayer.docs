---  
id: MLAPI.Spawning.INetworkPrefabInstanceHandler  
title: MLAPI.Spawning.INetworkPrefabInstanceHandler  
---

<div class="markdown level0 summary">

Interface for customizing asset spawn and destroy handlers NOTE: Custom
spawn and destroy handlers are only invoked on clients

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface INetworkPrefabInstanceHandler

## Methods 

### HandleNetworkPrefabDestroy(NetworkObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void HandleNetworkPrefabDestroy(NetworkObject networkObject)

#### Parameters

| Type          | Name          | Description |
|---------------|---------------|-------------|
| NetworkObject | networkObject |             |

### HandleNetworkPrefabSpawn(UInt64, Vector3, Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    NetworkObject HandleNetworkPrefabSpawn(ulong ownerClientId, Vector3 position, Quaternion rotation)

#### Parameters

| Type                   | Name          | Description |
|------------------------|---------------|-------------|
| System.UInt64          | ownerClientId |             |
| UnityEngine.Vector3    | position      |             |
| UnityEngine.Quaternion | rotation      |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |
