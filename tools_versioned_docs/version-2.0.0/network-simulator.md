---
id: tools-network-simulator
title: Network Simulator
sidebar_label: Network Simulator
---

The Network Simulator tool allows you to test your multiplayer game in less-than-ideal network conditions, enabling you to discover issues in simulated real-world scenarios and fix them before they surface in production. It facilitates simulating [network events](#network-events), such as network [disconnects](#disconnects), [lag spikes](#lag-spikes), and [packet loss](#packet-loss).

The tool exposes configurable network parameters, such as packet delay and packet loss, that allow you to control the network conditions. It also bundles common configurations of those parameters together as [presets](#network-configuration-presets).

You can use the Network Simulator component to test different network conditions and create custom network scenarios. These utilities include:

* [Disabling the network connection](#disconnects)
* Triggering a [lag spike](#lag-spikes)
* Changing the current [configuration preset](#network-configuration-presets)

You can also use the Network Simulator SDK to create custom network scenarios that can automatically trigger network events (such as a lag spike) at specific frequencies and intervals. To help you get started, it includes several [example network scenarios](#use-a-network-scenario).

:::note
**Note**: All parameters exposed through the Network Simulator tool work with the Unity Transport Protocol (UTP) simulator pipeline stage.
:::

## Requirements

The only requirement for using Network Simulator is Unity Editor version 2022.2 and later and the following [package dependencies](#package-dependencies).

### Package dependencies

|**Dependency**|**Version**|**Package name**|
|---|---|---|
|Unity Transport|2.0.0 or later|com.unity.transport >=  2.0.0|
|Netcode for GameObjects|1.1.0 or later|com.unity.netcode.gameobjects >= 1.1.0|

## Get started

To get started with the Network Simulator:

1. Add the following packages:
    1. Tools 1.1.0 or later
    2. Network for GameObjects 1.1.0 or later
    3. Unity Transport 2.0.0 or later
2. Add the NetworkSimulator Component to any GameObject that persists across scenes.

### Trigger a network disconnect

You can trigger a network disconnect in the Unity Editor with the Network Simulator component by setting the **Connection** to **Disconnected**. See the [Disconnect scenario](#disconnect-scenario) example.

![](/img/tools/netsim-1.png)

### Trigger a lag spike

You can trigger a simulated lag spike in the Unity Editor with the Network Simulator component by setting the **Duration of the lag spike (ms)**, then selecting **Trigger**.

![](/img/tools/netsim-7.png)

:::tip

You can trigger lag spikes through code with the `NetworkSimulator.TriggerLagSpike` API or you can write a Network Scenario that triggers it.  See the [Lag spike scenario](#lag-spike-scenario) example to learn how.
:::

### Use a Network Simulator Preset

The Network Simulator tool comes packaged with configuration presets that simulate common network conditions, such as a home broadband connection or a mobile 3G connection. To use one of the configuration presets:

1. Select the **NetworkSimulator** component from the **Hierarchy** tab.
2. Set the **Connection Preset** field to the configuration you want to use.

![](/img/tools/netsim-3.png)

### Create a Network Simulator Preset

The Network Simulator tool allows you to create any number of custom network configuration presets. To create a custom network configuration preset:

1. Right-click on the **Assets** folder in the **Project** tab.
2. Select **Create** > **Multiplayer** > **NetworkSimulatorPresetAsset**.
3. Select the NetworkSimulatorPreset from the **Assets** folder.
4. Edit the parameters in the **Inspector** tab. The parameters allow you to set the name, description, packet delay, packet jitter, and packet loss (as a percentage and interval).

![](/img/tools/netsim-11.png)

To use a custom Network Simulator Preset:

1. In the **Inspector** tab, set the **Connection Preset** to **Custom**.
2. Set the **Custom Preset** field to the preset asset you created.

Once you select the custom preset asset, you can edit it live from the Inspector tab by adjusting the parameters.

#### Use a Network Scenario

The Network Simulator tool supports NetworkScenarios. A NetworkScenario is a way to script how you want to affect the network conditions at runtime. They allow you to change parameters and presets dynamically.


It comes packaged with a couple network scenarios presets, such as the [Connections Cycle](#connections-cycle) and [Random Connections Swap](#random-connections-swap).

:::note
You can also [create custom network scenarios](#create-a-network-simulator-preset).
:::

To use a network scenario:

1. Select the **NetworkSimulator** component from the **Hierarchy** tab.
2. Under Network Scenarios in the Inspector tab, set the **Scenario** field to the network scenario you want to use.

![](/img/tools/netsim-12.png)

:::tip
You can control whether the Network Scenario runs automatically by toggling the **Auto Run Scenario** checkbox. You can also set this option dynamically via code.

![](/img/tools/netsim-2.png)
:::


#### Connections Cycle

The **Connections Cycle** Network Scenario allows you to cycle through different network conditions at specific intervals. By default, it includes one cycle that’s set to None. To configure the Connection Cycle:

1. From the Inspector tab, expand the **Network Scenarios** > **Configurations** section.

![](/img/tools/netsim-15.png)

1. Set the first **Connection Preset** to a built-in preset or a custom preset.

![](/img/tools/netsim-13.png)

1. Set the **Change Interval Milliseconds** field to the time to wait before switching to the next preset.

![](/img/tools/netsim-8.png)

1. Select the **plus (+)** symbol to add another cycle.

![](/img/tools/netsim-14.png)

1. Configure the next cycle as you see fit.

![](/img/tools/netsim-4.png)

The Connections Cycle scenario cycles through the configurations list at the **Change Interval** until you use the **Pause** button to pause the connection cycling.


#### Random Connections Swap

The **Random Connections Swap** Network Scenario allows you to specify a set of network configuration presets to swap through at random. By default, it includes one cycle that’s set to None. To configure the Random Connection Swap:

1. From the Inspector tab, expand the **Network Scenarios** > **Configurations** section.

![](/img/tools/netsim-6.png)

1. Set the **Class Preset** to a built-in preset or a custom preset.

![](/img/tools/netsim-10.png)

1. Select the **plus (+)** symbol to add another configuration.

![](/img/tools/netsim-5.png)

1. Configure the configuration as you see fit.

![](/img/tools/netsim-9.png)


The Random Connections Swap scenario selects one of configurations from the list at random at the **Change Interval** until you use the **Pause** button to pause the connection cycling.

## Network types

A network type is the general state of a user’s network connection. This section has the descriptions of the available Network Simulator preset configurations. These configuration presets fall into five categories:

* [Home broadband connections](#home-broadband-connections)
* [Poor quality mobile connections](#poor-quality-mobile-connections)
* [Medium quality mobile connections](#medium-quality-mobile-connections)
* [Decent quality mobile connections](#decent-quality-mobile-connections)
* [Good quality mobile connections](#good-quality-mobile-connections)


### Home broadband connections

A home broadband connection presets represent common connections from desktops, console platforms, and some mobile devices. Most of them are good quality network connections.

* [Home Broadband](#home-broadband)
* [Home Fiber](#home-fiber)
* [Home Cable](#home-cable)
* [Home DSL](#home-dsl)
* [Home Satellite](#home-satellite)
* [Home Broadband with Congested Network](#home-broadband-with-congested-network)

### Poor-quality mobile connections

A poor-quality mobile connection preset represents an extremely poor connection, entirely unsuitable for synchronous multiplayer gaming due to exceptionally [high ping](#latency). However, it might work for some turn-based games.

The following Network Simulator presets simulate a poor-quality mobile connection:

* [Mobile 2G](#mobile-2g)
* [Mobile 2.5G](#mobile-25g)
* [Mobile 2.75G](#mobile-275g)
* [Mobile 3G](#mobile-3g)


### Medium-quality mobile connections

A medium-quality mobile connection preset represents the minimum supported mobile connection for synchronous gameplay. Expect [high pings](#latency), [jitter](#jitter), stuttering, and [packet loss](#packet-loss).

The [Mobile 3.5G](#mobile-35g) Network Simulator presets simulates a medium-quality mobile connection.

### Decent-quality mobile connections

A decent-quality mobile connection preset represents a suitable network for synchronous multiplayer. However, the [ping](#latency) and overall connection quality and stability might result in poor player experience due to [packet drops](#packet-loss). Players might drop all packets in bursts of one to 60 seconds, so you must ensure you handle reconnections.

The following Network Simulator presets simulate a poor quality mobile connection:

* [Mobile 3.75G](#mobile-375g)
* [Mobile 4G](#mobile-4g)
* [Mobile 4.5G](#mobile-45g)

### Good quality mobile connections

A good quality mobile connection preset represents a mobile connection comparable to or better than a typical [home broadband connection](#home-broadband).

The [Mobile 5G](#mobile-5g) Network Simulator preset simulates a good-quality mobile connection

## Network configuration presets

A network configuration preset is a bundle of Network Simulator parameters that simulate a common network connection type. This section covers the available Network Simulator configuration presets.

### Home Broadband

The Home Broadband network simulation preset simulates a typical generic home broadband connection.

|**Name**|Home Broadband [WIFI, Cable, Console, PC]|
|---|---|
|**Description**|Simulates a typical home broadband connection.|
|**Packet delay (ms)**|32|
|**Packet jitter (ms)**|12|
|**Packet loss interval**|0|
|**Packet loss percent**|2|

### Home Fiber

The Home Fiber network simulation preset simulates the best case network connection scenario for desktop and console platforms. Excellent network connection type for multiplayer games.

|**Name**| Home Fiber [Best real-world scenario] |
|---|---|
|**Description**| Simulates the best real-world scenario. |
|**Packet delay (ms)**| 10 |
|**Packet jitter (ms)**| 1 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 0 |

### Home Cable

The Home Cable network simulation preset simulates an optimal network connection scenario for desktop and console platforms. Optimal network connection type for multiplayer games.

|**Name**| Home Cable [Optimal real-world scenario]  |
|---|---|
|**Description**| Simulates an optimal real-world scenario. |
|**Packet delay (ms)**| 25 |
|**Packet jitter (ms)**| 5 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 0 |

### Home DSL

The Home DSL network simulation preset simulates an average network connection scenario for desktop and console platforms.

|**Name**| Home DSL [ADSL or VDSL] |
|---|---|
|**Description**| Simulates an average real-world scenario. |
|**Packet delay (ms)**| 30 |
|**Packet jitter (ms)**| 10 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 0 |

### Home Satellite

The Home Satellite network simulation preset simulates a Low Earth orbit satellite network connection scenario for desktop and console platforms. Good quality broadband network connection, but with a constant higher ping.

|**Name**| Home Satellite [low Earth orbit] |
|---|---|
|**Description**| Simulates a low Earth orbit satellite network connection. |
|**Packet delay (ms)**| 100 |
|**Packet jitter (ms)**| 10 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 0 |

### Home Broadband with Congested Network

The Home Broadband with Congested Network simulation preset simulates desktop and console platforms trough congested networks, where other users already using the network's maximum capacity. The otherwise decent network connection is affected by very bad jitter.

|**Name**| Home Broadband with Congested Network |
|---|---|
|**Description**| Simulates a congested home broadband network connection. |
|**Packet delay (ms)**| 50            |
|**Packet jitter (ms)**| 50            |
|**Packet loss interval**| 0             |
|**Packet loss percent**| 1             |

### Mobile 2G

The Mobile 2G network simulation preset simulates a typical 2G mobile connection.

|**Name**| Mobile 2G [CDMA & GSM, '00] |
|---|---|
|**Description**| Simulates a poor-quality mobile connection. |
|**Packet delay (ms)**| 520 |
|**Packet jitter (ms)**| 50 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 7 |

### Mobile 2.5G

The Mobile 2.5G network simulation preset simulates a typical 2.5G (GPRS) mobile connection.

|**Name**| Mobile 2.5G [GPRS, G, '00]                  |
|---|---|
|**Description**| Simulates a poor-quality mobile connection. |
|**Packet delay (ms)**| 480 |
|**Packet jitter (ms)**| 40 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 7 |

### Mobile 2.75G

The Mobile 2.75G network simulation preset simulates a typical 2.75G (EDGE) mobile connection.

|**Name**| Mobile 2.75G [Edge, E, '06] |
|---|---|
|**Description**| Simulates a decent-quality mobile connection. |
|**Packet delay (ms)**| 440 |
|**Packet jitter (ms)**| 40 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 7 |

### Mobile 3G

The Mobile 3G network simulation preset simulates a typical 3G mobile connection.

|**Name**| Mobile 3G [WCDMA & UMTS, '03] |
|---|---|
|**Description**| Simulates a decent-quality mobile connection. |
|**Packet delay (ms)**| 360 |
|**Packet jitter (ms)**| 30 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 7 |

### Mobile 3.5G

The Mobile 3.5G network simulation preset simulates a typical 3.5G (HSDPA/H) mobile connection.

|**Name**| Mobile 3.5G [HSDPA, H, '06] |
|---|---|
|**Description**| Simulates a decent-quality mobile connection. |
|**Packet delay (ms)**| 160 |
|**Packet jitter (ms)**| 30 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 6 |

### Mobile 3.75G

The Mobile 3.75G network simulation preset simulates a typical 3.75G (HSPA+/H+) mobile connection.

|**Name**| Mobile 3.75G [HDSDPA+, H+, '11] |
|---|---|
|**Description**| Simulates a decent-quality mobile connection. |
|**Packet delay (ms)**| 130 |
|**Packet jitter (ms)**| 30 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 6 |

### Mobile 4G

The Mobile 4G network simulation preset simulates a typical 4G (LTE) mobile connection.

|**Name**| Mobile 4G [4G, LTE, '13] |
|---|---|
|**Description**| Simulates a decent-quality mobile connection. |
|**Packet delay (ms)**| 100 |
|**Packet jitter (ms)**| 20 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 4 |

### Mobile 4.5G

The Mobile 4.5G network simulation preset simulates a typical 4.5G (LTE+) mobile connection.

|**Name**| Mobile 4.5G [4G+, LTE-A, '16] |
|---|---|
|**Description**| Simulates a decent-quality mobile connection. |
|**Packet delay (ms)**| 80 |
|**Packet jitter (ms)**| 20 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 4 |

### Mobile 5G

The Mobile 5G network simulation preset simulates a typical 5G mobile connection.

|**Name**| Mobile 5G ['20] |
|---|---|
|**Description**| Simulates a good-quality mobile connection. |
|**Packet delay (ms)**| 30 |
|**Packet jitter (ms)**| 20 |
|**Packet loss interval**| 0 |
|**Packet loss percent**| 4 |

## Network events

The following sections cover common network connection events and problems you can simulate with the Network Simulator.

* [Disconnects](#disconnects)
* [Lag spikes](#lag-spikes)
* [Latency](#latency)
* [Packet loss](#packet-loss)
* [Jitter](#jitter)
* [Instability](#instability)

### Disconnects

A network disconnect is a disruption or termination of the connection between the sender and the receiver.

You can trigger a network disconnect in the Unity Editor with the Network Simulator component by setting the **Connection** to **Disconnected**. See the [Disconnect scenario](#disconnect-scenario) example.

![](/img/tools/netsim-1.png)

### Lag spikes

A lag spike refers to a temporary increase in network latency. Some of the most common causes of lag spikes include overburdened CPUs, temporary network disconnects, and unreliable connections with high [jitter](#jitter).

You can trigger a simulated lag spike in the Unity Editor with the Network Simulator component by setting the **Duration of the lag spike (ms)**, then selecting **Trigger**. See the [Lag spike scenario](#lag-spike-scenario) example.

![](/img/tools/netsim-7.png)

### Latency

Network latency measures the time it takes a packet to travel across a network in milliseconds (ms). Players experience high latency (sometimes called “lag”) when the time delay between the server (or host) sending the information and the client receiving the information creates communication bottlenecks or an undesirable playing experience.

You can trigger control the simulated network latency in the Unity Editor with the Network Simulator component by setting the **Packet Delay (ms)** parameter.

:::note
A common method of measuring the latency of a network connection is through ping messages. Pings are small network packets that you can use to measure the time it takes a packet to reach its destination in milliseconds. High ping often equates to high latency.
:::

### Packet loss

Packet loss occurs when packets fail to reach their destination when transmitted across a network. It’s typically measured as a percentage of packets lost or the frequency of packets dropped.

You can trigger control the simulated packet loss in the Unity Editor with the Network Simulator component by setting the **Packet Loss Interval** and the **Packet Loss (%)** parameters.

### Jitter

Jitter is the variation in packet delays ([latency](#latency)) measured in milliseconds (ms). High-quality network connections typically have reliable and consistent latency. However, poorer-quality network connections experience high variations in latency, which can create an inconsistent or poor experience for players. These high variations in latency can cause issues such as flickering displays, stuttering, further packet delays, and additional CPU usage.

You can trigger control the simulated network jitter in the Unity Editor with the Network Simulator component by setting the **Packet Jitter (ms)** parameter.

### Instability

An unstable network connection might consist of intermittent network issues, such as network [disconnects](#disconnects), [packet loss](#packet-loss), [jitter](#jitter), and [latency](#latency).

See the [Unstable connection scenario](#unstable-connection-scenario) example.

## Network scenarios

Network scenarios are built-in (or custom) presets for network types that simulate a specific scenario, such as intermittent lag spikes. They allow you simulate a variable combination of issues and automatically switching configuration presets.

You can use the Network Simulator SDK to create custom network scenarios that automatically trigger network events (such as a lag spike) at specific frequencies and intervals.

The code samples in this section showcase how you can build custom network simulator scenarios.

### Lag spike scenario

The following code snippet shows using `NetworkScenarioTask` to create a custom network scenario that simulates a connection with [lag spikes](#lag-spikes). See [`LagSpikeScenarioWithAsyncTask.cs`](https://github.com/Unity-Technologies/com.unity.multiplayer.tools/blob/develop/Samples~/NetworkSimulator/LagSpikeScenarioWithAsyncTask.cs#L27).

### Disconnect scenario

The following code snippet uses `NetworkScenarioBehaviour` to create a custom network scenario that simulates a connection with frequent player [disconnects](#disconnects). See [`DisconnectScenarioWithMonoBehaviour.cs`](https://github.com/Unity-Technologies/com.unity.multiplayer.tools/blob/develop/Samples~/NetworkSimulator/DisconnectScenarioWithMonoBehaviour.cs).

### Unstable connection scenario

The following code snippet shows using `NetworkScenarioTask` to create a custom network scenario that simulates an [unstable connection](#instability). See [`UnstableConnection.cs`](https://github.com/Unity-Technologies/com.unity.multiplayer.tools/blob/develop/Samples~/NetworkSimulator/UnstableConnection.cs).

### Affect connection parameters using Animation Curves scenario

The following code snippet uses `NetworkScenarioBehaviour` to create a custom network scenario that simulates multiple connection problems. It dynamically changes multiple connection parameters using Animation Curves. See [`ConnectionParametersWithCurves.cs`](https://github.com/Unity-Technologies/com.unity.multiplayer.tools/blob/develop/Samples~/NetworkSimulator/ConnectionParametersWithCurves.cs).

The sample scenario showcases a dynamic scenario using an animation curve loop with variable [packet delays](#latency), [packet jittering](#jitter), and [packet loss](#packet-loss).
