---  
id: MLAPI.NetworkedVar.NetworkedVarDouble  
title: MLAPI.NetworkedVar.NetworkedVarDouble  
---

<div class="markdown level0 summary">

A NetworkedVar that holds doubles and support serialization

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

NetworkedVar&lt;Double&gt;.isDirty"

</div>

<div>

NetworkedVar&lt;Double&gt;.Settings"

</div>

<div>

NetworkedVar&lt;Double&gt;.LastSyncedTime"

</div>

<div>

NetworkedVar&lt;Double&gt;.OnValueChanged"

</div>

<div>

NetworkedVar&lt;Double&gt;.Value"

</div>

<div>

NetworkedVar&lt;Double&gt;.ResetDirty()"

</div>

<div>

NetworkedVar&lt;Double&gt;.IsDirty()"

</div>

<div>

NetworkedVar&lt;Double&gt;.CanClientRead(UInt64)"

</div>

<div>

NetworkedVar&lt;Double&gt;.WriteDelta(Stream)"

</div>

<div>

NetworkedVar&lt;Double&gt;.CanClientWrite(UInt64)"

</div>

<div>

NetworkedVar&lt;Double&gt;.ReadDelta(Stream, Boolean)"

</div>

<div>

NetworkedVar&lt;Double&gt;.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div>

NetworkedVar&lt;Double&gt;.ReadField(Stream)"

</div>

<div>

NetworkedVar&lt;Double&gt;.WriteField(Stream)"

</div>

<div>

NetworkedVar&lt;Double&gt;.GetChannel()"

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
    public class NetworkedVarDouble : NetworkedVar<double>, INetworkedVar

## Constructors 

### NetworkedVarDouble()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarDouble()

### NetworkedVarDouble(NetworkedVarSettings)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarDouble(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarDouble(NetworkedVarSettings, Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarDouble(NetworkedVarSettings settings, double value)

#### Parameters

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Double        | value    |             |

### NetworkedVarDouble(Double)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarDouble(double value)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Double | value |             |

### Implements

<div>

INetworkedVar

</div>
