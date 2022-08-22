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

# Namespace Unity.Networking.Transport

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

### Classes

#### BaselibNetworkParameterExtensions

<div class="section">

</div>

#### CommonNetworkParametersExtensions

<div class="section">

</div>

#### NetworkPipelineParametersExtensions

<div class="section">

</div>

#### NetworkPipelineStageCollection

<div class="section">

The network pipeline stage collection class

</div>

### Structs

#### BaselibNetworkInterface

<div class="section">

Default NetworkInterface implementation based on Unity's internal
Baselib UDP sockets this is ensure to work on all platforms except for
Unity's WebGL.

</div>

#### BaselibNetworkParameter

<div class="section">

Network Parameters used to set queue and payload sizes for
BaselibNetworkInterface

</div>

#### DataStreamReader

<div class="section">

The `DataStreamReader` class is the counterpart of the
`DataStreamWriter` class and can be be used to deserialize data which
was prepared with it.

</div>

#### DataStreamWriter

<div class="section">

</div>

#### FragmentationPipelineStage

<div class="section">

</div>

#### FragmentationPipelineStage.FragContext

<div class="section">

The fragmentation stage's internal context.

</div>

#### InboundRecvBuffer

<div class="section">

The inbound recv buffer

</div>

#### InboundSendBuffer

<div class="section">

The inbound send buffer

</div>

#### IPCNetworkInterface

<div class="section">

The ipc network interface

</div>

#### NetworkCompressionModel

<div class="section">

Used to provide Huffman compression when using packed DataStream
functions

</div>

#### NetworkConfigParameter

<div class="section">

The NetworkConfigParameter is used to set specific parameters that the
driver uses.

</div>

#### NetworkConnection

<div class="section">

</div>

#### NetworkDataStreamParameter

<div class="section">

The NetworkDataStreamParameter is used to set a fixed data stream size.

</div>

#### NetworkDriver

<div class="section">

The NetworkDriver is an implementation of Virtual Connections over any
transport.

Basic usage:

    var driver = NetworkDriver.Create();

</div>

#### NetworkDriver.Concurrent

<div class="section">

The Concurrent struct is used to create an Concurrent instance of the
NetworkDriver.

</div>

#### NetworkEndPoint

<div class="section">

Describes a raw network endpoint (typically IP and port number).

</div>

#### NetworkEvent

<div class="section">

Represents an event on a connection.

</div>

#### NetworkInterfaceEndPoint

<div class="section">

</div>

#### NetworkInterfaceSendHandle

<div class="section">

A handle to data that's going to be sent on an interface.

</div>

#### NetworkPacketReceiver

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

#### NetworkParameterConstants

<div class="section">

Default NetworkParameter Constants.

</div>

#### NetworkPipeline

<div class="section">

The network pipeline

</div>

#### NetworkPipelineContext

<div class="section">

The network pipeline context

</div>

#### NetworkPipelineParams

<div class="section">

The network pipeline params

</div>

#### NetworkPipelineStage

<div class="section">

The network pipeline stage

</div>

#### NetworkPipelineStageId

<div class="section">

</div>

#### NetworkSendInterface

<div class="section">

The network send interface used to pass around function pointers to the
actual INetworkInterface

</div>

#### NetworkSendQueueHandle

<div class="section">

The network send queue handle

</div>

#### NetworkSettings

<div class="section">

A list of the parameters that describe the network configuration.

</div>

#### NullPipelineStage

<div class="section">

The NullPipelineStage is the default pipeline stage and used to send
packets unreliably

</div>

#### QueuedSendMessage

<div class="section">

</div>

#### ReliableSequencedPipelineStage

<div class="section">

The ReliableSequencedPipelineStage is used to send packets reliably and
retain the order in which they are sent. This PipelineStage has a
hardcoded WindowSize of 32 inflight packets and will drop packets if its
unable to track them.

</div>

#### SimulatorPipelineStage

<div class="section">

The SimulatorPipelineStage could be added on either the client or server
to simulate bad network conditions. It's best to add it as the last
stage in the pipeline, then it will either drop the packet or add a
delay right before it would go on the wire.

</div>

#### SimulatorPipelineStageInSend

<div class="section">

The simulator pipeline stage in send

</div>

#### TransportFunctionPointer\<T\>

<div class="section">

Represents a wrapper around burst compatible function pointers in a
portable way

</div>

#### UnreliableSequencedPipelineStage

<div class="section">

The UnreliableSequencedPipelineStage is used to send unreliable packets
in order.

</div>

### Interfaces

#### INetworkInterface

<div class="section">

Interface for implementing a low-level networking interface see
BaselibNetworkInterface as an example

</div>

#### INetworkParameter

<div class="section">

The interface for NetworkParameters

</div>

#### INetworkPipelineStage

<div class="section">

The network pipeline stage interface

</div>

### Enums

#### NetworkConnection.State

<div class="section">

Connection States

</div>

#### NetworkEvent.Type

<div class="section">

The different types of events that can be returned for a connection.

</div>

#### NetworkFamily

<div class="section">

Indicates the protocol family of the address (analogous of AF\_\* in
sockets API).

</div>

#### NetworkPacketReceiver.AppendPacketMode

<div class="section">

Permits choosing between two ways of appending packets: via a copy or
not.

</div>

#### NetworkPipelineStage.Requests

<div class="section">

The requests enum

</div>

#### SendHandleFlags

<div class="section">

The send handle flags enum

</div>

### Delegates

#### NetworkPipelineStage.InitializeConnectionDelegate

<div class="section">

The initialize connection delegate

</div>

#### NetworkPipelineStage.ReceiveDelegate

<div class="section">

The receive delegate

</div>

#### NetworkPipelineStage.SendDelegate

<div class="section">

The send delegate

</div>

#### NetworkSendInterface.AbortSendMessageDelegate

<div class="section">

Will be invoked from the lower level library if sending a message was
aborted.

</div>

#### NetworkSendInterface.BeginSendMessageDelegate

<div class="section">

Invoked from the lower level library at the beginning of the message
sending routine.

</div>

#### NetworkSendInterface.EndSendMessageDelegate

<div class="section">

Invoked from the lower level library at the end of the message sending
routine.

</div>

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
