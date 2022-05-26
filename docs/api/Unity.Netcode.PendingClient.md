---  
id: Unity.Netcode.PendingClient  
title: Unity.Netcode.PendingClient  
---

<div class="markdown level0 summary">

A class representing a client that is currently in the process of
connecting

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

PendingClient

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
public class PendingClient
```

</div>

### Properties

#### ClientId

<div class="markdown level1 summary">

The ClientId of the client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public ulong ClientId { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

#### ConnectionState

<div class="markdown level1 summary">

The state of the connection process for the client

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public PendingClient.State ConnectionState { get; }
```

</div>

##### Property Value

| Type                | Description |
|---------------------|-------------|
| PendingClient.State |             |

 
