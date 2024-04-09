---
id: scene-management-overview
title: Scene management overview
sidebar_label: Scene management overview
---
## Netcode Scene Management
Generally speaking, netcode aware scene management complexity can vary depending upon your project's needs and goals. Netcode for GameObjects (Netcode) provides you with two potential paths:

### [Integrated Scene Management](using-networkscenemanager.md):  
The Netcode for GameObjects scene management solution is enabled by default and provides you with a fully functional netcode scene management solution.
:::info
We highly recommend advanced developers new to Netcode for GameObjects become familiar with the integrated scene management solution before creating their own netcode scene management solution.
:::

### [Custom Scene Management](custom-management.md):
If your project has needs that go beyond the scope of the Netcode integrated scene management solution, you can disable scene management in the editor through `NetworkManager`'s properties.

:::caution
Writing your own scene management can be time consuming and complex.  We highly recommend that only advanced users already familiar with Netcode for GameObjects take this path.
:::
