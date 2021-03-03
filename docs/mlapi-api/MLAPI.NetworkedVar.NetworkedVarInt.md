---  
id: MLAPI.NetworkedVar.NetworkedVarInt  
title: MLAPI.NetworkedVar.NetworkedVarInt  
---

<div class="markdown level0 summary">

A NetworkedVar that holds ints and support serialization

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

NetworkedVar&lt;Int32&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Int32&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Int32&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Int32&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Int32&gt;.Value"

</div>

<div>

NetworkedVar&lt;Int32&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Int32&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Int32&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Int32&gt;.GetChannel()"

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
    public class NetworkedVarInt : NetworkedVar<int>, INetworkedVar

## Constructors 

### NetworkedVarInt()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarInt()

### NetworkedVarInt(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarInt(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarInt(NetworkedVarSettings, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarInt(NetworkedVarSettings settings, int value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Int32         | value    |             |

### NetworkedVarInt(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarInt(int value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

### Implements

<div>

INetworkedVar

</div>
