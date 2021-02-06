---  
id: MLAPI.NetworkedVar.NetworkedVarBool  
title: MLAPI.NetworkedVar.NetworkedVarBool  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds bools and support serialization

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

NetworkedVar\<Boolean\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Boolean\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarBool_syntax]

    [Serializable]
    public class NetworkedVarBool : NetworkedVar<bool>, INetworkedVar

## Constructors 

### NetworkedVarBool() [MLAPI_NetworkedVar_NetworkedVarBool__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarBool()

### NetworkedVarBool(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarBool__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarBool(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarBool(NetworkedVarSettings, Boolean) [MLAPI_NetworkedVar_NetworkedVarBool__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarBool(NetworkedVarSettings settings, bool value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Boolean       | value    |             |

### NetworkedVarBool(Boolean) [MLAPI_NetworkedVar_NetworkedVarBool__ctor_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarBool(bool value)

#### Parameters [parameters-2]

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
