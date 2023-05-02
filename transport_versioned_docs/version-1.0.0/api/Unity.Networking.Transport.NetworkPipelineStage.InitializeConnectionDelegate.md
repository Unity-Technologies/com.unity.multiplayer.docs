---
id: Unity.Networking.Transport.NetworkPipelineStage.InitializeConnectionDelegate
title: Unity.Networking.Transport.NetworkPipelineStage.InitializeConnectionDelegate
---


# Delegate NetworkPipelineStage.InitializeConnectionDelegate


The initialize connection delegate





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public delegate void InitializeConnectionDelegate(byte *staticInstanceBuffer, int staticInstanceBufferLength, byte *sendProcessBuffer, int sendProcessBufferLength, byte *recvProcessBuffer, int recvProcessBufferLength, byte *sharedProcessBuffer, int sharedProcessBufferLength);
```



##### Parameters

| Type          | Name                       | Description |
|---------------|----------------------------|-------------|
| System.Byte\* | staticInstanceBuffer       |             |
| System.Int32  | staticInstanceBufferLength |             |
| System.Byte\* | sendProcessBuffer          |             |
| System.Int32  | sendProcessBufferLength    |             |
| System.Byte\* | recvProcessBuffer          |             |
| System.Int32  | recvProcessBufferLength    |             |
| System.Byte\* | sharedProcessBuffer        |             |
| System.Int32  | sharedProcessBufferLength  |             |



