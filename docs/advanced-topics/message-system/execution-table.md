---
id: execution-table
title: Execution Table
---

The following table details the execution of `ServerRpc` and `ClientRpc` functions:

| Function | Server | Client | Host (Server+Client) |
|---|:---:|:---:|:---:|
| ServerRpc Send | <i class="fp-x"></i> | <i class="fp-check"></i> | <i class="fp-check"></i> |
| ServerRpc Execute | <i class="fp-check"></i> | <i class="fp-x"></i> | <i class="fp-check"></i> |
| ClientRpc Send | <i class="fp-check"></i> | <i class="fp-x"></i> | <i class="fp-check"></i> |
| ClientRpc Execute | <i class="fp-x"></i> | <i class="fp-check"></i> | <i class="fp-check"></i> |

An RPC function **never** executes its body immediately since the function call really is a stand-in for a network transmission. Even a `ServerRpc` called by a host (an instance that is a client and the server at the same time, or listen-server) will not be executed immediately. It will instead follow the regular network frame staging first and queued-up to be executed locally in the next network frame.

Structure of a typical `ServerRpc`:

```csharp
[ServerRpc]
void MyServerRpc(int somenumber, string somestring)
{
    // Network Send Block (framework-code)
    // Network Return Block (framework-code)
    // RPC Method Body (user-code)
}
```

Pseudo-code sample of a `ServerRpc`:

```csharp
[ServerRpc]
void MyServerRpc(int somenumber, string somestring)
{
    // --- begin: injected framework-code
    if (NetworkSend())
    {
        // this block will be executed if:
        //   - called from user-code on client
        //   - called from user-code on host

        var writer = NetworkCreateWriter();
        writer.WriteInt32(1234567890); // RPC method signature hash
        writer.WriteInt32(somenumber);
        writer.WriteChars(somestring);
        NetworkSendRpc(writer);
    }

    if (NetworkReturn())
    {
        // this block will be executed if:
        //   - called from user-code
        //   - called from framework-code on client

        return;
    }
    // --- end: injected framework-code

    print($"MyServerRpc: {somenumber}");
}
```
