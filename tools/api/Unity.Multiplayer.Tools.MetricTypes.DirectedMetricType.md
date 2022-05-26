---
id: Unity.Multiplayer.Tools.MetricTypes.DirectedMetricType
title: Unity.Multiplayer.Tools.MetricTypes.DirectedMetricType
---

<div class="markdown level0 summary">

The built in set of metrics that can be displayed in the multiplayer
tools, such as the Network Profiler and the Runtime Net Stats Monitor.

</div>

##### Syntax

<div class="codewrapper">

``` lang-csharp
public enum DirectedMetricType
```

</div>

### Fields

Name

Description

Connections

Number of active network connections. A client will always show one
active connection (client to server).

NamedMessageReceived

Number of custom named message received.

NamedMessageSent

Number of custom named message sent.

NetworkMessageReceived

Number of network message received.

NetworkMessageSent

Number of network message sent.

NetworkObjects

Number of active Network Objects.

NetworkVariableDeltaReceived

Number of network variable delta message received.

NetworkVariableDeltaSent

Number of network variable delta message sent.

ObjectDestroyedReceived

Number of network object destroyed message received.

ObjectDestroyedSent

Number of network object destroyed message sent.

ObjectSpawnedReceived

Number of network object spawned message received.

ObjectSpawnedSent

Number of network object spawned message sent.

OwnershipChangeReceived

Number of ownership change message received.

OwnershipChangeSent

Number of ownership change message sent.

PacketLoss

Percentage of packet loss over the lifetime of the connection. This is
only valid for clients. This value will always be zero on a server.

PacketsReceived

Number of packets received.

PacketsSent

Number of packets sent.

RpcReceived

Number of RPC received.

RpcSent

Number of RPC sent.

RttToServer

The RTT from a client to a server. This include the processing time at
the transport level but does not contain the processing time spent
inside the Netcode for GameObjects.

SceneEventReceived

Number of scene event message received.

SceneEventSent

Number of scene event message sent.

ServerLogReceived

Number of server log message received.

ServerLogSent

Number of server log message sent.

TotalBytesReceived

Number of total bytes received.

TotalBytesSent

Number of total bytes sent.

UnnamedMessageReceived

Number of custom unnamed message received.

UnnamedMessageSent

Number of custom unnamed message sent.