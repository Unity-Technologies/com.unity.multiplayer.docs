---
id: Unity.Netcode.NetworkUpdateStage
title: Unity.Netcode.NetworkUpdateStage
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:36 pm
---

<div class="markdown level0 summary">

Defines network update stages being executed by the network update loop. See for more details on update stages: <https://docs.unity3d.com/ScriptReference/PlayerLoop.Initialization.html>

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public enum NetworkUpdateStage : byte
```

## Fields

| Name           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| EarlyUpdate    | Invoked before Fixed update                                               |
| FixedUpdate    | Fixed Update (i.e. state machine, physics, animations, etc)               |
| Initialization | Very first initialization update                                          |
| PostLateUpdate | Updated after the Monobehaviour.LateUpdate for all components is invoked  |
| PreLateUpdate  | Updated before the Monobehaviour.LateUpdate for all components is invoked |
| PreUpdate      | Updated before the Monobehaviour.Update for all components is invoked     |
| Unset          | Default value                                                             |
| Update         | Updated when the Monobehaviour.Update for all components is invoked       |
