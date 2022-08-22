---
id: Unity.Networking.Transport.NetworkConnection
title: Unity.Networking.Transport.NetworkConnection
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

# Struct NetworkConnection

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<NetworkConnection\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.ToString()

</div>

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
public struct NetworkConnection : IEquatable<NetworkConnection>
```

</div>

### Properties

#### InternalId

<div class="markdown level1 summary">

Gets the value of the connection's internal ID.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly int InternalId { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### IsCreated

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly bool IsCreated { get; }
```

</div>

##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### Close(NetworkDriver)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Close(NetworkDriver driver)
```

</div>

##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Disconnect(NetworkDriver)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Disconnect(NetworkDriver driver)
```

</div>

##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool Equals(object o)
```

</div>

##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | o    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

#### Equals(NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Equals(NetworkConnection o)
```

</div>

##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | o    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

#### GetState(NetworkDriver)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkConnection.State GetState(NetworkDriver driver)
```

</div>

##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

##### Returns

| Type                    | Description |
|-------------------------|-------------|
| NetworkConnection.State |             |

#### PopEvent(NetworkDriver, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream)
```

</div>

##### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| NetworkDriver    | driver |             |
| DataStreamReader | stream |             |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

#### PopEvent(NetworkDriver, out DataStreamReader, out NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream, out NetworkPipeline pipeline)
```

</div>

##### Parameters

| Type             | Name     | Description |
|------------------|----------|-------------|
| NetworkDriver    | driver   |             |
| DataStreamReader | stream   |             |
| NetworkPipeline  | pipeline |             |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### Operators

#### Equality(NetworkConnection, NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator ==(NetworkConnection lhs, NetworkConnection rhs)
```

</div>

##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | lhs  |             |
| NetworkConnection | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkConnection, NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool operator !=(NetworkConnection lhs, NetworkConnection rhs)
```

</div>

##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | lhs  |             |
| NetworkConnection | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable\<T\>

</div>

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
