---  
id: MLAPI.Serialization.IBitWritable  
title: MLAPI.Serialization.IBitWritable  
---

<div class="markdown level0 summary">

Interface for serializable classes and structs

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public interface IBitWritable

## Methods 

### Read(Stream)

<div class="markdown level1 summary">

Reads the contents from the stream and applies it to the type instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void Read(Stream stream)

#### Parameters

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

### Write(Stream)

<div class="markdown level1 summary">

Writes the contents of the type instance to the stream

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    void Write(Stream stream)

#### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| System.IO.Stream | stream | The stream to write to |
