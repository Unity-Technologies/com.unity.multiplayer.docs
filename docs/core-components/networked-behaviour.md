---
id: networkedbehavior
title: NetworkedBehaviour
---

`NetworkedBehaviour` is a abstract class that derives from `MonoBehaviour` and is the base class all your networked scripts should derive from. It provides messaging functionality and much more. 

You can have multiple `NetworkedBehavior`s on the same object and on any child object. Each `NetworkedBehaviour` belongs to a `NetworkedObject`. It will be the first parent or first component on the current object that is found. You can only have one NetworkedObject at the root of the prefab.

`NetworkStart` is called on each behavior related to the `NetworkedObject`.