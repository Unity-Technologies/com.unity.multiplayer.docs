---  
id: Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate  
title: Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public delegate int BeginSendMessageDelegate(out NetworkInterfaceSendHandle handle, IntPtr userData, int requiredPayloadSize);
```

##### Parameters

| Type                       | Name                  | Description |
|----------------------------|-----------------------|-------------|
| NetworkInterfaceSendHandle | \*handle              |             |
| System.IntPtr              | \*userData            |             |
| System.Int32               | \*requiredPayloadSize |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
