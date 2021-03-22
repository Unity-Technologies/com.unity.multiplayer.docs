---
id: rpc-params
title: RPC Params
---

Both `ServerRpc` and `ClientRpc` methods can be configured either by `[ServerRpc]` and `[ClientRpc]` attributes at compile-time and `ServerRpcParams` and `ClientRpcParams` at runtime.

Developers can put `ServerRpcParams` and `ClientRpcParams` as the last parameter (optionally). They can also be used for a consolidated space for `XXXRpcReceiveParams` and `XXXRpcSendParams`.

The network framework will inject the corresponding `XXXRpcReceiveParams` to what the user had declared in code when invoked by network receive handling (framework code) and will consume `XXXRpcSendParams` when invoked by RPC send call (user code).


## ServerRpc Params

See the following for `ServerRpc` params:

``` csharp
struct ServerRpcSendParams
{
}

struct ServerRpcReceiveParams
{
    // who sent the RPC?
    ulong SenderClientId;
}

struct ServerRpcParams
{
    ServerRpcSendParams Send;
    ServerRpcReceiveParams Receive;
}


// Both ServerRPC methods below are fine, `ServerRpcParams` is completely optional

[ServerRpc]
void AbcdServerRpc(int somenumber) { /* ... */ }

[ServerRpc]
void XyzwServerRpc(int somenumber, ServerRpcParams rpcParams = default) { /* ... */ }
```

## ClientRpc Params

See the following for `ClientRpc` params:

```csharp
struct ClientRpcSendParams
{
    // who are the target clients?
    ulong[] TargetClientIds;
}

struct ClientRpcReceiveParams
{
}

struct ClientRpcParams
{
    ClientRpcSendParams Send;
    ClientRpcReceiveParams Receive;
}


// Both ClientRPC methods below are fine, `ClientRpcParams` is completely optional

[ClientRpc]
void AbcdClientRpc(int framekey) { /* ... */ }

[ClientRpc]
void XyzwClientRpc(int framekey, ClientRpcParams rpcParams = default) { /* ... */ }
```