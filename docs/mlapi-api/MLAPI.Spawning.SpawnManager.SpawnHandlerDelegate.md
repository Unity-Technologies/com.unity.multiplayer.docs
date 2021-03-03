---  
id: MLAPI.Spawning.SpawnManager.SpawnHandlerDelegate  
title: MLAPI.Spawning.SpawnManager.SpawnHandlerDelegate  
---

<div class="markdown level0 summary">

The delegate used when spawning a networked object

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate NetworkedObject SpawnHandlerDelegate(Vector3 position, Quaternion rotation);

##### Parameters

| Type                   | Name       | Description                           |
|------------------------|------------|---------------------------------------|
| UnityEngine.Vector3    | \*position | The position to spawn the object at   |
| UnityEngine.Quaternion | \*rotation | The rotation to spawn the object with |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkedObject |             |
