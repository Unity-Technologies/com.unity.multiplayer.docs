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

# Struct RelayServerData

<div class="markdown level0 summary">

Used by the Relay Protocol to describe how to connect to the Relay
Service.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

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

###### **Namespace**: Unity.Networking.Transport.Relay

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct RelayServerData
```

</div>

### Constructors

#### RelayServerData(ref NetworkEndPoint, UInt16, RelayAllocationId, String, String, String, Boolean)

<div class="markdown level1 summary">

Initializes a new instance of the RelayServerData class

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, RelayAllocationId allocationId, string connectionData, string hostConnectionData, string key, bool isSecure)
```

</div>

##### Parameters

| Type              | Name               | Description              |
|-------------------|--------------------|--------------------------|
| NetworkEndPoint   | endpoint           | The endpoint             |
| System.UInt16     | nonce              | The nonce                |
| RelayAllocationId | allocationId       | The allocation id        |
| System.String     | connectionData     | The connection data      |
| System.String     | hostConnectionData | The host connection data |
| System.String     | key                | The key                  |
| System.Boolean    | isSecure           | The is secure            |

#### RelayServerData(ref NetworkEndPoint, UInt16, ref RelayAllocationId, ref RelayConnectionData, ref RelayConnectionData, ref RelayHMACKey, Boolean)

<div class="markdown level1 summary">

Initializes a new instance of the RelayServerData class

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, ref RelayAllocationId allocationId, ref RelayConnectionData connectionData, ref RelayConnectionData hostConnectionData, ref RelayHMACKey key, bool isSecure)
```

</div>

##### Parameters

| Type                | Name               | Description              |
|---------------------|--------------------|--------------------------|
| NetworkEndPoint     | endpoint           | The endpoint             |
| System.UInt16       | nonce              | The nonce                |
| RelayAllocationId   | allocationId       | The allocation id        |
| RelayConnectionData | connectionData     | The connection data      |
| RelayConnectionData | hostConnectionData | The host connection data |
| RelayHMACKey        | key                | The key                  |
| System.Boolean      | isSecure           | The is secure            |

### Fields

#### AllocationId

<div class="markdown level1 summary">

The unique identifier of the client on the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RelayAllocationId AllocationId
```

</div>

##### Field Value

| Type              | Description |
|-------------------|-------------|
| RelayAllocationId |             |

#### ConnectionData

<div class="markdown level1 summary">

The data that describes the client presence on the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RelayConnectionData ConnectionData
```

</div>

##### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

#### Endpoint

<div class="markdown level1 summary">

The endpoint of the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEndPoint Endpoint
```

</div>

##### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### HMAC

<div class="markdown level1 summary">

The computed HMAC.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *HMAC
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### HMACKey

<div class="markdown level1 summary">

The HMAC key for the connection.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RelayHMACKey HMACKey
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| RelayHMACKey |             |

#### HostConnectionData

<div class="markdown level1 summary">

The connection data of the host client on the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public RelayConnectionData HostConnectionData
```

</div>

##### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

#### IsSecure

<div class="markdown level1 summary">

A byte that identifies the connection as secured.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly byte IsSecure
```

</div>

##### Field Value

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

#### Nonce

<div class="markdown level1 summary">

The Nonce value used to stablish the connection with the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ushort Nonce
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Methods

#### ComputeNewNonce()

<div class="markdown level1 summary">

Computes the new nonce, this must be called one time!

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void ComputeNewNonce()
```

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
