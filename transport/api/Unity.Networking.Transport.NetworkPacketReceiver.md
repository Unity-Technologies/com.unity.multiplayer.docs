---  
id: Unity.Networking.Transport.NetworkPacketReceiver  
title: Unity.Networking.Transport.NetworkPacketReceiver  
---

<div class="markdown level0 summary">

The NetworkPacketReceiver is an interface for handling received packets,
needed by the INetworkInterface

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

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct NetworkPacketReceiver

## Properties 

### ReceiveCount

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReceiveCount { get; set; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ReceiveErrorCode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int ReceiveErrorCode { set; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### AppendPacket(NetworkInterfaceEndPoint, UdpCHeader, Int32)

<div class="markdown level1 summary">

AppendPacket is where we parse the data from the network into easy to
handle events.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int AppendPacket(NetworkInterfaceEndPoint address, UdpCHeader header, int dataLen)

#### Parameters

| Type                     | Name    | Description                                                                            |
|--------------------------|---------|----------------------------------------------------------------------------------------|
| NetworkInterfaceEndPoint | address | The address of the endpoint we received data from.                                     |
| UdpCHeader               | header  | The header data indicating what type of packet it is. UdpCHeader for more information. |
| System.Int32             | dataLen | The size of the payload, if any.                                                       |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### DynamicDataStreamSize()

<div class="markdown level1 summary">

Check if the DataStreamWriter uses dynamic allocations to automatically
resize the buffers or not.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool DynamicDataStreamSize()

#### Returns

| Type           | Description                                           |
|----------------|-------------------------------------------------------|
| System.Boolean | True if its dynamically resizing the DataStreamWriter |

### GetDataStream()

<div class="markdown level1 summary">

Get the datastream associated with this Receiver.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NativeList<byte> GetDataStream()

#### Returns

| Type                          | Description                   |
|-------------------------------|-------------------------------|
| NativeList&lt;System.Byte&gt; | Returns a NativeList of bytes |

### GetDataStreamSize()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int GetDataStreamSize()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
