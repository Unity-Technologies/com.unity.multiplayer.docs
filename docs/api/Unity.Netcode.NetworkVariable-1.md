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

NetworkVariableBase.Name

</div>

<div>

NetworkVariableBase.ReadPerm

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

NetworkVariableBase.ShouldWrite(UInt64, Boolean)

</div>

<div>

NetworkVariableBase.CanClientRead(UInt64)

</div>

<div>

NetworkVariableBase.Dispose()

</div>

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

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
[Serializable]
public class NetworkVariable<T> : NetworkVariableBase, IDisposable where T : struct
```

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## 

### NetworkVariable()

<div class="markdown level1 summary">

Creates a NetworkVariable with the default value and custom read
permission

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkVariable()
```

### NetworkVariable(T)

<div class="markdown level1 summary">

Creates a NetworkVariable with a custom value and the default read
permission

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkVariable(T value)
```

#### Parameters

| Type | Name  | Description                                      |
|------|-------|--------------------------------------------------|
| T    | value | The initial value to use for the NetworkVariable |

### NetworkVariable(NetworkVariableReadPermission)

<div class="markdown level1 summary">

Creates a NetworkVariable with the default value and custom read
permission

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkVariable(NetworkVariableReadPermission readPerm)
```

#### Parameters

| Type                          | Name     | Description                                 |
|-------------------------------|----------|---------------------------------------------|
| NetworkVariableReadPermission | readPerm | The read permission for the NetworkVariable |

### NetworkVariable(NetworkVariableReadPermission, T)

<div class="markdown level1 summary">

Creates a NetworkVariable with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkVariable(NetworkVariableReadPermission readPerm, T value)
```

#### Parameters

| Type                          | Name     | Description                                      |
|-------------------------------|----------|--------------------------------------------------|
| NetworkVariableReadPermission | readPerm | The read permission for the NetworkVariable      |
| T                             | value    | The initial value to use for the NetworkVariable |

## 

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

## 

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

## 

### ReadDelta(Stream, Boolean)

<div class="markdown level1 summary">

Reads value from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadDelta(Stream stream, bool keepDirtyDelta)
```

#### Parameters

| Type             | Name           | Description                                                                             |
|------------------|----------------|-----------------------------------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the value from                                                       |
| System.Boolean   | keepDirtyDelta | Whether or not the container should keep the dirty delta, or mark the delta as consumed |

#### Overrides

<div>

NetworkVariableBase.ReadDelta(Stream, Boolean)

</div>

### ReadField(Stream)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadField(Stream stream)
```

#### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| System.IO.Stream | stream | The stream to read the state from |

#### Overrides

<div>

NetworkVariableBase.ReadField(Stream)

</div>

### WriteDelta(Stream)

<div class="markdown level1 summary">

Writes the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteDelta(Stream stream)
```

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the value to |

#### Overrides

<div>

NetworkVariableBase.WriteDelta(Stream)

</div>

### WriteField(Stream)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteField(Stream stream)
```

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the state to |

#### Overrides

<div>

NetworkVariableBase.WriteField(Stream)

</div>

### Implements

<div>

System.IDisposable

</div>
