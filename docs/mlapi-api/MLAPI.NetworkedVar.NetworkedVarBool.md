---  
id: MLAPI.NetworkedVar.NetworkedVarBool  
title: MLAPI.NetworkedVar.NetworkedVarBool  
---

<div class="markdown level0 summary">

A NetworkedVar that holds bools and support serialization

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

NetworkedVar&lt;Boolean&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.Value"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Boolean&gt;.GetChannel()"

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
    public class NetworkedVarBool : NetworkedVar<bool>, INetworkedVar

## Constructors 

### NetworkedVarBool()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarBool()

### NetworkedVarBool(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarBool(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarBool(NetworkedVarSettings, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarBool(NetworkedVarSettings settings, bool value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Boolean       | value    |             |

### NetworkedVarBool(Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarBool(bool value)

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | value |             |

### Implements

<div>

INetworkedVar

</div>
