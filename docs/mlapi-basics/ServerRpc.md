---
id: serverrpc
title: ServerRpc
sidebar_label: ServerRpc
---

A ``ServerRpc`` can be invoked by a client to be executed on the server.

Developers can declare a ``ServerRpc``by marking a method with ``[ServerRpc]`` attribute and making sure to have ``ServerRpc`` suffix in the method name.

```csharp
[ServerRpc]
void PingServerRpc(int somenumber, string sometext) { /* ... */ }
```
Developers can invoke a ``ServerRpc`` by making a direct function call with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PingServerRpc(Time.frameCount, "hello, world"); // Client -> Server
    }
}
```

Marking method with ``[ServerRpc]`` attribute and putting ``ServerRpc`` suffix to the method name are required, otherwise it will prompt error messages:

```csharp
// Error: Invalid, missing 'ServerRpc' suffix in the method name
[ServerRpc]
void Ping(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ServerRpc] attribute on the method
void PingServerRpc(int somenumber, string sometext) { /* ... */ }
```

``[ServerRpc]`` attribute and matching ``...ServerRpc`` suffix in the method name are there to make it crystal clear for RPC call sites to know when they are executing an RPC, it will be replicated and executed on the server-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it is a ServerRpc or [ClientRpc](ClientRpc.md):

```csharp
Ping(somenumber, sometext); // Is this an RPC call?

PingRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PingServerRpc(somenumber, sometext); // This is clearly a ServerRpc call
```