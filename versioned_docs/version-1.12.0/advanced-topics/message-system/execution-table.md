---
id: execution-table
title: Execution table
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

:::warning
ClientRpc and ServerRpc are legacy features of Netcode for GameObjects and have been replaced with the universal RPC attribute. This documentation is for legacy use. For current projects, use [Rpc](rpc.md) instead.
:::

The following table details the execution of `ServerRpc` and `ClientRpc` functions:

| Function | Server | Client | Host (Server+Client) |
|---|:---:|:---:|:---:|
| ServerRpc Send | <i class="fp-x"></i> | <i class="fp-check"></i> | <i class="fp-check"></i> |
| ServerRpc Execute | <i class="fp-check"></i> | <i class="fp-x"></i> | <i class="fp-check"></i> |
| ClientRpc Send | <i class="fp-check"></i> | <i class="fp-x"></i> | <i class="fp-check"></i> |
| ClientRpc Execute | <i class="fp-x"></i> | <i class="fp-check"></i> | <i class="fp-check"></i> |

An RPC function typically doesn't execute its body immediately since the function call is a stand-in for a network transmission. Since the host is both a client and a server, local RPCs targeting the host-server or host-client are invoked immediately.  As such, avoid nesting RPCs when running in host mode as a ServerRpc method that invokes a ClientRpc method that invokes the same ServerRpc method (and repeat...) can cause a stack overflow.

Structure of a typical `ServerRpc`:

```csharp
[ServerRpc]
void MyServerRpc(int somenumber, string somestring)
{
    // Network Send Block (framework-code)
    // Network Return Block (framework-code)
    // RPC Method Body (user-code)
}
```

Pseudo-code sample of a `ServerRpc`:

```csharp
[ServerRpc]
void MyServerRpc(int somenumber, string somestring)
{
    // --- begin: injected framework-code
    if (NetworkSend())
    {
        // this block will be executed if:
        //   - called from user-code on client
        //   - called from user-code on host

        var writer = NetworkCreateWriter();
        writer.WriteInt32(1234567890); // RPC method signature hash
        writer.WriteInt32(somenumber);
        writer.WriteChars(somestring);
        NetworkSendRpc(writer);
    }

    if (NetworkReturn())
    {
        // this block will be executed if:
        //   - called from user-code
        //   - called from framework-code on client

        return;
    }
    // --- end: injected framework-code

    print($"MyServerRpc: {somenumber}");
}
```

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ServerRPCs.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ServerRPCs_Dark.png?text=DarkMode"/>
  <figcaption>Client can invoke a server RPC on a Network Object. The RPC will be placed in the local queue and then sent to the server, where it will be executed on the server version of the same Network Object.</figcaption>
</figure>

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClient.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClient_Dark.png?text=DarkMode"/>
  <figcaption>Clients can invoke server RPCs on Client Hosts the same way they can invoke server RPCs on the regular servers: the RPC will be placed in the local queue and then sent to the Client Host, where it will be executed on the Client Host's version of the same Network Object.</figcaption>
</figure>


<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClientHost.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClientHost_Dark.png?text=DarkMode"/>
  <figcaption>When a server RPC is invoked by the Client Host, the RPC will be placed in a local queue and then executed on the Client Host after a short delay. The same happens for pure servers.</figcaption>
</figure>

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ClientRPCs.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ClientRPCs_Dark.png?text=DarkMode"/>
</figure>

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ClientRPCs_ClientHosts_CalledByClientHost.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ClientRPCs_ClientHosts_CalledByClientHost_Dark.png?text=DarkMode"/>
 <figcaption>Client Hosts can invoke Client RPCs on Network Objects. The RPC will be placed in the local queue and then, after a short delay the client RPC will be executed on the Client Host, and sent to the other clients. When client RPC is received by the client - it's executed on the Client's version of the same Network Object.</figcaption>
</figure>
