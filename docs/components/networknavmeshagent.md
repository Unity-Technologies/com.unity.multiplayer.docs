---
id: networknavmeshagent
title: NetworkNavMeshAgent
---

The `NetworkNavMeshAgent` component synchronizes a `NavMeshAgent` accross the network. If you add the `NetworkNavMeshAgent` to a network object with a `NavMeshAgent` component on it, it will automatically sychronize the navigation movement of the agent over the network.

With `NetworkNavMeshAgent` the owner of the `NetworkObject` has the authority over the agent. If the owner sets a new target all other peers will start moving towards that target as well. If a client without ownership tries to set the position of the agent nothing happens.

:::note
The `NetworkNavMeshAgent` only synchronizes velocity and targets. Because the NavMesh is not deterministic this sometimes results in different movements on other clients. If high precision movement is needed for an object use [`NetworkTransform`](networktransform.md) instead.
:::

## Configuration
`NetworkNavMeshAgent` does not synchronize any configuration values of the `NavMeshAgent` component. It is expected that settings like Agent Size or Path Finding settings match on all instances of the network object. If you need to change the settings of an agent at runtime, use `RPCs` or `NetworkVariable` on a custom `NetworkBehaviour`.

:::note
The navigation mesh itself also is not synchronized. You must make sure that all clients and the server are using the same navigation mesh. This should be the case under normal circumstances if they are using the same scene.
:::
