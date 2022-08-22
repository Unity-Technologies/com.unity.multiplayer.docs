---
id: Unity.Netcode.NetworkBehaviour
title: Unity.Netcode.NetworkBehaviour
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Class NetworkBehaviour

<div class="markdown level0 summary">

The base class to override to write network code. Inherits MonoBehaviour

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkBehaviour

</div>

</div>

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public abstract class NetworkBehaviour : MonoBehaviour
```

</div>

### Properties

#### HasNetworkObject

<div class="markdown level1 summary">

Gets whether or not this NetworkBehaviour instance has a NetworkObject
owner.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool HasNetworkObject { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsClient

<div class="markdown level1 summary">

Gets if we are executing as client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected bool IsClient { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsHost

<div class="markdown level1 summary">

Gets if we are executing as Host, I.E Server and Client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected bool IsHost { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLocalPlayer

<div class="markdown level1 summary">

If a NetworkObject is assigned, it will return whether or not this
NetworkObject is the local player object. If no NetworkObject is
assigned it will always return false.

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

Gets Whether or not the object has a owner

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

#### IsServer

<div class="markdown level1 summary">

Gets if we are executing as server

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected bool IsServer { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsSpawned

<div class="markdown level1 summary">

Used to determine if it is safe to access NetworkObject and
NetworkManager from within a NetworkBehaviour component Primarily useful
when checking NetworkObject/NetworkManager properties within FixedUpate

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

#### NetworkBehaviourId

<div class="markdown level1 summary">

Gets NetworkId for this NetworkBehaviour from the owner NetworkObject

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ushort NetworkBehaviourId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### NetworkManager

<div class="markdown level1 summary">

Gets the NetworkManager that owns this NetworkBehaviour instance See
note around `NetworkObject` for how there is a chicken / egg problem
when we are not initialized

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

#### NetworkObject

<div class="markdown level1 summary">

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

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObject NetworkObject { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

#### NetworkObjectId

<div class="markdown level1 summary">

Gets the NetworkId of the NetworkObject that owns this NetworkBehaviour

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

Gets the ClientId that owns the NetworkObject

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

#### GetNetworkBehaviour(UInt16)

<div class="markdown level1 summary">

Returns a the NetworkBehaviour with a given BehaviourId for the current
NetworkObject

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected NetworkBehaviour GetNetworkBehaviour(ushort behaviourId)
```

</div>

##### Parameters

| Type          | Name        | Description               |
|---------------|-------------|---------------------------|
| System.UInt16 | behaviourId | The behaviourId to return |

##### Returns

| Type             | Description                                     |
|------------------|-------------------------------------------------|
| NetworkBehaviour | Returns NetworkBehaviour with given behaviourId |

#### GetNetworkObject(UInt64)

<div class="markdown level1 summary">

Gets the local instance of a object with a given NetworkId

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected NetworkObject GetNetworkObject(ulong networkId)
```

</div>

##### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.UInt64 | networkId |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

#### OnDestroy()

<div class="markdown level1 summary">

Invoked when the the NetworkBehaviour is attached to. NOTE: If you
override this, you will want to always invoke this base class version of
this OnDestroy() method!!

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void OnDestroy()
```

</div>

#### OnGainedOwnership()

<div class="markdown level1 summary">

Gets called when the local client gains ownership of this object

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void OnGainedOwnership()
```

</div>

#### OnLostOwnership()

<div class="markdown level1 summary">

Gets called when we loose ownership of this object

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void OnLostOwnership()
```

</div>

#### OnNetworkDespawn()

<div class="markdown level1 summary">

Gets called when the NetworkObject gets despawned. Is called both on the
server and clients.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void OnNetworkDespawn()
```

</div>

#### OnNetworkObjectParentChanged(NetworkObject)

<div class="markdown level1 summary">

Gets called when the parent NetworkObject of this NetworkBehaviour's
NetworkObject has changed

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject)
```

</div>

##### Parameters

| Type          | Name                | Description                  |
|---------------|---------------------|------------------------------|
| NetworkObject | parentNetworkObject | the new NetworkObject parent |

#### OnNetworkSpawn()

<div class="markdown level1 summary">

Gets called when the NetworkObject gets spawned, message handlers are
ready to be registered and the network is setup.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void OnNetworkSpawn()
```

</div>

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
