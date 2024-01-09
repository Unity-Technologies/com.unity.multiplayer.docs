---
id: deprecation-of-return-values
title: Deprecation of Return Values
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

Netcode for GameObjects (NGO) used to support RPC return values on convenience RPCs.

Example:

```csharp
public IEnumerator MyRpcCoroutine()
{
    RpcResponse<float> response = InvokeServerRpc(MyRpcWithReturnValue, Random.Range(0f, 100f), Random.Range(0f, 100f));

    while (!response.IsDone)
    {
        yield return null;
    }

    Debug.LogFormat("The final result was {0}!", response.Value);
}

[ServerRPC]
public float MyRpcWithReturnValue(float x, float y)
{
    return x * y;
}

```

NGO no longer supports this feature, but the same functionality can be achieved using a combination of both ServerRpc and ClientRpc methods as it is demonstrated below:

```csharp
void MyRpcInvoker()
{
    MyRpcWithReturnValueRequestServerRpc(Random.Range(0f, 100f)), Random.Range(0f, 100f)));
}

[Rpc(SendTo.Server)]
void MyRpcWithReturnValueRequestServerRpc(float x, float y)
{
    MyRpcWithReturnValueResponseClientRpc(x * y);
}

[Rpc(SendTo.ClientsAndHost)]
void MyRpcWithReturnValueResponseClientRpc(float result)
{
    Debug.LogFormat("The final result was {0}!", result);
}
```