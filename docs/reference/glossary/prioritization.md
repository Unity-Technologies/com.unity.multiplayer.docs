---
id: prioritization
title: Prioritization
sidebar_label: Prioritization
---


One of the major challenges of networked game development is bandwidth limitations. Prioritization is the process of ranking specific data in a way that balances frequent updates for objects which need to be most up-to-date, with less frequent but not starved updates for objects which can update less frequently.
- **Age (Staleness):**
  Objects or data which hasn’t been transmitted in a long time becomes higher-priority, until the next time it is transmitted, at which time its priority returns to a lower value.

- **Interaction:**
  Similar to interaction as it relates to Relevancy, objects which you have recently, or are about to interact with should typically be treated as higher priority to maintain more frequent updates/synchronization.

### QoS

Quality of service is the description or measurement of the overall performance of a service, such as a telephony or computer network or a cloud computing service, particularly the performance seen by the users of the network. Refers to any technology that manages data traffic to reduce packet loss, latency and jitter on the network. QoS controls and manages network resources by setting priorities for specific types of data on the network.