---  
id: MLAPI.NetworkedVar.NetworkedVarString  
title: MLAPI.NetworkedVar.NetworkedVarString  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds strings and support serialization

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

NetworkedVar\<String\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<String\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<String\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<String\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<String\>.Value"

</div>

<div markdown="1">

NetworkedVar\<String\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<String\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<String\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<String\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<String\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<String\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<String\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<String\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<String\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<String\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarString_syntax]

    [Serializable]
    public class NetworkedVarString : NetworkedVar<string>, INetworkedVar

## Constructors 

### NetworkedVarString() [MLAPI_NetworkedVar_NetworkedVarString__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarString()

### NetworkedVarString(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarString__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarString(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarString(NetworkedVarSettings, String) [MLAPI_NetworkedVar_NetworkedVarString__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_String_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarString(NetworkedVarSettings settings, string value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.String        | value    |             |

### NetworkedVarString(String) [MLAPI_NetworkedVar_NetworkedVarString__ctor_System_String_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarString(string value)

#### Parameters [parameters-2]

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.String | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
