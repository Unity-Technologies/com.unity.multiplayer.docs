---
id: Unity.Netcode
title: Unity.Netcode
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

# Namespace Unity.Netcode

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

### Classes

#### Arithmetic

<div class="section">

Arithmetic helper class

</div>

#### BitCounter

<div class="section">

Utility class to count the number of bytes or bits needed to serialize a
value.

</div>

#### BytePacker

<div class="section">

Utility class for packing values in serialization. ByteUnpacker to
unpack packed values.

</div>

#### ByteUnpacker

<div class="section">

Byte Unpacking Helper Class Use this class to unpack values during
deserialization for values that were packed. BytePacker to pack unpacked
values

</div>

#### ClientRpcAttribute

<div class="section">

Marks a method as ClientRpc.

A ClientRpc marked method will be fired by the server but executed on
clients.

</div>

#### CustomMessagingManager

<div class="section">

The manager class to manage custom messages, note that this is different
from the NetworkManager custom messages. These are named and are much
easier to use.

</div>

#### InvalidChannelException

<div class="section">

Exception thrown when a specified network channel is invalid

</div>

#### InvalidParentException

<div class="section">

Exception thrown when the new parent candidate of the NetworkObject is
not valid

</div>

#### NetworkBehaviour

<div class="section">

The base class to override to write network code. Inherits MonoBehaviour

</div>

#### NetworkBehaviourUpdater

<div class="section">

An helper class that helps NetworkManager update NetworkBehaviours and
replicate them down to connected clients.

</div>

#### NetworkClient

<div class="section">

A NetworkClient

</div>

#### NetworkConfig

<div class="section">

The configuration object used to start server, client and hosts

</div>

#### NetworkConfigurationException

<div class="section">

Exception thrown when a change to a configuration is wrong

</div>

#### NetworkList\<T\>

<div class="section">

Event based NetworkVariable container for syncing Lists

</div>

#### NetworkLog

<div class="section">

Helper class for logging

</div>

#### NetworkManager

<div class="section">

The main component of the library

</div>

#### NetworkManager.ConnectionApprovalResponse

<div class="section">

Connection Approval Response

</div>

#### NetworkObject

<div class="section">

A component used to identify that a GameObject in the network

</div>

#### NetworkPrefabHandler

<div class="section">

Primary handler to add or remove customized spawn and destroy handlers
for a network prefab (i.e. a prefab with a NetworkObject component)
Register custom prefab handlers by implementing the
INetworkPrefabInstanceHandler interface.

</div>

#### NetworkSceneManager

<div class="section">

Main class for managing network scenes when EnableSceneManagement is
enabled. Uses the Unity.Netcode.SceneEventMessage message to communicate
Unity.Netcode.SceneEventData between the server and client(s)

</div>

#### NetworkSpawnManager

<div class="section">

Class that handles object spawning

</div>

#### NetworkTickSystem

<div class="section">

Provides discretized time. This is useful for games that require ticks
happening at regular interval on the server and clients.

</div>

#### NetworkTimeSystem

<div class="section">

NetworkTimeSystem is a standalone system which can be used to run a
network time simulation. The network time system maintains both a local
and a server time. The local time is based on

</div>

#### NetworkTransport

<div class="section">

The generic transport class all Netcode for GameObjects network
transport implementations derive from. Use this class to add a custom
transport. for an example of how a transport is integrated

</div>

#### NetworkUpdateLoop

<div class="section">

Represents the network update loop injected into low-level player loop
in Unity.

</div>

#### NetworkVariable\<T\>

<div class="section">

A variable that can be synchronized over the network.

</div>

#### NetworkVariableBase

<div class="section">

Interface for network value containers

</div>

#### NetworkVariableSerialization\<T\>

<div class="section">

Support methods for reading/writing NetworkVariables Because there are
multiple overloads of WriteValue/ReadValue based on different generic
constraints, but there's no way to achieve the same thing with a class,
this sets up various read/write schemes based on which constraints are
met by `T` using reflection, which is done at module load time.

</div>

#### NotListeningException

<div class="section">

Exception thrown when the operation require NetworkManager to be
listening.

</div>

#### NotServerException

<div class="section">

Exception thrown when the operation can only be done on the server

</div>

#### PendingClient

<div class="section">

A class representing a client that is currently in the process of
connecting

</div>

#### RpcAttribute

<div class="section">

Represents the common base class for Rpc attributes.

</div>

#### SceneEvent

<div class="section">

Used for local notifications of various scene events. The OnSceneEvent
of delegate type NetworkSceneManager.SceneEventDelegate uses this class
to provide scene event status.  
*Note: This is only when EnableSceneManagement is enabled.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  
See also:  
SceneEventType

</div>

#### ServerRpcAttribute

<div class="section">

Marks a method as ServerRpc.

A ServerRpc marked method will be fired by a client but executed on the
server.

</div>

#### SpawnStateException

<div class="section">

Exception thrown when an object is not yet spawned

</div>

#### UserNetworkVariableSerialization\<T\>

<div class="section">

This class is used to register user serialization with NetworkVariables
for types that are serialized via user serialization, such as with
FastBufferReader and FastBufferWriter extension methods. Finding those
methods isn't achievable efficiently at runtime, so this allows users to
tell NetworkVariable about those extension methods (or simply pass in a
lambda)

</div>

#### VisibilityChangeException

<div class="section">

Exception thrown when a visibility change fails

</div>

### Structs

#### BitReader

<div class="section">

Helper class for doing bitwise reads for a FastBufferReader. Ensures all
bitwise reads end on proper byte alignment so FastBufferReader doesn't
have to be concerned with misaligned reads.

</div>

#### BitWriter

<div class="section">

Helper class for doing bitwise writes for a FastBufferWriter. Ensures
all bitwise writes end on proper byte alignment so FastBufferWriter
doesn't have to be concerned with misaligned writes.

</div>

#### BufferSerializer\<TReaderWriter\>

<div class="section">

Two-way serializer wrapping FastBufferReader or FastBufferWriter.

Implemented as a ref struct for two reasons:

1.  The BufferSerializer cannot outlive the FBR/FBW it wraps or using it
    will cause a crash
2.  The BufferSerializer must always be passed by reference and can't be
    copied

Ref structs help enforce both of those rules: they can't ref live the
stack context in which they were created, and they're always passed by
reference no matter what.

BufferSerializer doesn't wrapp FastBufferReader or FastBufferWriter
directly because it can't. ref structs can't implement interfaces, and
in order to be able to have two different implementations with the same
interface (which allows us to avoid an "if(IsReader)" on every call),
the thing directly wrapping the struct has to implement an interface. So
IReaderWriter exists as the interface, which is implemented by a normal
struct, while the ref struct wraps the normal one to enforce the two
above requirements. (Allowing direct access to the IReaderWriter struct
would allow dangerous things to happen because the struct's lifetime
could outlive the Reader/Writer's.)

</div>

#### ClientRpcParams

<div class="section">

Client-Side RPC Can be used with any client-side remote procedure call
Note: Typically this is used primarily for sending to a specific list of
clients as opposed to the default (all). ClientRpcSendParams

</div>

#### ClientRpcReceiveParams

<div class="section">

Client-Side RPC Place holder. ServerRpcParams Note: Server will always
be the sender, so this structure is a place holder

</div>

#### ClientRpcSendParams

<div class="section">

Client-Side RPC The send parameters, when sending client RPCs, provides
you wil the ability to target specific clients as a managed or unmanaged
list: TargetClientIds and TargetClientIdsNativeArray

</div>

#### FastBufferReader

<div class="section">

Optimized class used for reading values from a byte stream
FastBufferWriter BytePacker ByteUnpacker

</div>

#### FastBufferWriter

<div class="section">

Optimized class used for writing values into a byte stream
FastBufferReader BytePacker ByteUnpacker

</div>

#### FastBufferWriter.ForEnums

<div class="section">

This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.

</div>

#### FastBufferWriter.ForFixedStrings

<div class="section">

This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.

</div>

#### FastBufferWriter.ForNetworkSerializable

<div class="section">

This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.

</div>

#### FastBufferWriter.ForPrimitives

<div class="section">

This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.

</div>

#### FastBufferWriter.ForStructs

<div class="section">

This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.

</div>

#### ForceNetworkSerializeByMemcpy\<T\>

<div class="section">

This is a wrapper that adds `INetworkSerializeByMemcpy` support to
existing structs that the developer doesn't have the ability to modify
(for example, external structs like `Guid`).

</div>

#### NetworkBehaviourReference

<div class="section">

A helper struct for serializing NetworkBehaviours over the network. Can
be used in RPCs and NetworkVariable\<T\>. Note: network ids get recycled
by the NetworkManager after a while. So a reference pointing to

</div>

#### NetworkListEvent\<T\>

<div class="section">

Struct containing event information about changes to a NetworkList.

</div>

#### NetworkManager.ConnectionApprovalRequest

<div class="section">

Connection Approval Request

</div>

#### NetworkObjectReference

<div class="section">

A helper struct for serializing NetworkObjects over the network. Can be
used in RPCs and NetworkVariable\<T\>.

</div>

#### NetworkTime

<div class="section">

A struct to represent a point of time in a networked game. Time is
stored as a combination of amount of passed ticks + a duration offset.
This struct is meant to replace the Unity Time API for multiplayer
gameplay.

</div>

#### ServerRpcParams

<div class="section">

Server-Side RPC Can be used with any sever-side remote procedure call
Note: typically this is use primarily for the ServerRpcReceiveParams

</div>

#### ServerRpcReceiveParams

<div class="section">

The receive parameters for server-side remote procedure calls

</div>

#### ServerRpcSendParams

<div class="section">

Server-Side RPC Place holder. ServerRpcParams Note: Clients always send
to one destination when sending RPCs to the server so this structure is
a place holder

</div>

### Interfaces

#### INetworkPrefabInstanceHandler

<div class="section">

Interface for customizing, overriding, spawning, and destroying Network
Prefabs Used by NetworkPrefabHandler

</div>

#### INetworkSerializable

<div class="section">

Interface for implementing custom serializable types.

</div>

#### INetworkSerializeByMemcpy

<div class="section">

This interface is a "tag" that can be applied to a struct to mark that
struct as being serializable by memcpy. It's up to the developer of the
struct to analyze the struct's contents and ensure it is actually
serializable by memcpy. This requires all of the members of the struct
to be `unmanaged` Plain-Old-Data values - if your struct contains a
pointer (or a type that contains a pointer, like `NativeList&lt;T>`), it
should be serialized via `INetworkSerializable` or via
`FastBufferReader`/`FastBufferWriter` extension methods.

</div>

#### INetworkUpdateSystem

<div class="section">

Defines the required interface of a network update system being executed
by the NetworkUpdateLoop.

</div>

#### IReaderWriter

<div class="section">

Interface for an implementation of one side of a two-way serializer

</div>

### Enums

#### HashSize

<div class="section">

Represents the length of a var int encoded hash Note that the HashSize
does not say anything about the actual final output due to the var int
encoding It just says how many bytes the maximum will be

</div>

#### LogLevel

<div class="section">

Log level

</div>

#### NetworkDelivery

<div class="section">

Delivery methods

</div>

#### NetworkEvent

<div class="section">

Represents a netEvent when polling

</div>

#### NetworkListEvent\<T\>.EventType

<div class="section">

Enum representing the different operations available for triggering an
event.

</div>

#### NetworkUpdateStage

<div class="section">

Defines network update stages being executed by the network update loop.
See for more details on update stages:
https://docs.unity3d.com/ScriptReference/PlayerLoop.Initialization.html

</div>

#### NetworkVariableReadPermission

<div class="section">

The permission types for reading a var

</div>

#### NetworkVariableWritePermission

<div class="section">

The permission types for writing a var

</div>

#### PendingClient.State

<div class="section">

The states of a connection

</div>

#### RpcDelivery

<div class="section">

RPC delivery types

</div>

#### SceneEventProgressStatus

<div class="section">

Used by NetworkSceneManager to determine if a server invoked scene event
has started. The returned status is stored in the
Unity.Netcode.SceneEventProgress.Status property.  
*Note: This was formally known as SwitchSceneProgress which contained
the . All s are now delivered by the OnSceneEvent event handler via the
SceneEvent parameter.*

</div>

#### SceneEventType

<div class="section">

The different types of scene events communicated between a server and
client.  
Used by NetworkSceneManager for Unity.Netcode.SceneEventMessage
messages.  
*Note: This is only when EnableSceneManagement is enabled.*  
See also:  
SceneEvent

</div>

### Delegates

#### CustomMessagingManager.HandleNamedMessageDelegate

<div class="section">

Delegate used to handle named messages

</div>

#### CustomMessagingManager.UnnamedMessageDelegate

<div class="section">

Delegate used for incoming unnamed messages

</div>

#### NetworkList\<T\>.OnListChangedDelegate

<div class="section">

Delegate type for list changed event

</div>

#### NetworkObject.SpawnDelegate

<div class="section">

Delegate type for checking spawn options

</div>

#### NetworkObject.VisibilityDelegate

<div class="section">

Delegate type for checking visibility

</div>

#### NetworkSceneManager.OnEventCompletedDelegateHandler

<div class="section">

Delegate declaration for the OnLoadEventCompleted and
OnUnloadEventCompleted events.  
See also:  
LoadEventCompleted  
UnloadEventCompleted

</div>

#### NetworkSceneManager.OnLoadCompleteDelegateHandler

<div class="section">

Delegate declaration for the OnLoadComplete event.  
See also:  
LoadComplete for more information

</div>

#### NetworkSceneManager.OnLoadDelegateHandler

<div class="section">

Delegate declaration for the OnLoad event.  
See also:  
Loadfor more information

</div>

#### NetworkSceneManager.OnSynchronizeCompleteDelegateHandler

<div class="section">

Delegate declaration for the OnSynchronizeComplete event.  
See also:  
SynchronizeComplete for more information

</div>

#### NetworkSceneManager.OnSynchronizeDelegateHandler

<div class="section">

Delegate declaration for the OnSynchronize event.  
See also:  
Synchronize for more information

</div>

#### NetworkSceneManager.OnUnloadCompleteDelegateHandler

<div class="section">

Delegate declaration for the OnUnloadComplete event.  
See also:  
UnloadComplete for more information

</div>

#### NetworkSceneManager.OnUnloadDelegateHandler

<div class="section">

Delegate declaration for the OnUnload event.  
See also:  
Unload for more information

</div>

#### NetworkSceneManager.SceneEventDelegate

<div class="section">

The delegate callback definition for scene event notifications.  
See also:  
SceneEvent  
Unity.Netcode.SceneEventData

</div>

#### NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler

<div class="section">

Delegate declaration for the VerifySceneBeforeLoading handler that
provides an additional level of scene loading security and/or validation
to assure the scene being loaded is valid scene to be loaded in the
LoadSceneMode specified.

</div>

#### NetworkTransport.TransportEventDelegate

<div class="section">

Delegate for transport network events

</div>

#### NetworkVariable\<T\>.OnValueChangedDelegate

<div class="section">

Delegate type for value changed event

</div>

#### UserNetworkVariableSerialization\<T\>.ReadValueDelegate

<div class="section">

The read value delegate handler definition

</div>

#### UserNetworkVariableSerialization\<T\>.WriteValueDelegate

<div class="section">

The write value delegate handler definition

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
