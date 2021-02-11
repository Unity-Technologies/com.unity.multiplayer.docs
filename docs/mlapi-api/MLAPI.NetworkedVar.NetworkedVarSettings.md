---  
id: MLAPI.NetworkedVar.NetworkedVarSettings  
title: MLAPI.NetworkedVar.NetworkedVarSettings  
---

<div class="markdown level0 summary">

The settings class used by the build in NetworkVar implementations

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

</div>

<div class="inheritedMembers">

##### Inherited Members

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

    public class NetworkedVarSettings

## Constructors 

### NetworkedVarSettings()

<div class="markdown level1 summary">

Constructs a new NetworkedVarSettings instance

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarSettings()

## Fields

### ReadPermission

<div class="markdown level1 summary">

Defines the read permissions for this var

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarPermission ReadPermission

#### Field Value

| Type                   | Description |
|------------------------|-------------|
| NetworkedVarPermission |             |

### ReadPermissionCallback

<div class="markdown level1 summary">

The delegate used to evaluate read permission when the "Custom" mode is
used

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarPermissionsDelegate ReadPermissionCallback

#### Field Value

| Type                            | Description |
|---------------------------------|-------------|
| NetworkedVarPermissionsDelegate |             |

### SendChannel

<div class="markdown level1 summary">

The name of the channel to use for this variable. Variables with
different channels will be split into different packets

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string SendChannel

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### SendTickrate

<div class="markdown level1 summary">

The maximum times per second this var will be synced. A value of 0 will
cause the variable to sync as soon as possible after being changed. A
value of less than 0 will cause the variable to sync only at once at
spawn and not update again.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float SendTickrate

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### WritePermission

<div class="markdown level1 summary">

Defines the write permissions for this var

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarPermission WritePermission

#### Field Value

| Type                   | Description |
|------------------------|-------------|
| NetworkedVarPermission |             |

### WritePermissionCallback

<div class="markdown level1 summary">

The delegate used to evaluate write permission when the "Custom" mode is
used

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedVarPermissionsDelegate WritePermissionCallback

#### Field Value

| Type                            | Description |
|---------------------------------|-------------|
| NetworkedVarPermissionsDelegate |             |
