---  
id: MLAPI.Spawning.SpawnManager  
title: MLAPI.Spawning.SpawnManager  
---

<div class="markdown level0 summary">

Class that handles object spawning

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class SpawnManager

## Fields

### SpawnedObjects

<div class="markdown level1 summary">

The currently spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly Dictionary<ulong, NetworkedObject> SpawnedObjects

#### Field Value

| Type                                                                        | Description |
|-----------------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary&lt;System.UInt64, NetworkedObject&gt; |             |

### SpawnedObjectsList

<div class="markdown level1 summary">

A list of the spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static readonly List<NetworkedObject> SpawnedObjectsList

#### Field Value

| Type                                                   | Description |
|--------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;NetworkedObject&gt; |             |

## Methods 

### GetLocalPlayerObject()

<div class="markdown level1 summary">

Returns the local player object or null if one does not exist

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static NetworkedObject GetLocalPlayerObject()

#### Returns

| Type            | Description                                           |
|-----------------|-------------------------------------------------------|
| NetworkedObject | The local player object or null if one does not exist |

### GetNetworkedPrefabIndexOfHash(UInt64)

<div class="markdown level1 summary">

Gets the prefab index of a given prefab hash

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int GetNetworkedPrefabIndexOfHash(ulong hash)

#### Parameters

| Type          | Name | Description            |
|---------------|------|------------------------|
| System.UInt64 | hash | The hash of the prefab |

#### Returns

| Type         | Description             |
|--------------|-------------------------|
| System.Int32 | The index of the prefab |

### GetPlayerObject(UInt64)

<div class="markdown level1 summary">

Returns the player object with a given clientId or null if one does not
exist

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static NetworkedObject GetPlayerObject(ulong clientId)

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type            | Description                                                           |
|-----------------|-----------------------------------------------------------------------|
| NetworkedObject | The player object with a given clientId or null if one does not exist |

### GetPrefabHashFromGenerator(String)

<div class="markdown level1 summary">

Returns the prefab hash for a given prefab hash generator

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static ulong GetPrefabHashFromGenerator(string generator)

#### Parameters

| Type          | Name      | Description               |
|---------------|-----------|---------------------------|
| System.String | generator | The prefab hash generator |

#### Returns

| Type          | Description                      |
|---------------|----------------------------------|
| System.UInt64 | The hash for the given generator |

### GetPrefabHashFromIndex(Int32)

<div class="markdown level1 summary">

Returns the prefab hash for the networked prefab with a given index

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static ulong GetPrefabHashFromIndex(int index)

#### Parameters

| Type         | Name  | Description                |
|--------------|-------|----------------------------|
| System.Int32 | index | The networked prefab index |

#### Returns

| Type          | Description                                |
|---------------|--------------------------------------------|
| System.UInt64 | The prefab hash for the given prefab index |

### RegisterCustomDestroyHandler(UInt64, SpawnManager.DestroyHandlerDelegate)

<div class="markdown level1 summary">

Registers a delegate for destroying networked objects, useful for object
pooling

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RegisterCustomDestroyHandler(ulong prefabHash, SpawnManager.DestroyHandlerDelegate handler)

#### Parameters

| Type                                | Name       | Description                |
|-------------------------------------|------------|----------------------------|
| System.UInt64                       | prefabHash | The prefab hash to destroy |
| SpawnManager.DestroyHandlerDelegate | handler    | The delegate handler       |

### RegisterSpawnHandler(UInt64, SpawnManager.SpawnHandlerDelegate)

<div class="markdown level1 summary">

Registers a delegate for spawning networked prefabs, useful for object
pooling

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RegisterSpawnHandler(ulong prefabHash, SpawnManager.SpawnHandlerDelegate handler)

#### Parameters

| Type                              | Name       | Description              |
|-----------------------------------|------------|--------------------------|
| System.UInt64                     | prefabHash | The prefab hash to spawn |
| SpawnManager.SpawnHandlerDelegate | handler    | The delegate handler     |

### RemoveCustomDestroyHandler(UInt64)

<div class="markdown level1 summary">

Removes the custom destroy handler for a specific prefab hash

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RemoveCustomDestroyHandler(ulong prefabHash)

#### Parameters

| Type          | Name       | Description                                                         |
|---------------|------------|---------------------------------------------------------------------|
| System.UInt64 | prefabHash | The prefab hash of the prefab destroy handler that is to be removed |

### RemoveCustomSpawnHandler(UInt64)

<div class="markdown level1 summary">

Removes the custom spawn handler for a specific prefab hash

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RemoveCustomSpawnHandler(ulong prefabHash)

#### Parameters

| Type          | Name       | Description                                                       |
|---------------|------------|-------------------------------------------------------------------|
| System.UInt64 | prefabHash | The prefab hash of the prefab spawn handler that is to be removed |
