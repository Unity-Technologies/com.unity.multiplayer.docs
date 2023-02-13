---
id: Unity.Netcode.NetworkSpawnManager
title: Unity.Netcode.NetworkSpawnManager
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:25 pm
---

<div class="markdown level0 summary">

Class that handles object spawning

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class NetworkSpawnManager
```

## Fields

### OwnershipToObjectsTable

<div class="markdown level1 summary">

Use to get all NetworkObjects owned by a client Ownership to Objects

Table Format: \[ClientId\]\[NetworkObjectId\]\[NetworkObject\] Server:

Keeps track of all clients' ownership Client: Keeps track of only its

ownership

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly Dictionary<ulong, Dictionary<ulong, NetworkObject>> OwnershipToObjectsTable
```

#### Field Value

| Type                                                                                                                          | Description |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, System.Collections.Generic.Dictionary\<System.UInt64, NetworkObject\>\> |             |

### SpawnedObjects

<div class="markdown level1 summary">

The currently spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly Dictionary<ulong, NetworkObject> SpawnedObjects
```

#### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, NetworkObject\> |             |

### SpawnedObjectsList

<div class="markdown level1 summary">

A list of the spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly HashSet<NetworkObject> SpawnedObjectsList
```

#### Field Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| System.Collections.Generic.HashSet\<NetworkObject\> |             |

## Properties

### NetworkManager

<div class="markdown level1 summary">

Gets the NetworkManager associated with this SpawnManager.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkManager NetworkManager { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

## Methods

### GetClientOwnedObjects(UInt64)

<div class="markdown level1 summary">

Returns a list of all NetworkObjects that belong to a client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<NetworkObject> GetClientOwnedObjects(ulong clientId)
```

#### Parameters

| Type          | Name     | Description                   |
|---------------|----------|-------------------------------|
| System.UInt64 | clientId | the client's id LocalClientId |

#### Returns

| Type                                             | Description                                            |
|--------------------------------------------------|--------------------------------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | returns the list of NetworkObjects owned by the client |

### GetLocalPlayerObject()

<div class="markdown level1 summary">

Returns the local player object or null if one does not exist

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObject GetLocalPlayerObject()
```

#### Returns

| Type          | Description                                           |
|---------------|-------------------------------------------------------|
| NetworkObject | The local player object or null if one does not exist |

### GetPlayerNetworkObject(UInt64)

<div class="markdown level1 summary">

Returns the player object with a given clientId or null if one does not

exist. This is only valid server side.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObject GetPlayerNetworkObject(ulong clientId)
```

#### Parameters

| Type          | Name     | Description                         |
|---------------|----------|-------------------------------------|
| System.UInt64 | clientId | the client identifier of the player |

#### Returns

| Type          | Description                                                           |
|---------------|-----------------------------------------------------------------------|
| NetworkObject | The player object with a given clientId or null if one does not exist |
