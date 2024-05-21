---
id: distributed-authority-quick-start
title: Distributed Authority Quick Start
---

## Quick Start Tutorial: Moving Cubes

### Step 1 - Project Setup

Create a new Unity Project using the 3D template. 

![new unity project](/static/img/learn/distributed-authority-quick-start/new-project.png)

Ensure that the project is connected to a Unity Cloud project.

![connect unity cloud](/static/img/learn/distributed-authority-quick-start/connect-unity-cloud.png)

During Alpha and Closed Beta, to enable the distributed authority service please provide your Unity contact with the Unity Cloud project ID you created.

---

Install the latest `com.unity.services.multiplayer` Multiplayer Services package.

![add multiplayer package](/static/img/learn/distributed-authority-quick-start/multiplayer-package.png)

Install the latest `com.unity.netcode.gameobjects` **Netcode for GameObjects** package (version: **2.0.0-exp.2**)

![add ngo package](/static/img/learn/distributed-authority-quick-start/ngo-package.png)


### Step 2 - Connection Setup

Create a new script called **ConnectionManager.cs**. This script provides a user interface and connects to a distributed authority service session:

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

Attach this script to a new object in your scene. 

![add connection manager](/static/img/learn/distributed-authority-quick-start/create-connection-manager.png)

### Step 3 - NGO Setup

Create a new object in your scene called **NetworkManager**. Attach a Network Manager component to it. 

![add network manager](/static/img/learn/distributed-authority-quick-start/network-manager.png)

Set **Session Mode** to **Distributed Authority**. 

![set session mode](/static/img/learn/distributed-authority-quick-start/session-mode.png)

Under network transport. Select **UnityTransport** from the list of options to add.

![use unity transport](/static/img/learn/distributed-authority-quick-start/unity-transport.png)

Save any changes to your objects and scene. 

### Step 4 - Gameplay

Create a new Script called **PlayerCubeController.cs**:

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

Create a new Prefab called **PlayerCube**. Open it for editing. Attach the **PlayerCubeController** to the prefab. When prompted to add a **NetworkObject**, click Yes. In addition, attach a **NetworkTransform** component as well. Make sure all the **Ownership** flags are unchecked.

![setup network transform](/static/img/learn/distributed-authority-quick-start/network-transform.png)

Attach a child object in the prefab. Select the root of the prefab, right click and select **3D Object > Cube**.

![add the cube](/static/img/learn/distributed-authority-quick-start/create-cube.png)

Save all changes to the prefab.

Open the Network Manager, navigate to **Prefab Settings** and set the **Default Player Prefab** to be **PlayerCube**. 

![set the prefab](/static/img/learn/distributed-authority-quick-start/player-cube.png)

Save all changes to the scene.

### Conclusion

Hit play, fill out the **Profile Name** and **Session Name**, then click **Create or Join Session**. The profile name is the name of the player so this should be different on every client. The session name is the identifier of the session you are joining so this should be the same on every client. If everything has been set up correctly you will see the game create a session, connect to it and spawn a PlayerCube.

If you create a build and connect a new profile to the same session you will see a second PlayerCube spawn and sync up with the first. 

![success](/static/img/learn/distributed-authority-quick-start/gameplay.png)
