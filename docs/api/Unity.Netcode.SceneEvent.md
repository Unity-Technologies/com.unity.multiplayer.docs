---
id: Unity.Netcode.SceneEvent
title: Unity.Netcode.SceneEvent
---

# Class SceneEvent


Used for local notifications of various scene events. The OnSceneEvent
of delegate type NetworkSceneManager.SceneEventDelegate uses this class
to provide scene event status.  
*Note: This is only when EnableSceneManagement is enabled.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  
See also:  
SceneEventType







##### Inheritance


System.Object




SceneEvent






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
public class SceneEvent
```



### Fields

#### AsyncOperation


The returned by  
This is set for the following SceneEventTypes:

-   Load
-   Unload






##### Declaration


``` lang-csharp
public AsyncOperation AsyncOperation
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| AsyncOperation |             |

#### ClientId


The client identifier can vary depending upon the following
conditions:  

1.  SceneEventTypes that always set the ClientId to the local client
    identifier, are initiated (and processed locally) by the
    server-host, and sent to all clients to be processed.  
    -   Load
    -   Unload
    -   Synchronize
    -   ReSynchronize
2.  Events that always set the ClientId to the local client identifier,
    are initiated (and processed locally) by a client or server-host,
    and if initiated by a client will always be sent to and processed on
    the server-host:
    -   LoadComplete
    -   UnloadComplete
    -   SynchronizeComplete
3.  Events that always set the ClientId to the ServerId:
    -   LoadEventCompleted
    -   UnloadEventCompleted






##### Declaration


``` lang-csharp
public ulong ClientId
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ClientsThatCompleted


List of clients that completed a loading or unloading event.  
This is set for the following SceneEventTypes:

-   LoadEventCompleted
-   UnloadEventCompleted






##### Declaration


``` lang-csharp
public List<ulong> ClientsThatCompleted
```



##### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.UInt64\> |             |

#### ClientsThatTimedOut


List of clients that timed out during a loading or unloading event.  
This is set for the following SceneEventTypes:

-   LoadEventCompleted
-   UnloadEventCompleted






##### Declaration


``` lang-csharp
public List<ulong> ClientsThatTimedOut
```



##### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.UInt64\> |             |

#### LoadSceneMode


If applicable, this reflects the type of scene loading or unloading that
is occurring.  
This is set for the following SceneEventTypes:

-   Load
-   Unload
-   LoadComplete
-   UnloadComplete
-   LoadEventCompleted
-   UnloadEventCompleted






##### Declaration


``` lang-csharp
public LoadSceneMode LoadSceneMode
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| LoadSceneMode |             |

#### Scene


When a scene is loaded, the Scene structure is returned.  
This is set for the following SceneEventTypes:

-   LoadComplete






##### Declaration


``` lang-csharp
public Scene Scene
```



##### Field Value

| Type  | Description |
|-------|-------------|
| Scene |             |

#### SceneEventType


Will always be set to the current SceneEventType






##### Declaration


``` lang-csharp
public SceneEventType SceneEventType
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| SceneEventType |             |

#### SceneName


This will be set to the scene name that the event pertains to.  
This is set for the following SceneEventTypes:

-   Load
-   Unload
-   LoadComplete
-   UnloadComplete
-   LoadEventCompleted
-   UnloadEventCompleted






##### Declaration


``` lang-csharp
public string SceneName
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |



