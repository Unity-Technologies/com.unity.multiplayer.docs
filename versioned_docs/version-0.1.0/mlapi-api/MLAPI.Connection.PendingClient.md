---  
id: MLAPI.Connection.PendingClient
title: MLAPI.Connection.PendingClient
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

    public class PendingClient

## Fields

### ClientId

<div class="markdown level1 summary">

The ClientId of the client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ClientId

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ConnectionState

<div class="markdown level1 summary">

The state of the connection process for the client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public PendingClient.State ConnectionState

#### Field Value

| Type                | Description |
|---------------------|-------------|
| PendingClient.State |             |
