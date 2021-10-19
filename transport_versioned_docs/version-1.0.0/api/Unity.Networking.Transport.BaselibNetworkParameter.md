---  
id: Unity.Networking.Transport.BaselibNetworkParameter  
title: Unity.Networking.Transport.BaselibNetworkParameter  
---

<div class="markdown level0 summary">

Network Parameters used to set queue and payload sizes for
BaselibNetworkInterface

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkParameter

</div>

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
public struct BaselibNetworkParameter : INetworkParameter
```

## 

### maximumPayloadSize

<div class="markdown level1 summary">

The maximum payload size.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint maximumPayloadSize
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### receiveQueueCapacity

<div class="markdown level1 summary">

The maximum number of receiving packets that the BaselibNetworkInterface
can process in a single update iteration.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int receiveQueueCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### sendQueueCapacity

<div class="markdown level1 summary">

The maximum number of sending packets that the BaselibNetworkInterface
can process in a single update iteration.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int sendQueueCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Implements

<div>

INetworkParameter

</div>
