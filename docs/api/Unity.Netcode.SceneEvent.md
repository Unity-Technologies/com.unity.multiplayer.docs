---  
id: Unity.Netcode.SceneEvent  
title: Unity.Netcode.SceneEvent  
---

<div class="markdown level0 summary">

Used for local notifications of various scene events. The OnSceneEvent
of delegate type NetworkSceneManager.SceneEventDelegate uses this class
to provide scene event status/state.

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
public class SceneEvent
```

## 

### AsyncOperation

<div class="markdown level1 summary">

If applicable, this will be set to the returned by load scene and unload
scene asynchronous methods.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public AsyncOperation AsyncOperation
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| AsyncOperation |             |

### ClientId

<div class="markdown level1 summary">

Events that always set ClientId to the local client identifier and only
triggered locally: S2C_Load S2C_Unload S2C_Sync S2C_ReSync

Events that always set ClientId to the local client identifier, are
triggered locally, and a host or server will trigger externally
generated scene event message types (i.e. sent by a client):
C2S_UnloadComplete C2S_LoadComplete C2S_SyncComplete

Events that always set ClientId to the ServerId: S2C_LoadComplete
S2C_UnLoadComplete

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ulong ClientId
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ClientsThatCompleted

<div class="markdown level1 summary">

List of clients that completed a loading or unloading event Applies only
to: S2C_LoadComplete S2C_UnLoadComplete

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<ulong> ClientsThatCompleted
```

#### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.UInt64\> |             |

### ClientsThatTimedOut

<div class="markdown level1 summary">

List of clients that timed out during a loading or unloading event
Applies only to: S2C_LoadComplete S2C_UnLoadComplete

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<ulong> ClientsThatTimedOut
```

#### Field Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<System.UInt64\> |             |

### LoadSceneMode

<div class="markdown level1 summary">

If applicable, this reflects the type of scene loading or unloading that
is occurring. Unlike , scene unload events will have the original
LoadSceneMode applied when the scene was loaded.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public LoadSceneMode LoadSceneMode
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| LoadSceneMode |             |

### Scene

<div class="markdown level1 summary">

When a scene is loaded, the Scene structure is returned.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public Scene Scene
```

#### Field Value

| Type  | Description |
|-------|-------------|
| Scene |             |

### SceneEventType

<div class="markdown level1 summary">

Will always be set to the current scene event type
(SceneEventData.SceneEventTypes) this scene event notification pertains
to

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SceneEventData.SceneEventTypes SceneEventType
```

#### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| SceneEventData.SceneEventTypes |             |

### SceneName

<div class="markdown level1 summary">

Excluding and This will be set to the scene name that the event pertains
to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string SceneName
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |
