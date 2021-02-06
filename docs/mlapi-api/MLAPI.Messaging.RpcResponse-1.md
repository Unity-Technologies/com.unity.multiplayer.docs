---

id: MLAPI.Messaging.RpcResponse-1

title: MLAPI.Messaging.RpcResponse-1

---

Class RpcResponse\<T\>

<div class="markdown level0 summary" markdown="1">

The RpcResponse class exposed by the API. Represents a network
Request/Response operation with a result

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

RpcResponseBase.Id

</div>

<div markdown="1">

RpcResponseBase.IsDone

</div>

<div markdown="1">

RpcResponseBase.IsSuccessful

</div>

<div markdown="1">

RpcResponseBase.ClientId

</div>

<div markdown="1">

RpcResponseBase.Timeout

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

##### Syntax [MLAPI_Messaging_RpcResponse_1_syntax]

    public class RpcResponse<T> : RpcResponseBase

##### Type Parameters [type-parameters]

| Name | Description     |
|------|-----------------|
| T    | The result type |

## Properties 

### Value [MLAPI_Messaging_RpcResponse_1_Value]

<div class="markdown level1 summary" markdown="1">

Gets the return value of the operation

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public T Value { get; }

#### Property Value [property-value]

| Type | Description |
|------|-------------|
| T    |             |
