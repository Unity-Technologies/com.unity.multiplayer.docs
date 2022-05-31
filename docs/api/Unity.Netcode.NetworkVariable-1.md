---  
id: Unity.Netcode.NetworkVariable-1  
title: Unity.Netcode.NetworkVariable-1  
---

<div class="markdown level0 summary">

A variable that can be synchronized over the network.

</div>

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

NetworkVariableSerialization\<T\>.Write(FastBufferWriter, T)

</div>

<div>

NetworkVariableSerialization\<T\>.Read(FastBufferReader, T)

</div>

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
public class NetworkVariable<T> : NetworkVariableSerialization<T>, IDisposable where T : struct
```

</div>

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Constructors

#### NetworkVariable(T, NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkVariable(T value = default(T), NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

</div>

##### Parameters

| Type                           | Name      | Description |
|--------------------------------|-----------|-------------|
| T                              | value     |             |
| NetworkVariableReadPermission  | readPerm  |             |
| NetworkVariableWritePermission | writePerm |             |

### Fields

#### OnValueChanged

<div class="markdown level1 summary">

The callback to be invoked when the value gets changed

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkVariable<T>.OnValueChangedDelegate OnValueChanged
```

</div>

##### Field Value

| Type                                       | Description |
|--------------------------------------------|-------------|
| NetworkVariable.OnValueChangedDelegate\<\> |             |

### Properties

#### Value

<div class="markdown level1 summary">

The value of the NetworkVariable container

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual T Value { get; set; }
```

</div>

##### Property Value

| Type | Description |
|------|-------------|
| T    |             |

### Methods

#### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

Reads value from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

</div>

##### Parameters

| Type             | Name           | Description                                                                             |
|------------------|----------------|-----------------------------------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the value from                                                       |
| System.Boolean   | keepDirtyDelta | Whether or not the container should keep the dirty delta, or mark the delta as consumed |

##### Overrides

<div>

NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)

</div>

#### ReadField(FastBufferReader)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void ReadField(FastBufferReader reader)
```

</div>

##### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

##### Overrides

<div>

NetworkVariableBase.ReadField(FastBufferReader)

</div>

#### WriteDelta(FastBufferWriter)

<div class="markdown level1 summary">

Writes the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the value to |

##### Overrides

<div>

NetworkVariableBase.WriteDelta(FastBufferWriter)

</div>

#### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void WriteField(FastBufferWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

##### Overrides

<div>

NetworkVariableBase.WriteField(FastBufferWriter)

</div>

### Implements

<div>

System.IDisposable

</div>

 
