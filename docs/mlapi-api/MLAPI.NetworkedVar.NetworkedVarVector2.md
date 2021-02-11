---  
id: MLAPI.NetworkedVar.NetworkedVarVector2  
title: MLAPI.NetworkedVar.NetworkedVarVector2  
---

<div class="markdown level0 summary">

A NetworkedVar that holds vector2s and support serialization

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

NetworkedVar&lt;Vector2&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.Value"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Vector2&gt;.GetChannel()"

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
    public class NetworkedVarVector2 : NetworkedVar<Vector2>, INetworkedVar

## Constructors 

### NetworkedVarVector2()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector2()

### NetworkedVarVector2(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector2(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarVector2(NetworkedVarSettings, Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector2(NetworkedVarSettings settings, Vector2 value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Vector2  | value    |             |

### NetworkedVarVector2(Vector2)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector2(Vector2 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector2 | value |             |

### Implements

<div>

INetworkedVar

</div>
