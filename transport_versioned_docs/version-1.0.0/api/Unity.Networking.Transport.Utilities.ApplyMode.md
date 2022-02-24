---  
id: Unity.Networking.Transport.Utilities.ApplyMode  
title: Unity.Networking.Transport.Utilities.ApplyMode  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public enum ApplyMode : byte
```

## 

| Name                | Description                                                                                                               |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| AllPackets          | Apply simulation (delay, jitter, packet loss, duplication, fuzz etc) to both sent and received packets. Recommended mode. |
| Off                 | For runtime toggling.                                                                                                     |
| ReceivedPacketsOnly | Default to ensure no breaking changes with SimulatorPipelineStageInSend deprecation.                                      |
| SentPacketsOnly     |                                                                                                                           |
