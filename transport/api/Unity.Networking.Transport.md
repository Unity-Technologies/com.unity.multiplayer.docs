---  
id: Unity.Networking.Transport  
title: Unity.Networking.Transport  
---

## Namespace Unity.Networking.Transport

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### Unity.Networking.Transport.NetworkPipelineStageCollection

<div class="section">

</div>

## Structs

### Unity.Networking.Transport.BaselibNetworkInterface

<div class="section">

</div>

### Unity.Networking.Transport.BaselibNetworkParameter

<div class="section">

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

</div>

### Unity.Networking.Transport.InboundRecvBuffer

<div class="section">

</div>

### Unity.Networking.Transport.InboundSendBuffer

<div class="section">

</div>

### Unity.Networking.Transport.IPCNetworkInterface

<div class="section">

</div>

### Unity.Networking.Transport.NetworkCompressionModel

<div class="section">

</div>

### Unity.Networking.Transport.NetworkConfigParameter

<div class="section">

The NetworkConfigParameter is used to set specific parameters that the
driver uses.

</div>

### Unity.Networking.Transport.NetworkConnection

<div class="section">

The NetworkConnection is a struct that hold all information needed by
the driver to link it with a virtual connection. The NetworkConnection
is a public representation of a connection.

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

    var driver = new NetworkDriver.Create();

</div>

### Unity.Networking.Transport.NetworkDriver.Concurrent

<div class="section">

The Concurrent struct is used to create an Concurrent instance of the
GenericNetworkDriver.

</div>

### Unity.Networking.Transport.NetworkEndPoint

<div class="section">

</div>

### Unity.Networking.Transport.NetworkEvent

<div class="section">

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

</div>

### Unity.Networking.Transport.NetworkPacketReceiver

<div class="section">

The NetworkPacketReceiver is an interface for handling received packets,
needed by the INetworkInterface

</div>

### Unity.Networking.Transport.NetworkParameterConstants

<div class="section">

Default NetworkParameter Constants.

</div>

### Unity.Networking.Transport.NetworkPipeline

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineContext

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineParams

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStageId

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSendInterface

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSendQueueHandle

<div class="section">

</div>

### Unity.Networking.Transport.NullPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.QueuedSendMessage

<div class="section">

</div>

### Unity.Networking.Transport.ReliableSequencedPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.SimulatorPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.SimulatorPipelineStageInSend

<div class="section">

</div>

### Unity.Networking.Transport.TransportFunctionPointer-1

<div class="section">

</div>

### Unity.Networking.Transport.UnreliableSequencedPipelineStage

<div class="section">

</div>

## Interfaces

### Unity.Networking.Transport.INetworkInterface

<div class="section">

</div>

### Unity.Networking.Transport.INetworkParameter

<div class="section">

The interface for NetworkParameters

</div>

### Unity.Networking.Transport.INetworkPipelineStage

<div class="section">

</div>

## Enums

### Unity.Networking.Transport.NetworkConnection.State

<div class="section">

ConnectionState enumerates available connection states a connection can
have.

</div>

### Unity.Networking.Transport.NetworkEvent.Type

<div class="section">

NetworkEvent.Type enumerates available network events for this driver.

</div>

### Unity.Networking.Transport.NetworkFamily

<div class="section">

NetworkFamily indicates what type of underlying medium we are using.

</div>

### Unity.Networking.Transport.NetworkPipelineStage.Requests

<div class="section">

</div>

### Unity.Networking.Transport.SendHandleFlags

<div class="section">

</div>

## Delegates

### Unity.Networking.Transport.NetworkPipelineStage.InitializeConnectionDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStage.SendDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSendInterface.AbortSendMessageDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSendInterface.BeginSendMessageDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSendInterface.EndSendMessageDelegate

<div class="section">

</div>
