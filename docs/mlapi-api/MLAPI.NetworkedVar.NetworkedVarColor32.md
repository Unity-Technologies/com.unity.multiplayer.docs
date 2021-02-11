---  
id: MLAPI.NetworkedVar.NetworkedVarColor32  
title: MLAPI.NetworkedVar.NetworkedVarColor32  
---

<div class="markdown level0 summary">

A NetworkedVar that holds color32s and support serialization

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

NetworkedVar&lt;Color32&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Color32&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Color32&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Color32&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Color32&gt;.Value"

</div>

<div>

NetworkedVar&lt;Color32&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Color32&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Color32&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Color32&gt;.GetChannel()"

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
    public class NetworkedVarColor32 : NetworkedVar<Color32>, INetworkedVar

## Constructors 

### NetworkedVarColor32()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor32()

### NetworkedVarColor32(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor32(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarColor32(NetworkedVarSettings, Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor32(NetworkedVarSettings settings, Color32 value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Color32  | value    |             |

### NetworkedVarColor32(Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarColor32(Color32 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Color32 | value |             |

### Implements

<div>

INetworkedVar

</div>
