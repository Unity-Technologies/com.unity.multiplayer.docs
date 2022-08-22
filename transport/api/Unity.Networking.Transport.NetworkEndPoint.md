---
id: Unity.Networking.Transport.NetworkEndPoint
title: Unity.Networking.Transport.NetworkEndPoint
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Struct NetworkEndPoint

<div class="markdown level0 summary">

Describes a raw network endpoint (typically IP and port number).

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkEndPoint
```

</div>

### Properties

#### Address

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly string Address { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### AnyIpv4

<div class="markdown level1 summary">

Gets an IPv4 endpoint that can be used to bind to any address available
(0.0.0.0:0).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static readonly NetworkEndPoint AnyIpv4 { get; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### AnyIpv6

<div class="markdown level1 summary">

Gets an IPv6 endpoint that can be used to bind to any address available
(\[::0\]:0).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static readonly NetworkEndPoint AnyIpv6 { get; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### Family

<div class="markdown level1 summary">

Gets or sets NetworkFamily of the endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkFamily Family { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkFamily |             |

#### IsAny

<div class="markdown level1 summary">

Whether the endpoint is using an "any" address.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsAny { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLoopback

<div class="markdown level1 summary">

Whether the endpoint is using a loopback address.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsLoopback { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsValid

<div class="markdown level1 summary">

Whether the endpoint is valid or not.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsValid { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length

<div class="markdown level1 summary">

Returns the length of the raw network endpoint in bytes.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int Length { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### LoopbackIpv4

<div class="markdown level1 summary">

Gets an IPv4 loopback endpoint (127.0.0.1:0).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static readonly NetworkEndPoint LoopbackIpv4 { get; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### LoopbackIpv6

<div class="markdown level1 summary">

Gets an IPv6 loopback endpoint (\[::1\]:0).

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static readonly NetworkEndPoint LoopbackIpv6 { get; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### Port

<div class="markdown level1 summary">

Gets or sets port number of the endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ushort Port { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### RawPort

<div class="markdown level1 summary">

Gets or sets the value of the raw port number.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ushort RawPort { get; set; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Methods

#### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool Equals(object other)
```

</div>

##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

#### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override int GetHashCode()
```

</div>

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Overrides

<div>

System.ValueType.GetHashCode()

</div>

#### GetRawAddressBytes()

<div class="markdown level1 summary">

Gets the raw bytes for the endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NativeArray<byte> GetRawAddressBytes()
```

</div>

##### Returns

| Type                       | Description                                                        |
|----------------------------|--------------------------------------------------------------------|
| NativeArray\<System.Byte\> | Native array containing the raw bytes (uses temporary allocation). |

#### Parse(String, UInt16, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static NetworkEndPoint Parse(string address, ushort port, NetworkFamily family = NetworkFamily.Ipv4)
```

</div>

##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | address |             |
| System.UInt16 | port    |             |
| NetworkFamily | family  |             |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### SetRawAddressBytes(NativeArray\<Byte\>, NetworkFamily)

<div class="markdown level1 summary">

Directly sets the raw bytes of the endpoint using the specified bytes
and family.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void SetRawAddressBytes(NativeArray<byte> bytes, NetworkFamily family = NetworkFamily.Ipv4)
```

</div>

##### Parameters

| Type                       | Name   | Description                        |
|----------------------------|--------|------------------------------------|
| NativeArray\<System.Byte\> | bytes  | Raw bytes to use for the endpoint. |
| NetworkFamily              | family | Endpoint's address family.         |

##### Exceptions

| Type                             | Condition                             |
|----------------------------------|---------------------------------------|
| System.InvalidOperationException | Length of bytes doesn't match family. |

#### ToString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override string ToString()
```

</div>

##### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

##### Overrides

<div>

System.ValueType.ToString()

</div>

#### TryParse(String, UInt16, out NetworkEndPoint, NetworkFamily)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool TryParse(string address, ushort port, out NetworkEndPoint endpoint, NetworkFamily family = NetworkFamily.Ipv4)
```

</div>

##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| System.String   | address  |             |
| System.UInt16   | port     |             |
| NetworkEndPoint | endpoint |             |
| NetworkFamily   | family   |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WithPort(UInt16)

<div class="markdown level1 summary">

Use the given port number for this endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEndPoint WithPort(ushort port)
```

</div>

##### Parameters

| Type          | Name | Description      |
|---------------|------|------------------|
| System.UInt16 | port | The port number. |

##### Returns

| Type            | Description          |
|-----------------|----------------------|
| NetworkEndPoint | The endpoint (this). |

### Operators

#### Equality(NetworkEndPoint, NetworkEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator ==(NetworkEndPoint lhs, NetworkEndPoint rhs)
```

</div>

##### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | lhs  |             |
| NetworkEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkEndPoint, NetworkEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator !=(NetworkEndPoint lhs, NetworkEndPoint rhs)
```

</div>

##### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | lhs  |             |
| NetworkEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
