---  
id: Unity.Netcode.NetworkConfig  
title: Unity.Netcode.NetworkConfig  
---

<div class="markdown level0 summary">

The configuration object used to start server, client and hosts

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkConfig

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
[Serializable]
public class NetworkConfig
```

</div>

### Fields

#### ClientConnectionBufferTimeout

<div class="markdown level1 summary">

The amount of seconds for the server to wait for the connection approval
handshake to complete before the client is disconnected.

If the timeout is reached before approval is completed the client will
be disconnected.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int ClientConnectionBufferTimeout
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks

<div class="markdown level1 remarks">

The period begins after the Connect is received on the server. The
period ends once the server finishes processing a
Unity.Netcode.ConnectionRequestMessage from the client.

This setting is independent of any Transport-level timeouts that may be
in effect. It covers the time between the connection being established
on the Transport layer, the client sending a
Unity.Netcode.ConnectionRequestMessage, and the server processing that
message through ConnectionApproval.

This setting is server-side only.

</div>

#### ConnectionApproval

<div class="markdown level1 summary">

Whether or not to use connection approval

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool ConnectionApproval
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ConnectionData

<div class="markdown level1 summary">

The data to send during connection which can be used to decide on if a
client should get accepted

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte[] ConnectionData
```

</div>

##### Field Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

#### EnableNetworkLogs

<div class="markdown level1 summary">

Whether or not to enable network logs.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool EnableNetworkLogs
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### EnableSceneManagement

<div class="markdown level1 summary">

Enables scene management. This will allow network scene switches and
automatic scene difference corrections upon connect. SoftSynced scene
objects wont work with this disabled. That means that disabling
SceneManagement also enables PrefabSync.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool EnableSceneManagement
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### EnableTimeResync

<div class="markdown level1 summary">

If your logic uses the NetworkTime, this should probably be turned off.
If however it's needed to maximize accuracy, this is recommended to be
turned on

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool EnableTimeResync
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### EnsureNetworkVariableLengthSafety

<div class="markdown level1 summary">

Whether or not to ensure that NetworkVariables can be read even if a
client accidentally writes where its not allowed to. This costs some CPU
and bandwidth.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool EnsureNetworkVariableLengthSafety
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ForceSamePrefabs

<div class="markdown level1 summary">

Whether or not the netcode should check for differences in the prefabs
at connection. If you dynamically add prefabs at runtime, turn this OFF

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool ForceSamePrefabs
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LoadSceneTimeOut

<div class="markdown level1 summary">

The amount of seconds to wait for all clients to load or unload a
requested scene

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int LoadSceneTimeOut
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### NetworkIdRecycleDelay

<div class="markdown level1 summary">

The amount of seconds a NetworkId has to be unused in order for it to be
reused.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public float NetworkIdRecycleDelay
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### NetworkTransport

<div class="markdown level1 summary">

The transport hosts the sever uses

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkTransport NetworkTransport
```

</div>

##### Field Value

| Type             | Description |
|------------------|-------------|
| NetworkTransport |             |

#### PlayerPrefab

<div class="markdown level1 summary">

The default player prefab

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public GameObject PlayerPrefab
```

</div>

##### Field Value

| Type       | Description |
|------------|-------------|
| GameObject |             |

#### ProtocolVersion

<div class="markdown level1 summary">

The protocol version. Different versions doesn't talk to each other.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ushort ProtocolVersion
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### RecycleNetworkIds

<div class="markdown level1 summary">

If true, NetworkIds will be reused after the NetworkIdRecycleDelay.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool RecycleNetworkIds
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### RpcHashSize

<div class="markdown level1 summary">

Decides how many bytes to use for Rpc messaging. Leave this to 2 bytes
unless you are facing hash collisions

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public HashSize RpcHashSize
```

</div>

##### Field Value

| Type     | Description |
|----------|-------------|
| HashSize |             |

#### RttAverageSamples

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int RttAverageSamples = 5
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RttWindowSize

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const int RttWindowSize = 64
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SpawnTimeout

<div class="markdown level1 summary">

The amount of time a message should be buffered if the asset or object
needed to process it doesn't exist yet. If the asset is not added/object
is not spawned within this time, it will be dropped.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public float SpawnTimeout
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### TickRate

<div class="markdown level1 summary">

The tickrate of network ticks. This value controls how often netcode
runs user code and sends out data.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public uint TickRate
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### TimeResyncInterval

<div class="markdown level1 summary">

If time re-sync is turned on, this specifies the interval between syncs
in seconds.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int TimeResyncInterval
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### CompareConfig(UInt64)

<div class="markdown level1 summary">

Compares a SHA256 hash with the current NetworkConfig instances hash

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool CompareConfig(ulong hash)
```

</div>

##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt64 | hash |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### FromBase64(String)

<div class="markdown level1 summary">

Sets the NetworkConfig data with that from a base64 encoded version

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void FromBase64(string base64)
```

</div>

##### Parameters

| Type          | Name   | Description                |
|---------------|--------|----------------------------|
| System.String | base64 | The base64 encoded version |

#### GetConfig(Boolean)

<div class="markdown level1 summary">

Gets a SHA256 hash of parts of the NetworkConfig instance

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong GetConfig(bool cache = true)
```

</div>

##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | cache |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ToBase64()

<div class="markdown level1 summary">

Returns a base64 encoded version of the configuration

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string ToBase64()
```

</div>

##### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

 
