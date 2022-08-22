---
id: Unity.Netcode.NetworkBehaviour
title: Unity.Netcode.NetworkBehaviour
---

# Class NetworkBehaviour


The base class to override to write network code. Inherits MonoBehaviour







##### Inheritance


System.Object




NetworkBehaviour





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public abstract class NetworkBehaviour : MonoBehaviour
```



### Properties

#### HasNetworkObject


Gets whether or not this NetworkBehaviour instance has a NetworkObject
owner.






##### Declaration


``` lang-csharp
public bool HasNetworkObject { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsClient


Gets if we are executing as client






##### Declaration


``` lang-csharp
protected bool IsClient { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsHost


Gets if we are executing as Host, I.E Server and Client






##### Declaration


``` lang-csharp
protected bool IsHost { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLocalPlayer


If a NetworkObject is assigned, it will return whether or not this
NetworkObject is the local player object. If no NetworkObject is
assigned it will always return false.






##### Declaration


``` lang-csharp
public bool IsLocalPlayer { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsOwnedByServer


Gets Whether or not the object has a owner






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

#### IsServer


Gets if we are executing as server






##### Declaration


``` lang-csharp
protected bool IsServer { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsSpawned


Used to determine if it is safe to access NetworkObject and
NetworkManager from within a NetworkBehaviour component Primarily useful
when checking NetworkObject/NetworkManager properties within FixedUpate






##### Declaration


``` lang-csharp
public bool IsSpawned { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### NetworkBehaviourId


Gets NetworkId for this NetworkBehaviour from the owner NetworkObject






##### Declaration


``` lang-csharp
public ushort NetworkBehaviourId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### NetworkManager


Gets the NetworkManager that owns this NetworkBehaviour instance See
note around `NetworkObject` for how there is a chicken / egg problem
when we are not initialized






##### Declaration


``` lang-csharp
public NetworkManager NetworkManager { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

#### NetworkObject


Gets the NetworkObject that owns this NetworkBehaviour instance TODO:
this needs an overhaul. It's expensive, it's ja little naive in how it
looks for networkObject in its parent and worst, it creates a puzzle if
you are a NetworkBehaviour wanting to see if you're live or not (e.g.
editor code). All you want to do is find out if NetworkManager is null,
but to do that you need NetworkObject, but if you try and grab
NetworkObject and NetworkManager isn't up you'll get the warning below.
This is why IsBehaviourEditable had to be created. Matt was going to
re-do how NetworkObject works but it was close to the release and too
risky to change






##### Declaration


``` lang-csharp
public NetworkObject NetworkObject { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

#### NetworkObjectId


Gets the NetworkId of the NetworkObject that owns this NetworkBehaviour






##### Declaration


``` lang-csharp
public ulong NetworkObjectId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### OwnerClientId


Gets the ClientId that owns the NetworkObject






##### Declaration


``` lang-csharp
public ulong OwnerClientId { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Methods

#### GetNetworkBehaviour(UInt16)


Returns a the NetworkBehaviour with a given BehaviourId for the current
NetworkObject






##### Declaration


``` lang-csharp
protected NetworkBehaviour GetNetworkBehaviour(ushort behaviourId)
```



##### Parameters

| Type          | Name        | Description               |
|---------------|-------------|---------------------------|
| System.UInt16 | behaviourId | The behaviourId to return |

##### Returns

| Type             | Description                                     |
|------------------|-------------------------------------------------|
| NetworkBehaviour | Returns NetworkBehaviour with given behaviourId |

#### GetNetworkObject(UInt64)


Gets the local instance of a object with a given NetworkId






##### Declaration


``` lang-csharp
protected NetworkObject GetNetworkObject(ulong networkId)
```



##### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.UInt64 | networkId |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

#### OnDestroy()


Invoked when the the NetworkBehaviour is attached to. NOTE: If you
override this, you will want to always invoke this base class version of
this OnDestroy() method!!






##### Declaration


``` lang-csharp
public virtual void OnDestroy()
```



#### OnGainedOwnership()


Gets called when the local client gains ownership of this object






##### Declaration


``` lang-csharp
public virtual void OnGainedOwnership()
```



#### OnLostOwnership()


Gets called when we loose ownership of this object






##### Declaration


``` lang-csharp
public virtual void OnLostOwnership()
```



#### OnNetworkDespawn()


Gets called when the NetworkObject gets despawned. Is called both on the
server and clients.






##### Declaration


``` lang-csharp
public virtual void OnNetworkDespawn()
```



#### OnNetworkObjectParentChanged(NetworkObject)


Gets called when the parent NetworkObject of this NetworkBehaviour's
NetworkObject has changed






##### Declaration


``` lang-csharp
public virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject)
```



##### Parameters

| Type          | Name                | Description                  |
|---------------|---------------------|------------------------------|
| NetworkObject | parentNetworkObject | the new NetworkObject parent |

#### OnNetworkSpawn()


Gets called when the NetworkObject gets spawned, message handlers are
ready to be registered and the network is setup.






##### Declaration


``` lang-csharp
public virtual void OnNetworkSpawn()
```





