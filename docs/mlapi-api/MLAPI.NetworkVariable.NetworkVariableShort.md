---  
id: MLAPI.NetworkVariable.NetworkVariableShort  
title: MLAPI.NetworkVariable.NetworkVariableShort  
---

<div class="markdown level0 summary">

A NetworkVariable that holds shorts and support serialization

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

NetworkVariable&lt;Int16&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Int16&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Int16&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Int16&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Int16&gt;.Value"

</div>

<div>

NetworkVariable&lt;Int16&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Int16&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Int16&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Int16&gt;.GetChannel()"

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
    public class NetworkVariableShort : NetworkVariable<short>, INetworkVariable

## Constructors 

### NetworkVariableShort()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableShort()

### NetworkVariableShort(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableShort(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableShort(NetworkVariableSettings, Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableShort(NetworkVariableSettings settings, short value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Int16            | value    |             |

### NetworkVariableShort(Int16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableShort(short value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int16 | value |             |

### Implements

<div>

INetworkVariable

</div>
