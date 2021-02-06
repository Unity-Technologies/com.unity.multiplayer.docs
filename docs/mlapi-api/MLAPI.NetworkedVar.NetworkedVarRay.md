---

id: MLAPI.NetworkedVar.NetworkedVarRay

title: MLAPI.NetworkedVar.NetworkedVarRay

---

Class NetworkedVarRay

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds rays and support serialization

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

NetworkedVar\<Ray\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Ray\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarRay_syntax]

    [Serializable]
    public class NetworkedVarRay : NetworkedVar<Ray>, INetworkedVar

## Constructors 

### NetworkedVarRay() [MLAPI_NetworkedVar_NetworkedVarRay__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarRay()

### NetworkedVarRay(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarRay__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarRay(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarRay(NetworkedVarSettings, Ray) [MLAPI_NetworkedVar_NetworkedVarRay__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Ray_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarRay(NetworkedVarSettings settings, Ray value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Ray      | value    |             |

### NetworkedVarRay(Ray) [MLAPI_NetworkedVar_NetworkedVarRay__ctor_UnityEngine_Ray_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarRay(Ray value)

#### Parameters [parameters-2]

| Type            | Name  | Description |
|-----------------|-------|-------------|
| UnityEngine.Ray | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
