---
id: Unity.Networking.Transport.Relay.RelayAllocationId
title: Unity.Networking.Transport.Relay.RelayAllocationId
---


# Struct RelayAllocationId


Allocation Id is a unique identifier for a connected client/host to a
Relay server. This identifier is used by the Relay protocol as the
address of the client.






##### Implements



System.IEquatable\<RelayAllocationId\>





System.IComparable\<RelayAllocationId\>






##### Inherited Members



System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport.Relay

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct RelayAllocationId : IEquatable<RelayAllocationId>, IComparable<RelayAllocationId>
```



### Fields

#### k_Length


The length in bytes of the Allocation Id.






##### Declaration


``` lang-csharp
public const int k_Length = 16
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Value


The raw data of the Allocation Id.






##### Declaration


``` lang-csharp
public byte *Value
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### Methods

#### CompareTo(RelayAllocationId)







##### Declaration


``` lang-csharp
public int CompareTo(RelayAllocationId other)
```



##### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| RelayAllocationId | other |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Equals(Object)







##### Declaration


``` lang-csharp
public override bool Equals(object other)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides



System.ValueType.Equals(System.Object)



#### Equals(RelayAllocationId)







##### Declaration


``` lang-csharp
public bool Equals(RelayAllocationId other)
```



##### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| RelayAllocationId | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### FromBytePointer(Byte\*, Int32)


Converts a byte pointer to a RelayAllocationId.






##### Declaration


``` lang-csharp
public static RelayAllocationId FromBytePointer(byte *dataPtr, int length)
```



##### Parameters

| Type          | Name    | Description                                   |
|---------------|---------|-----------------------------------------------|
| System.Byte\* | dataPtr | The pointer to the data of the Allocation Id. |
| System.Int32  | length  | The length of the data.                       |

##### Returns

| Type              | Description                                                     |
|-------------------|-----------------------------------------------------------------|
| RelayAllocationId | Returns a RelayAllocationId constructed from the provided data. |

##### Exceptions

| Type                     | Condition                                                                   |
|--------------------------|-----------------------------------------------------------------------------|
| System.ArgumentException | Provided byte array length is invalid, must be {k_Length} but got {length}. |

#### GetHashCode()







##### Declaration


``` lang-csharp
public override int GetHashCode()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Overrides



System.ValueType.GetHashCode()



### Operators

#### Equality(RelayAllocationId, RelayAllocationId)







##### Declaration


``` lang-csharp
public static bool operator ==(RelayAllocationId lhs, RelayAllocationId rhs)
```



##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| RelayAllocationId | lhs  |             |
| RelayAllocationId | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(RelayAllocationId, RelayAllocationId)







##### Declaration


``` lang-csharp
public static bool operator !=(RelayAllocationId lhs, RelayAllocationId rhs)
```



##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| RelayAllocationId | lhs  |             |
| RelayAllocationId | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



System.IEquatable\<T\>





System.IComparable\<T\>





