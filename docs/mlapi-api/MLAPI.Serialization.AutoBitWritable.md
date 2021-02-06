---

id: MLAPI.Serialization.AutoBitWritable

title: MLAPI.Serialization.AutoBitWritable

---

Class AutoBitWritable

<div class="markdown level0 summary" markdown="1">

AutoBitWritable implements IBitWritable and automatically serializes
fields using reflection

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

IBitWritable

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_AutoBitWritable_syntax]

    public abstract class AutoBitWritable : IBitWritable

## Methods 

### Read(Stream) [MLAPI_Serialization_AutoBitWritable_Read_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Reads the contents from the stream and applies it to the type instance

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public virtual void Read(Stream stream)

#### Parameters [parameters]

| Type             | Name   | Description             |
|------------------|--------|-------------------------|
| System.IO.Stream | stream | The stream to read from |

### Write(Stream) [MLAPI_Serialization_AutoBitWritable_Write_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

Writes the contents of the type instance to the stream

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public virtual void Write(Stream stream)

#### Parameters [parameters-1]

| Type             | Name   | Description            |
|------------------|--------|------------------------|
| System.IO.Stream | stream | The stream to write to |

### Implements [implements]

<div markdown="1">

IBitWritable

</div>
