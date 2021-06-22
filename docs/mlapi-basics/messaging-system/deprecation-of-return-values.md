---
id: deprecation-of-return-values
title: Deprecation of Return Values
sidebar_label: Deprecation of Return Values

---

MLAPI supports RPC return values on convenience RPCs.

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

This RFC also drops this feature and similar functionality can be achived as following:

```csharp
void MyRpcInvoker()
{
    MyRpcWithReturnValueRequestServerRpc(Random.Range(0f, 100f)), Random.Range(0f, 100f)));
}

[ServerRpc]
void MyRpcWithReturnValueRequestServerRpc(float x, float y)
{
    MyRpcWithReturnValueResponseClientRpc(x * y);
}

[ClientRpc]
void MyRpcWithReturnValueResponseClientRpc(float result)
{
    Debug.LogFormat("The final result was {0}!", result);
}
```