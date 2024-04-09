---
id: serverrpc
title: ServerRpc
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

:::warning
ClientRpc and ServerRpc are legacy features of Netcode for GameObjects and have been replaced with the universal RPC attribute. This documentation is for legacy use. For current projects, use [Rpc](rpc.md) instead.
:::

## Introduction
A `ServerRpc` provides you with the ability to send information from a client to a server just like you would invoke a method from within a class. A `ServerRpc` is a remote procedure call (RPC) that can be only invoked by a client and will always be received and executed on the server/host.

## Declaring a ServerRpc
You can declare a `ServerRpc` by:
1. Creating a method that ends with the `ServerRpc` suffix within a `NetworkBehaviour` derived class.
2. Adding the `[ServerRpc]` attribute above the method

### Example of declaring a ServerRpc:
```csharp
public class SomeNetworkBehaviour : NetworkBehaviour
{
    [ServerRpc]
    public void PingServerRpc(int pingCount)
    {

    }
}
```
The above example uses the default [ServerRpc] attribute settings which only allows a client owner (client that owns `NetworkObject` associated with the `NetworkBehaviour` containing the `ServerRpc` method) invocation rights.  Any client that isn't the owner won't be allowed to invoke the `ServerRpc`.

## ServerRpc Ownership And ServerRpcParams
There are times where you might want any client to have `ServerRpc` invocation rights.  You can easily accomplish this by setting the `ServerRpc` attribute's `RequireOwnership` parameter to false like in the example below:
```csharp
[ServerRpc(RequireOwnership = false)]
public void MyGlobalServerRpc(ServerRpcParams serverRpcParams = default)
{
    var clientId = serverRpcParams.Receive.SenderClientId;
    if (NetworkManager.ConnectedClients.ContainsKey(clientId))
    {
        var client = NetworkManager.ConnectedClients[clientId];
        // Do things for this client
    }
}

public override void OnNetworkSpawn()
{
    MyGlobalServerRpc(); // serverRpcParams will be filled in automatically
}
```
In the above example, you will also notice that `MyGlobalServerRpc` takes a single parameter of type [`ServerRpcParams`](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@latest?subfolder=/api/Unity.Netcode.ServerRpcParams.html). This parameter type is optional, but it can be useful to identify **which client** was requesting the server invoke the RPC.  The `ServerRpcParams.Receive.SenderClientId` property is automatically set upon the server receiving the `ServerRpc` request and used to get the server-side `NetworkClient` instance of the client (sender).  
:::important Best Practice
Using the `ServerRpcParams.Receive.SenderClientId` property is considered the best practice to identify which client was invoking the `ServerRpc`. It isn't recommended to send the client identifier via an additional `ulong` parameter added to the `ServerRpc`:<br/>
```csharp
[ServerRpc(RequireOwnership = false)]
public void MyGlobalServerRpc(ulong clientId) // This is considered a bad practice (Not Recommended)
{
    if (NetworkManager.ConnectedClients.ContainsKey(clientId))
    {
        var client = NetworkManager.ConnectedClients[clientId];
        // Do things for this client
    }
}
```
The primary reason, especially when `RequireOwnership == false`, is that it can introduce potential security issues. The secondary reason is that this value is already automatically provided to you via `ServerRpcParams` without the additional `ulong` parameter bandwidth overhead you would incur by sending the client identifier as a `ServerRpc` parameter.
:::

Now, taking the best practices example into consideration, you might want to have other valid parameters added to your `ServerRpc`. When adding additional parameters other than the `ServerRpcParams` parameter, you **must** declare `ServerRpcParams` as the **last** parameter of the `ServerRpc`:
```csharp
[ServerRpc(RequireOwnership = false)]
public void PlayerShootGunServerRpc(Vector3 lookWorldPosition, ServerRpcParams serverRpcParams = default)
{
    var clientId = serverRpcParams.Receive.SenderClientId;
    if (NetworkManager.ConnectedClients.ContainsKey(clientId))
    {
        var client = NetworkManager.ConnectedClients[clientId];
        var castRay = new Ray(client.PlayerObject.transform.position, lookWorldPosition);
        RaycastHit rayCastHit;
        if (Physics.Raycast(castRay, out rayCastHit, 100.0f))
        {
            // Handle shooting something
        }
    }
}
```
Looking at the above example, we can see the client invoking the `PlayerShootGunServerRpc` method passes in a world position based on perhaps a screen space crosshair position to world space position, the `ServerRpcParams`, and the `ServerRpc` doesn't require ownership.  

:::tip Alternate Owner Example
Of course, if your project's design was such that a weapon changes ownership when it's picked up by a player, then you would only allow owners to invoke the method and would only need the one `Vector3` parameter like in the example below:
```csharp
[ServerRpc]
public void PlayerOwnerShootGunServerRpc(Vector3 lookWorldPosition)
{
    if (NetworkManager.ConnectedClients.ContainsKey(OwnerClientId))
    {
        var client = NetworkManager.ConnectedClients[OwnerClientId];
        var castRay = new Ray(client.PlayerObject.transform.position, lookWorldPosition);
        RaycastHit rayCastHit;
        if (Physics.Raycast(castRay, out rayCastHit, 100.0f))
        {
            // Handle shooting something
        }
    }
}
```
:::

## Invoking a ServerRpc
From the example below that uses the `PlayerOwnerShootGunServerRpc` method, you can see that you would invoke it just like any other method:

```csharp
private void Update()
{
    if (!IsSpawned || !IsOwner)
    {
        return;
    }

    if (Input.GetKeyDown(KeyCode.Space))
    {
        var point = new Vector3();
        var currentEvent = Event.current;
        var mousePos = new Vector2();

        // Get the mouse position from Event.
        // Note that the y position from Event is inverted.
        mousePos.x = currentEvent.mousePosition.x;
        mousePos.y = Camera.current.pixelHeight - currentEvent.mousePosition.y;

        point = Camera.current.ScreenToWorldPoint(new Vector3(mousePos.x,
        mousePos.y, Camera.current.nearClipPlane));

        PlayerOwnerShootGunServerRpc(point);
    }
}
```

### ServerRpc Timing
The following are a few timing diagrams to help provide additional visual context when invoking a `ServerRpc`.

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ServerRPCs.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ServerRPCs_Dark.png?text=DarkMode"/>
  <figcaption>A Client can invoke a server RPC on a `NetworkObject`. The RPC will be placed in the local queue and then sent to the server at the end of the frame. Upon receiving the server RPC, it's executed on the Server's instance of the same `NetworkObject`.</figcaption>
</figure>

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClient.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClient_Dark.png?text=DarkMode"/>
  <figcaption>Clients can invoke server RPCs on Hosts exactly like they can on a Server: the RPC will be placed in the local queue and sent to the Host at the end of the frame. Upon receiving the server RPC,  it will be executed on the Host's instance of the same `NetworkObject`.</figcaption>
</figure>

<figure>
<ImageSwitcher
lightImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClientHost.png?text=LightMode"
darkImageSrc="/sequence_diagrams/RPCs/ServerRPCs_ClientHosts_CalledByClientHost_Dark.png?text=DarkMode"/>
  <figcaption>When a server RPC is invoked by a Host, the RPC is immediately executed.</figcaption>
</figure>

:::warning
When running as a host, RPCs are invoked immediately within the same stack as the method invoking the RPC. Since a host is both considered a server and a client, you should avoid design patterns where a ClientRpc invokes a ServerRpc that invokes the same ClientRpc as this can end up in a stack overflow (that is, infinite recursion).
:::

## See Also

* [ClientRpc](clientrpc.md)
* [RPC Params](rpc-params.md)
* See [examples](../../learn/bossroom/bossroom-actions) of how these were used in Boss Room.
