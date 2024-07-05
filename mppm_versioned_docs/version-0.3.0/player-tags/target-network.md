---
id: target-network
title: Configure a Player to simulate different network connections example
sidebar_label: Simulate network connections example
description: This example shows how you can use the Network Simulator and Players to test different network connections in Multiplayer Play Mode.
---

Without configuration, tags don't do anything. You must target tags in your game scripts with `CurrentPlayer.Tag`. You can place these scripts where you want, but you must attach the scripts to a [NetworkObject](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/) (such as the **Player**).

The logic in the following example checks if the tag has a string rather than if it’s equal to a string to allow for more flexibility with the name of the tag. You can change this logic so that it checks for an exact match.

#### Simulate network conditions

This example script uses the Network Simulation Presets from the [Multiplayer Tools package](https://docs-multiplayer.unity3d.com/tools/current/install-tools/) to automatically simulate a fast or slow network based on the tag. A **Player** with the `FastNetwork` tag simulates a common [Home Broadband](https://docs-multiplayer.unity3d.com/tools/current/tools-network-simulator/#home-broadband-connections) connection, and a Player with the `SlowNetwork` tag simulates a [Mobile 2.5G](https://docs-multiplayer.unity3d.com/tools/current/tools-network-simulator/#mobile-25g) connection.

:::note
This example uses the [Network Simulator](https://docs-multiplayer.unity3d.com/tools/current/tools-network-simulator/) tool from the `com.unity.multiplayer.tools` package.
:::

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Multiplayer.Playmode;
using Unity.Multiplayer.Tools.NetworkSimulator.Runtime;

public class NetworkSimulation : MonoBehaviour
{
    void Start()
    {
        var networkSimulator = GetComponent<NetworkSimulator>() ??
                               gameObject.AddComponent<NetworkSimulator>();

        var connectionPreset = NetworkSimulatorPresets.None;
        if (CurrentPlayer.Tag == "FastNetwork")
        {
            connectionPreset = NetworkSimulatorPresets.HomeBroadband;
        }
        else if (CurrentPlayer.Tag == "SlowNetwork")
        {
            connectionPreset = NetworkSimulatorPresets.Mobile2_5G;
        }

        networkSimulator.ConnectionPreset = connectionPreset;
    }
}
```