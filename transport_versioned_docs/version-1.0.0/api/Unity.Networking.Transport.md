---  
id: Unity.Networking.Transport  
title: Unity.Networking.Transport  
---

## 

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## 

### Unity.Networking.Transport.Base64

<div class="section">

Utility class used to Decode a base64 string

</div>

### Unity.Networking.Transport.HMACSHA256

<div class="section">

Utility class used to compute HMACSHA256 hash

</div>

### Unity.Networking.Transport.NetworkPipelineStageCollection

<div class="section">

The network pipeline stage collection class

</div>

### Unity.Networking.Transport.SHA256

<div class="section">

Utility class that provides the ability to generate a SHA256 Hash

</div>

## 

### Unity.Networking.Transport.BaselibNetworkInterface

<div class="section">

Default NetworkInterface implementation based on Unity's internal
Baselib UDP sockets this is ensure to work on all platforms except for
Unity's WebGL.

</div>

### Unity.Networking.Transport.BaselibNetworkParameter

<div class="section">

Network Parameters used to set queue and payload sizes for
BaselibNetworkInterface

</div>

### Unity.Networking.Transport.DataStreamReader

<div class="section">

The `DataStreamReader` class is the counterpart of the
`DataStreamWriter` class and can be be used to deserialize data which
was prepared with it.

</div>

### Unity.Networking.Transport.DataStreamWriter

<div class="section">

</div>

### Unity.Networking.Transport.FragmentationPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.FragmentationPipelineStage.FragContext

<div class="section">

The fragmentation stage's internal context.

</div>

### Unity.Networking.Transport.InboundRecvBuffer

<div class="section">

The inbound recv buffer

</div>

### Unity.Networking.Transport.InboundSendBuffer

<div class="section">

The inbound send buffer

</div>

### Unity.Networking.Transport.IPCNetworkInterface

<div class="section">

The ipc network interface

</div>

### Unity.Networking.Transport.NetworkCompressionModel

<div class="section">

Used to provide Huffman compression when using packed DataStream
functions

</div>

### Unity.Networking.Transport.NetworkConfigParameter

<div class="section">

The NetworkConfigParameter is used to set specific parameters that the
driver uses.

</div>

### Unity.Networking.Transport.NetworkConnection

<div class="section">

</div>

### Unity.Networking.Transport.NetworkDataStreamParameter

<div class="section">

The NetworkDataStreamParameter is used to set a fixed data stream size.

</div>

### Unity.Networking.Transport.NetworkDriver

<div class="section">

The NetworkDriver is an implementation of Virtual Connections over any
transport.

Basic usage:

    var driver = NetworkDriver.Create();

</div>

### Unity.Networking.Transport.NetworkDriver.Concurrent

<div class="section">

The Concurrent struct is used to create an Concurrent instance of the
NetworkDriver.

</div>

### Unity.Networking.Transport.NetworkEndPoint

<div class="section">

Describes a raw network endpoint (typically IP and port number).

</div>

### Unity.Networking.Transport.NetworkEvent

<div class="section">

Represents an event on a connection.

</div>

### Unity.Networking.Transport.NetworkEventQueue

<div class="section">

</div>

### Unity.Networking.Transport.NetworkEventQueue.Concurrent

<div class="section">

</div>

### Unity.Networking.Transport.NetworkInterfaceEndPoint

<div class="section">

</div>

### Unity.Networking.Transport.NetworkInterfaceSendHandle

<div class="section">

A handle to data that's going to be sent on an interface.

</div>

### Unity.Networking.Transport.NetworkPacketReceiver

<div class="section">

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

### Unity.Networking.Transport.NetworkParameterConstants

<div class="section">

Default NetworkParameter Constants.

</div>

### Unity.Networking.Transport.NetworkPipeline

<div class="section">

The network pipeline

</div>

### Unity.Networking.Transport.NetworkPipelineContext

<div class="section">

The network pipeline context

</div>

### Unity.Networking.Transport.NetworkPipelineParams

<div class="section">

The network pipeline params

</div>

### Unity.Networking.Transport.NetworkPipelineStage

<div class="section">

The network pipeline stage

</div>

### Unity.Networking.Transport.NetworkPipelineStageId

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSendInterface

<div class="section">

The network send interface used to pass around function pointers to the
actual INetworkInterface

</div>

### Unity.Networking.Transport.NetworkSendQueueHandle

<div class="section">

The network send queue handle

</div>

### Unity.Networking.Transport.NullPipelineStage

<div class="section">

The NullPipelineStage is the default pipeline stage and used to send
packets unreliably

</div>

### Unity.Networking.Transport.QueuedSendMessage

<div class="section">

</div>

### Unity.Networking.Transport.ReliableSequencedPipelineStage

<div class="section">

The ReliableSequencedPipelineStage is used to send packets reliably and
retain the order in which they are sent. This PipelineStage has a
hardcoded WindowSize of 32 inflight packets and will drop packets if its
unable to track them.

</div>

### Unity.Networking.Transport.SessionIdToken

<div class="section">

</div>

### Unity.Networking.Transport.SimulatorPipelineStage

<div class="section">

The SimulatorPipelineStage could be added on either the client or server
to simulate bad network conditions. It's best to add it as the last
stage in the pipeline, then it will either drop the packet or add a
delay right before it would go on the wire.

</div>

### Unity.Networking.Transport.SimulatorPipelineStageInSend

<div class="section">

The simulator pipeline stage in send

</div>

### Unity.Networking.Transport.TransportFunctionPointer\`1

<div class="section">

Represents a wrapper around burst compatible function pointers in a
portable way

</div>

### Unity.Networking.Transport.UnreliableSequencedPipelineStage

<div class="section">

The UnreliableSequencedPipelineStage is used to send unreliable packets
in order.

</div>

## 

### Unity.Networking.Transport.INetworkInterface

<div class="section">

Interface for implementing a low-level networking interface see
BaselibNetworkInterface as an example

</div>

### Unity.Networking.Transport.INetworkParameter

<div class="section">

The interface for NetworkParameters

</div>

### Unity.Networking.Transport.INetworkPipelineStage

<div class="section">

The network pipeline stage interface

</div>

## 

### Unity.Networking.Transport.NetworkConnection.State

<div class="section">

Connection States

</div>

### Unity.Networking.Transport.NetworkEvent.Type

<div class="section">

The different types of events that can be returned for a connection.

</div>

### Unity.Networking.Transport.NetworkFamily

<div class="section">

Indicates the protocol family of the address (analogous of AF\_\* in
sockets API).

</div>

### Unity.Networking.Transport.NetworkPacketReceiver.AppendPacketMode

<div class="section">

Permits choosing between two ways of appending packets: via a copy or
not.

</div>

### Unity.Networking.Transport.NetworkPipelineStage.Requests

<div class="section">

The requests enum

</div>

### Unity.Networking.Transport.SendHandleFlags

<div class="section">

The send handle flags enum

</div>

## 

### Unity.Networking.Transport.NetworkPipelineStage.InitializeConnectionDelegate

<div class="section">

The initialize connection delegate

</div>

### Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate

<div class="section">

The receive delegate

</div>

### Unity.Networking.Transport.NetworkPipelineStage.SendDelegate

<div class="section">

The send delegate

</div>

### Unity.Networking.Transport.NetworkSendInterface.AbortSendMessageDelegate

<div class="section">

Will be invoked from the lower level library if sending a message was
aborted.

</div>

### Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate

<div class="section">

Invoked from the lower level library at the beginning of the message
sending routine.

</div>

### Unity.Networking.Transport.NetworkSendInterface.EndSendMessageDelegate

<div class="section">

Invoked from the lower level library at the end of the message sending
routine.

</div>
