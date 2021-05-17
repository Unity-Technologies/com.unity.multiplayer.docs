---  
id: MLAPI.Profiling.ProfilingDataStore  
title: MLAPI.Profiling.ProfilingDataStore
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

    public class ProfilingDataStore

## Methods 

### Add(String, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Add(string fieldName, int value)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | fieldName |             |
| System.Int32  | value     |             |

### Clear()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Clear()

### GetData(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int GetData(string fieldName)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | fieldName |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### GetReadonly()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public IReadOnlyDictionary<string, int> GetReadonly()

#### Returns

| Type                                                   | Description |
|--------------------------------------------------------|-------------|
| IReadOnlyDictionary&lt;System.String, System.Int32&gt; |             |

### HasData(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool HasData(string fieldName)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | fieldName |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Increment(String, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Increment(string fieldName, int count = 1)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | fieldName |             |
| System.Int32  | count     |             |
