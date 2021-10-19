---
id: upgrade-guide
title: Upgrade Guide
---

This guide is a simple recipe to upgrade from MLAPI to the new NetCode for GameObjects (NetCode in this document). This document will help you kickstart your upgrade process. It will probably not fix everything but should guide you in the overall process.

## General overview of the upgrade process

There are five main steps in the upgrade process. 
1. Install the new package
2. Changes in the naming
3. Changes in the API
4. Changes in behaviour

## Installing the new package

This step is the easiest one. First, uninstall the old MLAPI package. For that, go to your package manager (Windows -> Package Manager) and uninstall MLAPI. After that, still in the package manager, install the package: `com.unity.netcode.gameobjects`. You now have plenty of compilation errors since there are quite some changes between the two libraries. 
Installing the NetCode package will also install three other packages : 
- `Unity Transport` : the low-level transport layer recommended for NetCode
- `Netcode adapter for UTP`: the NetCode adapter created by Unity for Unity Transport
- `Burst`: a requirement for Unity Transport

You must note that the `Burst` package requires an Editor restart. So restart your Unity after the installation. Unity will ask you to enter Fail Safe mode at the next boot, which is normal behaviour since all your network code is not compiling anymore.

Unity also recommends installing the multiplayer tools package: `com.unity.multiplayer.tools`. This package will enable the Unity profiler to understand the NetCode library and add counters for network traffic.

## Changes in the naming

Unity renamed MLAPI into Netcode for GameObjects. This renaming has an impact on library and namespace naming. First, go to all your ASMDEF files referencing MLAPI and change the reference for `Unity.Netcode.Runtime`. Next, you can upgrade your using namespaces `using namespace MLAPI` to `using namespace Unity.NetCode`. Change this namespace in code to if you are not using `using` syntax.

## Changes in the API

Unity Multiplayer Teams tried to keep most of the MLAPI intact in NetCode. However, a successful compilation still requires some changes.

### NetworkVariable changes

`NetworkVariable` type is now generic only and the type specified in the generic needs to be a value type. First, change all your `NetworVariable*` types for their generic counterpart. For example, `NetworkVariableInt` becomes `NetworkVariable<int>`, NetworkVariableFloat becomes `NetworkVariable<float>` and so on. Now, some of your types (string, for example) will not match the new type requirements for `NetworkVariable<T>`. If your type is a string, you can use `FixedString32Bytes` instead. One should note that this type does not allow you to change the size of the string. For custom structs that only contain value types, you can implement `INetworkSerializable`, and it will work. Finally, for the other types, you will need to create your own `NetworkVariable`. To achieve that, create a new class, inherit from `NetworkVariableBase`, and implement all the abstract members.

### Scene Management changes


`NetworkStart` becomes `OnNetworkSpawn`
`Destroy` needs to be overridden since NetworkBehavior uses it
