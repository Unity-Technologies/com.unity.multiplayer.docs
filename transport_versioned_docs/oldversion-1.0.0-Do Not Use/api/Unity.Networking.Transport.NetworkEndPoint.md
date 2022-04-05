---  
id: Unity.Networking.Transport.NetworkEndPoint  
title: Unity.Networking.Transport.NetworkEndPoint  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

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
public struct NetworkEndPoint
```

## 

### Address

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly string Address { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### AnyIpv4

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static readonly NetworkEndPoint AnyIpv4 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### AnyIpv6

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static readonly NetworkEndPoint AnyIpv6 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### Family

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkFamily Family { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkFamily |             |

### IsAny

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsAny { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsLoopback

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsLoopback { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

### Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Length { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### LoopbackIpv4

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static readonly NetworkEndPoint LoopbackIpv4 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### LoopbackIpv6

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static readonly NetworkEndPoint LoopbackIpv6 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### Port

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort Port { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### RawPort

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort RawPort { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

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

### GetRawAddressBytes()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NativeArray<byte> GetRawAddressBytes()
```

#### Returns

| Type                       | Description |
|----------------------------|-------------|
| NativeArray\&lt;System.Byte&gt; |             |

### Parse(String, UInt16, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkEndPoint Parse(string address, ushort port, NetworkFamily family = NetworkFamily.Ipv4)
```

#### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | address |             |
| System.UInt16 | port    |             |
| NetworkFamily | family  |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### SetRawAddressBytes(NativeArray\&lt;Byte&gt;, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void SetRawAddressBytes(NativeArray<byte> bytes, NetworkFamily family = NetworkFamily.Ipv4)
```

#### Parameters

| Type                       | Name   | Description |
|----------------------------|--------|-------------|
| NativeArray\&lt;System.Byte&gt; | bytes  |             |
| NetworkFamily              | family |             |

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

### TryParse(String, UInt16, out NetworkEndPoint, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool TryParse(string address, ushort port, out NetworkEndPoint endpoint, NetworkFamily family = NetworkFamily.Ipv4)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| System.String   | address  |             |
| System.UInt16   | port     |             |
| NetworkEndPoint | endpoint |             |
| NetworkFamily   | family   |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WithPort(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint WithPort(ushort port)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt16 | port |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

## 

### Equality(NetworkEndPoint, NetworkEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(NetworkEndPoint lhs, NetworkEndPoint rhs)
```

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | lhs  |             |
| NetworkEndPoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(NetworkEndPoint, NetworkEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(NetworkEndPoint lhs, NetworkEndPoint rhs)
```

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | lhs  |             |
| NetworkEndPoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
