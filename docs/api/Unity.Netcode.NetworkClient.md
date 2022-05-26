---  
id: Unity.Netcode.NetworkClient  
title: Unity.Netcode.NetworkClient  
---

<div class="markdown level0 summary">

A NetworkClient

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkClient

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

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NetworkClient
```

</div>

### Fields

#### ClientId

<div class="markdown level1 summary">

The ClientId of the NetworkClient

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong ClientId
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### PlayerObject

<div class="markdown level1 summary">

The PlayerObject of the Client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkObject PlayerObject
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| NetworkObject |             |

### Properties

#### OwnedObjects

<div class="markdown level1 summary">

The NetworkObject's owned by this Client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public List<NetworkObject> OwnedObjects { get; }
```

</div>

##### Property Value

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.List\<NetworkObject\> |             |

 
