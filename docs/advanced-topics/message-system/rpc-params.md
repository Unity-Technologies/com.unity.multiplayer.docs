---
id: rpc-params
title: RPC Params
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

`Rpc` methods can be configured by `[Rpc]` at compile-time and `RpcParams` at runtime. Likewise, the **legacy** `ServerRpc` and `ClientRpc` methods can be configured either by `[ServerRpc]` and `[ClientRpc]` attributes at compile-time and `ServerRpcParams` and `ClientRpcParams` at runtime.

Developers can put, `RpcParams`, `ServerRpcParams`, or `ClientRpcParams` as the last parameter (optionally, as appropriate for the type of RPC). They can also be used for a consolidated space for `XXXRpcReceiveParams` and `XXXRpcSendParams`.

The network framework will inject the corresponding `XXXRpcReceiveParams` to what the user had declared in code when invoked by network receive handling (framework code) and will consume `XXXRpcSendParams` when invoked by RPC send call (user code).

## Rpc Params

See the following for `Rpc` params:

```csharp
// Both Rpc methods below are fine, `ServerRpcParams` is completely optional

[Rpc(SendTo.Server)]
void AbcdServerRpc(int somenumber) { /* ... */ }

[Rpc(SendTo.Server)]
void XyzwServerRpc(int somenumber, RpcParams rpcParams = default) { /* ... */ }
```

For those accustomed to the legacy `ServerRpc` and `ClientRpc` parameters, there are a few differences with `Rpc` params:

- `RpcParams` defines implicit conversion operators for `BaseRpcTarget` (which is used to change the destination of an RPC at runtime) and `LocalDeferMode` (which is used to change how an RPC delivered to the local process is handled - either executed immediately or deferred to the beginning of the next frame).
- Changing destination of an RPC is done using the properties and methods of `RpcTarget` (each `NetworkBehaviour` contains a reference to the shared `RpcTarget` object, as does `NetworkManager`.) This allows conveniently selecting various common targets (Server, NotServer, Owner, NotOwner, etc), as well as custom client lists using `RpcTarget.Single()` (to send to one client ID), `RpcTarget.Group()` (to send to multiple client IDs),  and`RpcTarget.Not()` (to send to everyone except for the specified client ID or list of client IDs)
- `RpcParams` do not allow overriding the destination at runtime unless either the default target is `SendTo.SpecifiedInParams` or `AllowTargetOverride = true` is passed to the attribute.

```csharp
[Rpc(SendTo.Server)]
void ServerRpc(RpcParams rpcParams = default) { /* ... */ }

[Rpc(SendTo.SpecifiedInParams)]
void RuntimeSpecifiedRpc(RpcParams rpcParams = default) { /* ... */ }

[Rpc(SendTo.Server, AllowTargetOverride = true)]
void OverridableServerRpc(RpcParams rpcParams = default) { /* ... */ }

// Throws an exception: SendTo.Server cannot be overriden for ServerRpc
ServerRpc(RpcTarget.NotServer);
ServerRpc(RpcTarget.Single(someClientId));

// Works
RuntimeSpecifiedRpc(RpcTarget.NotServer);
RuntimeSpecifiedRpc(RpcTarget.Single(someClientId));

// Works
OverridableServerRpc(RpcTarget.NotServer);
OverridableServerRpc(RpcTarget.Single(someClientId));
```

:::note
For various reasons, `BaseRpcTarget` is not intended to be extended by user code. If you have a custom use case that requires a special target, we recommend creating a wrapper method that returns `RpcTarget.Single()` or `RpcTarget.Group()`, which should be able to satisfy most if not all user needs.
:::

## ServerRpc Params

:::warning
ClientRpc and ServerRpc are legacy features of Netcode for GameObjects, and have been supplanted by the universal Rpc attribute. This documentation is provided for legacy use, but we recommend all current projects use [Rpc](rpc.md) instead.
:::

See the following for `ServerRpc` params:

``` csharp
// Both ServerRpc methods below are fine, `ServerRpcParams` is completely optional

[ServerRpc]
void AbcdServerRpc(int somenumber) { /* ... */ }

[ServerRpc]
void XyzwServerRpc(int somenumber, ServerRpcParams serverRpcParams = default) { /* ... */ }
```

[ServerRpcParams Documentation](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.ServerRpcParams)

## ClientRpc Params

:::warning
ClientRpc and ServerRpc are legacy features of Netcode for GameObjects, and have been supplanted by the universal Rpc attribute. This documentation is provided for legacy use, but we recommend all current projects use [Rpc](rpc.md) instead.
:::

See the following for `ClientRpc` params:

```csharp
// Both ClientRpc methods below are fine, `ClientRpcParams` is completely optional

[ClientRpc]
void AbcdClientRpc(int framekey) { /* ... */ }

[ClientRpc]
void XyzwClientRpc(int framekey, ClientRpcParams clientRpcParams = default) { /* ... */ }
```

[ClientRpcParams Documentation](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.ClientRpcParams)

:::tip
`ClientRpcSendParams`'s `TargetClientIds` property is a `ulong[]` which means everytime you try to specify a subset of target clients or even a single client target, you will have to allocate a `new ulong[]`. This pattern can quickly lead into lots of heap allocations and pressure GC which would cause GC spikes at runtime. We suggest developers cache their `ulong[]` variables or use an array pool to cycle `ulong[]` instances so that it would cause less heap allocations.
:::
