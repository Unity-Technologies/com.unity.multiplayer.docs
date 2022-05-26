---  
id: Unity.Netcode.SceneEvent  
title: Unity.Netcode.SceneEvent  
---

<div class="markdown level0 summary">

Used for local notifications of various scene events. The OnSceneEvent
of delegate type NetworkSceneManager.SceneEventDelegate uses this class
to provide scene event status.  
*Note: This is only when EnableSceneManagement is enabled.*  
See also:  
SceneEventType

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

SceneEvent

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class SceneEvent
```

</div>

### Fields

#### AsyncOperation

<div class="markdown level1 summary">

The returned by  
This is set for the following SceneEventTypes:

-   Load
-   Unload

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public AsyncOperation AsyncOperation
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| AsyncOperation |             |

#### ClientId

<div class="markdown level1 summary">

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

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong ClientId
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ClientsThatCompleted

<div class="markdown level1 summary">

List of clients that completed a loading or unloading event.  
This is set for the following SceneEventTypes:

-   LoadEventCompleted
-   UnloadEventCompleted

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public List<ulong> ClientsThatCompleted
```

</div>

##### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.UInt64\> |             |

#### ClientsThatTimedOut

<div class="markdown level1 summary">

List of clients that timed out during a loading or unloading event.  
This is set for the following SceneEventTypes:

-   LoadEventCompleted
-   UnloadEventCompleted

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public List<ulong> ClientsThatTimedOut
```

</div>

##### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.UInt64\> |             |

#### LoadSceneMode

<div class="markdown level1 summary">

If applicable, this reflects the type of scene loading or unloading that
is occurring.  
This is set for the following SceneEventTypes:

-   Load
-   Unload
-   LoadComplete
-   UnloadComplete
-   LoadEventCompleted
-   UnloadEventCompleted

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public LoadSceneMode LoadSceneMode
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| LoadSceneMode |             |

#### Scene

<div class="markdown level1 summary">

When a scene is loaded, the Scene structure is returned.  
This is set for the following SceneEventTypes:

-   LoadComplete

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public Scene Scene
```

</div>

##### Field Value

| Type  | Description |
|-------|-------------|
| Scene |             |

#### SceneEventType

<div class="markdown level1 summary">

Will always be set to the current SceneEventType

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public SceneEventType SceneEventType
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| SceneEventType |             |

#### SceneName

<div class="markdown level1 summary">

This will be set to the scene name that the event pertains to.  
This is set for the following SceneEventTypes:

-   Load
-   Unload
-   LoadComplete
-   UnloadComplete
-   LoadEventCompleted
-   UnloadEventCompleted

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string SceneName
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

 
