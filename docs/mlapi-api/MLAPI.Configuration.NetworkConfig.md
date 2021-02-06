---

id: MLAPI.Configuration.NetworkConfig

title: MLAPI.Configuration.NetworkConfig

---

Class NetworkConfig

<div class="markdown level0 summary" markdown="1">

The configuration object used to start server, client and hosts

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Configuration_NetworkConfig_syntax]

    [Serializable]
    public class NetworkConfig

## Fields

### AllowRuntimeSceneChanges [MLAPI_Configuration_NetworkConfig_AllowRuntimeSceneChanges]

<div class="markdown level1 summary" markdown="1">

Whether or not runtime scene changes should be allowed and expected. If
this is true, clients with different initial configurations will not
work together.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    [Tooltip("Whether or not runtime scene changes should be allowed and expected.\n If this is true, clients with different initial configurations will not work together.")]
    public bool AllowRuntimeSceneChanges

#### Field Value [field-value]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ClientConnectionBufferTimeout [MLAPI_Configuration_NetworkConfig_ClientConnectionBufferTimeout]

<div class="markdown level1 summary" markdown="1">

The amount of seconds to wait for handshake to complete before timing
out a client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    [Tooltip("The amount of seconds to wait for the handshake to complete before the client times out")]
    public int ClientConnectionBufferTimeout

#### Field Value [field-value-1]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ConnectionApproval [MLAPI_Configuration_NetworkConfig_ConnectionApproval]

<div class="markdown level1 summary" markdown="1">

Whether or not to use connection approval

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    [Tooltip("Whether or not to force clients to be approved before they connect")]
    public bool ConnectionApproval

#### Field Value [field-value-2]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ConnectionData [MLAPI_Configuration_NetworkConfig_ConnectionData]

<div class="markdown level1 summary" markdown="1">

The data to send during connection which can be used to decide on if a
client should get accepted

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    [Tooltip("The connection data sent along with connection requests")]
    public byte[] ConnectionData

#### Field Value [field-value-3]

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### CreatePlayerPrefab [MLAPI_Configuration_NetworkConfig_CreatePlayerPrefab]

<div class="markdown level1 summary" markdown="1">

Whether or not a player object should be created by default. This value
can be overriden on a case by case basis with ConnectionApproval.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    [Tooltip("Whether or not a player object should be created by default. This value can be overriden on a case by case basis with ConnectionApproval.")]
    public bool CreatePlayerPrefab

#### Field Value [field-value-4]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableEncryption [MLAPI_Configuration_NetworkConfig_EnableEncryption]

<div class="markdown level1 summary" markdown="1">

Whether or not to enable the ECDHE key exchange to allow for encryption
and authentication of messages

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    [Tooltip("Whether or not to enable the ECDHE key exchange to allow for encryption and authentication of messages")]
    public bool EnableEncryption

#### Field Value [field-value-5]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableMessageBuffering [MLAPI_Configuration_NetworkConfig_EnableMessageBuffering]

<div class="markdown level1 summary" markdown="1">

Whether or not message buffering should be enabled. This will resolve
most out of order messages during spawn.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    [Tooltip("Whether or not message buffering should be enabled. This will resolve most out of order messages during spawn")]
    public bool EnableMessageBuffering

#### Field Value [field-value-6]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableNetworkedVar [MLAPI_Configuration_NetworkConfig_EnableNetworkedVar]

<div class="markdown level1 summary" markdown="1">

Whether or not to enable the NetworkedVar system. This system runs in
the Update loop and will degrade performance, but it can be a huge
convenience. Only turn it off if you have no need for the NetworkedVar
system.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    [Tooltip("Whether or not to enable the NetworkedVar system")]
    public bool EnableNetworkedVar

#### Field Value [field-value-7]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableNetworkLogs [MLAPI_Configuration_NetworkConfig_EnableNetworkLogs]

<div class="markdown level1 summary" markdown="1">

Whether or not to enable network logs.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public bool EnableNetworkLogs

#### Field Value [field-value-8]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableSceneManagement [MLAPI_Configuration_NetworkConfig_EnableSceneManagement]

<div class="markdown level1 summary" markdown="1">

Enables scene management. This will allow network scene switches and
automatic scene diff corrections upon connect. SoftSynced scene objects
wont work with this disabled. That means that disabling SceneManagement
also enables PrefabSync.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    [Tooltip("Enables scene management. This will allow network scene switches and automatic scene diff corrections upon connect.\nSoftSynced scene objects wont work with this disabled. That means that disabling SceneManagement also enables PrefabSync.")]
    public bool EnableSceneManagement

#### Field Value [field-value-9]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnableTimeResync [MLAPI_Configuration_NetworkConfig_EnableTimeResync]

<div class="markdown level1 summary" markdown="1">

If your logic uses the NetworkedTime, this should probably be turned
off. If however it's needed to maximize accuracy, this is recommended to
be turned on

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    [Tooltip("Enable this to resync the NetworkedTime after the initial sync")]
    public bool EnableTimeResync

#### Field Value [field-value-10]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EnsureNetworkedVarLengthSafety [MLAPI_Configuration_NetworkConfig_EnsureNetworkedVarLengthSafety]

<div class="markdown level1 summary" markdown="1">

Whether or not to ensure that NetworkedVars can be read even if a client
accidentally writes where its not allowed to. This costs some CPU and
bandwdith.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    [Tooltip("Ensures that NetworkedVars can be read even if a client accidental writes where its not allowed to. This will cost some CPU time and bandwidth")]
    public bool EnsureNetworkedVarLengthSafety

#### Field Value [field-value-11]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### EventTickrate [MLAPI_Configuration_NetworkConfig_EventTickrate]

<div class="markdown level1 summary" markdown="1">

The amount of times per second internal frame events will occur,
examples include SyncedVar send checking.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    [Tooltip("The amount of times per second the internal event loop will run. This includes for example NetworkedVar checking and LagCompensation tracking")]
    public int EventTickrate

#### Field Value [field-value-12]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ForceSamePrefabs [MLAPI_Configuration_NetworkConfig_ForceSamePrefabs]

<div class="markdown level1 summary" markdown="1">

Whether or not the MLAPI should check for differences in the prefabs at
connection. If you dynamically add prefabs at runtime, turn this OFF

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    [Tooltip("Whether or not the MLAPI should check for differences in the prefab lists at connection")]
    public bool ForceSamePrefabs

#### Field Value [field-value-13]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LoadSceneTimeOut [MLAPI_Configuration_NetworkConfig_LoadSceneTimeOut]

<div class="markdown level1 summary" markdown="1">

The amount of seconds to wait on all clients to load requested scene
before the SwitchSceneProgress onComplete callback, that waits for all
clients to complete loading, is called anyway.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    [Tooltip("The amount of seconds to wait for all clients to load a requested scene")]
    public int LoadSceneTimeOut

#### Field Value [field-value-14]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxObjectUpdatesPerTick [MLAPI_Configuration_NetworkConfig_MaxObjectUpdatesPerTick]

<div class="markdown level1 summary" markdown="1">

The maximum amount of NetworkedObject's to process per tick. This is
useful to prevent the MLAPI from hanging a frame Set this to less than
or equal to 0 for unlimited

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    [FormerlySerializedAs("MaxBehaviourUpdatesPerTick")]
    [Tooltip("The maximum amount of NetworkedObject SyncedVars to process per Event tick. This is to prevent freezing")]
    public int MaxObjectUpdatesPerTick

#### Field Value [field-value-15]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxReceiveEventsPerTickRate [MLAPI_Configuration_NetworkConfig_MaxReceiveEventsPerTickRate]

<div class="markdown level1 summary" markdown="1">

The max amount of messages to process per ReceiveTickrate. This is to
prevent flooding.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    [Tooltip("The maximum amount of Receive events to poll per Receive tick. This is to prevent flooding and freezing on the server")]
    public int MaxReceiveEventsPerTickRate

#### Field Value [field-value-16]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MessageBufferTimeout [MLAPI_Configuration_NetworkConfig_MessageBufferTimeout]

<div class="markdown level1 summary" markdown="1">

The amount of time a message should be buffered for without being
consumed. If it is not consumed within this time, it will be dropped.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    [Tooltip("The amount of time a message should be buffered for without being consumed. If it is not consumed within this time, it will be dropped")]
    public float MessageBufferTimeout

#### Field Value [field-value-17]

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### NetworkedPrefabs [MLAPI_Configuration_NetworkConfig_NetworkedPrefabs]

<div class="markdown level1 summary" markdown="1">

A list of spawnable prefabs

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    [Tooltip("The prefabs that can be spawned across the network")]
    public List<NetworkedPrefab> NetworkedPrefabs

#### Field Value [field-value-18]

| Type                                               | Description |
|----------------------------------------------------|-------------|
| System.Collections.Generic.List\<NetworkedPrefab\> |             |

### NetworkIdRecycleDelay [MLAPI_Configuration_NetworkConfig_NetworkIdRecycleDelay]

<div class="markdown level1 summary" markdown="1">

The amount of seconds a NetworkId has to be unused in order for it to be
reused.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    [Tooltip("The amount of seconds a NetworkId has to unused in order for it to be reused")]
    public float NetworkIdRecycleDelay

#### Field Value [field-value-19]

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### NetworkTransport [MLAPI_Configuration_NetworkConfig_NetworkTransport]

<div class="markdown level1 summary" markdown="1">

The transport hosts the sever uses

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    [Tooltip("The NetworkTransport to use")]
    public Transport NetworkTransport

#### Field Value [field-value-20]

| Type      | Description |
|-----------|-------------|
| Transport |             |

### ProtocolVersion [MLAPI_Configuration_NetworkConfig_ProtocolVersion]

<div class="markdown level1 summary" markdown="1">

The protocol version. Different versions doesn't talk to each other.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    [Tooltip("Use this to make two builds incompatible with each other")]
    public ushort ProtocolVersion

#### Field Value [field-value-21]

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### ReceiveTickrate [MLAPI_Configuration_NetworkConfig_ReceiveTickrate]

<div class="markdown level1 summary" markdown="1">

Amount of times per second the receive queue is emptied and all messages
inside are processed.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    [Tooltip("The amount of times per second the receive queue is emptied from pending incoming messages")]
    public int ReceiveTickrate

#### Field Value [field-value-22]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### RecycleNetworkIds [MLAPI_Configuration_NetworkConfig_RecycleNetworkIds]

<div class="markdown level1 summary" markdown="1">

If true, NetworkIds will be reused after the NetworkIdRecycleDelay.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    [Tooltip("If true, NetworkIds will be reused after the NetworkIdRecycleDelay")]
    public bool RecycleNetworkIds

#### Field Value [field-value-23]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RegisteredScenes [MLAPI_Configuration_NetworkConfig_RegisteredScenes]

<div class="markdown level1 summary" markdown="1">

A list of SceneNames that can be used during networked games.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    [Tooltip("The Scenes that can be switched to by the server")]
    public List<string> RegisteredScenes

#### Field Value [field-value-24]

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.String\> |             |

### RpcHashSize [MLAPI_Configuration_NetworkConfig_RpcHashSize]

<div class="markdown level1 summary" markdown="1">

Decides how many bytes to use for Rpc messaging. Leave this to 2 bytes
unless you are facing hash collisions

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    [Tooltip("The maximum amount of bytes to use for RPC messages. Leave this to 2 unless you are facing hash collisions")]
    public HashSize RpcHashSize

#### Field Value [field-value-25]

| Type     | Description |
|----------|-------------|
| HashSize |             |

### SecondsHistory [MLAPI_Configuration_NetworkConfig_SecondsHistory]

<div class="markdown level1 summary" markdown="1">

The amount of seconds to keep a lag compensation position history

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    [Tooltip("The amount of seconds to keep lag compensation position history")]
    public int SecondsHistory

#### Field Value [field-value-26]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ServerBase64PfxCertificate [MLAPI_Configuration_NetworkConfig_ServerBase64PfxCertificate]

<div class="markdown level1 summary" markdown="1">

Pfx file in base64 encoding containing private and public key

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    [Tooltip("The certificate in base64 encoded PFX format")]
    [TextArea]
    public string ServerBase64PfxCertificate

#### Field Value [field-value-27]

| Type          | Description |
|---------------|-------------|
| System.String |             |

### SignKeyExchange [MLAPI_Configuration_NetworkConfig_SignKeyExchange]

<div class="markdown level1 summary" markdown="1">

Whether or not to enable signed diffie hellman key exchange.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    [Tooltip("Whether or not to sign the diffie hellman key exchange to prevent MITM attacks on")]
    public bool SignKeyExchange

#### Field Value [field-value-28]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### TimeResyncInterval [MLAPI_Configuration_NetworkConfig_TimeResyncInterval]

<div class="markdown level1 summary" markdown="1">

If time resync is turned on, this specifies the interval between syncs
in seconds.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    [Tooltip("The amount of seconds between resyncs of NetworkedTime, if enabled")]
    public int TimeResyncInterval

#### Field Value [field-value-29]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### UsePrefabSync [MLAPI_Configuration_NetworkConfig_UsePrefabSync]

<div class="markdown level1 summary" markdown="1">

If true, all NetworkedObject's need to be prefabs and all scene objects
will be replaced on server side which causes all serialization to be
lost. Useful for multi project setups If false, Only non scene objects
have to be prefabs. Scene objects will be matched using their
PrefabInstanceId which can be precomputed globally for a scene at build
time. Useful for single projects

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    [Tooltip("If true, all NetworkedObject's need to be prefabs and all scene objects will be replaced on server side which causes all serialization to be lost. Useful for multi project setups\nIf false, Only non scene objects have to be prefabs. Scene objects will be matched using their PrefabInstanceId which can be precomputed globally for a scene at build time. Useful for single projects")]
    public bool UsePrefabSync

#### Field Value [field-value-30]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Properties 

### ServerX509Certificate [MLAPI_Configuration_NetworkConfig_ServerX509Certificate]

<div class="markdown level1 summary" markdown="1">

Gets the currently in use certificate

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public X509Certificate2 ServerX509Certificate { get; }

#### Property Value [property-value]

| Type                                                           | Description |
|----------------------------------------------------------------|-------------|
| System.Security.Cryptography.X509Certificates.X509Certificate2 |             |

### ServerX509CertificateBytes [MLAPI_Configuration_NetworkConfig_ServerX509CertificateBytes]

<div class="markdown level1 summary" markdown="1">

Gets the cached binary representation of the server certificate that's
used for handshaking

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    public byte[] ServerX509CertificateBytes { get; }

#### Property Value [property-value-1]

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

## Methods 

### CompareConfig(UInt64) [MLAPI_Configuration_NetworkConfig_CompareConfig_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Compares a SHA256 hash with the current NetworkingConfiguration
instances hash

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-33]

    public bool CompareConfig(ulong hash)

#### Parameters [parameters]

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt64 | hash |             |

#### Returns [returns]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### FromBase64(String) [MLAPI_Configuration_NetworkConfig_FromBase64_System_String_]

<div class="markdown level1 summary" markdown="1">

Sets the NetworkConfig data with that from a base64 encoded version

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-34]

    public void FromBase64(string base64)

#### Parameters [parameters-1]

| Type          | Name   | Description                |
|---------------|--------|----------------------------|
| System.String | base64 | The base64 encoded version |

### GetConfig(Boolean) [MLAPI_Configuration_NetworkConfig_GetConfig_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Gets a SHA256 hash of parts of the NetworkingConfiguration instance

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-35]

    public ulong GetConfig(bool cache = true)

#### Parameters [parameters-2]

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | cache |             |

#### Returns [returns-1]

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ToBase64() [MLAPI_Configuration_NetworkConfig_ToBase64]

<div class="markdown level1 summary" markdown="1">

Returns a base64 encoded version of the config

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-36]

    public string ToBase64()

#### Returns [returns-2]

| Type          | Description |
|---------------|-------------|
| System.String |             |
