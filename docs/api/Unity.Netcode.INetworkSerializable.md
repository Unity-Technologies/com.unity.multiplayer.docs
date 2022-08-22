---
id: Unity.Netcode.INetworkSerializable
title: Unity.Netcode.INetworkSerializable
---

# Interface INetworkSerializable


Interface for implementing custom serializable types.






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public interface INetworkSerializable
```



### Methods

#### NetworkSerialize\<T\>(BufferSerializer\<T\>)


Provides bi-directional serialization to read and write the desired data
to serialize this type.






##### Declaration


``` lang-csharp
void NetworkSerialize<T>(BufferSerializer<T> serializer)
    where T : IReaderWriter
```



##### Parameters

| Type                  | Name       | Description                                       |
|-----------------------|------------|---------------------------------------------------|
| BufferSerializer\<T\> | serializer | The serializer to use to read and write the data. |

##### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |



