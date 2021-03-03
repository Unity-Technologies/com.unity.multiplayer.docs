---  
id: MLAPI.NetworkedVar.NetworkedVarUShort  
title: MLAPI.NetworkedVar.NetworkedVarUShort  
---

<div class="markdown level0 summary">

A NetworkedVar that holds ushorts and support serialization

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

NetworkedVar&lt;UInt16&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.Settings"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.Value"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;UInt16&gt;.GetChannel()"

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
    public class NetworkedVarUShort : NetworkedVar<ushort>, INetworkedVar

## Constructors 

### NetworkedVarUShort()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarUShort()

### NetworkedVarUShort(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarUShort(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarUShort(NetworkedVarSettings, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarUShort(NetworkedVarSettings settings, ushort value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.UInt16        | value    |             |

### NetworkedVarUShort(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarUShort(ushort value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

### Implements

<div>

INetworkedVar

</div>
