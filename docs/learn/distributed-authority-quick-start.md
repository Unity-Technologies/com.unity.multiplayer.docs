---
id: distributed-authority-quick-start
title: Distributed authority quickstart for Netcode for GameObjects
---

Use this guide to learn how to create your first [distributed authority](../terms-concepts/distributed-authority.md) Netcode for GameObjects project. It walks you through the connection setup, including connecting to the distributed authority service, and adding basic gameplay.

## Prerequisites

Before you begin, you need the following:

- An active Unity account with a valid license.
- The [Unity Hub](https://unity.com/download).
- A supported version of the Unity Editor. Refer to the [Netcode for GameObjects requirements](https://docs-multiplayer.unity3d.com/netcode/current/installation).

## Install packages

- Install the latest `com.unity.services.multiplayer` Multiplayer Services package.
- Install the latest `com.unity.netcode.gameobjects` Netcode for GameObjects package.

## Project setup

1. Create a new Unity Project using the 3D template.

![new unity project](/static/img/learn/distributed-authority-quick-start/new-project.png)

2. Ensure that the project is connected to a Unity Cloud project.

![connect unity cloud](/static/img/learn/distributed-authority-quick-start/connect-unity-cloud.png)

:::note Access during alpha and beta
During alpha and beta, you need to request access to the distributed authority service. To do so, provide your Unity contact with the ID of the Unity Cloud project you created.
:::

## Connection setup

1. Create a new script called *ConnectionManager.cs*. This script provides a user interface and connects to a distributed authority service session:

```cs
using System;
using System.Threading.Tasks;
using Unity.Services.Authentication;
using Unity.Services.Core;
using Unity.Services.Multiplayer;
using UnityEngine;

public class ConnectionManager : MonoBehaviour
{
   private string _profileName;
   private string _sessionName;
   private int _maxPlayers = 10;
   private ConnectionState _state = ConnectionState.Disconnected;
   private ISession _session;

   private enum ConnectionState
   {
       Disconnected,
       Connecting,
       Connected,
   }

   private async void Awake()
   {
       await UnityServices.InitializeAsync();
   }

   private void OnGUI()
   {
       if (_state == ConnectionState.Connected)
           return;

       GUI.enabled = _state != ConnectionState.Connecting;

       using (new GUILayout.HorizontalScope(GUILayout.Width(250)))
       {
           GUILayout.Label("Profile Name", GUILayout.Width(100));
           _profileName = GUILayout.TextField(_profileName);
       }

       using (new GUILayout.HorizontalScope(GUILayout.Width(250)))
       {
           GUILayout.Label("Session Name", GUILayout.Width(100));
           _sessionName = GUILayout.TextField(_sessionName);
       }

       GUI.enabled = GUI.enabled && !string.IsNullOrEmpty(_profileName) && !string.IsNullOrEmpty(_sessionName);

       if (GUILayout.Button("Create or Join Session"))
       {
           CreateOrJoinSessionAsync();
       }
   }

   private void OnDestroy()
   {
       _session?.LeaveAsync();
   }

   private async Task CreateOrJoinSessionAsync()
   {
       _state = ConnectionState.Connecting;

       try
       {
           AuthenticationService.Instance.SwitchProfile(_profileName);
           await AuthenticationService.Instance.SignInAnonymouslyAsync();

            var options = new CreateSessionOptions(_maxPlayers) {
                Name = _sessionName
            }.WithDistributedConnection();

            _session = await MultiplayerService.Instance.CreateOrJoinSessionAsync(_sessionName, options);

           _state = ConnectionState.Connected;
       }
       catch (Exception e)
       {
           _state = ConnectionState.Disconnected;
           Debug.LogException(e);
       }
   }
}
```

2. Attach this script to a new object in your scene.

![add connection manager](/static/img/learn/distributed-authority-quick-start/create-connection-manager.png)

## Netcode for GameObjects setup

1. Create a new object in your scene called *NetworkManager*. Attach a Network Manager component to it.

![add network manager](/static/img/learn/distributed-authority-quick-start/network-manager.png)

2. Set **Session Mode** to **Distributed Authority**.

![set session mode](/static/img/learn/distributed-authority-quick-start/session-mode.png)

3. Under **Network Transport**, select **UnityTransport** from the list of options to add.

![use unity transport](/static/img/learn/distributed-authority-quick-start/unity-transport.png)

4. Save any changes to your objects and scene.

## Adding gameplay

1. Create a new Script called *PlayerCubeController.cs*:

```cs
using Unity.Netcode;
using Unity.Netcode.Components;
using UnityEngine;

public class PlayerCubeController : NetworkBehaviour
{
   public float speed = 20;

   private NetworkTransform _transform;

   private void Start()
   {
       _transform = GetComponent<NetworkTransform>();
   }

   private void Update()
   {
       var movement = new Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
       _transform.transform.position += movement * speed * Time.deltaTime;
   }
}
```

2. Create a new prefab called *PlayerCube* and open it for editing.
    - Attach the *PlayerCubeController* to the prefab. When prompted to add a NetworkObject, select **Yes**.
    - Attach a Network Transform component as well. Make sure all the **Ownership** flags are unchecked.

![setup network transform](/static/img/learn/distributed-authority-quick-start/network-transform.png)

3. Attach a child object in the prefab. Select the root of the prefab, right-click, and select **3D Object > Cube**.

![add the cube](/static/img/learn/distributed-authority-quick-start/create-cube.png)

4. Save all changes to the prefab.

5. Open the Network Manager, navigate to **Prefab Settings**, and set the **Default Player Prefab** to be **PlayerCube**.

![set the prefab](/static/img/learn/distributed-authority-quick-start/player-cube.png)

6. Save all changes to the scene.

## Next steps

Hit play, fill out the **Profile Name** and **Session Name**, then click **Create or Join Session**. The profile name is the name of the player, so ensure this is different on every client. The session name is the identifier of the session you are joining, so this should be the same on every client. If everything has been set up correctly you will see the game create a session, connect to it, and spawn a PlayerCube.

If you create a build and connect a new profile to the same session you will see a second PlayerCube spawn and sync up with the first.

![success](/static/img/learn/distributed-authority-quick-start/gameplay.png)
