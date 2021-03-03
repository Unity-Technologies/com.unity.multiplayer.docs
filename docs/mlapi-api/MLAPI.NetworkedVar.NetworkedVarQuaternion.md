---  
id: MLAPI.NetworkedVar.NetworkedVarQuaternion  
title: MLAPI.NetworkedVar.NetworkedVarQuaternion  
---

<div class="markdown level0 summary">

A NetworkedVar that holds quaternions and support serialization

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

NetworkedVar&lt;Quaternion&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.Value"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Quaternion&gt;.GetChannel()"

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
    public class NetworkedVarQuaternion : NetworkedVar<Quaternion>, INetworkedVar

## Constructors 

### NetworkedVarQuaternion()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarQuaternion()

### NetworkedVarQuaternion(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarQuaternion(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarQuaternion(NetworkedVarSettings, Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarQuaternion(NetworkedVarSettings settings, Quaternion value)

#### Parameters

| Type                   | Name     | Description |
|------------------------|----------|-------------|
| NetworkedVarSettings   | settings |             |
| UnityEngine.Quaternion | value    |             |

### NetworkedVarQuaternion(Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarQuaternion(Quaternion value)

#### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| UnityEngine.Quaternion | value |             |

### Implements

<div>

INetworkedVar

</div>
