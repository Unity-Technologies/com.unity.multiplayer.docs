---

id: MLAPI.NetworkedVar.INetworkedVar

title: MLAPI.NetworkedVar.INetworkedVar

---

Interface INetworkedVar

<div class="markdown level0 summary" markdown="1">

Interface for networked value containers

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_NetworkedVar_INetworkedVar_syntax]

    public interface INetworkedVar

## Methods 

### CanClientRead(UInt64) [MLAPI_NetworkedVar_INetworkedVar_CanClientRead_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Gets Whether or not a specific client can read to the varaible

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    bool CanClientRead(ulong clientId)

#### Parameters [parameters]

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The clientId of the remote client |

#### Returns [returns]

| Type           | Description                                        |
|----------------|----------------------------------------------------|
| System.Boolean | Whether or not the client can read to the variable |

### CanClientWrite(UInt64) [MLAPI_NetworkedVar_INetworkedVar_CanClientWrite_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Gets Whether or not a specific client can write to the varaible

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    bool CanClientWrite(ulong clientId)

#### Parameters [parameters-1]

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The clientId of the remote client |

#### Returns [returns-1]

| Type           | Description                                         |
|----------------|-----------------------------------------------------|
| System.Boolean | Whether or not the client can write to the variable |

### GetChannel() [MLAPI_NetworkedVar_INetworkedVar_GetChannel]

<div class="markdown level1 summary" markdown="1">

Returns the name of the channel to be used for syncing

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    string GetChannel()

#### Returns [returns-2]

| Type          | Description                                    |
|---------------|------------------------------------------------|
| System.String | The name of the channel to be used for syncing |

### IsDirty() [MLAPI_NetworkedVar_INetworkedVar_IsDirty]

<div class="markdown level1 summary" markdown="1">

Gets Whether or not the container is dirty

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    bool IsDirty()

#### Returns [returns-3]

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

### ReadDelta(Stream, Boolean) [MLAPI_NetworkedVar_INetworkedVar_ReadDelta_System_IO_Stream_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters [parameters-2]

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

### ReadField(Stream) [MLAPI_NetworkedVar_INetworkedVar_ReadField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    void ReadField(Stream stream)

#### Parameters [parameters-3]

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| System.IO.Stream | stream | The stream to read the state from |

### ResetDirty() [MLAPI_NetworkedVar_INetworkedVar_ResetDirty]

<div class="markdown level1 summary" markdown="1">

Resets the dirty state and marks the variable as synced / clean

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    void ResetDirty()

### SetNetworkedBehaviour(NetworkedBehaviour) [MLAPI_NetworkedVar_INetworkedVar_SetNetworkedBehaviour_MLAPI_NetworkedBehaviour_]

<div class="markdown level1 summary" markdown="1">

Sets NetworkedBehaviour the container belongs to.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters [parameters-4]

| Type               | Name      | Description                            |
|--------------------|-----------|----------------------------------------|
| NetworkedBehaviour | behaviour | The behaviour the container behaves to |

### WriteDelta(Stream) [MLAPI_NetworkedVar_INetworkedVar_WriteDelta_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    void WriteDelta(Stream stream)

#### Parameters [parameters-5]

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| System.IO.Stream | stream | The stream to write the dirty changes to |

### WriteField(Stream) [MLAPI_NetworkedVar_INetworkedVar_WriteField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    void WriteField(Stream stream)

#### Parameters [parameters-6]

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the state to |
