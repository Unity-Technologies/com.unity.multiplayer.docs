---
id: Unity.Netcode
title: Unity.Netcode
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:41:51 pm
---

## Namespace Unity.Netcode

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### Unity.Netcode.Arithmetic

<div class="section">

Arithmetic helper class

</div>

### Unity.Netcode.BitCounter

<div class="section">

Utility class to count the number of bytes or bits needed to serialize a value.

</div>

### Unity.Netcode.BytePacker

<div class="section">

Utility class for packing values in serialization. ByteUnpacker to

unpack packed values.

</div>

### Unity.Netcode.ByteUnpacker

<div class="section">

Byte Unpacking Helper Class Use this class to unpack values during deserialization for values that were packed. BytePacker to pack unpacked values

</div>

### Unity.Netcode.ClientRpcAttribute

<div class="section">

Marks a method as ClientRpc. A ClientRpc marked method will be fired by the server but executed on clients.

</div>

### Unity.Netcode.CustomMessagingManager

<div class="section">

The manager class to manage custom messages, note that this is different from the NetworkManager custom messages. These are named and are much easier to use.

</div>

### Unity.Netcode.InvalidChannelException

<div class="section">

Exception thrown when a specified network channel is invalid

</div>

### Unity.Netcode.InvalidParentException

<div class="section">

Exception thrown when the new parent candidate of the NetworkObject is not valid

</div>

### Unity.Netcode.NetworkBehaviour

<div class="section">

The base class to override to write network code. Inherits MonoBehaviour

</div>

### Unity.Netcode.NetworkBehaviourUpdater

<div class="section">

An helper class that helps NetworkManager update NetworkBehaviours and replicate them down to connected clients.

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

Exception thrown when a change to a configuration is wrong

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

### Unity.Netcode.NetworkManager.ConnectionApprovalResponse

<div class="section">

Connection Approval Response

</div>

### Unity.Netcode.NetworkObject

<div class="section">

A component used to identify that a GameObject in the network

</div>

### Unity.Netcode.NetworkPrefab

<div class="section">

Class that represents a NetworkPrefab

</div>

### Unity.Netcode.NetworkPrefabHandler

<div class="section">

Primary handler to add or remove customized spawn and destroy handlers for a network prefab (i.e. a prefab with a NetworkObject component) Register custom prefab handlers by implementing the INetworkPrefabInstanceHandler interface.

</div>

### Unity.Netcode.NetworkPrefabs

<div class="section">

A class that represents the runtime aspect of network prefabs. This class contains processed prefabs from the NetworkPrefabsList, as well as additional modifications (additions and removals) made at runtime.

</div>

### Unity.Netcode.NetworkPrefabsList

<div class="section">

A ScriptableObject for holding a network prefabs list, which can be shared between multiple NetworkManagers. When NetworkManagers hold references to this list, modifications to the list at runtime will be picked up by all NetworkManagers that reference it.

</div>

### Unity.Netcode.NetworkSceneManager

<div class="section">

Main class for managing network scenes when EnableSceneManagement is enabled. Uses the Unity.Netcode.SceneEventMessage message to communicate Unity.Netcode.SceneEventData between the server and client(s)

</div>

### Unity.Netcode.NetworkSpawnManager

<div class="section">

Class that handles object spawning

</div>

### Unity.Netcode.NetworkTickSystem

<div class="section">

Provides discretized time. This is useful for games that require ticks happening at regular interval on the server and clients.
</div>

### Unity.Netcode.NetworkTimeSystem

<div class="section">

NetworkTimeSystem is a standalone system which can be used to run a network time simulation. The network time system maintains both a local and a server time. The local time is based on

</div>

### Unity.Netcode.NetworkTransport

<div class="section">

The generic transport class all Netcode for GameObjects network transport implementations derive from. Use this class to add a custom transport. for an example of how a transport is integrated

</div>

### Unity.Netcode.NetworkUpdateLoop

<div class="section">

Represents the network update loop injected into low-level player loop in Unity.

</div>

### Unity.Netcode.NetworkVariable-1

<div class="section">

A variable that can be synchronized over the network.

</div>

### Unity.Netcode.NetworkVariableBase

<div class="section">

Interface for network value containers

</div>

### Unity.Netcode.NetworkVariableSerialization-1

<div class="section">

Support methods for reading/writing NetworkVariables Because there are multiple overloads of WriteValue/ReadValue based on different generic constraints, but there's no way to achieve the same thing with a class, this sets up various read/write schemes based on which constraints are met by `T` using reflection, which is done at module load time.
</div>

### Unity.Netcode.NetworkVariableSerializationTypes

<div class="section">

This class contains initialization functions for various different types used in NetworkVariables. Generally speaking, these methods are called by a module initializer created by codegen (NetworkBehaviourILPP) and do not need to be called manually. There are two types of initializers: Serializers and EqualityCheckers. Every type must have an EqualityChecker registered to it in order to be used in NetworkVariable; however, not all types need a Serializer. Types without a serializer registered will fall back to using the delegates in UserNetworkVariableSerialization\<T\>. If no such delegate has been registered, a type without a serializer will throw an exception on the first attempt to serialize or deserialize it. (Again, however, codegen handles this automatically and this registration doesn't typically need to be performed manually.)

</div>

### Unity.Netcode.NotListeningException

<div class="section">

Exception thrown when the operation require NetworkManager to be listening.

</div>

### Unity.Netcode.NotServerException

<div class="section">

Exception thrown when the operation can only be done on the server

</div>

### Unity.Netcode.PendingClient

<div class="section">

A class representing a client that is currently in the process of connecting

</div>

### Unity.Netcode.RpcAttribute

<div class="section">

Represents the common base class for Rpc attributes.

</div>

### Unity.Netcode.SceneEvent

<div class="section">

Used for local notifications of various scene events. The OnSceneEvent of delegate type NetworkSceneManager.SceneEventDelegate uses this class to provide scene event status.

*Note: This is only when EnableSceneManagement is enabled.*

*\*\*\* Do not start new scene events within scene event notification

callbacks.*

See also:

SceneEventType

</div>

### Unity.Netcode.ServerRpcAttribute

<div class="section">

Marks a method as ServerRpc. A ServerRpc marked method will be fired by a client but executed on the server.

</div>

### Unity.Netcode.SpawnStateException

<div class="section">

Exception thrown when an object is not yet spawned

</div>

### Unity.Netcode.UserNetworkVariableSerialization-1

<div class="section">

This class is used to register user serialization with NetworkVariables for types that are serialized via user serialization, such as with FastBufferReader and FastBufferWriter extension methods. Finding those methods isn't achievable efficiently at runtime, so this allows users to tell NetworkVariable about those extension methods (or simply pass in a lambda)

</div>

### Unity.Netcode.VisibilityChangeException

<div class="section">

Exception thrown when a visibility change fails

</div>

## Structs

### Unity.Netcode.BitReader

<div class="section">

Helper class for doing bitwise reads for a FastBufferReader. Ensures all bitwise reads end on proper byte alignment so FastBufferReader doesn't have to be concerned with misaligned reads.

</div>

### Unity.Netcode.BitWriter

<div class="section">

Helper class for doing bitwise writes for a FastBufferWriter. Ensures all bitwise writes end on proper byte alignment so FastBufferWriter doesn't have to be concerned with misaligned writes.

</div>

### Unity.Netcode.BufferSerializer-1

<div class="section">

Two-way serializer wrapping FastBufferReader or FastBufferWriter.

Implemented as a ref struct for two reasons:

1. The BufferSerializer cannot outlive the FBR/FBW it wraps or using it
    will cause a crash
2. The BufferSerializer must always be passed by reference and can't be
    copied

Ref structs help enforce both of those rules: they can't ref live the stack context in which they were created, and they're always passed by reference no matter what. BufferSerializer doesn't wrapp FastBufferReader or FastBufferWriter directly because it can't. ref structs can't implement interfaces, and in order to be able to have two different implementations with the same interface (which allows us to avoid an "if(IsReader)" on every call), the thing directly wrapping the struct has to implement an interface. So IReaderWriter exists as the interface, which is implemented by a normal struct, while the ref struct wraps the normal one to enforce the two above requirements. (Allowing direct access to the IReaderWriter struct would allow dangerous things to happen because the struct's lifetime could outlive the Reader/Writer's.)

</div>

### Unity.Netcode.ClientRpcParams

<div class="section">

Client-Side RPC Can be used with any client-side remote procedure call

Note: Typically this is used primarily for sending to a specific list of clients as opposed to the default (all). ClientRpcSendParams

</div>

### Unity.Netcode.ClientRpcReceiveParams

<div class="section">

Client-Side RPC Place holder. ServerRpcParams Note: Server will always be the sender, so this structure is a place holder

</div>

### Unity.Netcode.ClientRpcSendParams

<div class="section">

Client-Side RPC The send parameters, when sending client RPCs, provides you wil the ability to target specific clients as a managed or unmanaged list: TargetClientIds and TargetClientIdsNativeArray

</div>

### Unity.Netcode.FastBufferReader

<div class="section">

Optimized class used for reading values from a byte stream FastBufferWriter BytePacker ByteUnpacker

</div>

### Unity.Netcode.FastBufferWriter

<div class="section">

Optimized class used for writing values into a byte stream FastBufferReader BytePacker ByteUnpacker

</div>

### Unity.Netcode.FastBufferWriter.ForEnums

<div class="section">

This empty struct exists to allow overloading WriteValue based on generic constraints. At the bytecode level, constraints aren't included in the method signature, so if multiple methods exist with the same signature, it causes a compile error because they would end up being emitted as the same method, even if the constraints are different. Adding an empty struct with a default value gives them different signatures in the bytecode, which then allows the compiler to do overload resolution based on the generic constraints without the user having to pass the struct in themselves.

</div>

### Unity.Netcode.FastBufferWriter.ForFixedStrings

<div class="section">

This empty struct exists to allow overloading WriteValue based on generic constraints. At the bytecode level, constraints aren't included in the method signature, so if multiple methods exist with the same signature, it causes a compile error because they would end up being emitted as the same method, even if the constraints are different. Adding an empty struct with a default value gives them different signatures in the bytecode, which then allows the compiler to do overload resolution based on the generic constraints without the user having to pass the struct in themselves.
</div>

### Unity.Netcode.FastBufferWriter.ForNetworkSerializable

<div class="section">

This empty struct exists to allow overloading WriteValue based on generic constraints. At the bytecode level, constraints aren't included in the method signature, so if multiple methods exist with the same signature, it causes a compile error because they would end up being emitted as the same method, even if the constraints are different. Adding an empty struct with a default value gives them different signatures in the bytecode, which then allows the compiler to do overload resolution based on the generic constraints without the user having to pass the struct in themselves.
</div>

### Unity.Netcode.FastBufferWriter.ForPrimitives

<div class="section">

This empty struct exists to allow overloading WriteValue based on generic constraints. At the bytecode level, constraints aren't included in the method signature, so if multiple methods exist with the same signature, it causes a compile error because they would end up being emitted as the same method, even if the constraints are different. Adding an empty struct with a default value gives them different signatures in the bytecode, which then allows the compiler to do overload resolution based on the generic constraints without the user having to pass the struct in themselves.

</div>

### Unity.Netcode.FastBufferWriter.ForStructs

<div class="section">

This empty struct exists to allow overloading WriteValue based on generic constraints. At the bytecode level, constraints aren't included in the method signature, so if multiple methods exist with the same signature, it causes a compile error because they would end up being emitted as the same method, even if the constraints are different. Adding an empty struct with a default value gives them different signatures in the bytecode, which then allows the compiler to do overload resolution based on the generic constraints without the user having to pass the struct in themselves.

</div>

### Unity.Netcode.ForceNetworkSerializeByMemcpy-1

<div class="section">

This is a wrapper that adds `INetworkSerializeByMemcpy` support to existing structs that the developer doesn't have the ability to modify (for example, external structs like `Guid`).

</div>

### Unity.Netcode.NetworkBehaviourReference

<div class="section">

A helper struct for serializing NetworkBehaviours over the network. Can be used in RPCs and NetworkVariable\<T\>. Note: network ids get recycled by the NetworkManager after a while. So a reference pointing to

</div>

### Unity.Netcode.NetworkListEvent-1

<div class="section">

Struct containing event information about changes to a NetworkList.

</div>

### Unity.Netcode.NetworkManager.ConnectionApprovalRequest

<div class="section">

Connection Approval Request

</div>

### Unity.Netcode.NetworkObjectReference

<div class="section">

A helper struct for serializing NetworkObjects over the network. Can be used in RPCs and NetworkVariable\<T\>.

</div>

### Unity.Netcode.NetworkTime

<div class="section">

A struct to represent a point of time in a networked game. Time is stored as a combination of amount of passed ticks + a duration offset. This struct is meant to replace the Unity Time API for multiplayer gameplay.
</div>

### Unity.Netcode.ServerRpcParams

<div class="section">

Server-Side RPC Can be used with any sever-side remote procedure call

Note: typically this is use primarily for the ServerRpcReceiveParams

</div>

### Unity.Netcode.ServerRpcReceiveParams

<div class="section">

The receive parameters for server-side remote procedure calls

</div>

### Unity.Netcode.ServerRpcSendParams

<div class="section">

Server-Side RPC Place holder. ServerRpcParams Note: Clients always send to one destination when sending RPCs to the server so this structure is a place holder

</div>

## Interfaces

### Unity.Netcode.INetworkPrefabInstanceHandler

<div class="section">

Interface for customizing, overriding, spawning, and destroying Network Prefabs Used by NetworkPrefabHandler

</div>

### Unity.Netcode.INetworkSerializable

<div class="section">

Interface for implementing custom serializable types.

</div>

### Unity.Netcode.INetworkSerializeByMemcpy

<div class="section">

This interface is a "tag" that can be applied to a struct to mark that struct as being serializable by memcpy. It's up to the developer of the struct to analyze the struct's contents and ensure it is actually serializable by memcpy. This requires all of the members of the struct to be `unmanaged` Plain-Old-Data values - if your struct contains a pointer (or a type that contains a pointer, like `NativeList&lt;T>`), it should be serialized via `INetworkSerializable` or via `FastBufferReader`/`FastBufferWriter` extension methods.

</div>

### Unity.Netcode.INetworkUpdateSystem

<div class="section">

Defines the required interface of a network update system being executed by the NetworkUpdateLoop.
</div>

### Unity.Netcode.IReaderWriter

<div class="section">

Interface for an implementation of one side of a two-way serializer

</div>

## Enums

### Unity.Netcode.HashSize

<div class="section">

Represents the length of a var int encoded hash Note that the HashSize does not say anything about the actual final output due to the var int encoding It just says how many bytes the maximum will be

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

Enum representing the different operations available for triggering an event.

</div>

### Unity.Netcode.NetworkPrefabOverride

<div class="section">

The method of NetworkPrefab override used to identify the source prefab

</div>

### Unity.Netcode.NetworkUpdateStage

<div class="section">

Defines network update stages being executed by the network update loop.

See for more details on update stages:

<https://docs.unity3d.com/ScriptReference/PlayerLoop.Initialization.html>

</div>

### Unity.Netcode.NetworkVariableReadPermission

<div class="section">

The permission types for reading a var

</div>

### Unity.Netcode.NetworkVariableWritePermission

<div class="section">

The permission types for writing a var

</div>

### Unity.Netcode.PendingClient.State

<div class="section">

The states of a connection

</div>

### Unity.Netcode.RpcDelivery

<div class="section">

RPC delivery types

</div>

### Unity.Netcode.SceneEventProgressStatus

<div class="section">

Used by NetworkSceneManager to determine if a server invoked scene event has started. The returned status is stored in the Unity.Netcode.SceneEventProgress.Status property.

*Note: This was formally known as SwitchSceneProgress which contained the . All s are now delivered by the OnSceneEvent event handler via the SceneEvent parameter.*

</div>

### Unity.Netcode.SceneEventType

<div class="section">

The different types of scene events communicated between a server and client. Used by NetworkSceneManager for Unity.Netcode.SceneEventMessage messages.
*Note: This is only when EnableSceneManagement is enabled.*

See also:

SceneEvent

</div>

## Delegates

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

### Unity.Netcode.NetworkObject.SpawnDelegate

<div class="section">

Delegate type for checking spawn options

</div>

### Unity.Netcode.NetworkObject.VisibilityDelegate

<div class="section">

Delegate type for checking visibility

</div>

### Unity.Netcode.NetworkSceneManager.OnEventCompletedDelegateHandler

<div class="section">

Delegate declaration for the OnLoadEventCompleted and OnUnloadEventCompleted events.

See also:

LoadEventCompleted

UnloadEventCompleted

</div>

### Unity.Netcode.NetworkSceneManager.OnLoadCompleteDelegateHandler

<div class="section">

Delegate declaration for the OnLoadComplete event.

See also:

LoadComplete for more information

</div>

### Unity.Netcode.NetworkSceneManager.OnLoadDelegateHandler

<div class="section">

Delegate declaration for the OnLoad event.

See also:

Loadfor more information

</div>

### Unity.Netcode.NetworkSceneManager.OnSynchronizeCompleteDelegateHandler

<div class="section">

Delegate declaration for the OnSynchronizeComplete event.

See also:

SynchronizeComplete for more information

</div>

### Unity.Netcode.NetworkSceneManager.OnSynchronizeDelegateHandler

<div class="section">

Delegate declaration for the OnSynchronize event.

See also:

Synchronize for more information

</div>

### Unity.Netcode.NetworkSceneManager.OnUnloadCompleteDelegateHandler

<div class="section">

Delegate declaration for the OnUnloadComplete event.

See also:

UnloadComplete for more information

</div>

### Unity.Netcode.NetworkSceneManager.OnUnloadDelegateHandler

<div class="section">

Delegate declaration for the OnUnload event.

See also:

Unload for more information

</div>

### Unity.Netcode.NetworkSceneManager.SceneEventDelegate

<div class="section">

The delegate callback definition for scene event notifications.

See also:

SceneEvent

Unity.Netcode.SceneEventData

</div>

### Unity.Netcode.NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler

<div class="section">

Delegate declaration for the VerifySceneBeforeLoading handler that provides an additional level of scene loading security and/or validation to assure the scene being loaded is valid scene to be loaded in the LoadSceneMode specified.
</div>

### Unity.Netcode.NetworkTransport.TransportEventDelegate

<div class="section">

Delegate for transport network events

</div>

### Unity.Netcode.NetworkVariable-1.OnValueChangedDelegate

<div class="section">

Delegate type for value changed event

</div>

### Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate

<div class="section">

The read value delegate handler definition

</div>

### Unity.Netcode.UserNetworkVariableSerialization-1.WriteValueDelegate

<div class="section">

The write value delegate handler definition

</div>
