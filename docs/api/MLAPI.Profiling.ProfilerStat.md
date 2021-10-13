---  
id: MLAPI.Profiling.ProfilerStat  
title: MLAPI.Profiling.ProfilerStat  
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

<div class="level2">

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

    public class ProfilerStat

## Constructors 

### ProfilerStat(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ProfilerStat(string name)

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.String | name |             |

## Fields

### PrettyPrintName

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string PrettyPrintName

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

## Methods 

### Record(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public virtual void Record(int amt = 1)

#### Parameters

| Type         | Name | Description |
|--------------|------|-------------|
| System.Int32 | amt  |             |

### SampleRate()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public virtual float SampleRate()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |
