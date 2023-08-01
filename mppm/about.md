---
id: about
title: About Multiplayer Play Mode (MPPM)
description: Overview of Multiplayer Play Mode
---

You can use **Multiplayer Play Mode (MPPM)** to test multiplayer functionality within the **Unity Editor**. You can simulate up to 4 players (the **Main Editor** and 3 **Virtual Players**) simultaneously on the same development device while using the same source assets on disk. **MPPM** can help you create multiplayer development workflows that reduce project build times, run it locally, and test the server-client relationship.

| Get Started | Virtual Players | Player Tags |
| --- | --- | --- |
| [Install](install.md) | [Enable Virtual Players](virtual-players.md) | [Overview](player-tags/player-tags.md) |
| [Synchronize with Play mode](sync-play-mode.md) | - | [Configure a **Player** to run as a server, client, or host example](./player-tags/target-instance.md) |
| - | - | [Configure a Player to simulate different network connections example](./player-tags/target-network.md) |
| - | - | [Assign a Player a team example](./player-tags/target-team.md) |

## MPPM Terminology

The following have specific meaning in relation to **MPPM**:

**Main Editor**: The original instance of the project in the Unity Editor. This is the only instance with full authoring capabilities.
**Virtual Players**: Simulated players created with **MPPM**. These players open in a separate window with limited authoring capabilities when you enter **[Play mode](https://docs.unity3d.com/Manual/GameView.html)**.
**Players**: All player instances, including the **Main Editor Player** and all **Virtual Players**.

## Limitations

**MPPM** has some inherent technical limitations, specifically around [scale](#scale) and [authoring](#authoring).

### Scale

The **Unity Editor** and **Virtual Players** require a lot of system resources, so you shouldn't use **Multiplayer Play Mode (MPPM)** at scale. **MPPM** is designed for small-scale, local testing environments that can only support up to 4 total players (the **Main Editor** and 3 **Virtual Players**). 

### Authoring

**Virtual Players** have restricted authoring capabilities because they're intended as a vehicle to open multiple project runtimes, not provide a multi-editor authoring workflow. You should use the **Main Editor** to make changes and the Virtual Players to test multiplayer functionality.

:::note
You can't access any **Main Editor** functionality from **Virtual Players**.
:::

## Performance impact

To reduce the demand on system resources caused by each **Virtual Player** instance, **MPPM** shares specific resources, such as the artifact database and imports between the **Main Editor** and each **Virtual Player**.