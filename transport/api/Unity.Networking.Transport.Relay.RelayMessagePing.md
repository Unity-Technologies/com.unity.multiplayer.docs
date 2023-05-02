---  
id: Unity.Networking.Transport.Relay.RelayMessagePing  
title: Unity.Networking.Transport.Relay.RelayMessagePing  
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
public struct RelayMessagePing
```

## 

### FromAllocationId

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayAllocationId FromAllocationId
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
public const int Length = 22
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### SequenceNumber

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort SequenceNumber
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

## 

### Create(RelayAllocationId, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayMessagePing Create(RelayAllocationId fromAllocationId, ushort dataLength)
```

#### Parameters

| Type              | Name             | Description |
|-------------------|------------------|-------------|
| RelayAllocationId | fromAllocationId |             |
| System.UInt16     | dataLength       |             |

#### Returns

| Type             | Description |
|------------------|-------------|
| RelayMessagePing |             |
