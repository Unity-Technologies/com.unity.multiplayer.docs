---  
id: MLAPI.Messaging.RpcResponseBase  
title: MLAPI.Messaging.RpcResponseBase  
---

<div class="markdown level0 summary" markdown="1">

Abstract base class for RpcResponse

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

##### Syntax [MLAPI_Messaging_RpcResponseBase_syntax]

    public abstract class RpcResponseBase

## Properties 

### ClientId [MLAPI_Messaging_RpcResponseBase_ClientId]

<div class="markdown level1 summary" markdown="1">

The clientId which the Request/Response was done wit

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public ulong ClientId { get; }

#### Property Value [property-value]

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### Id [MLAPI_Messaging_RpcResponseBase_Id]

<div class="markdown level1 summary" markdown="1">

Unique ID for the Rpc Request and Response pair

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public ulong Id { get; }

#### Property Value [property-value-1]

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### IsDone [MLAPI_Messaging_RpcResponseBase_IsDone]

<div class="markdown level1 summary" markdown="1">

Whether or not the operation is done. This does not mean it was
successful. Check IsSuccessful for that This will be true both when the
operation was successful and when a timeout occured

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public bool IsDone { get; }

#### Property Value [property-value-2]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsSuccessful [MLAPI_Messaging_RpcResponseBase_IsSuccessful]

<div class="markdown level1 summary" markdown="1">

Whether or not a valid result was received

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public bool IsSuccessful { get; set; }

#### Property Value [property-value-3]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Timeout [MLAPI_Messaging_RpcResponseBase_Timeout]

<div class="markdown level1 summary" markdown="1">

The amount of time to wait for the operation to complete

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public float Timeout { get; set; }

#### Property Value [property-value-4]

| Type          | Description |
|---------------|-------------|
| System.Single |             |
