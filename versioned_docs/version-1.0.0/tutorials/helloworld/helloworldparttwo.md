---
id: helloworldtwo
title: Building on "Hello World"
sidebar_label: Building on "Hello World"
description: Tutorial that explains adding scripts to objects, editor modes (Host Server and Client), basic player movement,Permissions and basic RPC use.
---
In this guide we will build on the work we have already done in Hello World and add in a few more features, we will be covering the following:

- Adding scripts to your objects
- Adding editor modes inside your game  (Host Server and Client)
- Basic Player Movement
- Permissions
- Basic RPC use


## Requirements

This tutorial requires an  Netcode for GameObjects (Netcode)-supported version of Unity (2019.4+).

We recommend that you  complete the [Your First Networking Game "Hello World"](helloworldintro.md) guide before starting this one.


## Adding Scripts to Hello World

This section will add some scripts to Hello World which will contain the new features we will be covering in the tutorial.
1. Click the **Assets** folder.
1. Create a new Folder and call it **Scripts**.

### Adding the `HelloWorldPlayer.cs` script

1. Create a new script `HelloWorldPlayer`.
1. Open the `HelloWorldPlayer.cs` script.
1. Edit the `HelloWorldPlayer.cs` script to match the following.

<details open>
<summary>Click to show/hide the Code.

</summary>

```csharp
using Unity.Netcode;
using UnityEngine;

namespace HelloWorld
{
    public class HelloWorldPlayer : NetworkBehaviour
    {
        public NetworkVariable<Vector3> Position = new NetworkVariable<Vector3>();

        public override void OnNetworkSpawn()
        {
            if (IsOwner)
            {
                Move();
            }
        }

        public void Move()
        {
            if (NetworkManager.Singleton.IsServer)
            {
                var randomPosition = GetRandomPositionOnPlane();
                transform.position = randomPosition;
                Position.Value = randomPosition;
            }
            else
            {
                SubmitPositionRequestServerRpc();
            }
        }

        [ServerRpc]
        void SubmitPositionRequestServerRpc(ServerRpcParams rpcParams = default)
        {
            Position.Value = GetRandomPositionOnPlane();
        }

        static Vector3 GetRandomPositionOnPlane()
        {
            return new Vector3(Random.Range(-3f, 3f), 1f, Random.Range(-3f, 3f));
        }

        void Update()
        {
            transform.position = Position.Value;
        }
    }
}
```

</details>
<iframe src="https://www.youtube.com/embed/DMfQMGUe_sI?playlist=DMfQMGUe_sI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



### Adding the `HelloWorldManager.cs` script

1. Create an empty `GameObject` rename it **HelloWorldManager**.
1. Create a script called `HelloWorldManager`.
1. Open the `HelloWorldManager.cs` script.
1. Edit the `HelloWorldManager.cs` script to match the following.

:::tip 
You can copy the script from here and paste it into your file.
   1. Select the code sample.
   1. Click **Copy** in the top right corner.
   1. Paste it into your code editor.
:::

<details open>
<summary>Click to show/hide the Code.</summary>

```csharp

using Unity.Netcode;
using UnityEngine;

namespace HelloWorld
{
    public class HelloWorldManager : MonoBehaviour
    {
        void OnGUI()
        {
            GUILayout.BeginArea(new Rect(10, 10, 300, 300));
            if (!NetworkManager.Singleton.IsClient && !NetworkManager.Singleton.IsServer)
            {
                StartButtons();
            }
            else
            {
                StatusLabels();

                SubmitNewPosition();
            }

            GUILayout.EndArea();
        }

        static void StartButtons()
        {
            if (GUILayout.Button("Host")) NetworkManager.Singleton.StartHost();
            if (GUILayout.Button("Client")) NetworkManager.Singleton.StartClient();
            if (GUILayout.Button("Server")) NetworkManager.Singleton.StartServer();
        }

        static void StatusLabels()
        {
            var mode = NetworkManager.Singleton.IsHost ?
                "Host" : NetworkManager.Singleton.IsServer ? "Server" : "Client";

            GUILayout.Label("Transport: " +
                NetworkManager.Singleton.NetworkConfig.NetworkTransport.GetType().Name);
            GUILayout.Label("Mode: " + mode);
        }

static void SubmitNewPosition()
        {
            if (GUILayout.Button(NetworkManager.Singleton.IsServer ? "Move" : "Request Position Change"))
            {
                if (NetworkManager.Singleton.IsServer && !NetworkManager.Singleton.IsClient )
                {
                    foreach (ulong uid in NetworkManager.Singleton.ConnectedClientsIds)
                        NetworkManager.Singleton.SpawnManager.GetPlayerNetworkObject(uid).GetComponent<HelloWorldPlayer>().Move();
                }
                else
                {
                    var playerObject = NetworkManager.Singleton.SpawnManager.GetLocalPlayerObject();
                    var player = playerObject.GetComponent<HelloWorldPlayer>();
                    player.Move();
                }
            }
        }
    }
}
```
</details>


1. Add the `HelloWorldManager` script as a component.

<iframe src="https://www.youtube.com/embed/_L6AvD_6FKU?playlist=_L6AvD_6FKU&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Adding Editor Modes to Hello World


   
Inside the `HelloWorldManager.cs` script, we define two methods which mimic the editor buttons inside of **NetworkManager** during Play mode.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldManager.cs#L25-L40

```
-->
```csharp
        static void StartButtons()
        {
            if (GUILayout.Button("Host")) NetworkManager.Singleton.StartHost();
            if (GUILayout.Button("Client")) NetworkManager.Singleton.StartClient();
            if (GUILayout.Button("Server")) NetworkManager.Singleton.StartServer();
        }

        static void StatusLabels()
        {
            var mode = NetworkManager.Singleton.IsHost ?
                "Host" : NetworkManager.Singleton.IsServer ? "Server" : "Client";

            GUILayout.Label("Transport: " +
                NetworkManager.Singleton.NetworkConfig.NetworkTransport.GetType().Name);
            GUILayout.Label("Mode: " + mode);
        }
```
</details>

`NetworkManager` implements the singleton pattern as it declares its singleton named `Singleton`. This is defined when the `MonoBehaviour` is enabled. This component also contains very useful properties, such as `IsClient`, `IsServer`, and `IsLocalClient`. The first two dictate the connection state we have currently established that you will use shortly.

We call these methods inside of `OnGUI()`.
<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldManager.cs#L8-L23

```
-->

```csharp

void OnGUI()
        {
            GUILayout.BeginArea(new Rect(10, 10, 300, 300));
            if (!NetworkManager.Singleton.IsClient && !NetworkManager.Singleton.IsServer)
            {
                StartButtons();
            }
            else
            {
                StatusLabels();

                SubmitNewPosition();
            }

            GUILayout.EndArea();
        }

```
</details>

:::note
You will notice the introduction of a new method,  `SubmitNewPosition()`; which we will be using later. 
:::

## Adding basic movement to the Player object 

The `HelloWorldPlayer.cs` script adds some basic movement to the Hello World player.


1. Select the **Player** prefab.
1. Add the script `HelloWorldPlayer` script as a component.
<iframe src="https://www.youtube.com/embed/8-hR6ElBY-Y?playlist=8-hR6ElBY-Y&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

This class will inherit from `NetworkBehaviour` instead of `MonoBehaviour`.
<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L8
`-->

```csharp
     public class HelloWorldPlayer : NetworkBehaviour

```
</details>

Inside this class we  now define a `NetworkVariable` to represent this player's networked position.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L10-L14
```
-->
```csharp
        public NetworkVariable<Vector3> Position = new NetworkVariable<Vector3>();
```
</details>

`HelloWorldPlayer` overrides `OnNetworkSpawn`.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L16-L19
```
-->

```csharp
        public override void OnNetworkSpawn()
        {
            if (IsOwner)
            {
                Move();
            }
        }
```
</details>

Any `MonoBehaviour` implementing `NetworkBehaviour` can override the Netcode method `OnNetworkSpawn()`. This method is fired when the `NetworkObject` gets spawned and the networking is setup. We override `OnNetworkSpawn` since a client and a server will run different logic here. 

:::note
This can be overriden on any `NetworkBehaviour`.
:::

On both client and server instances of this player, we call the `Move()` method, which will simply do the following.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L21-L33
```
-->

```csharp
        public void Move()
        {
            if (NetworkManager.Singleton.IsServer)
            {
                var randomPosition = GetRandomPositionOnPlane();
                transform.position = randomPosition;
                Position.Value = randomPosition;
            }
            else
            {
                SubmitPositionRequestServerRpc();
            }
        }
```
</details>

### Some simple RPC use

If this player is a server-owned player, at `OnNetworkSpawn()` we can immediately move this player, as suggested in the following code.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L23-L28
```
-->

```csharp
            if (NetworkManager.Singleton.IsServer)
            {
                var randomPosition = GetRandomPositionOnPlane();
                transform.position = randomPosition;
                Position.Value = randomPosition;
            }
```

</details>

 If we are a client, we call a `ServerRpc`. A `ServerRpc` can be invoked by a client to be executed on the server.

 <details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L29-L32
```
-->

```csharp
            else
            {
                SubmitPositionRequestServerRpc();
            }

```
</details>

This `ServerRpc` simply sets the position `NetworkVariable` on the server's instance of this player by just picking a random point on the plane.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L35-L39
```
-->
```csharp
        [ServerRpc]
        void SubmitPositionRequestServerRpc(ServerRpcParams rpcParams = default)
        {
            Position.Value = GetRandomPositionOnPlane();
        }
```
</details>

The server instance of this player has just modified the Position `NetworkVariable`, meaning that if we are a client, we need to apply this position locally inside of our Update loop. 
<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L46-L49
```
-->
```csharp
        void Update()
        {
            transform.position = Position.Value;
        }
```
</details>

We can now go back to `HelloWorldManager.cs` and define the contents of `SubmitNewPosition()`.

<details open>
<summary>Click to show/hide the Code.

</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldMAnager.cs#L42-L56
```
-->
```csharp
        static void SubmitNewPosition()
        {
            if (GUILayout.Button(NetworkManager.Singleton.IsServer ? "Move" : "Request Position Change"))
            {
                var playerObject = NetworkManager.Singleton.SpawnManager.GetLocalPlayerObject();
                var player = playerObject.GetComponent<HelloWorldPlayer>();
                player.Move();
            }
        }
```
</details>

Whenever you press the GUI button (which is contextual depending on if you are server or a client), you find your local player and simply call `Move()`.

You can now create a build which will demonstrate the concepts outlined above. 
:::tip
Make sure **SampleScene** is included in **BuildSettings**.
:::

One build instance can create a host. Another client can join the host's game. Both are able to press a GUI button to move. Server will move immediately and be replicated on client. Client can request a new position, which will instruct the server to modify that server instance's position `NetworkVariable`. That client will apply that `NetworkVariable` position inside of it's Update() method.

<iframe src="https://www.youtube.com/embed/2FTSAMbNXow?playlist=2FTSAMbNXow&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


:::note Congrats!
Congratulations you have learned the basics of a networked game 
:::

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Fernando Cortez, Unity. 
:::
