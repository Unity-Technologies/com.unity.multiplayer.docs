---  
id: MLAPI.NetworkedVar.NetworkedVarULong  
title: MLAPI.NetworkedVar.NetworkedVarULong  
---

<div class="markdown level0 summary">

A NetworkedVar that holds ulongs and support serialization

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

NetworkedVar&lt;UInt64&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.Settings"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.Value"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;UInt64&gt;.GetChannel()"

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
    public class NetworkedVarULong : NetworkedVar<ulong>, INetworkedVar

## Constructors 

### NetworkedVarULong()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarULong()

### NetworkedVarULong(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarULong(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarULong(NetworkedVarSettings, UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarULong(NetworkedVarSettings settings, ulong value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.UInt64        | value    |             |

### NetworkedVarULong(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarULong(ulong value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value |             |

### Implements

<div>

INetworkedVar

</div>
