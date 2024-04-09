---
id: upgrade_from_mlapi
title: Migrate from MLAPI to Netcode for GameObjects
description: How to upgrade your current MLAPI installation to the Netcode for GameObjects.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

MLAPI is deprecated and no longer supported. Follow this guide to migrate from MLAPI to Netcode for GameObjects.

## Back up your MLAPI project

The transition from MLAPI to Netcode for GameObjects is significant and can cause issues with your current project. It's strongly recommended that you back up your existing MLAPI project before migration. You can do one or both of the following:

* Create a copy of your entire project folder.
* Use source control software, like Git.

## Add the MLAPI Patcher to your MLAPI project

Manually transitioning from MLAPI to Netcode for GameObjects will break all the component references in your project. You can use the MLAPI Patcher to automate the process and avoid breaking changes.

1. Add the Netcode Patcher to your project. Open the **Package Manager** window in the Unity Editor and select **Add package from Git URL..**. Use the following URL: `https://github.com/Unity-Technologies/multiplayer-community-contributions/tree/release-0.1.0/com.unity.multiplayer.mlapi-patcher`

## Install the Netcode for GameObjects package

Follow the [installation guide](installation.md) to install Netcode for GameObjects. After installing the package, you'll see error messages in the console, which is expected because your project now has MLAPI and Netcode for GameObjects at the same time. Don't uninstall MLAPI yet - it's still required for the next step.

Installing Netcode for GameObjects also installs some other packages such as [Unity Transport](https://docs.unity3d.com/Packages/com.unity.transport@latest/), [Unity Collections](https://docs.unity3d.com/Packages/com.unity.collections@latest/), and [Unity Burst](https://docs.unity3d.com/Packages/com.unity.burst@latest/).

The Burst package requires an Editor restart. After restarting, the Editor will ask you to enter safe mode at the next boot, which is normal behavior since your network code isn't compiling anymore.

## Update script references

You can use the MLAPI Patcher to automate updating your script references. Open the MLAPI Patcher by selecting **Window** > **Netcode Patcher**.

The Patcher will ask whether you're using the *Installer* version of MLAPI or the *Source* version. If you aren't sure which version of MLAPI you're using, you can check whether you have the `Assets/MLAPI/Lib/MLAPI.dll` file in your project. If you do, then you're using the *Installer* version of MLAPI. If you don't, then you're using the *Source* version of MLAPI.

In the Patcher window, select **Installer** or **Source** button:

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'Migrating from installer version', value: 'tab1'},
    {label: 'Migrating from source version', value: 'tab2'},
  ]}>

<TabItem value="tab1">

1. Select **Installer**.
1. Select **Update Script References**.

</TabItem>
<TabItem value="tab2">

1. Select **Source**.
1. The window prompts you to link a MLAPI source directory.
1. Take the directory in your project containing the MLAPI source and drop it into the field.
1. Select **Update Script References**.

</TabItem>
</Tabs>

After you complete the **Update Script References** process of the Patcher, the components in your project should have been updated to their new names.

There is also a **Replace Type Names** button in the Patcher window. This step is optional. It automatically renames old type names in your scripts to the API changes made in Netcode for GameObjects, saving you some time to manually rename it. It performs a simple global replace of some of the type names. You may want to manually do this process instead if you want more control over changes.

## Remove old MLAPI versions

Remove all the folders containing the existing non-package version of MLAPI from your project. Usually this means removing the `Assets/MLAPI` and `Assets/Editor/MLAPI` folders from the project.

## Migrate your code to the new Netcode for GameObjects APIs

:::info
Migrating your code is a long and manual process. If you run into difficulties, please join our [Discord](https://discord.gg/buMxnnPvTb) and we will support you.
:::

As few breaking changes as possible were introduced as part of the transition from MLAPI to Netcode for GameObjects. However, a successful compilation still requires some changes.

### `NetworkVariable` changes

The `NetworkVariable` type is now generic only and the type specified in the generic needs to be a value type.

1. Change your `NetworkVariable*` types into their generic counterpart. For example, `NetworkVariableInt` becomes `NetworkVariable<int>`, and `NetworkVariableFloat` becomes `NetworkVariable<float>`.
1. Some of your types won't match the new type requirements for `NetworkVariable<T>`. If your type is a string, you can use `FixedString32Bytes` instead. Note that this type doesn't allow you to change the size of the string. For custom structs that only contain value types, you can implement `INetworkSerializable`, and it will work.
1. For the other types, you'll need to create your own `NetworkVariable`. To achieve that, create a new class, inherit from `NetworkVariableBase`, and implement all the abstract members. If you already had custom `NetworkVariable`, read and write functions now use `FastBuffer` to read or write from and to the stream.

### Scene management changes

Scene management is now under the `NetworkManager` singleton. It can be accessed by:

```csharp
var sceneManager = NetworkManager.Singleton.SceneManager;
```

There is now only one scene event instead of many: `OnSceneEvent`. You can subscribe to it and get scene events information from the `SceneEvent` class. In this class, you'll find the `SceneEventType`, which will give you precisions on what type of event is coming from the SceneManager.

Finally, the primary function to switch between scenes has changed to match the Unity SceneManager. Instead of `SwitchScene`, you now call `LoadScene` with two parameters: the scene name and the `LoadSceneMode`, which is the standard way to load a scene in Unity.

### `NetworkBehavior` changes

There are two main changes in `NetworkBehavior`:

* `NetworkStart` method becomes `OnNetworkSpawn`, and `OnNetworkDespawn` was introduced to keep things symmetrical.
* `OnDestroy` now needs to be overridden, since `NetworkBehavior` already uses it.

## Changes in behavior

Behavior changes are as minimal as possible, but there are two changes which are likely to cause errors in existing scripts:

* `NetworkManager` now performs connection shut down when the application quits. If you were doing connection shutdown manually, you'll up with an error about disconnecting twice.
* The library now fires all the `OnValueChanged` events from the `NetworkVariable` **after** the `OnNetworkSpawn` (previously known as `NetworkStart`) method has returned. You'll need to refactor any scripts depending on this order accordingly.

### Upgrade RPCs

The way RPCs are invoked has changed with this version of Netcode for GameObjects. Please read the [documentation about RPCs](../advanced-topics/messaging-system.md) and replace your existing RPCs with the new system.

### Serialization

The old `INetworkSerializable` interface has been replaced with a new `INetworkSerializable` interface. See [`INetworkSerializable`](../advanced-topics/serialization/inetworkserializable.md).

The page also includes information on nested serial types.

### SyncVars

SyncVars have been removed in Netcode for GameObjects. Convert your existing SyncVars into [NetworkVariables](../basics/networkvariable).

## Remove the Patcher package

After you're done upgrading your project, you can remove the MLAPI Patcher package from your project in the Unity Package Manager.

## Troubleshooting

**Error: The type or namespace name 'MLAPI' can't be found**

This error occurs if your project uses assembly definition (`.asmdef`) files. After switching to the package version, your assembly definition files need to reference `com.unity.multiplayer.mlapi.runtime`.

**Error: The type or namespace name 'NetworkedBehaviour' can't be found**

If you get an error message like this in the console, it's likely because your code has outdated APIs. Open the script indicated in the error message and update all APIs to the new names.

**Error: SerializedObjectNotCreatableException: Object at index 0 is null**

If this appears when you enter Play Mode or save a scene, close the Unity Editor and open it again and this should be gone.

## Next steps

After migrating to the Netcode for GameObjects package, you can review the following for what to do next:

* Consider using the [Hello World](../tutorials/helloworld.md) and [Golden Path series](../tutorials/goldenpath_series/gp_intro.md) to learn some basics of Netcode for GameObjects.
* Explore the educational samples content for a deeper exploration into Netcode for GameObjects:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize sample](../learn/bitesize/bitesize-clientdriven.md)

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
