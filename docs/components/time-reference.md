---
id: time-reference
title: More on Network Time 
description: This section gives more information on the new network time concepts including Netwrok time struct, INetworkTimeProvider, ServerNetworkTimeProvider,ClientNetworkTimeProvider, and NetworkTimeSystem
 
---
In this page we will expand on some of the concepts introduced in the [Network Time System](time.md) page

## The Elevator Problem

An example problem which will be solved by this new time system is the `elevator problem`. The elevator problem works in the following way.

- There is a platform moving up and down in a constant pattern.
- A local client authoritative or predicted player must be able to walk on the platform.
- Player objects from other players might also walk on the platform.

![Elevator Problem](/img/platform_1.gif)

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
![Elevator Problem Client Authoritive](/img/platform_2.gif)

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
  
<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'Client', value: 'tab1'},
    {label: 'Host', value: 'tab2'},
  ]}>

<TabItem value="tab1">

![Elevator Problem Client Final Example](/img/platform_3.1.gif)

_**Client** RTT = 200ms, `Own Player` = aligned, `Server NPC` = 200ms behind, `Other Player` = 200ms behind_\

</TabItem>

<TabItem value="tab2">

![Elevator Problem Host Final Example](/img/platform_3.2.gif)

_**Host** RTT = 200ms, `Own Player` = aligned, `Server NPC` = aligned, `Other Player` = aligned_
</TabItem>
</Tabs>
  




It might seem like predicting the platform only makes the situation worse because now on clients also the server controlled objects are delayed. But there is an important difference to the last model. On the Host all objects are perfectly aligned to the platform because they are in the same time space.

Using our knowledge we acquired from the last two approaches we can come to the conclusion that if we can manage to run a platform in the same time space as all objects on it, they will be displayed correctly. This means we should predict a platform if our player comes close to it but we don't want to predict a platform which is not close to our player and contains objects from other players.

The elevator problem is also present when running a game with server authority but only if prediction is involved. Without prediction, everything will run in `server time` which means `server time` can just be used to display everything perfectly aligned.

When predicting a player object everything it interacts with such as close platforms have to be predicted. If they don't get predicted, the player's prediction will often deviate from the server's prediction which will result in a correction rollback. In some special cases like strictly horizontally moving platforms movement can still work fine without predicting the platform.



# Network Time Struct

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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';