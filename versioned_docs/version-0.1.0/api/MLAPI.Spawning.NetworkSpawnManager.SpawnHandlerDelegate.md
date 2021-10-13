---  
id: MLAPI.Spawning.NetworkSpawnManager.SpawnHandlerDelegate  
title: MLAPI.Spawning.NetworkSpawnManager.SpawnHandlerDelegate
---

<div class="markdown level0 summary">

The delegate used when spawning a NetworkObject

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate NetworkObject SpawnHandlerDelegate(Vector3 position, Quaternion rotation);

##### Parameters

| Type                   | Name       | Description                           |
|------------------------|------------|---------------------------------------|
| UnityEngine.Vector3    | \*position | The position to spawn the object at   |
| UnityEngine.Quaternion | \*rotation | The rotation to spawn the object with |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |
