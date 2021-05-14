---
id: time
title: Network Time System
description: An explanation of the new network time system that replaces the old NetworkTime. This system will form the foundation for building other systems such as snapshoots, commands and predictions
---

<!---## Deprecations / Removals

### NetworkManager Settings

`Receive Tickrate`, `Network Tick Interval Sec`, `Max Receive Events Per Tick Rate`, `Event Tickrate` settings in NetworkManager are getting removed.



- `Network Tick Interval Sec` will now be given via the new `Tickrate` field.
- `Receive Tickrate` is being removed. There is no replacement for this. MLAPI will now poll the receive queues at the beginning of every tick.
- `Event Tickrate` will now be given via the new `Tickrate` field.
- `Max Receive Events Per Tick Rate` will be removed. There will be no functionality to restrict the amount of events in MLAPI anymore as we move from an event to a snapshot based system.

The default value for `Tickrate` will be `60` instead of `64`. A tickrate of 60 is more consistent with industry standard tickrates. Note that this rate is different than the default tickrate for FixedUpdate in Unity which is 50.

### NetworkTime

`NetworkTime` will be removed from MLAPI. As explained later in the RFC there are some flaws in the concept of a single `NetworkTime` so we will be replacing it with other concepts instead. For a quick fix of existing code instead of:
```csharp
var time = NetworkManager.Singleton.NetworkTime;
```
use
```csharp
var time = NetworkManager.Singleton.PredictedTime.Time;
```

## New Features

-->

There are different ways to define time in multiplayer scenarios. A multiplayer game connects multiple peers together where each peer has a different game engine time `Time.time` and potentially a different system time. This means there is a lack of a consistent time systems between peers and we need a time system that addresses this problem of running multiple peers connected to each other in controlled manner while keeping latency in mind.  
 


## Networking Topologies and Time

Networking topology affects how we think about the concept of time. MLAPI always uses a [listen server](../reference/glossary/network-topologies.md#client-hosted-listen-server) or **star topology** where all clients connect to a single server/host. This server contains and broadcasts state to all other clients. It does not necessarily hold authority over the state.

The possibilities of expressing times comes down to the following:

1. **Shared Time** A shared time between all peers. This time is used to ensure that all peers can display something at the same real world time.

1. **Local Time** As a single peer I have my own local time and base my gameplay around that time.

1. **Receive Time** When a peer-A receives state from peer-B, the `receive time` is based on the `local time` that Peer-B had when sending the message. This time can be used to smoothly interpolate received data.

The **star topology** allows us to reduce the amount of receive time each peer needs to keep track of. Since a client only receives state from the server it only has a single receive time, the `Server Time`. In addition it has one `local time` which it uses to send state to the server. The server can then map that time to `server time` when relaying the state to other clients. That way not all clients need to know about the time of other clients.

### Server Time
A client receives regular state updates from the server containing data about the game state. This state could for instance be a position. Because time passes as packets travel between the server and clients this state is in a different position in time then the state of a locally controlled player character. `ServerTime.Time` can be used to interact with logic in this time space.

For instance the following code could be used to displaying a moving platform which is aligned with the positions of all player objects from other players or server controlled NPCs:

```csharp
public class MovingPlatform : MonoBehaviour
{
    // Note moving in Update is only recommended for visual-only, non-networked objects.
    public void Update(){
        var positionX = Mathf.PingPong(NetworkManager.Singleton.ServerTime.Time)
        transform.position = new Vector3(positionX, 0, 0);
    }
}
```

### Simplifying Star Topology Time

When a client sends state to the server the server needs to somehow convert the `local time` of the client into `server time`. This can cause a few problems:

- The server must somehow keep track of all the times of every single connected client.
- The difference between the `erver Time` and the `local time` of a client is based on `RTT`. `RTT` can vary a lot between individual packets.
- Since the server is in control of the conversion from `local times` to `server time` it must let the client know about changes. The notifications for this changes will be delayed by `RTT / 2` or more if packets are dropped. In addition the server does not know much about a clients situation so forcing a change onto a client could lead into oscillation of the offset between `server time` and `client time`

To solve all the problems listed above MLAPI uses a different way of handling `local time`. The server will not deal with any time conversions. It will send out state in `server time` and  it expects to receive state from clients in `server time` as well.

To ensure that the client send state arrives in `server time` on the server, the client adjsuts `local time` so that it matches `server time` when it arrives on the server. MLAPI does this by predicting the time at which the packet will arrive on the server. Since the client knows about the time when the last server packet arrived it can add the `RTT` + a bit of buffering to  its `local time` and use that as the new `local time`.  We call this concept of adjusting `local time` to the server `predicted time`.


### Predicted Time
When moving your own player character locally, the character is ahead of time compared to all other NetworkObjects. This is the case because any changes to state will first need to be sent to the server and then back to all clients. `PredictedTime.Time` can be used to access this time. Most of the time `PredictedTime` should be used instead of `ServerTime` when implementing gameplay code.

Example of using Predicted Time:

```csharp
public class NetworkChat : NetworkBehaviour
{
    [ServerRpc(RequireOwnership = false)]
    SendChatMessageServerRpc(string message, float time)
    {
        Debug.Log($"Received message: {message} at time: {time}");
    }

    public void Update()
    {
        if (Input.GetKeyDown(KeyCode.Enter))
        {
            SendChatMessageServerRpc("Hello World!", NetworkManager.Singleton.PredictedTime.Time);
        }
    }
}
```

### Time on the Host/Server
Since there is zero latency when making a change to an object on the Host/Server `PredictedTime` will always be the same as `ServerTime` on the Server/Host. 

:::note
When implementing gameplay code using `PredictedTime` is recommended as it allows to potentially re-use the code on a client.
:::

### Network Ticks

MLAPI sends, receives and processes data at fixed tick intervals. It is important that gameplay code runs at a the same rate as the fixed tick. This is the case because the state which is synchronized will always be associated with a specific tick. To interpolate state correctly on another peer those tick values are used. This is similar to how you should only move RigidBodies in `FixedUpdate`.

MLAPI exposes multiple APIs to allow developers to do so.

- `NetworkManager.Singleton.NetworkTimeSystem.OnNetworkTick` can be subscribed to to run code every tick.
- Code running in `Update` or FixedUpdate could check for the current tick using `NetworkManager.Singleton.NetworkTime.PredictedTime.Tick`.
  
<!-- 
In the future we will expose more convenient ways to run logic during the network tick via a `NetworkFixedUpdate` in `NetworkBehaviour`.
-->

### INetworkTimeProvider

The built in `NetworkTimeSystem` provides a good starting point for a variety of games, however sometimes more control over time is needed. `INetworkTimeProvider` is an interface which allows to override the root calculation of all network time. 

:::note
This is an advanced feature, a faulty implementation of `INetworkTimeProvider` can result in a variety of issues.
:::

Here is an example implementation of a very simple custom `INetworkTimeProvider`:

```csharp
public class SampleNetworkTimeProvider : INetworkTimeProvider
{
    public bool AdvanceTime(ref NetworkTime predictedTime, ref NetworkTime serverTime, float deltaTime)
    {
        serverTime += deltaTime;
        predictedTime = serverTime + 0.1f;
        return true;
    }

    public void InitializeClient(ref NetworkTime predictedTime, ref NetworkTime serverTime)
    {
        predictedTime = serverTime + 0.1f;
    }
}
```
:::note
 `INetworkTimeProvider` is a very simple provider which increments `ServerTick` and `PredictedTick` at a consistent rate while running the `PredictedTick` 100 ms ahead of the `ServerTick`. This just acts as an example implementation and is not a recommended way to implement a `INetworkTimeProvider`
 
For more information on `INetworkTimeProvider` see [More on Network Time](time-reference.md#INetworkTimeProvider)

### Buffering

When calculating time MLAPI adds additional buffering to delay messages further to smooth out the data stream. The default buffer values are `1f / Tickrate` when the client receives and `2f / Tickrate` when the server receives.

:::note
Buffering will only apply on `NetworkVariable` changes. `RPC`s, `NetworkObject` spawns etc. are unaffected.
:::

Buffer time can be manually changed in code to, for instance, use different buffer sizes for different platforms. `NetworkManager.Singleton.NetworkTimeSystem.ClientBufferTime` and `NetworkManager.Singleton.NetworkTimeSystem.ServerBufferTime` can be used to adjust the time. 

:::note
These settings should only be adjusted on a client. The server does not apply any buffering.
:::


#

<!--## Removal of TimeSync

The `TimeSync` message and all associated code has been removed from MLAPI. The concept of re-syncing time is not needed if we apply the learnings from the chapter above as all peers will always advance real time at the same pace. RTT and other factors will affect the `NetworkTime` but the client will be in control over adjusting time without the need of server input.


-->

