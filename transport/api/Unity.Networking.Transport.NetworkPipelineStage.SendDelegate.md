---
id: Unity.Networking.Transport.NetworkPipelineStage.SendDelegate
title: Unity.Networking.Transport.NetworkPipelineStage.SendDelegate
---


# Delegate NetworkPipelineStage.SendDelegate


The send delegate





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public delegate int SendDelegate(ref NetworkPipelineContext ctx, ref InboundSendBuffer inboundBuffer, ref NetworkPipelineStage.Requests requests, int systemHeadersSize);
```



##### Parameters

| Type                          | Name              | Description |
|-------------------------------|-------------------|-------------|
| NetworkPipelineContext        | ctx               |             |
| InboundSendBuffer             | inboundBuffer     |             |
| NetworkPipelineStage.Requests | requests          |             |
| System.Int32                  | systemHeadersSize |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



