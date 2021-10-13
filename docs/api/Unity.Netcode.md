---  
id: Unity.Netcode  
title: Unity.Netcode  
---

## 

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## 

### Unity.Netcode.Arithmetic

<div class="section">

Arithmetic helper class

</div>

### Unity.Netcode.AutoNetworkSerializable

<div class="section">

AutoBitWritable implements INetworkSerializable and automatically
serializes fields using reflection

</div>

### Unity.Netcode.ClientRpcAttribute

<div class="section">

Marks a method as ClientRpc.

A ClientRpc marked method will be fired by the server but executed on
clients.

</div>

### Unity.Netcode.CustomMessagingManager

<div class="section">

The manager class to manage custom messages, note that this is different
from the NetworkManager custom messages. These are named and are much
easier to use.

</div>

### Unity.Netcode.FixedQueue-1

<div class="section">

Queue with a fixed size

</div>

### Unity.Netcode.InvalidChannelException

<div class="section">

</div>

### Unity.Netcode.InvalidParentException

<div class="section">

Exception thrown when the new parent candidate of the NetworkObject is
not valid

</div>

### Unity.Netcode.NetworkBehaviour

<div class="section">

The base class to override to write network code. Inherits MonoBehaviour

</div>

### Unity.Netcode.NetworkBehaviourUpdater

<div class="section">

</div>

### Unity.Netcode.NetworkBuffer

<div class="section">

A buffer that can be used at the bit level

</div>

### Unity.Netcode.NetworkBufferPool

<div class="section">

Static class containing PooledNetworkBuffers

</div>

### Unity.Netcode.NetworkClient

<div class="section">

A NetworkClient

</div>

### Unity.Netcode.NetworkConfig

<div class="section">

The configuration object used to start server, client and hosts

</div>

### Unity.Netcode.NetworkConfigurationException

<div class="section">

Exception thrown when the operation can only be done on the server

</div>

### Unity.Netcode.NetworkList-1

<div class="section">

Event based NetworkVariable container for syncing Lists

</div>

### Unity.Netcode.NetworkLog

<div class="section">

Helper class for logging

</div>

### Unity.Netcode.NetworkManager

<div class="section">

The main component of the library

</div>

### Unity.Netcode.NetworkObject

<div class="section">

A component used to identify that a GameObject in the network

</div>

### Unity.Netcode.NetworkPrefabHandler

<div class="section">

Primary handler to add or remove customized spawn and destroy handlers
for a network prefab (i.e. a prefab with a NetworkObject component)
Register custom prefab handlers by implementing the
INetworkPrefabInstanceHandler interface.

</div>

### Unity.Netcode.NetworkReader

<div class="section">

A BinaryReader that can do bit wise manipulation when backed by a
NetworkBuffer

</div>

### Unity.Netcode.NetworkReaderPool

<div class="section">

Static class containing PooledNetworkReaders

</div>

### Unity.Netcode.NetworkSceneManager

<div class="section">

Main class for managing network scenes when EnableSceneManagement is
enabled. Uses the
Unity.Netcode.MessageQueueContainer.MessageType.SceneEvent message to
communicate Unity.Netcode.NetworkSceneManager.SceneEventData between the
server and client(s)

</div>

### Unity.Netcode.NetworkSerializer

<div class="section">

</div>

### Unity.Netcode.NetworkSpawnManager

<div class="section">

Class that handles object spawning

</div>

### Unity.Netcode.NetworkTickSystem

<div class="section">

</div>

### Unity.Netcode.NetworkTimeSystem

<div class="section">

NetworkTimeSystem is a standalone system which can be used to run a
network time simulation. The network time system maintains both a local
and a server time. The local time is based on

</div>

### Unity.Netcode.NetworkTransport

<div class="section">

</div>

### Unity.Netcode.NetworkUpdateLoop

<div class="section">

Represents the network update loop injected into low-level player loop
in Unity.

</div>

### Unity.Netcode.NetworkVariable-1

<div class="section">

A variable that can be synchronized over the network.

</div>

### Unity.Netcode.NetworkVariableBase

<div class="section">

Interface for network value containers

</div>

### Unity.Netcode.NetworkWriter

<div class="section">

A BinaryWriter that can do bit wise manipulation when backed by a
NetworkBuffer

</div>

### Unity.Netcode.NetworkWriterPool

<div class="section">

Static class containing PooledNetworkWriters

</div>

### Unity.Netcode.NotListeningException

<div class="section">

Exception thrown when the operation require NetworkManager to be
listening.

</div>

### Unity.Netcode.NotServerException

<div class="section">

Exception thrown when the operation can only be done on the server

</div>

### Unity.Netcode.PendingClient

<div class="section">

A class representing a client that is currently in the process of
connecting

</div>

### Unity.Netcode.PooledNetworkBuffer

<div class="section">

Disposable NetworkBuffer that returns back to the NetworkBufferPool when
disposed

</div>

### Unity.Netcode.PooledNetworkReader

<div class="section">

Disposable NetworkReader that returns the Reader to the
NetworkReaderPool when disposed

</div>

### Unity.Netcode.PooledNetworkWriter

<div class="section">

Disposable NetworkWriter that returns the Writer to the
NetworkWriterPool when disposed

</div>

### Unity.Netcode.RpcAttribute

<div class="section">

Represents the common base class for Rpc attributes.

</div>

### Unity.Netcode.SceneEvent

<div class="section">

Used for local notifications of various scene events. The OnSceneEvent
of delegate type NetworkSceneManager.SceneEventDelegate uses this class
to provide scene event status/state.

</div>

### Unity.Netcode.SceneEventData

<div class="section">

Used by NetworkSceneManager for
Unity.Netcode.MessageQueueContainer.MessageType.SceneEvent messages
Note: This is only when EnableSceneManagement is enabled

</div>

### Unity.Netcode.SerializationManager

<div class="section">

Helper class to manage the netcode serialization

</div>

### Unity.Netcode.ServerRpcAttribute

<div class="section">

Marks a method as ServerRpc.

A ServerRpc marked method will be fired by a client but executed on the
server.

</div>

### Unity.Netcode.SocketTask

<div class="section">

A single socket task.

</div>

### Unity.Netcode.SocketTasks

<div class="section">

Represents one or more socket tasks.

</div>

### Unity.Netcode.SpawnStateException

<div class="section">

Exception thrown when an object is not yet spawned

</div>

### Unity.Netcode.StreamExtensions

<div class="section">

</div>

### Unity.Netcode.UnityTransport

<div class="section">

</div>

### Unity.Netcode.VisibilityChangeException

<div class="section">

Exception thrown when a visibility change fails

</div>

## 

### Unity.Netcode.ClientRpcParams

<div class="section">

</div>

### Unity.Netcode.ClientRpcReceiveParams

<div class="section">

</div>

### Unity.Netcode.ClientRpcSendParams

<div class="section">

</div>

### Unity.Netcode.NetworkListEvent-1

<div class="section">

Struct containing event information about changes to a NetworkList.

</div>

### Unity.Netcode.NetworkTime

<div class="section">

A struct to represent a point of time in a networked game. Time is
stored as a combination of amount of passed ticks + a duration offset.
This struct is meant to replace the Unity Time API for multiplayer
gameplay.

</div>

### Unity.Netcode.ServerRpcParams

<div class="section">

</div>

### Unity.Netcode.ServerRpcReceiveParams

<div class="section">

</div>

### Unity.Netcode.ServerRpcSendParams

<div class="section">

</div>

## 

### Unity.Netcode.IHasUpdateStage

<div class="section">

</div>

### Unity.Netcode.INetworkPrefabInstanceHandler

<div class="section">

Interface for customizing, overriding, spawning, and destroying Network
Prefabs Used by NetworkPrefabHandler

</div>

### Unity.Netcode.INetworkSerializable

<div class="section">

</div>

### Unity.Netcode.INetworkStreamDriverConstructor

<div class="section">

Provides an interface that overrides the ability to create your own
drivers and pipelines

</div>

### Unity.Netcode.INetworkUpdateSystem

<div class="section">

Defines the required interface of a network update system being executed
by the network update loop.

</div>

## 

### Unity.Netcode.HashSize

<div class="section">

Represents the length of a var int encoded hash Note that the HashSize
does not say anything about the actual final output due to the var int
encoding It just says how many bytes the maximum will be

</div>

### Unity.Netcode.LogLevel

<div class="section">

Log level

</div>

### Unity.Netcode.NetworkDelivery

<div class="section">

Delivery methods

</div>

### Unity.Netcode.NetworkEvent

<div class="section">

Represents a netEvent when polling

</div>

### Unity.Netcode.NetworkListEvent-1.EventType

<div class="section">

Enum representing the different operations available for triggering an
event.

</div>

### Unity.Netcode.NetworkUpdateStage

<div class="section">

Defines network update stages being executed by the network update loop.

</div>

### Unity.Netcode.NetworkVariableReadPermission

<div class="section">

Permission type

</div>

### Unity.Netcode.PendingClient.State

<div class="section">

The states of a connection

</div>

### Unity.Netcode.RpcDelivery

<div class="section">

RPC delivery types

</div>

### Unity.Netcode.SceneEventData.SceneEventTypes

<div class="section">

The different types of scene events communicated between a server and
client. Scene event types can be: A Server To Client Event (S2C) A
Client to Server Event (C2S)

</div>

### Unity.Netcode.SceneEventProgressStatus

<div class="section">

Used by NetworkSceneManager to determine if a server invoked scene event
has started. The returned status is stored in the
Unity.Netcode.SceneEventProgress.Status property. Note: This was
formally known as SwitchSceneProgress which contained the . All s are
now delivered by the OnSceneEvent event handler via the SceneEvent
parameter.

</div>

### Unity.Netcode.UnityTransport.ProtocolType

<div class="section">

</div>

## 

### Unity.Netcode.CustomMessagingManager.HandleNamedMessageDelegate

<div class="section">

Delegate used to handle named messages

</div>

### Unity.Netcode.CustomMessagingManager.UnnamedMessageDelegate

<div class="section">

Delegate used for incoming unnamed messages

</div>

### Unity.Netcode.NetworkList-1.OnListChangedDelegate

<div class="section">

Delegate type for list changed event

</div>

### Unity.Netcode.NetworkManager.ConnectionApprovedDelegate

<div class="section">

Delegate type called when connection has been approved. This only has to
be set on the server.

</div>

### Unity.Netcode.NetworkObject.SpawnDelegate

<div class="section">

Delegate type for checking spawn options

</div>

### Unity.Netcode.NetworkObject.VisibilityDelegate

<div class="section">

Delegate type for checking visibility

</div>

### Unity.Netcode.NetworkSceneManager.SceneEventDelegate

<div class="section">

The delegate callback definition for scene event notifications For more
details review over SceneEvent and
Unity.Netcode.NetworkSceneManager.SceneEventData

</div>

### Unity.Netcode.NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler

<div class="section">

</div>

### Unity.Netcode.NetworkTransport.TransportEventDelegate

<div class="section">

Delegate for transport network events

</div>

### Unity.Netcode.NetworkVariable-1.OnValueChangedDelegate

<div class="section">

Delegate type for value changed event

</div>

### Unity.Netcode.SerializationManager.CustomDeserializationDelegate-1

<div class="section">

The delegate used when registering custom deserialization for a type.

</div>

### Unity.Netcode.SerializationManager.CustomSerializationDelegate-1

<div class="section">

The delegate used when registering custom serialization for a type.

</div>
