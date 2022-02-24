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

### RelayServerData(ref NetworkEndPoint, UInt16, RelayAllocationId, String, String, String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, RelayAllocationId allocationId, string connectionData, string hostConnectionData, string key, bool isSecure)
```

#### Parameters

| Type              | Name               | Description |
|-------------------|--------------------|-------------|
| NetworkEndPoint   | endpoint           |             |
| System.UInt16     | nonce              |             |
| RelayAllocationId | allocationId       |             |
| System.String     | connectionData     |             |
| System.String     | hostConnectionData |             |
| System.String     | key                |             |
| System.Boolean    | isSecure           |             |

### RelayServerData(ref NetworkEndPoint, UInt16, ref RelayAllocationId, ref RelayConnectionData, ref RelayConnectionData, ref RelayHMACKey, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData(ref NetworkEndPoint endpoint, ushort nonce, ref RelayAllocationId allocationId, ref RelayConnectionData connectionData, ref RelayConnectionData hostConnectionData, ref RelayHMACKey key, bool isSecure)
```

#### Parameters

| Type                | Name               | Description |
|---------------------|--------------------|-------------|
| NetworkEndPoint     | endpoint           |             |
| System.UInt16       | nonce              |             |
| RelayAllocationId   | allocationId       |             |
| RelayConnectionData | connectionData     |             |
| RelayConnectionData | hostConnectionData |             |
| RelayHMACKey        | key                |             |
| System.Boolean      | isSecure           |             |

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
public NetworkEndPoint Endpoint
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### HMAC

<div class="markdown level1 summary">

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

## 

### ComputeNewNonce()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void ComputeNewNonce()
```
