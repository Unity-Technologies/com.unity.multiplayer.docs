---
id: networkrigidbody
title: NetworkRigidbody inside Boss Room
description: Learn how Boss Room leverages NetworkRigidbody.
---
:::note
Required reading: [Physics](../..//advanced-topics/physics.md)
:::

Boss Room leverages `NetworkRigidbody` to simulate physics-based projectiles. See the Vandal Imp’s tossed projectile, the [`ImpTossedItem` prefab](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Prefabs/Game/ImpTossedItem.prefab). At its root, this prefab contains a `NetworkObject`, a `NetworkTransform`, a `Rigidbody`, and a `NetworkRigidbody` component. Refer to [`TossAction.cs`](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/Action/ConcreteActions/TossAction.cs) for more implementation details.

An important note: Any modifications to a `Rigidbody` that involve Physics (that is, modifying velocity, applying forces, applying torque, and the like) must be done **after** the `NetworkObject` is spawned since `NetworkRigidbody` forces the Rigidbody’s `isKinematic` flag to be true on `Awake()`. Once spawned, this flag is modified depending on the ownership status of the `NetworkObject`.
