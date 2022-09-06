---
id: Unity.Networking.Transport.NetworkInterfaceEndPoint
title: Unity.Networking.Transport.NetworkInterfaceEndPoint
---


# Struct NetworkInterfaceEndPoint







##### Implements



System.IEquatable\<NetworkInterfaceEndPoint\>






##### Inherited Members



System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkInterfaceEndPoint : IEquatable<NetworkInterfaceEndPoint>
```



### Fields

#### data


Raw representation of the interface endpoint.






##### Declaration


``` lang-csharp
public byte *data
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### dataLength


Actual length of the interface endpoint's raw representation.






##### Declaration


``` lang-csharp
public int dataLength
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### k_MaxLength


Maximum length of the interface endpoint's raw representation.






##### Declaration


``` lang-csharp
public const int k_MaxLength = 56
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Properties

#### IsValid


Whether the interface endpoint is valid or not.






##### Declaration


``` lang-csharp
public readonly bool IsValid { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

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



#### Equals(NetworkInterfaceEndPoint)







##### Declaration


``` lang-csharp
public bool Equals(NetworkInterfaceEndPoint other)
```



##### Parameters

| Type                     | Name  | Description |
|--------------------------|-------|-------------|
| NetworkInterfaceEndPoint | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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



#### ToFixedString()


Returns the NetworkInterfaceEndPoint as a .






##### Declaration


``` lang-csharp
public FixedString64Bytes ToFixedString()
```



##### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString64Bytes |             |

#### ToString()







##### Declaration


``` lang-csharp
public override string ToString()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

##### Overrides



System.ValueType.ToString()



### Operators

#### Equality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)







##### Declaration


``` lang-csharp
public static bool operator ==(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)
```



##### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)







##### Declaration


``` lang-csharp
public static bool operator !=(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)
```



##### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



System.IEquatable\<T\>





