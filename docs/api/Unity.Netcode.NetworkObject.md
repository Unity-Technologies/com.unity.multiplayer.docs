---  
id: Unity.Netcode.NetworkObject  
title: Unity.Netcode.NetworkObject  
---

<div class="markdown level0 summary">

A component used to identify that a GameObject in the network

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkObject

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public sealed class NetworkObject : MonoBehaviour
```

</div>

### Fields

#### AlwaysReplicateAsRoot

<div class="markdown level1 summary">

If true, the object will always be replicated as root on clients and the
parent will be ignored.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool AlwaysReplicateAsRoot
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### AutoObjectParentSync

<div class="markdown level1 summary">

Whether or not to enable automatic NetworkObject parent synchronization.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool AutoObjectParentSync
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### CheckObjectVisibility

<div class="markdown level1 summary">

Delegate invoked when the netcode needs to know if the object should be
visible to a client, if null it will assume true

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObject.VisibilityDelegate CheckObjectVisibility
```

</div>

##### Field Value

| Type                             | Description |
|----------------------------------|-------------|
| NetworkObject.VisibilityDelegate |             |

#### DontDestroyWithOwner

<div class="markdown level1 summary">

Whether or not to destroy this object if it's owner is destroyed. If
false, the objects ownership will be given to the server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool DontDestroyWithOwner
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IncludeTransformWhenSpawning

<div class="markdown level1 summary">

Delegate invoked when the netcode needs to know if it should include the
transform when spawning the object, if null it will assume true

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObject.SpawnDelegate IncludeTransformWhenSpawning
```

</div>

##### Field Value

| Type                        | Description |
|-----------------------------|-------------|
| NetworkObject.SpawnDelegate |             |

### Properties

#### DestroyWithScene

<div class="markdown level1 summary">

Gets whether or not the object should be automatically removed when the
scene is unloaded.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool DestroyWithScene { get; set; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLocalPlayer

<div class="markdown level1 summary">

Gets if the object is the the personal clients player object

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsLocalPlayer { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsOwnedByServer

<div class="markdown level1 summary">

Gets Whether or not the object is owned by anyone

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsOwnedByServer { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsOwner

<div class="markdown level1 summary">

Gets if the object is owned by the local player or if the object is the
local player object

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsOwner { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsPlayerObject

<div class="markdown level1 summary">

Gets if this object is a player object

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsPlayerObject { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsSceneObject

<div class="markdown level1 summary">

Gets if the object is a SceneObject, null if it's not yet spawned but is
a scene object.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool? IsSceneObject { get; }
```

</div>

##### Property Value

| Type                              | Description |
|-----------------------------------|-------------|
| System.Nullable\<System.Boolean\> |             |

#### IsSpawned

<div class="markdown level1 summary">

Gets if the object has yet been spawned across the network

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsSpawned { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### NetworkManager

<div class="markdown level1 summary">

Gets the NetworkManager that owns this NetworkObject instance

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

#### NetworkObjectId

<div class="markdown level1 summary">

Gets the unique Id of this object that is synced across the network

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong NetworkObjectId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### OwnerClientId

<div class="markdown level1 summary">

Gets the ClientId of the owner of this NetworkObject

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong OwnerClientId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Methods

#### ChangeOwnership(UInt64)

<div class="markdown level1 summary">

Changes the owner of the object. Can only be called from server

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ChangeOwnership(ulong newOwnerClientId)
```

</div>

##### Parameters

| Type          | Name             | Description            |
|---------------|------------------|------------------------|
| System.UInt64 | newOwnerClientId | The new owner clientId |

#### Despawn(Boolean)

<div class="markdown level1 summary">

Despawns the of this NetworkObject and sends a destroy message for it to
all connected clients.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Despawn(bool destroy = true)
```

</div>

##### Parameters

| Type           | Name    | Description                                                                 |
|----------------|---------|-----------------------------------------------------------------------------|
| System.Boolean | destroy | (true) the will be destroyed (false) the will persist after being despawned |

#### GetObservers()

<div class="markdown level1 summary">

Returns Observers enumerator

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public HashSet<ulong>.Enumerator GetObservers()
```

</div>

##### Returns

| Type                                              | Description          |
|---------------------------------------------------|----------------------|
| System.Collections.Generic.HashSet.Enumerator\<\> | Observers enumerator |

#### IsNetworkVisibleTo(UInt64)

<div class="markdown level1 summary">

Whether or not this object is visible to a specific client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsNetworkVisibleTo(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The clientId of the client |

##### Returns

| Type           | Description                               |
|----------------|-------------------------------------------|
| System.Boolean | True if the client knows about the object |

#### NetworkHide(List\<NetworkObject\>, UInt64)

<div class="markdown level1 summary">

Hides a list of objects from a client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void NetworkHide(List<NetworkObject> networkObjects, ulong clientId)
```

</div>

##### Parameters

| Type                                             | Name           | Description                         |
|--------------------------------------------------|----------------|-------------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | networkObjects | The objects to hide                 |
| System.UInt64                                    | clientId       | The client to hide the objects from |

#### NetworkHide(UInt64)

<div class="markdown level1 summary">

Hides a object from a specific client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void NetworkHide(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The client to hide the object for |

#### NetworkShow(List\<NetworkObject\>, UInt64)

<div class="markdown level1 summary">

Shows a list of previously hidden NetworkObjects to a client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static void NetworkShow(List<NetworkObject> networkObjects, ulong clientId)
```

</div>

##### Parameters

| Type                                             | Name           | Description                       |
|--------------------------------------------------|----------------|-----------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | networkObjects | The NetworkObjects to show        |
| System.UInt64                                    | clientId       | The client to show the objects to |

#### NetworkShow(UInt64)

<div class="markdown level1 summary">

Shows a previously hidden NetworkObject to a client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void NetworkShow(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description                             |
|---------------|----------|-----------------------------------------|
| System.UInt64 | clientId | The client to show the NetworkObject to |

#### RemoveOwnership()

<div class="markdown level1 summary">

Removes all ownership of an object from any client. Can only be called
from server

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void RemoveOwnership()
```

</div>

#### Spawn(Boolean)

<div class="markdown level1 summary">

Spawns this NetworkObject across the network. Can only be called from
the Server

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Spawn(bool destroyWithScene = false)
```

</div>

##### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

#### SpawnAsPlayerObject(UInt64, Boolean)

<div class="markdown level1 summary">

Spawns a NetworkObject across the network and makes it the player object
for the given client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SpawnAsPlayerObject(ulong clientId, bool destroyWithScene = false)
```

</div>

##### Parameters

| Type           | Name             | Description                                             |
|----------------|------------------|---------------------------------------------------------|
| System.UInt64  | clientId         | The clientId whos player object this is                 |
| System.Boolean | destroyWithScene | Should the object be destroyd when the scene is changed |

#### SpawnWithOwnership(UInt64, Boolean)

<div class="markdown level1 summary">

Spawns a NetworkObject across the network with a given owner. Can only
be called from server

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SpawnWithOwnership(ulong clientId, bool destroyWithScene = false)
```

</div>

##### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.UInt64  | clientId         | The clientId to own the object                           |
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

#### TrySetParent(GameObject, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TrySetParent(GameObject parent, bool worldPositionStays = true)
```

</div>

##### Parameters

| Type           | Name               | Description |
|----------------|--------------------|-------------|
| GameObject     | parent             |             |
| System.Boolean | worldPositionStays |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### TrySetParent(Transform, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TrySetParent(Transform parent, bool worldPositionStays = true)
```

</div>

##### Parameters

| Type           | Name               | Description |
|----------------|--------------------|-------------|
| Transform      | parent             |             |
| System.Boolean | worldPositionStays |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### TrySetParent(NetworkObject, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TrySetParent(NetworkObject parent, bool worldPositionStays = true)
```

</div>

##### Parameters

| Type           | Name               | Description |
|----------------|--------------------|-------------|
| NetworkObject  | parent             |             |
| System.Boolean | worldPositionStays |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

 
