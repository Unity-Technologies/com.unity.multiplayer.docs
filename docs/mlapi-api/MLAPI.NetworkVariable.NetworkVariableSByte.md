---  
id: MLAPI.NetworkVariable.NetworkVariableSByte  
title: MLAPI.NetworkVariable.NetworkVariableSByte  
---

<div class="markdown level0 summary">

A NetworkVariable that holds sbytes and support serialization

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

NetworkVariable&lt;SByte&gt;.Settings"

</div>

<div>

NetworkVariable&lt;SByte&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;SByte&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;SByte&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;SByte&gt;.Value"

</div>

<div>

NetworkVariable&lt;SByte&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;SByte&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;SByte&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;SByte&gt;.GetChannel()"

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
    public class NetworkVariableSByte : NetworkVariable<sbyte>, INetworkVariable

## Constructors 

### NetworkVariableSByte()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableSByte()

### NetworkVariableSByte(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableSByte(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableSByte(NetworkVariableSettings, SByte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableSByte(NetworkVariableSettings settings, sbyte value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.SByte            | value    |             |

### NetworkVariableSByte(SByte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableSByte(sbyte value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.SByte | value |             |

### Implements

<div>

INetworkVariable

</div>
