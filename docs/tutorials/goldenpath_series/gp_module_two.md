---
id: goldenpath_two
title: Golden Path Module Two
description: Tutorial covering, Network variables (client and server-controlled), Network transforms, and RPCs. 
---

In this Guide e will be covering the following:

- Network variables (client and server-controlled)
- Network transforms
- RPCs

## Requirements

You should have completed the foundation module [here](goldenpath_foundation_module) before starting this tutorial..

## Create a Clone 'GoldenPath' project

import Createclone from '../../shared/_create_clone_goldenpath.md';

<Createclone/>


## Open GoldenPath_Two

1. Open Unity Hub.
1. Select `GoldenPath_Two` from the list of projects displayed.

## Introducing a Server-controlled Network Variable 

This section adds a Server-controlled Network Variable to the project.
 
1. Open the **Scripts** Folder.
1. Create a script called `NetworkVariableTest`.
1. Click the **Player** prefab.
1. In the **Player** prefab Inspector tab, click **Add Component**. 
1. Click **Scripts**, and add the `NetworkVariableTest.cs` script you created earlier.
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

8. Save your scene.

<iframe src="https://www.youtube.com/embed/JsEVE6UaBIU?playlist=JsEVE6UaBIU&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing Server-controlled Network Variables 

Now we will test the Server-controlled Network Variable works as we intended.

1. Select **File > Build and Run**. 
1. Stop the player.
1. Launch the client and server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn.  
1. You should see the following in the console, showing that the server and client are sharing the variable:


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
Since the printing to the terminal does not happen on every tick, the numbers will not match up perfectly.
:::

<iframe src="https://www.youtube.com/embed/cUvZ3m0idpM?playlist=cUvZ3m0idpM&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


## Introducing Network Transform

This section adds a Network Transform component that will move the player.

1. Click **Player** prefab. 
1. Click **Add Component** in the Inspector Tab.
1. Select **MLAPI** from the list shown.
1. Select the **Network Transform** component from the list shown.
1. Open the **Scripts** Folder.
1. Create a script called `NetworkTransformTest`.
1. Click the **Player** prefab.
1. In the **Player** prefab Inspector tab, click **Add Component** 
1. Click **Scripts**, and add the `NetworkTransformTest.cs` script you created earlier.
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

12. Save your scene.

<iframe src="https://www.youtube.com/embed/TJkK3YTIkUs?playlist=TJkK3YTIkUs&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>


### Testing Network Transform

Now we check that the Network Transform functions correctly.

1. Select **File > Build and Run**. 
1. Stop the player. 
1. Launch the client and server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn. 
1. You should see the player capsule moving in a circle on both the client and the server.

<iframe src="https://www.youtube.com/embed/CQN_YUqdPfU?playlist=CQN_YUqdPfU&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



## Introducing RPCs

This section adds some basic RPCs to the project.

1. Open the **Scripts** Folder.
1. Create a script called `RpcTest`.
1. Click the **Player** prefab.
1. In the  **Player** prefab Inspector tab, click **Add Component**.
1. Click **Scripts**, and add the `RpcTest.cs` script you created earlier.
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

9. Save your scene.

<iframe src="https://www.youtube.com/embed/UEYj16CouLE?playlist=UEYj16CouLE&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>



### Testing RPCs

Now we will test that the client and server are both recieving the RPCs correctly.


1. Select **File > Build and Run**. 
1. Stop the player.
1. Launch the client and server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn.  
1. In the console, you should expect to see the client and server sending RPC messages to each other. 
1. The client kicks off the exchange in its `Update` call the first time with a counter value of 0.  
1. It then makes an RPC call to the server with the next value.  The server receives this and calls the client.  In the console view, you will see:

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
Congratulations you have learned how to use some of the basic building blocks of Multiplayer game creation. 
:::

## Next Steps


For more information on the relevant concepts introduced here please refer to the following sections of the documentation:

- [Network variables (client and server-controlled)](../../mlapi-basics/networkvariable.md)
- [Network transforms](../../components/networktransform.md)
- [RPCs](../../advanced-topics/messaging-system.md)


:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Matt Walsh, Unity. 
:::