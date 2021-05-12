---  
id: MLAPI.NetworkVariable.NetworkVariableRay  
title: MLAPI.NetworkVariable.NetworkVariableRay  
---

<div class="markdown level0 summary">

A NetworkVariable that holds rays and support serialization

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

INetworkVariable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkVariable&lt;Ray&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Ray&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Ray&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Ray&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Ray&gt;.Value"

</div>

<div>

NetworkVariable&lt;Ray&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Ray&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Ray&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Ray&gt;.GetChannel()"

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
    public class NetworkVariableRay : NetworkVariable<Ray>, INetworkVariable

## Constructors 

### NetworkVariableRay()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableRay()

### NetworkVariableRay(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableRay(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableRay(NetworkVariableSettings, Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableRay(NetworkVariableSettings settings, Ray value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| UnityEngine.Ray         | value    |             |

### NetworkVariableRay(Ray)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableRay(Ray value)

#### Parameters

| Type            | Name  | Description |
|-----------------|-------|-------------|
| UnityEngine.Ray | value |             |

### Implements

<div>

INetworkVariable

</div>
