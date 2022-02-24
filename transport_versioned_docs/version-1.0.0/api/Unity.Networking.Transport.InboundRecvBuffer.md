---  
id: Unity.Networking.Transport.InboundRecvBuffer  
title: Unity.Networking.Transport.InboundRecvBuffer  
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
public struct InboundRecvBuffer
```

## 

### buffer

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *buffer
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### bufferLength

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int bufferLength
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Slice(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public InboundRecvBuffer Slice(int offset)
```

#### Parameters

| Type         | Name   | Description |
|--------------|--------|-------------|
| System.Int32 | offset |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| InboundRecvBuffer |             |
