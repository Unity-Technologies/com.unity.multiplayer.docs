---
id: Unity.Netcode.NetworkManager.ConnectionApprovalResponse
title: Unity.Netcode.NetworkManager.ConnectionApprovalResponse
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Class NetworkManager.ConnectionApprovalResponse

<div class="markdown level0 summary">

Connection Approval Response

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkManager.ConnectionApprovalResponse

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class ConnectionApprovalResponse
```

</div>

### Fields

#### Approved

<div class="markdown level1 summary">

Whether or not the client was approved

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Approved
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### CreatePlayerObject

<div class="markdown level1 summary">

If true, a player object will be created. Otherwise the client will have
no object.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool CreatePlayerObject
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Pending

<div class="markdown level1 summary">

If the Approval decision cannot be made immediately, the client code can
set Pending to true, keep a reference to the ConnectionApprovalResponse
object and write to it later. Client code must exercise care to setting
all the members to the value it wants before marking Pending to false,
to indicate completion. If the field is set as Pending = true, we'll
monitor the object until it gets set to not pending anymore and use the
parameters then.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Pending
```

</div>

##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### PlayerPrefabHash

<div class="markdown level1 summary">

The prefabHash to use for the client. If createPlayerObject is false,
this is ignored. If playerPrefabHash is null, the default player prefab
is used.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public uint? PlayerPrefabHash
```

</div>

##### Field Value

| Type                             | Description |
|----------------------------------|-------------|
| System.Nullable\<System.UInt32\> |             |

#### Position

<div class="markdown level1 summary">

The position to spawn the client at. If null, the prefab position is
used.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public Vector3? Position
```

</div>

##### Field Value

| Type                       | Description |
|----------------------------|-------------|
| System.Nullable\<Vector3\> |             |

#### Rotation

<div class="markdown level1 summary">

The rotation to spawn the client with. If null, the prefab position is
used.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public Quaternion? Rotation
```

</div>

##### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| System.Nullable\<Quaternion\> |             |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
