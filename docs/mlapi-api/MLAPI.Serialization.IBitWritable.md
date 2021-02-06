---

id: MLAPI.Serialization.IBitWritable

title: MLAPI.Serialization.IBitWritable

---

Interface IBitWritable

<div class="markdown level0 summary" markdown="1">

Interface for serializable classes and structs

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_IBitWritable_syntax]

    public interface IBitWritable

## Methods 

### Read(Stream) [MLAPI_Serialization_IBitWritable_Read_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Reads the contents from the stream and applies it to the type instance

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    void Read(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

### Write(Stream) [MLAPI_Serialization_IBitWritable_Write_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the contents of the type instance to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    void Write(Stream stream)

#### Parameters [parameters-1]

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| System.IO.Stream | stream | The stream to write to |
