---

id: MLAPI.NetworkedVar.NetworkedVarVector4

title: MLAPI.NetworkedVar.NetworkedVarVector4

---

Class NetworkedVarVector4

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds vector4s and support serialization

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

NetworkedVar\<Vector4\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector4\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarVector4_syntax]

    [Serializable]
    public class NetworkedVarVector4 : NetworkedVar<Vector4>, INetworkedVar

## Constructors <span id="MLAPI_NetworkedVar_NetworkedVarVector4__ctor_"></span>

### NetworkedVarVector4() [MLAPI_NetworkedVar_NetworkedVarVector4__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarVector4()

<span id="MLAPI_NetworkedVar_NetworkedVarVector4__ctor_"></span>

### NetworkedVarVector4(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarVector4__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarVector4(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name                                        | Description |
|----------------------|---------------------------------------------|-------------|
| NetworkedVarSettings | <span class="parametername">settings</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVarVector4__ctor_"></span>

### NetworkedVarVector4(NetworkedVarSettings, Vector4) [MLAPI_NetworkedVar_NetworkedVarVector4__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Vector4_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarVector4(NetworkedVarSettings settings, Vector4 value)

#### Parameters [parameters-1]

| Type                                          | Name                                        | Description |
|-----------------------------------------------|---------------------------------------------|-------------|
| NetworkedVarSettings                          | <span class="parametername">settings</span> |             |
| <span class="xref">UnityEngine.Vector4</span> | <span class="parametername">value</span>    |             |

<span id="MLAPI_NetworkedVar_NetworkedVarVector4__ctor_"></span>

### NetworkedVarVector4(Vector4) [MLAPI_NetworkedVar_NetworkedVarVector4__ctor_UnityEngine_Vector4_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarVector4(Vector4 value)

#### Parameters [parameters-2]

| Type                                          | Name                                     | Description |
|-----------------------------------------------|------------------------------------------|-------------|
| <span class="xref">UnityEngine.Vector4</span> | <span class="parametername">value</span> |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
