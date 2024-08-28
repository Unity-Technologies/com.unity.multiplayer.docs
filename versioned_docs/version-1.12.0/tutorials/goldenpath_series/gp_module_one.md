---
id: goldenpath_one
title: Golden Path Module One
description: Tutorial that explains adding scripts to objects, editor modes (Host Server and Client), basic player movement and basic RPC use.
---

Golden Path One continues on the work from [Hello World](../helloworld.md) to add a few more features.

This guide covers:

- Adding scripts to your objects
- Adding editor modes inside your game (Host, Server, and Client)
- Basic Player Movement
- Permissions
- Basic RPC use

:::note
The videos on this page were removed because they were out-of-date and caused more confusion than help. All videos in the Hello World and Golden Path series will be recreated and added back at a later time.
:::

## Prerequisites

You should have completed the [Hello World project](../helloworld.md) before starting this tutorial. We use Hello World as the base for this and other Golden Path modules.

## Open your Hello World project

1. Open Unity Hub.
1. Select `Hello World` from the list of projects displayed.

## Adding Editor Modes to Hello World

In the HelloWorld project, you created a **NetworkManager** by adding the pre-created **NetworkManager** component. In Play Mode, the NetworkManager shows Editor buttons labeled `Start Host`, `Start Client`, and `Start Server` in its inspector. These call the `StartHost`, `StartClient` and `StartServer` methods of the **NetworkManager** respectively, to initiate a networking session. Inside the `HelloWorldManager.cs` script, we define two methods which mimic this functionality via UI buttons and status labels.

1. Create an empty `GameObject` rename it **HelloWorldManager**.
2. Open the **Scripts** Folder.
3. Create a script called `HelloWorldManager`.
4. Open the `HelloWorldManager.cs` script.
5. Edit the `HelloWorldManager.cs` script to match the following.

:::tip
You can copy the script from here and paste it into your file.
   1. Select the code sample.
   1. Click **Copy** in the top right corner.
   1. Paste it into your code editor.
:::

<details open>
<summary>Click to show/hide the Code.
</summary>

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


1. Add the `HelloWorldManager` script component to the `HelloWorldManager` `GameObject`.

<details open>
<summary>Click to show/hide the Code.
</summary>

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

You can statically access the `NetworkManager` instance from any other scripts via its singleton named `Singleton`. This is defined when the `MonoBehaviour` is enabled. This component also has useful properties, such as `IsClient`, `IsServer`, and `IsLocalClient`. The `IsClient` and `IsServer` properties dictate the connection state we have currently established that you will use shortly.

We call these methods inside of `OnGUI()`.

<details open>
<summary>Click to show/hide the Code.
</summary>

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
You might notice the introduction of a new method, `SubmitNewPosition()`. This is used later.
:::

## Adding basic movement to the Player object

Here we will create a `HelloWorldPlayer.cs` script that adds some basic movement to the Hello World player.

1. Open the **Scripts** Folder.
1. Create a new script called `HelloWorldPlayer`.
1. Open the `HelloWorldPlayer.cs` script.
1. Edit the `HelloWorldPlayer.cs` script to match the following.

<details open>
<summary>Click to show/hide the Code.</summary>

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

        [Rpc(SendTo.Server)]
        void SubmitPositionRequestServerRpc(RpcParams rpcParams = default)
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


1. Select the **Player** prefab.
1. Add the script `HelloWorldPlayer` script as a component.
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

In a networked game, the dedicated server (or host) might need to run different functions than the networked player (the client). For example, in a server-authoritative game, the client would handle the player inputs, but the server would handle the movement. All instances of this script in the game, whether running on a server/host or a client, call the `OnNetworkSpawn` method when the `NetworkObject` to which this script is attached has spawned, but only its owner will call the `Move` method. In the case of a [Player Object](../../basics/networkobject#player-objects), Netcode spawns an instance of the player object for every client and host (for which they're the owner). Each of these player objects contain this script. Calling the `Move` method in OnNetworkSpawn instead of, for example, in `Awake` ensures that the NetworkObject has finished spawning, so the check to see whether the player is a server/host or client is valid. The `Move` method can then implement different logic depending on the answer (so that servers do one thing, and clients do another).

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

If we are a client, we call an `Rpc` with the parameter `SendTo.Server`. An `Rpc` with this parameter can be invoked by anyone (client, host, or server) to be executed on the server.

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

This `Rpc` simply sets the position `NetworkVariable` on the server's instance of this player by just picking a random point on the plane.

<details open>
<summary>Click to show/hide the Code.
</summary>

<!---
```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.poc/tree/feature/hello-world/Assets/Scripts/Shared/HelloWorldPlayer.cs#L35-L39
```
-->
```csharp
        [Rpc(SendTo.Server)]
        void SubmitPositionRequestServerRpc(RpcParams rpcParams = default)
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

You can now create a build which will show the concepts outlined above.

:::tip
Make sure **SampleScene** is included in **BuildSettings** > **Scenes in Build** list.
:::

One build instance can create a host. Another client can join the host's game. Both are able to press a GUI button to move. Server will move immediately and be replicated on client. Client can request a new position, which will instruct the server to modify that server instance's position `NetworkVariable`. That client will apply that `NetworkVariable` position inside of it's Update() method.

## Next Steps

See the following content to continue your journey using Netcode:

* Build on the your growing Hello World project to continue learning about different features of Netcode with [Golden Path Two](gp_module_two.md)
* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../../learn/bitesize/bitesize-clientdriven.md)
