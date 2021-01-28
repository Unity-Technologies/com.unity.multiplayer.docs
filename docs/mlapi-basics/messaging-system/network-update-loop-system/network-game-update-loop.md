---
id: network-game-update-loop
title: Network Update Loop System
sidebar_label: Network Update Loop System 
---

In order to provide a more modular mechanism for registering with the network game update loop system, it is proposed that a new `INetworkUpdateLoopSystem` interface be used to define the underlying methods that would be used for this process. 

```csharp
/// <summary>
/// INetworkUpdateLoopSystem
/// Use this interface if you need a custom class beyond the scope of GenericUpdateLoopSystem, UpdateLoopBehaviour, and NetworkUpdateLoopBehaviour
///</summary>

14references
public interface INetworkUpdateLoopSystem
{
    4references
    Action RegisterUpdate(NetworkUpdateManager.NetworkUpdateStages stage );
    4references
    void RegisterUpdateLoopSystemDestroyCallback(Action<INetworkUpdateLoopSystem> networkLoopSystemDestroyedCallback);
}
```


Where the RegisterUpdate method is called for each of the four new network loop update stages (PreUpdate, FixedUpdate, Update, and LateUpdate). The class that defines the RegisterUpdate method would either return an action for the update stage in question or null for no updates during the stage being queried for registration. This approach not only provides a wider area of coverage (i.e. any class could register), but it also provides the ability to not register thus not adding the additional overhead of invoking an action for a stage not being used by the class.

The class defined below provides one potential way to both define the `INetworkUpdateLoopSystem's` methods while providing additional class relative helper methods for registering and deregistering from the network update loop system.

```csharp





```




Both the RegisterUpdate and the RegisterUpdateLoopSystemDestroyCallback methods are called by the NetworkUpdateManager during the registration process. Below is a diagram to help better understand the network update loop system registration process: 

Class instance registers with the NetworkUpdateMananger.
During registration, the NetworkUpdateManager calls the class instance’s RegisterUpdate method that will either return null or an Action to be registered for the particular update stage in question. (the diagram above shows only the Update and LateUpdate were registered for example purposes)
If any update stage was registered, then the NetworkUpdateManager will invoke the class instance’s RegisterUpdateLoopSystemDestroyCallback method passing the callback action to be invoked upon the class instance being destroyed or if the class instance just wants to remove itself from the network update loop system stages. So, any INetworkUpdateLoopSystem derived class can opt to register or deregister from network loop update stages during runtime. This can be useful if a network object has associated INetworkUpdateLoopSystem based components and is not considered ‘active’ but is still considered enabled. Under this situation, one could deregister the INetworkUpdateLoopSystem based components to be removed from any network loop system update stages until the network object becomes activated (“active”) again. The registration and deregistration process provides runtime control over when the network update stages for a specific class will be invoked. Under other circumstances, one might want to register for only specific network loop update stages depending on certain events or states. This too can be accomplished by simply deregistering (if already registered) and then re-registering with the new update stages.
Currently, the NetworkingManager and the RpcQueueContainer derive from two predefined INetworkUpdateLoopSystem derived classes (UpdateLoopBehaviour and GenericUpdateLoopSystem).  NetworkingManager: Now derives from the UpdateLoopBehaviour and registers for the following network update loop stages:

PreUpdate: Transport event polling occurs here
Update: The remainder of the NetworkingManager's update occurs here.
RpcQueueContainer: Now derives from the GenericUpdateLoopSystem and registers for all network update loop stages:

PreUpdate: RPCs registered to be invoked at this stage will be invoked.
FixedUpdate: RPCs registered to be invoked at this stage will be invoked.
Update: RPCs registered to be invoked at this stage will be invoked.
LateUpdate: RPCs registered to be invoked at this stage will be invoked.
LateUpdate: Outbound RPCs queued for sending will be batched and sent at this stage
Invoking RPCs at specific Network Update Loop Stages: While there are many future possibilities for this new feature, one of the several driving purposes for this added capability was to provide an intuitive way to invoke RPCs at specific stages during runtime (i.e. dynamically). In order to accomplish this, the network update loop registration process needed to be enhanced (as explained above) and some minor adjustments to the RPC send parameters were needed.



In order to specify what network update stage one might want an RPC to be invoked, adding the ServerRpcParams or ClientRpcParams as the last RPC method’s parameter and setting the UpdateStage is all that is needed:



The above code snippet shows that the ServerRpc, UpdateMyRigidBodyPosition, will be invoked during the network FixedUpdate stage when invoked on the receiver side (in this case the server). The class containing the Rpc method itself does not need to be registered with the NetworkUpdateManager as the RpcQueueContainer handles this portion of the RPC invocation process.