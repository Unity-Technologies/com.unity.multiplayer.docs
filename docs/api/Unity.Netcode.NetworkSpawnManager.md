---  
id: Unity.Netcode.NetworkSpawnManager  
title: Unity.Netcode.NetworkSpawnManager  
---

<div class="markdown level0 summary">

Class that handles object spawning

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkSpawnManager

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NetworkSpawnManager
```

</div>

### Fields

#### OwnershipToObjectsTable

<div class="markdown level1 summary">

Use to get all NetworkObjects owned by a client Ownership to Objects
Table Format: \[ClientId\]\[NetworkObjectId\]\[NetworkObject\] Server:
Keeps track of all clients' ownership Client: Keeps track of only its
ownership

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly Dictionary<ulong, Dictionary<ulong, NetworkObject>> OwnershipToObjectsTable
```

</div>

##### Field Value

| Type                                                                                                                          | Description |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, System.Collections.Generic.Dictionary\<System.UInt64, NetworkObject\>\> |             |

#### SpawnedObjects

<div class="markdown level1 summary">

The currently spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly Dictionary<ulong, NetworkObject> SpawnedObjects
```

</div>

##### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, NetworkObject\> |             |

#### SpawnedObjectsList

<div class="markdown level1 summary">

A list of the spawned objects

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly HashSet<NetworkObject> SpawnedObjectsList
```

</div>

##### Field Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| System.Collections.Generic.HashSet\<NetworkObject\> |             |

### Properties

#### NetworkManager

<div class="markdown level1 summary">

Gets the NetworkManager associated with this SpawnManager.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkManager NetworkManager { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

### Methods

#### GetClientOwnedObjects(UInt64)

<div class="markdown level1 summary">

Returns a list of all NetworkObjects that belong to a client.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public List<NetworkObject> GetClientOwnedObjects(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description                   |
|---------------|----------|-------------------------------|
| System.UInt64 | clientId | the client's id LocalClientId |

##### Returns

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<NetworkObject\> |             |

#### GetLocalPlayerObject()

<div class="markdown level1 summary">

Returns the local player object or null if one does not exist

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObject GetLocalPlayerObject()
```

</div>

##### Returns

| Type          | Description                                           |
|---------------|-------------------------------------------------------|
| NetworkObject | The local player object or null if one does not exist |

#### GetPlayerNetworkObject(UInt64)

<div class="markdown level1 summary">

Returns the player object with a given clientId or null if one does not
exist. This is only valid server side.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObject GetPlayerNetworkObject(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

##### Returns

| Type          | Description                                                           |
|---------------|-----------------------------------------------------------------------|
| NetworkObject | The player object with a given clientId or null if one does not exist |

 
