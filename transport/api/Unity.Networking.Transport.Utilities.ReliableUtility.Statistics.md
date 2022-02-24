---  
id: Unity.Networking.Transport.Utilities.ReliableUtility.Statistics  
title: Unity.Networking.Transport.Utilities.ReliableUtility.Statistics  
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
public struct Statistics
```

## 

### PacketsDropped

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsDropped
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketsDuplicated

<div class="markdown level1 summary">

Note that the reliability pipeline does not (and cannot) make the
distinction between a packet 'actually duplicated by the network', and a
packet 'resent by the remote connection as a form of reliability'. To do
so would require increasing the ReliableUtility.PacketHeader to include
unique packet ID's. Thus, be aware that this field records both.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsDuplicated
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketsOutOfOrder

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsOutOfOrder
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketsReceived

<div class="markdown level1 summary">

The Total. Thus, includes out of order, stale, and duplicate packets.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsReceived
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketsResent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsResent
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketsSent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsSent
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketsStale

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketsStale
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
