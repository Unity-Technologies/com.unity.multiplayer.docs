---
id: backward-compatibility
title: Backward Compatibility
sidebar_label: Backward Compatibility
---


This API change is not backward compatible but as we will be using existing `XXXRpcSendParams` and `XXXRpcReceiveParams` for future additions, future iterations of this API should  be backward compatible .

 One of the main goals with this RPC API is also making it as future-proof as possible and prevent from continuous API breaking changes.

:::note
Framework registers RPC methods statically by their deterministic method signature hash which means as long as method signature stays the same, backward-compatibility will be possible but if [method signature](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods#method-signatures) changes, then the same method with the same name under the same namespace and type will not be compatible with its predecessor.
:::