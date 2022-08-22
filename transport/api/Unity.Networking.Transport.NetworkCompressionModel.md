---
id: Unity.Networking.Transport.NetworkCompressionModel
title: Unity.Networking.Transport.NetworkCompressionModel
---


# Struct NetworkCompressionModel


Used to provide Huffman compression when using packed DataStream
functions






##### Implements



System.IDisposable






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
public struct NetworkCompressionModel : IDisposable
```



### Constructors

#### NetworkCompressionModel(Allocator)


Initializes a new instance of the NetworkCompressionModel class






##### Declaration


``` lang-csharp
public NetworkCompressionModel(Allocator allocator)
```



##### Parameters

| Type      | Name      | Description   |
|-----------|-----------|---------------|
| Allocator | allocator | The allocator |

### Methods

#### CalculateBucket(UInt32)


Calculates the bucket using the specified value






##### Declaration


``` lang-csharp
public int CalculateBucket(uint value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

##### Returns

| Type         | Description      |
|--------------|------------------|
| System.Int32 | The bucket index |

#### Dispose()


Disposes this instance






##### Declaration


``` lang-csharp
public void Dispose()
```



### Implements



System.IDisposable





