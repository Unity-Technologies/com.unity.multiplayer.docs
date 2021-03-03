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

### EnableEncryption

<div class="markdown level1 summary">

Whether or not to enable the ECDHE key exchange to allow for encryption
and authentication of messages

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not to enable the ECDHE key exchange to allow for encryption and authentication of messages")]
    public bool EnableEncryption

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

### EnableNetworkedVar

<div class="markdown level1 summary">

Whether or not to enable the NetworkedVar system. This system runs in
the Update loop and will degrade performance, but it can be a huge
convenience. Only turn it off if you have no need for the NetworkedVar
system.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not to enable the NetworkedVar system")]
    public bool EnableNetworkedVar

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

If your logic uses the NetworkedTime, this should probably be turned
off. If however it's needed to maximize accuracy, this is recommended to
be turned on

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Enable this to resync the NetworkedTime after the initial sync")]
    public bool EnableTimeResync

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnsureNetworkedVarLengthSafety

<div class="markdown level1 summary">

Whether or not to ensure that NetworkedVars can be read even if a client
accidentally writes where its not allowed to. This costs some CPU and
bandwdith.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Ensures that NetworkedVars can be read even if a client accidental writes where its not allowed to. This will cost some CPU time and bandwidth")]
    public bool EnsureNetworkedVarLengthSafety

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EventTickrate

<div class="markdown level1 summary">

The amount of times per second internal frame events will occur,
examples include SyncedVar send checking.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of times per second the internal event loop will run. This includes for example NetworkedVar checking and LagCompensation tracking")]
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

### MaxObjectUpdatesPerTick

<div class="markdown level1 summary">

The maximum amount of NetworkedObject's to process per tick. This is
useful to prevent the MLAPI from hanging a frame Set this to less than
or equal to 0 for unlimited

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [FormerlySerializedAs("MaxBehaviourUpdatesPerTick")]
    [Tooltip("The maximum amount of NetworkedObject SyncedVars to process per Event tick. This is to prevent freezing")]
    public int MaxObjectUpdatesPerTick

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

### NetworkedPrefabs

<div class="markdown level1 summary">

A list of spawnable prefabs

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The prefabs that can be spawned across the network")]
    public List<NetworkedPrefab> NetworkedPrefabs

#### Field Value

| Type                                                   | Description |
|--------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;NetworkedPrefab&gt; |             |

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

### NetworkTransport

<div class="markdown level1 summary">

The transport hosts the sever uses

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The NetworkTransport to use")]
    public Transport NetworkTransport

#### Field Value

| Type      | Description |
|-----------|-------------|
| Transport |             |

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

### SecondsHistory

<div class="markdown level1 summary">

The amount of seconds to keep a lag compensation position history

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of seconds to keep lag compensation position history")]
    public int SecondsHistory

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ServerBase64PfxCertificate

<div class="markdown level1 summary">

Pfx file in base64 encoding containing private and public key

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The certificate in base64 encoded PFX format")]
    [TextArea]
    public string ServerBase64PfxCertificate

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### SignKeyExchange

<div class="markdown level1 summary">

Whether or not to enable signed diffie hellman key exchange.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("Whether or not to sign the diffie hellman key exchange to prevent MITM attacks on")]
    public bool SignKeyExchange

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### TimeResyncInterval

<div class="markdown level1 summary">

If time resync is turned on, this specifies the interval between syncs
in seconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("The amount of seconds between resyncs of NetworkedTime, if enabled")]
    public int TimeResyncInterval

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### UsePrefabSync

<div class="markdown level1 summary">

If true, all NetworkedObject's need to be prefabs and all scene objects
will be replaced on server side which causes all serialization to be
lost. Useful for multi project setups If false, Only non scene objects
have to be prefabs. Scene objects will be matched using their
PrefabInstanceId which can be precomputed globally for a scene at build
time. Useful for single projects

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    [Tooltip("If true, all NetworkedObject's need to be prefabs and all scene objects will be replaced on server side which causes all serialization to be lost. Useful for multi project setups\nIf false, Only non scene objects have to be prefabs. Scene objects will be matched using their PrefabInstanceId which can be precomputed globally for a scene at build time. Useful for single projects")]
    public bool UsePrefabSync

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Properties 

### ServerX509Certificate

<div class="markdown level1 summary">

Gets the currently in use certificate

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public X509Certificate2 ServerX509Certificate { get; }

#### Property Value

| Type                                                           | Description |
|----------------------------------------------------------------|-------------|
| System.Security.Cryptography.X509Certificates.X509Certificate2 |             |

### ServerX509CertificateBytes

<div class="markdown level1 summary">

Gets the cached binary representation of the server certificate that's
used for handshaking

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte[] ServerX509CertificateBytes { get; }

#### Property Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

## Methods 

### CompareConfig(UInt64)

<div class="markdown level1 summary">

Compares a SHA256 hash with the current NetworkingConfiguration
instances hash

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

Gets a SHA256 hash of parts of the NetworkingConfiguration instance

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
