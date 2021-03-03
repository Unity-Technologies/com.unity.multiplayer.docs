---  
id: MLAPI.NetworkedVar.NetworkedVar-1  
title: MLAPI.NetworkedVar.NetworkedVar-1  
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

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkedVar

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

##### **Assembly**: MLAPI.dll

##### Syntax

    [Serializable]
    public class NetworkedVar<T> : INetworkedVar

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## Constructors 

### NetworkedVar()

<div class="markdown level1 summary">

Creates a NetworkedVar with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVar()

### NetworkedVar(T)

<div class="markdown level1 summary">

Creates a NetworkedVar with a custom value and the default settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVar(T value)

#### Parameters

| Type | Name  | Description                                   |
|------|-------|-----------------------------------------------|
| T    | value | The initial value to use for the NetworkedVar |

### NetworkedVar(NetworkedVarSettings)

<div class="markdown level1 summary">

Creates a NetworkedVar with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVar(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description                              |
|----------------------|----------|------------------------------------------|
| NetworkedVarSettings | settings | The settings to use for the NetworkedVar |

### NetworkedVar(NetworkedVarSettings, T)

<div class="markdown level1 summary">

Creates a NetworkedVar with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVar(NetworkedVarSettings settings, T value)

#### Parameters

| Type                 | Name     | Description                                   |
|----------------------|----------|-----------------------------------------------|
| NetworkedVarSettings | settings | The settings to use for the NetworkedVar      |
| T                    | value    | The initial value to use for the NetworkedVar |

## Fields

### OnValueChanged

<div class="markdown level1 summary">

The callback to be invoked when the value gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVar<T>.OnValueChangedDelegate OnValueChanged

#### Field Value

| Type                                        | Description |
|---------------------------------------------|-------------|
| NetworkedVar.OnValueChangedDelegate&lt;&gt; |             |

### Settings

<div class="markdown level1 summary">

The settings for this var

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly NetworkedVarSettings Settings

#### Field Value

| Type                 | Description |
|----------------------|-------------|
| NetworkedVarSettings |             |

## Properties 

### isDirty

<div class="markdown level1 summary">

Gets or sets Whether or not the variable needs to be delta synced

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool isDirty { get; set; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### LastSyncedTime

<div class="markdown level1 summary">

Gets the last time the variable was synced

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float LastSyncedTime { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### Value

<div class="markdown level1 summary">

The value of the NetworkedVar container

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public T Value { get; set; }

#### Property Value

| Type | Description |
|------|-------------|
| T    |             |

## Methods 

### CanClientRead(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientRead(ulong clientId)

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CanClientWrite(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientWrite(ulong clientId)

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### GetChannel()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string GetChannel()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

### IsDirty()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDirty()

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ReadDelta(Stream, Boolean)

<div class="markdown level1 summary">

Reads value from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters

| Type             | Name           | Description                                                                             |
|------------------|----------------|-----------------------------------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the value from                                                       |
| System.Boolean   | keepDirtyDelta | Whether or not the container should keep the dirty delta, or mark the delta as consumed |

### ReadField(Stream)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadField(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

### ResetDirty()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ResetDirty()

### SetNetworkedBehaviour(NetworkedBehaviour)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters

| Type               | Name      | Description |
|--------------------|-----------|-------------|
| NetworkedBehaviour | behaviour |             |

### WriteDelta(Stream)

<div class="markdown level1 summary">

Writes the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDelta(Stream stream)

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the value to |

### WriteField(Stream)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteField(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

### Implements

<div>

INetworkedVar

</div>
