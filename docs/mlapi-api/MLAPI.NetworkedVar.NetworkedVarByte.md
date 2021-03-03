---  
id: MLAPI.NetworkedVar.NetworkedVarByte  
title: MLAPI.NetworkedVar.NetworkedVarByte  
---

<div class="markdown level0 summary">

A NetworkedVar that holds bytes and support serialization

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkedVar

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkedVar&lt;Byte&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Byte&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Byte&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Byte&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Byte&gt;.Value"

</div>

<div>

NetworkedVar&lt;Byte&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Byte&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Byte&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Byte&gt;.GetChannel()"

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    [Serializable]
    public class NetworkedVarByte : NetworkedVar<byte>, INetworkedVar

## Constructors 

### NetworkedVarByte()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarByte()

### NetworkedVarByte(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarByte(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarByte(NetworkedVarSettings, Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarByte(NetworkedVarSettings settings, byte value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Byte          | value    |             |

### NetworkedVarByte(Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarByte(byte value)

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

### Implements

<div>

INetworkedVar

</div>
