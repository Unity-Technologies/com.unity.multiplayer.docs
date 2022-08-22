---
id: Unity.Networking.Transport.NetworkPacketReceiver
title: Unity.Networking.Transport.NetworkPacketReceiver
---

<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Struct NetworkPacketReceiver

<div class="markdown level0 summary">

The NetworkPacketReceiver is an interface for handling received packets,
needed by the INetworkInterface It either can be used in two main
scenarios:

1.  Your API requires a pointer to memory that you own. Then you should
    use AllocateMemory(ref Int32), write to the memory and then
    AppendPacket(IntPtr, ref NetworkInterfaceEndPoint, Int32,
    NetworkPacketReceiver.AppendPacketMode) with NoCopyNeeded. You don't
    need to deallocate the memory
2.  Your API gives you a pointer that you don't own. In this case you
    should use AppendPacket(IntPtr, ref NetworkInterfaceEndPoint, Int32,
    NetworkPacketReceiver.AppendPacketMode) with None (default)

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkPacketReceiver
```

</div>

### Properties

#### LastUpdateTime

<div class="markdown level1 summary">

Gets the value of the last update time.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly long LastUpdateTime { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

#### ReceiveErrorCode

<div class="markdown level1 summary">

Sets the value of the receive error code

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int ReceiveErrorCode { set; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### AllocateMemory(ref Int32)

<div class="markdown level1 summary">

Calls NetworkDriver's
Unity.Networking.Transport.NetworkDriver.AllocateMemory(System.Int32@)

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public IntPtr AllocateMemory(ref int dataLen)
```

</div>

##### Parameters

| Type         | Name    | Description                                       |
|--------------|---------|---------------------------------------------------|
| System.Int32 | dataLen | Size of memory to allocate in bytes. Must be \> 0 |

##### Returns

| Type          | Description                                                                                                                                                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.IntPtr | Pointer to allocated memory or IntPtr.Zero if there is no space left (this function doesn't set ReceiveErrorCode! caller should decide if this is Out of memory or something else) |

#### AppendPacket(IntPtr, ref NetworkInterfaceEndPoint, Int32, NetworkPacketReceiver.AppendPacketMode)

<div class="markdown level1 summary">

When data is received this function should be called to pass it inside
NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool AppendPacket(IntPtr data, ref NetworkInterfaceEndPoint address, int dataLen, NetworkPacketReceiver.AppendPacketMode mode = NetworkPacketReceiver.AppendPacketMode.None)
```

</div>

##### Parameters

| Type                                   | Name    | Description                                                                                                                     |
|----------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| System.IntPtr                          | data    | Pointer to the data. If it is pointer to data that was received with AllocateMemory(ref Int32) make sure mode is NoCopyNeeded\> |
| NetworkInterfaceEndPoint               | address | Address where data was received from                                                                                            |
| System.Int32                           | dataLen | Length of in bytes                                                                                                              |
| NetworkPacketReceiver.AppendPacketMode | mode    | Extra flags, like NoCopyNeeded that means - no copy is needed, data is already in NetworkDriver's data stream                   |

##### Returns

| Type           | Description       |
|----------------|-------------------|
| System.Boolean | True if no errors |

#### IsAddressUsed(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Check if an address is currently associated with a valid connection.
This is mostly useful to keep interface internal lists of connections in
sync with the correct state.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool IsAddressUsed(NetworkInterfaceEndPoint address)
```

</div>

##### Parameters

| Type                     | Name    | Description |
|--------------------------|---------|-------------|
| NetworkInterfaceEndPoint | address |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
