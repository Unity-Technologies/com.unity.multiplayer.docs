---  
id: MLAPI.NetworkedVar.NetworkedVarString  
title: MLAPI.NetworkedVar.NetworkedVarString  
---

<div class="markdown level0 summary">

A NetworkedVar that holds strings and support serialization

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

INetworkedVar

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkedVar&lt;String&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;String&gt;.Settings"

</div>

<div>

NetworkedVar&lt;String&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;String&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;String&gt;.Value"

</div>

<div>

NetworkedVar&lt;String&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;String&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;String&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;String&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;String&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;String&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;String&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;String&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;String&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;String&gt;.GetChannel()"

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
    public class NetworkedVarString : NetworkedVar<string>, INetworkedVar

## Constructors 

### NetworkedVarString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarString()

### NetworkedVarString(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarString(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarString(NetworkedVarSettings, String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarString(NetworkedVarSettings settings, string value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.String        | value    |             |

### NetworkedVarString(String)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarString(string value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.String | value |             |

### Implements

<div>

INetworkedVar

</div>
