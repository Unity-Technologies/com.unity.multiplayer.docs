---
id: bitesize-introduction
title: About Bitesize Samples
---

The Bitesize Samples repository provides a series of sample code as modules to use in your games and better understand Netcode for GameObjects (Netcode).

* [2D Space Shooter Sample](bitesize-spaceshooter.md) - Learn more about physics movement and status effects using Netcode `NetworkVariables` and `ObjectPooling`.
* [Invaders Sample](bitesize-invaders.md) - Learn more about game flow, modes, unconventional movement networked, and a shared timer.
* [Client Driven Sample](bitesize-clientdriven) - Learn more about Client driven movements, networked physics, spawning vs statically placed objects, object reparenting

## Requirements

You need Unity and Unity MLAPI installed to work with these samples. See [Install  Netcode for GameObjects ](../migration/installation.md) for details.

## Get the samples

### Get the project files

Download the project files from the [Bitesize Samples Repository](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize)

![how to download](/img/bitesize/bitesize-download.png)

After download, unzip the archive file. You are now ready to add the project to Unity Hub.

### Add a sample to the Unity Hub

1. Open Unity Hub.
1. Click **Add**.
1. Navigate to the unzipped folder. select the `Basic/2dSpaceShooter` or `Basic/Invaders` folder to add the respective project.

:::important Compatibility
The Bitesize Samples have been built for a specific Unity version. You can see the version after adding a sample to the Unity Hub or in the description of the [repository](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize). We recommend using the same Unity version to avoid potential issues.
:::

## Troubleshooting

**Error building**

*Error:* Error building Player: Currently selected scripting backend (IL2CPP) is not installed.

Currently, you may need to have [Unity IL2CPP](https://docs.unity3d.com/Manual/IL2CPP.html) installed. Bitesize Samples should not require IL2CPP, and may have updates to resolve this error.
