---  
id: MLAPI.NetworkVariable.NetworkVariableFloat  
title: MLAPI.NetworkVariable.NetworkVariableFloat  
---

<div class="markdown level0 summary">

A NetworkVariable that holds floats and support serialization

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

NetworkVariable&lt;Single&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Single&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Single&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Single&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Single&gt;.Value"

</div>

<div>

NetworkVariable&lt;Single&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Single&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Single&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Single&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Single&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Single&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Single&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Single&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Single&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Single&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Single&gt;.GetChannel()"

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
    public class NetworkVariableFloat : NetworkVariable<float>, INetworkVariable

## Constructors 

### NetworkVariableFloat()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableFloat()

### NetworkVariableFloat(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableFloat(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableFloat(NetworkVariableSettings, Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableFloat(NetworkVariableSettings settings, float value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Single           | value    |             |

### NetworkVariableFloat(Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableFloat(float value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Single | value |             |

### Implements

<div>

INetworkVariable

</div>
