---  
id: MLAPI.NetworkedVar.NetworkedVarVector2  
title: MLAPI.NetworkedVar.NetworkedVarVector2  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds vector2s and support serialization

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

NetworkedVar\<Vector2\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Vector2\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarVector2_syntax]

    [Serializable]
    public class NetworkedVarVector2 : NetworkedVar<Vector2>, INetworkedVar

## Constructors 

### NetworkedVarVector2() [MLAPI_NetworkedVar_NetworkedVarVector2__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarVector2()

### NetworkedVarVector2(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarVector2__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarVector2(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarVector2(NetworkedVarSettings, Vector2) [MLAPI_NetworkedVar_NetworkedVarVector2__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_UnityEngine_Vector2_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarVector2(NetworkedVarSettings settings, Vector2 value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Vector2  | value    |             |

### NetworkedVarVector2(Vector2) [MLAPI_NetworkedVar_NetworkedVarVector2__ctor_UnityEngine_Vector2_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarVector2(Vector2 value)

#### Parameters [parameters-2]

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector2 | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
