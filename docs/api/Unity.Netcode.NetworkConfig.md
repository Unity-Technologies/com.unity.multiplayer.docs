---
id: Unity.Netcode.NetworkConfig
title: Unity.Netcode.NetworkConfig
---

# Class NetworkConfig


The configuration object used to start server, client and hosts







##### Inheritance


System.Object




NetworkConfig






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
[Serializable]
public class NetworkConfig
```



### Fields

#### ClientConnectionBufferTimeout


The amount of seconds for the server to wait for the connection approval
handshake to complete before the client is disconnected.

If the timeout is reached before approval is completed the client will
be disconnected.






##### Declaration


``` lang-csharp
public int ClientConnectionBufferTimeout
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Remarks


The period begins after the Connect is received on the server. The
period ends once the server finishes processing a
Unity.Netcode.ConnectionRequestMessage from the client.

This setting is independent of any Transport-level timeouts that may be
in effect. It covers the time between the connection being established
on the Transport layer, the client sending a
Unity.Netcode.ConnectionRequestMessage, and the server processing that
message through ConnectionApproval.

This setting is server-side only.



#### ConnectionApproval


Whether or not to use connection approval






##### Declaration


``` lang-csharp
public bool ConnectionApproval
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ConnectionData


The data to send during connection which can be used to decide on if a
client should get accepted






##### Declaration


``` lang-csharp
public byte[] ConnectionData
```



##### Field Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

#### EnableNetworkLogs


Whether or not to enable network logs.






##### Declaration


``` lang-csharp
public bool EnableNetworkLogs
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### EnableSceneManagement


Enables scene management. This will allow network scene switches and
automatic scene difference corrections upon connect. SoftSynced scene
objects wont work with this disabled. That means that disabling
SceneManagement also enables PrefabSync.






##### Declaration


``` lang-csharp
public bool EnableSceneManagement
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### EnableTimeResync


If your logic uses the NetworkTime, this should probably be turned off.
If however it's needed to maximize accuracy, this is recommended to be
turned on






##### Declaration


``` lang-csharp
public bool EnableTimeResync
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### EnsureNetworkVariableLengthSafety


Whether or not to ensure that NetworkVariables can be read even if a
client accidentally writes where its not allowed to. This costs some CPU
and bandwidth.






##### Declaration


``` lang-csharp
public bool EnsureNetworkVariableLengthSafety
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### ForceSamePrefabs


Whether or not the netcode should check for differences in the prefabs
at connection. If you dynamically add prefabs at runtime, turn this OFF






##### Declaration


``` lang-csharp
public bool ForceSamePrefabs
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### LoadSceneTimeOut


The amount of seconds to wait for all clients to load or unload a
requested scene






##### Declaration


``` lang-csharp
public int LoadSceneTimeOut
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### NetworkIdRecycleDelay


The amount of seconds a NetworkId has to be unused in order for it to be
reused.






##### Declaration


``` lang-csharp
public float NetworkIdRecycleDelay
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### NetworkTransport


The transport hosts the sever uses






##### Declaration


``` lang-csharp
public NetworkTransport NetworkTransport
```



##### Field Value

| Type             | Description |
|------------------|-------------|
| NetworkTransport |             |

#### PlayerPrefab


The default player prefab






##### Declaration


``` lang-csharp
public GameObject PlayerPrefab
```



##### Field Value

| Type       | Description |
|------------|-------------|
| GameObject |             |

#### ProtocolVersion


The protocol version. Different versions doesn't talk to each other.






##### Declaration


``` lang-csharp
public ushort ProtocolVersion
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### RecycleNetworkIds


If true, NetworkIds will be reused after the NetworkIdRecycleDelay.






##### Declaration


``` lang-csharp
public bool RecycleNetworkIds
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### RpcHashSize


Decides how many bytes to use for Rpc messaging. Leave this to 2 bytes
unless you are facing hash collisions






##### Declaration


``` lang-csharp
public HashSize RpcHashSize
```



##### Field Value

| Type     | Description |
|----------|-------------|
| HashSize |             |

#### RttAverageSamples


The number of RTT samples that is kept as an average for calculations






##### Declaration


``` lang-csharp
public const int RttAverageSamples = 5
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RttWindowSize


The number of slots used for RTT calculations. This is the maximum
amount of in-flight messages






##### Declaration


``` lang-csharp
public const int RttWindowSize = 64
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### SpawnTimeout


The amount of time a message should be buffered if the asset or object
needed to process it doesn't exist yet. If the asset is not added/object
is not spawned within this time, it will be dropped.






##### Declaration


``` lang-csharp
public float SpawnTimeout
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### TickRate


The tickrate of network ticks. This value controls how often netcode
runs user code and sends out data.






##### Declaration


``` lang-csharp
public uint TickRate
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

#### TimeResyncInterval


If time re-sync is turned on, this specifies the interval between syncs
in seconds.






##### Declaration


``` lang-csharp
public int TimeResyncInterval
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### CompareConfig(UInt64)


Compares a SHA256 hash with the current NetworkConfig instances hash






##### Declaration


``` lang-csharp
public bool CompareConfig(ulong hash)
```



##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt64 | hash |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### FromBase64(String)


Sets the NetworkConfig data with that from a base64 encoded version






##### Declaration


``` lang-csharp
public void FromBase64(string base64)
```



##### Parameters

| Type          | Name   | Description                |
|---------------|--------|----------------------------|
| System.String | base64 | The base64 encoded version |

#### GetConfig(Boolean)


Gets a SHA256 hash of parts of the NetworkConfig instance






##### Declaration


``` lang-csharp
public ulong GetConfig(bool cache = true)
```



##### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | cache |             |

##### Returns

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ToBase64()


Returns a base64 encoded version of the configuration






##### Declaration


``` lang-csharp
public string ToBase64()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |



