---  
id: MLAPI.NetworkedVar.NetworkedVarQuaternion  
title: MLAPI.NetworkedVar.NetworkedVarQuaternion  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds quaternions and support serialization

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

NetworkedVar\<Quaternion\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Quaternion\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarQuaternion_syntax]

    [Serializable]
    public class NetworkedVarQuaternion : NetworkedVar<Quaternion>, INetworkedVar

## Constructors 

### NetworkedVarQuaternion() [MLAPI_NetworkedVar_NetworkedVarQuaternion__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarQuaternion()

### NetworkedVarQuaternion(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarQuaternion__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarQuaternion(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarQuaternion(NetworkedVarSettings, Quaternion) [MLAPI_NetworkedVar_NetworkedVarQuaternion__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Quaternion_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarQuaternion(NetworkedVarSettings settings, Quaternion value)

#### Parameters [parameters-1]

| Type                   | Name     | Description |
|------------------------|----------|-------------|
| NetworkedVarSettings   | settings |             |
| UnityEngine.Quaternion | value    |             |

### NetworkedVarQuaternion(Quaternion) [MLAPI_NetworkedVar_NetworkedVarQuaternion__ctor_UnityEngine_Quaternion_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarQuaternion(Quaternion value)

#### Parameters [parameters-2]

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| UnityEngine.Quaternion | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
