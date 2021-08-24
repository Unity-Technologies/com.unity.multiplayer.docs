---
id: faq
title: Frequently Asked Questions
---

The FAQ provides immediate answers for questions collected from the Community on developing games with Multiplayer, including MLAPI, Transport, and more.

## Unity MLAPI

<div id="faq">


### Does MLAPI have a Public Roadmap?

See the [Multiplayer Networking Public Roadmap](https://unity.com/roadmap/unity-platform/multiplayer-networking) to review, suggest, and vote on features for all Multiplayer Networking, MLAPI, and documentation.

### Implement a Dedicated Server vs a Listen Server, would I need to make changes to the codebase?

MLAPI is designed in a way that works with both a Listen Server and a Dedicated Server model. You will just have to be careful that you are using things like `IsServer` and `IsHost` correctly.

### Does MLAPI have any Matchmaking functionality?

Matchmaking would have to be implemented using 3rd party matchmaking services. MLAPI has no matchmaking functionality, currently.

### How can you get more information for ClientRPC errors?

If you receive `ClientRPC` errors like the following, you may have difficulty debugging:

> :warning: [MLAPI] ClientRPC message received for a non existant object with id: 16. This message will be buffered and might be recovered.
`UnityEngine.Debug:LogWarning(object)`

You can set *Enable Message Buffering* to `true` in `NetworkManager`. It will store those RPCs and apply them later once the object spawns.

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

## Boss Room and Bitesize Samples

<div id="faq">

### Why do I get path too long errors with Boss Room on Windows?

Using Windows' built-in extracting tool may generate an "Error 0x80010135: Path too long" error window which can invalidate the extraction process. 

As a workaround, shorten the zip file to a single character (for example "c.zip") and move it to the shortest path on your computer (such as in root C:\) and retry. If that solution fails, another workaround is to extract the downloaded zip file using an application like 7zip.

### Why do I get unidentified developer errors with Boss Room?

If you attempt to run a build on OSX and receive a warning dialog mentioning an "unidentified developer", you may need to override your security settings for this application:

1. In the Finder on your Mac, locate the application you want to open.
  
  :::note
  Do not use Launchpad, it does not allow you to access the shortcut menu.
  :::

1. Control-click the app icon, then choose **Open** from the shortcut menu.
1. Click **Open**.
1. The app is saved as an exception to your security settings. You can open it in the future by double-clicking it just as you can any registered app.


See [Apple Support](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac) for details.

### Why is there an `InitBootStrap` scene as the startup scene for Boss Room and Bitesize Samples?

The initial reason is that in Unity MLAPI the `NetworkManager` is a singleton class. We initially created it in the main menu, but when the host was leaving the in-game/networked scene, the Network Manager was getting destroyed, which led to not being able to host a game again without restarting the game instance.

The Bootstrap scene ensures that the `NetworkManager` and other singletons are initialized first and will be there when you get back to main menu.


</div>
