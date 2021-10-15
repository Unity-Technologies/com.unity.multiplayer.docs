---  
id: MLAPI.Configuration.NetworkConfig  
title: MLAPI.Configuration.NetworkConfig
---

<div class="markdown level0 summary">

The configuration object used to start server, client and hosts

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

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

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    [Serializable]
    public class NetworkConfig

## Fields

### AllowRuntimeSceneChanges

<div class="markdown level1 summary">

Whether or not runtime scene changes should be allowed and expected. If
this is true, clients with different initial configurations will not
work together.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not runtime scene changes should be allowed and expected.\n If this is true, clients with different initial configurations will not work together.")]
    public bool AllowRuntimeSceneChanges

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ClientConnectionBufferTimeout

<div class="markdown level1 summary">

The amount of seconds to wait for handshake to complete before timing
out a client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of seconds to wait for the handshake to complete before the client times out")]
    public int ClientConnectionBufferTimeout

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ConnectionApproval

<div class="markdown level1 summary">

Whether or not to use connection approval

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not to force clients to be approved before they connect")]
    public bool ConnectionApproval

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ConnectionData

<div class="markdown level1 summary">

The data to send during connection which can be used to decide on if a
client should get accepted

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The connection data sent along with connection requests")]
    public byte[] ConnectionData

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### CreatePlayerPrefab

<div class="markdown level1 summary">

Whether or not a player object should be created by default. This value
can be overriden on a case by case basis with ConnectionApproval.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not a player object should be created by default. This value can be overriden on a case by case basis with ConnectionApproval.")]
    public bool CreatePlayerPrefab

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableMessageBuffering

<div class="markdown level1 summary">

Whether or not message buffering should be enabled. This will resolve
most out of order messages during spawn.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not message buffering should be enabled. This will resolve most out of order messages during spawn")]
    public bool EnableMessageBuffering

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableNetworkLogs

<div class="markdown level1 summary">

Whether or not to enable network logs.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool EnableNetworkLogs

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableNetworkVariable

<div class="markdown level1 summary">

Whether or not to enable the NetworkVariable system. This system runs in
the Update loop and will degrade performance, but it can be a huge
convenience. Only turn it off if you have no need for the
NetworkVariable system.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not to enable the NetworkVariable system")]
    public bool EnableNetworkVariable

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableSceneManagement

<div class="markdown level1 summary">

Enables scene management. This will allow network scene switches and
automatic scene diff corrections upon connect. SoftSynced scene objects
wont work with this disabled. That means that disabling SceneManagement
also enables PrefabSync.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Enables scene management. This will allow network scene switches and automatic scene diff corrections upon connect.\nSoftSynced scene objects wont work with this disabled. That means that disabling SceneManagement also enables PrefabSync.")]
    public bool EnableSceneManagement

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableTimeResync

<div class="markdown level1 summary">

If your logic uses the NetworkTime, this should probably be turned off.
If however it's needed to maximize accuracy, this is recommended to be
turned on

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Enable this to resync the NetworkTime after the initial sync")]
    public bool EnableTimeResync

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnsureNetworkVariableLengthSafety

<div class="markdown level1 summary">

Whether or not to ensure that NetworkVariables can be read even if a
client accidentally writes where its not allowed to. This costs some CPU
and bandwdith.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Ensures that NetworkVariables can be read even if a client accidental writes where its not allowed to. This will cost some CPU time and bandwidth")]
    public bool EnsureNetworkVariableLengthSafety

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EventTickrate

<div class="markdown level1 summary">

The amount of times per second internal frame events will occur, e.g.
send checking.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of times per second the internal event loop will run. This includes for example NetworkVariable checking.")]
    public int EventTickrate

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ForceSamePrefabs

<div class="markdown level1 summary">

Whether or not the MLAPI should check for differences in the prefabs at
connection. If you dynamically add prefabs at runtime, turn this OFF

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not the MLAPI should check for differences in the prefab lists at connection")]
    public bool ForceSamePrefabs

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LoadSceneTimeOut

<div class="markdown level1 summary">

The amount of seconds to wait on all clients to load requested scene
before the SwitchSceneProgress onComplete callback, that waits for all
clients to complete loading, is called anyway.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of seconds to wait for all clients to load a requested scene")]
    public int LoadSceneTimeOut

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxReceiveEventsPerTickRate

<div class="markdown level1 summary">

The max amount of messages to process per ReceiveTickrate. This is to
prevent flooding.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The maximum amount of Receive events to poll per Receive tick. This is to prevent flooding and freezing on the server")]
    public int MaxReceiveEventsPerTickRate

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MessageBufferTimeout

<div class="markdown level1 summary">

The amount of time a message should be buffered for without being
consumed. If it is not consumed within this time, it will be dropped.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of time a message should be buffered for without being consumed. If it is not consumed within this time, it will be dropped")]
    public float MessageBufferTimeout

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### NetworkIdRecycleDelay

<div class="markdown level1 summary">

The amount of seconds a NetworkId has to be unused in order for it to be
reused.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of seconds a NetworkId has to unused in order for it to be reused")]
    public float NetworkIdRecycleDelay

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### NetworkPrefabs

<div class="markdown level1 summary">

A list of spawnable prefabs

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The prefabs that can be spawned across the network")]
    [FormerlySerializedAs("NetworkedPrefabs")]
    public List<NetworkPrefab> NetworkPrefabs

#### Field Value

| Type                                                 | Description |
|------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;NetworkPrefab&gt; |             |

### NetworkTickIntervalSec

<div class="markdown level1 summary">

Duration in seconds between network ticks.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Duration in seconds between network ticks")]
    public float NetworkTickIntervalSec

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

    [Tooltip("The NetworkTransport to use")]
    public NetworkTransport NetworkTransport

#### Field Value

| Type             | Description |
|------------------|-------------|
| NetworkTransport |             |

### ProtocolVersion

<div class="markdown level1 summary">

The protocol version. Different versions doesn't talk to each other.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Use this to make two builds incompatible with each other")]
    public ushort ProtocolVersion

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### ReceiveTickrate

<div class="markdown level1 summary">

Amount of times per second the receive queue is emptied and all messages
inside are processed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of times per second the receive queue is emptied from pending incoming messages")]
    public int ReceiveTickrate

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### RecycleNetworkIds

<div class="markdown level1 summary">

If true, NetworkIds will be reused after the NetworkIdRecycleDelay.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("If true, NetworkIds will be reused after the NetworkIdRecycleDelay")]
    public bool RecycleNetworkIds

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RegisteredScenes

<div class="markdown level1 summary">

A list of SceneNames that can be used during networked games.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The Scenes that can be switched to by the server")]
    public List<string> RegisteredScenes

#### Field Value

| Type                                                 | Description |
|------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;System.String&gt; |             |

### RpcHashSize

<div class="markdown level1 summary">

Decides how many bytes to use for Rpc messaging. Leave this to 2 bytes
unless you are facing hash collisions

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The maximum amount of bytes to use for RPC messages. Leave this to 2 unless you are facing hash collisions")]
    public HashSize RpcHashSize

#### Field Value

| Type     | Description |
|----------|-------------|
| HashSize |             |

### TimeResyncInterval

<div class="markdown level1 summary">

If time resync is turned on, this specifies the interval between syncs
in seconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of seconds between resyncs of NetworkTime, if enabled")]
    public int TimeResyncInterval

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### UsePrefabSync

<div class="markdown level1 summary">

If true, all NetworkObjects need to be prefabs and all scene objects
will be replaced on server side which causes all serialization to be
lost. Useful for multi project setups If false, Only non scene objects
have to be prefabs. Scene objects will be matched using their
PrefabInstanceId which can be precomputed globally for a scene at build
time. Useful for single projects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("If true, all NetworkObjects need to be prefabs and all scene objects will be replaced on server side which causes all serialization to be lost. Useful for multi project setups\nIf false, Only non scene objects have to be prefabs. Scene objects will be matched using their PrefabInstanceId which can be precomputed globally for a scene at build time. Useful for single projects")]
    public bool UsePrefabSync

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### CompareConfig(UInt64)

<div class="markdown level1 summary">

Compares a SHA256 hash with the current NetworkConfig instances hash

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CompareConfig(ulong hash)

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

    public void FromBase64(string base64)

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

    public ulong GetConfig(bool cache = true)

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

Returns a base64 encoded version of the config

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string ToBase64()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |
