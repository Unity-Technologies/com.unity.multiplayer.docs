---

id: MLAPI.Profiling.NetworkProfiler

title: MLAPI.Profiling.NetworkProfiler

---

Class NetworkProfiler

<div class="markdown level0 summary" markdown="1">

NetworkProfiler for profiling network traffic

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

##### Syntax [MLAPI_Profiling_NetworkProfiler_syntax]

    public static class NetworkProfiler

## Properties <span id="MLAPI_Profiling_NetworkProfiler_IsRunning_"></span>

### IsRunning [MLAPI_Profiling_NetworkProfiler_IsRunning]

<div class="markdown level1 summary" markdown="1">

Whether or not the profiler is recording data

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static bool IsRunning { get; }

#### Property Value [property-value]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_Profiling_NetworkProfiler_Ticks_"></span>

### Ticks [MLAPI_Profiling_NetworkProfiler_Ticks]

<div class="markdown level1 summary" markdown="1">

The ticks that has been recorded

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static FixedQueue<ProfilerTick> Ticks { get; }

#### Property Value [property-value-1]

| Type                       | Description |
|----------------------------|-------------|
| FixedQueue\<ProfilerTick\> |             |

## Methods <span id="MLAPI_Profiling_NetworkProfiler_Start_"></span>

### Start(Int32) [MLAPI_Profiling_NetworkProfiler_Start_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Starts recording data for the Profiler

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static void Start(int historyLength)

#### Parameters [parameters]

| Type                                   | Name                                             | Description                           |
|----------------------------------------|--------------------------------------------------|---------------------------------------|
| <span class="xref">System.Int32</span> | <span class="parametername">historyLength</span> | The amount of ticks to keep in memory |

<span id="MLAPI_Profiling_NetworkProfiler_Stop_"></span>

### Stop() [MLAPI_Profiling_NetworkProfiler_Stop]

<div class="markdown level1 summary" markdown="1">

Stops recording data

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static void Stop()

<span id="MLAPI_Profiling_NetworkProfiler_Stop_"></span>

### Stop(ref ProfilerTick\[\]) [MLAPI_Profiling_NetworkProfiler_Stop_MLAPI_Profiling_ProfilerTick____]

<div class="markdown level1 summary" markdown="1">

Stops recording data and fills the buffer with the recorded ticks and
returns the length;

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public static int Stop(ref ProfilerTick[] tickBuffer)

#### Parameters [parameters-1]

| Type             | Name                                          | Description                       |
|------------------|-----------------------------------------------|-----------------------------------|
| ProfilerTick\[\] | <span class="parametername">tickBuffer</span> | The buffer to fill with the ticks |

#### Returns [returns]

| Type                                   | Description                  |
|----------------------------------------|------------------------------|
| <span class="xref">System.Int32</span> | The number of ticks recorded |

<span id="MLAPI_Profiling_NetworkProfiler_Stop_"></span>

### Stop(ref List\<ProfilerTick\>) [MLAPI_Profiling_NetworkProfiler_Stop_System_Collections_Generic_List_MLAPI_Profiling_ProfilerTick___]

<div class="markdown level1 summary" markdown="1">

Stops recording data and fills the buffer with the recorded ticks and
returns the length;

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public static int Stop(ref List<ProfilerTick> tickBuffer)

#### Parameters [parameters-2]

| Type                                                                      | Name                                          | Description                       |
|---------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------|
| <span class="xref">System.Collections.Generic.List</span>\<ProfilerTick\> | <span class="parametername">tickBuffer</span> | The buffer to fill with the ticks |

#### Returns [returns-1]

| Type                                   | Description                  |
|----------------------------------------|------------------------------|
| <span class="xref">System.Int32</span> | The number of ticks recorded |
