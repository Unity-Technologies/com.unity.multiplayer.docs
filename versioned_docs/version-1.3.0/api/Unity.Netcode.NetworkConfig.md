---
id: Unity.Netcode.NetworkConfig
title: Unity.Netcode.NetworkConfig
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:19 pm
---

<div class="markdown level0 summary">

The configuration object used to start server, client and hosts

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
[Serializable]
public class NetworkConfig
```

## Fields

### ClientConnectionBufferTimeout

<div class="markdown level1 summary">

The amount of seconds for the server to wait for the connection approval handshake to complete before the client is disconnected. If the timeout is reached before approval is completed the client will be disconnected.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ClientConnectionBufferTimeout
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

The period begins after the Connect is received on the server. The period ends once the server finishes processing a Unity.Netcode.ConnectionRequestMessage from the client. This setting is independent of any Transport-level timeouts that may be in effect. It covers the time between the connection being established on the Transport layer, the client sending a Unity.Netcode.ConnectionRequestMessage, and the server processing that message through ConnectionApproval. This setting is server-side only.

</div>

### ConnectionApproval

<div class="markdown level1 summary">

Whether or not to use connection approval

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool ConnectionApproval
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ConnectionData

<div class="markdown level1 summary">

The data to send during connection which can be used to decide on if a client should get accepted

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte[] ConnectionData
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### EnableNetworkLogs

<div class="markdown level1 summary">

Whether or not to enable network logs.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool EnableNetworkLogs
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableSceneManagement

<div class="markdown level1 summary">

Enables scene management. This will allow network scene switches and automatic scene difference corrections upon connect. SoftSynced scene objects wont work with this disabled. That means that disabling SceneManagement also enables PrefabSync.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool EnableSceneManagement
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableTimeResync

<div class="markdown level1 summary">

If your logic uses the NetworkTime, this should probably be turned off. If however it's needed to maximize accuracy, this is recommended to be turned on

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool EnableTimeResync
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnsureNetworkVariableLengthSafety

<div class="markdown level1 summary">

Whether or not to ensure that NetworkVariables can be read even if a client accidentally writes where its not allowed to. This costs some CPU and bandwidth.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool EnsureNetworkVariableLengthSafety
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ForceSamePrefabs

<div class="markdown level1 summary">

Whether or not the netcode should check for differences in the prefabs at connection. If you dynamically add prefabs at runtime, turn this OFF

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool ForceSamePrefabs
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LoadSceneTimeOut

<div class="markdown level1 summary">

The amount of seconds to wait for all clients to load or unload a requested scene

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int LoadSceneTimeOut
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### NetworkIdRecycleDelay

<div class="markdown level1 summary">

The amount of seconds a NetworkId has to be unused in order for it to be reused.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float NetworkIdRecycleDelay
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### NetworkTransport

<div class="markdown level1 summary">

The transport hosts the sever uses

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkTransport NetworkTransport
```

#### Field Value

| Type             | Description |
|------------------|-------------|
| NetworkTransport |             |

### PlayerPrefab

<div class="markdown level1 summary">

The default player prefab

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GameObject PlayerPrefab
```

#### Field Value

| Type       | Description |
|------------|-------------|
| GameObject |             |

### Prefabs

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPrefabs Prefabs
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| NetworkPrefabs |             |

### ProtocolVersion

<div class="markdown level1 summary">

The protocol version. Different versions doesn't talk to each other.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort ProtocolVersion
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### RecycleNetworkIds

<div class="markdown level1 summary">

If true, NetworkIds will be reused after the NetworkIdRecycleDelay.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool RecycleNetworkIds
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RpcHashSize

<div class="markdown level1 summary">

Decides how many bytes to use for Rpc messaging. Leave this to 2 bytes unless you are facing hash collisions

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public HashSize RpcHashSize
```

#### Field Value

| Type     | Description |
|----------|-------------|
| HashSize |             |

### RttAverageSamples

<div class="markdown level1 summary">

The number of RTT samples that is kept as an average for calculations

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int RttAverageSamples = 5
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### RttWindowSize

<div class="markdown level1 summary">

The number of slots used for RTT calculations. This is the maximum amount of in-flight messages

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int RttWindowSize = 64
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### SpawnTimeout

<div class="markdown level1 summary">

The amount of time a message should be buffered if the asset or object needed to process it doesn't exist yet. If the asset is not added/object is not spawned within this time, it will be dropped.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float SpawnTimeout
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### TickRate

<div class="markdown level1 summary">

The tickrate of network ticks. This value controls how often netcode runs user code and sends out data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint TickRate
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### TimeResyncInterval

<div class="markdown level1 summary">

If time re-sync is turned on, this specifies the interval between syncs in seconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int TimeResyncInterval
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods

### CompareConfig(UInt64)

<div class="markdown level1 summary">

Compares a SHA256 hash with the current NetworkConfig instances hash

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool CompareConfig(ulong hash)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt64 | hash |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### FromBase64(String)

<div class="markdown level1 summary">

Sets the NetworkConfig data with that from a base64 encoded version

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void FromBase64(string base64)
```

#### Parameters

| Type          | Name   | Description                |
|---------------|--------|----------------------------|
| System.String | base64 | The base64 encoded version |

### GetConfig(Boolean)

<div class="markdown level1 summary">

Gets a SHA256 hash of parts of the NetworkConfig instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong GetConfig(bool cache = true)
```

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | cache |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ToBase64()

<div class="markdown level1 summary">

Returns a base64 encoded version of the configuration

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ToBase64()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |
