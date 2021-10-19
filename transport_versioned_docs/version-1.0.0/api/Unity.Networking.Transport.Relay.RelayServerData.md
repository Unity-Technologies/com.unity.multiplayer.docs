---  
id: Unity.Networking.Transport.Relay.RelayServerData  
title: Unity.Networking.Transport.Relay.RelayServerData  
---

<div class="markdown level0 summary">

Used by the Relay Protocol to describe how to connect to the Relay
Service.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

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
public struct RelayServerData
```

## 

### RelayServerData(ref NetworkEndPoint, UInt16, RelayAllocationId, String, String, String, Boolean)

<div class="markdown level1 summary">

Initializes a new instance of the RelayServerData class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, RelayAllocationId allocationId, string connectionData, string hostConnectionData, string key, bool isSecure)
```

#### Parameters

| Type              | Name               | Description              |
|-------------------|--------------------|--------------------------|
| NetworkEndPoint   | endpoint           | The endpoint             |
| System.UInt16     | nonce              | The nonce                |
| RelayAllocationId | allocationId       | The allocation id        |
| System.String     | connectionData     | The connection data      |
| System.String     | hostConnectionData | The host connection data |
| System.String     | key                | The key                  |
| System.Boolean    | isSecure           | The is secure            |

### RelayServerData(ref NetworkEndPoint, UInt16, ref RelayAllocationId, ref RelayConnectionData, ref RelayConnectionData, ref RelayHMACKey, Boolean)

<div class="markdown level1 summary">

Initializes a new instance of the RelayServerData class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, ref RelayAllocationId allocationId, ref RelayConnectionData connectionData, ref RelayConnectionData hostConnectionData, ref RelayHMACKey key, bool isSecure)
```

#### Parameters

| Type                | Name               | Description              |
|---------------------|--------------------|--------------------------|
| NetworkEndPoint     | endpoint           | The endpoint             |
| System.UInt16       | nonce              | The nonce                |
| RelayAllocationId   | allocationId       | The allocation id        |
| RelayConnectionData | connectionData     | The connection data      |
| RelayConnectionData | hostConnectionData | The host connection data |
| RelayHMACKey        | key                | The key                  |
| System.Boolean      | isSecure           | The is secure            |

## 

### AllocationId

<div class="markdown level1 summary">

The unique identifier of the client on the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayAllocationId AllocationId
```

#### Field Value

| Type              | Description |
|-------------------|-------------|
| RelayAllocationId |             |

### ConnectionData

<div class="markdown level1 summary">

The data that describes the client presence on the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayConnectionData ConnectionData
```

#### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

### ConnectionSessionId

<div class="markdown level1 summary">

The Session Id for the connection with the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SessionIdToken ConnectionSessionId
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| SessionIdToken |             |

### Endpoint

<div class="markdown level1 summary">

The endpoint of the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndPoint Endpoint
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### HMAC

<div class="markdown level1 summary">

The computed HMAC.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *HMAC
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### HMACKey

<div class="markdown level1 summary">

The HMAC key for the connection.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayHMACKey HMACKey
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| RelayHMACKey |             |

### HostConnectionData

<div class="markdown level1 summary">

The connection data of the host client on the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayConnectionData HostConnectionData
```

#### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

### IsSecure

<div class="markdown level1 summary">

A byte that identifies the connection as secured.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly byte IsSecure
```

#### Field Value

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

### Nonce

<div class="markdown level1 summary">

The Nonce value used to stablish the connection with the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort Nonce
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

## 

### ComputeNewNonce()

<div class="markdown level1 summary">

Computes the new nonce, this must be called one time!

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ComputeNewNonce()
```
