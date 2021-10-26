---  
id: MLAPI.NetworkVariable.NetworkVariableDouble  
title: MLAPI.NetworkVariable.NetworkVariableDouble
---

<div class="markdown level0 summary">

A NetworkVariable that holds doubles and support serialization

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

NetworkVariable&lt;Double&gt;.Settings"

</div>

<div>

NetworkVariable&lt;Double&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;Double&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;Double&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;Double&gt;.Value"

</div>

<div>

NetworkVariable&lt;Double&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;Double&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;Double&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;Double&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;Double&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;Double&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;Double&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;Double&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;Double&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;Double&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;Double&gt;.GetChannel()"

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
    public class NetworkVariableDouble : NetworkVariable<double>, INetworkVariable

## Constructors 

### NetworkVariableDouble()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableDouble()

### NetworkVariableDouble(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableDouble(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableDouble(NetworkVariableSettings, Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableDouble(NetworkVariableSettings settings, double value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.Double           | value    |             |

### NetworkVariableDouble(Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableDouble(double value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Double | value |             |

### Implements

<div>

INetworkVariable

</div>
