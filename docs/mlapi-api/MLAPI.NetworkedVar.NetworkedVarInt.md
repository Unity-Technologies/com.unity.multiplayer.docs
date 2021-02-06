---

id: MLAPI.NetworkedVar.NetworkedVarInt

title: MLAPI.NetworkedVar.NetworkedVarInt

---

Class NetworkedVarInt

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds ints and support serialization

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

NetworkedVar\<Int32\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int32\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarInt_syntax]

    [Serializable]
    public class NetworkedVarInt : NetworkedVar<int>, INetworkedVar

## Constructors 

### NetworkedVarInt() [MLAPI_NetworkedVar_NetworkedVarInt__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarInt()

### NetworkedVarInt(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarInt__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarInt(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarInt(NetworkedVarSettings, Int32) [MLAPI_NetworkedVar_NetworkedVarInt__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarInt(NetworkedVarSettings settings, int value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Int32         | value    |             |

### NetworkedVarInt(Int32) [MLAPI_NetworkedVar_NetworkedVarInt__ctor_System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarInt(int value)

#### Parameters [parameters-2]

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
