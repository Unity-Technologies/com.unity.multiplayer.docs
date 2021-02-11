---  
id: MLAPI.NetworkedVar.NetworkedVarColor  
title: MLAPI.NetworkedVar.NetworkedVarColor  
---

<div class="markdown level0 summary">

A NetworkedVar that holds colors and support serialization

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

NetworkedVar&lt;Color&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Color&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Color&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Color&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Color&gt;.Value"

</div>

<div>

NetworkedVar&lt;Color&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Color&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Color&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Color&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Color&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Color&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Color&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Color&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Color&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Color&gt;.GetChannel()"

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
    public class NetworkedVarColor : NetworkedVar<Color>, INetworkedVar

## Constructors 

### NetworkedVarColor()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor()

### NetworkedVarColor(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarColor(NetworkedVarSettings, Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor(NetworkedVarSettings settings, Color value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Color    | value    |             |

### NetworkedVarColor(Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor(Color value)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| UnityEngine.Color | value |             |

### Implements

<div>

INetworkedVar

</div>
