---  
id: MLAPI.Serialization.AutoBitWritable  
title: MLAPI.Serialization.AutoBitWritable  
---

<div class="markdown level0 summary">

AutoBitWritable implements IBitWritable and automatically serializes
fields using reflection

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

</div>

<div classs="implements">

##### Implements

<div>

IBitWritable

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

    public abstract class AutoBitWritable : IBitWritable

## Methods 

### Read(Stream)

<div class="markdown level1 summary">

Reads the contents from the stream and applies it to the type instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public virtual void Read(Stream stream)

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

    public virtual void Write(Stream stream)

#### Parameters

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| System.IO.Stream | stream | The stream to write to |

### Implements

<div>

IBitWritable

</div>
