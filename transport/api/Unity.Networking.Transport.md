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

### Unity.Networking.Transport.BaselibNetworkParameterExtensions

<div class="section">

</div>

### Unity.Networking.Transport.CommonNetworkParametersExtensions

<div class="section">

</div>

### Unity.Networking.Transport.ManagedNetworkInterfaceExtensions

<div class="section">

</div>

### Unity.Networking.Transport.NetworkDriverIdentifierParameterExtensions

<div class="section">

</div>

### Unity.Networking.Transport.NetworkSimulatorParameterExtensions

<div class="section">

</div>

## 

### Unity.Networking.Transport.BaselibNetworkInterface

<div class="section">

</div>

### Unity.Networking.Transport.BaselibNetworkParameter

<div class="section">

</div>

### Unity.Networking.Transport.FragmentationPipelineStage

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

### Unity.Networking.Transport.NetworkDriverIdentifierParameter

<div class="section">

</div>

### Unity.Networking.Transport.NetworkEndpoint

<div class="section">

</div>

### Unity.Networking.Transport.NetworkEvent

<div class="section">

</div>

### Unity.Networking.Transport.NetworkInterfaceEndPoint

<div class="section">

</div>

### Unity.Networking.Transport.NetworkInterfaceUnmanagedWrapper\`1

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPacketReceiver

<div class="section">

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

### Unity.Networking.Transport.NetworkPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStageId

<div class="section">

Identifier for a pipeline stage.

</div>

### Unity.Networking.Transport.NetworkSettings

<div class="section">

A list of the parameters that describe the network configuration.

</div>

### Unity.Networking.Transport.NetworkSimulatorParameter

<div class="section">

Parameters for the global network simulator.

</div>

### Unity.Networking.Transport.NullPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.OperationResult

<div class="section">

Stores the result of a NetworkDriver operation.

</div>

### Unity.Networking.Transport.PacketProcessor

<div class="section">

Provides an API for processing packets.

</div>

### Unity.Networking.Transport.PacketsQueue

<div class="section">

A queue of packets with an internal pool of preallocated packet buffers

</div>

### Unity.Networking.Transport.QueuedSendMessage

<div class="section">

</div>

### Unity.Networking.Transport.ReceiveJobArguments

<div class="section">

Arguments required by the ScheduleReceive jobs.

</div>

### Unity.Networking.Transport.ReliableSequencedPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.SendJobArguments

<div class="section">

Arguments required by the ScheduleSend jobs.

</div>

### Unity.Networking.Transport.SimulatorPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.SimulatorPipelineStageInSend

<div class="section">

</div>

### Unity.Networking.Transport.TransportFunctionPointer\`1

<div class="section">

</div>

### Unity.Networking.Transport.UDPNetworkInterface

<div class="section">

</div>

### Unity.Networking.Transport.UnreliableSequencedPipelineStage

<div class="section">

</div>

### Unity.Networking.Transport.WebSocketNetworkInterface

<div class="section">

</div>

## 

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

## 

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

### Unity.Networking.Transport.NetworkPacketReceiver.AppendPacketMode

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStage.Requests

<div class="section">

</div>

## 

### Unity.Networking.Transport.NetworkPipelineStage.InitializeConnectionDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStage.ReceiveDelegate

<div class="section">

</div>

### Unity.Networking.Transport.NetworkPipelineStage.SendDelegate

<div class="section">

</div>
