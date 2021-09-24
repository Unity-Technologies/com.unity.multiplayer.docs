---  
id: Unity.Networking.Transport.NetworkPipelineStage.SendDelegate  
title: Unity.Networking.Transport.NetworkPipelineStage.SendDelegate  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate int SendDelegate(ref NetworkPipelineContext ctx, ref InboundSendBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests);

##### Parameters

| Type                          | Name            | Description |
|-------------------------------|-----------------|-------------|
| NetworkPipelineContext        | \*ctx           |             |
| InboundSendBuffer             | \*inboundBuffer |             |
| NetworkPipelineStage.Requests | \*requests      |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
