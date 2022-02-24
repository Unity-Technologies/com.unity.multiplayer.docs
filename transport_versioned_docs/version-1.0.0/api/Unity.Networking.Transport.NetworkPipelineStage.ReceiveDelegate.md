---  
id: Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate  
title: Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public delegate void ReceiveDelegate(ref NetworkPipelineContext ctx, ref InboundRecvBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, int systemHeadersSize);
```

##### Parameters

| Type                          | Name                | Description |
|-------------------------------|---------------------|-------------|
| NetworkPipelineContext        | \*ctx               |             |
| InboundRecvBuffer             | \*inboundBuffer     |             |
| NetworkPipelineStage.Requests | \*requests          |             |
| System.Int32                  | \*systemHeadersSize |             |
