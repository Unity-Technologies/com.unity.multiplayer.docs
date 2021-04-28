---
id: goldenpath
title:  Hello World to Goldenpath
description: Tutorial that explains adding a command line handler, network variables (client and server-controlled), network transforms for auto-movement, and RPC introduction.
---


In this guide we will build on the work we have already done in Hello World and add in a few more features, we will be covering the following:

- Adding a command line handler (to make launching easier)
- Network variables (client and server-controlled) 
- Network transforms
- RPCs

As there are some minor differences between this tutorial and the hello world one we will be starting afresh.



:::contribution Special Thanks

 This guide would not have been possible without the hard work and support of Matt Walsh. 
:::
## Create a new project in Unity
:::important
This tutorial requires an MLAPI-supported version of Unity (2019.4+).
:::

1. Open the Unity Hub.
1. Click New. 
1. Select type ‘3D’
1. Rename the project **GoldenPath**.
1. Select the location to save the project.

:::note
You will need to remember this path for later in the [guide](#creating-a-command-line-helper), when you are testing building the project from the command line. For this guide our path was `~/dev/mlapi-golden-path/`
:::

<iframe src="https://www.youtube.com/embed/AOZE-b9Q8R8?playlist=AOZE-b9Q8R8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Import MLAPI Package via URL


See the [Install MLAPI](../migration/installation.md) guide to install the MLAPI package.

## Creating Network Manager and selecting the Transport

1. Right click in the Hierarchy tab of the Main Unity Window.
1. Select **Create Empty**.
1. Rename the GameObject **NetworkManager**.
   
  :::tip
  We renamed the GameObject because:
    * It makes it  easier to refer to later.
    * There should only be one **NetworkManager**, this is the object that contains the  `NetworkManager` component.
  :::

  You have now created a new GameObject called **NetworkManager**.

1. Select **NetworkManager**.
1. Click **Add Component** in the Inspector Tab.
1. Select **MLAPI** from the list shown.
1. Select `NetworkManager` Component from the list displayed.
1. Inside the `NetworkManager` component tab, locate the  `NetworkTransport` field. 
1. Click "Select Transport".
1. Select `UnetTransport`.
1. Save your scene.


<iframe src="https://www.youtube.com/embed/ZYEUWzsXEoY?playlist=ZYEUWzsXEoY&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



## Creating an object to spawn for each connected player

1. Create 3D Object->Capsule (name it **Player**). 
1. Add a `NetworkObject` component.
1. Click the Assets folder.
1. Create a new Folder and call it **Prefabs**.
1. Make **Player** a prefab by dragging it to **Prefabs** folder you just created.
1. Delete **Player** from scene.

  :::tip
  We remove **Player**, because we will be using the network library to spawn the player. The library cannot track objects that start in the scene.
  :::

1. Select `NetworkManager`.
1. Inside the `NetworkManager` component tab, locate the  `NetworkPrefabs` field. 
1. Click `+` to create a slot
1. Drag this player prefab from above into the new empty slot

  :::tip
  When you select the **Default Player Prefab** , you are telling the library that when a client connect to the game, automatically spawn this prefab as the character for the connecting client. If you do not have the default selected for any prefab the game will crash on client connect.
  :::

  :::note
   You may see the following error reported `There is no NetworkPrefab Marked as a PlayerPrefab`. Once you have completed the above steps you can clear the error.
  :::

1. Create a 3D Object->Plane, centered at (0,0,0).
1. Save your scene

<iframe src="https://www.youtube.com/embed/B_FWb4J1Pxw?playlist=B_FWb4J1Pxw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing the basic network building blocks

1. To do a quick test you can click play.  
1. The Editor will start, and you will just see the plane.  
1. Without stopping the editor's play mode, navigate to the `NetworkManager` component in the Hierarchy tab (it will be underneath `DontDestroyOnLoad`).  
1. In the `NetworkManager` inspector scroll down and find the `Start Host` button.  
1. If you click it, you will see the player capsule spawn. 
1. Stop the player.

<iframe src="https://www.youtube.com/embed/iLb00icvRMs?playlist=iLb00icvRMs&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Creating a command line helper
This command line helper will help us launch our project from a command line.

1. Click the Assets folder.
1. Create a new Folder and call it **Scripts**.
1. Create a script called `NetworkCommandLine`.
1. Right click on the `NetworkManager` in the hierarchy view.
1. Create an empty GameObject underneath it.
1. Rename it `NetworkCommandLine`.
1. In inspector  for `NetworkCommandLine` Click **Add Component** 
1. Click **Scripts** and add the `NetworkCommandLine.cs` script you created earlier.
1. Open the `NetworkCommandLine.cs` script.
1. Edit the `NetworkCommandLine.cs` script to match the following.

:::tip 
You can copy the script from here and paste it into your file.
   1. Select the code sample.
   1. Click **Copy** in the top right corner.
   1. Paste it into your code editor.
:::

<details open>
<summary>Click to show/hide the Code.

</summary>

``` csharp
using System.Collections.Generic;
using MLAPI;
using UnityEngine;

public class NetworkCommandLine : MonoBehaviour
{
   private NetworkManager netManager;

   void Start()
   {
       netManager = GetComponentInParent<NetworkManager>();

       if (Application.isEditor) return;

       var args = GetCommandlineArgs();

       if (args.TryGetValue("-mlapi", out string mlapiValue))
       {
           switch (mlapiValue)
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

</details>

1. Select  **File > Build Settings > Player Settings...**
1. Change `Full Screen` mode into `Windowed` mode.  
1. Save your scene.

   
:::tip
   If you are on a Pro Unity license, you may want to disable the splash screen
:::

<iframe src="https://www.youtube.com/embed/2swybHUigM8?playlist=2swybHUigM8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

### Testing the command line helper
1. Select **File > Build and Run**. 
1. Create a folder called `Build`.
1. Name the binary `GoldenPath`.  
1. Your project will build, and it will launch, and you should see the plane.  
1. Quit your app.
1. Let's launch from the command line.  
   
#### For Windows

#### For Mac

1. Open terminal
1. Enter the following `~/dev/mlapi-golden-path/GoldenPath/Build/GoldenPath.app/Contents/MacOS/GoldenPath -mlapi server -logfile - & ; ~/dev/mlapi-golden-path/GoldenPath/Build/GoldenPath.app/Contents/MacOS/GoldenPath -mlapi client -logfile -` 

You should see two players spawn.  Both should show a plane and a capsule (the capsule being the single player that was spawned)  

<iframe src="https://www.youtube.com/embed/84wxdetXUQw?playlist=84wxdetXUQw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>




## Introducing a Server-controlled Network Variable 
 
1. Open the Scripts Folder.
1. Create a script called `NetworkVariableTest`.
1. Click the **Player** prefab.
1. In inspector for the **Player** prefab click **Add Component** 
1. Click **Scripts** and add the `NetworkVariableTest.cs` script you created earlier
1. Open the `NetworkVariableTest.cs` script.
1. Edit the `NetworkVariableTest.cs` script to match the following.


<details open>
<summary>Click to show/hide the Code.

</summary>

``` csharp
using MLAPI;
using MLAPI.NetworkVariable;
using UnityEngine;

public class NetworkVariableTest : NetworkBehaviour
{
    private NetworkVariable<float> ServerNetworkVariable = new NetworkVariable<float>();
    private NetworkVariable<float> ClientNetworkVariable = new NetworkVariable<float>();
    private float last_t = 0.0f;

    void Start()
    {
        ClientNetworkVariable.Settings.WritePermission = NetworkVariablePermission.OwnerOnly;
        ClientNetworkVariable.Settings.ReadPermission = NetworkVariablePermission.ServerOnly;

        if (IsServer)
        {
            ServerNetworkVariable.Value = 0.0f;
            Debug.Log("Server's var initialized to: " + ServerNetworkVariable.Value);
        }
        else if (IsClient)
        {
            ClientNetworkVariable.Value = 0.0f;
            Debug.Log("Client's var initialized to: " + ClientNetworkVariable.Value);
        }
    }

    void Update()
    {
        var t_now = Time.time;
        if (IsServer)
        {
            ServerNetworkVariable.Value = ServerNetworkVariable.Value + 0.1f;
            if (t_now - last_t > 0.5f)
            {
                last_t = t_now;
                Debug.Log("Server set its var to: " + ServerNetworkVariable.Value + ", has client var at: "  + 
                    ClientNetworkVariable.Value);
            }
        }
        else if (IsClient)
        {
            ClientNetworkVariable.Value = ClientNetworkVariable.Value + 0.1f;
            if (t_now - last_t > 0.5f)
            {
                last_t = t_now;
                Debug.Log("Client set its var to: " + ClientNetworkVariable.Value + ", has server var at: "  + 
                    ServerNetworkVariable.Value);
            }
        }
    }
}
```
</details>

1. Save your scene.

<iframe src="https://www.youtube.com/embed/JsEVE6UaBIU?playlist=JsEVE6UaBIU&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing Server-controlled Network Variables 

1. Select **File > Build and Run**. 
1. Stop the player 
1. Launch the client & server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn.  
1. You should expect to see this in the console, showing that the server and client are sharing the variable. 

```
Server's var initialized to: 0
Client's var initialized to: 0
Server set its var to: 0.1, has client var at: 0
Client set its var to: 0.1, has server var at: 0.2
Server set its var to: 3.099999, has client var at: 2.6
Client set its var to: 3.099999, has server var at: 3.199999
Server set its var to: 6.099997, has client var at: 5.599997
```
:::note
Since the printing doesn't happen on every tick, the numbers won't match up perfectly.
:::

<iframe src="https://www.youtube.com/embed/cUvZ3m0idpM?playlist=cUvZ3m0idpM&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Introducing Network Transform

1. Click **Player** prefab. 
1. Click **Add Component** in the Inspector Tab.
1. Select **MLAPI** from the list shown.
1. Select `Network Transform` from the list shown.
1. Open the Scripts Folder.
1. Create a script called `NetworkTransformTest`.
1. Click the **Player** prefab.
1. In inspector for the **Player** prefab click **Add Component** 
1. Click **Scripts** and add the `NetworkTransformTest.cs` script you created earlier
1. Open the `NetworkTransformTest.cs` script.
1. Edit the `NetworkTransformTest.cs` script to match the following.

<details open>
<summary>Click to show/hide the Code.

</summary>

```csharp
using System;
using MLAPI;
using UnityEngine;

public class NetworkTransformTest : NetworkBehaviour
{
    void Update()
    {
        if (IsClient)
        {
            float theta = Time.frameCount / 10.0f;
            transform.position = new Vector3((float) Math.Cos(theta), 0.0f, (float) Math.Sin(theta));
        }
    }
}
```
</details>

1. Save your scene.

<iframe src="https://www.youtube.com/embed/TJkK3YTIkUs?playlist=TJkK3YTIkUs&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing Network Transform

1. Select **File > Build and Run**. 
1. Stop the player 
1. Launch the client & server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn. 
1. You should see the player capsule moving in a circle on both the client and the server

<iframe src="https://www.youtube.com/embed/CQN_YUqdPfU?playlist=CQN_YUqdPfU&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



## Introducing RPCs

1. Open the Scripts Folder.
1. Create a script called `RpcTest`.
1. Click the **Player** prefab.
1. In inspector for the **Player** prefab click **Add Component** 
1. Click **Scripts** and add the `RpcTest.cs` script you created earlier
1. Right Click **Player** prefab. 
1. Open the `RpcTest.cs` script.
1. Edit the `RpcTest.cs` script to match the following.

<details open>
<summary>Click to show/hide the Code.

</summary>

```csharp
using MLAPI;
using MLAPI.Messaging;
using UnityEngine;

public class RpcTest : NetworkBehaviour
{
    private bool firstTime = true;

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
        if (IsServer)
        {
            Debug.Log("Server Received the RPC #" + value);
            TestClientRpc(value);
        }
    }
    
    // Update is called once per frame
    void Update()
    {
        if (IsClient && firstTime)
        {
            firstTime = false;
            TestServerRpc(0);
        }
    }
}
```
</details>
1. Save your scene.

<iframe src="https://www.youtube.com/embed/UEYj16CouLE?playlist=UEYj16CouLE&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



### Testing RPCs

1. Select **File > Build and Run**. 
1. Stop the player 
1. Launch the client & server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn.  
1. In the console, you should expect to see the client and server sending RPC messages to each other. 
1. The client kicks off the exchange in its `Update` call the first time with a counter value of 0.  
1. It then makes an RPC call to the server with the next value.  The server receives this and calls the client, etc.  In the console view, you will see:

```
Server Received the RPC #1
Client Received the RPC #1
Server Received the RPC #2
Client Received the RPC #2
Server Received the RPC #3
Client Received the RPC #3
...
```
<iframe src="https://www.youtube.com/embed/0mSciPQauyw?playlist=0mSciPQauyw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



:::note Congrats!
Congratulations you have learnt how to use some of the basic building blocks of Multiplayer game creation. For more information on the relevant concepts intorduced here please refer to the following sections of the documentaiton:

- [Network variables (client and server-controlled)](../mlapi-basics/networkvariable.md)
- [Network transforms](../components/networktransform.md)
- [RPCs](../advanced-topics/message-system/about-rpc.md)
:::

