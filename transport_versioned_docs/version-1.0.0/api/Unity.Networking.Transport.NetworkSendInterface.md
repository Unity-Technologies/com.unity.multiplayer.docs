---  
id: Unity.Networking.Transport.NetworkSendInterface  
title: Unity.Networking.Transport.NetworkSendInterface  
---

<div class="markdown level0 summary">

The network send interface used to pass around function pointers to the
actual INetworkInterface

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkSendInterface
```

## 

### AbortSendMessage

<div class="markdown level1 summary">

The abort send message function pointer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer<NetworkSendInterface.AbortSendMessageDelegate> AbortSendMessage
```

#### Field Value

| Type                                                                      | Description |
|---------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkSendInterface.AbortSendMessageDelegate\> |             |

### BeginSendMessage

<div class="markdown level1 summary">

The begin send message function pointer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer<NetworkSendInterface.BeginSendMessageDelegate> BeginSendMessage
```

#### Field Value

| Type                                                                      | Description |
|---------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkSendInterface.BeginSendMessageDelegate\> |             |

### EndSendMessage

<div class="markdown level1 summary">

The end send message function pointer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer<NetworkSendInterface.EndSendMessageDelegate> EndSendMessage
```

#### Field Value

| Type                                                                    | Description |
|-------------------------------------------------------------------------|-------------|
| TransportFunctionPointer\<NetworkSendInterface.EndSendMessageDelegate\> |             |

### UserData

<div class="markdown level1 summary">

The user data

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IntPtr UserData
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.IntPtr |             |
