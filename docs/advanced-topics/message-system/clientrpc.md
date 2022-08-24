---
id: clientrpc
title: ClientRpc
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';


A `ClientRpc` can be invoked by the server to be executed on a client.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs_Dark.png?text=DarkMode"/>
</figure>



## Declaring a ClientRpc
Developers can declare a `ClientRpc` by marking a method with `[ClientRpc]` attribute and making sure to have `ClientRpc` suffix in the method name.

```csharp
[ClientRpc]
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

## Invoking a ClientRpc

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

## To Send to One Client, use ClientRpcSendParameters

The following code provides an example of using `ClientRpcSendParameters`, which will allow you to send a `ClientRpc` to a specific Client connection(s) whereas the default Netcode for GameObjects's behavior is to broadcast to every single client.

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
                TargetClientIds = new ulong[]{clientId}
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

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs_CertainClients.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs_CertainClients_Dark.png?text=DarkMode"/>
 <figcaption>Server can invoke a client RPC on a Network Object. The RPC will be placed in the local queue and then sent to a selection of clients (by default this selection is "all clients"). When received by a client, RPC will be executed on the client's version of the same Network Object.</figcaption>
</figure>

## Invoking a Client RPC from the Host.
As the host is both a client and a server, if a host invokes a Client RPC, that RPC will be executed on the host too in addition to other clients.



<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs_ClientHosts_CalledByClientHost.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ClientRPCs_ClientHosts_CalledByClientHost_Dark.png?text=DarkMode"/>
 <figcaption>Client Hosts can invoke Client RPCs on Network Objects. The RPC will be placed in the local queue and then, after a short delay the client RPC will be executed on the Client Host, and sent to the other clients. When client RPC is received by the client - it is executed on the Client's version of the same Network Object.</figcaption>
</figure>

See [examples](../../learn/bossroom/bossroom-actions) of how these were used in Boss Room.


## See also

* [ServerRpc](serverrpc.md)
* [RPC Params](rpc-params.md)