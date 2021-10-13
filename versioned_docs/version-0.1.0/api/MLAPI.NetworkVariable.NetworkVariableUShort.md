---  
id: MLAPI.NetworkVariable.NetworkVariableUShort  
title: MLAPI.NetworkVariable.NetworkVariableUShort
---

<div class="markdown level0 summary">

A NetworkVariable that holds ushorts and support serialization

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

NetworkVariable&lt;UInt16&gt;.Settings"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.Value"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;UInt16&gt;.GetChannel()"

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
    public class NetworkVariableUShort : NetworkVariable<ushort>, INetworkVariable

## Constructors 

### NetworkVariableUShort()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableUShort()

### NetworkVariableUShort(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableUShort(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableUShort(NetworkVariableSettings, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableUShort(NetworkVariableSettings settings, ushort value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.UInt16           | value    |             |

### NetworkVariableUShort(UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableUShort(ushort value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt16 | value |             |

### Implements

<div>

INetworkVariable

</div>
