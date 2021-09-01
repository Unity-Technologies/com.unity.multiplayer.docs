---
id: profiling
title: Profiling
sidebar_label: Profiling
---

Profiling is the process of measuring the performance of your game while it is running. It allows you to check your optimization points and control that your enhancements make a real difference. Consequently, it is good to profile every time you make a new feature or refactoring an old one. Hence, you always have a baseline for further optimizations.

In multiplayer game programming, you have three primary resources you need to keep under control : 
- Bandwidth consumption
- CPU
- Latency

Those three resources are the three vertices of a triangle with a constant area. For example, if you reduce your bandwidth consumption, you probably increase your CPU cost and latency by using compression algorithms or heavier serialization strategies.

## Requirements

Unity profiler starting from Unity 2021.1 comes with the ability to extends its features. Netcode for GameObjects (simply NetCode from now on) implements such an extension to allow you to profile your game in the same tool you are already using for CPU, GPU, and memory.

To enable profiling support for NetCode, install the `com.unity.multiplayer.tools` package from the Unity Package Manager. From then, you should see three additional sections in your profiler (Window -> Analysis -> Profiler) : 
- Netcode Profiler Messages
- Netcode Profiler Operation
- Netcode Profiler RPC

![Profiler Window](/img/profiler-window.png)

:::caution
Pay attention to the fact that Netcode for GameObject does not update the legacy profiler modules **Network Messages** and **Network Operations**.
:::
