---  
id: MLAPI.NetworkVariable.NetworkVariableBool  
title: MLAPI.NetworkVariable.NetworkVariableBool
---

<div class="markdown level0 summary">

A NetworkVariable that holds bools and support serialization

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

NetworkVariable&lt;Boolean&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.Value"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Boolean&gt;.GetChannel()"

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
    public class NetworkVariableBool : NetworkVariable<bool>, INetworkVariable

## Constructors 

### NetworkVariableBool()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableBool()

### NetworkVariableBool(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableBool(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableBool(NetworkVariableSettings, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableBool(NetworkVariableSettings settings, bool value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Boolean          | value    |             |

### NetworkVariableBool(Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableBool(bool value)

#### Parameters

| Type           | Name  | Description |
|----------------|-------|-------------|
| System.Boolean | value |             |

### Implements

<div>

INetworkVariable

</div>
