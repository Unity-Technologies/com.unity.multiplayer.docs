---  
id: Unity.Networking.Transport.NetworkEndpoint  
title: Unity.Networking.Transport.NetworkEndpoint  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<NetworkEndpoint\>

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
public struct NetworkEndpoint : IEquatable<NetworkEndpoint>
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
public static readonly NetworkEndpoint AnyIpv4 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

### AnyIpv6

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static readonly NetworkEndpoint AnyIpv6 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

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
public static readonly NetworkEndpoint LoopbackIpv4 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

### LoopbackIpv6

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static readonly NetworkEndpoint LoopbackIpv6 { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

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

### Equals(NetworkEndpoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkEndpoint other)
```

#### Parameters

| Type            | Name  | Description |
|-----------------|-------|-------------|
| NetworkEndpoint | other |             |

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
| NativeArray\<System.Byte\> |             |

### Parse(String, UInt16, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkEndpoint Parse(string address, ushort port, NetworkFamily family = NetworkFamily.Ipv4)
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
| NetworkEndpoint |             |

### SetRawAddressBytes(NativeArray\<Byte>, NetworkFamily)

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
| NativeArray\<System.Byte\> | bytes  |             |
| NetworkFamily              | family |             |

### ToFixedString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public FixedString128Bytes ToFixedString()
```

#### Returns

| Type                | Description |
|---------------------|-------------|
| FixedString128Bytes |             |

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

### TryParse(String, UInt16, out NetworkEndpoint, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool TryParse(string address, ushort port, out NetworkEndpoint endpoint, NetworkFamily family = NetworkFamily.Ipv4)
```

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| System.String   | address  |             |
| System.UInt16   | port     |             |
| NetworkEndpoint | endpoint |             |
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
public NetworkEndpoint WithPort(ushort port)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.UInt16 | port |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

## 

### Equality(NetworkEndpoint, NetworkEndpoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(NetworkEndpoint lhs, NetworkEndpoint rhs)
```

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndpoint | lhs  |             |
| NetworkEndpoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(NetworkEndpoint, NetworkEndpoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(NetworkEndpoint lhs, NetworkEndpoint rhs)
```

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndpoint | lhs  |             |
| NetworkEndpoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable\<T>

</div>
