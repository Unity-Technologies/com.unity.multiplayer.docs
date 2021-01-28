---
id: clientrpc
title: ClientRpc 
sidebar_label: ClientRpc 
---

A ``ClientRpc`` can be invoked by the server to be executed on a client.

## Declaring
Developers can declare a ``ClientRpc`` by marking a method with ``[ClientRpc]`` attribute and making sure to have ``ClientRpc`` suffix in the method name.

```csharp
[ClientRpc]
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```
## Invoking
Developers can invoke a ``ClientRpc`` by making a direct function call with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PongClientRpc(Time.frameCount, "hello, world"); // Server -> Client
    }
}
```


Marking method with ``[ClientRpc]`` attribute and putting ClientRpc suffix to the method name are required, otherwise it will prompt error messages:

```csharp
// Error: Invalid, missing 'ClientRpc' suffix in the method name
[ClientRpc]
void Pong(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ClientRpc] attribute on the method
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

``[ClientRpc]`` attribute and matching ``...ClientRpc`` suffix in the method name are there to make it crystal clear for RPC call sites to know when they are executing an RPC, it will be replicated and executed on the client-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it is a [ServerRpc](ServerRpc.md) or ClientRpc:

```csharp
Pong(somenumber, sometext); // Is this an RPC call?

PongRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PongClientRpc(somenumber, sometext); // This is clearly a ClientRpc call
```