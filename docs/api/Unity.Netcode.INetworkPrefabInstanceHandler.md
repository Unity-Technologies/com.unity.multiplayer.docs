---
id: Unity.Netcode.INetworkPrefabInstanceHandler
title: Unity.Netcode.INetworkPrefabInstanceHandler
---

# Interface INetworkPrefabInstanceHandler


Interface for customizing, overriding, spawning, and destroying Network
Prefabs Used by NetworkPrefabHandler






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public interface INetworkPrefabInstanceHandler
```



### Methods

#### Destroy(NetworkObject)


Invoked on Client and Server Once an implementation is registered with
the NetworkPrefabHandler, this method will be called when a Network
Prefab associated NetworkObject is:

Server Side: destroyed or despawned with the destroy parameter equal to
true If Despawn(Boolean) is invoked with the default destroy parameter
(i.e. false) then this method will NOT be invoked!

Client Side: destroyed when the client receives a destroy object message
from the server or host.

Note on Pooling: When this method is invoked, you do not need to destroy
the NetworkObject as long as you want your pool to persist. The most
common approach is to make the NetworkObject inactive by calling .






##### Declaration


``` lang-csharp
void Destroy(NetworkObject networkObject)
```



##### Parameters

| Type          | Name          | Description                       |
|---------------|---------------|-----------------------------------|
| NetworkObject | networkObject | The NetworkObject being destroyed |

#### Instantiate(UInt64, Vector3, Quaternion)


Client Side Only Once an implementation is registered with the
NetworkPrefabHandler, this method will be called every time a Network
Prefab associated NetworkObject is spawned on clients

Note On Hosts: Use the RegisterHostGlobalObjectIdHashValues(GameObject,
List\<GameObject\>) method to register all targeted NetworkPrefab
overrides manually since the host will be acting as both a server and
client.

Note on Pooling: If you are using a NetworkObject pool, don't forget to
make the NetworkObject active via the method.






##### Declaration


``` lang-csharp
NetworkObject Instantiate(ulong ownerClientId, Vector3 position, Quaternion rotation)
```



##### Parameters

| Type          | Name          | Description                                                           |
|---------------|---------------|-----------------------------------------------------------------------|
| System.UInt64 | ownerClientId | the owner for the NetworkObject to be instantiated                    |
| Vector3       | position      | the initial/default position for the NetworkObject to be instantiated |
| Quaternion    | rotation      | the initial/default rotation for the NetworkObject to be instantiated |

##### Returns

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |



