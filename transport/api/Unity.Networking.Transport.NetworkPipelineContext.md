---
id: Unity.Networking.Transport.NetworkPipelineContext
title: Unity.Networking.Transport.NetworkPipelineContext
---


# Struct NetworkPipelineContext


The network pipeline context






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
public struct NetworkPipelineContext
```



### Fields

#### accumulatedHeaderCapacity


The accumulated header capacity






##### Declaration


``` lang-csharp
public int accumulatedHeaderCapacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### header


The header






##### Declaration


``` lang-csharp
public DataStreamWriter header
```



##### Field Value

| Type             | Description |
|------------------|-------------|
| DataStreamWriter |             |

#### internalProcessBuffer


The internal process buffer






##### Declaration


``` lang-csharp
public byte *internalProcessBuffer
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### internalProcessBufferLength


The internal process buffer length






##### Declaration


``` lang-csharp
public int internalProcessBufferLength
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### internalSharedProcessBuffer


The internal shared process buffer






##### Declaration


``` lang-csharp
public byte *internalSharedProcessBuffer
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### internalSharedProcessBufferLength


The internal shared process buffer length






##### Declaration


``` lang-csharp
public int internalSharedProcessBufferLength
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### staticInstanceBuffer


The static instance buffer






##### Declaration


``` lang-csharp
public byte *staticInstanceBuffer
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### staticInstanceBufferLength


The static instance buffer length






##### Declaration


``` lang-csharp
public int staticInstanceBufferLength
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### timestamp


The timestamp






##### Declaration


``` lang-csharp
public long timestamp
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |



