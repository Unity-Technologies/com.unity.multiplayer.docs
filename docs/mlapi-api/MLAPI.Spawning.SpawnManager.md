---

id: MLAPI.Spawning.SpawnManager

title: MLAPI.Spawning.SpawnManager

---

Class SpawnManager

<div class="markdown level0 summary" markdown="1">

Class that handles object spawning

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Spawning_SpawnManager_syntax]

    public static class SpawnManager

## Fields

### SpawnedObjects [MLAPI_Spawning_SpawnManager_SpawnedObjects]

<div class="markdown level1 summary" markdown="1">

The currently spawned objects

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static readonly Dictionary<ulong, NetworkedObject> SpawnedObjects

#### Field Value [field-value]

| Type                                                                                                                        | Description |
|-----------------------------------------------------------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.Dictionary</span>\<<span class="xref">System.UInt64</span>, NetworkedObject\> |             |

### SpawnedObjectsList [MLAPI_Spawning_SpawnManager_SpawnedObjectsList]

<div class="markdown level1 summary" markdown="1">

A list of the spawned objects

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static readonly List<NetworkedObject> SpawnedObjectsList

#### Field Value [field-value-1]

| Type                                                                         | Description |
|------------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.List</span>\<NetworkedObject\> |             |

## Methods <span id="MLAPI_Spawning_SpawnManager_GetLocalPlayerObject_"></span>

### GetLocalPlayerObject() [MLAPI_Spawning_SpawnManager_GetLocalPlayerObject]

<div class="markdown level1 summary" markdown="1">

Returns the local player object or null if one does not exist

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static NetworkedObject GetLocalPlayerObject()

#### Returns [returns]

| Type            | Description                                           |
|-----------------|-------------------------------------------------------|
| NetworkedObject | The local player object or null if one does not exist |

<span
id="MLAPI_Spawning_SpawnManager_GetNetworkedPrefabIndexOfHash_"></span>

### GetNetworkedPrefabIndexOfHash(UInt64) [MLAPI_Spawning_SpawnManager_GetNetworkedPrefabIndexOfHash_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Gets the prefab index of a given prefab hash

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static int GetNetworkedPrefabIndexOfHash(ulong hash)

#### Parameters [parameters]

| Type                                    | Name                                    | Description            |
|-----------------------------------------|-----------------------------------------|------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">hash</span> | The hash of the prefab |

#### Returns [returns-1]

| Type                                   | Description             |
|----------------------------------------|-------------------------|
| <span class="xref">System.Int32</span> | The index of the prefab |

<span id="MLAPI_Spawning_SpawnManager_GetPlayerObject_"></span>

### GetPlayerObject(UInt64) [MLAPI_Spawning_SpawnManager_GetPlayerObject_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Returns the player object with a given clientId or null if one does not
exist

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public static NetworkedObject GetPlayerObject(ulong clientId)

#### Parameters [parameters-1]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns-2]

| Type            | Description                                                           |
|-----------------|-----------------------------------------------------------------------|
| NetworkedObject | The player object with a given clientId or null if one does not exist |

<span
id="MLAPI_Spawning_SpawnManager_GetPrefabHashFromGenerator_"></span>

### GetPrefabHashFromGenerator(String) [MLAPI_Spawning_SpawnManager_GetPrefabHashFromGenerator_System_String_]

<div class="markdown level1 summary" markdown="1">

Returns the prefab hash for a given prefab hash generator

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public static ulong GetPrefabHashFromGenerator(string generator)

#### Parameters [parameters-2]

| Type                                    | Name                                         | Description               |
|-----------------------------------------|----------------------------------------------|---------------------------|
| <span class="xref">System.String</span> | <span class="parametername">generator</span> | The prefab hash generator |

#### Returns [returns-3]

| Type                                    | Description                      |
|-----------------------------------------|----------------------------------|
| <span class="xref">System.UInt64</span> | The hash for the given generator |

<span id="MLAPI_Spawning_SpawnManager_GetPrefabHashFromIndex_"></span>

### GetPrefabHashFromIndex(Int32) [MLAPI_Spawning_SpawnManager_GetPrefabHashFromIndex_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Returns the prefab hash for the networked prefab with a given index

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public static ulong GetPrefabHashFromIndex(int index)

#### Parameters [parameters-3]

| Type                                   | Name                                     | Description                |
|----------------------------------------|------------------------------------------|----------------------------|
| <span class="xref">System.Int32</span> | <span class="parametername">index</span> | The networked prefab index |

#### Returns [returns-4]

| Type                                    | Description                                |
|-----------------------------------------|--------------------------------------------|
| <span class="xref">System.UInt64</span> | The prefab hash for the given prefab index |

<span
id="MLAPI_Spawning_SpawnManager_RegisterCustomDestroyHandler_"></span>

### RegisterCustomDestroyHandler(UInt64, SpawnManager.DestroyHandlerDelegate) [MLAPI_Spawning_SpawnManager_RegisterCustomDestroyHandler_System_UInt64_MLAPI_Spawning_SpawnManager_DestroyHandlerDelegate_]

<div class="markdown level1 summary" markdown="1">

Registers a delegate for destroying networked objects, useful for object
pooling

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public static void RegisterCustomDestroyHandler(ulong prefabHash, SpawnManager.DestroyHandlerDelegate handler)

#### Parameters [parameters-4]

| Type                                    | Name                                          | Description                |
|-----------------------------------------|-----------------------------------------------|----------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">prefabHash</span> | The prefab hash to destroy |
| SpawnManager.DestroyHandlerDelegate     | <span class="parametername">handler</span>    | The delegate handler       |

<span id="MLAPI_Spawning_SpawnManager_RegisterSpawnHandler_"></span>

### RegisterSpawnHandler(UInt64, SpawnManager.SpawnHandlerDelegate) [MLAPI_Spawning_SpawnManager_RegisterSpawnHandler_System_UInt64_MLAPI_Spawning_SpawnManager_SpawnHandlerDelegate_]

<div class="markdown level1 summary" markdown="1">

Registers a delegate for spawning networked prefabs, useful for object
pooling

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public static void RegisterSpawnHandler(ulong prefabHash, SpawnManager.SpawnHandlerDelegate handler)

#### Parameters [parameters-5]

| Type                                    | Name                                          | Description              |
|-----------------------------------------|-----------------------------------------------|--------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">prefabHash</span> | The prefab hash to spawn |
| SpawnManager.SpawnHandlerDelegate       | <span class="parametername">handler</span>    | The delegate handler     |

<span
id="MLAPI_Spawning_SpawnManager_RemoveCustomDestroyHandler_"></span>

### RemoveCustomDestroyHandler(UInt64) [MLAPI_Spawning_SpawnManager_RemoveCustomDestroyHandler_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Removes the custom destroy handler for a specific prefab hash

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public static void RemoveCustomDestroyHandler(ulong prefabHash)

#### Parameters [parameters-6]

| Type                                    | Name                                          | Description                                                         |
|-----------------------------------------|-----------------------------------------------|---------------------------------------------------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">prefabHash</span> | The prefab hash of the prefab destroy handler that is to be removed |

<span id="MLAPI_Spawning_SpawnManager_RemoveCustomSpawnHandler_"></span>

### RemoveCustomSpawnHandler(UInt64) [MLAPI_Spawning_SpawnManager_RemoveCustomSpawnHandler_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Removes the custom spawn handler for a specific prefab hash

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public static void RemoveCustomSpawnHandler(ulong prefabHash)

#### Parameters [parameters-7]

| Type                                    | Name                                          | Description                                                       |
|-----------------------------------------|-----------------------------------------------|-------------------------------------------------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">prefabHash</span> | The prefab hash of the prefab spawn handler that is to be removed |
