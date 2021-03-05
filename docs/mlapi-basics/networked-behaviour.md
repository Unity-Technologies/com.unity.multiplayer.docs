---
id: networkedbehavior
title: NetworkedBehaviour
---

`NetworkedBehaviour` is an abstract class that derives from `MonoBehaviour` and is the base class all your networked scripts should derive from. Each `NetworkedBehaviour` is owned by a `NetworkedObject`. 

`NetworkedBehaviours` can contain RPC methods and `NetworkedVariables`. When you call an RPC function, the function is not called locally. Instead a message is sent containing your parameters, the `networkId` of the `NetworkedObject` that owns the `NetworkedBehaviour` that the Invoke was called on, and the "index" of the `NetworkedBehaviour` on the `NetworkedObject`.
This means for multi project setups (one project for the server and another one for the client), it is important that the order and amount of `NetworkedBehaviour`s on each `NetworkedObject` is the same. It also means that `NetworkedBehaviour`s can only exist as a child or on the same object as a `NetworkedObject` that is actively Spawned.

You can have multiple `NetworkedBehavior`s on the same object and on any child object. Each `NetworkedBehaviour` belongs to a `NetworkedObject`. It will be the first parent or first component on the current object that is found. You can only have one `NetworkedObject` at the root of the prefab.

`NetworkStart` is called on each behavior related to the `NetworkedObject`.

Inside a `NetworkedBehaviour` you can use [NetworkVariables](networkedvar.md) and `RPC`s to synchronize state and send messages over the network.
