---  
id: MLAPI.Messaging.RpcResponse-1  
title: MLAPI.Messaging.RpcResponse-1  
---

<div class="markdown level0 summary">

The RpcResponse class exposed by the API. Represents a network
Request/Response operation with a result

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

RpcResponseBase.Id

</div>

<div>

RpcResponseBase.IsDone

</div>

<div>

RpcResponseBase.IsSuccessful

</div>

<div>

RpcResponseBase.ClientId

</div>

<div>

RpcResponseBase.Timeout

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

    public class RpcResponse<T> : RpcResponseBase

##### Type Parameters

| Name | Description     |
|------|-----------------|
| T    | The result type |

## Properties 

### Value

<div class="markdown level1 summary">

Gets the return value of the operation

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public T Value { get; }

#### Property Value

| Type | Description |
|------|-------------|
| T    |             |
