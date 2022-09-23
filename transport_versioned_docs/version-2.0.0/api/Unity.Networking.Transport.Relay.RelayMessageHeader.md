---  
id: Unity.Networking.Transport.Relay.RelayMessageHeader  
title: Unity.Networking.Transport.Relay.RelayMessageHeader  
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
public struct RelayMessageHeader
```

## 

### Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int Length = 4
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Signature

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ushort Signature
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Type

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayMessageType Type
```

#### Field Value

| Type             | Description |
|------------------|-------------|
| RelayMessageType |             |

### Version

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte Version
```

#### Field Value

| Type        | Description |
|-------------|-------------|
| System.Byte |             |

## 

### Create(RelayMessageType)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayMessageHeader Create(RelayMessageType type)
```

#### Parameters

| Type             | Name | Description |
|------------------|------|-------------|
| RelayMessageType | type |             |

#### Returns

| Type               | Description |
|--------------------|-------------|
| RelayMessageHeader |             |

### IsValid()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsValid()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
