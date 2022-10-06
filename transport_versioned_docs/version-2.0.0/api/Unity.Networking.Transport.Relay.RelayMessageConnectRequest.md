---  
id: Unity.Networking.Transport.Relay.RelayMessageConnectRequest  
title: Unity.Networking.Transport.Relay.RelayMessageConnectRequest  
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
public struct RelayMessageConnectRequest
```

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

### Header

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayMessageHeader Header
```

#### Field Value

| Type               | Description |
|--------------------|-------------|
| RelayMessageHeader |             |

### Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int Length = 276
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ToConnectionData

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayConnectionData ToConnectionData
```

#### Field Value

| Type                | Description |
|---------------------|-------------|
| RelayConnectionData |             |

### ToConnectionDataLength

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte ToConnectionDataLength
```

#### Field Value

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

## 

### Create(RelayAllocationId, RelayConnectionData)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayMessageConnectRequest Create(RelayAllocationId allocationId, RelayConnectionData toConnectionData)
```

#### Parameters

| Type                | Name             | Description |
|---------------------|------------------|-------------|
| RelayAllocationId   | allocationId     |             |
| RelayConnectionData | toConnectionData |             |

#### Returns

| Type                       | Description |
|----------------------------|-------------|
| RelayMessageConnectRequest |             |
