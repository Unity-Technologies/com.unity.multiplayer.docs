---  
id: MLAPI.SceneManagement.SceneSwitchProgress  
title: MLAPI.SceneManagement.SceneSwitchProgress  
---

<div class="markdown level0 summary">

Class for tracking scene switching progress by server and clients.

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

    public class SceneSwitchProgress

## Properties 

### DoneClients

<div class="markdown level1 summary">

List of clientIds of those clients that is done loading the scene.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public List<ulong> DoneClients { get; }

#### Property Value

| Type                                                 | Description |
|------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;System.UInt64&gt; |             |

### IsAllClientsDoneLoading

<div class="markdown level1 summary">

If all clients are done loading the scene, at the moment of completed.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsAllClientsDoneLoading { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsCompleted

<div class="markdown level1 summary">

Is this scene switch progresses completed, all clients are done loading
the scene or a timeout has occured.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsCompleted { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### TimeAtInitiation

<div class="markdown level1 summary">

The NetworkTime time at the moment the scene switch was initiated by the
server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float TimeAtInitiation { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

## Events

### OnClientLoadedScene

<div class="markdown level1 summary">

The callback invoked when a client is done loading the scene.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event SceneSwitchProgress.OnClientLoadedSceneDelegate OnClientLoadedScene

#### Event Type

| Type                                            | Description |
|-------------------------------------------------|-------------|
| SceneSwitchProgress.OnClientLoadedSceneDelegate |             |

### OnComplete

<div class="markdown level1 summary">

The callback invoked when the switch scene progress is completed. Either
by all clients done loading the scene or by time out.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event SceneSwitchProgress.OnCompletedDelegate OnComplete

#### Event Type

| Type                                    | Description |
|-----------------------------------------|-------------|
| SceneSwitchProgress.OnCompletedDelegate |             |
