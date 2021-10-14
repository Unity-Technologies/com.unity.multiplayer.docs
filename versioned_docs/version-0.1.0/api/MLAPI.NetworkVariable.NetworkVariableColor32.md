---  
id: MLAPI.NetworkVariable.NetworkVariableColor32  
title: MLAPI.NetworkVariable.NetworkVariableColor32
---

<div class="markdown level0 summary">

A NetworkVariable that holds color32s and support serialization

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

NetworkVariable&lt;Color32&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Color32&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Color32&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Color32&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Color32&gt;.Value"

</div>

<div>

NetworkVariable&lt;Color32&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Color32&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Color32&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Color32&gt;.GetChannel()"

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
    public class NetworkVariableColor32 : NetworkVariable<Color32>, INetworkVariable

## Constructors 

### NetworkVariableColor32()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor32()

### NetworkVariableColor32(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor32(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableColor32(NetworkVariableSettings, Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor32(NetworkVariableSettings settings, Color32 value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| UnityEngine.Color32     | value    |             |

### NetworkVariableColor32(Color32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor32(Color32 value)

#### Parameters

| Type                | Name  | Description |
|---------------------|-------|-------------|
| UnityEngine.Color32 | value |             |

### Implements

<div>

INetworkVariable

</div>
