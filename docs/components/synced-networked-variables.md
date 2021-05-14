---
id: syncednetworkedvar
title: Synced Networked Variables
description: An explanation of the new network time system that replaces the old NetworkTime. This system will form the foundation for building other systems such as snapshoots, commands and p[redictions
---

In a client-server topology, any client and the server can modify `NetworkedVariables`. The server receives the clients' changes and send them back to all of the clients. In order to retain generality, we assume that any variable can be modified by anyone and that the server can also modify the variable as they are received and sent. For example, we could have server-driven physics over client-driven character movement.

The `NetworkedVariable` interpolation algorithm is easily customizable enabling the user to chose whether it supports client or server side authoritative mechanics. To account for this, each NetworkedVaraible  keeps track of the following:

- When it was modified by a given client.
- When the server updated or transmitted it.

This enables better client-side interpolation, lag compensation, and provides the required flexibility for future systems (i.e. like snapshotting). It also provides enough information such that the client can distinguish between its own updates from that of server-side adjustments (i.e. like physics). It has the qadded benifit of keeping the overall bandwidth usage in check, preventing frequent updates for `NetworkedVariable`s.


## Serializing Ticks

Ticks are stored as `int` instead of `ushort`. This allows us to to theoretically run a server for a long period while keeping time accurate. The negative range of `int` is reserved to describe invalid tick values.

<!-- NetworkTickWrapping as described in RFC-12 will be removed. To save bandwidth when sending ticks future features like the snapshot system will provide a way to delta compress tick values inside a snapshot packet against the header tick of the snapshot.
-->

### NetworkVariable Writes

Writing `NetworkVariable`s always happens in `PredictedTime` while receiving `NetworkVariable`s happens in `ServerTime`.

`INetworkVariable` will expose a `LastModifiedTick` value.

```csharp
int LastModifiedTick { get; }
```

The setter of `NetworkVariable` will set `LastModifiedTick` to predicted tick:
```csharp
/// <summary>
/// The value of the NetworkVariable container
/// </summary>
public T Value
{
    get => m_InternalValue;
    set
    {
        if (EqualityComparer<T>.Default.Equals(m_InternalValue, value))
        {
            return;
        }
        
        LastModifiedTick = NetworkManager.Singleton.PredictedTime.Tick;

        m_IsDirty = true;
        T previousValue = m_InternalValue;
        m_InternalValue = value;
        OnValueChanged?.Invoke(previousValue, m_InternalValue);
    }
}
```

When serializing a `NetworkVariable` the `LastModifiedTick` will be included.

<!--- 
This change does not yet introduce any changes to how `NetworkVariables` work. This is base infrastructure which will later be used by the snapshot system.

In the future we might introduce buffering for client `NetworkVariable` writes. The server will buffer incoming `NetworkVariable` changes until  `PredictedTick` matches the `LastModifiedTick` in the packet.

-->
