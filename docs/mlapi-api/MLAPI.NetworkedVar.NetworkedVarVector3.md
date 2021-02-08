---  
id: MLAPI.NetworkedVar.NetworkedVarVector3  
title: MLAPI.NetworkedVar.NetworkedVarVector3  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds vector3s and support serialization

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

NetworkedVar\<Vector3\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector3\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarVector3_syntax]

    [Serializable]
    public class NetworkedVarVector3 : NetworkedVar<Vector3>, INetworkedVar

## Constructors 

### NetworkedVarVector3() [MLAPI_NetworkedVar_NetworkedVarVector3__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarVector3()

### NetworkedVarVector3(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarVector3__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarVector3(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarVector3(NetworkedVarSettings, Vector3) [MLAPI_NetworkedVar_NetworkedVarVector3__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Vector3_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarVector3(NetworkedVarSettings settings, Vector3 value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Vector3  | value    |             |

### NetworkedVarVector3(Vector3) [MLAPI_NetworkedVar_NetworkedVarVector3__ctor_UnityEngine_Vector3_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarVector3(Vector3 value)

#### Parameters [parameters-2]

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector3 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
