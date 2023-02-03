---
id: Unity.Netcode.INetworkSerializable
title: Unity.Netcode.INetworkSerializable
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:57 pm
---

<div class="markdown level0 summary">

Interface for implementing custom serializable types.

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public interface INetworkSerializable
```

## Methods

### NetworkSerialize\<T\>(BufferSerializer\<T\>)

<div class="markdown level1 summary">

Provides bi-directional serialization to read and write the desired data to serialize this type.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void NetworkSerialize<T>(BufferSerializer<T> serializer)

    where T : IReaderWriter
```

#### Parameters

| Type                  | Name       | Description                                       |
|-----------------------|------------|---------------------------------------------------|
| BufferSerializer\<T\> | serializer | The serializer to use to read and write the data. |

#### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |
