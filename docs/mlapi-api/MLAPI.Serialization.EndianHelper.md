---

id: MLAPI.Serialization.EndianHelper

title: MLAPI.Serialization.EndianHelper

---

Class EndianHelper

<div class="markdown level0 summary" markdown="1">

Binary helper class

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

##### Syntax [MLAPI_Serialization_EndianHelper_syntax]

    public static class EndianHelper

## Methods <span id="MLAPI_Serialization_EndianHelper_SwapEndian_"></span>

### SwapEndian(UInt32) [MLAPI_Serialization_EndianHelper_SwapEndian_System_UInt32_]

<div class="markdown level1 summary" markdown="1">

Swaps the endianness of a given integer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static uint SwapEndian(uint value)

#### Parameters [parameters]

| Type                                    | Name                                     | Description                   |
|-----------------------------------------|------------------------------------------|-------------------------------|
| <span class="xref">System.UInt32</span> | <span class="parametername">value</span> | The integer to swap endianess |

#### Returns [returns]

| Type                                    | Description                         |
|-----------------------------------------|-------------------------------------|
| <span class="xref">System.UInt32</span> | The integer with swapped endianness |

<span id="MLAPI_Serialization_EndianHelper_SwapEndian_"></span>

### SwapEndian(UInt64) [MLAPI_Serialization_EndianHelper_SwapEndian_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

Swaps the endianness of a given integer

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static ulong SwapEndian(ulong value)

#### Parameters [parameters-1]

| Type                                    | Name                                     | Description                   |
|-----------------------------------------|------------------------------------------|-------------------------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">value</span> | The integer to swap endianess |

#### Returns [returns-1]

| Type                                    | Description                         |
|-----------------------------------------|-------------------------------------|
| <span class="xref">System.UInt64</span> | The integer with swapped endianness |
