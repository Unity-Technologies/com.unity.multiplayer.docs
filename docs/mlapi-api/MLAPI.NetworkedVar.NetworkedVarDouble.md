---  
id: MLAPI.NetworkedVar.NetworkedVarDouble  
title: MLAPI.NetworkedVar.NetworkedVarDouble  
---

<div class="markdown level0 summary" markdown="1">

A NetworkedVar that holds doubles and support serialization

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level2" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

INetworkedVar

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

NetworkedVar\<Double\>.isDirty"

</div>

<div markdown="1">

NetworkedVar\<Double\>.Settings"

</div>

<div markdown="1">

NetworkedVar\<Double\>.LastSyncedTime"

</div>

<div markdown="1">

NetworkedVar\<Double\>.OnValueChanged"

</div>

<div markdown="1">

NetworkedVar\<Double\>.Value"

</div>

<div markdown="1">

NetworkedVar\<Double\>.ResetDirty()"

</div>

<div markdown="1">

NetworkedVar\<Double\>.IsDirty()"

</div>

<div markdown="1">

NetworkedVar\<Double\>.CanClientRead(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.WriteDelta(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.CanClientWrite(UInt64)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.ReadDelta(Stream, Boolean)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.SetNetworkedBehaviour(NetworkedBehaviour)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.ReadField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.WriteField(Stream)"

</div>

<div markdown="1">

NetworkedVar\<Double\>.GetChannel()"

</div>

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_NetworkedVar_NetworkedVarDouble_syntax]

    [Serializable]
    public class NetworkedVarDouble : NetworkedVar<double>, INetworkedVar

## Constructors 

### NetworkedVarDouble() [MLAPI_NetworkedVar_NetworkedVarDouble__ctor]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarDouble()

### NetworkedVarDouble(NetworkedVarSettings) [MLAPI_NetworkedVar_NetworkedVarDouble__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarDouble(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |

### NetworkedVarDouble(NetworkedVarSettings, Double) [MLAPI_NetworkedVar_NetworkedVarDouble__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Double_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarDouble(NetworkedVarSettings settings, double value)

#### Parameters [parameters-1]

| Type                 | Name     | Description |
|----------------------|----------|-------------|
| NetworkedVarSettings | settings |             |
| System.Double        | value    |             |

### NetworkedVarDouble(Double) [MLAPI_NetworkedVar_NetworkedVarDouble__ctor_System_Double_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedVarDouble(double value)

#### Parameters [parameters-2]

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Double | value |             |

### Implements [implements]

<div markdown="1">

INetworkedVar

</div>
