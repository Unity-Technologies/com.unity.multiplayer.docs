---
id: target-team
title: Assign a Player a team example
description: This example shows how you can automatically assign Players to different teams in Multiplayer Play Mode.
---

Without configuration, Player Tags don't do anything. You must target Player Tags in your game scripts with `CurrentPlayer.ReadOnlyTags()`. You can place these scripts where you want, but you must attach the scripts to a [NetworkObject](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/) (such as the Player).

The logic in the following example checks if the Player Tag has a string rather than if it’s equal to a string to allow for more flexibility with the name of the Player Tag. You can change this logic so that it checks for an exact match.

:::important
The following example uses the `Contains` method, which is case-sensitive by default. You can make it case-insensitive by passing the `System.StringComparison.CurrentCultureIgnoreCase` method.
:::

## Automatically assign a Player to a team

The following script automatically sets a [NetworkVariable](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkvariable/) called `Team` based on the Player Tag.

A Player with a `Red` Player Tag automatically sets the `Team` NetworkVariable to `Red`. A Player with a `Blue` Player Tag automatically sets the `Team` NetworkVariable to `Blue`.

```csharp
using Unity.Netcode;
using UnityEngine;
using Unity.Multiplayer.Playmode;

public enum Team { Blue, Red, }

/// A player with a team that is automatically assigned
/// based on the Player Tag of the client that owns them
public class Player : NetworkBehaviour
{
    public NetworkVariable<Team> team = new (writePerm: NetworkVariableWritePermission.Owner);

    void Start()
    {
        var localClientId = NetworkManager.Singleton.LocalClientId;
        if (!team.CanClientWrite(localClientId))
        {
            return;
        }
        var mppmTag = CurrentPlayer.ReadOnlyTags();
        if (mppmTag.Contains("Blue"))
        {
            team.Value = Team.Blue;
        }
        if (mppmTag.Contains("Red"))
        {
            team.Value = Team.Red;
        }
    }
}
```
