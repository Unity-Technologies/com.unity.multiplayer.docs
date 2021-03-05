---
id: faq
title: Frequently Asked Questions
---

The FAQ provides immediate answers for questions collected from the Community on developing games with Multiplayer, including MLAPI, Transport, and more.

<div id="faq">

### How can you get more information for ClientRPC errors?

If you receive `ClientRPC` errors like the following, you may have difficulty debugging:

![](/img/faq/clientrpc-error.png)

You can set *Enable Message Buffering* to `true` in `NetworkingManager`. It will store those RPCs and apply them later once the object spawns.

### What are recommendations for getting a game connecting over the internet?

We recommend the following:

1. Upload your server build to a cloud provider or another server machine and run it there.
1. Host your game locally and open ports in your router. 
   
   It should work just like over LAN you just have to connect to the public IP itself. Make sure to open UDP on the router. Many forward ports tutorials are available to review, including this option https://portforward.com/.
1. Use a relay. 
   
   There is an [unofficial MLAPI relay application](https://github.com/MidLevel/MLAPI.Relay) which you can try to host on a server. The relay server uses IP addresses to index hosts. You can connect to it using an IP address and port, but it will be routed through the relay server. You could also use MLAPI's list server to browse through all hosts.
   
   The other option is to use something like the `SteamP2PTransport`, which will work without the need of setting up any servers if you release your game on Steam.

  :::note About Relays
  We know there is a high demand for an out-of-the-box relay solution for MLAPI, and have plans to resolve in the future.
  :::


### Is it good for add Spawnable object into NetworkConfig after start host? 

Yes, but you need to ensure that all your clients add the same object to their configs as well. You cannot only add it on the host.

### What is the best method for spawning?

Spawning can always be done on the host/server. If you want to give a client control over spawning objects, you need to implement a server RPC that you call on the client to spawn the object.

### What are best practices for handing physics with MLAPI?

Networked physics is complicated, with many different ways to handle them. Currently, physics can be a little difficult to handle with MLAPI and the built-in `NetworkTransform`. 

We recommend the following:

* Simulate the physics on the server and transforms on the client.
* Remove the `Rigidbody` component from all of your client objects and have just the server drive the position of the physics object. This should help reduce stutter on the client.

### How do you implement on Steam?

The Steam transport should be quite straightforward to use. Just add it to your project and set the `ConnectToSteamID` in the transport on the client to connect to the host that's all you need.

</div>
