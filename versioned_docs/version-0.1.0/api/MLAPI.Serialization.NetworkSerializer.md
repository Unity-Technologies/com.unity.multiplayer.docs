---  
id: MLAPI.Serialization.NetworkSerializer  
title: MLAPI.Serialization.NetworkSerializer
---

<div class="markdown level0 summary">

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

    public sealed class NetworkSerializer

## Constructors 

### NetworkSerializer(NetworkReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkSerializer(NetworkReader reader)

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkReader | reader |             |

### NetworkSerializer(NetworkWriter)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkSerializer(NetworkWriter writer)

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkWriter | writer |             |

## Properties 

### IsReading

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsReading { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Reader

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkReader Reader { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkReader |             |

### Writer

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkWriter Writer { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkWriter |             |

## Methods 

### Serialize(ref Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref bool value)

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | value |             |

### Serialize(ref Boolean\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref bool[] array)

#### Parameters

| Type               | Name  | Description |
|--------------------|-------|-------------|
| System.Boolean\[\] | array |             |

### Serialize(ref Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref byte value)

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

### Serialize(ref Byte\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref byte[] array)

#### Parameters

| Type            | Name  | Description |
|-----------------|-------|-------------|
| System.Byte\[\] | array |             |

### Serialize(ref Char)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref char value)

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Char | value |             |

### Serialize(ref Char\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref char[] array)

#### Parameters

| Type            | Name  | Description |
|-----------------|-------|-------------|
| System.Char\[\] | array |             |

### Serialize(ref Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref double value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Double | value |             |

### Serialize(ref Double\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref double[] array)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| System.Double\[\] | array |             |

### Serialize(ref Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref short value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

### Serialize(ref Int16\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref short[] array)

#### Parameters

| Type             | Name  | Description |
|------------------|-------|-------------|
| System.Int16\[\] | array |             |

### Serialize(ref Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref int value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

### Serialize(ref Int32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref int[] array)

#### Parameters

| Type             | Name  | Description |
|------------------|-------|-------------|
| System.Int32\[\] | array |             |

### Serialize(ref Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref long value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

### Serialize(ref Int64\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref long[] array)

#### Parameters

| Type             | Name  | Description |
|------------------|-------|-------------|
| System.Int64\[\] | array |             |

### Serialize(ref SByte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref sbyte value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.SByte | value |             |

### Serialize(ref SByte\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref sbyte[] array)

#### Parameters

| Type             | Name  | Description |
|------------------|-------|-------------|
| System.SByte\[\] | array |             |

### Serialize(ref Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref float value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Single | value |             |

### Serialize(ref Single\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref float[] array)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| System.Single\[\] | array |             |

### Serialize(ref String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref string value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.String | value |             |

### Serialize(ref String\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref string[] array)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| System.String\[\] | array |             |

### Serialize(ref UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref ushort value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

### Serialize(ref UInt16\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref ushort[] array)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| System.UInt16\[\] | array |             |

### Serialize(ref UInt32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref uint value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

### Serialize(ref UInt32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref uint[] array)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| System.UInt32\[\] | array |             |

### Serialize(ref UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref ulong value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value |             |

### Serialize(ref UInt64\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref ulong[] array)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| System.UInt64\[\] | array |             |

### Serialize(ref Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Color value)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| UnityEngine.Color | value |             |

### Serialize(ref Color\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Color[] array)

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| UnityEngine.Color\[\] | array |             |

### Serialize(ref Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Color32 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Color32 | value |             |

### Serialize(ref Color32\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Color32[] array)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| UnityEngine.Color32\[\] | array |             |

### Serialize(ref Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Quaternion value)

#### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| UnityEngine.Quaternion | value |             |

### Serialize(ref Quaternion\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Quaternion[] array)

#### Parameters

| Type                       | Name  | Description |
|----------------------------|-------|-------------|
| UnityEngine.Quaternion\[\] | array |             |

### Serialize(ref Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Ray value)

#### Parameters

| Type            | Name  | Description |
|-----------------|-------|-------------|
| UnityEngine.Ray | value |             |

### Serialize(ref Ray\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Ray[] array)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Ray\[\] | array |             |

### Serialize(ref Ray2D)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Ray2D value)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| UnityEngine.Ray2D | value |             |

### Serialize(ref Ray2D\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Ray2D[] array)

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| UnityEngine.Ray2D\[\] | array |             |

### Serialize(ref Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Vector2 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector2 | value |             |

### Serialize(ref Vector2\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Vector2[] array)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| UnityEngine.Vector2\[\] | array |             |

### Serialize(ref Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Vector3 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector3 | value |             |

### Serialize(ref Vector3\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Vector3[] array)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| UnityEngine.Vector3\[\] | array |             |

### Serialize(ref Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Vector4 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector4 | value |             |

### Serialize(ref Vector4\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize(ref Vector4[] array)

#### Parameters

| Type                    | Name  | Description |
|-------------------------|-------|-------------|
| UnityEngine.Vector4\[\] | array |             |

### Serialize&lt;TEnum&gt;(ref TEnum)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize<TEnum>(ref TEnum value)
        where TEnum : struct, Enum

#### Parameters

| Type  | Name  | Description |
|-------|-------|-------------|
| TEnum | value |             |

#### Type Parameters

| Name  | Description |
|-------|-------------|
| TEnum |             |

### Serialize&lt;TEnum&gt;(ref TEnum\[\])

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Serialize<TEnum>(ref TEnum[] array)
        where TEnum : struct, Enum

#### Parameters

| Type      | Name  | Description |
|-----------|-------|-------------|
| TEnum\[\] | array |             |

#### Type Parameters

| Name  | Description |
|-------|-------------|
| TEnum |             |
