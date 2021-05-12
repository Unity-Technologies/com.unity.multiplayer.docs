---  
id: MLAPI.RuntimeTests  
title: MLAPI.RuntimeTests
---

## Namespace MLAPI.RuntimeTests

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### MLAPI.RuntimeTests.NetworkUpdateLoopTests

<div class="section">

</div>

### MLAPI.RuntimeTests.RpcPipelineTestComponent

<div class="section">

Used in conjunction with the RpcQueueTest to validate:

-   Sending and Receiving pipeline to validate that both sending and
    receiving pipelines are functioning properly.
-   Usage of the ServerRpcParams.Send.UpdateStage and
    ClientRpcParams.Send.UpdateStage functionality.
-   Rpcs receive will be invoked at the appropriate NetworkUpdateStage.

</div>

### MLAPI.RuntimeTests.RpcQueueTests

<div class="section">

The RpcQueue unit tests to validate:

-   Sending and Receiving pipeline to validate that both sending and
    receiving pipelines are functioning properly.
-   Usage of the ServerRpcParams.Send.UpdateStage and
    ClientRpcParams.Send.UpdateStage functionality.
-   Rpcs receive will be invoked at the appropriate NetworkUpdateStage.
    Requires: RpcPipelineTestComponent

</div>

### MLAPI.RuntimeTests.TickSystemTests

<div class="section">

</div>
