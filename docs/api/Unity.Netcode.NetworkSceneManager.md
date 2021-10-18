---  
id: Unity.Netcode.NetworkSceneManager  
title: Unity.Netcode.NetworkSceneManager  
---

<div class="markdown level0 summary">

Main class for managing network scenes when EnableSceneManagement is
enabled. Uses the
Unity.Netcode.MessageQueueContainer.MessageType.SceneEvent message to
communicate Unity.Netcode.NetworkSceneManager.SceneEventData between the
server and client(s)

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
of this condition you must subscribe to the event. Server Side:
LoadScene(String, LoadSceneMode) will return SceneFailedVerification.

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
| System.Boolean | disabled |             |

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

### OnSceneEvent

<div class="markdown level1 summary">

Event that will notify the local client or server of all scene events
that take place For more details review over SceneEvent,
Unity.Netcode.NetworkSceneManager.SceneEventData, and
SceneEventData.SceneEventTypes

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

### Implements

<div>

System.IDisposable

</div>
