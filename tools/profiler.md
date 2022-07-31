---
id: profiler
title: Network Profiler
sidebar_label: Network Profiler
---
:::caution
This guide uses Unity 2021.3 LTS.

On 2021.1 and below, the profiler outputs only simple statistics.
:::

Profiling is the process of measuring the performance of your game while it is running. It allows you to check your optimization points and control that your enhancements make a real difference.

In multiplayer game programming, you have three primary resources you need to keep under control:
- Bandwidth consumption
- CPU
- Latency

These three resources are the three vertices of a triangle with a constant area. For example, reducing your bandwidth consumption will probably increase your CPU cost and latency by using compression algorithms or heavier serialization strategies.

For this article, we will only focus on bandwidth profiling. You can find the official profiler documentation for CPU [here](https://docs.unity3d.com/Manual/ProfilerCPU.html).

Regarding latency, it is a whole topic in itself, but remember that we are talking about the time taken for sending a packet here, not the network latency. Thus, a simple StopWatch on your serialization and compression algorithms should be sufficient to measure the CPU latency you are introducing here.

## Prerequisites

Starting from Unity 2021.1, the Unity Profiler can be extended with features to support profiling the network traffic of multiplayer games built using Netcode for Game Objects (Netcode). These features are available as part of the Network Profiler included in the Multiplayer Tools package. The Network Profiler enables you to profile the networking activity of your game in the same profiler that you use to profile CPU, GPU, and memory.

To enable profiling support for Netcode, [install the Multiplayer Tools package](install-tools.md).

You should now see two additional modules in your profiler (**Window** > **Analysis** > **Profiler**):
* Messages - Network messages sent to the transport
* Objects - Activity related to, and grouped by, network objects

:::note
If you have the profiler window open when you install the tools package in 2020.3 or 2021.1, you may need to close and reopen the profiler window for the modules to appear.

The network profiler samples its data by frame rate. Therefore, you may find the graphs a little spiky.
:::

:::caution
Netcode for GameObjects does not update the legacy profiler modules **Network Messages** and **Network Operations**.
:::

## Messages Module

The following table includes the Messages the Netcode Profiler counts:

| Message | Description |
| -- | -- |
| Total Bytes Sent | Total number of bytes sent during this frame |
| Total Bytes Received | Total number of bytes received during this frame |
| Named Message Bytes Sent | Total number of named message bytes sent to any connection in this frame |
| Named Message Bytes Received | Total number of named message bytes received in this frame |
| Unnamed Message Bytes Sent | Total number of unnamed message bytes sent to any connection in this frame |
| Unnamed Message Bytes Received | Total number of unnamed message bytes received in this frame |
| Scene Event Bytes Sent | Total number of scene event bytes sent during this frame |
| Scene Event Bytes Received | Total number of scene event bytes received during this frame |

:::note
Messages sent to the local client (for example, a server in host mode sending RPCs to itself) appears greyed-out in the profiler to indicate that they may not actually be sent over the network.
:::

## Objects Module

The following table includes the Objects the Netcode Profiler counts:

| Object | Description |
| -- | -- |
| Rpc Bytes Sent | Total number of remote procedure calls (RPCs) sent in this frame |
| Rpc Bytes Received | Total number of remote procedure calls (RPCs) received in this frame |
| Network Variable Delta Sent | Total number of network variables sent as a first-time update for an object |
| Network Variable Delta Received | Total number of network variables sent as a delta |
| Object Spawned Sent | Total number of spawned objects sent in this frame |
| Object Spawned Received | Total number of spawned objects received in this frame |
| Object Destroyed Sent | Total number of destroyed objects sent in this frame |
| Object Destroyed Received | Total number of destroyed objects received in this frame |
| Ownership Change Sent | Total number of ownership changes sent |
| Ownership Change Received | Total number of ownership changes received |

## Known Issues for Versions Below 2021.2

* The profiler modules can be removed from the profiler by either using the **Restore Defaults** functionality or manually removing them. You can re-add them by re-opening the editor or recompiling a script.

* If you remove the tools package, the profiler modules remain in the profiler but are not functional. You can remove them by using the **Restore Defaults** functionality or manually removing them.

## Best Practices

The profiler tool is capable of providing a lot of information and can be intimidating to determine the best strategy for optimization. Use the following best practices to make your optimization process easier.

### Module elements and filtering results

You can use the following filter rules to narrow your search results:

| Rule | Description |
| -- | -- |
| t: | Filters by type |
| dir:in | Filters anything with bytes received |
| dir:out | Filters anything with bytes sent |
| b>N | Filters all events with bytes greater than N (N being an integer) |
| b<N | Filters all events with bytes less than N (N being an integer) |

You can combine these rules to continue narrowing your results.

Double-clicking on an element shows it in the Unity hierarchy tab.

### Hide unnecessary content

You can hide profiler data to focus only on information you are interested in.

1. In the Profiler window, select the dropdown arrow for **Profiler Modules** and check only the modules you would like to focus on. For example, the **Messages** and **Objects** modules.

### Profiling a development build of your game

For the most accurate results, you want to profile your game as a development build on the target hardware whenever possible. To profile a development build of your game on Windows, OS X, Linux, or WebGL, see [Profile your application on a target platform](https://docs.unity3d.com/Manual/profiler-profiling-applications.html) for more information.

For iOS and Android, see [Profiling on mobile devices](https://docs.unity3d.com/Manual/profiler-profiling-applications.html).

### Profiling inside the Unity editor

When it is more useful to have a broader sense of performance quickly than high accuracy, you want to profile inside the Unity editor. For example, you may try enabling and disabling multiple GameObjects at runtime to determine the culprit for a performance problem.

To profile inside the Unity editor, see [Profiling in the Unity Editor](https://docs.unity3d.com/Manual/profiler-profiling-applications.html) for more information.

### Iterate your optimization

Every time you make  new feature or refactor an old one, profile your game. This allows you to compare each change with your performance to adjust for peak efficiency.

There are no definite rules with performance optimization. Profile your game regularly, investigate the nature of your optimization problems, experiment with different solutions, and measure the results of your changes.