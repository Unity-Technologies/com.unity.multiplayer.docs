---  
id: MLAPI.Profiling.ProfilerNotifier  
title: MLAPI.Profiling.ProfilerNotifier  
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

    public static class ProfilerNotifier

## Methods 

### Increment(String, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Increment(string fieldName, int count = 1)

#### Parameters

| Type          | Name      | Description |
|---------------|-----------|-------------|
| System.String | fieldName |             |
| System.Int32  | count     |             |

### Initialize(IProfilableTransportProvider)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Initialize(IProfilableTransportProvider profilableNetwork)

#### Parameters

| Type                         | Name              | Description |
|------------------------------|-------------------|-------------|
| IProfilableTransportProvider | profilableNetwork |             |

### NotifyProfilerListeners()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void NotifyProfilerListeners()

### ProfilerBeginTick()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void ProfilerBeginTick()

## Events

### OnNoTickDataEvent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static event ProfilerNotifier.NoTickDataHandler OnNoTickDataEvent

#### Event Type

| Type                               | Description |
|------------------------------------|-------------|
| ProfilerNotifier.NoTickDataHandler |             |

### OnPerformanceDataEvent

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static event ProfilerNotifier.PerformanceDataEventHandler OnPerformanceDataEvent

#### Event Type

| Type                                         | Description |
|----------------------------------------------|-------------|
| ProfilerNotifier.PerformanceDataEventHandler |             |
