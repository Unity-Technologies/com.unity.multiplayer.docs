---  
id: MLAPI.NetworkVariable.NetworkVariableVector4  
title: MLAPI.NetworkVariable.NetworkVariableVector4  
---

<div class="markdown level0 summary">

A NetworkVariable that holds vector4s and support serialization

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

NetworkVariable&lt;Vector4&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.Value"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Vector4&gt;.GetChannel()"

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
    public class NetworkVariableVector4 : NetworkVariable<Vector4>, INetworkVariable

## Constructors 

### NetworkVariableVector4()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector4()

### NetworkVariableVector4(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector4(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableVector4(NetworkVariableSettings, Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector4(NetworkVariableSettings settings, Vector4 value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| UnityEngine.Vector4     | value    |             |

### NetworkVariableVector4(Vector4)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableVector4(Vector4 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Vector4 | value |             |

### Implements

<div>

INetworkVariable

</div>
