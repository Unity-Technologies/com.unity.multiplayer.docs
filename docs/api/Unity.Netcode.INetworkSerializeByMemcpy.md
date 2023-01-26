---
id: Unity.Netcode.INetworkSerializeByMemcpy
title: Unity.Netcode.INetworkSerializeByMemcpy
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:34:59 pm
---

<div class="markdown level0 summary">

This interface is a "tag" that can be applied to a struct to mark that struct as being serializable by memcpy. It's up to the developer of the struct to analyze the struct's contents and ensure it is actually serializable by memcpy. This requires all of the members of the struct to be `unmanaged` Plain-Old-Data values - if your struct contains a pointer (or a type that contains a pointer, like `NativeList&lt;T>`), it should be serialized via `INetworkSerializable` or via `FastBufferReader`/`FastBufferWriter` extension methods.

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public interface INetworkSerializeByMemcpy
```
