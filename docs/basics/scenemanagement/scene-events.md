---
id: scene-events
title: Scene Events
sidebar_label: Scene Events
---

### The Client Synchronization Process
(Quick blurb about client synchronization and its association with scene events and NetworkSceneManager)
![image](https://user-images.githubusercontent.com/73188597/175396754-9fccc93e-60b5-4b0a-87a4-badb65cca61b.png)

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
