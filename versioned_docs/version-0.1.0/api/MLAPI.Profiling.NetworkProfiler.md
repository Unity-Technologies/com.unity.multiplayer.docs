---  
id: MLAPI.Profiling.NetworkProfiler  
title: MLAPI.Profiling.NetworkProfiler
---

<div class="markdown level0 summary">

NetworkProfiler for profiling network traffic

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

    public static class NetworkProfiler

## Properties 

### IsRunning

<div class="markdown level1 summary">

Whether or not the profiler is recording data

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool IsRunning { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Ticks

<div class="markdown level1 summary">

The ticks that has been recorded

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static FixedQueue<ProfilerTick> Ticks { get; }

#### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| FixedQueue&lt;ProfilerTick&gt; |             |

## Methods 

### Start(Int32)

<div class="markdown level1 summary">

Starts recording data for the Profiler

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Start(int historyLength)

#### Parameters

| Type         | Name          | Description                           |
|--------------|---------------|---------------------------------------|
| System.Int32 | historyLength | The amount of ticks to keep in memory |

### Stop()

<div class="markdown level1 summary">

Stops recording data

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void Stop()

### Stop(ref ProfilerTick\[\])

<div class="markdown level1 summary">

Stops recording data and fills the buffer with the recorded ticks and
returns the length;

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int Stop(ref ProfilerTick[] tickBuffer)

#### Parameters

| Type             | Name       | Description                       |
|------------------|------------|-----------------------------------|
| ProfilerTick\[\] | tickBuffer | The buffer to fill with the ticks |

#### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of ticks recorded |

### Stop(ref List&lt;ProfilerTick&gt;)

<div class="markdown level1 summary">

Stops recording data and fills the buffer with the recorded ticks and
returns the length;

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int Stop(ref List<ProfilerTick> tickBuffer)

#### Parameters

| Type                                                | Name       | Description                       |
|-----------------------------------------------------|------------|-----------------------------------|
| System.Collections.Generic.List&lt;ProfilerTick&gt; | tickBuffer | The buffer to fill with the ticks |

#### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of ticks recorded |
