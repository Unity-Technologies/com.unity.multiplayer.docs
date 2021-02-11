---  
id: MLAPI.NetworkedVar.NetworkedVarLong  
title: MLAPI.NetworkedVar.NetworkedVarLong  
---

<div class="markdown level0 summary">

A NetworkedVar that holds longs and support serialization

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

NetworkedVar&lt;Int64&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Int64&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Int64&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Int64&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Int64&gt;.Value"

</div>

<div>

NetworkedVar&lt;Int64&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Int64&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Int64&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Int64&gt;.GetChannel()"

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
    public class NetworkedVarLong : NetworkedVar<long>, INetworkedVar

## Constructors 

### NetworkedVarLong()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarLong()

### NetworkedVarLong(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarLong(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarLong(NetworkedVarSettings, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarLong(NetworkedVarSettings settings, long value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Int64         | value    |             |

### NetworkedVarLong(Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarLong(long value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

### Implements

<div>

INetworkedVar

</div>
