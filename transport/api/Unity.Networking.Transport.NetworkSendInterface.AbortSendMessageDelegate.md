---
id: Unity.Networking.Transport.NetworkSendInterface.AbortSendMessageDelegate
title: Unity.Networking.Transport.NetworkSendInterface.AbortSendMessageDelegate
---


# Delegate NetworkSendInterface.AbortSendMessageDelegate


Will be invoked from the lower level library if sending a message was
aborted.





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public delegate void AbortSendMessageDelegate(ref NetworkInterfaceSendHandle handle, IntPtr userData);
```



##### Parameters

| Type                       | Name     | Description |
|----------------------------|----------|-------------|
| NetworkInterfaceSendHandle | handle   |             |
| System.IntPtr              | userData |             |



