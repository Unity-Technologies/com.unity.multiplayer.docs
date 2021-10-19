---  
id: Unity.Networking.Transport.SessionIdToken  
title: Unity.Networking.Transport.SessionIdToken  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<SessionIdToken\>

</div>

<div>

System.IComparable\<SessionIdToken\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.ToString()

</div>

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
public struct SessionIdToken : IEquatable<SessionIdToken>, IComparable<SessionIdToken>
```

## 

### k_Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int k_Length = 8
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Value

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *Value
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

## 

### CompareTo(SessionIdToken)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CompareTo(SessionIdToken other)
```

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| SessionIdToken | other |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

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

### Equals(SessionIdToken)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(SessionIdToken other)
```

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| SessionIdToken | other |             |

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

## 

### Equality(SessionIdToken, SessionIdToken)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(SessionIdToken lhs, SessionIdToken rhs)
```

#### Parameters

| Type           | Name | Description |
|----------------|------|-------------|
| SessionIdToken | lhs  |             |
| SessionIdToken | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(SessionIdToken, SessionIdToken)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(SessionIdToken lhs, SessionIdToken rhs)
```

#### Parameters

| Type           | Name | Description |
|----------------|------|-------------|
| SessionIdToken | lhs  |             |
| SessionIdToken | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable\&lt;T&gt; 

</div>

<div>

System.IComparable\&lt;T&gt; 

</div>
