---  
id: Unity.Networking.Transport.NetworkPacketReceiver.AppendPacketMode  
title: Unity.Networking.Transport.NetworkPacketReceiver.AppendPacketMode  
---

<div class="markdown level0 summary">

Permits choosing between two ways of appending packets: via a copy or
not.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
[Flags]
public enum AppendPacketMode
```

## 

| Name         | Description                                         |
|--------------|-----------------------------------------------------|
| NoCopyNeeded | No Copy required when appending a packet            |
| None         | Append Packet via a copy, which is the default mode |
