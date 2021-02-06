---  
id: MLAPI.NetworkedVar.NetworkedVarSByte  
title: MLAPI.NetworkedVar.NetworkedVarSByte  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds sbytes and support serialization

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

NetworkedVar\<SByte\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.Value"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<SByte\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarSByte_syntax]

    [Serializable]
    public class NetworkedVarSByte : NetworkedVar<sbyte>, INetworkedVar

## Constructors 

### NetworkedVarSByte() [MLAPI_NetworkedVar_NetworkedVarSByte__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarSByte()

### NetworkedVarSByte(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarSByte__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarSByte(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarSByte(NetworkedVarSettings, SByte) [MLAPI_NetworkedVar_NetworkedVarSByte__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_SByte_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarSByte(NetworkedVarSettings settings, sbyte value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.SByte         | value    |             |

### NetworkedVarSByte(SByte) [MLAPI_NetworkedVar_NetworkedVarSByte__ctor_System_SByte_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarSByte(sbyte value)

#### Parameters [parameters-2]

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.SByte | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
