---

id: MLAPI.NetworkedVar.NetworkedVarUShort

title: MLAPI.NetworkedVar.NetworkedVarUShort

---

Class NetworkedVarUShort

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds ushorts and support serialization

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

NetworkedVar\<UInt16\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.Value"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<UInt16\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarUShort_syntax]

    [Serializable]
    public class NetworkedVarUShort : NetworkedVar<ushort>, INetworkedVar

## Constructors 

### NetworkedVarUShort() [MLAPI_NetworkedVar_NetworkedVarUShort__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarUShort()

### NetworkedVarUShort(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarUShort__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarUShort(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarUShort(NetworkedVarSettings, UInt16) [MLAPI_NetworkedVar_NetworkedVarUShort__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_UInt16_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarUShort(NetworkedVarSettings settings, ushort value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.UInt16        | value    |             |

### NetworkedVarUShort(UInt16) [MLAPI_NetworkedVar_NetworkedVarUShort__ctor_System_UInt16_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarUShort(ushort value)

#### Parameters [parameters-2]

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
