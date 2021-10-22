---  
id: Unity.Netcode.NetworkSceneManager  
title: Unity.Netcode.NetworkSceneManager  
---

<div class="markdown level0 summary">

Main class for managing network scenes when EnableSceneManagement is
enabled. Uses the Unity.Netcode.SceneEventMessage message to communicate
Unity.Netcode.SceneEventData between the server and client(s)

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class NetworkSceneManager : IDisposable
```

## 

### VerifySceneBeforeLoading

<div class="markdown level1 summary">

Delegate handler defined by
NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler that is
invoked before the server or client loads a scene during an active
netcode game session. Client Side: In order for clients to be notified
of this condition you must assign the VerifySceneBeforeLoading delegate
handler. Server Side: LoadScene(String, LoadSceneMode) will return
SceneFailedVerification.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler VerifySceneBeforeLoading
```

#### Field Value

| Type                                                        | Description |
|-------------------------------------------------------------|-------------|
| NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler |             |

## 

### ClientSynchronizationMode

<div class="markdown level1 summary">

LoadSceneMode.Single: All currently loaded scenes on the client will be
unloaded and the server's currently active scene will be loaded in
single mode on the client unless it was already loaded.

LoadSceneMode.Additive: All currently loaded scenes are left as they are
and any newly loaded scenes will be loaded additively. Users need to
determine which scenes are valid to load via the
VerifySceneBeforeLoading method.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public LoadSceneMode ClientSynchronizationMode { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| LoadSceneMode |             |

## 

### DisableValidationWarnings(Boolean)

<div class="markdown level1 summary">

When set to true, this will disable the console warnings about a scene
being invalidated.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void DisableValidationWarnings(bool disabled)
```

#### Parameters

| Type           | Name     | Description |
|----------------|----------|-------------|
| System.Boolean | disabled | true/false  |

### Dispose()

<div class="markdown level1 summary">

Handle NetworkSeneManager clean up

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### LoadScene(String, LoadSceneMode)

<div class="markdown level1 summary">

Server side: Loads the scene name in either additive or single loading
mode. When applicable, the is delivered within the SceneEvent via
OnSceneEvent

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SceneEventProgressStatus LoadScene(string sceneName, LoadSceneMode loadSceneMode)
```

#### Parameters

| Type          | Name          | Description                        |
|---------------|---------------|------------------------------------|
| System.String | sceneName     | the name of the scene to be loaded |
| LoadSceneMode | loadSceneMode |                                    |

#### Returns

| Type                     | Description                                                |
|--------------------------|------------------------------------------------------------|
| SceneEventProgressStatus | SceneEventProgressStatus (Started means it was successful) |

### SetClientSynchronizationMode(LoadSceneMode)

<div class="markdown level1 summary">

This will change how clients are initially synchronized.
LoadSceneMode.Single: All currently loaded scenes on the client will be
unloaded and the server's currently active scene will be loaded in
single mode on the client unless it was already loaded.

LoadSceneMode.Additive: All currently loaded scenes are left as they are
and any newly loaded scenes will be loaded additively. Users need to
determine which scenes are valid to load via the
VerifySceneBeforeLoading method.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetClientSynchronizationMode(LoadSceneMode mode)
```

#### Parameters

| Type          | Name | Description                        |
|---------------|------|------------------------------------|
| LoadSceneMode | mode | for initial client synchronization |

### UnloadScene(Scene)

<div class="markdown level1 summary">

Server Side: Unloads an additively loaded scene. If you want to unload a
mode loaded scene load another scene. When applicable, the is delivered
within the SceneEvent via the OnSceneEvent

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SceneEventProgressStatus UnloadScene(Scene scene)
```

#### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| Scene | scene |             |

#### Returns

| Type                     | Description                                                |
|--------------------------|------------------------------------------------------------|
| SceneEventProgressStatus | SceneEventProgressStatus (Started means it was successful) |

## 

### OnLoad

<div class="markdown level1 summary">

Invoked when a Load event is started by the server The server and
client(s) will receive this notification

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnLoadDelegateHandler OnLoad
```

#### Event Type

| Type                                      | Description |
|-------------------------------------------|-------------|
| NetworkSceneManager.OnLoadDelegateHandler |             |

### OnLoadComplete

<div class="markdown level1 summary">

Invoked when a LoadComplete event is generated by a client or server.
The server receives this message from all clients (including itself).
Each client receives their own notification sent to the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnLoadCompleteDelegateHandler OnLoadComplete
```

#### Event Type

| Type                                              | Description |
|---------------------------------------------------|-------------|
| NetworkSceneManager.OnLoadCompleteDelegateHandler |             |

### OnLoadEventCompleted

<div class="markdown level1 summary">

Invoked when a LoadEventCompleted event is generated by the server. This
event signifies the end of an existing Load event as it pertains to all
clients connected when the event was started. This event signifies that
all clients (and server) have finished the Load event. Note: this is
useful to know when all clients have loaded the same scene (single or
additive mode)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnEventCompletedDelegateHandler OnLoadEventCompleted
```

#### Event Type

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkSceneManager.OnEventCompletedDelegateHandler |             |

### OnSceneEvent

<div class="markdown level1 summary">

Event that will notify the local client or server of all scene events
that take place For more details review over SceneEvent,
Unity.Netcode.SceneEventData, and SceneEventType Subscribe to this event
to receive all SceneEventType notifications

Alternate Single Event Type Notification Registration Options To receive
only a specific event type notification or a limited set of
notifications you can alternately subscribe to each notification type
individually via the following events: -- OnLoad Invoked only when a
Load event is being processed -- OnUnload Invoked only when an Unload
event is being processed -- OnSynchronize Invoked only when a
Synchronize event is being processed -- OnLoadEventCompleted Invoked
only when a LoadEventCompleted event is being processed --
OnUnloadEventCompleted Invoked only when an UnloadEventCompleted event
is being processed -- OnLoadComplete Invoked only when a LoadComplete
event is being processed -- OnUnloadComplete Invoked only when an
UnloadComplete event is being processed -- OnSynchronizeComplete Invoked
only when a SynchronizeComplete event is being processed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.SceneEventDelegate OnSceneEvent
```

#### Event Type

| Type                                   | Description |
|----------------------------------------|-------------|
| NetworkSceneManager.SceneEventDelegate |             |

### OnSynchronize

<div class="markdown level1 summary">

Invoked when a Synchronize event is started by the server after a client
is approved for connection in order to synchronize the client with the
currently loaded scenes and NetworkObjects. This event signifies the
beginning of the synchronization event. The server and client will
receive this notification Note: this event is generated on a per newly
connected and approved client basis

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnSynchronizeDelegateHandler OnSynchronize
```

#### Event Type

| Type                                             | Description |
|--------------------------------------------------|-------------|
| NetworkSceneManager.OnSynchronizeDelegateHandler |             |

### OnSynchronizeComplete

<div class="markdown level1 summary">

Invoked when a SynchronizeComplete event is generated by a client. The
server receives this message from the client, but will never generate
this event for itself. Each client receives their own notification sent
to the server. Note: This is useful to know that a client has completed
the entire connection sequence, loaded all scenes, and synchronized all
NetworkObjects.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnSynchronizeCompleteDelegateHandler OnSynchronizeComplete
```

#### Event Type

| Type                                                     | Description |
|----------------------------------------------------------|-------------|
| NetworkSceneManager.OnSynchronizeCompleteDelegateHandler |             |

### OnUnload

<div class="markdown level1 summary">

Invoked when a Unload event is started by the server The server and
client(s) will receive this notification

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnUnloadDelegateHandler OnUnload
```

#### Event Type

| Type                                        | Description |
|---------------------------------------------|-------------|
| NetworkSceneManager.OnUnloadDelegateHandler |             |

### OnUnloadComplete

<div class="markdown level1 summary">

Invoked when a UnloadComplete event is generated by a client or server.
The server receives this message from all clients (including itself).
Each client receives their own notification sent to the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnUnloadCompleteDelegateHandler OnUnloadComplete
```

#### Event Type

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkSceneManager.OnUnloadCompleteDelegateHandler |             |

### OnUnloadEventCompleted

<div class="markdown level1 summary">

Invoked when a UnloadEventCompleted event is generated by the server.
This event signifies the end of an existing Unload event as it pertains
to all clients connected when the event was started. This event
signifies that all clients (and server) have finished the Unload event.
Note: this is useful to know when all clients have unloaded a specific
scene. The will always be for this event

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkSceneManager.OnEventCompletedDelegateHandler OnUnloadEventCompleted
```

#### Event Type

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkSceneManager.OnEventCompletedDelegateHandler |             |

### Implements

<div>

System.IDisposable

</div>
