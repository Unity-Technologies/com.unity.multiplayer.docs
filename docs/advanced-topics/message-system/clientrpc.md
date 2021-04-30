---
id: clientrpc
title: ClientRpc
---

A `ClientRpc` can be invoked by the server to be executed on a client.

## Declare a ClientRpc
Developers can declare a `ClientRpc` by marking a method with `[ClientRpc]` attribute and making sure to have `ClientRpc` suffix in the method name.

```csharp
[ClientRpc]
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

## Invoke a ClientRpc

Developers can invoke a `ClientRpc` by making a direct function call with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PongClientRpc(Time.frameCount, "hello, world"); // Server -> Client
    }
}
```

Marking method with ``[ClientRpc]`` attribute and putting `ClientRpc` suffix to the method name are required, otherwise it will prompt error messages:

```csharp
// Error: Invalid, missing 'ClientRpc' suffix in the method name
[ClientRpc]
void Pong(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ClientRpc] attribute on the method
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

`[ClientRpc]` attribute and matching `...ClientRpc` suffix in the method name are there to make it crystal clear for RPC call sites to know when they are executing an RPC, it will be replicated and executed on the client-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it is a [ServerRpc](serverrpc.md) or `ClientRpc`:

```csharp
Pong(somenumber, sometext); // Is this an RPC call?

PongRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PongClientRpc(somenumber, sometext); // This is clearly a ClientRpc call
```

## Use ClientRpcSendParameters

The following code provides an example of using `ClientRpcSendParameters`, which will allow you to send a `ClientRpc` to a specific Client connection(s) whereas the default MLAPI's behavior is to broadcast to every single client.

```csharp
private void DoSomethingServerSide(int clientId)
    {
        // If is not the Server/Host then we should early return here!
        if (!IsServer) return;


        // NOTE! In case you know a list of ClientId's ahead of time, that does not need change,
        // Then please consider caching this (as a member variable), to avoid Allocating Memory every time you run this function
        ClientRpcParams clientRpcParams = new ClientRpcParams
        {
            Send = new ClientRpcSendParams
            {
                TargetClientIds = new ulong[]{clientId};
            }
        };

        // Let's imagine that you need to compute a Random integer and want to send that to a client
        const int maxValue = 4;
        int randomInteger = Random.Range(0, maxValue);
        DoSomethingClientRPC(randomInteger, clientRpcParams);
    }

    [ClientRpc]
    private void DoSomethingClientRPC(int randomInteger, ClientRpcParams clientRpcParams = default)
    {
        if (IsOwner) return;

        // Run your client-side logic here!!
        Debug.LogFormat("GameObject: {0} has received a randomInteger with value: {1}", gameObject.name, randomInteger);
    }
```
