---  
id: MLAPI.NetworkVariable.NetworkVariableQuaternion  
title: MLAPI.NetworkVariable.NetworkVariableQuaternion
---

<div class="markdown level0 summary">

A NetworkVariable that holds quaternions and support serialization

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

NetworkVariable&lt;Quaternion&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.Value"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Quaternion&gt;.GetChannel()"

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
    public class NetworkVariableQuaternion : NetworkVariable<Quaternion>, INetworkVariable

## Constructors 

### NetworkVariableQuaternion()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableQuaternion()

### NetworkVariableQuaternion(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableQuaternion(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableQuaternion(NetworkVariableSettings, Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableQuaternion(NetworkVariableSettings settings, Quaternion value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| UnityEngine.Quaternion  | value    |             |

### NetworkVariableQuaternion(Quaternion)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableQuaternion(Quaternion value)

#### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| UnityEngine.Quaternion | value |             |

### Implements

<div>

INetworkVariable

</div>
