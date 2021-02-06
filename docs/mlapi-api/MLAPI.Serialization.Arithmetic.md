---

id: MLAPI.Serialization.Arithmetic

title: MLAPI.Serialization.Arithmetic

---

Class Arithmetic

<div class="markdown level0 summary" markdown="1">

Arithmetic helper class

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

##### Syntax [MLAPI_Serialization_Arithmetic_syntax]

    public static class Arithmetic

## Methods <span id="MLAPI_Serialization_Arithmetic_VarIntSize_"></span>

### VarIntSize(UInt64) [MLAPI_Serialization_Arithmetic_VarIntSize_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Gets the output size in bytes after VarInting a unsigned integer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static int VarIntSize(ulong value)

#### Parameters [parameters]

| Type                                    | Name                                     | Description                              |
|-----------------------------------------|------------------------------------------|------------------------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">value</span> | The unsigned integer whose length to get |

#### Returns [returns]

| Type                                   | Description         |
|----------------------------------------|---------------------|
| <span class="xref">System.Int32</span> | The amount of bytes |

<span id="MLAPI_Serialization_Arithmetic_ZigZagDecode_"></span>

### ZigZagDecode(UInt64) [MLAPI_Serialization_Arithmetic_ZigZagDecode_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Decides a ZigZag encoded integer back to a signed integer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static long ZigZagDecode(ulong value)

#### Parameters [parameters-1]

| Type                                    | Name                                     | Description          |
|-----------------------------------------|------------------------------------------|----------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">value</span> | The unsigned integer |

#### Returns [returns-1]

| Type                                   | Description                       |
|----------------------------------------|-----------------------------------|
| <span class="xref">System.Int64</span> | The signed version of the integer |

<span id="MLAPI_Serialization_Arithmetic_ZigZagEncode_"></span>

### ZigZagEncode(Int64) [MLAPI_Serialization_Arithmetic_ZigZagEncode_System_Int64_]

<div class="markdown level1 summary" markdown="1">

ZigZag encodes a signed integer and maps it to a unsigned integer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static ulong ZigZagEncode(long value)

#### Parameters [parameters-2]

| Type                                   | Name                                     | Description                  |
|----------------------------------------|------------------------------------------|------------------------------|
| <span class="xref">System.Int64</span> | <span class="parametername">value</span> | The signed integer to encode |

#### Returns [returns-2]

| Type                                    | Description                             |
|-----------------------------------------|-----------------------------------------|
| <span class="xref">System.UInt64</span> | A ZigZag encoded version of the integer |
