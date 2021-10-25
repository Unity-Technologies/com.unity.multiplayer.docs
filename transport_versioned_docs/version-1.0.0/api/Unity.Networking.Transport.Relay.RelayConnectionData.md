---  
id: Unity.Networking.Transport.Relay.RelayConnectionData  
title: Unity.Networking.Transport.Relay.RelayConnectionData  
---

<div class="markdown level0 summary">

This is the encrypted data that the Relay server uses for describing a
connection. Used mainly in the connection establishing process
(Binding).

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

The length in bytes of the Connection Data.

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

The raw data of the Connection Data

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

Converts a byte pointer to a RelayConnectionData.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static RelayConnectionData FromBytePointer(byte *dataPtr, int length)
```

#### Parameters

| Type          | Name    | Description                                     |
|---------------|---------|-------------------------------------------------|
| System.Byte\* | dataPtr | The pointer to the data of the Connection Data. |
| System.Int32  | length  | The length of the data.                         |

#### Returns

| Type                | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| RelayConnectionData | Returns a RelayConnectionData constructed from the provided data. |

#### Exceptions

| Type                     | Condition                                                                   |
|--------------------------|-----------------------------------------------------------------------------|
| System.ArgumentException | Provided byte array length is invalid, must be {k_Length} but got {length}. |
