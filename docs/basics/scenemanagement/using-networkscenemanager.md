---
id: using-networkscenemanager
title: Using NetworkSceneManager
sidebar_label: Using NetworkSceneManager
---

## Netcode for GameObjects Integrated Scene Management
Netcode scene management provides you with:
- An existing framework that suppots both the bootstrap and scene transitioning scene management usage patterns
- Automatic client synchronization that occurs when a client is connected and approved  
  - all scenes loaded via `NetworkSceneManager` will be synchronized with clients during client synchronization.
    - Later in this document, you will learn more about using scene validation to control this on either the client or server side
  - all spawned netcode objects are synchronized with clients during client synchronization.
- Scene Event Notifications 
  - provides scene loading, unloading, and client synchronization events ("Scene Events") that can be tracked on both the client and server
    - the server is notified of all scene events (including the clients')
      - the server tracks each client's scene event progress (scene event progress tracking)
    - clients are notified locally of scene events
      - _clients are not aware of other clients' scene events_
 - In-Scene Placed NetworkObject Synchronization
  
All of these scene management features (and more) are handled by the [`NetworkSceneManager`](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkSceneManager).

### Accessing `NetworkSceneManager`
The `NetworkSceneManager` lives within the `NetworkManager` and is instantiated when the `NetworkManager` is started. 
`NetworkSceneManager` can be accessed in the following ways:
-  From within a `NetworkBehaviour` derived component, you can access it by using `NetworkManager.SceneManager`
-  From anything else that does not already have a reference to `NetworkManager`, you can access it using `NetworkManager.Singleton.SceneManager`.

**Here are some genral rules about accessing and using `NetworkSceneManager`:**
- Do not try to access the `NetworkSceneManager` when the `NetworkManager` is shutdown (it won't exist).
  - The `NetworkSceneManager` is only instantiated when a `NetworkManager` is started.
- As a server:
  -  Any scene you want clients to synchronize (i.e. load and spawn any netcode objects), you **must** use the `NetworkSceneManager`
    - If you use the `UnityEngine.SceneManagement.SceneManager` during a netcode enabled game session, then those scenes will not be synchronized with currently connected or late joining clients.
      - A "late joining client" is a client that joins a game session that has already been started and there are already one or more clients connected
        - _All netcode aware objects spawned prior to a late joining client need to be synchronized with the late joining client._
  -  It doesn't have to wait for a client to connect before it starts loading scenes via the `NetworkSceneManager`
    - any scene loaded via `NetworkSceneManager` will always default to being synchronized with clients
      - _there are ways to control this explained later in this document_

:::warning
Do not try to access the `NetworkSceneManager` when the `NetworkManager` is shutdown.  The `NetworkSceneManager` is only instantiated when a `NetworkManager` is started.  As a server you don't need to wait for a client to connet to start loading scenes
:::

### Loading a Scene
In order to load a scene, there are four requirements:
1. The `NetworkManager` instance loading the scene must be started in host or server mode (server authoritative scene management)
2. The `NetworkSceneManager.Load` method is used to load the scene
3. The scene being loaded must be registered with your project's [build settings scenes in build list](https://docs.unity3d.com/Manual/BuildSettings.html)
4. There cannot already be a Scene Event in progress

#### Basic Scene Loading Example
Imagine that you have an in-scene placed NetworkObject, let's call it "ProjectSceneManager", that handles your project's scene management using the `NetworkSceneManager` and you wanted your server to load a scene when the ProjectSceneManager is spawned.  
It could look something like this (in its simplest form):
```csharp
    public class ProjectSceneManager : NetworkBehaviour
    {
        [HideInInspector]
        public string SceneName;
#if UNITY_EDITOR
        public UnityEditor.SceneAsset SceneAsset;
        private void OnValidate()
        {
            if (SceneAsset != null)
            {
                SceneName = SceneAsset.name;
            }
        }
#endif
        public override void OnNetworkSpawn()
        {
            if (IsServer && !string.IsNullOrEmpty(SceneName))
            {
                var status = NetworkManager.SceneManager.LoadScene(SceneName, LoadSceneMode.Additive);
                if (status != SceneEventProgressStatus.Started)
                {
                    Debug.LogWarning($"Failed to load {SceneName} with a {nameof(SceneEventProgressStatus)}: {status}");
                }
            }
            base.OnNetworkSpawn();
        }
    }
```
In the above code snippet, we have a `NetworkBehaviour` derrived class, `ProjectSceneManager`, that has a public `SceneAsset` property (editor only) that is used to simplify the process of configuring which scene we want to load where the name of the scene to be loaded is applied to our hidden `SceneName` property that is used to load the scene.  In the `OnNetworkSpawn` method, we make sure that only the server loads the scene and we compare the `SceneEventProgressStatus` returned by the `NetworkSceneManager.Load` method to the `SceneEventProgressStatus.Started` status.  If we received any other status, then typically the name of the status provides you with a reasonable clue as to what the issue might be.

### Scene Events and Scene Event Progress
The term "Scene Event" refers to the sequence of associated events that transpire as a server and client progress through them over time.  For example, a server might load a scene additively while clients are connected. The following is a high-level overview of everything that occurs for a `SceneEventType.Load`:
- Server starts a `SceneEventType.Load` event 
  - The server begins to asynchronously load the scene additively
    - If the server is listening to `NetworkSceneManager` events then it will receive a local notification that the scene loading event has started
  - Once the scene is loaded, the server spawns any in-scene placed `NetworkObjects` locally
    - After spawning, the server will send the `SceneEventType.Load` message to all connected clients
    - The server will receive a local `SceneEventType.LoadComplete` event
      - This only means the server is done loading and spawning `NetworkObjects` instantiated by the scene loading, _but it does not mean the connected clients have finished!_ 
- The clients receive the `SceneEventType.Load` message
  - If the clients are monitoring scene event notifications, then they will receive a notification for the scene load event locally
  - As each client finishes loading the scene, they will generate a `SceneEventType.LoadComplete` event 
    - The client sends this event message to the server
    - If the client is listening for notifications, then the client is notified locally
      - This notification only means that it has finished loading and synchronizing the scene, but does not mean all other clients have!
- The server receives the `SceneEventType.LoadComplete` events from the clients
  - When all `SceneEventType.LoadComplete` events have been received, the server will generate a `SceneEventType.LoadEventCompleted` notification
    - This notification is triggered locally on the server
    - The server sends this scene event type to the clients
- Each client receives the `SceneEventType.LoadEventCompleted` event
  - At this point all clients have completed the `SceneEventType.Load` event and are synchronized with all newly instantiated and spawned `NetworkObjects`.

The purpose behind the above outline is to demonstrate that a Scene Event can lead to other scene event types being generated and that the entire sequence of events that transpire occur over a longer period of time than if you were loading a scene in a single player game. 

:::warning
Because the `NetworkSceneManager` still has additional tasks to complete once a scene is loaded, it is not recommended to use 'UnityEngine.SceneManagement.SceneManager.sceneLoaded' or 'UnityEngine.SceneManagement.SceneManager.sceneUnloaded' as a way to know when a scene event has completed.  These two callbacks will occur before `NetworkSceneManager` has finished the final processing after a scene is loaded or unloaded and you could run into timing related issues. If you are using the netcode integrated scene management, then it is highly recommended to subscribe to the `NetworkSceneManagers` scene event notifications.
:::

#### Scene Event Notifications
You can be notified of scene events by registering in one of two ways:
1. Receive all scene event notification types
2. Receive only a specific scene event notification type
:::info
Receiving (via subscribing to the associated event callback) only specific scene event notification types does not change how a server or client receives and processes notifications. A server will still receive notifications for itself and all clients while clients only receive notifications for new scene events (sent by the server) and the proceeding local notifications generated as the client progresses through the entire sequence of associated scene events.
:::

**Receiving All Scene Event Notifications**
Typically, this is used on the server side in order to receive notifications for every scene event notification type for both the server and the client. You can receive all scene event type notifications by subscribing to the `NetworkSceneManager.OnSceneEvent` callback handler.

**Receiving A Specific Scene Event Notification**
Typically, this is used with clients or components that might only need to be notified of a specific scene event type.  There are 9 scene event types and each one has a corrisponding "single event type" callback handler.  As an example, you might want to register for the `SceneEventType.LoadEventCompleted` scene event type to know, from a client perspective, that the server and all other clients have finished loading the scene (_useful to know that you could start accessing the newly loaded and spawned `NetworkObject`s on a client_).

#### Scene Event Progress Status
As we discussed in the above example, it is important to check the status returned by `NetworkSceneManager.Load` to make sure your scene loading event has started.  The following is a list of all [SceneEventProgressStatus]([https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/com.unity.netcode.gameobjects/Runtime/SceneManagement/SceneEventProgress.cs#L17](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.SceneEventProgressStatus)) values with some additional helpful information:
- Started
  - The scene event has started (success)
- SceneNotLoaded
  - This is returned when you attempt to unload a scene that is not loaded (or no longer is loaded) 
- SceneEventInProgress
  - This is returned if you attempt to start a new scene event (loading or unloading) while one is still in progress
- InvalidSceneName
  - This can happen for one of the two reasons:
    - The scene name is not spelled correctly or the name of the scene changed
    - The scene name is not in your project's scenes in build list
- SceneFailedVerification
  - This is returned if you fail scene verification on the server side (more about scene verification later)
- InternalNetcodeError
  - Currently, this error will only happen if the scene you are trying to unload was never loaded by the `NetworkSceneManager`.

([Learn More About Scene Events](scene-events.md))

### Unloading a Scene
(WIP)


<!-- Explore the [Netcode Scene Management Golden Path](link) for step-by-step examples of additive scene loading and management. -->
