---  
id: MLAPI.Profiling.ProfilerIncStat  
title: MLAPI.Profiling.ProfilerIncStat  
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

ProfilerStat.PrettyPrintName

</div>

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

    public class ProfilerIncStat : ProfilerStat

## Constructors 

### ProfilerIncStat(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ProfilerIncStat(string name)

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.String | name |             |

## Methods 

### Record(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override void Record(int amt = 1)

#### Parameters

| Type         | Name | Description |
|--------------|------|-------------|
| System.Int32 | amt  |             |

#### Overrides

<div>

ProfilerStat.Record(Int32)

</div>

### SampleRate()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override float SampleRate()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.Single |             |

#### Overrides

<div>

ProfilerStat.SampleRate()

</div>
