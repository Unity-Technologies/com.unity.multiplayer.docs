---
id: goldenpath_one
title: Golden Path Module One
description: Tutorial that explains adding scripts to objects, editor modes (Host Server and Client), basic player movement and basic RPC use.
---

In this guide we cover the following:

- Adding scripts to your objects
- Adding editor modes inside your game  (Host, Server, and Client)
- Basic Player Movement
- Basic RPC use


## Prerequisites

You should have completed the [Golden Path Foundation module](goldenpath_foundation_module.md) before starting this tutorial. We use the Foundation module as the base for this and other Golden Path modules.

## Create a Clone 'GoldenPath' project

import Createclone from '../../shared/_create_clone_goldenpath.md';

<Createclone/>


## Open GoldenPath_One

1. Open Unity Hub.
1. Select `GoldenPath_One` from the list of projects displayed.
   
<iframe src="https://www.youtube.com/embed/kl5gzvGiXHk?playlist=kl5gzvGiXHk&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Adding Scripts to GoldenPath

This section will add some scripts to Golden Path similar to part two of the Hello World guide that contain the new features we will be covering in this module.

1. In the **Hierarchy** menu, right-click and select **Create Empty** to create an empty `GameObject` that you should name `HelloWorldManager`.
2. Right-click on the **Scripts** folder under **Project** tab > **Assets**, and **Create** a new **C# Script**. Name this script `HelloWorldManager`.
3. Add the `HelloWorldManager` script as a component to your recently created `HelloWorldManager` GameObject. To do this, select the `HelloWorldManager` GameObject, click **Add Component** under the **Inspector** tab, and select **Scripts** > **HelloWorldManager**.
<iframe src="https://www.youtube.com/embed/wdzkZbG2-18?playlist=wdzkZbG2-18&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

4. Open the `HelloWorldManager.cs` script in a text editor of your choice to edit it to match the following code block.

:::info How to Copy
We recommend that you use the **Copy** function in our code blocks to reduce errors when copying and pasting content. Hover over the block and select the **Copy** button that appears in the upper-right corner of the code block. Then paste the content as needed.
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
                var playerObject = NetworkManager.Singleton.SpawnManager.GetLocalPlayerObject();
                var player = playerObject.GetComponent<HelloWorldPlayer>();
                player.Move();
            }
        }
    }
}
```
</details>

5. **Save** your code in your text editor and return to Unity. Unity may take a moment to compile your changes.
   :::note
   You may see an error about `HelloWorldPlayer` not being found. This is okay; we will be addressing this error in a later section.
   :::

## Editor Modes to Golden Path (The HelloWorldManager Script)

Inside the `HelloWorldManager.cs` script, we define two methods that mimic the editor buttons inside of the **NetworkManager** during Play mode.

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

`NetworkManager` implements the singleton pattern as it declares `Singleton`. This is defined when the `MonoBehaviour` is enabled.

This component also contains very useful properties:
* `IsClient` - For whether or not a client is running
* `IsServer` - For whether or not a server is running
* `IsLocalClient` - For whether the server calls a local client or not

`IsClient` and `IsServer` are already established to dictate the connection state.

We call these methods inside `OnGUI()`.
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
You will notice the introduction of a new method, `SubmitNewPosition()`, which we will be using later. 
:::

## Adding basic movement to the Player object 

1. Under your **Project** tab, right-click on your **Scripts** folder. Hover over **Create** and select **C# Script** that you rename `HelloWorldPlayer`.
2. Right-click and **Open** or double-click the `HelloWorldPlayer.cs` script from your **Scripts** folder in the **Project** tab. It will open in your text editor.
3. Copy and paste the following code block into your `HelloWorldPlayer.cs` script, overwriting the autogenerated content. **Save** your changes. The error you may have seen from updating `HelloWorldManger.cs` should be resolved now.
    :::info How to Copy
    We recommend that you use the **Copy** function in our code blocks to reduce errors when copying and pasting content. Hover over the block and select the **Copy** button that appears in the upper-right corner of the code block. Then paste the content as needed.
    :::

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
            Move();
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

4. Select the **Player** prefab from **Project** tab > **Assets** > **Prefabs**.
1. From the **Inspector** tab, scroll to the bottom to click on **Add Component**. Select **Scripts** > **HelloWorld** > `HelloWorldPlayer` to add the script as a component.
<iframe src="https://www.youtube.com/embed/Ui8fRj-mK1k?playlist=Ui8fRj-mK1k&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

This class inherits from `NetworkBehaviour` instead of `MonoBehaviour`.
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

Inside this class, we now define a `NetworkVariable` to represent this player's networked position.

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
            Move();
        }
```
</details>

Any `MonoBehaviour` implementing `NetworkBehaviour` can override the  Netcode for GameObjects method `OnNetworkSpawn()`. This method is fired when the `NetworkObject` gets spawned and the networking is setup. We override `OnNetworkSpawn` since a client and a server will run different logic here. 

:::note
This can be overriden on any `NetworkBehaviour`.
:::

On both client and server instances of this player, we call the `Move()` method to do the following:

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

If we are a client, we call a `ServerRpc`. A [`ServerRpc`](../../advanced-topics/message-system/serverrpc) can be invoked by a client to be executed on the server.

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

The server instance of this player has just modified the Position `NetworkVariable`. This means that if we are a client, we need to apply this position locally inside of our `Update` loop. 

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

We can now go back to `HelloWorldManager.cs` and define the contents of `SubmitNewPosition()`. The following code is already saved in your script if you copied and pasted the `HelloWorldManager` codeblock in the previous section.

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

You can now [create a build](https://docs.unity3d.com/Manual/PublishingBuilds.html) that will demonstrate the concepts outlined above. We are going to create two build instances so you can see players move around each other in your Hello World game.

:::tip
Make sure **SampleScene** is included in **BuildSettings**.
:::

1. Go to **File** > **Build Settings** and select **Add Open Scenes**. This should add **Scenes/SampleScene** to **Scenes In Build**.
2. Select **Build And Run** and save this first instance as **HelloWorld**.
3. Select **Build And Run** again, but save this second instance as **HelloWorld2**.
4. Select one of your build instances as **Host** mode and the other as **Client** mode.
5. Click the **Move**/**Request Position Change** in your instances to watch your players move around each other. As you press the GUI button, the server will move immediately and be replicated on client. Client can request a new position, which will instruct the server to modify that server instance's position `NetworkVariable`. That client will apply that `NetworkVariable` position inside of it's Update() method.

<iframe src="https://www.youtube.com/embed/khZh7lZPzqc?playlist=khZh7lZPzqc&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


:::note Congrats!
Congratulations you have learned the basics of a networked game!
:::

## Next Steps

For more information on the relevant concepts introduced here please refer to the following sections of the documentation:

- [NetworkManager](../../components/networkmanager)
- [NetworkBehaviour](../../basics/networkbehavior)
- [Networkvariable](../../basics/networkvariable)
- [RPC](../../advanced-topics/messaging-system)

import continuelearning from '../../shared/_continue_learning_goldenpath.md';

<continuelearning/>

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Fernando Cortez, Unity. 
:::
