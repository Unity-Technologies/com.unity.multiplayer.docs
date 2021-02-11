---  
id: MLAPI.Messaging.RpcResponseBase  
title: MLAPI.Messaging.RpcResponseBase  
---

<div class="markdown level0 summary">

Abstract base class for RpcResponse

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

    public abstract class RpcResponseBase

## Properties 

### ClientId

<div class="markdown level1 summary">

The clientId which the Request/Response was done wit

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ClientId { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Id

<div class="markdown level1 summary">

Unique ID for the Rpc Request and Response pair

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong Id { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### IsDone

<div class="markdown level1 summary">

Whether or not the operation is done. This does not mean it was
successful. Check IsSuccessful for that This will be true both when the
operation was successful and when a timeout occured

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDone { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsSuccessful

<div class="markdown level1 summary">

Whether or not a valid result was received

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsSuccessful { get; set; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Timeout

<div class="markdown level1 summary">

The amount of time to wait for the operation to complete

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float Timeout { get; set; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |
