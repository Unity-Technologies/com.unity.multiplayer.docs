---  
id: Unity.Networking.Transport.Relay.RelayConnectionData  
title: Unity.Networking.Transport.Relay.RelayConnectionData  
---

<div class="markdown level0 summary">

This is the encrypted data that the Relay server uses for describing a
connection. Used mainly in the connection stablishing process (Binding)

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
public struct RelayConnectionData
```

## 

### k_Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int k_Length = 255
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

### FromByteArray(Byte\[\])

<div class="markdown level1 summary">

Convert a byte array to a RelayConnectionData

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayConnectionData FromByteArray(byte[] data)
```

#### Parameters

| Type            | Name | Description       |
|-----------------|------|-------------------|
| System.Byte\[\] | data | Array to convert. |

#### Returns

| Type                | Description              |
|---------------------|--------------------------|
| RelayConnectionData | New RelayConnectionData. |

### FromBytePointer(Byte\*, Int32)

<div class="markdown level1 summary">

Convert a raw buffer to a RelayConnectionData

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayConnectionData FromBytePointer(byte *dataPtr, int length)
```

#### Parameters

| Type          | Name    | Description                       |
|---------------|---------|-----------------------------------|
| System.Byte\* | dataPtr | Raw pointer to buffer to convert. |
| System.Int32  | length  | Length of the buffer to convert.  |

#### Returns

| Type                | Description              |
|---------------------|--------------------------|
| RelayConnectionData | New RelayConnectionData. |
