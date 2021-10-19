---  
id: Unity.Netcode.INetworkSerializable  
title: Unity.Netcode.INetworkSerializable  
---

<div class="markdown level0 summary">

Interface for implementing custom serializable types.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public interface INetworkSerializable
```

## 

### NetworkSerialize\&lt;T&gt;(BufferSerializer\&lt;T&gt;)

<div class="markdown level1 summary">

Provides bi-directional serialization to read and write the desired data
to serialize this type.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void NetworkSerialize<T>(BufferSerializer<T> serializer)
    where T : IReaderWriter
```

#### Parameters

| Type                 | Name       | Description                                       |
|----------------------|------------|---------------------------------------------------|
| BufferSerializer\&lt;T&gt; | serializer | The serializer to use to read and write the data. |

#### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |
