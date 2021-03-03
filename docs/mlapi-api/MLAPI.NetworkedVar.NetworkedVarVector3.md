---  
id: MLAPI.NetworkedVar.NetworkedVarVector3  
title: MLAPI.NetworkedVar.NetworkedVarVector3  
---

<div class="markdown level0 summary">

A NetworkedVar that holds vector3s and support serialization

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

NetworkedVar&lt;Vector3&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.Value"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Vector3&gt;.GetChannel()"

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
    public class NetworkedVarVector3 : NetworkedVar<Vector3>, INetworkedVar

## Constructors 

### NetworkedVarVector3()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector3()

### NetworkedVarVector3(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector3(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarVector3(NetworkedVarSettings, Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector3(NetworkedVarSettings settings, Vector3 value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Vector3  | value    |             |

### NetworkedVarVector3(Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarVector3(Vector3 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector3 | value |             |

### Implements

<div>

INetworkedVar

</div>
