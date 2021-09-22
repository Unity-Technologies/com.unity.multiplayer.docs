---  
id: MLAPI.NetworkVariable.NetworkVariable-1  
title: MLAPI.NetworkVariable.NetworkVariable-1
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

INetworkVariable

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
    public class NetworkVariable<T> : INetworkVariable

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## Constructors 

### NetworkVariable()

<div class="markdown level1 summary">

Creates a NetworkVariable with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariable()

### NetworkVariable(T)

<div class="markdown level1 summary">

Creates a NetworkVariable with a custom value and the default settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariable(T value)

#### Parameters

| Type | Name  | Description                                      |
|------|-------|--------------------------------------------------|
| T    | value | The initial value to use for the NetworkVariable |

### NetworkVariable(NetworkVariableSettings)

<div class="markdown level1 summary">

Creates a NetworkVariable with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariable(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description                                 |
|-------------------------|----------|---------------------------------------------|
| NetworkVariableSettings | settings | The settings to use for the NetworkVariable |

### NetworkVariable(NetworkVariableSettings, T)

<div class="markdown level1 summary">

Creates a NetworkVariable with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariable(NetworkVariableSettings settings, T value)

#### Parameters

| Type                    | Name     | Description                                      |
|-------------------------|----------|--------------------------------------------------|
| NetworkVariableSettings | settings | The settings to use for the NetworkVariable      |
| T                       | value    | The initial value to use for the NetworkVariable |

## Fields

### OnValueChanged

<div class="markdown level1 summary">

The callback to be invoked when the value gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariable<T>.OnValueChangedDelegate OnValueChanged

#### Field Value

| Type                                           | Description |
|------------------------------------------------|-------------|
| NetworkVariable.OnValueChangedDelegate&lt;&gt; |             |

### Settings

<div class="markdown level1 summary">

The settings for this var

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly NetworkVariableSettings Settings

#### Field Value

| Type                    | Description |
|-------------------------|-------------|
| NetworkVariableSettings |             |

## Properties 

### LocalTick

<div class="markdown level1 summary">

The last time the variable was written to locally

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort LocalTick { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### RemoteTick

<div class="markdown level1 summary">

The last time the variable was written to remotely. Uses the remote
timescale

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort RemoteTick { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Value

<div class="markdown level1 summary">

The value of the NetworkVariable container

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

Gets Whether or not a specific client can read to the varaible

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientRead(ulong clientId)

#### Parameters

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The clientId of the remote client |

#### Returns

| Type           | Description                                        |
|----------------|----------------------------------------------------|
| System.Boolean | Whether or not the client can read to the variable |

### CanClientWrite(UInt64)

<div class="markdown level1 summary">

Gets Whether or not a specific client can write to the varaible

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientWrite(ulong clientId)

#### Parameters

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The clientId of the remote client |

#### Returns

| Type           | Description                                         |
|----------------|-----------------------------------------------------|
| System.Boolean | Whether or not the client can write to the variable |

### GetChannel()

<div class="markdown level1 summary">

Returns the name of the channel to be used for syncing

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkChannel GetChannel()

#### Returns

| Type           | Description                                    |
|----------------|------------------------------------------------|
| NetworkChannel | The name of the channel to be used for syncing |

### IsDirty()

<div class="markdown level1 summary">

Gets Whether or not the container is dirty

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDirty()

#### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

### ReadDelta(Stream, Boolean, UInt16, UInt16)

<div class="markdown level1 summary">

Reads value from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadDelta(Stream stream, bool keepDirtyDelta, ushort localTick, ushort remoteTick)

#### Parameters

| Type             | Name           | Description                                                                             |
|------------------|----------------|-----------------------------------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the value from                                                       |
| System.Boolean   | keepDirtyDelta | Whether or not the container should keep the dirty delta, or mark the delta as consumed |
| System.UInt16    | localTick      |                                                                                         |
| System.UInt16    | remoteTick     |                                                                                         |

### ReadField(Stream, UInt16, UInt16)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadField(Stream stream, ushort localTick, ushort remoteTick)

#### Parameters

| Type             | Name       | Description                                                                         |
|------------------|------------|-------------------------------------------------------------------------------------|
| System.IO.Stream | stream     | The stream to read the state from                                                   |
| System.UInt16    | localTick  | The local network tick at which this var was written, on the machine it was written |
| System.UInt16    | remoteTick | The remote network tick at which this var was sent by the host                      |

### ResetDirty()

<div class="markdown level1 summary">

Resets the dirty state and marks the variable as synced / clean

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ResetDirty()

### SetDirty(Boolean)

<div class="markdown level1 summary">

Sets whether or not the variable needs to be delta synced

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetDirty(bool isDirty)

#### Parameters

| Type           | Name    | Description |
|----------------|---------|-------------|
| System.Boolean | isDirty |             |

### SetNetworkBehaviour(NetworkBehaviour)

<div class="markdown level1 summary">

Sets NetworkBehaviour the container belongs to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetNetworkBehaviour(NetworkBehaviour behaviour)

#### Parameters

| Type             | Name      | Description                            |
|------------------|-----------|----------------------------------------|
| NetworkBehaviour | behaviour | The behaviour the container behaves to |

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

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteField(Stream stream)

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the state to |

### Implements

<div>

INetworkVariable

</div>
