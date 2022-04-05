---  
id: Unity.Networking.Transport.NetworkInterfaceEndPoint  
title: Unity.Networking.Transport.NetworkInterfaceEndPoint  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<NetworkInterfaceEndPoint\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkInterfaceEndPoint : IEquatable<NetworkInterfaceEndPoint>
```

## 

### data

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *data
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### dataLength

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int dataLength
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### k_MaxLength

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int k_MaxLength = 56
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### IsValid

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsValid { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object other)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkInterfaceEndPoint other)
```

#### Parameters

| Type                     | Name  | Description |
|--------------------------|-------|-------------|
| NetworkInterfaceEndPoint | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override int GetHashCode()
```

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Overrides

<div>

System.ValueType.GetHashCode()

</div>

### ToFixedString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public FixedString64Bytes ToFixedString()
```

#### Returns

| Type               | Description |
|--------------------|-------------|
| FixedString64Bytes |             |

### ToString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override string ToString()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Overrides

<div>

System.ValueType.ToString()

</div>

## 

### Equality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)
```

#### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)
```

#### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable\&lt;T&gt;

</div>
