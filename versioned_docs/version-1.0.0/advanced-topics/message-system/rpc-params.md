---
id: rpc-params
title: RPC Params
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

Both `ServerRpc` and `ClientRpc` methods can be configured either by `[ServerRpc]` and `[ClientRpc]` attributes at compile-time and `ServerRpcParams` and `ClientRpcParams` at runtime.

Developers can put `ServerRpcParams` and `ClientRpcParams` as the last parameter (optionally). They can also be used for a consolidated space for `XXXRpcReceiveParams` and `XXXRpcSendParams`.

The network framework will inject the corresponding `XXXRpcReceiveParams` to what the user had declared in code when invoked by network receive handling (framework code) and will consume `XXXRpcSendParams` when invoked by RPC send call (user code).


## ServerRpc Params

See the following for `ServerRpc` params:

``` csharp
// Both ServerRpc methods below are fine, `ServerRpcParams` is completely optional

[ServerRpc]
void AbcdServerRpc(int somenumber) { /* ... */ }

[ServerRpc]
void XyzwServerRpc(int somenumber, ServerRpcParams serverRpcParams = default) { /* ... */ }
```

[ServerRpcParams Documentation](../../api/Unity.Netcode.ServerRpcParams)

## ClientRpc Params

See the following for `ClientRpc` params:

```csharp
// Both ClientRpc methods below are fine, `ClientRpcParams` is completely optional

[ClientRpc]
void AbcdClientRpc(int framekey) { /* ... */ }

[ClientRpc]
void XyzwClientRpc(int framekey, ClientRpcParams clientRpcParams = default) { /* ... */ }
```

[ClientRpcParams Documentation](../../api/Unity.Netcode.ClientRpcParams)

:::tip
`ClientRpcSendParams`'s `TargetClientIds` property is a `ulong[]` which means everytime you try to specify a subset of target clients or even a single client target, you will have to allocate a `new ulong[]`. This pattern could quickly lead into lots of heap allocations and pressure GC which would cause GC spikes at runtime. We suggest developers cache their `ulong[]` variables or use an array pool to cycle `ulong[]` instances so that it would cause less heap allocations.
:::
