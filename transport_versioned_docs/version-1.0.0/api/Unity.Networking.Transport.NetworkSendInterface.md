---
id: Unity.Networking.Transport.NetworkSendInterface
title: Unity.Networking.Transport.NetworkSendInterface
---


# Struct NetworkSendInterface


The network send interface used to pass around function pointers to the
actual INetworkInterface






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkSendInterface
```



### Fields

#### AbortSendMessage


The abort send message function pointer






##### Declaration


``` lang-csharp
public TransportFunctionPointer<NetworkSendInterface.AbortSendMessageDelegate> AbortSendMessage
```



##### Field Value

| Type                                                                      | Description |
|---------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkSendInterface.AbortSendMessageDelegate\> |             |

#### BeginSendMessage


The begin send message function pointer






##### Declaration


``` lang-csharp
public TransportFunctionPointer<NetworkSendInterface.BeginSendMessageDelegate> BeginSendMessage
```



##### Field Value

| Type                                                                      | Description |
|---------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkSendInterface.BeginSendMessageDelegate\> |             |

#### EndSendMessage


The end send message function pointer






##### Declaration


``` lang-csharp
public TransportFunctionPointer<NetworkSendInterface.EndSendMessageDelegate> EndSendMessage
```



##### Field Value

| Type                                                                    | Description |
|-------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkSendInterface.EndSendMessageDelegate\> |             |

#### UserData


The user data






##### Declaration


``` lang-csharp
public IntPtr UserData
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.IntPtr |             |



