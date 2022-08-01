---
id: upgrade_from_mlapi
title: Upgrade MLAPI to Netcode for GameObjects
description: How to upgrade your current MLAPI installation to the Netcode for GameObjects (Netcode).
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use this guide to upgrade from MLAPI 0.1.0 to Netcode for GameObjects (Netcode) 1.0.0.

:::caution Upgrade to Netcode for GameObjects
It is recommended to upgrade to Netcode from MLAPI as soon as possible. MLAPI is not maintained and will not have future updates. MLAPI should be considered a deprecated product.
:::

## Backup your MLAPI project

:::important
Consider this step a **required**: Upgrading to the package version of Netcode can cause issues with your current project. The new version modifies files and locations that are drastically different than previous MLAPI versions.
:::

Backup your project using the following recommended methods:

* Create a copy of your entire project folder.
* Use source control software, like Git. 

:::bestpractice
We recommend using both methods to backup your project. This gives you a copied project and tracking through committed changes and history.
:::

## Use the Upgrade Tool on your MLAPI project

Manually upgrading from the `.dll` version installed by MLAPI to the new package version breaks all MLAPI component references in your scenes and prefabs. Netcode references components using GUIDs that work differently for packages than for `.dll`s. 

To help with the upgrade process to Netcode, we have created an upgrade tool.

To start upgrading, add the upgrade tool to your project by using the **Add package from git URL..** option in the **Package Manager** window. Use the following URL: 

```html
https://github.com/Unity-Technologies/mlapi-community-contributions.git?path=/com.unity.multiplayer.mlapi-patcher
```

After installing the patcher package, you can continue the upgrade process.

## Install the Netcode Package
Follow the [installation guide](installation.md) to install Netcode.

After installing the package, you will have error messages in the console, which is expected behavior because your project now contains MLAPI and Netcode at the same time. This will be remedied by the end of this guide.

Installing the Netcode package will also install some other packages such as [`Unity Transport`](https://docs.unity3d.com/Packages/com.unity.transport@latest/), [`Unity Collections`](https://docs.unity3d.com/Packages/com.unity.collections@latest/), [`Unity Burst`](https://docs.unity3d.com/Packages/com.unity.burst@latest/) etc.

The `Burst` package requires an Editor restart. So restart your Unity after the installation. Unity will ask you to enter Fail Safe mode at the next boot, which is normal behaviour since all your network code is not compiling anymore.

:::warning
Do not remove the old version of MLAPI yet. It will still be used in the next step.
:::

## Updating Script References

Open the Netcode patcher window by selecting **Window** > **Netcode Patcher** in the menu bar. The patcher will ask you whether you are using the *Installer* version of MLAPI or the *Source* version. 

Previously there were two major ways to use MLAPI in projects. You could either download a release version of MLAPI using the MLAPI installer or manually copy the source files into your project.

:::tip
If you are not sure which way of MLAPI you are using check whether you have the `Assets/MLAPI/Lib/MLAPI.dll` file in your project. If that's the case you are using the `Installer` version.
:::

In the Patcher window, select **Installer** or **Source** button:

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'Upgrading from installer version.', value: 'tab1'},
    {label: 'Upgrading from source version.', value: 'tab2'},
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

After you complete the **Update Script References** process of the patcher, the Netcode components on your `Prefabs` and `GameObject`s should have been updated to their new names.

There is also a **Replace Type Names** button in the Patcher window. This step is optional. It automatically renames old type names in your scripts to the API changes made in Netcode, saving you some time to manually rename it. It performs a simple global replace of some of the type names. You may want to manually do this process instead if you want more control over changes.

## Remove older MLAPI versions

Remove all the folders containing the existing non-package version of MLAPI from your project. Usually this means removing the `Assets/MLAPI` and `Assets/Editor/MLAPI` folders from the project.

## Upgrade your code to the new Netcode APIs

:::info
Upgrading your code is a manual and long process. If you run into difficulties while upgrading please join our [Discord](https://discord.gg/buMxnnPvTb), and we will support you.
:::

The Unity Multiplayer team tried to keep most of the MLAPI intact in Netcode. However, a successful compilation still requires some changes.

### `NetworkVariable` changes

`NetworkVariable` type is now generic only and the type specified in the generic needs to be a value type. First, change all your `NetworVariable*` types for their generic counterpart. For example, `NetworkVariableInt` becomes `NetworkVariable<int>`, NetworkVariableFloat becomes `NetworkVariable<float>` and so on. Now, some of your types (string, for example) will not match the new type requirements for `NetworkVariable<T>`. If your type is a string, you can use `FixedString32Bytes` instead. One should note that this type does not allow you to change the size of the string. For custom structs that only contain value types, you can implement `INetworkSerializable`, and it will work. Finally, for the other types, you will need to create your own `NetworkVariable`. To achieve that, create a new class, inherit from `NetworkVariableBase`, and implement all the abstract members. If you already had custom `NetworkVariable`, read and write functions now uses our `FastBuffer` to read or write from and to the stream. 

### Scene Management changes

The scene management had some changes unifying the way users uses it. First, it is now under the `NetworkManager` Singleton. Consequently, you directly access it by: 

```csharp
var sceneManager = NetworkManager.Singleton.SceneManager;
```

Next, there is now only one scene event instead of many: `OnSceneEvent`. You can subscribe to it and get scene events information from the `SceneEvent` class. In this class, you will find the `SceneEventType`, which will give you precisions on what type of event is coming from the Scene Manager. Finally, the primary function to switch between scenes has changed to match the Unity Scene Manager. Instead of `SwitchScene`, you now call `LoadScene` with two parameters: the scene name and the `LoadSceneMode`, which is the standard way to load a scene in Unity.

### `NetworkBehavior` changes

There are two main changes in `NetworkBehavior`. First, the `NetworkStart` method becomes `OnNetworkSpawn`, and we introduced `OnNetworkDespawn` to keep things symmetrical. Second, `OnDestroy` now needs to be overridden since NetworkBehavior already uses it.

## Changes in behavior

We tried to keep the behavior changes minimal but two changes may cause errors in your scripts. First, the `NetworkManager` now does its connection shut down when the application quits. If you were doing it by yourself, you would end up with an error saying that you tried to disconnect twice. Second, the library now fires all the `OnValueChanged` events from the `NetworkVariable` **after** the `OnNetworkSpawn` (previously known as `NetworkStart`) method has returned. You will need to refactor any scripts depending on this order accordingly.

### Upgrade RPCs

The way RPCs are invoked has changed with this version of Netcode. Please read our new [documentation about RPCs](../advanced-topics/messaging-system.md) and replace your existing RPCs with the new system.

### Serialization

We replaced the old `INetworkSerializable` interface with a new `INetworkSerializable` interface. The interface works a bit different. See [`INetworkSerializable`](../advanced-topics/serialization/inetworkserializable.md).

The page also includes information on nested serial types.

### SyncVars

SyncVars have been removed in Netcode. Convert your existing SyncVars into [NetworkVariables](../basics/networkvariable).

## Remove the Patcher Package
After you are done upgrading your project, you can remove the Netcode Patcher package from your project in the Unity Package Manager as it is no longer needed.

## Troubleshooting

**Error: The type or namespace name 'MLAPI' could not be found**

This error will pop up if your project uses Assembly definition (`.asmdef`) files. After switching to the package version your assembly definition files will need to reference `com.unity.multiplayer.mlapi.runtime`.

**Error: The type or namespace name 'NetworkedBehaviour' could not be found**

If you get an error message like this (or for another Netcode type than `NetworkedBehaviour`) in the console it is most likely because your code contains outdated APIs. Open the script indicated in the error messagea and update all APIs to the new names.

**Error: SerializedObjectNotCreatableException: Object at index 0 is null**

If this appears whenever you enter playmode or save a scene, close the Unity Editor and open it again and this should be gone.

## Next Steps

After migrating and updating to the Netcode package, we recommend looking into the following:

* Consider using the [Hello World](../tutorials/helloworld.md) and [Golden Path series](../tutorials/goldenpath_series/gp_intro.md) to learn some basics of Netcode for GameObjects.
* Explore the educational samples content for a deeper exploration into Netcode for GameObjects:
  * [Boss Room](../learn/bossroom/getting-started-boss-room.md)
  * [2D Spaceshooter Bitesize Sample](../learn/bitesize/bitesize-spaceshooter.md)
  * [Invaders Bitesize Sample](../learn/bitesize/bitesize-invaders.md)
  * [Client-Driven Bitesize Sample](../learn/bitesize/bitesize-clientdriven.md)

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';