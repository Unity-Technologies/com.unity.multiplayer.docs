---  
id: MLAPI.RuntimeTests.RpcQueueTests  
title: MLAPI.RuntimeTests.RpcQueueTests
---

<div class="markdown level0 summary">

The RpcQueue unit tests to validate:

-   Sending and Receiving pipeline to validate that both sending and
    receiving pipelines are functioning properly.
-   Usage of the ServerRpcParams.Send.UpdateStage and
    ClientRpcParams.Send.UpdateStage functionality.
-   Rpcs receive will be invoked at the appropriate NetworkUpdateStage.
    Requires: RpcPipelineTestComponent

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

    public class RpcQueueTests

## Methods 

### RpcQueueUnitTest()

<div class="markdown level1 summary">

Tests the egress and ingress RPC queue functionality \*\* This does not
include any of the MLAPI to Transport code \*\*

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public IEnumerator RpcQueueUnitTest()

#### Returns

| Type                           | Description |
|--------------------------------|-------------|
| System.Collections.IEnumerator | IEnumerator |
