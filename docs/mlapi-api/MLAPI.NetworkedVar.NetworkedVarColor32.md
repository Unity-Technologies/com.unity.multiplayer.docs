---

id: MLAPI.NetworkedVar.NetworkedVarColor32

title: MLAPI.NetworkedVar.NetworkedVarColor32

---

Class NetworkedVarColor32

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds color32s and support serialization

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

NetworkedVar\<Color32\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Color32\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarColor32_syntax]

    [Serializable]
    public class NetworkedVarColor32 : NetworkedVar<Color32>, INetworkedVar

## Constructors 

### NetworkedVarColor32() [MLAPI_NetworkedVar_NetworkedVarColor32__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarColor32()

### NetworkedVarColor32(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarColor32__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarColor32(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarColor32(NetworkedVarSettings, Color32) [MLAPI_NetworkedVar_NetworkedVarColor32__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Color32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarColor32(NetworkedVarSettings settings, Color32 value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Color32  | value    |             |

### NetworkedVarColor32(Color32) [MLAPI_NetworkedVar_NetworkedVarColor32__ctor_UnityEngine_Color32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarColor32(Color32 value)

#### Parameters [parameters-2]

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Color32 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
