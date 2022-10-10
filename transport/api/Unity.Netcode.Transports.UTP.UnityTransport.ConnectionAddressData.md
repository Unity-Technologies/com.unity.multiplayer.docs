---  
id: Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData  
title: Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData  
---

<div class="markdown level0 summary">

Structure to store the address to connect to

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

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
[Serializable]
public struct ConnectionAddressData
```

## 

### Address

<div class="markdown level1 summary">

IP address of the server (address to which clients will connect to).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Address
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Port

<div class="markdown level1 summary">

UDP port of the server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort Port
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### ServerListenAddress

<div class="markdown level1 summary">

IP address the server will listen on. If not provided, will use
'Address'.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string ServerListenAddress
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

## 

### ListenEndPoint

<div class="markdown level1 summary">

Endpoint (IP address and port) server will listen/bind on.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkEndPoint ListenEndPoint { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

### ServerEndPoint

<div class="markdown level1 summary">

Endpoint (IP address and port) clients will connect to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkEndPoint ServerEndPoint { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |
