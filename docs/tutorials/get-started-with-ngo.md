---
id: get-started-ngo
title: Get started with NGO
---

Use this guide to learn how to create your first NGO project. It walks you through creating a simple Hello World project that implements the basic features of Netcode for GameObjects (NGO).

## Prerequisites

Before you start, ensure you have the following prerequisites:

* An active Unity account with a valid license.
* The [Unity Hub](https://unity.com/download).
* A NGO-supported version of the Unity Editor. See [NGO requirements](../installation/install#prerequisites).

## Create a Unity 3D project

Create a new 3D project using Unity Editor version 2021.3 or later.

:::note
You can also use the 2D project template with Netcode for GameObjects.
:::

1. Launch the Unity Hub.
2. Select **New project**.



3. Select **3D Core** as the template.

:::note
You can also use the **2D Core** template.
:::

4. Make sure the Editor version you select is 2021.3 or later.
5. Name the project “Hello World.”
6. Select **Create project**.



## Install Netcode for GameObjects

This section guides you through installing the Netcode for GameObjects package in the Unity Editor.

Install the Netcode for GameObjects package:

1. From the Unity Editor, select **Window** > **Package Manager**.
2. From the Package Manager, select **Add (+)** > **Add package by name…**



3. Type (or copy and paste) `com.unity.netcode.gameobjects` into the package name field, then select **Add**.



4. Wait for Unity to finish installing the package, then you can close the Package Manager window.

Now that you have a new project and the NGO package installed, you can start creating the essential components of an NGO multiplayer game.

## Add the basic components

This section guides you through adding the essential components of a networked game

### Create the `NetworkManager` component

This section guides you through creating a `NetworkManager` component.

First, create the `NetworkManager` component:

1. Right-click in the **Hierarchy** tab, then select **Create Empty** to create an empty GameObject.



2. Rename the empty GameObject **NetworkManager**.



3. Select **NetworkManager**, then select **Add Component** from the **Inspector** tab.



4. Select **Netcode** > **NetworkManager** from the component list.



5. Select **UnityTransport** as the **Network Transport**.
6. Save the scene by selecting **File** > **Save**.

### Create an object to spawn for each connected player

This section guides you through creating an object that spawns for each connected player.

1. In the Unity Editor, right-click within the **Hierarchy** tab, then select **3D Object** > **Capsule**.
2. Name the Capsule Object **Player**.



3. With Player selected, add a `NetworkObject` component in the **Inspector** tab by selecting **Add Component** > **NetworkObject**.



4. Right-click within the **Assets** folder under the **Project** tab, then select **Create** > **Folder**.
5. Name the folder **Prefabs**.



6. Make the **Player** object you created earlier into a prefab by dragging it from the **Hierarchy** tab into the **Prefabs** folder.



7. Delete the Player from the scene by selecting the Player capsule within the **Scene** tab, then pressing the **Delete** key.

:::tip
You can remove the `Player` object from the scene because you assign this network prefab to the Player Prefab property in the `NetworkManager` component. The library doesn't support defining a player object as an in-scene placed `NetworkObject`.
:::

8. Select **NetworkManager**.



9. With `NetworkManager` selected, locate the **PlayerPrefabs** field in the **Inspector** tab.



10. Drag the **Player** prefab from the **Project** tab into the **PlayerPrefab** slot you created in the **Inspector** tab.

:::important
When you drop the prefab into the **PlayerPrefab** slot, you are telling the library that when a client connects to the game, it should automatically spawn this prefab as the character for the connecting client. NGO won’t spawn a player object if you don't have any prefab set as the **PlayerPrefab**.
:::



11. Add a 3D Plane (centered at 0,0,0) to the scene by right-clicking in the **Hierarchy** tab, then selecting **3D Object** > **Plane**.

:::note
Adding the Plane adds a visual reference point to visualize the Player prefab’s position, but it isn’t necessary.
:::



12. Save the scene by selecting **File** > **Save**.



### Add your scene to the build

This section guides you through adding your scene to the build.

The **Enable Scene Management** for the `NetworkManager` setting allows the server to control which scenes should load for the clients. However, you must add the current scene to the build to enter Play mode.

:::note
The **Enable Scene Management** option for the `NetworkManager` is enabled by default.
:::

1. Open the Build Settings window by selecting **File** > **Build Settings**.



2. Select **Add Open Scenes**.



You should see **Scenes/SampleScene** listed under **Scenes In Build**. You can close the Build Settings window.

## Add RPCs

This section guides you through adding basic RPCs to the project.

Create a script named `RpcTest.cs`:

1. In the **Project** tab, select **Assets** > **Scripts**.
2. Right-click in the **Scripts** folder and select **Create** > **C# Script**.
3. Name the script `RpcTest`.

Add the `RpcTest.cs` script to the Player prefab:

1. Select the **Player** prefab in **Assets** > **Prefabs**.
2. In the **Inspector** tab (with the Player prefab selected), select **Add Component**.
3. Select **Scripts **> **Rpc Test**.

Edit the `RpcTest.cs` script:

1. In the **Project** tab, select **Assets** > **Scripts** > **`RpcTest`**.
2. In the **Inspector** tab (with the script selected), select **Open**. This opens this script in the default local text editor.
3. Edit the `RpcTest.cs` script to match the following:

```csharp
using Unity.Netcode;
using UnityEngine;

public class RpcTest : NetworkBehaviour
{
    public override void OnNetworkSpawn()
    {
        if (!IsServer)
        {
            TestServerRpc(0);
        }
    }

    [ClientRpc]
    void TestClientRpc(int value)
    {
        if (IsClient)
        {
            Debug.Log("Client Received the RPC #" + value);
            TestServerRpc(value + 1);
        }
    }

    [ServerRpc]
    void TestServerRpc(int value)
    {
        Debug.Log("Server Received the RPC #" + value);
        TestClientRpc(value);
    }
}
```

4. Save the scene by selecting **File** > **Save**.

### Test the RPCs

This section guides you through testing the RPCs you added in the earlier section.

1. Select **File** > **Build And Run**.
2. Stop the player.
3. Launch the client and server together in a terminal as shown in [Test the command line helper](#test-the-command-line-helper).

After the client and server spawn, you should see a log in the **Console** of the client and server sending RPC messages to each other.

The client kicks off the exchange in its `Update` call the first time with a counter value of `0`. It then makes an RPC call to the server with the next value. The server receives this and calls the client. In the console tab, you should see:

```console
Server Received the RPC #1
Client Received the RPC #1
Server Received the RPC #2
Client Received the RPC #2
Server Received the RPC #3
Client Received the RPC #3
...
```

## Extend the functionality with scripts

The section shows how to extend the functionality of the Hello World project with two scripts: `[HelloWorldPlayer.cs](#heading=h.fk8v316gdxx)` and `[HelloWorldManager.cs](#heading=h.c5vxdyyb4vs)`.

### `HelloWorldManager.cs` script

In the Hello World project from [earlier](#add-the-basic-components), you created a `NetworkManager` by adding the pre-created `NetworkManager` component.

In Play Mode, the `NetworkManager` shows three Unity Editor buttons labeled “Host,” “Client,” and “Server.”

* The **Host** button starts the game as a host player.
* The **Client** button starts the game as a client player.
* The **Server** button starts the game as a server.

The `HelloWorldManager.cs` script defines two methods that mimic the functionality Host, Client, and Server buttons: `StartButtons()` and `StatusLabels()`during Play Mode.

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

You can statically access the `NetworkManager` instance from any other scripts via its singleton named `Singleton`. This is defined when the `MonoBehaviour` is enabled. This component also has useful properties, such as `IsClient`, `IsServer`, and `IsLocalClient`. The `IsClient` and `IsServer` properties dictate the established connection state.

The `NetworkManager` component also has useful properties, such as `IsClient`, `IsServer`, and `IsLocalClient`. The script calls these three methods inside of `OnGUI()`.

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

:::note
The `HelloWorldManager.cs` script introduces a new method called `SubmitNewPosition()` that the `HelloWorldPlayer` script uses to [create a simple RPC call](#add-simple-rpc-use).
:::

#### Create the `HelloWorldManager.cs` script

This section guides you through creating the `HelloWorldManager.cs` script.

Create a new script in the `Scripts` folder named `HelloWorldManager.cs`:

1. From the **Project** tab, select **Assets** > **Scripts**.
2. Right-click in the **Scripts** folder.
3. Select **Create** > **C# Script**.
4. Name the script `HelloWorldManager`.

Edit the `HelloWorldManager.cs` script:

1. Select the `HelloWorldManager.cs` file in the **Scripts** folder.
2. From the Inspector tab, select **Open** to open the script in a text editor.
3. Edit the `HelloWorldPlayer.cs` script to match the following code:

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

4. Save the scene by selecting **File** > **Save**.

### `HelloWorldPlayer.cs` script

The `HelloWorldPlayer.cs` script adds some basic movement to the Hello World project player. Both the server player and the client player can initiate player movement. However, the movement occurs through the server’s position `NetworkVariable`, which means the server player can move immediately, but the client player must request a movement from the server, wait for the server to update the position `NetworkVariable`, then replicate the change locally.

The `HelloWorldPlayer` class inherits from `NetworkBehaviour` instead of `MonoBehaviour`.

```csharp
public class HelloWorldPlayer : NetworkBehaviour
```

The `HelloWorldPlayer` class defines a `NetworkVariable` to represent the player's networked position.

```csharp
public NetworkVariable<Vector3> Position = new NetworkVariable<Vector3>();
```

The `HelloWorldPlayer` class overrides `OnNetworkSpawn`.

```csharp
       public override void OnNetworkSpawn()
        {
            if (IsOwner)
            {
                Move();
            }
        }
```

Any `MonoBehaviour` implementing `NetworkBehaviour` can override the Netcode method `OnNetworkSpawn()`. The `OnNetworkSpawn()` method fires in response to the `NetworkObject` spawning. The `HelloWorldPlayer` class overrides `OnNetworkSpawn` since clients and the server run different logic.

:::note
You can override this behavior on any `NetworkBehaviour`.
:::

The script calls the `Move()` method on both client and server instances of the player. The `Move()` script does the following:

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

#### Create the `HelloWorldPlayer.cs` script

This section guides you through creating the `HelloWorldPlayer.cs` script.

Create a new script in the `Scripts` folder named `HelloWorldPlayer.cs`:

1. From the **Project** tab, select **Assets** > **Scripts**.
2. Right-click in the **Scripts** folder.
3. Select **Create** > **C# Script**.
4. Name the script `HelloworldPlayer`.

Edit the `HelloWorldPlayer.cs` script:

1. Select the `HelloWorldPlayer.cs` file in the **Scripts** folder.
2. From the Inspector tab, select **Open** to open the script in a text editor.
3. Edit `HelloWorldPlayer.cs` to match the following code:

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

4. Save the scene by selecting **File** > **Save**.

#### Add the `HelloWorldPlayer.cs` script to the Player prefab

This section guides you through adding the `HelloWorldPlayer.cs` script to the Player prefab.

Select the Player prefab:

1. From the **Project** tab, select **Assets** > **Prefabs**.
2. Select **Player**.

Add the `HelloWorldPlayer.cs` script to the Player prefab as a component:

1. With the Player prefab selected, select **Add Component** from the Inspector tab.
2. Select **Scripts** > **Hello World** > **Hello World Player**.

#### Add simple RPC use

This section walks you through the sample code that adds a simple RPC.

If the player is a server-owned player at `OnNetworkSpawn()`, you can immediately move this player, as suggested in the following code.

```csharp
           if (NetworkManager.Singleton.IsServer)
            {
                var randomPosition = GetRandomPositionOnPlane();
                transform.position = randomPosition;
                Position.Value = randomPosition;
            }
```

If the player is a client, the script calls a `ServerRpc`. Clients can invoke a `ServerRpc` to execute on the server.

```csharp
           else
            {
                SubmitPositionRequestServerRpc();
            }
```

The `ServerRpc` sets the position `NetworkVariable` on the server's instance of the player by just picking a random point on the plane.

```csharp
       [ServerRpc]
        void SubmitPositionRequestServerRpc(ServerRpcParams rpcParams = default)
        {
            Position.Value = GetRandomPositionOnPlane();
        }
```

The server instance of the player modifies the `Position` `NetworkVariable` through the `ServerRpc`. If the player is a client, it must apply the position locally inside the `Update` loop.

```csharp
       void Update()
        {
            transform.position = Position.Value;
        }
```

Since the `HelloWorldPlayer.cs` script handles the position `NetworkVariable`, the `HelloWorldManager.cs` script can define the contents of `SubmitNewPosition()`.

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

The method in the code block above adds a contextual button that changes depending on whether the client is a server or a client. When you press the button this method creates, it finds your local player and calls `Move()`.

You can now create a build that demonstrates the concepts outlined above.

Create two build instances: one for the host and the other for the client (to join the host's game).

Both build instances can move the player with the GUI button. The server moves the player immediately and replicates the movement on the client.

The client can request a new position, which instructs the server to change that instance's position `NetworkVariable`. After the server updates the position `NetworkVariable`, the client applies that `NetworkVariable` position inside of its `Update()` method.

## Add a `NetworkTransform`

This section guides you through adding a `NetworkTransform` component that moves the player.

Add a `NetworkTransform` component to the Player prefab:

1. Select the **Player** prefab in Assets > Prefabs.
2. In the **Inspector** tab (with the Player prefab selected), select **Add Component**.
3. Select **Netcode** > **NetworkTransform**.

Create a script named `NetworkTransformTest.cs`.

1. In the **Project** tab, go to **Assets** > **Scripts**.
2. Right-click, then select **Create** > **C# Script**.
3. Name it `NetworkTransformTest`.

Add the `NetworkTransformTest` script to the Player prefab:

1. Select the **Player** prefab in **Assets** > **Prefabs**.
2. In the **Inspector** tab (with the Player prefab selected), select **Add Component**.
3. Select **Scripts** > **Network Transform Test**.

Edit the `NetworkTransformTest.cs` script:

1. In the **Project** tab, select **Assets** > **Scripts** > **`NetworkTransformTest`**.
2. In the **Inspector** tab (with the script selected), select **Open**. This opens this script in the default local text editor.
3. Edit the `NetworkTransformTest.cs` script to match the following:

```csharp
using System;
using Unity.Netcode;
using UnityEngine;

public class NetworkTransformTest : NetworkBehaviour
{
    void Update()
    {
        if (IsServer)
        {
            float theta = Time.frameCount / 10.0f;
            transform.position = new Vector3((float) Math.Cos(theta), 0.0f, (float) Math.Sin(theta));
        }
    }
}
```

4. Save the scene by selecting **File** > **Save**.

### Test the `NetworkTransform`

This section guides you through testing the `NetworkTransform` you added in the earlier section.

1. Select **File** > **Build And Run**.
2. Stop the player.
3. Launch the client and server together in a terminal as shown in [Test the command line helper](#test-the-command-line-helper).

After the client and server spawn, you should see the player capsule moving in a circle on both the client and the server.

## Create a command line helper

This section demonstrates how to create a command line helper that launches the project outside the Unity Editor to make testing builds easier.

:::tip
Using a command line helper script to launch multiple instances of a game build isn’t the only way to test a multiplayer game. Starting with [Multiplayer Tools](../install-tools) (`com.unity.multiplayer.tools`) version 1.1.2, you can use Multiplayer Play Mode.
:::

1. Right-click the **Assets** folder in the **Projects** tab, then select **Create** > **Folder**.
2. Name the new folder **Scripts**.



3. Right-click the **Scripts** folder you created, then select **Create** > **C# Script**.
4. Name the script **NetworkCommandLine**.



5. Right-click on **NetworkManager** within the **Hierarchy** list, then select **Create Empty**.



6. Name the new GameObject **NetworkCommandLine**.



7. With the `NetworkCommandLine` GameObject selected, select **Add Component** from the **Inspector** tab.



8. For the new component, select **Scripts** > **Network Command Line** (the `NetworkCommandLine.cs` script you created earlier).



9. Double-click on the **NetworkCommandLine.cs** script from the **Project** tab to open it in a text editor.
10. Edit the `NetworkCommandLine.cs` script to match the following code snippet:

```csharp
using System.Collections.Generic;
using Unity.Netcode;
using UnityEngine;

public class NetworkCommandLine : MonoBehaviour
{
   private NetworkManager netManager;

   void Start()
   {
       netManager = GetComponentInParent<NetworkManager>();

       if (Application.isEditor) return;

       var args = GetCommandlineArgs();

       if (args.TryGetValue("-mode", out string mode))
       {
           switch (mode)
           {
               case "server":
                   netManager.StartServer();
                   break;
               case "host":
                   netManager.StartHost();
                   break;
               case "client":
         
                   netManager.StartClient();
                   break;
           }
       }
   }

   private Dictionary<string, string> GetCommandlineArgs()
   {
       Dictionary<string, string> argDictionary = new Dictionary<string, string>();

       var args = System.Environment.GetCommandLineArgs();

       for (int i = 0; i < args.Length; ++i)
       {
           var arg = args[i].ToLower();
           if (arg.StartsWith("-"))
           {
               var value = i < args.Length - 1 ? args[i + 1].ToLower() : null;
               value = (value?.StartsWith("-") ?? false) ? null : value;

               argDictionary.Add(arg, value);
           }
       }
       return argDictionary;
   }
}
```

11. Save the file, then return to the Unity Editor.
12. Open the Build Settings window by selectoing **File** > **Build Settings**.
13. Select **Player Settings...**.



14. Beneath **Settings for PC, Mac, & Linux Standalone**, select **Resolution and Presentation** to open the section options.



15. From **Resolution** > **Fullscreen Mode**, change **Fullscreen Window** to **Windowed**.



16. Return to the Editor main window and save your scene.

### Test the command line helper

Test that the command line helper script works.

1. Select **File** > **Build and Run**.
2. Create a new folder called `Build` inside your Hello World project folder.
3. Save As the binary “`HelloWorld`.”

Saving the project in this way causes the Unity Editor to build and launch the project in a new window. After it launches (and you see the plane), close the window you just launched.

#### Test on Windows

For Windows you should do the following:

1. Open the Command Prompt.
2. Use the following command to launch the server and the client. Be sure to change the noted section `&lt; &rt;` of both commands to your project.

:::note
You may get a UAC prompt requesting permission for the binary to run you should allow it.
:::

Command to start the server:

```cmd
<Path to Project>\Build\HelloWorld.exe -mode server
```

Command to start the client:

```cmd
<path to project>\Build\HelloWorld.exe -mode client
```

To run these commands on a single line:

```cmd
HelloWorld\Build\HelloWorld.exe -mode server & HelloWorld\Build\HelloWorld.exe -mode client
```

Here’s an example of what your command might look like when you replace the placeholder text in `&lt;>`:

```cmd
C:\Users\sarao>HelloWorld\Build\HelloWorld.exe -mode server & HelloWorld\Build\HelloWorld.exe -mode client
```

:::important
On Windows, no standard out stream exists by default, so you will need to view the `Debug.log` file to see the outputs. You can find the `Debug.log` files in:

```cmd
C:\Users\username\AppData\LocalLow\CompanyName\ProductName\Player.log
```

Where the `<em>CompanyName</em>` should default to `<em>DefaultCompany</em>` for a new project and `<em>ProductName</em>` should be equal to the project's name.

Alternatively you can modify the Windows commands to create a `<em>log.txt</em>` file in the same folder as your `<em>HelloWorld</em>` folder.

Modify the commands as follows:

Server command:
```cli
<Path to Project>\Build\HelloWorld.exe -logfile log-server.txt -mode server
```

Client command:

```cli
<Path to Project>\Build\HelloWorld.exe  -logfile log-client.txt -mode client
```

Example (Running as a single command line):

```cli
C:\Users\sarao>HelloWorld\Build\HelloWorld.exe -logfile -log-server.txt -mode server & HelloWorld\Build\HelloWorld.exe -logfile log-client.txt -mode client
```
:::

#### Test on MacOS

For Mac you should do the following:

1. Open the Terminal app.
2. Use the following command to launch the server and the client. Be sure to change the noted section `&lt; &rt;` of both commands to your project.

Command to start the server:

```bash
<Path to Project>/Build/HelloWorld.app/Contents/MacOS/<Project Name> -mode server -logfile -
```

Command to start the client

```bash
<Path to Project>/Build/HelloWorld.app/Contents/MacOS/<Project Name> -mode client -logfile -
```

To run both as a single command:

```bash
<Path to Project>/Build/HelloWorld.app/Contents/MacOS/<Project Name> -mode server -logfile - & ; ~ <Path to Project>/Build/HelloWorld.app/Contents/MacOS/<Project Name> -mode client -logfile -
```

## Test Hello World

This section shows how to start the Scene and the Host.

1. Select **Play** from the top of the Unity Editor to start the scene.



2. Select **NetworkManager** from the **Hierarchy** list.



3. With NetworkManager selected, select **Start Host** from the **Inspector** tab.



If it works correctly, you should see the option to **Stop Host** in the **Inspector** tab.


