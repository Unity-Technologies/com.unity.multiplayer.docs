---

id: MLAPI.Spawning.SpawnManager.SpawnHandlerDelegate

title: MLAPI.Spawning.SpawnManager.SpawnHandlerDelegate

---

Delegate SpawnManager.SpawnHandlerDelegate

<div class="markdown level0 summary" markdown="1">

The delegate used when spawning a networked object

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Spawning_SpawnManager_SpawnHandlerDelegate_syntax]

    public delegate NetworkedObject SpawnHandlerDelegate(Vector3 position, Quaternion rotation);

##### Parameters [parameters]

| Type                                             | Name       | Description                           |
|--------------------------------------------------|------------|---------------------------------------|
| <span class="xref">UnityEngine.Vector3</span>    | \*position | The position to spawn the object at   |
| <span class="xref">UnityEngine.Quaternion</span> | \*rotation | The rotation to spawn the object with |

##### Returns [returns]

| Type            | Description |
|-----------------|-------------|
| NetworkedObject |             |
