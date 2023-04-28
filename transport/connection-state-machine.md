---
id: connection-state
title: Understand the Connection State Machine
---

It's important to understand how transitions occur in the connection state machine and the subtle differences between `Connecting` to another host and `Listening` for incoming connections. This way, you can make informed decisions based on what triggered each state. The following illustration shows the `NetworkConnection` state machine.

![ConnectionState](/img/transport/com.unity.transport.connection.png)

All connections start in the `Disconnected` state.

Depending the state of the `NetworkDriver`, Unity Transport might trigger the `Listening (Passive)` state. While in the `Listening (Passive)` state, the `NetworkDriver` acts like a server listening for incoming connections and data requests.

You can also use the `NetworkDriver` to connect to a remote endpoint, then invoke another flow of the state machine.

There are two standard scenarios:

1. Listen for incoming connections.
2. Use and outgoing connection to connect to someone else.

In the [client/server workflow](workflow-client-server.md), use the `ServerBehaviour` to `Listen` and the `ClientBehaviour` to `Connect`.
