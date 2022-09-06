---
id: Unity.Networking.Transport
title: Unity.Networking.Transport
---


# Namespace Unity.Networking.Transport









### Classes

#### BaselibNetworkParameterExtensions




#### CommonNetworkParametersExtensions




#### NetworkPipelineParametersExtensions




#### NetworkPipelineStageCollection


The network pipeline stage collection class



### Structs

#### BaselibNetworkInterface


Default NetworkInterface implementation based on Unity's internal
Baselib UDP sockets this is ensure to work on all platforms except for
Unity's WebGL.



#### BaselibNetworkParameter


Network Parameters used to set queue and payload sizes for
BaselibNetworkInterface



#### DataStreamReader


The `DataStreamReader` class is the counterpart of the
`DataStreamWriter` class and can be be used to deserialize data which
was prepared with it.



#### DataStreamWriter




#### FragmentationPipelineStage




#### FragmentationPipelineStage.FragContext


The fragmentation stage's internal context.



#### InboundRecvBuffer


The inbound recv buffer



#### InboundSendBuffer


The inbound send buffer



#### IPCNetworkInterface


The ipc network interface



#### NetworkCompressionModel


Used to provide Huffman compression when using packed DataStream
functions



#### NetworkConfigParameter


The NetworkConfigParameter is used to set specific parameters that the
driver uses.



#### NetworkConnection




#### NetworkDataStreamParameter


The NetworkDataStreamParameter is used to set a fixed data stream size.



#### NetworkDriver


The NetworkDriver is an implementation of Virtual Connections over any
transport.

Basic usage:

    var driver = NetworkDriver.Create();



#### NetworkDriver.Concurrent


The Concurrent struct is used to create an Concurrent instance of the
NetworkDriver.



#### NetworkEndPoint


Describes a raw network endpoint (typically IP and port number).



#### NetworkEvent


Represents an event on a connection.



#### NetworkInterfaceEndPoint




#### NetworkInterfaceSendHandle


A handle to data that's going to be sent on an interface.



#### NetworkPacketReceiver


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



#### NetworkParameterConstants


Default NetworkParameter Constants.



#### NetworkPipeline


The network pipeline



#### NetworkPipelineContext


The network pipeline context



#### NetworkPipelineParams


The network pipeline params



#### NetworkPipelineStage


The network pipeline stage



#### NetworkPipelineStageId




#### NetworkSendInterface


The network send interface used to pass around function pointers to the
actual INetworkInterface



#### NetworkSendQueueHandle


The network send queue handle



#### NetworkSettings


A list of the parameters that describe the network configuration.



#### NullPipelineStage


The NullPipelineStage is the default pipeline stage and used to send
packets unreliably



#### QueuedSendMessage




#### ReliableSequencedPipelineStage


The ReliableSequencedPipelineStage is used to send packets reliably and
retain the order in which they are sent. This PipelineStage has a
hardcoded WindowSize of 32 inflight packets and will drop packets if its
unable to track them.



#### SimulatorPipelineStage


The SimulatorPipelineStage could be added on either the client or server
to simulate bad network conditions. It's best to add it as the last
stage in the pipeline, then it will either drop the packet or add a
delay right before it would go on the wire.



#### SimulatorPipelineStageInSend


The simulator pipeline stage in send



#### TransportFunctionPointer\<T\>


Represents a wrapper around burst compatible function pointers in a
portable way



#### UnreliableSequencedPipelineStage


The UnreliableSequencedPipelineStage is used to send unreliable packets
in order.



### Interfaces

#### INetworkInterface


Interface for implementing a low-level networking interface see
BaselibNetworkInterface as an example



#### INetworkParameter


The interface for NetworkParameters



#### INetworkPipelineStage


The network pipeline stage interface



### Enums

#### NetworkConnection.State


Connection States



#### NetworkEvent.Type


The different types of events that can be returned for a connection.



#### NetworkFamily


Indicates the protocol family of the address (analogous of AF\_\* in
sockets API).



#### NetworkPacketReceiver.AppendPacketMode


Permits choosing between two ways of appending packets: via a copy or
not.



#### NetworkPipelineStage.Requests


The requests enum



#### SendHandleFlags


The send handle flags enum



### Delegates

#### NetworkPipelineStage.InitializeConnectionDelegate


The initialize connection delegate



#### NetworkPipelineStage.ReceiveDelegate


The receive delegate



#### NetworkPipelineStage.SendDelegate


The send delegate



#### NetworkSendInterface.AbortSendMessageDelegate


Will be invoked from the lower level library if sending a message was
aborted.



#### NetworkSendInterface.BeginSendMessageDelegate


Invoked from the lower level library at the beginning of the message
sending routine.



#### NetworkSendInterface.EndSendMessageDelegate


Invoked from the lower level library at the end of the message sending
routine.





