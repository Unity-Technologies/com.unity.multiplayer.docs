---
id: Unity.Netcode.VariableSerialization-1
title: Unity.Netcode.VariableSerialization-1
---

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkVariableBase

</div>

<div class="level2">

NetworkVariableSerialization\<T\>

</div>

<div class="level3">

NetworkList\<T\>

</div>

<div class="level3">

NetworkVariable\<T\>

</div>

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkVariableBase.Initialize(NetworkBehaviour)

</div>

<div>

NetworkVariableBase.DefaultReadPerm

</div>

<div>

NetworkVariableBase.DefaultWritePerm

</div>

<div>

NetworkVariableBase.Name

</div>

<div>

NetworkVariableBase.ReadPerm

</div>

<div>

NetworkVariableBase.WritePerm

</div>

<div>

NetworkVariableBase.SetDirty(Boolean)

</div>

<div>

NetworkVariableBase.ResetDirty()

</div>

<div>

NetworkVariableBase.IsDirty()

</div>

<div>

NetworkVariableBase.CanClientRead(UInt64)

</div>

<div>

NetworkVariableBase.CanClientWrite(UInt64)

</div>

<div>

NetworkVariableBase.WriteDelta(FastBufferWriter)

</div>

<div>

NetworkVariableBase.WriteField(FastBufferWriter)

</div>

<div>

NetworkVariableBase.ReadField(FastBufferReader)

</div>

<div>

NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)

</div>

<div>

NetworkVariableBase.Dispose()

</div>

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
[Serializable]
public abstract class NetworkVariableSerialization<T> : NetworkVariableBase, IDisposable where T : struct
```

</div>

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Constructors

#### NetworkVariableSerialization(NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected NetworkVariableSerialization(NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

</div>

##### Parameters

| Type                           | Name      | Description |
|--------------------------------|-----------|-------------|
| NetworkVariableReadPermission  | readPerm  |             |
| NetworkVariableWritePermission | writePerm |             |

### Methods

#### Read(FastBufferReader, out T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected static void Read(FastBufferReader reader, out T value)
```

</div>

##### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferReader | reader |             |
| T                | value  |             |

#### Write(FastBufferWriter, in T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected static void Write(FastBufferWriter writer, in T value)
```

</div>

##### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferWriter | writer |             |
| T                | value  |             |

### Implements

<div>

System.IDisposable

</div>

 
