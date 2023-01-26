---
id: prioritization
title: Prioritization
---

One of the major challenges of networked game development is bandwidth limitations. Prioritization is the process of ranking specific data in a way that balances frequent updates for objects which need to be most up-to-date, with less frequent but not starved updates for objects which can update less frequently.

## Age (Staleness)

Objects or data which hasn’t been transmitted in a long time becomes higher-priority, until the next time it is transmitted, at which time its priority returns to a lower value.

## Interaction

Similar to interaction as it relates to Relevancy, objects which you have recently, or are about to interact with should typically be treated as higher priority to maintain more frequent updates/synchronization.

Many things can happen to packets as they travel from origin to destination, resulting in the following problems as seen from the point of view of the sender and receiver:

## Goodput

Due to varying load from disparate users sharing the same network resources, the maximum throughput that can be provided to a certain data stream may be too low for real-time multimedia services.

## Packet loss

The network may fail to deliver (drop) some packets due to network congestion. The receiving application may ask for this information to be retransmitted, possibly resulting in congestive collapse or unacceptable delays in the overall transmission.

## Errors

Sometimes packets are corrupted due to bit errors caused by noise and interference, especially in wireless communications and long copper wires. The receiver has to detect this, and, just as if the packet was dropped, may ask for this information to be retransmitted.

## Latency

See [latency](../learn/../../learn/lagandpacketloss.md#latency) for more information.

## Packet delay variation

Packets from the source will reach the destination with different delays. A packet's delay varies with its position in the queues of the routers along the path between source and destination, and this position can vary unpredictably. Delay variation can be absorbed at the receiver, but in so doing increases the overall latency for the stream.

## Out-of-order delivery

When a collection of related packets is routed through a network, different packets may take different routes, each resulting in a different delay. The result is that the packets arrive in a different order than they were sent. This problem requires special additional protocols for rearranging out-of-order packets. The reordering process requires additional buffering at the receiver, and, as with packet delay variation, increases the overall latency for the stream.