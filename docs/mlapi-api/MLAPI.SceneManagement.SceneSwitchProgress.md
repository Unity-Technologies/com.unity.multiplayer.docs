---

id: MLAPI.SceneManagement.SceneSwitchProgress

title: MLAPI.SceneManagement.SceneSwitchProgress

---

Class SceneSwitchProgress

<div class="markdown level0 summary" markdown="1">

Class for tracking scene switching progress by server and clients.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_SceneManagement_SceneSwitchProgress_syntax]

    public class SceneSwitchProgress

## Properties <span id="MLAPI_SceneManagement_SceneSwitchProgress_DoneClients_"></span>

### DoneClients [MLAPI_SceneManagement_SceneSwitchProgress_DoneClients]

<div class="markdown level1 summary" markdown="1">

List of clientIds of those clients that is done loading the scene.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public List<ulong> DoneClients { get; }

#### Property Value [property-value]

| Type                                                                                                 | Description |
|------------------------------------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.List</span>\<<span class="xref">System.UInt64</span>\> |             |

<span
id="MLAPI_SceneManagement_SceneSwitchProgress_IsAllClientsDoneLoading_"></span>

### IsAllClientsDoneLoading [MLAPI_SceneManagement_SceneSwitchProgress_IsAllClientsDoneLoading]

<div class="markdown level1 summary" markdown="1">

If all clients are done loading the scene, at the moment of completed.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public bool IsAllClientsDoneLoading { get; }

#### Property Value [property-value-1]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_SceneManagement_SceneSwitchProgress_IsCompleted_"></span>

### IsCompleted [MLAPI_SceneManagement_SceneSwitchProgress_IsCompleted]

<div class="markdown level1 summary" markdown="1">

Is this scene switch progresses completed, all clients are done loading
the scene or a timeout has occured.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public bool IsCompleted { get; }

#### Property Value [property-value-2]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_SceneManagement_SceneSwitchProgress_TimeAtInitiation_"></span>

### TimeAtInitiation [MLAPI_SceneManagement_SceneSwitchProgress_TimeAtInitiation]

<div class="markdown level1 summary" markdown="1">

The NetworkTime time at the moment the scene switch was initiated by the
server.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public float TimeAtInitiation { get; }

#### Property Value [property-value-3]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.Single</span> |             |

## Events

### OnClientLoadedScene [MLAPI_SceneManagement_SceneSwitchProgress_OnClientLoadedScene]

<div class="markdown level1 summary" markdown="1">

The callback invoked when a client is done loading the scene.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public event SceneSwitchProgress.OnClientLoadedSceneDelegate OnClientLoadedScene

#### Event Type [event-type]

| Type                                            | Description |
|-------------------------------------------------|-------------|
| SceneSwitchProgress.OnClientLoadedSceneDelegate |             |

### OnComplete [MLAPI_SceneManagement_SceneSwitchProgress_OnComplete]

<div class="markdown level1 summary" markdown="1">

The callback invoked when the switch scene progress is completed. Either
by all clients done loading the scene or by time out.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public event SceneSwitchProgress.OnCompletedDelegate OnComplete

#### Event Type [event-type-1]

| Type                                    | Description |
|-----------------------------------------|-------------|
| SceneSwitchProgress.OnCompletedDelegate |             |
