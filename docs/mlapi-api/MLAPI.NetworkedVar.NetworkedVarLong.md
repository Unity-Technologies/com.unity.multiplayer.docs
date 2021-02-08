---  
id: MLAPI.NetworkedVar.NetworkedVarLong  
title: MLAPI.NetworkedVar.NetworkedVarLong  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds longs and support serialization

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

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

INetworkedVar

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

NetworkedVar\<Int64\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int64\>.GetChannel()"

</div>

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarLong_syntax]

    [Serializable]
    public class NetworkedVarLong : NetworkedVar<long>, INetworkedVar

## Constructors 

### NetworkedVarLong() [MLAPI_NetworkedVar_NetworkedVarLong__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarLong()

### NetworkedVarLong(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarLong__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarLong(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarLong(NetworkedVarSettings, Int64) [MLAPI_NetworkedVar_NetworkedVarLong__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Int64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarLong(NetworkedVarSettings settings, long value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Int64         | value    |             |

### NetworkedVarLong(Int64) [MLAPI_NetworkedVar_NetworkedVarLong__ctor_System_Int64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarLong(long value)

#### Parameters [parameters-2]

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
