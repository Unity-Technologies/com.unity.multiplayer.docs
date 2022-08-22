---
id: Unity.Netcode.NetworkUpdateStage
title: Unity.Netcode.NetworkUpdateStage
---

# Enum NetworkUpdateStage


Defines network update stages being executed by the network update loop.
See for more details on update stages:
https://docs.unity3d.com/ScriptReference/PlayerLoop.Initialization.html






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public enum NetworkUpdateStage : byte
```



### Fields

Name









Description

EarlyUpdate

Invoked before Fixed update

FixedUpdate

Fixed Update (i.e. state machine, physics, animations, etc)

Initialization

Very first initialization update

PostLateUpdate

Updated after the Monobehaviour.LateUpdate for all components is invoked

PreLateUpdate

Updated before the Monobehaviour.LateUpdate for all components is
invoked

PreUpdate

Updated before the Monobehaviour.Update for all components is invoked

Unset

Default value

Update

Updated when the Monobehaviour.Update for all components is invoked

