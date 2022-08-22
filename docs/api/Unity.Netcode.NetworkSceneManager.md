---
id: Unity.Netcode.NetworkSceneManager
title: Unity.Netcode.NetworkSceneManager
---

# Class NetworkSceneManager


Main class for managing network scenes when EnableSceneManagement is
enabled. Uses the Unity.Netcode.SceneEventMessage message to communicate
Unity.Netcode.SceneEventData between the server and client(s)







##### Inheritance


System.Object




NetworkSceneManager






##### Implements



System.IDisposable






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class NetworkSceneManager : IDisposable
```



### Fields

#### VerifySceneBeforeLoading


Delegate handler defined by
NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler that is
invoked before the server or client loads a scene during an active
netcode game session.  
**Client Side:** In order for clients to be notified of this condition
you must assign the VerifySceneBeforeLoading delegate handler.  
**Server Side:** LoadScene(String, LoadSceneMode) will return
SceneEventProgressStatus.






##### Declaration


``` lang-csharp
public NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler VerifySceneBeforeLoading
```



##### Field Value

| Type                                                        | Description |
|-------------------------------------------------------------|-------------|
| NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler |             |

### Properties

#### ClientSynchronizationMode


**LoadSceneMode.Single:** All currently loaded scenes on the client will
be unloaded and the server's currently active scene will be loaded in
single mode on the client unless it was already loaded.  
**LoadSceneMode.Additive:** All currently loaded scenes are left as they
are and any newly loaded scenes will be loaded additively. Users need to
determine which scenes are valid to load via the
VerifySceneBeforeLoading method.






##### Declaration


``` lang-csharp
public LoadSceneMode ClientSynchronizationMode { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| LoadSceneMode |             |

### Methods

#### DisableValidationWarnings(Boolean)


When set to true, this will disable the console warnings about a scene
being invalidated.






##### Declaration


``` lang-csharp
public void DisableValidationWarnings(bool disabled)
```



##### Parameters

| Type           | Name     | Description |
|----------------|----------|-------------|
| System.Boolean | disabled | true/false  |

#### Dispose()


Handle NetworkSeneManager clean up






##### Declaration


``` lang-csharp
public void Dispose()
```



#### LoadScene(String, LoadSceneMode)


**Server side:** Loads the scene name in either additive or single
loading mode. When applicable, the is delivered within the SceneEvent
via OnSceneEvent






##### Declaration


``` lang-csharp
public SceneEventProgressStatus LoadScene(string sceneName, LoadSceneMode loadSceneMode)
```



##### Parameters

| Type          | Name          | Description                                            |
|---------------|---------------|--------------------------------------------------------|
| System.String | sceneName     | the name of the scene to be loaded                     |
| LoadSceneMode | loadSceneMode | how the scene will be loaded (single or additive mode) |

##### Returns

| Type                     | Description                                                |
|--------------------------|------------------------------------------------------------|
| SceneEventProgressStatus | SceneEventProgressStatus (Started means it was successful) |

#### SetClientSynchronizationMode(LoadSceneMode)


This will change how clients are initially synchronized.  
**LoadSceneMode.Single:** All currently loaded scenes on the client will
be unloaded and the server's currently active scene will be loaded in
single mode on the client unless it was already loaded.  
**LoadSceneMode.Additive:** All currently loaded scenes are left as they
are and any newly loaded scenes will be loaded additively. Users need to
determine which scenes are valid to load via the
VerifySceneBeforeLoading method.






##### Declaration


``` lang-csharp
public void SetClientSynchronizationMode(LoadSceneMode mode)
```



##### Parameters

| Type          | Name | Description                        |
|---------------|------|------------------------------------|
| LoadSceneMode | mode | for initial client synchronization |

#### UnloadScene(Scene)


**Server Side:** Unloads an additively loaded scene. If you want to
unload a mode loaded scene load another scene. When applicable, the is
delivered within the SceneEvent via the OnSceneEvent






##### Declaration


``` lang-csharp
public SceneEventProgressStatus UnloadScene(Scene scene)
```



##### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Scene | scene |             |

##### Returns

| Type                     | Description                                                |
|--------------------------|------------------------------------------------------------|
| SceneEventProgressStatus | SceneEventProgressStatus (Started means it was successful) |

### Events

#### OnLoad


Invoked when a Load event is started by the server.  
*Note: The server and connected client(s) will always receive this
notification.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnLoadDelegateHandler OnLoad
```



##### Event Type

| Type                                      | Description |
|-------------------------------------------|-------------|
| NetworkSceneManager.OnLoadDelegateHandler |             |

#### OnLoadComplete


Invoked when a LoadComplete event is generated by a client or server.  
*Note: The server receives this message from all clients (including
itself). Each client receives their own notification sent to the
server.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnLoadCompleteDelegateHandler OnLoadComplete
```



##### Event Type

| Type                                              | Description |
|---------------------------------------------------|-------------|
| NetworkSceneManager.OnLoadCompleteDelegateHandler |             |

#### OnLoadEventCompleted


Invoked when a LoadEventCompleted event is generated by the server. This
event signifies the end of an existing Load event as it pertains to all
clients connected when the event was started. This event signifies that
all clients (and server) have finished the Load event.  
*Note: this is useful to know when all clients have loaded the same
scene (single or additive mode)*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnEventCompletedDelegateHandler OnLoadEventCompleted
```



##### Event Type

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkSceneManager.OnEventCompletedDelegateHandler |             |

#### OnSceneEvent


Subscribe to this event to receive all SceneEventType notifications.  
For more details review over SceneEvent and SceneEventType.  
**Alternate Single Event Type Notification Registration Options**  
To receive only a specific event type notification or a limited set of
notifications you can alternately subscribe to each notification type
individually via the following events:  

-   OnLoad Invoked only when a Load event is being processed
-   OnUnload Invoked only when an Unload event is being processed
-   OnSynchronize Invoked only when a Synchronize event is being
    processed
-   OnLoadEventCompleted Invoked only when a LoadEventCompleted event is
    being processed
-   OnUnloadEventCompleted Invoked only when an UnloadEventCompleted
    event is being processed
-   OnLoadComplete Invoked only when a LoadComplete event is being
    processed
-   OnUnloadComplete Invoked only when an UnloadComplete event is being
    processed
-   OnSynchronizeComplete Invoked only when a SynchronizeComplete event
    is being processed

*Note: Do not start new scene events within NetworkSceneManager scene
event notification callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.SceneEventDelegate OnSceneEvent
```



##### Event Type

| Type                                   | Description |
|----------------------------------------|-------------|
| NetworkSceneManager.SceneEventDelegate |             |

#### OnSynchronize


Invoked when a Synchronize event is started by the server after a client
is approved for connection in order to synchronize the client with the
currently loaded scenes and NetworkObjects. This event signifies the
beginning of the synchronization event.  
*Note: The server and connected client(s) will always receive this
notification. This event is generated on a per newly connected and
approved client basis.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnSynchronizeDelegateHandler OnSynchronize
```



##### Event Type

| Type                                             | Description |
|--------------------------------------------------|-------------|
| NetworkSceneManager.OnSynchronizeDelegateHandler |             |

#### OnSynchronizeComplete


Invoked when a SynchronizeComplete event is generated by a client.  
*Note: The server receives this message from the client, but will never
generate this event for itself. Each client receives their own
notification sent to the server. This is useful to know that a client
has completed the entire connection sequence, loaded all scenes, and
synchronized all NetworkObjects.* *\*\*\* Do not start new scene events
within scene event notification callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnSynchronizeCompleteDelegateHandler OnSynchronizeComplete
```



##### Event Type

| Type                                                     | Description |
|----------------------------------------------------------|-------------|
| NetworkSceneManager.OnSynchronizeCompleteDelegateHandler |             |

#### OnUnload


Invoked when a Unload event is started by the server.  
*Note: The server and connected client(s) will always receive this
notification.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnUnloadDelegateHandler OnUnload
```



##### Event Type

| Type                                        | Description |
|---------------------------------------------|-------------|
| NetworkSceneManager.OnUnloadDelegateHandler |             |

#### OnUnloadComplete


Invoked when a UnloadComplete event is generated by a client or
server.  
*Note: The server receives this message from all clients (including
itself). Each client receives their own notification sent to the
server.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnUnloadCompleteDelegateHandler OnUnloadComplete
```



##### Event Type

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkSceneManager.OnUnloadCompleteDelegateHandler |             |

#### OnUnloadEventCompleted


Invoked when a UnloadEventCompleted event is generated by the server.
This event signifies the end of an existing Unload event as it pertains
to all clients connected when the event was started. This event
signifies that all clients (and server) have finished the Unload
event.  
*Note: this is useful to know when all clients have unloaded a specific
scene. The will always be for this event.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  






##### Declaration


``` lang-csharp
public event NetworkSceneManager.OnEventCompletedDelegateHandler OnUnloadEventCompleted
```



##### Event Type

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkSceneManager.OnEventCompletedDelegateHandler |             |

### Implements



System.IDisposable





