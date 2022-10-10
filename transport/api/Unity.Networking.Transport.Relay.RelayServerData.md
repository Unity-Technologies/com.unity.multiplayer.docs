---  
id: Unity.Networking.Transport.Relay.RelayServerData  
title: Unity.Networking.Transport.Relay.RelayServerData  
---

<div class="markdown level0 summary">

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

### RelayServerData(String, UInt16, Byte\[\], Byte\[\], Byte\[\], Byte\[\], Boolean)

<div class="markdown level1 summary">

Create a new Relay server data structure.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData(string host, ushort port, byte[] allocationId, byte[] connectionData, byte[] hostConnectionData, byte[] key, bool isSecure)
```

#### Parameters

| Type            | Name               | Description                                               |
|-----------------|--------------------|-----------------------------------------------------------|
| System.String   | host               | IP address or hostname of the Relay server.               |
| System.UInt16   | port               | Port of the Relay server.                                 |
| System.Byte\[\] | allocationId       | ID of the Relay allocation.                               |
| System.Byte\[\] | connectionData     | Connection data of the allocation.                        |
| System.Byte\[\] | hostConnectionData | Connection data of the host (same as previous for hosts). |
| System.Byte\[\] | key                | HMAC signature of the allocation.                         |
| System.Boolean  | isSecure           | Whether the Relay connection is to be secured or not.     |

#### Remarks

<div class="markdown level1 remarks">

If a hostname is provided as the "host" parameter, this constructor will
perform a DNS resolution to map it to an IP address. If the hostname is
not in the OS cache, this operation can possibly block for a long time
(between 20 and 120 milliseconds). If this is a concern, perform the DNS
resolution asynchronously and pass in the resulting IP address directly
(see ).

</div>

### RelayServerData(ref NetworkEndpoint, UInt16, ref RelayAllocationId, ref RelayConnectionData, ref RelayConnectionData, ref RelayHMACKey, Boolean)

<div class="markdown level1 summary">

Create a new Relay server data structure (low level constructor).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData(ref NetworkEndpoint endpoint, ushort nonce, ref RelayAllocationId allocationId, ref RelayConnectionData connectionData, ref RelayConnectionData hostConnectionData, ref RelayHMACKey key, bool isSecure)
```

#### Parameters

| Type                | Name               | Description                                             |
|---------------------|--------------------|---------------------------------------------------------|
| NetworkEndpoint     | endpoint           | Endpoint of the Relay server.                           |
| System.UInt16       | nonce              | Nonce used in connection handshake (preferably random). |
| RelayAllocationId   | allocationId       | ID of the Relay allocation.                             |
| RelayConnectionData | connectionData     | Connection data of the allocation.                      |
| RelayConnectionData | hostConnectionData | Connection data of the host (use default for hosts).    |
| RelayHMACKey        | key                | HMAC signature of the allocation.                       |
| System.Boolean      | isSecure           | Whether the Relay connection is to be secured or not.   |

## 

### AllocationId

<div class="markdown level1 summary">

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

### Endpoint

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEndpoint Endpoint
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

### HMACKey

<div class="markdown level1 summary">

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
