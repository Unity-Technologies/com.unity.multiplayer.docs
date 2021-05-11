---  
id: MLAPI.NetworkVariable.NetworkVariableVector3  
title: MLAPI.NetworkVariable.NetworkVariableVector3  
---

<div class="markdown level0 summary">

A NetworkVariable that holds vector3s and support serialization

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

NetworkVariable&lt;Vector3&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.Value"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Vector3&gt;.GetChannel()"

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
    public class NetworkVariableVector3 : NetworkVariable<Vector3>, INetworkVariable

## Constructors 

### NetworkVariableVector3()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector3()

### NetworkVariableVector3(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector3(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableVector3(NetworkVariableSettings, Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector3(NetworkVariableSettings settings, Vector3 value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| UnityEngine.Vector3     | value    |             |

### NetworkVariableVector3(Vector3)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector3(Vector3 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector3 | value |             |

### Implements

<div>

INetworkVariable

</div>
