---  
id: MLAPI.NetworkedVar.NetworkedVarRay  
title: MLAPI.NetworkedVar.NetworkedVarRay  
---

<div class="markdown level0 summary">

A NetworkedVar that holds rays and support serialization

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

NetworkedVar&lt;Ray&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Ray&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Ray&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Ray&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Ray&gt;.Value"

</div>

<div>

NetworkedVar&lt;Ray&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Ray&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Ray&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Ray&gt;.GetChannel()"

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
    public class NetworkedVarRay : NetworkedVar<Ray>, INetworkedVar

## Constructors 

### NetworkedVarRay()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarRay()

### NetworkedVarRay(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarRay(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarRay(NetworkedVarSettings, Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarRay(NetworkedVarSettings settings, Ray value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| UnityEngine.Ray      | value    |             |

### NetworkedVarRay(Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarRay(Ray value)

#### Parameters

| Type            | Name  | Description |
|-----------------|-------|-------------|
| UnityEngine.Ray | value |             |

### Implements

<div>

INetworkedVar

</div>
