---
id: backward-compatibility
title: Backward Compatibility
sidebar_label: Backward Compatibility
---


This API change is not backward compatible but future iterations over this API will be backward compatible most of the time as we will be using existing `XXXRpcSendParams` and `XXXRpcReceiveParams` for future additions. One of the main goals with this RPC API is also making it as future-proof as possible and prevent from continuous API breaking changes.

Framework registers RPC methods statically by their deterministic method signature hash which means as long as method signature stays the same, backward-compatibility will be possible but if [method signature](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods#method-signatures) changes, same method with the same name under same namespace and type will not be compatible with its predecessor.