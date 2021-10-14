---  
id: MLAPI.NetworkVariable.NetworkVariableColor  
title: MLAPI.NetworkVariable.NetworkVariableColor
---

<div class="markdown level0 summary">

A NetworkVariable that holds colors and support serialization

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

NetworkVariable&lt;Color&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Color&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Color&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Color&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Color&gt;.Value"

</div>

<div>

NetworkVariable&lt;Color&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Color&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Color&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Color&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Color&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Color&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Color&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Color&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Color&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Color&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Color&gt;.GetChannel()"

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
    public class NetworkVariableColor : NetworkVariable<Color>, INetworkVariable

## Constructors 

### NetworkVariableColor()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor()

### NetworkVariableColor(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableColor(NetworkVariableSettings, Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor(NetworkVariableSettings settings, Color value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| UnityEngine.Color       | value    |             |

### NetworkVariableColor(Color)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableColor(Color value)

#### Parameters

| Type              | Name  | Description |
|-------------------|-------|-------------|
| UnityEngine.Color | value |             |

### Implements

<div>

INetworkVariable

</div>
