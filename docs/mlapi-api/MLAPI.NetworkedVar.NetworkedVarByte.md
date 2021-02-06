---

id: MLAPI.NetworkedVar.NetworkedVarByte

title: MLAPI.NetworkedVar.NetworkedVarByte

---

Class NetworkedVarByte

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds bytes and support serialization

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

NetworkedVar\<Byte\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Byte\>.GetChannel()"

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarByte_syntax]

    [Serializable]
    public class NetworkedVarByte : NetworkedVar<byte>, INetworkedVar

## Constructors <span id="MLAPI_NetworkedVar_NetworkedVarByte__ctor_"></span>

### NetworkedVarByte() [MLAPI_NetworkedVar_NetworkedVarByte__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarByte()

<span id="MLAPI_NetworkedVar_NetworkedVarByte__ctor_"></span>

### NetworkedVarByte(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarByte__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarByte(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name                                        | Description |
|----------------------|---------------------------------------------|-------------|
| NetworkedVarSettings | <span class="parametername">settings</span> |             |

<span id="MLAPI_NetworkedVar_NetworkedVarByte__ctor_"></span>

### NetworkedVarByte(NetworkedVarSettings, Byte) [MLAPI_NetworkedVar_NetworkedVarByte__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Byte_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarByte(NetworkedVarSettings settings, byte value)

#### Parameters [parameters-1]

| Type                                  | Name                                        | Description |
|---------------------------------------|---------------------------------------------|-------------|
| NetworkedVarSettings                  | <span class="parametername">settings</span> |             |
| <span class="xref">System.Byte</span> | <span class="parametername">value</span>    |             |

<span id="MLAPI_NetworkedVar_NetworkedVarByte__ctor_"></span>

### NetworkedVarByte(Byte) [MLAPI_NetworkedVar_NetworkedVarByte__ctor_System_Byte_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarByte(byte value)

#### Parameters [parameters-2]

| Type                                  | Name                                     | Description |
|---------------------------------------|------------------------------------------|-------------|
| <span class="xref">System.Byte</span> | <span class="parametername">value</span> |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
