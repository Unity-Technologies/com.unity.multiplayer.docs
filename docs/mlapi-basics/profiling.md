---
id: profiling
title: Profiling
sidebar_label: Profiling
---
:::caution
This guide uses Unity 2021.2 beta. On 2021.1 and below, the profiler outputs only simple statistics.
:::

Profiling is the process of measuring the performance of your game while it is running. It allows you to check your optimization points and control that your enhancements make a real difference. Consequently, it is good to profile every time you make a new feature or refactoring an old one. Hence, you always have a baseline for further optimizations.

In multiplayer game programming, you have three primary resources you need to keep under control: 
- Bandwidth consumption
- CPU
- Latency

Those three resources are the three vertices of a triangle with a constant area. For example, reducing your bandwidth consumption will probably increase your CPU cost and latency by using compression algorithms or heavier serialization strategies. In this documentation, we will only focus on bandwidth profiling. You can find the official profiler documentation for CPU [here](https://docs.unity3d.com/Manual/ProfilerCPU.html). Regarding latency, it is a whole topic in itself, but remember that we are talking about the time taken for sending a packet here, not the network latency. Thus, a simple StopWatch on your serialization and compression algorithms should be sufficient to measure the CPU latency you are introducing here.

## Requirements

Unity profiler starting from Unity 2021.1 comes with the ability to extends its features. Netcode for GameObjects [NetCode] implements such an extension to allow you to profile your game in the same tool you are already using for CPU, GPU, and memory.

To enable profiling support for NetCode, install the `com.unity.multiplayer.tools` package from the Unity Package Manager. From then, you should see three additional sections in your profiler (Window -> Analysis -> Profiler) : 
- Netcode Profiler Messages
- Netcode Profiler Operation
- Netcode Profiler RPC

![Profiler Window](/img/profiler-window.png)

:::caution
Pay attention to the fact that Netcode for GameObject does not update the legacy profiler modules **Network Messages** and **Network Operations**.
:::

:::note
The network profiler samples its data at the Network Tick Rate. Hence, you may find the graphs a little spiky.
:::

## Netcode Profiler Messages

TODO

## Netcode Profiler Operation

TODO

## Netcode Profiler RPC

The Netcode Profiler RPC module is probably the most important. It shows every RPC or Network Variable update that is sent or received by your game. Let's check the ton of information we have here.

![Netcode Profiler RPC](/img/profiler-rpc.png)

Detailed bandwidth information appears underneath the graph if you click on one frame (for example, on one spike). Take this example from Boss Room: 

![Boss Room Details Profiler RPC](/img/boss-room-details-profiler-rpc.png)

The profiled game is the host in this session, so we see a client and a server in the details panel. Keep in mind that for this session, those are the same.
Under server, you have three subsections that are each representing a specific NetObject in the world. You can click on either of them to enable a more detailed overview of it. For example, if we click on one of the PlayerAvatar, we get that information : 

![Boss Room Player Details Profiler RPC](/img/boss-room-player-details-profiler-rpc.png)

## Advanced Search

You can use the following filter rules to narrow your search results:

| Rule | Description |
| -- | -- |
| t: | Populates by type |
| dir:in | Populates anything with bytes received |
| dir:out | Populates anything with bytes sent |
| b>N | Populates all events with bytes greater than N (N being an integer) |
| b<N | Populates all events with bytes less than N (N being an integer) |

You can combine these rules to continue narrowing your results. 

Double click on an element shows it in the Unity hierarchy