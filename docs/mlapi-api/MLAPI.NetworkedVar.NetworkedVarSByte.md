---  
id: MLAPI.NetworkedVar.NetworkedVarSByte  
title: MLAPI.NetworkedVar.NetworkedVarSByte  
---

<div class="markdown level0 summary">

A NetworkedVar that holds sbytes and support serialization

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

NetworkedVar&lt;SByte&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;SByte&gt;.Settings"

</div>

<div>

NetworkedVar&lt;SByte&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;SByte&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;SByte&gt;.Value"

</div>

<div>

NetworkedVar&lt;SByte&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;SByte&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;SByte&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;SByte&gt;.GetChannel()"

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
    public class NetworkedVarSByte : NetworkedVar<sbyte>, INetworkedVar

## Constructors 

### NetworkedVarSByte()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarSByte()

### NetworkedVarSByte(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarSByte(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarSByte(NetworkedVarSettings, SByte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarSByte(NetworkedVarSettings settings, sbyte value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.SByte         | value    |             |

### NetworkedVarSByte(SByte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarSByte(sbyte value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.SByte | value |             |

### Implements

<div>

INetworkedVar

</div>
