---
id: networkanimator
title: NetworkAnimator
---
The `NetworkAnimator` component synchronizes animations over the network. When using the `NetworkAnimator` only the owner should update the state of the `Animator` component linked to the `NetworkAnimator`. All other peers will automatically receive updates to the animation state. 

:::caution
`NetworkAnimator` does not synchronize triggers. If you need triggers, synchronize them manually by using `RPCs` on a custom `NetworkBehaviour`.
:::