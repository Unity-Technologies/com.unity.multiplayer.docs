---
id: time
title: Network Time System
description: An explanation of the new network time system that replaces the old NetworkTime. This system will form the foundation for building other systems such as snapshoots, commands and p[redictions
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

This `INetworkTimeProvider` is a very simple provider which increments `ServerTick` and `PredictedTick` at a consistent rate while running the `PredictedTick` 100 ms ahead of the `ServerTick`. This just acts as an example implementation and is not a recommended way to implement a `INetworkTimeProvider`

### Buffering

When calculating time MLAPI adds additional buffering to delay messages further to smooth out the data stream. The default buffer values are `1f / Tickrate` when the client receives and `2f / Tickrate` when the server receives.

:::note
Buffering will only apply on `NetworkVariable` changes. `RPC`s, `NetworkObject` spawns etc. are unaffected.
:::

Buffer time can be manually changed in code to, for instance, use different buffer sizes for different platforms. `NetworkManager.Singleton.NetworkTimeSystem.ClientBufferTime` and `NetworkManager.Singleton.NetworkTimeSystem.ServerBufferTime` can be used to adjust the time. 

:::note
These settings should only be adjusted on a client. The server does not apply any buffering.
:::










### The Elevator Problem

An example problem which will be solved by this new time system is the `elevator problem`. The elevator problem works in the following way.

- There is a platform moving up and down in a constant pattern.
- A local client authoritative or predicted player must be able to walk on the platform.
- Player objects from other players might also walk on the platform.


*A platform in server space and a server controlled non player character (NPC)*

Example code of moving a platform in server time:
```csharp
public class MovingPlatform : MonoBehaviour
{
    [SerializeField]
    private Vector3 m_Point1;
    [SerializeField]
    private Vector3 m_Point2;
    [SerializeField]
    private float m_Duration;

    // This is just for illustration purposes, not recommended to use for gameplay code
    void Update()
    {
        transform.position = Vector3.Lerp(m_Point1, m_Point2, Mathf.PingPong((NetworkManager.Singleton.ServerTime.Time) / m_Duration, 1));
    }
}
```

When adding a client authoritative player character to a platform the result is the following:


*RTT = 200ms, `Own Player` = aligned, `Server NPC` = aligned, `Other Player` = 200ms behind*

This is less than ideal since other players will be a full RTT behind the platform. The problem here is that the player character moves in `predicted time` but the platform is in `server time`. This causes the player movement to look correct locally but wrong on all the other clients because once the player movement arrives on the server, the platform is already at another place.

Another way of approaching this could be to run the platform in predicted time. Here is an example code of moving a platform in predicted time:
```csharp
// This is just for illustration purposes, not recommended to use for gameplay code
void Update()
{
    transform.position = Vector3.Lerp(m_Point1, m_Point2, Mathf.PingPong((NetworkManager.Singleton.PredictedTime.Time) / m_Duration, 1));
}
```

After applying the changes, it will look like this:

<p float="left">
<img src="0014-network-time/platform_3.1.gif" width="45%">
<img src="0014-network-time/platform_3.2.gif" width="45%">
</p>

_**Client** RTT = 200ms, `Own Player` = aligned, `Server NPC` = 200ms behind, `Other Player` = 200ms behind_\
_**Host** RTT = 200ms, `Own Player` = aligned, `Server NPC` = aligned, `Other Player` = aligned_

It might seem like predicting the platform only makes the situation worse because now on clients also the server controlled objects are delayed. But there is an important difference to the last model. On the Host all objects are perfectly aligned to the platform because they are in the same time space.

Using our knowledge we acquired from the last two approaches we can come to the conclusion that if we can manage to run a platform in the same time space as all objects on it, they will be displayed correctly. This means we should predict a platform if our player comes close to it but we don't want to predict a platform which is not close to our player and contains objects from other players.

The elevator problem is also present when running a game with server authority but only if prediction is involved. Without prediction, everything will run in `server time` which means `server time` can just be used to display everything perfectly aligned.

When predicting a player object everything it interacts with such as close platforms have to be predicted. If they don't get predicted, the player's prediction will often deviate from the server's prediction which will result in a correction rollback. In some special cases like strictly horizontally moving platforms movement can still work fine without predicting the platform.

## Network Time Struct

A new struct will be introduced to represent network time. Our time system needs to work with ticks in mind which means a floating point value is not sufficient.

```csharp
public struct NetworkTime
{
    private int m_TickRate;
    private float m_TickInterval;

    private int m_Tick;
    private float m_TickDuration;

    public int Tick => m_Tick;

    public int TickRate => m_TickRate;

    public NetworkTime(int tickRate)
    {
        m_TickRate = tickRate;
        m_TickInterval = 1f / m_TickRate; // potential floating point precision issue, could result in different interval on different machines
        m_TickDuration = 0;
        m_Tick = 0;
    }

    public NetworkTime(int tickRate, int tick, float tickDuration = 0f)
        : this(tickRate)
    {
        Assert.IsTrue(tickDuration < 1f / tickRate);

        m_Tick = tick;
        m_TickDuration = tickDuration;
    }

    public NetworkTime(int tickRate, float time)
        : this(tickRate)
    {
        this += time;
    }
}
```

The `NetworkTime` struct will give a user access to similar API functionality as the Unity `Time` API.

```csharp
public struct NetworkTime
{
    //.....
    public float Time => m_Tick * m_TickInterval + m_TickDuration;

    public float FixedTime => m_Tick * m_TickInterval;

    public float FixedDeltaTime => m_TickInterval;

    public int Tick => m_Tick;

    public int TickRate => m_TickRate;
    //....
}
```

NetworkTime will also provide +- operators for `NetworkTime` and `float` like this:

```csharp
public static NetworkTime operator +(NetworkTime a, NetworkTime b)
{
    Assert.AreEqual(a.TickRate, b.TickRate, $"NetworkTimes must have same TickRate to add.");

    int tick = a.Tick + b.Tick;
    float tickDuration = a.m_TickDuration + b.m_TickDuration;

    if (tickDuration > a.m_TickInterval)
    {
        tick++;
        tickDuration -= a.m_TickInterval;
    }

    return new NetworkTime(a.TickRate, tick, tickDuration);
}

public static NetworkTime operator +(NetworkTime a, float b)
{
    a.m_TickDuration += b;

    var deltaTicks = Mathf.FloorToInt(a.m_TickDuration * a.m_TickRate);
    a.m_TickDuration %= a.m_TickInterval;

    a.m_Tick += deltaTicks;

    return a;
}
```

Access to the `NetworkTime` can either be done over the `NetworkManager` for convenience:
```csharp
NetworkTime predictedTime = NetworkManager.Singleton.PredictedTime;
NetworkTime serverTime = NetworkManager.Singleton.ServerTime;
```
or by accessing the `PredictedTime` and `ServerTime` properties of the `NetworkTimeSystem` directly.

## Architecture

![architecture](0014-network-time/architecture.png)

- **INetworkTimeProvider** Open interface, in control of how time advances relative to Time.deltaTime.
- **NetworkTimeSystem** Closed system to keep track of time, convert them to ticks. Also providers helper functions and APIs to interact with network time.
- **NetworkManager** Executes logic for each network tick. Advances the `NetworkTimeSystem`.

## INetworkTimeProvider

INetworkTimeProvider is the interface used to drive time. This interface allows the MLAPI to be open about how a game approaches time. The `INetworkTimeProvider` decides how time is initialized and advanced.

```csharp
public interface INetworkTimeProvider
{
    /// <summary>
    /// Called once per frame to advance time.
    /// </summary>
    /// <param name="predictedTime">The predicted time to advance.</param>
    /// <param name="serverTime">The server time to advance.</param>
    /// <param name="deltaTime">The real delta time which passed.</param>
    /// <returns>true if advancing the the time succeeded; otherwise false if there was a hard correction.</returns>
    public bool AdvanceTime(ref NetworkTime predictedTime, ref NetworkTime serverTime, float deltaTime);

    /// <summary>
    /// Called once on clients only to initialize time.
    /// </summary>
    /// <param name="predictedTime">The predicted time to initialize. In value is serverTime.</param>
    /// <param name="serverTime">the server time to initialize. In value is a time matching the tick of the initial received approval packet.</param>
    public void InitializeClient(ref NetworkTime predictedTime, ref NetworkTime serverTime);
}
```

`AdvanceTime` is called once each update to advance times to new values. The `INetworkTimeProvider` has full control over how time gets advanced. MLAPI will come with two implementations of it.

### ServerNetworkTimeProvider

`ServerNetworkTimeProvider` will be used by the server for a constant time update rate. The server has no need to speed up or slow down it's time.
```csharp
public class ServerNetworkTimeProvider : INetworkTimeProvider
{
    public bool AdvanceTime(ref NetworkTime predictedTime, ref NetworkTime serverTime, float deltaTime)
    {
        predictedTime += deltaTime;
        serverTime += deltaTime;
        return true;
    }

    public void InitializeClient(ref NetworkTime predictedTime, ref NetworkTime serverTime)
    {
        predictedTime = serverTime;
    }
}
```

### ClientNetworkTimeProvider

`ClientNetworkTimeProvider` will be used as the default time provider for non-server peers. The implementation focuses on providing a stable value even under bad networking conditions by sacrificing latency.

The `AdvanceTime` function will do the following

1. Advance time but multiply the delta by a time scale to catch up or slow down if needed.
```csharp
predictedTime += deltaTime * m_PredictedTimeScale;
serverTime += deltaTime * m_ServerTimeScale;

```
2. Calculate the ideal target time for the client
```csharp
float targetServerTime = lastReceivedSnapshotTime - TargetClientBufferTime;
float targetPredictedTime = lastReceivedSnapshotTime + rtt + TargetServerBufferTime;
```
`targetPredictedTime` is currently just based on RTT. This is not ideal and not very precises which means we need to apply a lot of buffering to smooth out the data stream which introduces more latency. With the command + ack system we will improve this to instead base the `targetPredictedTime` on the size of the command queue of the server.

In addition RTT is currently taken from the `NetworkTransport` which is not ideal. In the future when we have a snapshot ack system we will leverage that system to calculate RTT more accurately and use an exponential moving average or similar to smooth the RTT value.

3. Check whether there is a need for a hard reset/catchup

```csharp
bool reset = false;
m_PredictedTimeScale = 1f;
m_ServerTimeScale = 1f;

// reset because too large predicted offset?
if (predictedTime.FixedTime < targetPredictedTime - k_HardResetThreshold || predictedTime.FixedTime > targetPredictedTime + k_HardResetThreshold)
{
    reset = true;
}

// reset because too large server offset?
if (serverTime.FixedTime < targetServerTime - k_HardResetThreshold || serverTime.FixedTime > targetServerTime + k_HardResetThreshold)
{
    reset = true;
}

// Always reset both times to not break simulation integrity.
if (reset)
{
    predictedTime = new NetworkTime(predictedTime.TickRate, targetPredictedTime);
    serverTime = new NetworkTime(serverTime.TickRate, targetServerTime);
    return false;
}
```

4. If no hard reset was needed adjust time scale to catch up or slow down
```csharp
// Adjust predicted time scale
if (Mathf.Abs(targetPredictedTime - predictedTime.FixedTime) > k_CorrectionTolerance)
{
    m_PredictedTimeScale += targetPredictedTime > predictedTime.FixedTime ? k_AdjustmentRatio : -k_AdjustmentRatio;
}

// Adjust server time scale
if (Mathf.Abs(targetServerTime - serverTime.FixedTime) > k_CorrectionTolerance)
{
    m_ServerTimeScale += targetServerTime > serverTime.FixedTime ? k_AdjustmentRatio : -k_AdjustmentRatio;
}

return true;
```

Most of the values such as correction tolerance and adjustment ration will be configurable by the developer if needed. In addition ClientNetworkTimeProvider will provide a mode where it only does hard resets and no soft catch ups. This is needed for certain types of games like rhythm game where background music needs to be synced to gameplay.


## NetworkTimeSystem

```csharp
public class NetworkTimeSystem
{
    private INetworkTimeProvider m_NetworkTimeProvider;
    private int m_TickRate;

    private NetworkTime m_PredictedTime;
    private NetworkTime m_ServerTime;

    /// <summary>
    /// Delegate for invoking an event whenever a network tick passes
    /// </summary>
    /// <param name="time">The predicted time for the tick.</param>
    public delegate void NetworkTickDelegate(NetworkTime time);

    /// <summary>
    /// Gets invoked before every network tick.
    /// </summary>
    public event NetworkTickDelegate OnNetworkTick = null;

    /// <summary>
    /// Gets invoked during every network tick. Used by internal components like <see cref="NetworkManager"/>
    /// </summary>
    internal event NetworkTickDelegate OnNetworkTickInternal = null;

    /// <summary>
    /// Creates a new instance of the <see cref="NetworkTimeSystem"/>.
    /// </summary>
    /// <param name="config">The network config</param>
    /// <param name="isServer">true if the system will be used for a server or host.</param>
    public NetworkTimeSystem(NetworkConfig config, bool isServer)
    {
        m_TickRate = config.TickRate;

        if (isServer)
        {
            m_NetworkTimeProvider = new ServerNetworkTimeProvider();
        }
        else
        {
            m_NetworkTimeProvider = new ClientNetworkTimeProvider(this);
        }

        m_PredictedTime = new NetworkTime(config.TickRate);
        m_ServerTime = new NetworkTime(config.TickRate);
    }
}
```

`NetworkTimeSystem` does not have dependencies on other non `timing` related MLAPI components. `NetworkTimeSystem` does not automatically advance time but must be advanced by calling the `AdvanceNetworkTime` function.

```csharp
/// <summary>
/// Called each network loop update during the <see cref="NetworkUpdateStage.PreUpdate"/> to advance the network time.
/// </summary>
/// <param name="deltaTime">The delta time used to advance time. During normal use this is <see cref="Time.deltaTime"/>.</param>
public void AdvanceNetworkTime(float deltaTime)
{
    // store old predicted tick to know how many fixed ticks passed
    var previousPredictedTick = PredictedTime.Tick;

    m_NetworkTimeProvider.AdvanceTime(ref m_PredictedTime, ref m_ServerTime, deltaTime);

    // cache times here so that we can adjust them to temporary values while simulating ticks.
    var cachePredictedTime = m_PredictedTime;
    var cacheServerTime = m_ServerTime;

    var currentPredictedTick = PredictedTime.Tick;
    var predictedToServerDifference = currentPredictedTick - ServerTime.Tick;

    for (int i = previousPredictedTick + 1; i <= currentPredictedTick; i++)
    {
        // set exposed time values to correct fixed values
        m_PredictedTime = new NetworkTime(TickRate, i);
        m_ServerTime = new NetworkTime(TickRate, i - predictedToServerDifference);

        OnNetworkTick?.Invoke(m_PredictedTime);
        OnNetworkTickInternal.Invoke(m_ServerTime);
    }

    // Set exposed time to values from tick system
    m_PredictedTime = cachePredictedTime;
    m_ServerTime = cacheServerTime;
}
```

There is one challenge in the implementation of `AdvanceNetworkTime`. It is not clear how to handle the relation ship between `PredictedTime` and `ServerTime` if multiple ticks have passed in the same advance step. The current solution expects that `PredictedTime` and `ServerTime` advanced at roughly the same pace which is true for most of the cases but not always. The alternative to solve this problem would be to have a more fine grained `INetworkTimeProvider` but this approach was not chosen to keep the interface simple.

<!--## Removal of TimeSync

The `TimeSync` message and all associated code has been removed from MLAPI. The concept of re-syncing time is not needed if we apply the learnings from the chapter above as all peers will always advance real time at the same pace. RTT and other factors will affect the `NetworkTime` but the client will be in control over adjusting time without the need of server input.
-->

