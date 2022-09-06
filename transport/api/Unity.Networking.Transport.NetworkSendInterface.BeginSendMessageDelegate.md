---
id: Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate
title: Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate
---


# Delegate NetworkSendInterface.BeginSendMessageDelegate


Invoked from the lower level library at the beginning of the message
sending routine.





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public delegate int BeginSendMessageDelegate(out NetworkInterfaceSendHandle handle, IntPtr userData, int requiredPayloadSize);
```



##### Parameters

| Type                       | Name                | Description |
|----------------------------|---------------------|-------------|
| NetworkInterfaceSendHandle | handle              |             |
| System.IntPtr              | userData            |             |
| System.Int32               | requiredPayloadSize |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



