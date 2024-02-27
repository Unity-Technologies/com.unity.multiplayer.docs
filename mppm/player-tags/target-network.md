---
id: target-network
title: Configure a Player to simulate different network connections example
sidebar_label: Simulate network connections example
description: This example shows how you can use the Network Simulator and Players to test different network connections in Multiplayer Play Mode.
---

Without configuration, Player Tags don't do anything. You must target Player Tags in your game scripts with `CurrentPlayer.ReadOnlyTags()`. You can place these scripts where you want, but you must attach the scripts to a [NetworkObject](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/) (such as the Player).

The logic in the following example checks if the Player Tag has a string rather than if it’s equal to a string to allow for more flexibility with the name of the Player Tag. You can change this logic so that it checks for an exact match.

#### Simulate network conditions

This example script uses the Network Simulation Presets from the [Multiplayer Tools package](https://docs-multiplayer.unity3d.com/tools/current/install-tools/) to automatically simulate a fast or slow network based on the Player Tag. A Player with the `FastNetwork` Player Tag simulates a common [Home Broadband](https://docs-multiplayer.unity3d.com/tools/current/tools-network-simulator/#home-broadband-connections) connection, and a Player with the `SlowNetwork` Player Tag simulates a [Mobile 2.5G](https://docs-multiplayer.unity3d.com/tools/current/tools-network-simulator/#mobile-25g) connection.

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
        if (CurrentPlayer.ReadOnlyTags() == "FastNetwork")
        {
            connectionPreset = NetworkSimulatorPresets.HomeBroadband;
        }
        else if (CurrentPlayer.ReadOnlyTags() == "SlowNetwork")
        {
            connectionPreset = NetworkSimulatorPresets.Mobile2_5G;
        }

        networkSimulator.ConnectionPreset = connectionPreset;
    }
}
```
