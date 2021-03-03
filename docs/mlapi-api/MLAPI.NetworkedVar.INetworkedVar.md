---  
id: MLAPI.NetworkedVar.INetworkedVar  
title: MLAPI.NetworkedVar.INetworkedVar  
---

<div class="markdown level0 summary">

Interface for networked value containers

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface INetworkedVar

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

    string GetChannel()

#### Returns

| Type          | Description                                    |
|---------------|------------------------------------------------|
| System.String | The name of the channel to be used for syncing |

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

### ReadDelta(Stream, Boolean)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

### ReadField(Stream)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void ReadField(Stream stream)

#### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| System.IO.Stream | stream | The stream to read the state from |

### ResetDirty()

<div class="markdown level1 summary">

Resets the dirty state and marks the variable as synced / clean

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void ResetDirty()

### SetNetworkedBehaviour(NetworkedBehaviour)

<div class="markdown level1 summary">

Sets NetworkedBehaviour the container belongs to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters

| Type               | Name      | Description                            |
|--------------------|-----------|----------------------------------------|
| NetworkedBehaviour | behaviour | The behaviour the container behaves to |

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
