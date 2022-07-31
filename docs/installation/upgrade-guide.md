---
id: upgrade-guide
title: Upgrade Guide from MLAPI 0.1.0 to Netcode for GameObjects 1.0.0
---

This guide is a simple recipe to upgrade from MLAPI 0.1.0 to Netcode for GameObjects (Netcode) 1.0.0. This document will help you kickstart your upgrade process. It may not fix everything, but it should guide you in the overall process.

## General overview of the upgrade process

There are five main steps in the upgrade process. 
1. Install the new package
2. Changes in the naming
3. Changes in the API
4. Changes in behaviour

## Installing the new package

This step is the easiest one. First, uninstall the old MLAPI package. For that, go to your package manager (Windows -> Package Manager) and uninstall MLAPI. After that, still in the package manager, install the package: `com.unity.netcode.gameobjects`. You now have plenty of compilation errors since there are quite some changes between the two libraries. 
Installing the Netcode package will also install some other packages such as [`Unity Transport`](https://docs.unity3d.com/Packages/com.unity.transport@latest/), [`Unity Collections`](https://docs.unity3d.com/Packages/com.unity.collections@latest/), [`Unity Burst`](https://docs.unity3d.com/Packages/com.unity.burst@latest/) etc.

You must note that the `Burst` package requires an Editor restart. So restart your Unity after the installation. Unity will ask you to enter Fail Safe mode at the next boot, which is normal behaviour since all your network code is not compiling anymore.

Unity also recommends installing the multiplayer tools package: [`com.unity.multiplayer.tools`](https://docs.unity3d.com/Packages/com.unity.multiplayer.tools@latest/). This package will enable the Unity profiler to understand the Netcode library and add counters for network traffic.

## Changes in the naming

Unity renamed MLAPI into Netcode for GameObjects. This renaming has an impact on library and namespace naming. First, go to all your AsmDef files referencing MLAPI and change the reference for `Unity.Netcode.Runtime`. Next, you can upgrade your using namespaces `using MLAPI` to `using Unity.Netcode`. Change this namespace in code to if you are not using `using` syntax.

## Changes in the API

Unity Multiplayer Team tried to keep most of the MLAPI intact in Netcode. However, a successful compilation still requires some changes.

### `NetworkVariable` changes

`NetworkVariable` type is now generic only and the type specified in the generic needs to be a value type. First, change all your `NetworVariable*` types for their generic counterpart. For example, `NetworkVariableInt` becomes `NetworkVariable<int>`, NetworkVariableFloat becomes `NetworkVariable<float>` and so on. Now, some of your types (string, for example) will not match the new type requirements for `NetworkVariable<T>`. If your type is a string, you can use `FixedString32Bytes` instead. One should note that this type does not allow you to change the size of the string. For custom structs that only contain value types, you can implement `INetworkSerializable`, and it will work. Finally, for the other types, you will need to create your own `NetworkVariable`. To achieve that, create a new class, inherit from `NetworkVariableBase`, and implement all the abstract members. If you already had custom `NetworkVariable`, read and write functions now uses our `FastBuffer` to read or write from and to the stream. 

### Scene Management changes

The scene management had some changes unifying the way users uses it. First, it is now under the `NetworkManager` Singleton. Consequently, you directly access it like so : 

```csharp
var sceneManager = NetworkManager.Singleton.SceneManager;
```

Next, there is now only one scene event instead of many: `OnSceneEvent`. You can subscribe to it and get scene events information from the `SceneEvent` class. In this class, you will find the `SceneEventType`, which will give you precisions on what type of event is coming from the Scene Manager. Finally, the primary function to switch between scenes has changed to match the Unity Scene Manager. Instead of `SwitchScene`, you now call `LoadScene` with two parameters: the scene name and the `LoadSceneMode`, which is the standard way to load a scene in Unity.

### `NetworkBehavior` changes

There are two main changes in `NetworkBehavior`. First, the `NetworkStart` method becomes `OnNetworkSpawn`, and we introduced `OnNetworkDespawn` to keep things symmetrical. Second, `OnDestroy` now needs to be overridden since NetworkBehavior already uses it.

## Changes in behaviour

We tried to keep the behaviour changes minimal put two changes may cause errors in your scripts. First, the `NetworkManager` now does its connection shut down when the application quits. If you were doing it by yourself, you would end up with an error saying that you tried to disconnect twice. Second, the library now fires all the `OnValueChanged` events from the `NetworkVariable` **after** the `OnNetworkSpawn` (previously known as `NetworkStart`) method has returned. You will need to refactor any scripts depending on this order accordingly.

## Next Steps

For instructions on how to install Netcode for GameObjects please see [here](installation.md)