---
id: Unity.Netcode
title: Unity.Netcode
---

# Namespace Unity.Netcode










### Classes

#### Arithmetic


Arithmetic helper class



#### BitCounter


Utility class to count the number of bytes or bits needed to serialize a
value.



#### BytePacker


Utility class for packing values in serialization. ByteUnpacker to
unpack packed values.



#### ByteUnpacker


Byte Unpacking Helper Class Use this class to unpack values during
deserialization for values that were packed. BytePacker to pack unpacked
values



#### ClientRpcAttribute


Marks a method as ClientRpc.

A ClientRpc marked method will be fired by the server but executed on
clients.



#### CustomMessagingManager


The manager class to manage custom messages, note that this is different
from the NetworkManager custom messages. These are named and are much
easier to use.



#### InvalidChannelException


Exception thrown when a specified network channel is invalid



#### InvalidParentException


Exception thrown when the new parent candidate of the NetworkObject is
not valid



#### NetworkBehaviour


The base class to override to write network code. Inherits MonoBehaviour



#### NetworkBehaviourUpdater


An helper class that helps NetworkManager update NetworkBehaviours and
replicate them down to connected clients.



#### NetworkClient


A NetworkClient



#### NetworkConfig


The configuration object used to start server, client and hosts



#### NetworkConfigurationException


Exception thrown when a change to a configuration is wrong



#### NetworkList\<T\>


Event based NetworkVariable container for syncing Lists



#### NetworkLog


Helper class for logging



#### NetworkManager


The main component of the library



#### NetworkManager.ConnectionApprovalResponse


Connection Approval Response



#### NetworkObject


A component used to identify that a GameObject in the network



#### NetworkPrefabHandler


Primary handler to add or remove customized spawn and destroy handlers
for a network prefab (i.e. a prefab with a NetworkObject component)
Register custom prefab handlers by implementing the
INetworkPrefabInstanceHandler interface.



#### NetworkSceneManager


Main class for managing network scenes when EnableSceneManagement is
enabled. Uses the Unity.Netcode.SceneEventMessage message to communicate
Unity.Netcode.SceneEventData between the server and client(s)



#### NetworkSpawnManager


Class that handles object spawning



#### NetworkTickSystem


Provides discretized time. This is useful for games that require ticks
happening at regular interval on the server and clients.



#### NetworkTimeSystem


NetworkTimeSystem is a standalone system which can be used to run a
network time simulation. The network time system maintains both a local
and a server time. The local time is based on



#### NetworkTransport


The generic transport class all Netcode for GameObjects network
transport implementations derive from. Use this class to add a custom
transport. for an example of how a transport is integrated



#### NetworkUpdateLoop


Represents the network update loop injected into low-level player loop
in Unity.



#### NetworkVariable\<T\>


A variable that can be synchronized over the network.



#### NetworkVariableBase


Interface for network value containers



#### NetworkVariableSerialization\<T\>


Support methods for reading/writing NetworkVariables Because there are
multiple overloads of WriteValue/ReadValue based on different generic
constraints, but there's no way to achieve the same thing with a class,
this sets up various read/write schemes based on which constraints are
met by `T` using reflection, which is done at module load time.



#### NotListeningException


Exception thrown when the operation require NetworkManager to be
listening.



#### NotServerException


Exception thrown when the operation can only be done on the server



#### PendingClient


A class representing a client that is currently in the process of
connecting



#### RpcAttribute


Represents the common base class for Rpc attributes.



#### SceneEvent


Used for local notifications of various scene events. The OnSceneEvent
of delegate type NetworkSceneManager.SceneEventDelegate uses this class
to provide scene event status.  
*Note: This is only when EnableSceneManagement is enabled.*  
*\*\*\* Do not start new scene events within scene event notification
callbacks.*  
See also:  
SceneEventType



#### ServerRpcAttribute


Marks a method as ServerRpc.

A ServerRpc marked method will be fired by a client but executed on the
server.



#### SpawnStateException


Exception thrown when an object is not yet spawned



#### UserNetworkVariableSerialization\<T\>


This class is used to register user serialization with NetworkVariables
for types that are serialized via user serialization, such as with
FastBufferReader and FastBufferWriter extension methods. Finding those
methods isn't achievable efficiently at runtime, so this allows users to
tell NetworkVariable about those extension methods (or simply pass in a
lambda)



#### VisibilityChangeException


Exception thrown when a visibility change fails



### Structs

#### BitReader


Helper class for doing bitwise reads for a FastBufferReader. Ensures all
bitwise reads end on proper byte alignment so FastBufferReader doesn't
have to be concerned with misaligned reads.



#### BitWriter


Helper class for doing bitwise writes for a FastBufferWriter. Ensures
all bitwise writes end on proper byte alignment so FastBufferWriter
doesn't have to be concerned with misaligned writes.



#### BufferSerializer\<TReaderWriter\>


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



#### ClientRpcParams


Client-Side RPC Can be used with any client-side remote procedure call
Note: Typically this is used primarily for sending to a specific list of
clients as opposed to the default (all). ClientRpcSendParams



#### ClientRpcReceiveParams


Client-Side RPC Place holder. ServerRpcParams Note: Server will always
be the sender, so this structure is a place holder



#### ClientRpcSendParams


Client-Side RPC The send parameters, when sending client RPCs, provides
you wil the ability to target specific clients as a managed or unmanaged
list: TargetClientIds and TargetClientIdsNativeArray



#### FastBufferReader


Optimized class used for reading values from a byte stream
FastBufferWriter BytePacker ByteUnpacker



#### FastBufferWriter


Optimized class used for writing values into a byte stream
FastBufferReader BytePacker ByteUnpacker



#### FastBufferWriter.ForEnums


This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.



#### FastBufferWriter.ForFixedStrings


This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.



#### FastBufferWriter.ForNetworkSerializable


This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.



#### FastBufferWriter.ForPrimitives


This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.



#### FastBufferWriter.ForStructs


This empty struct exists to allow overloading WriteValue based on
generic constraints. At the bytecode level, constraints aren't included
in the method signature, so if multiple methods exist with the same
signature, it causes a compile error because they would end up being
emitted as the same method, even if the constraints are different.
Adding an empty struct with a default value gives them different
signatures in the bytecode, which then allows the compiler to do
overload resolution based on the generic constraints without the user
having to pass the struct in themselves.



#### ForceNetworkSerializeByMemcpy\<T\>


This is a wrapper that adds `INetworkSerializeByMemcpy` support to
existing structs that the developer doesn't have the ability to modify
(for example, external structs like `Guid`).



#### NetworkBehaviourReference


A helper struct for serializing NetworkBehaviours over the network. Can
be used in RPCs and NetworkVariable\<T\>. Note: network ids get recycled
by the NetworkManager after a while. So a reference pointing to



#### NetworkListEvent\<T\>


Struct containing event information about changes to a NetworkList.



#### NetworkManager.ConnectionApprovalRequest


Connection Approval Request



#### NetworkObjectReference


A helper struct for serializing NetworkObjects over the network. Can be
used in RPCs and NetworkVariable\<T\>.



#### NetworkTime


A struct to represent a point of time in a networked game. Time is
stored as a combination of amount of passed ticks + a duration offset.
This struct is meant to replace the Unity Time API for multiplayer
gameplay.



#### ServerRpcParams


Server-Side RPC Can be used with any sever-side remote procedure call
Note: typically this is use primarily for the ServerRpcReceiveParams



#### ServerRpcReceiveParams


The receive parameters for server-side remote procedure calls



#### ServerRpcSendParams


Server-Side RPC Place holder. ServerRpcParams Note: Clients always send
to one destination when sending RPCs to the server so this structure is
a place holder



### Interfaces

#### INetworkPrefabInstanceHandler


Interface for customizing, overriding, spawning, and destroying Network
Prefabs Used by NetworkPrefabHandler



#### INetworkSerializable


Interface for implementing custom serializable types.



#### INetworkSerializeByMemcpy


This interface is a "tag" that can be applied to a struct to mark that
struct as being serializable by memcpy. It's up to the developer of the
struct to analyze the struct's contents and ensure it is actually
serializable by memcpy. This requires all of the members of the struct
to be `unmanaged` Plain-Old-Data values - if your struct contains a
pointer (or a type that contains a pointer, like `NativeList&lt;T>`), it
should be serialized via `INetworkSerializable` or via
`FastBufferReader`/`FastBufferWriter` extension methods.



#### INetworkUpdateSystem


Defines the required interface of a network update system being executed
by the NetworkUpdateLoop.



#### IReaderWriter


Interface for an implementation of one side of a two-way serializer



### Enums

#### HashSize


Represents the length of a var int encoded hash Note that the HashSize
does not say anything about the actual final output due to the var int
encoding It just says how many bytes the maximum will be



#### LogLevel


Log level



#### NetworkDelivery


Delivery methods



#### NetworkEvent


Represents a netEvent when polling



#### NetworkListEvent\<T\>.EventType


Enum representing the different operations available for triggering an
event.



#### NetworkUpdateStage


Defines network update stages being executed by the network update loop.
See for more details on update stages:
https://docs.unity3d.com/ScriptReference/PlayerLoop.Initialization.html



#### NetworkVariableReadPermission


The permission types for reading a var



#### NetworkVariableWritePermission


The permission types for writing a var



#### PendingClient.State


The states of a connection



#### RpcDelivery


RPC delivery types



#### SceneEventProgressStatus


Used by NetworkSceneManager to determine if a server invoked scene event
has started. The returned status is stored in the
Unity.Netcode.SceneEventProgress.Status property.  
*Note: This was formally known as SwitchSceneProgress which contained
the . All s are now delivered by the OnSceneEvent event handler via the
SceneEvent parameter.*



#### SceneEventType


The different types of scene events communicated between a server and
client.  
Used by NetworkSceneManager for Unity.Netcode.SceneEventMessage
messages.  
*Note: This is only when EnableSceneManagement is enabled.*  
See also:  
SceneEvent



### Delegates

#### CustomMessagingManager.HandleNamedMessageDelegate


Delegate used to handle named messages



#### CustomMessagingManager.UnnamedMessageDelegate


Delegate used for incoming unnamed messages



#### NetworkList\<T\>.OnListChangedDelegate


Delegate type for list changed event



#### NetworkObject.SpawnDelegate


Delegate type for checking spawn options



#### NetworkObject.VisibilityDelegate


Delegate type for checking visibility



#### NetworkSceneManager.OnEventCompletedDelegateHandler


Delegate declaration for the OnLoadEventCompleted and
OnUnloadEventCompleted events.  
See also:  
LoadEventCompleted  
UnloadEventCompleted



#### NetworkSceneManager.OnLoadCompleteDelegateHandler


Delegate declaration for the OnLoadComplete event.  
See also:  
LoadComplete for more information



#### NetworkSceneManager.OnLoadDelegateHandler


Delegate declaration for the OnLoad event.  
See also:  
Loadfor more information



#### NetworkSceneManager.OnSynchronizeCompleteDelegateHandler


Delegate declaration for the OnSynchronizeComplete event.  
See also:  
SynchronizeComplete for more information



#### NetworkSceneManager.OnSynchronizeDelegateHandler


Delegate declaration for the OnSynchronize event.  
See also:  
Synchronize for more information



#### NetworkSceneManager.OnUnloadCompleteDelegateHandler


Delegate declaration for the OnUnloadComplete event.  
See also:  
UnloadComplete for more information



#### NetworkSceneManager.OnUnloadDelegateHandler


Delegate declaration for the OnUnload event.  
See also:  
Unload for more information



#### NetworkSceneManager.SceneEventDelegate


The delegate callback definition for scene event notifications.  
See also:  
SceneEvent  
Unity.Netcode.SceneEventData



#### NetworkSceneManager.VerifySceneBeforeLoadingDelegateHandler


Delegate declaration for the VerifySceneBeforeLoading handler that
provides an additional level of scene loading security and/or validation
to assure the scene being loaded is valid scene to be loaded in the
LoadSceneMode specified.



#### NetworkTransport.TransportEventDelegate


Delegate for transport network events



#### NetworkVariable\<T\>.OnValueChangedDelegate


Delegate type for value changed event



#### UserNetworkVariableSerialization\<T\>.ReadValueDelegate


The read value delegate handler definition



#### UserNetworkVariableSerialization\<T\>.WriteValueDelegate


The write value delegate handler definition





