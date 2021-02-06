---

id: MLAPI.NetworkedVar.NetworkedVarColor

title: MLAPI.NetworkedVar.NetworkedVarColor

---

Class NetworkedVarColor

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds colors and support serialization

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

NetworkedVar\<Color\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Color\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Color\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Color\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Color\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Color\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Color\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Color\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Color\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarColor_syntax]

    [Serializable]
    public class NetworkedVarColor : NetworkedVar<Color>, INetworkedVar

## Constructors <span id="MLAPI_NetworkedVar_NetworkedVarColor__ctor_"></span>

### NetworkedVarColor() [MLAPI_NetworkedVar_NetworkedVarColor__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarColor()

<span id="MLAPI_NetworkedVar_NetworkedVarColor__ctor_"></span>

### NetworkedVarColor(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarColor__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarColor(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name                                        | Description |
|----------------------|---------------------------------------------|-------------|
| NetworkedVarSettings | <span class="parametername">settings</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVarColor__ctor_"></span>

### NetworkedVarColor(NetworkedVarSettings, Color) [MLAPI_NetworkedVar_NetworkedVarColor__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Color_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarColor(NetworkedVarSettings settings, Color value)

#### Parameters [parameters-1]

| Type                                        | Name                                        | Description |
|---------------------------------------------|---------------------------------------------|-------------|
| NetworkedVarSettings                        | <span class="parametername">settings</span> |             |
| <span class="xref">UnityEngine.Color</span> | <span class="parametername">value</span>    |             |

<span id="MLAPI_NetworkedVar_NetworkedVarColor__ctor_"></span>

### NetworkedVarColor(Color) [MLAPI_NetworkedVar_NetworkedVarColor__ctor_UnityEngine_Color_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarColor(Color value)

#### Parameters [parameters-2]

| Type                                        | Name                                     | Description |
|---------------------------------------------|------------------------------------------|-------------|
| <span class="xref">UnityEngine.Color</span> | <span class="parametername">value</span> |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
