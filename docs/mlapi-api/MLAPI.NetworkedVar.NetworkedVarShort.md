---

id: MLAPI.NetworkedVar.NetworkedVarShort

title: MLAPI.NetworkedVar.NetworkedVarShort

---

Class NetworkedVarShort

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds shorts and support serialization

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

NetworkedVar\<Int16\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Int16\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarShort_syntax]

    [Serializable]
    public class NetworkedVarShort : NetworkedVar<short>, INetworkedVar

## Constructors <span id="MLAPI_NetworkedVar_NetworkedVarShort__ctor_"></span>

### NetworkedVarShort() [MLAPI_NetworkedVar_NetworkedVarShort__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarShort()

<span id="MLAPI_NetworkedVar_NetworkedVarShort__ctor_"></span>

### NetworkedVarShort(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarShort__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarShort(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name                                        | Description |
|----------------------|---------------------------------------------|-------------|
| NetworkedVarSettings | <span class="parametername">settings</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVarShort__ctor_"></span>

### NetworkedVarShort(NetworkedVarSettings, Int16) [MLAPI_NetworkedVar_NetworkedVarShort__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Int16_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarShort(NetworkedVarSettings settings, short value)

#### Parameters [parameters-1]

| Type                                   | Name                                        | Description |
|----------------------------------------|---------------------------------------------|-------------|
| NetworkedVarSettings                   | <span class="parametername">settings</span> |             |
| <span class="xref">System.Int16</span> | <span class="parametername">value</span>    |             |

<span id="MLAPI_NetworkedVar_NetworkedVarShort__ctor_"></span>

### NetworkedVarShort(Int16) [MLAPI_NetworkedVar_NetworkedVarShort__ctor_System_Int16_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarShort(short value)

#### Parameters [parameters-2]

| Type                                   | Name                                     | Description |
|----------------------------------------|------------------------------------------|-------------|
| <span class="xref">System.Int16</span> | <span class="parametername">value</span> |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
