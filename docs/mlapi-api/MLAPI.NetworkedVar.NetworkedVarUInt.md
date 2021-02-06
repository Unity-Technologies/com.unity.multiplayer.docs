---

id: MLAPI.NetworkedVar.NetworkedVarUInt

title: MLAPI.NetworkedVar.NetworkedVarUInt

---

Class NetworkedVarUInt

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds uints and support serialization

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

NetworkedVar\<UInt32\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.Value"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<UInt32\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarUInt_syntax]

    [Serializable]
    public class NetworkedVarUInt : NetworkedVar<uint>, INetworkedVar

## Constructors 

### NetworkedVarUInt() [MLAPI_NetworkedVar_NetworkedVarUInt__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarUInt()

### NetworkedVarUInt(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarUInt__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarUInt(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarUInt(NetworkedVarSettings, UInt32) [MLAPI_NetworkedVar_NetworkedVarUInt__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_UInt32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarUInt(NetworkedVarSettings settings, uint value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.UInt32        | value    |             |

### NetworkedVarUInt(UInt32) [MLAPI_NetworkedVar_NetworkedVarUInt__ctor_System_UInt32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarUInt(uint value)

#### Parameters [parameters-2]

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
