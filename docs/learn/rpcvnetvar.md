---
id: rpcvnetvar
title: RPC vs NetworkVariable
sidebar_label: RPC vs NetworkVariable
---

MLAPI has two main methods of syncing information between players. `RPC` (Remote Procedure Call) and replicated state (`NetworkVariable`). They both send messages over the network. The logic and your design considerations around how they send messages is what will make you choose one over the other. 

## RPCs

The concept of an `RPC` is common not only in video games but in the software industry in general. They are ways to call methods on objects that are not in the same executable. 

At a high level, when calling an `RPC` client side, the SDK will take a note of the object, component, method and any parameters for that `RPC` and send that information over the network. The server will receive that information, find the specified object, find the specified method and call it on the specified object with the received parameters. 

When calling an `RPC`, you call a method remotely on an object that could be anywhere in the world. They are "events" you can trigger when needed. 

If you call an `RPC` method on your side, it will execute on a different machine.

## NetworkVariables

At a high level, a `NetworkVariable` is a variable with its value tracked by the SDK. Its values are replicated to other nodes in your network regularly. When a client connects initially to a host, all relevant `NetworkVariable` latest values "state" will be replicated to that new client. Your state gets updated at regular intervals.

`NetworkVariable` can be referenced as "state" or as "Netvars" or as replicated vars.

If you change your variable's value on your side, others will see the latest value on their side.

## Choosing between NetworkVariables or RPCs

- Use `RPC`s for transient events, information only useful for a  moment when it's received.
- Use `NetworkVariable`s for persistent states, for information that will be around more than a moment.

A quick way to choose which to use is to ask yourself: "Should a player joining mid-game get that information?"

Using the Boss Room's door as an example. A player's client needs to receive the information that the door is open to play the right animations.

If we sent an `RPC` to all clients, then all players connecting mid game after that `RPC` are sent will miss that information and have the wrong visual on their clients.

In that case, it is preferable to use `NetworkVariable`s like shown here.

<!---```csharp reference

https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Shared/NetworkDoorState.cs

--->
```csharp
using MLAPI;
using MLAPI.NetworkVariable;
using System.Collections;
using UnityEngine;

/// <summary>
/// Network state for a door which can be opened by pressing on a floor switch.
/// </summary>
public class NetworkDoorState : NetworkBehaviour
{
    public NetworkVariableBool IsOpen { get; } = new NetworkVariableBool();
}

```

It uses a `BoolNetworkVariable` to represent the "IsOpen" state. If I open the door and a player connects after this, the host will replicate all the world's information to that new player, including the door's state.


## Why not use NetworkVariabless for everything?

`RPC`s are simpler.

If you have a temporary event like an explosion, you do not need a replicated state for this. It would not make sense. You would have an "unexploded" state that would need to be synced everytime a new player connected? From a design perspective, you might not want to represent these events as state.

An explosion could use an `RPC` for the event, but the effect of the explosion should be using `NetworkVariable`s ( for example player's knockback and health decrease). A newly connected player doesn't care about an explosion that happened 5 seconds ago. They do care about the current health of the players around that explosion though.
  
Actions in Boss Room are a great example for this. The area of effect action (`AoeAction`) triggers an `RPC` when the action is activated (showing a VFX around the affected area). The imp's health (`NetworkVariable`s) is updated. If a new player connects, they will see the damaged imps. We would not care about the area of effect ability's VFX, which works great with a transient `RPC`.
   
`AoeActionInput.cs` Shows the input being updated client side and not waiting for the server. It then calls an `RPC` when clicking on the area to affect.

<!---```csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionInput.cs
 --->
```csharp   
    
using UnityEngine;

namespace BossRoom.Visual
{
    /// <summary>
    /// This class is the first step in AoE ability. It will update the initial input visuals' position and will be in charge
    /// of tracking the user inputs. Once the ability
    /// is confirmed and the mouse is clicked, it'll send the appropriate RPC to the server, triggering the AoE serer side gameplay logic.
    /// The server side gameplay action will then trigger the client side resulting FX.
    /// This action's flow is this: (Client) AoEActionInput --> (Server) AoEAction --> (Client) AoEActionFX
    /// </summary>
    public class AoeActionInput : BaseActionInput
    {
        [SerializeField]
        private GameObject m_InRangeVisualization;

        [SerializeField]
        private GameObject m_OutOfRangeVisualization;

        Camera m_Camera;
        int m_GroundLayerMask;
        Vector3 m_Origin;

        RaycastHit[] m_UpdateResult = new RaycastHit[1];

        void Start()
        {
            var radius = GameDataSource.Instance.ActionDataByType[m_ActionType].Radius;
            transform.localScale = new Vector3(radius * 2, radius * 2, radius * 2);
            m_Camera = Camera.main;
            m_GroundLayerMask = LayerMask.GetMask("Ground");
            m_Origin = m_PlayerOwner.transform.position;
        }

        void Update()
        {
            if (Physics.RaycastNonAlloc(
                ray: m_Camera.ScreenPointToRay(Input.mousePosition),
                results: m_UpdateResult,
                maxDistance: float.PositiveInfinity,
                layerMask: m_GroundLayerMask) > 0)
            {
                transform.position = m_UpdateResult[0].point;
            }

            float range = GameDataSource.Instance.ActionDataByType[m_ActionType].Range;
            bool isInRange = (m_Origin - transform.position).sqrMagnitude <= range * range;
            m_InRangeVisualization.SetActive(isInRange);
            m_OutOfRangeVisualization.SetActive(!isInRange);

            if (Input.GetMouseButtonUp(0))
            {
                if (isInRange)
                {
                    var data = new ActionRequestData
                    {
                        Position = transform.position,
                        ActionTypeEnum = m_ActionType,
                        ShouldQueue = false,
                        TargetIds = null
                    };
                    m_PlayerOwner.RecvDoActionServerRPC(data);
                }
                Destroy(gameObject);
                return;
            }
        }
    }
}

```

`AOEAction.cs` Server side logic detecting enemies inside the area and applying damage. It then broadcasts an `RPC` to tell all clients to play the VFX at the appropriate position. Character's state will automatically update with their respective `NetworkVariable`s update (health and alive status for example).


<!---```csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Server/Game/Action/AOEAction.cs
--->
```csharp
using BossRoom;
using BossRoom.Server;
using MLAPI;
using MLAPI.Spawning;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Area-of-effect attack Action. The attack is centered on a point provided by the client.
/// </summary>
public class AoeAction : Action
{
    /// <summary>
    /// Cheat prevention: to ensure that players don't perform AoEs outside of their attack range,
    /// we ensure that the target is less than Range meters away from the player, plus this "fudge
    /// factor" to accomodate miscellaneous minor movement.
    /// </summary>
    const float k_MaxDistanceDivergence = 1;

    bool m_DidAoE;

    public AoeAction(ServerCharacter parent, ref ActionRequestData data)
        : base(parent, ref data) { }

    public override bool Start()
    {
        float distanceAway = Vector3.Distance(m_Parent.transform.position, Data.Position);
        if (distanceAway > Description.Range+k_MaxDistanceDivergence)
        {
            Debug.LogError($"Hacking detected?! (Object ID {m_Parent.NetworkObjectId}) {Description.ActionTypeEnum}'s AoE range is {Description.Range} but we were given a point that's {distanceAway} away from us. Canceling AoE");
            return ActionConclusion.Stop;
        }

        // broadcasting to all players including myself.
        // We don't know our actual targets for this attack until it triggers, so the client can't use the TargetIds list (and we clear it out for clarity).
        // This means we are responsible for triggering reaction-anims ourselves, which we do in PerformAoe()
        Data.TargetIds = new ulong[0];
        m_Parent.NetState.RecvDoActionClientRPC(Data);
        return ActionConclusion.Continue;
    }

    public override bool Update()
    {
        if (TimeRunning >= Description.ExecTimeSeconds && !m_DidAoE)
        {
            // actually perform the AoE attack
            m_DidAoE = true;
            PerformAoE();
        }
        return ActionConclusion.Continue;
    }

    private void PerformAoE()
    {
        // Note: could have a non alloc version of this overlap sphere where we statically store our collider array, but since this is a self
        // destroyed object, the complexity added to have a static pool of colliders that could be called by multiplayer players at the same time
        // doesn't seem worth it for now.
        var colliders = Physics.OverlapSphere(m_Data.Position, Description.Radius, LayerMask.GetMask("NPCs"));
        for (var i = 0; i < colliders.Length; i++)
        {
            var enemy = colliders[i].GetComponent<IDamageable>();
            if (enemy != null)
            {
                // make the target "flinch", assuming they're a living enemy
                var networkObject = NetworkSpawnManager.SpawnedObjects[enemy.NetworkObjectId];
                if (networkObject)
                {
                    var state = networkObject.GetComponent<NetworkCharacterState>();
                    if (state)
                    {
                        state.RecvPerformHitReactionClientRPC();
                    }
                }

                // actually deal the damage
                enemy.ReceiveHP(m_Parent, -Description.Amount);
            }
        }
    }
}
```

`AoeActionFX.cs` is triggered by an `RPC` coming from the server

<!---```csharp reference
    https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Client/Game/Action/AoeActionFX.cs
--->
```csharp
using System;
using UnityEngine;

namespace BossRoom.Visual
{
    /// Final step in the AoE action flow. Please see AoEActionInput for the first step and more details on overall flow
    public class AoeActionFX : ActionFX
    {
        public AoeActionFX(ref ActionRequestData data, ClientCharacterVisualization parent)
            : base(ref data, parent) { }

        public override bool Start()
        {
            m_Parent.OurAnimator.SetTrigger(Description.Anim);
            GameObject.Instantiate(Description.Spawns[0], m_Data.Position, Quaternion.identity);
            return ActionConclusion.Stop;
        }

        public override bool Update()
        {
            throw new Exception("This should not execute");
        }
    }
}

```

:::tip
If you want to make sure two variables are received at the same time, `RPC`s are great for that. 

If you change `NetworkVariable` "a" and "b", there's no guarantee they'll both be received client side at the same time. Sending them as two parameters in the same `RPC` allows to make sure they'll be received at the same time client side.
:::

`NetworkVariable`s are great when you only care about the latest value.


## Summary

`NetworkVariable`s are great for managing state, to make sure everyone has the latest value. Use them when you want to make sure newly connected players get an up to date world state.

`RPC`s are great for sending transient events. Use them when transmiting short lived events.



