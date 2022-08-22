---
id: Unity.Networking.Transport.InboundSendBuffer
title: Unity.Networking.Transport.InboundSendBuffer
---


# Struct InboundSendBuffer


The inbound send buffer






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
public struct InboundSendBuffer
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

#### bufferWithHeaders


The buffer with headers






##### Declaration


``` lang-csharp
public byte *bufferWithHeaders
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### bufferWithHeadersLength


The buffer with headers length






##### Declaration


``` lang-csharp
public int bufferWithHeadersLength
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### headerPadding


The header padding






##### Declaration


``` lang-csharp
public int headerPadding
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### SetBufferFrombufferWithHeaders()


Sets the buffer frombuffer with headers






##### Declaration


``` lang-csharp
public void SetBufferFrombufferWithHeaders()
```





