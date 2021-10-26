---
id: serverrpc
title: ServerRpc
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';


A `ServerRpc` can be invoked by a client to be executed on the server.

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs_Dark.png?text=DarkMode"/>
  <figcaption>Client can invoke a server RPC on a Network Object. The RPC will be placed in the local queue and then sent to the server, where it will be executed on the server version of the same Network Object.</figcaption>
</figure>

<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClient.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClient_Dark.png?text=DarkMode"/>
  <figcaption>Clients can invoke server RPCs on Client Hosts the same way they can invoke server RPCs on the regular servers: the RPC will be placed in the local queue and then sent to the Client Host, where it will be executed on the Client Host's version of the same Network Object.</figcaption>
</figure>


<figure>
<ImageSwitcher 
lightImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClientHost.png?text=LightMode"
darkImageSrc="/img/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClientHost_Dark.png?text=DarkMode"/>
  <figcaption>When a server RPC is invoked by the Client Host, the RPC will be placed in a local queue and then executed on the Client Host after a short delay. The same happens for pure servers.</figcaption>
</figure>


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

`[ServerRpc]` attribute and matching `...ServerRpc` suffix in the method name are there to make it crystal clear for RPC call sites to know when they are executing an RPC, it will be replicated and executed on the server-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it is a `ServerRpc` or [`ClientRpc`](clientrpc.md):

```csharp
Ping(somenumber, sometext); // Is this an RPC call?

PingRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PingServerRpc(somenumber, sometext); // This is clearly a ServerRpc call
```

## See also

* [ClientRpc](clientrpc.md)
* [RPC Params](rpc-params.md)
* See [examples](../../learn/bossroom-examples/bossroom-actions) of how these were used in Boss Room.