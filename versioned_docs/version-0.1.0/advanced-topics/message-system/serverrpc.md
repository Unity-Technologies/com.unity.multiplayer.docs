---
id: serverrpc
title: ServerRpc
---

A `ServerRpc` can be invoked by a client to be executed on the server.

## Declare a ServerRpc
Developers can declare a `ServerRpc` by marking a method with `[ServerRpc]` attribute and making sure to have `ServerRpc` suffix in the method name.

```csharp
[ServerRpc]
void PingServerRpc(int somenumber, string sometext) { /* ... */ }
```

## Invoke a ServerRpc

Developers can invoke a `ServerRpc` by making a direct function call with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PingServerRpc(Time.frameCount, "hello, world"); // Client -> Server
    }
}
```

Marking a method with the `[ServerRpc]` attribute and putting `ServerRpc` suffix to the method name are required, otherwise it will prompt error messages:

```csharp
// Error: Invalid, missing 'ServerRpc' suffix in the method name
[ServerRpc]
void Ping(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ServerRpc] attribute on the method
void PingServerRpc(int somenumber, string sometext) { /* ... */ }
```

`[ServerRpc]` attribute and matching `...ServerRpc` suffix in the method name are there to make it crystal clear for RPC call sites to know when they're executing an RPC. It will be replicated and executed on the server-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it's a `ServerRpc` or [`ClientRpc`](clientrpc.md):

```csharp
Ping(somenumber, sometext); // Is this an RPC call?

PingRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PingServerRpc(somenumber, sometext); // This is clearly a ServerRpc call
```

:::note
To have ServerRPC start from ClientRPC, your scripts should directly derive from `NetworkBehaviour` with RPCs. Otherwise, you will encounter errors and issues due to `NetworkBehaviourILPP` not correctly iterating over nested `NetworkBehaviour` types.
:::

## See also

* [ClientRpc](clientrpc.md)
* [RPC Params](rpc-params.md)