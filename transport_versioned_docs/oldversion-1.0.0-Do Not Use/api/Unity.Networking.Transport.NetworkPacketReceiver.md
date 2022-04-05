---  
id: Unity.Networking.Transport.NetworkPacketReceiver  
title: Unity.Networking.Transport.NetworkPacketReceiver  
---

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
public struct NetworkPacketReceiver
```

## 

### LastUpdateTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly long LastUpdateTime { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

### ReceiveErrorCode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ReceiveErrorCode { set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### AllocateMemory(ref Int32)

<div class="markdown level1 summary">

Calls NetworkDriver's AllocateMemory(ref Int32)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IntPtr AllocateMemory(ref int dataLen)
```

#### Parameters

| Type         | Name    | Description                                       |
|--------------|---------|---------------------------------------------------|
| System.Int32 | dataLen | Size of memory to allocate in bytes. Must be \> 0 |

#### Returns

| Type          | Description                                                                                                                                                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.IntPtr | Pointer to allocated memory or IntPtr.Zero if there is no space left (this function doesn't set ReceiveErrorCode! caller should decide if this is Out of memory or something else) |

### AppendPacket(IntPtr, ref NetworkInterfaceEndPoint, Int32, NetworkPacketReceiver.AppendPacketMode)

<div class="markdown level1 summary">

When data is received this function should be called to pass it inside
NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AppendPacket(IntPtr data, ref NetworkInterfaceEndPoint address, int dataLen, NetworkPacketReceiver.AppendPacketMode mode = NetworkPacketReceiver.AppendPacketMode.None)
```

#### Parameters

| Type                                   | Name    | Description                                                                                                                     |
|----------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| System.IntPtr                          | data    | Pointer to the data. If it is pointer to data that was received with AllocateMemory(ref Int32) make sure mode is NoCopyNeeded\> |
| NetworkInterfaceEndPoint               | address | Address where data was received from                                                                                            |
| System.Int32                           | dataLen | Length of in bytes                                                                                                              |
| NetworkPacketReceiver.AppendPacketMode | mode    | Extra flags, like NoCopyNeeded that means - no copy is needed, data is already in NetworkDriver's data stream                   |

#### Returns

| Type           | Description       |
|----------------|-------------------|
| System.Boolean | True if no errors |

### IsAddressUsed(NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

Check if an address is currently associated with a valid connection.
This is mostly useful to keep interface internal lists of connections in
sync with the correct state.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsAddressUsed(NetworkInterfaceEndPoint address)
```

#### Parameters

| Type                     | Name    | Description |
|--------------------------|---------|-------------|
| NetworkInterfaceEndPoint | address |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
