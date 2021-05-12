---  
id: MLAPI.Spawning.NetworkSpawnManager  
title: MLAPI.Spawning.NetworkSpawnManager  
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

    public class NetworkSpawnManager

## Fields

### SpawnedObjects

<div class="markdown level1 summary">

The currently spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly Dictionary<ulong, NetworkObject> SpawnedObjects

#### Field Value

| Type                                                                      | Description |
|---------------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary&lt;System.UInt64, NetworkObject&gt; |             |

### SpawnedObjectsList

<div class="markdown level1 summary">

A list of the spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly HashSet<NetworkObject> SpawnedObjectsList

#### Field Value

| Type                                                    | Description |
|---------------------------------------------------------|-------------|
| System.Collections.Generic.HashSet&lt;NetworkObject&gt; |             |

## Properties 

### NetworkManager

<div class="markdown level1 summary">

Gets the NetworkManager associated with this SpawnManager.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkManager NetworkManager { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

## Methods 

### GetLocalPlayerObject()

<div class="markdown level1 summary">

Returns the local player object or null if one does not exist

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkObject GetLocalPlayerObject()

#### Returns

| Type          | Description                                           |
|---------------|-------------------------------------------------------|
| NetworkObject | The local player object or null if one does not exist |

### GetPlayerNetworkObject(UInt64)

<div class="markdown level1 summary">

Returns the player object with a given clientId or null if one does not
exist

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkObject GetPlayerNetworkObject(ulong clientId)

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type          | Description                                                           |
|---------------|-----------------------------------------------------------------------|
| NetworkObject | The player object with a given clientId or null if one does not exist |
