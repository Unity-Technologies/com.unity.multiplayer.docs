---
id: Unity.Netcode.NetworkVariable-1
title: Unity.Netcode.NetworkVariable-1
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:37 pm
---

<div class="markdown level0 summary">

A variable that can be synchronized over the network.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

## Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

NetworkVariableBase.GetBehaviour()

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

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
[Serializable]
public class NetworkVariable<T> : NetworkVariableBase, IDisposable
```

## Type Parameters

| Name | Description                                 |
|------|---------------------------------------------|
| T    | the unmanaged type for NetworkVariable\<T\> |

## Constructors

### NetworkVariable(T, NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

Constructor for NetworkVariable\<T\>

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkVariable(T value = null, NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

#### Parameters

| Type                           | Name      | Description                                                      |
|--------------------------------|-----------|------------------------------------------------------------------|
| T                              | value     | initial value set that is of type T                              |
| NetworkVariableReadPermission  | readPerm  | the NetworkVariableReadPermission for this NetworkVariable\<T\>  |
| NetworkVariableWritePermission | writePerm | the NetworkVariableWritePermission for this NetworkVariable\<T\> |

## Fields

### OnValueChanged

<div class="markdown level1 summary">

The callback to be invoked when the value gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkVariable<T>.OnValueChangedDelegate OnValueChanged
```

#### Field Value

| Type                                       | Description |
|--------------------------------------------|-------------|
| NetworkVariable.OnValueChangedDelegate\<\> |             |

## Properties

### Value

<div class="markdown level1 summary">

The value of the NetworkVariable container

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual T Value { get; set; }
```

#### Property Value

| Type | Description |
|------|-------------|
| T    |             |

## Methods

### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

Reads value from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

#### Parameters

| Type             | Name           | Description                                                                             |
|------------------|----------------|-----------------------------------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the value from                                                       |
| System.Boolean   | keepDirtyDelta | Whether or not the container should keep the dirty delta, or mark the delta as consumed |

#### Overrides

<div>

NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)

</div>

### ReadField(FastBufferReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadField(FastBufferReader reader)
```

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferReader | reader |             |

#### Overrides

<div>

NetworkVariableBase.ReadField(FastBufferReader)

</div>

### WriteDelta(FastBufferWriter)

<div class="markdown level1 summary">

Writes the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the value to |

#### Overrides

<div>

NetworkVariableBase.WriteDelta(FastBufferWriter)

</div>

### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteField(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferWriter | writer |             |

#### Overrides

<div>

NetworkVariableBase.WriteField(FastBufferWriter)

</div>

### Implements

<div>

System.IDisposable

</div>
