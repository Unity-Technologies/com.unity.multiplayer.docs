---  
id: MLAPI.NetworkedVar.NetworkedVarVector4  
title: MLAPI.NetworkedVar.NetworkedVarVector4  
---

<div class="markdown level0 summary">

A NetworkedVar that holds vector4s and support serialization

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

NetworkedVar&lt;Vector4&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.Value"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Vector4&gt;.GetChannel()"

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
    public class NetworkedVarVector4 : NetworkedVar<Vector4>, INetworkedVar

## Constructors 

### NetworkedVarVector4()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector4()

### NetworkedVarVector4(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector4(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarVector4(NetworkedVarSettings, Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector4(NetworkedVarSettings settings, Vector4 value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Vector4  | value    |             |

### NetworkedVarVector4(Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector4(Vector4 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector4 | value |             |

### Implements

<div>

INetworkedVar

</div>
