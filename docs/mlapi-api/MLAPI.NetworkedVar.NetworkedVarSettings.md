---

id: MLAPI.NetworkedVar.NetworkedVarSettings

title: MLAPI.NetworkedVar.NetworkedVarSettings

---

Class NetworkedVarSettings

<div class="markdown level0 summary" markdown="1">

The settings class used by the build in NetworkVar implementations

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

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

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

##### Syntax [MLAPI_NetworkedVar_NetworkedVarSettings_syntax]

    public class NetworkedVarSettings

## Constructors 

### NetworkedVarSettings() [MLAPI_NetworkedVar_NetworkedVarSettings__ctor]

<div class="markdown level1 summary" markdown="1">

Constructs a new NetworkedVarSettings instance

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedVarSettings()

## Fields

### ReadPermission [MLAPI_NetworkedVar_NetworkedVarSettings_ReadPermission]

<div class="markdown level1 summary" markdown="1">

Defines the read permissions for this var

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedVarPermission ReadPermission

#### Field Value [field-value]

| Type                   | Description |
|------------------------|-------------|
| NetworkedVarPermission |             |

### ReadPermissionCallback [MLAPI_NetworkedVar_NetworkedVarSettings_ReadPermissionCallback]

<div class="markdown level1 summary" markdown="1">

The delegate used to evaluate read permission when the "Custom" mode is
used

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedVarPermissionsDelegate ReadPermissionCallback

#### Field Value [field-value-1]

| Type                            | Description |
|---------------------------------|-------------|
| NetworkedVarPermissionsDelegate |             |

### SendChannel [MLAPI_NetworkedVar_NetworkedVarSettings_SendChannel]

<div class="markdown level1 summary" markdown="1">

The name of the channel to use for this variable. Variables with
different channels will be split into different packets

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public string SendChannel

#### Field Value [field-value-2]

| Type          | Description |
|---------------|-------------|
| System.String |             |

### SendTickrate [MLAPI_NetworkedVar_NetworkedVarSettings_SendTickrate]

<div class="markdown level1 summary" markdown="1">

The maximum times per second this var will be synced. A value of 0 will
cause the variable to sync as soon as possible after being changed. A
value of less than 0 will cause the variable to sync only at once at
spawn and not update again.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public float SendTickrate

#### Field Value [field-value-3]

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### WritePermission [MLAPI_NetworkedVar_NetworkedVarSettings_WritePermission]

<div class="markdown level1 summary" markdown="1">

Defines the write permissions for this var

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public NetworkedVarPermission WritePermission

#### Field Value [field-value-4]

| Type                   | Description |
|------------------------|-------------|
| NetworkedVarPermission |             |

### WritePermissionCallback [MLAPI_NetworkedVar_NetworkedVarSettings_WritePermissionCallback]

<div class="markdown level1 summary" markdown="1">

The delegate used to evaluate write permission when the "Custom" mode is
used

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public NetworkedVarPermissionsDelegate WritePermissionCallback

#### Field Value [field-value-5]

| Type                            | Description |
|---------------------------------|-------------|
| NetworkedVarPermissionsDelegate |             |
