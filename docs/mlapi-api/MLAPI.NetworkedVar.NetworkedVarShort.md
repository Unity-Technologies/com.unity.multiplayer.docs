---  
id: MLAPI.NetworkedVar.NetworkedVarShort  
title: MLAPI.NetworkedVar.NetworkedVarShort  
---

<div class="markdown level0 summary">

A NetworkedVar that holds shorts and support serialization

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

NetworkedVar&lt;Int16&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Int16&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Int16&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Int16&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Int16&gt;.Value"

</div>

<div>

NetworkedVar&lt;Int16&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Int16&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Int16&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Int16&gt;.GetChannel()"

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
    public class NetworkedVarShort : NetworkedVar<short>, INetworkedVar

## Constructors 

### NetworkedVarShort()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarShort()

### NetworkedVarShort(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarShort(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarShort(NetworkedVarSettings, Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarShort(NetworkedVarSettings settings, short value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Int16         | value    |             |

### NetworkedVarShort(Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarShort(short value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

### Implements

<div>

INetworkedVar

</div>
