---  
id: MLAPI.NetworkVariable.INetworkVariable  
title: MLAPI.NetworkVariable.INetworkVariable  
---

<div class="markdown level0 summary">

Interface for network value containers

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface INetworkVariable

## Properties 

### RemoteTick

<div class="markdown level1 summary">

Accessor for the RemoteTick stored in the networkVariable, list, set or
dictionary

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    ushort RemoteTick { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

## Methods 

### CanClientRead(UInt64)

<div class="markdown level1 summary">

Gets Whether or not a specific client can read to the varaible

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    bool CanClientRead(ulong clientId)

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

    bool CanClientWrite(ulong clientId)

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

    NetworkChannel GetChannel()

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

    bool IsDirty()

#### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

### ReadDelta(Stream, Boolean, UInt16, UInt16)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void ReadDelta(Stream stream, bool keepDirtyDelta, ushort localTick, ushort remoteTick)

#### Parameters

| Type             | Name           | Description                                                                         |
|------------------|----------------|-------------------------------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the delta from                                                   |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed                        |
| System.UInt16    | localTick      | The local network tick at which this var was written, on the machine it was written |
| System.UInt16    | remoteTick     | The remote network tick at which this var was sent by the host                      |

### ReadField(Stream, UInt16, UInt16)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void ReadField(Stream stream, ushort localTick, ushort remoteTick)

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

    void ResetDirty()

### SetNetworkBehaviour(NetworkBehaviour)

<div class="markdown level1 summary">

Sets NetworkBehaviour the container belongs to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void SetNetworkBehaviour(NetworkBehaviour behaviour)

#### Parameters

| Type             | Name      | Description                            |
|------------------|-----------|----------------------------------------|
| NetworkBehaviour | behaviour | The behaviour the container behaves to |

### WriteDelta(Stream)

<div class="markdown level1 summary">

Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void WriteDelta(Stream stream)

#### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| System.IO.Stream | stream | The stream to write the dirty changes to |

### WriteField(Stream)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void WriteField(Stream stream)

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the state to |
