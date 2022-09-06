---
id: Unity.Netcode.NetworkObject
title: Unity.Netcode.NetworkObject
---

# Class NetworkObject


A component used to identify that a GameObject in the network







##### Inheritance


System.Object




NetworkObject





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public sealed class NetworkObject : MonoBehaviour
```



### Fields

#### AlwaysReplicateAsRoot


If true, the object will always be replicated as root on clients and the
parent will be ignored.






##### Declaration


``` lang-csharp
public bool AlwaysReplicateAsRoot
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### AutoObjectParentSync


Whether or not to enable automatic NetworkObject parent synchronization.






##### Declaration


``` lang-csharp
public bool AutoObjectParentSync
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### CheckObjectVisibility


Delegate invoked when the netcode needs to know if the object should be
visible to a client, if null it will assume true






##### Declaration


``` lang-csharp
public NetworkObject.VisibilityDelegate CheckObjectVisibility
```



##### Field Value

| Type                             | Description |
|----------------------------------|-------------|
| NetworkObject.VisibilityDelegate |             |

#### DontDestroyWithOwner


Whether or not to destroy this object if it's owner is destroyed. If
false, the objects ownership will be given to the server.






##### Declaration


``` lang-csharp
public bool DontDestroyWithOwner
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IncludeTransformWhenSpawning


Delegate invoked when the netcode needs to know if it should include the
transform when spawning the object, if null it will assume true






##### Declaration


``` lang-csharp
public NetworkObject.SpawnDelegate IncludeTransformWhenSpawning
```



##### Field Value

| Type                        | Description |
|-----------------------------|-------------|
| NetworkObject.SpawnDelegate |             |

### Properties

#### DestroyWithScene


Gets whether or not the object should be automatically removed when the
scene is unloaded.






##### Declaration


``` lang-csharp
public bool DestroyWithScene { get; set; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLocalPlayer


Gets if the object is the personal clients player object






##### Declaration


``` lang-csharp
public bool IsLocalPlayer { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsOwnedByServer


Gets Whether or not the object is owned by anyone






##### Declaration


``` lang-csharp
public bool IsOwnedByServer { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsOwner


Gets if the object is owned by the local player or if the object is the
local player object






##### Declaration


``` lang-csharp
public bool IsOwner { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsPlayerObject


Gets if this object is a player object






##### Declaration


``` lang-csharp
public bool IsPlayerObject { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsSceneObject


Gets if the object is a SceneObject, null if it's not yet spawned but is
a scene object.






##### Declaration


``` lang-csharp
public bool? IsSceneObject { get; }
```



##### Property Value

| Type                              | Description |
|-----------------------------------|-------------|
| System.Nullable\<System.Boolean\> |             |

#### IsSpawned


Gets if the object has yet been spawned across the network






##### Declaration


``` lang-csharp
public bool IsSpawned { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### NetworkManager


Gets the NetworkManager that owns this NetworkObject instance






##### Declaration


``` lang-csharp
public NetworkManager NetworkManager { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

#### NetworkObjectId


Gets the unique Id of this object that is synced across the network






##### Declaration


``` lang-csharp
public ulong NetworkObjectId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### OwnerClientId


Gets the ClientId of the owner of this NetworkObject






##### Declaration


``` lang-csharp
public ulong OwnerClientId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Methods

#### ChangeOwnership(UInt64)


Changes the owner of the object. Can only be called from server






##### Declaration


``` lang-csharp
public void ChangeOwnership(ulong newOwnerClientId)
```



##### Parameters

| Type          | Name             | Description            |
|---------------|------------------|------------------------|
| System.UInt64 | newOwnerClientId | The new owner clientId |

#### Despawn(Boolean)


Despawns the of this NetworkObject and sends a destroy message for it to
all connected clients.






##### Declaration


``` lang-csharp
public void Despawn(bool destroy = true)
```



##### Parameters

| Type           | Name    | Description                                                                 |
|----------------|---------|-----------------------------------------------------------------------------|
| System.Boolean | destroy | (true) the will be destroyed (false) the will persist after being despawned |

#### GetObservers()


Returns Observers enumerator






##### Declaration


``` lang-csharp
public HashSet<ulong>.Enumerator GetObservers()
```



##### Returns

| Type                                              | Description          |
|---------------------------------------------------|----------------------|
| System.Collections.Generic.HashSet.Enumerator\<\> | Observers enumerator |

#### IsNetworkVisibleTo(UInt64)


Whether or not this object is visible to a specific client






##### Declaration


``` lang-csharp
public bool IsNetworkVisibleTo(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                |
|---------------|----------|----------------------------|
| System.UInt64 | clientId | The clientId of the client |

##### Returns

| Type           | Description                               |
|----------------|-------------------------------------------|
| System.Boolean | True if the client knows about the object |

#### NetworkHide(List\<NetworkObject\>, UInt64)


Hides a list of objects from a client






##### Declaration


``` lang-csharp
public static void NetworkHide(List<NetworkObject> networkObjects, ulong clientId)
```



##### Parameters

| Type                                             | Name           | Description                         |
|--------------------------------------------------|----------------|-------------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | networkObjects | The objects to hide                 |
| System.UInt64                                    | clientId       | The client to hide the objects from |

#### NetworkHide(UInt64)


Hides a object from a specific client






##### Declaration


``` lang-csharp
public void NetworkHide(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The client to hide the object for |

#### NetworkShow(List\<NetworkObject\>, UInt64)


Shows a list of previously hidden NetworkObjects to a client






##### Declaration


``` lang-csharp
public static void NetworkShow(List<NetworkObject> networkObjects, ulong clientId)
```



##### Parameters

| Type                                             | Name           | Description                       |
|--------------------------------------------------|----------------|-----------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | networkObjects | The NetworkObjects to show        |
| System.UInt64                                    | clientId       | The client to show the objects to |

#### NetworkShow(UInt64)


Shows a previously hidden NetworkObject to a client






##### Declaration


``` lang-csharp
public void NetworkShow(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                             |
|---------------|----------|-----------------------------------------|
| System.UInt64 | clientId | The client to show the NetworkObject to |

#### RemoveOwnership()


Removes all ownership of an object from any client. Can only be called
from server






##### Declaration


``` lang-csharp
public void RemoveOwnership()
```



#### Spawn(Boolean)


Spawns this NetworkObject across the network. Can only be called from
the Server






##### Declaration


``` lang-csharp
public void Spawn(bool destroyWithScene = false)
```



##### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

#### SpawnAsPlayerObject(UInt64, Boolean)


Spawns a NetworkObject across the network and makes it the player object
for the given client






##### Declaration


``` lang-csharp
public void SpawnAsPlayerObject(ulong clientId, bool destroyWithScene = false)
```



##### Parameters

| Type           | Name             | Description                                             |
|----------------|------------------|---------------------------------------------------------|
| System.UInt64  | clientId         | The clientId whos player object this is                 |
| System.Boolean | destroyWithScene | Should the object be destroyd when the scene is changed |

#### SpawnWithOwnership(UInt64, Boolean)


Spawns a NetworkObject across the network with a given owner. Can only
be called from server






##### Declaration


``` lang-csharp
public void SpawnWithOwnership(ulong clientId, bool destroyWithScene = false)
```



##### Parameters

| Type           | Name             | Description                                              |
|----------------|------------------|----------------------------------------------------------|
| System.UInt64  | clientId         | The clientId to own the object                           |
| System.Boolean | destroyWithScene | Should the object be destroyed when the scene is changed |

#### TrySetParent(GameObject, Boolean)


Set the parent of the NetworkObject transform.






##### Declaration


``` lang-csharp
public bool TrySetParent(GameObject parent, bool worldPositionStays = true)
```



##### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GameObject     | parent             | The new parent for this NetworkObject transform will be the child of.                                                                                          |
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

##### Returns

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | Whether or not reparenting was successful. |

#### TrySetParent(Transform, Boolean)


Set the parent of the NetworkObject transform.






##### Declaration


``` lang-csharp
public bool TrySetParent(Transform parent, bool worldPositionStays = true)
```



##### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Transform      | parent             | The new parent for this NetworkObject transform will be the child of.                                                                                          |
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

##### Returns

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | Whether or not reparenting was successful. |

#### TrySetParent(NetworkObject, Boolean)


Set the parent of the NetworkObject transform.






##### Declaration


``` lang-csharp
public bool TrySetParent(NetworkObject parent, bool worldPositionStays = true)
```



##### Parameters

| Type           | Name               | Description                                                                                                                                                    |
|----------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NetworkObject  | parent             | The new parent for this NetworkObject transform will be the child of.                                                                                          |
| System.Boolean | worldPositionStays | If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before. |

##### Returns

| Type           | Description                                |
|----------------|--------------------------------------------|
| System.Boolean | Whether or not reparenting was successful. |



