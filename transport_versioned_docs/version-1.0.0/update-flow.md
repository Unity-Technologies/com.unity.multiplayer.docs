---
id: update
title: Understand the Update flow
---

Call the driver's `ScheduleUpdate` method on every frame. This allows you to update the state of each connection you have active to read all data that you received, and finally produce events that the user can react to using `PopEvent` and `PopEventForConnection`.

The `Update` loop of the driver is simple, and may look daunting at first glance. If you strip out all of the job system dependencies, you will see the following:

![FlowchartUpdate](/img/transport/com.unity.transport.driver.png)

* Start by calling `InternalUpdate`, this call is where you clean up any stale connections, clear buffers, and finally check timeouts on connections.
* The chain is running the `ReceiveJob` for reading and parsing the data from the socket.
* Finally for each new message you receive on the socket, call a `AppendPacket` function that parses each packet received and either creates an event for it or discards it.

Update completes. You just clean up, populate buffers, and push new events. You could almost view the `NetworkDriver` as a Control System for the State Machine handling 
`NetworkConnection`.

