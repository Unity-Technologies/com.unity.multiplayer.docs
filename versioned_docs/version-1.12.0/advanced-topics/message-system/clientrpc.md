---
id: clientrpc
title: ClientRpc
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

:::warning
ClientRpc and ServerRpc are legacy features of Netcode for GameObjects and have been replaced with the universal RPC attribute. This documentation is for legacy use. For current projects, use [Rpc](rpc.md) instead.
:::


Servers can invoke a ClientRpc to execute on all clients.

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/RPCs/ClientRPCs.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ClientRPCs_Dark.png?text=DarkMode"/>
</figure>



## Declaring a ClientRpc

You can declare a ClientRpc by marking a method with the `[ClientRpc]` attribute and including the `ClientRpc` suffix in the method name.

```csharp
[ClientRpc]
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

## Invoking a ClientRpc

You can invoke a ClientRpc by invoking the function directly with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PongClientRpc(Time.frameCount, "hello, world"); // Server -> Client
    }
}
```

You must mark client RPC methods with the `[ClientRpc]` attribute and use the `ClientRpc` method suffix; failing to do so results in an error message.

```csharp
// Error: Invalid, missing 'ClientRpc' suffix in the method name
[ClientRpc]
void Pong(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ClientRpc] attribute on the method
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

The `[ClientRpc]` attribute and matching `...ClientRpc` suffix in the method name help to assure context clarity in scripts that invoke them and are used by Netcode during the ILPostProcessor pass. The ILPostProcessor pass replaces all call-site locations where the RPC method is invoked, with additional code generated specific to the RPC to assure that the RPC message is generated and sent to the appropriate destinations/targets as opposed to just locally invoking the method.

```csharp
Pong(somenumber, sometext); // Is this an RPC call?

PongRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PongClientRpc(somenumber, sometext); // This is clearly a ClientRpc call
```

## To send to one client, use ClientRpcSendParameters

The following code provides an example of using ClientRpcSendParameters, which sends a ClientRpc to a specific client connection. The default Netcode for GameObjects behavior is to broadcast to every single client.

```csharp
private void DoSomethingServerSide(int clientId)
{
    // If isn't the Server/Host then we should early return here!
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
    DoSomethingClientRpc(randomInteger, clientRpcParams);
}

[ClientRpc]
private void DoSomethingClientRpc(int randomInteger, ClientRpcParams clientRpcParams = default)
{
    if (IsOwner) return;

    // Run your client-side logic here!!
    Debug.LogFormat("GameObject: {0} has received a randomInteger with value: {1}", gameObject.name, randomInteger);
}
```

<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/RPCs/ClientRPCs_CertainClients.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ClientRPCs_CertainClients_Dark.png?text=DarkMode"/>
 <figcaption>Server can invoke a client RPC on a Network Object. The RPC will be placed in the local queue and then sent to a selection of clients (by default this selection is "all clients"). When received by a client, RPC will be executed on the client's version of the same Network Object.</figcaption>
</figure>

## Invoking a client RPC from the host

The host is both a client and a server. If a host invokes a client RPC, it triggers the on all clients, including the host.


<figure>
<ImageSwitcher 
lightImageSrc="/sequence_diagrams/RPCs/ClientRPCs_ClientHosts_CalledByClientHost.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ClientRPCs_ClientHosts_CalledByClientHost_Dark.png?text=DarkMode"/>
 <figcaption>Hosts can invoke client RPCs on `NetworkObjects`. If broadcasting to all clients, the RPC will be immediately invoked on the host and placed in the local queue. At the end of the frame, the client RPC will be sent to the remote clients. When a remote client receives the client RPC it's executed on the client's local cloned instance of the same `NetworkObject`.</figcaption>
</figure>

:::warning
When running as a host, Netcode for GameObjects invokes RPCs immediately within the same stack as the method invoking the RPC. Since a host is both considered a server and a client, you should avoid design patterns where a ClientRpc invokes a ServerRpc that invokes the same ClientRpc as this can end up in a stack overflow (infinite recursion).
:::

See the [Boss Room RPC Examples](../../learn/bossroom/bossroom-actions.md).


## Also see

* [ServerRpc](serverrpc.md)
* [RPC parameters](rpc-params.md)
