---  
id: MLAPI.NetworkVariable.NetworkVariableLong  
title: MLAPI.NetworkVariable.NetworkVariableLong
---

<div class="markdown level0 summary">

A NetworkVariable that holds longs and support serialization

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

NetworkVariable&lt;Int64&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Int64&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Int64&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Int64&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Int64&gt;.Value"

</div>

<div>

NetworkVariable&lt;Int64&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Int64&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Int64&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.ReadDelta(Stream, Boolean, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Int64&gt;.GetChannel()"

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
    public class NetworkVariableLong : NetworkVariable<long>, INetworkVariable

## Constructors 

### NetworkVariableLong()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableLong()

### NetworkVariableLong(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableLong(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableLong(NetworkVariableSettings, Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableLong(NetworkVariableSettings settings, long value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Int64            | value    |             |

### NetworkVariableLong(Int64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableLong(long value)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int64 | value |             |

### Implements

<div>

INetworkVariable

</div>
