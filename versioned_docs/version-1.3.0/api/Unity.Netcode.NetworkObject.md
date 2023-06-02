---
id: Unity.Netcode.NetworkObject
title: Unity.Netcode.NetworkObject
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:40 pm
---

<div class="markdown level0 summary">

A component used to identify that a GameObject in the network

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

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public sealed class NetworkObject : MonoBehaviour
```

## Fields

### AlwaysReplicateAsRoot

<div class="markdown level1 summary">
If true, the object will always be replicated as root on clients and the parent will be ignored.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AlwaysReplicateAsRoot
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### AutoObjectParentSync

<div class="markdown level1 summary">

Whether or not to enable automatic NetworkObject parent synchronization.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AutoObjectParentSync
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CheckObjectVisibility

<div class="markdown level1 summary">

Delegate invoked when the netcode needs to know if the object should be visible to a client, if null it will assume true
</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObject.VisibilityDelegate CheckObjectVisibility
```

#### Field Value

| Type                             | Description |
|----------------------------------|-------------|
| NetworkObject.VisibilityDelegate |             |

### DontDestroyWithOwner

<div class="markdown level1 summary">

Whether or not to destroy this object if it's owner is destroyed. If true, the objects ownership will be given to the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool DontDestroyWithOwner
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IncludeTransformWhenSpawning

<div class="markdown level1 summary">

Delegate invoked when the netcode needs to know if it should include the
transform when spawning the object, if null it will assume true

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObject.SpawnDelegate IncludeTransformWhenSpawning
```

#### Field Value

| Type                        | Description |
|-----------------------------|-------------|
| NetworkObject.SpawnDelegate |             |

## Properties

### DestroyWithScene

<div class="markdown level1 summary">

Gets whether or not the object should be automatically removed when the scene is unloaded.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool DestroyWithScene { get; set; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsLocalPlayer

<div class="markdown level1 summary">

Gets if the object is the personal clients player object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsLocalPlayer { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsOwnedByServer

<div class="markdown level1 summary">

Gets Whether or not the object is owned by anyone

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsOwnedByServer { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsOwner

<div class="markdown level1 summary">

Gets if the object is owned by the local player or if the object is the local player object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsOwner { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsPlayerObject

<div class="markdown level1 summary">

Gets if this object is a player object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsPlayerObject { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsSceneObject

<div class="markdown level1 summary">

Gets if the object is a SceneObject, null if it's not yet spawned but is a scene object.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool? IsSceneObject { get; }
```

#### Property Value

| Type                              | Description |
|-----------------------------------|-------------|
| System.Nullable\<System.Boolean\> |             |

### IsSpawned

<div class="markdown level1 summary">

Gets if the object has yet been spawned across the network

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsSpawned { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### NetworkManager

<div class="markdown level1 summary">

Gets the NetworkManager that owns this NetworkObject instance

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

### NetworkObjectId

<div class="markdown level1 summary">

Gets the unique Id of this object that is synced across the network

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong NetworkObjectId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### OwnerClientId

<div class="markdown level1 summary">

Gets the ClientId of the owner of this NetworkObject

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong OwnerClientId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

## Methods

### ChangeOwnership(UInt64)

<div class="markdown level1 summary">

Changes the owner of the object. Can only be called from server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ChangeOwnership(ulong newOwnerClientId)
```

#### Parameters

| Type          | Name             | Description            |
|---------------|------------------|------------------------|
| System.UInt64 | newOwnerClientId | The new owner clientId |

### Despawn(Boolean)

<div class="markdown level1 summary">

Despawns the of this NetworkObject and sends a destroy message for it to all connected clients.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Despawn(bool destroy = true)
```

#### Parameters

| Type           | Name    | Description                                                                 |
|----------------|---------|-----------------------------------------------------------------------------|
| System.Boolean | destroy | (true) the will be destroyed (false) the will persist after being despawned |

### GetObservers()

<div class="markdown level1 summary">

Returns Observers enumerator

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public HashSet<ulong>.Enumerator GetObservers()
```

#### Returns

| Type                                              | Description          |
|---------------------------------------------------|----------------------|
| System.Collections.Generic.HashSet.Enumerator\<\> | Observers enumerator |

### IsNetworkVisibleTo(UInt64)

<div class="markdown level1 summary">

Whether or not this object is visible to a specific client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsNetworkVisibleTo(ulong clientId)
```

#### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The clientId of the client |

#### Returns

| Type           | Description                               |
|----------------|-------------------------------------------|
| System.Boolean | True if the client knows about the object |

### NetworkHide(List\<NetworkObject\>, UInt64)

<div class="markdown level1 summary">

Hides a list of NetworkObjects from the targeted client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void NetworkHide(List<NetworkObject> networkObjects, ulong clientId)
```

#### Parameters

| Type                                             | Name           | Description                                                                    |
|--------------------------------------------------|----------------|--------------------------------------------------------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | networkObjects | The NetworkObjects that will become "netcode invisible" to the targeted client |
| System.UInt64                                    | clientId       | The targeted client                                                            |

#### Remarks

<div class="markdown level1 remarks">

Usage: Use to stop sending updates to the targeted client, "netcode

invisible", for the currently visible NetworkObjects.



Dynamically Spawned: NetworkObjects will be despawned and destroyed on

the targeted client's side.
In-Scene Placed: NetworkObjects will only be despawned on the targeted

client's side.



See Also:
NetworkHide(UInt64)
NetworkShow(UInt64) or NetworkShow(List\<NetworkObject\>, UInt64)

</div>

### NetworkHide(UInt64)

<div class="markdown level1 summary">

Hides the NetworkObject from the targeted client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void NetworkHide(ulong clientId)
```

#### Parameters

| Type          | Name     | Description         |
|---------------|----------|---------------------|
| System.UInt64 | clientId | The targeted client |

#### Remarks

<div class="markdown level1 remarks">

Usage: Use to stop sending updates to the targeted client, "netcode

invisible", for a currently visible NetworkObject.



Dynamically Spawned: NetworkObjects will be despawned and destroyed on the targeted client's side. In-Scene Placed: NetworkObjects will only be despawned on the targeted client's side.



See Also:
NetworkHide(List\<NetworkObject\>, UInt64)
NetworkShow(UInt64) or NetworkShow(List\<NetworkObject\>, UInt64)

</div>

### NetworkShow(List\<NetworkObject\>, UInt64)

<div class="markdown level1 summary">

Makes a list of previously hidden NetworkObjects "netcode visible" for the client specified.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void NetworkShow(List<NetworkObject> networkObjects, ulong clientId)
```

#### Parameters

| Type                                             | Name           | Description                                                    |
|--------------------------------------------------|----------------|----------------------------------------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | networkObjects | The objects to become "netcode visible" to the targeted client |
| System.UInt64                                    | clientId       | The targeted client                                            |

#### Remarks

<div class="markdown level1 remarks">

Usage: Use to start sending updates for previously hidden NetworkObjects to the targeted client.



Dynamically Spawned: NetworkObjects will be instantiated and spawned on the targeted client's side. In-Scene Placed: Already instantiated but despawned NetworkObjects will be spawned on the targeted client's side.



See Also:
NetworkShow(UInt64)
NetworkHide(UInt64) or NetworkHide(List\<NetworkObject\>, UInt64)

</div>

### NetworkShow(UInt64)

<div class="markdown level1 summary">

Makes the previously hidden NetworkObject "netcode visible" to the targeted client.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void NetworkShow(ulong clientId)
```

#### Parameters

| Type          | Name     | Description         |
|---------------|----------|---------------------|
| System.UInt64 | clientId | The targeted client |

#### Remarks

<div class="markdown level1 remarks">

Usage: Use to start sending updates for a previously hidden NetworkObject to the targeted client.



Dynamically Spawned: NetworkObjects will be instantiated and spawned on the targeted client side. In-Scene Placed: The instantiated but despawned NetworkObjects will be spawned on the targeted client side.



See Also:
NetworkShow(UInt64)
NetworkHide(UInt64) or NetworkHide(List\<NetworkObject\>, UInt64)

</div>

### RemoveOwnership()

<div class="markdown level1 summary">

Removes all ownership of an object from any client. Can only be called from server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RemoveOwnership()
```

### Spawn(Boolean)

<div class="markdown level1 summary">

Spawns this NetworkObject across the network. Can only be called from the Server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Spawn(bool destroyWithScene = false)
```

#### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

### SpawnAsPlayerObject(UInt64, Boolean)

<div class="markdown level1 summary">

Spawns a NetworkObject across the network and makes it the player object for the given client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SpawnAsPlayerObject(ulong clientId, bool destroyWithScene = false)
```

#### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.UInt64  | clientId         | The clientId who's player object this is                 |
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

### SpawnWithOwnership(UInt64, Boolean)

<div class="markdown level1 summary">

Spawns a NetworkObject across the network with a given owner. Can only be called from server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SpawnWithOwnership(ulong clientId, bool destroyWithScene = false)
```

#### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.UInt64  | clientId         | The clientId to own the object                           |
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

### TryRemoveParent(Boolean)

<div class="markdown level1 summary">

Removes the parent of the NetworkObject's transform

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TryRemoveParent(bool worldPositionStays = true)
```

#### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Remarks

<div class="markdown level1 remarks">
This is a more convenient way to remove the parent without having to cast the null value to either or NetworkObject

</div>

### TrySetParent(GameObject, Boolean)

<div class="markdown level1 summary">

Set the parent of the NetworkObject transform.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TrySetParent(GameObject parent, bool worldPositionStays = true)
```

#### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GameObject     | parent             | The new parent for this NetworkObject transform will be the child of.                                                                                          |
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

#### Returns

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | Whether or not reparenting was successful. |

### TrySetParent(Transform, Boolean)

<div class="markdown level1 summary">

Set the parent of the NetworkObject transform.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TrySetParent(Transform parent, bool worldPositionStays = true)
```

#### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Transform      | parent             | The new parent for this NetworkObject transform will be the child of.                                                                                          |
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

#### Returns

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | Whether or not reparenting was successful. |

### TrySetParent(NetworkObject, Boolean)

<div class="markdown level1 summary">

Set the parent of the NetworkObject transform.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TrySetParent(NetworkObject parent, bool worldPositionStays = true)
```

#### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NetworkObject  | parent             | The new parent for this NetworkObject transform will be the child of.                                                                                          |
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

#### Returns

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | Whether or not reparenting was successful. |
