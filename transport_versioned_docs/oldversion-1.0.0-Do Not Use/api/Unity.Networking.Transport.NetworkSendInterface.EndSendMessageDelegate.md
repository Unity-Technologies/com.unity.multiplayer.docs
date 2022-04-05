---  
id: Unity.Networking.Transport.NetworkSendInterface.EndSendMessageDelegate  
title: Unity.Networking.Transport.NetworkSendInterface.EndSendMessageDelegate  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public delegate int EndSendMessageDelegate(ref NetworkInterfaceSendHandle handle, ref NetworkInterfaceEndPoint address, IntPtr userData, ref NetworkSendQueueHandle sendQueue);
```

##### Parameters

| Type                       | Name        | Description |
|----------------------------|-------------|-------------|
| NetworkInterfaceSendHandle | \*handle    |             |
| NetworkInterfaceEndPoint   | \*address   |             |
| System.IntPtr              | \*userData  |             |
| NetworkSendQueueHandle     | \*sendQueue |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
