---
id: networkvariable
title: NetworkVariable
sidebar_label: NetworkVariable
---
At a high level, a `NetworkVariable` is a variable with its value tracked by the Netcode SDK. Its values are replicated to other clients connected to the server regularly. When a client connects initially to a host, all relevant `NetworkVariable` latest values "state" will be replicated to that new client. Your state gets updated at regular intervals.

`NetworkVariable` can be referenced in this doc as "state" or as "NetVar" or as "replicated variable".

If you change your variable's value on your side, others will eventually see the latest value on their side.

The data can be custom containers and complex structures such as inventory structs.

By default, Netcode comes with two different containers. `NetworkList` and `NetworkVariable`. The `NetworkVariable` container is built to store simple `unmanaged` data types such as `float`s and `int`s. The List implementation is a wrapper around the .NET equivalent. It is event-driven and has a list of events to be synced. The default implementations come with flexibility in terms of settings. Containers can be setup to sync client-to-server, server-to-client, or bi-directional. It can also be set to target specific clients using custom delegates.

Since the `NetworkVariable` container is a wrapper container around the stored value, the value has be accessed using the `.Value` property.

:::warning Disclaimer
The `NetworkVariable` and `NetworkList` and implementations are **primarily** designed as samples showing how to create `NetworkVariableBase` structures. The `NetworkVariable<T>` container is however considered production ready for simple `unmanaged` types.
:::

:::note
You must remember to add the `NetworkObject` component to the `GameObject` to which your script belongs.
:::

To create your own `NetworkVariable` container, simply create a class deriving from `NetworkVariableBase` and declare it as a field of a `NetworkBehaviour`. To learn how to write your own containers for more complex structures, see the `NetworkVariable<T>` implementation. To learn how to do custom delta encoding on complex structures. See the `NetworkList` implementations.

## OnValueChanged

When the value of a `NetworkVariable<T>` changes, `OnValueChanged` callback gets invoked with previous and the new value. This would give us a chance to react to value changes without continuously polling its latest value.

```csharp
public class Door : NetworkBehaviour
{
    public NetworkVariable<bool> State = new NetworkVariable<bool>();

    public override void OnNetworkSpawn()
    {
        State.OnValueChanged += OnStateChanged;
    }

    public override void OnNetworkDespawn()
    {
        State.OnValueChanged -= OnStateChanged;
    }

    public void OnStateChanged(bool previous, bool current)
    {
        // note: `State.Value` will be equal to `current` here
        if (State.Value)
        {
            // door is open:
            //  - rotate door transform
            //  - play animations, sound etc.
        }
        else
        {
            // door is closed:
            //  - rotate door transform
            //  - play animations, sound etc.
        }
    }

    [ServerRpc(RequireOwnership = false)]
    public void ToggleServerRpc()
    {
        // this will cause a replication over the network
        // and ultimately invoke `OnValueChanged` on receivers
        State.Value = !State.Value;
    }
}
```

## Permissions

By default, a `NetworkVariable<T>` can be written by the server only and read by everyone. However, these permissions can be changed via the constructor to allow other use cases.

```csharp
// A snippet from the Netcode SDK

public abstract class NetworkVariableBase
{
    // ...

    public const NetworkVariableReadPermission DefaultReadPerm =
        NetworkVariableReadPermission.Everyone;

    public const NetworkVariableWritePermission DefaultWritePerm =
        NetworkVariableWritePermission.Server;

    // ...
}

public class NetworkVariable<T> : NetworkVariableBase
{
    // ...

    public NetworkVariable(T value = default,
        NetworkVariableReadPermission readPerm = DefaultReadPerm,
        NetworkVariableWritePermission writePerm = DefaultWritePerm)
    {
        // ...
    }

    // ...
}
```

### Read

```csharp
public enum NetworkVariableReadPermission
{
    Everyone,
    Owner
}
```

- `Everyone` → All clients and server will get value updates.
- `Owner` → Only server and [the owner client](networkobject.md#ownership) will get value updates.

### Write

```csharp
public enum NetworkVariableWritePermission
{
    Server,
    Owner
}
```

- `Server` → Only the server can write to the value.
- `Owner` → Only [the owner client](networkobject.md#ownership) can write to the value, server **can't** write to the value.

## Example: Putting it all together!

I want owner to move the cube but server to color it!

So, we're going to have 2 netvars: one server-writable and another owner-writable one.

```csharp
public class Cube : NetworkBehaviour
{
    // everyone can read, only owner can write
    public NetworkVariable<Vector3> NetPosition = new NetworkVariable<Vector3>(
        default,
        NetworkVariableBase.DefaultReadPerm, // Everyone
        NetworkVariableWritePermission.Owner);

    private void FixedUpdate()
    {
        // owner writes, others read & apply
        if (IsOwner)
        {
            NetPosition.Value = transform.position;
        }
        else
        {
            transform.position = NetPosition.Value;
        }
    }

    // everyone can read, only server can write
    public NetworkVariable<Color> NetColor = new NetworkVariable<Color>(
        default,
        NetworkVariableBase.DefaultReadPerm, // Everyone
        NetworkVariableWritePermission.Server);

    public override void OnNetworkSpawn()
    {
        NetColor.OnValueChanged += OnColorChanged;
    }

    public override void OnNetworkDespawn()
    {
        NetColor.OnValueChanged -= OnColorChanged;
    }

    public void OnColorChanged(Color previous, Color current)
    {
        // update materials etc.
    }

    [ServerRpc(RequireOwnership = false)]
    public void ChangeColorServerRpc()
    {
        NetColor.Value = Random.ColorHSV();
    }
}
```
