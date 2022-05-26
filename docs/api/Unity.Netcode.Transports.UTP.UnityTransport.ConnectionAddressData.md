---
id: Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData
title: Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData
---

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



##### Syntax

<div class="codewrapper">

``` lang-csharp
[Serializable]
public struct ConnectionAddressData
```

</div>

### Fields

#### Address

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string Address
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Port

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ushort Port
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### ServerListenAddress

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string ServerListenAddress
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Properties

#### ListenEndPoint

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly NetworkEndPoint ListenEndPoint { get; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### ServerEndPoint

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly NetworkEndPoint ServerEndPoint { get; }
```

</div>

##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

 
