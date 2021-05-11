---  
id: MLAPI.NetworkVariable.NetworkVariableInt  
title: MLAPI.NetworkVariable.NetworkVariableInt  
---

<div class="markdown level0 summary">

A NetworkVariable that holds ints and support serialization

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

NetworkVariable&lt;Int32&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Int32&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Int32&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Int32&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Int32&gt;.Value"

</div>

<div>

NetworkVariable&lt;Int32&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Int32&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Int32&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Int32&gt;.GetChannel()"

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
    public class NetworkVariableInt : NetworkVariable<int>, INetworkVariable

## Constructors 

### NetworkVariableInt()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableInt()

### NetworkVariableInt(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableInt(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableInt(NetworkVariableSettings, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableInt(NetworkVariableSettings settings, int value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Int32            | value    |             |

### NetworkVariableInt(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableInt(int value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | value |             |

### Implements

<div>

INetworkVariable

</div>
