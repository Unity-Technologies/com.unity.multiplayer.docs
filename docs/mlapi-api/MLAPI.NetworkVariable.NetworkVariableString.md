---  
id: MLAPI.NetworkVariable.NetworkVariableString  
title: MLAPI.NetworkVariable.NetworkVariableString  
---

<div class="markdown level0 summary">

A NetworkVariable that holds strings and support serialization

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

NetworkVariable&lt;String&gt;.Settings"

</div>

<div>

NetworkVariable&lt;String&gt;.LocalTick"

</div>

<div>

NetworkVariable&lt;String&gt;.RemoteTick"

</div>

<div>

NetworkVariable&lt;String&gt;.OnValueChanged"

</div>

<div>

NetworkVariable&lt;String&gt;.Value"

</div>

<div>

NetworkVariable&lt;String&gt;.SetDirty(Boolean)"

</div>

<div>

NetworkVariable&lt;String&gt;.IsDirty()"

</div>

<div>

NetworkVariable&lt;String&gt;.ResetDirty()"

</div>

<div>

NetworkVariable&lt;String&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkVariable&lt;String&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkVariable&lt;String&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkVariable&lt;String&gt;.ReadDelta(Stream, Boolean, UInt16,
UInt16)"

</div>

<div>

NetworkVariable&lt;String&gt;.SetNetworkBehaviour(NetworkBehaviour)"

</div>

<div>

NetworkVariable&lt;String&gt;.ReadField(Stream, UInt16, UInt16)"

</div>

<div>

NetworkVariable&lt;String&gt;.WriteField(Stream)"

</div>

<div>

NetworkVariable&lt;String&gt;.GetChannel()"

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
    public class NetworkVariableString : NetworkVariable<string>, INetworkVariable

## Constructors 

### NetworkVariableString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableString()

### NetworkVariableString(NetworkVariableSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableString(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |

### NetworkVariableString(NetworkVariableSettings, String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableString(NetworkVariableSettings settings, string value)

#### Parameters

| Type                    | Name     | Description |
|-------------------------|----------|-------------|
| NetworkVariableSettings | settings |             |
| System.String           | value    |             |

### NetworkVariableString(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkVariableString(string value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.String | value |             |

### Implements

<div>

INetworkVariable

</div>
