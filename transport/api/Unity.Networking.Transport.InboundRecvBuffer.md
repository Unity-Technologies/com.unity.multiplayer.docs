---
id: Unity.Networking.Transport.InboundRecvBuffer
title: Unity.Networking.Transport.InboundRecvBuffer
---


# Struct InboundRecvBuffer


The inbound recv buffer






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct InboundRecvBuffer
```



### Fields

#### buffer


The buffer






##### Declaration


``` lang-csharp
public byte *buffer
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### bufferLength


The buffer length






##### Declaration


``` lang-csharp
public int bufferLength
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Slice(Int32)


Slices the offset






##### Declaration


``` lang-csharp
public InboundRecvBuffer Slice(int offset)
```



##### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | offset | The offset  |

##### Returns

| Type              | Description |
|-------------------|-------------|
| InboundRecvBuffer | The slice   |



