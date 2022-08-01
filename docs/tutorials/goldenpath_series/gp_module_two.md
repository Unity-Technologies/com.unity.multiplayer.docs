---
id: goldenpath_two
title: Golden Path Module Two
description: Tutorial covering, Network variables (client and server-controlled), Network transforms, and RPCs. 
---

Golden Path Two continues on the work from [Hello World](../helloworld.md) and [Golden Path One](gp_module_one.md) to add a few more features.

This guide covers:

- Network variables (client and server-controlled)
- Network transforms
- RPCs

:::note
The videos on this page were removed because they were out-of-date and caused more confusion than help. All videos in the Hello World and Golden Path series will be recreated and added back at a later time.
:::

## Prerequisites

You should have completed the [Hello World project](../helloworld.md) and [Golden Path One](gp_module_one.md) before starting this tutorial.

## Open your Hello World project

1. Open Unity Hub.
1. Select `Hello World` from the list of projects displayed.

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
using Unity.Netcode;
using UnityEngine;

public class NetworkVariableTest : NetworkBehaviour
{
    private NetworkVariable<float> ServerNetworkVariable = new NetworkVariable<float>();
    private float last_t = 0.0f;

    public override void OnNetworkSpawn()
    {
        if (IsServer)
        {
            ServerNetworkVariable.Value = 0.0f;
            Debug.Log("Server's var initialized to: " + ServerNetworkVariable.Value);
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
    }
}
```
</details>

8. Save your scene.

### Testing Server-controlled Network Variables 

Now we will test the Server-controlled Network Variable works as we intended.

1. Select **File > Build and Run**. 
1. Stop the player.
2. Launch the client and server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper).
3. After a brief delay, the client and server will spawn.  
4. You should see the following in the console, showing that the server and client are sharing the variable:


```
Server's var initialized to: 0
Server set its var to: 0.1, has client var at: 0
Server set its var to: 3.099999, has client var at: 2.6
Server set its var to: 6.099997, has client var at: 5.599997
```
:::note
Since the printing to the terminal does not happen on every tick, the numbers will not match up perfectly.
:::

## Introducing Network Transform

This section adds a Network Transform component that will move the player.

1. Click **Player** prefab. 
1. Click **Add Component** in the Inspector Tab.
1. Select **Netcode** from the list shown.
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
</details>

12. Save your scene.

### Testing Network Transform

Now we check that the Network Transform functions correctly.

1. Select **File** > **Build and Run**. 
1. Stop the player. 
1. Launch the client and server together in a terminal as shown in [Testing the command line helper](#testing-the-command-line-helper). 
1. After a brief delay, the client and server will spawn. 
1. You should see the player capsule moving in a circle on both the client and the server.

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
using Unity.Netcode;
using UnityEngine;

public class RpcTest : NetworkBehaviour
{
    public override void OnNetworkSpawn()
    {
        if (IsClient)
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
</details>

9. Save your scene.

### Testing RPCs

Now we will test that the client and server are both recieving the RPCs correctly.

1. Select **File** > **Build and Run**. 
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

## Next Steps

See the following content to continue your journey using Netcode:

* Check out the educational samples to further explore Netcode and its abilities:
  * [Boss Room](../../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../../learn/bitesize/bitesize-clientdriven.md)