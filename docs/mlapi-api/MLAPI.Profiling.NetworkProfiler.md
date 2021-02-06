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

## Properties 

### IsRunning [MLAPI_Profiling_NetworkProfiler_IsRunning]

<div class="markdown level1 summary" markdown="1">

Whether or not the profiler is recording data

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static bool IsRunning { get; }

#### Property Value [property-value]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

## Methods 

### Start(Int32) [MLAPI_Profiling_NetworkProfiler_Start_System_Int32_]

<div class="markdown level1 summary" markdown="1">

Starts recording data for the Profiler

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static void Start(int historyLength)

#### Parameters [parameters]

| Type         | Name          | Description                           |
|--------------|---------------|---------------------------------------|
| System.Int32 | historyLength | The amount of ticks to keep in memory |

### Stop() [MLAPI_Profiling_NetworkProfiler_Stop]

<div class="markdown level1 summary" markdown="1">

Stops recording data

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static void Stop()

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

| Type             | Name       | Description                       |
|------------------|------------|-----------------------------------|
| ProfilerTick\[\] | tickBuffer | The buffer to fill with the ticks |

#### Returns [returns]

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of ticks recorded |

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

| Type                                            | Name       | Description                       |
|-------------------------------------------------|------------|-----------------------------------|
| System.Collections.Generic.List\<ProfilerTick\> | tickBuffer | The buffer to fill with the ticks |

#### Returns [returns-1]

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of ticks recorded |
