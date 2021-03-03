---  
id: MLAPI.NetworkedVar.NetworkedVarFloat  
title: MLAPI.NetworkedVar.NetworkedVarFloat  
---

<div class="markdown level0 summary">

A NetworkedVar that holds floats and support serialization

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

NetworkedVar&lt;Single&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Single&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Single&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Single&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Single&gt;.Value"

</div>

<div>

NetworkedVar&lt;Single&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Single&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Single&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Single&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Single&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Single&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Single&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Single&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Single&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Single&gt;.GetChannel()"

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
    public class NetworkedVarFloat : NetworkedVar<float>, INetworkedVar

## Constructors 

### NetworkedVarFloat()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarFloat()

### NetworkedVarFloat(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarFloat(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarFloat(NetworkedVarSettings, Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarFloat(NetworkedVarSettings settings, float value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Single        | value    |             |

### NetworkedVarFloat(Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarFloat(float value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Single | value |             |

### Implements

<div>

INetworkedVar

</div>
