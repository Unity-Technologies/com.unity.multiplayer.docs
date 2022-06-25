---
id: scene-events
title: Scene Events
sidebar_label: Scene Events
---
:::info
If you have not already read the [Using NetworkSceneManager](using-networkscenemanager.md) document, it is highly recommended to do so before proceeding.
:::
## Scene Event Associations
In the "Using NetworkSceneManager" document you learned that the term "Scene Event" refers to all subsequent scene events that transpire over time after a server has initiated a load or unload Scene Event. For most purposes this is true, however `SceneEventType.Synchronize` is one more unique type of Scene Event that covers much more than loading or unloading a single scene.  In order to better understand the associations between scene event types, it is better to see them grouped together:

### Loading:
**Initiating Scene Event**: `SceneEventType.Load`<br/>
**Associated Scene Events**:
- `SceneEventType.LoadComplete`: <br/>
signifies that a scene has been loaded locally.  Clients send this event to the server.
- `SceneEventType.LoadEventCompleted`: <br/>
signifies that the server and all clients have finished loading the scene and signifies that the Scene Event has completed.

### Unloading:
**Initiating Scene Event**: `SceneEventType.Unload`<br/>
**Associated Scene Events**:
- `SceneEventType.UnloadComplete`: <br/>
signifies that a scene has been unloaded locally.  Clients send this event to the server.
- `SceneEventType.UnloadEventCompleted`: <br/>
signifies that the server and all clients have finished unloading the scene and signifies that the Scene Event has completed.

### Synchronization:
This is automatically happens after a client is connected and approved.<br/>
**Initiating Scene Event**: `SceneEventType.Synchronize`<br/>
**Associated Scene Events**: 
- `SceneEventType.SynchronizeComplete`: <br/>
signifies that the client has finished loading all scenes and locally spawned all Netcode objects.  The client sends this scene event message back to the server.  This message also includes a list of `NetworkObject.NetworkObjectId`s for all of the `NetworkObject`s the client spawned.
- `SceneEventType.ReSynchronize`: <br/>
signifies that the server determines the client needs to be "re-synchronized" because one or more `NetworkObject`s were despawned while the client was synchronizing.  This message is sent to the client with a `NetworkObject.NetworkObjectId` list for all `NetworkObject`s the client needs to despawn. 


## Client Synchronization Details
While client synchronization does fall partially outside of the scene management realm, it ended up making more sense to handle the initial client synchronization via the `NetworkSceneManager` since a large portion of the synchronization process involves loading scenes and synchronizing in-scene placed `NetworkObjects`.  
- Scene synchronization is the first thing a client processes.
    - The synchronization message includes a list of all scenes the server has loaded via the `NetworkSceneManager`.
    - The client will load all of these scenes before proceeding to the `NetworkObject` synchronization.
        - This approach was used in order to assure all `GameObject`, `NetworkObject`, and `NetworkBehaviour` dependencies are loaded and instantiated before a client attempts to locally spawn a `NetworkObject`.        
- Synchronizing with all spawned `NetworkObjects`.
    - Typically this involves both in-scene placed and dynamically spawned `NetworkObjects`.   
        - Learn more about [Object Spawning here](..\object-spawning.md).
    - The `NetworkObject` list sent to the client is pre-ordered, by the server, in order to account for certain types of dependencies such as when using [Object Pooling](..\advanced-topics\object-pooling.md).
        - Typically object pool managers are in-scene placed and need to be instantiated and spawned prior to spawning any of its pooled `NetworkObjects`. As such, `NetworkSceneManager` takes this into account and assures that all `NetworkObjects` spawned via the `NetworkPrefabHandler` will be instantiated and spawned after their object pool manager dependency has been instantiated and spawned locally on the client.

        :::info
        With additively loaded scenes, you can run into situations where your objet pool manager, instantiated when the scene it is defined within is additively loaded by the server, is leaving its spawned `NetworkObject` instances within the [currently active scene](https://docs.unity3d.com/ScriptReference/SceneManagement.SceneManager.GetActiveScene.html).  While assuring that newly connected clients being synchronized have loaded all of the scenes first helps to avoid scene dependency issues, this alone does not resolve issue with the `NetworkObject` spawning order.  The integrated scene management, included in Netcode for GameObjects, takes scenarios such as this into considerationThe integrated scene management, included in Netcode for GameObjects, takes scenarios such as this into consideration.
        :::               
        - You could have parented in-scene placed NetworkObjects (i.e. items that are picked up or consumed by players)
            - `NetworkSceneManager` uses a combination of the `NetworkObject.GlobalObjectIdHash` and the instantiating scene's handle to uniquely identify in-scene placed `NetworkObject`s.
            

### The Client Synchronization Process
:::info
The following information is not required information, but can be useful in better understanding the synchronization process when using the integrated scene management.
:::
<br/>
Below is a diagram of the client connection and synchronization process:
![image](https://user-images.githubusercontent.com/73188597/175750865-d9eb0d9a-1caa-4f68-9d7f-8fde9a31d31b.png)
You can see that the client runs through the connection and approval process first which occurs within the `NetworkManager`.  Once approved, the `NetworkSceneManager` begins the client synchronization process by the server sending the `SceneEventType.Synchronize` Scene Event message to the approved client.  The client then processes through the synchronization message and when done it responds to the server with a `SceneEventType.SynchronizeComplete` message. 

:::important
When the server receives and processes the `SceneEventType.SynchronizeComplete` message, the client is considered connected (i.e. `NetworkManager.IsConnectedClient` is set to `true`), the `NetworkManager.OnClientConnected` delegate handler is invoked.  So, when the `SceneEventType.SynchronizeComplete` message is invoked locally you know that:
- the client is synchronized (enough) to safely start generating client to server messages. 
- if your server needs to perform any additional notifications to the already connected clients (i.e. a player's status needs to transition from joining to joined) that the newly connected client has fully joined the network game session in progress. 
:::

As a last The server then determines if the client needs to be resynchronized with any despawned `NetworkObject`s that ocurred while the client was processing the `SceneEventType.Synchronize` message. If so, it will send the `SceneEventType.ReSynchronize` message to the client. 


In the event that the server determines the client being synchronized missed one or more DestroyObject message(s), the server will send a final ReSynchronize message that contains the NetworkObjectIds of the NetworkObjects that no longer exist. Upon receiving the ReSynchronize message, the client will remove the NetworkObjects in question and clean up the local SpawnManager's SpawnObjects lists.

![image](https://user-images.githubusercontent.com/73188597/175396163-88a8fad5-c459-4e0b-b34b-96d3ecdef7b6.png)

![image](https://user-images.githubusercontent.com/73188597/175396194-d300b5c4-0f6b-418a-8440-3facdb4cc4ef.png)




**When has everyone processed a SceneEvent message?**
There are two special scene event types that generate messages for the server and all connected clients:
LoadEventCompleted and UnloadEventCompleted
:::Note
Both of these server generated messages will create local notification events (on all clients and the server) that will contain the list of all client identifiers (ClientsThatCompleted) that have finished loading or unloading a scene. This can be useful to make sure all clients are synchronized with each other before allowing any netcode related game logic to begin. If a client disconnects or there is a time out, then any client that did not load or unload the scene will be included in a second list of client identifiers (ClientsThatTimedOut).
:::




### Tracking Event Notifications (OnSceneEvent)
The following pseudo code provides an example usage of NetworkSceneManager.OnSceneEvent with additional comments about each scene event type. This could be applied to an in-scene placed NetworkObject that is migrated into the DDOL or additively loaded scene that persists while a network session is active.
```csharp
public override void OnNetworkSpawn()
{
    NetworkManager.SceneManager.OnSceneEvent += SceneManager_OnSceneEvent;
}

public override void OnNetworkDespawn()
{
   NetworkManager.SceneManager.OnSceneEvent -= SceneManager_OnSceneEvent;
}

private void SceneManager_OnSceneEvent(SceneEvent sceneEvent)
{
    // Both Client and Server Receive these notifications
    switch (sceneEvent.SceneEventType)
    {
        // Handle Server to Client Load Notifications
        case SceneEventType.Load:
            {
                // Server and Client will provide the associated AsyncOperation in the event you need to track this
                // AsyncOperation.progress can be used to determine scene loading progress
                break;
            }
        // Handle Server to Client UnLoad Notifications
        case SceneEventType.Unload:
            {
                break;
            }
        // Handle Client to Server Load Complete Notification(s)
        case SceneEventType.LoadComplete:
            {
                // This will let you know when a load is completed

                // Server Side: receives this notification for both itself and all clients
                // Client Side: receives this notification for itself

                // So you can use sceneEvent.ClientId to also track when clients are finished loading a scene
                break;
            }
        // Handle Client to Server Unload Complete Notification(s)
        case SceneEventType.UnloadComplete:
            {
                // This will let you know when an unload is completed

                // Server Side: receives this notification for both itself and all clients
                // Client Side: receives this notification for itself

                // So you can use sceneEvent.ClientId to also track when clients are finished unloading a scene
                break;
            }
        // Handle Server to Client Load Complete (all clients finished loading notification)
        case SceneEventType.LoadEventCompleted:
            {
                // This will let you know when all clients have finished loading a scene
                // Received on both server and clients
                foreach (var clientId in sceneEvent.ClientsThatCompleted)
                {
                    // Example of parsing through the clients that completed list
                }

                break;
            }
        // Handle Server to Client unload Complete (all clients finished unloading notification)
        case SceneEventType.UnloadEventCompleted:
            {
                // This will let you know when all clients have finished unloading a scene
                // Received on both server and clients
                foreach (var clientId in sceneEvent.ClientsThatCompleted)
                {
                    // Example of parsing through the clients that completed list
                }

                break;
            }
    }
}
```
Scene event notifications provide users with all NetworkSceneManager related scene events (and associated data) through a single event handler. The one exception would be scene loading or unloading progress which users can handle with a coroutine (upon receiving a Load or Unload event) and checking the AsyncOperation.progress value over time. The user can then stop the progress checking coroutine upon receiving any of the following event notifications for the scene and event type in question: LoadComplete, UnloadComplete, LoadEventCompleted, and UnloadEventCompleted.


- Scene Event progress tracking
    - the server keeps track of the clients that have finished processing a scene event
  - this is covered in detail in the [Scene Event](scene) documentation
 - in-scene placed `NetworkObject` soft synchronization
