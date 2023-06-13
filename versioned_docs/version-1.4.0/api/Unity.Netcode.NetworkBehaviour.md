---
id: Unity.Netcode.NetworkBehaviour
title: Unity.Netcode.NetworkBehaviour
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:11 pm
---

<div class="markdown level0 summary">

The base class to override to write network code. Inherits MonoBehaviour

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
public abstract class NetworkBehaviour : MonoBehaviour
```

## Properties

### HasNetworkObject

<div class="markdown level1 summary">

Gets whether or not this NetworkBehaviour instance has a NetworkObject

owner.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool HasNetworkObject { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsClient

<div class="markdown level1 summary">

Gets if we are executing as client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsClient { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsHost

<div class="markdown level1 summary">

Gets if we are executing as Host, I.E Server and Client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsHost { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsLocalPlayer

<div class="markdown level1 summary">

If a NetworkObject is assigned, it will return whether or not this NetworkObject is the local player object. If no NetworkObject is assigned it will always return false.

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

Gets Whether or not the object has a owner

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

### IsServer

<div class="markdown level1 summary">

Gets if we are executing as server

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsServer { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsSpawned

<div class="markdown level1 summary">

Used to determine if it is safe to access NetworkObject and NetworkManager from within a NetworkBehaviour component Primarily useful when checking NetworkObject/NetworkManager properties within FixedUpate

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

### NetworkBehaviourId

<div class="markdown level1 summary">

Gets NetworkId for this NetworkBehaviour from the owner NetworkObject

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort NetworkBehaviourId { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### NetworkManager

<div class="markdown level1 summary"> Gets the NetworkManager that owns this NetworkBehaviour instance See note around `NetworkObject` for how there is a chicken / egg problem when we are not initialized

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

### NetworkObject

<div class="markdown level1 summary">

Gets the NetworkObject that owns this NetworkBehaviour instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkObject NetworkObject { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

### NetworkObjectId

<div class="markdown level1 summary">

Gets the NetworkId of the NetworkObject that owns this NetworkBehaviour

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

Gets the ClientId that owns the NetworkObject

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

### GetNetworkBehaviour(UInt16)

<div class="markdown level1 summary">
Returns a the NetworkBehaviour with a given BehaviourId for the current NetworkObject

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected NetworkBehaviour GetNetworkBehaviour(ushort behaviourId)
```

#### Parameters

| Type          | Name        | Description               |
|---------------|-------------|---------------------------|
| System.UInt16 | behaviourId | The behaviourId to return |

#### Returns

| Type             | Description                                     |
|------------------|-------------------------------------------------|
| NetworkBehaviour | Returns NetworkBehaviour with given behaviourId |

### GetNetworkObject(UInt64)

<div class="markdown level1 summary">

Gets the local instance of a object with a given NetworkId

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected NetworkObject GetNetworkObject(ulong networkId)
```

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.UInt64 | networkId |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

### OnDestroy()

<div class="markdown level1 summary">

Invoked when the the NetworkBehaviour is attached to. NOTE: If you override this, you will want to always invoke this base class version of this OnDestroy() method!!

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void OnDestroy()
```

### OnGainedOwnership()

<div class="markdown level1 summary">

Gets called when the local client gains ownership of this object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void OnGainedOwnership()
```

### OnLostOwnership()

<div class="markdown level1 summary">

Gets called when we loose ownership of this object

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void OnLostOwnership()
```

### OnNetworkDespawn()

<div class="markdown level1 summary">

Gets called when the NetworkObject gets despawned. Is called both on the server and clients.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void OnNetworkDespawn()
```

### OnNetworkObjectParentChanged(NetworkObject)

<div class="markdown level1 summary">

Gets called when the parent NetworkObject of this NetworkBehaviour's NetworkObject has changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void OnNetworkObjectParentChanged(NetworkObject parentNetworkObject)
```

#### Parameters

| Type          | Name                | Description                  |
|---------------|---------------------|------------------------------|
| NetworkObject | parentNetworkObject | the new NetworkObject parent |

### OnNetworkSpawn()

<div class="markdown level1 summary">

Gets called when the NetworkObject gets spawned, message handlers are ready to be registered and the network is setup.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void OnNetworkSpawn()
```

### OnSynchronize\<T\>(ref BufferSerializer\<T\>)

<div class="markdown level1 summary">

Override this method if your derived NetworkBehaviour requires custom synchronization data. Note: Use of this method is only for the initial client synchronization of NetworkBehaviours and will increase the payload size for client synchronization and dynamically spawned NetworkObjects.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected virtual void OnSynchronize<T>(ref BufferSerializer<T> serializer)

    where T : IReaderWriter
```

#### Parameters

| Type                  | Name       | Description                                       |
|-----------------------|------------|---------------------------------------------------|
| BufferSerializer\<T\> | serializer | The serializer to use to read and write the data. |

#### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |

#### Remarks

<div class="markdown level1 remarks">

When serializing (writing) this will be invoked during the client synchronization period and when spawning new NetworkObjects. When deserializing (reading), this will be invoked prior to the NetworkBehaviour's associated NetworkObject being spawned.

</div>
