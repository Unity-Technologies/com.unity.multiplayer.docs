---  
id: MLAPI.NetworkVariable.NetworkVariableByte  
title: MLAPI.NetworkVariable.NetworkVariableByte
---

<div class="markdown level0 summary">

A NetworkVariable that holds bytes and support serialization

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

NetworkVariable&lt;Byte&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Byte&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Byte&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Byte&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Byte&gt;.Value"

</div>

<div>

NetworkVariable&lt;Byte&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Byte&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Byte&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Byte&gt;.GetChannel()"

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
    public class NetworkVariableByte : NetworkVariable<byte>, INetworkVariable

## Constructors 

### NetworkVariableByte()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableByte()

### NetworkVariableByte(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableByte(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableByte(NetworkVariableSettings, Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableByte(NetworkVariableSettings settings, byte value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Byte             | value    |             |

### NetworkVariableByte(Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableByte(byte value)

#### Parameters

| Type        | Name  | Description |
|-------------|-------|-------------|
| System.Byte | value |             |

### Implements

<div>

INetworkVariable

</div>
