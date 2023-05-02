---
id: Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate
title: Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate
---


# Delegate NetworkPipelineStage.ReceiveDelegate


The receive delegate





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public delegate void ReceiveDelegate(ref NetworkPipelineContext ctx, ref InboundRecvBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, int systemHeadersSize);
```



##### Parameters

| Type                          | Name              | Description |
|-------------------------------|-------------------|-------------|
| NetworkPipelineContext        | ctx               |             |
| InboundRecvBuffer             | inboundBuffer     |             |
| NetworkPipelineStage.Requests | requests          |             |
| System.Int32                  | systemHeadersSize |             |



