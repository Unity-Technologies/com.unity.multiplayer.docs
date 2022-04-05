---  
id: Unity.Networking.Transport.Relay.RelayMessageBind  
title: Unity.Networking.Transport.Relay.RelayMessageBind  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class RelayMessageBind
```

## 

### Length

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int Length = 295
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Write(DataStreamWriter, Byte, UInt16, Byte\*, Byte\*)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void Write(DataStreamWriter writer, byte acceptMode, ushort nonce, byte *connectionDataPtr, byte *hmac)
```

#### Parameters

| Type             | Name              | Description |
|------------------|-------------------|-------------|
| DataStreamWriter | writer            |             |
| System.Byte      | acceptMode        |             |
| System.UInt16    | nonce             |             |
| System.Byte\*    | connectionDataPtr |             |
| System.Byte\*    | hmac              |             |
