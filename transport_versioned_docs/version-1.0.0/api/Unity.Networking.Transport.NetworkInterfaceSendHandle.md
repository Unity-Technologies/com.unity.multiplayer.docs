---  
id: Unity.Networking.Transport.NetworkInterfaceSendHandle  
title: Unity.Networking.Transport.NetworkInterfaceSendHandle  
---

<div class="markdown level0 summary">

A handle to data that's going to be sent on an interface.

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
public struct NetworkInterfaceSendHandle
```

## 

### capacity

<div class="markdown level1 summary">

Maximum capacity of the data buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int capacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### data

<div class="markdown level1 summary">

Pointer to the data buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IntPtr data
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.IntPtr |             |

### flags

<div class="markdown level1 summary">

Internal flags used by the driver (tracks who allocated the memory).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public SendHandleFlags flags
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| SendHandleFlags |             |

### id

<div class="markdown level1 summary">

Internal ID for this handle.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int id
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### size

<div class="markdown level1 summary">

Actual size of the data in the buffer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int size
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
