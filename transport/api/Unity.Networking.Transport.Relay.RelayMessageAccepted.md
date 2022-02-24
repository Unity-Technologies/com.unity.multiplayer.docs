---  
id: Unity.Networking.Transport.Relay.RelayMessageAccepted  
title: Unity.Networking.Transport.Relay.RelayMessageAccepted  
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
public struct RelayMessageAccepted
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
public const int Length = 36
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ToAllocationId

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayAllocationId ToAllocationId
```

#### Field Value

| Type              | Description |
|-------------------|-------------|
| RelayAllocationId |             |

## 

### Create(RelayAllocationId, RelayAllocationId, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayMessageAccepted Create(RelayAllocationId fromAllocationId, RelayAllocationId toAllocationId, ushort dataLength)
```

#### Parameters

| Type              | Name             | Description |
|-------------------|------------------|-------------|
| RelayAllocationId | fromAllocationId |             |
| RelayAllocationId | toAllocationId   |             |
| System.UInt16     | dataLength       |             |

#### Returns

| Type                 | Description |
|----------------------|-------------|
| RelayMessageAccepted |             |
