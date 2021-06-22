---
id: networkobject-networkbehaviour
title: NetworkObject & NetworkBehaviour
sidebar_label: NetworkObject & NetworkBehaviour
---




`NetworkObject` and `NetworkBehaviour` instances will be serialized by built-in serialization code if instances are not `null` and `NetworkObject.IsSpawned == true`. Passing a null instance or a `NetworkObject` with `IsSpawned == false` or a `NetworkBehaviour` with `NetworkObject.IsSpawned == false` will still lead into RPC replication but remote side will have `null` values for the parameters. Ids of spawned `NetworkObject` and `NetworkBehaviour` instances will be resolved by running NetworkManager instance, and those ids will be the links between local and remote instances. Also, those ids will be used when serializing `NetworkObject` and `NetworkBehaviour` instances as a part of an RPC call.

```csharp
[ServerRpc]
void MyServerRpc(NetworkObject nobj, NetworkBehaviour nbhv) { /* ... */ }

void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        MyServerRpc(/* NetworkObject = */ this.NetworkObject, /* NetworkBehaviour = */ this); // Client -> Server
    }
}
```