---  
id: Unity.Networking.Transport.Relay.RelayHMACKey  
title: Unity.Networking.Transport.Relay.RelayHMACKey  
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
public struct RelayHMACKey
```

## 

### k_Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int k_Length = 64
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Value

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public byte *Value
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

## 

### FromBytePointer(Byte\*, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayHMACKey FromBytePointer(byte *data, int length)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| System.Byte\* | data   |             |
| System.Int32  | length |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| RelayHMACKey |             |
