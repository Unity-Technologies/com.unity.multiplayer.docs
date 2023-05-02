---
id: Unity.Networking.Transport.NetworkSettings
title: Unity.Networking.Transport.NetworkSettings
---


# Struct NetworkSettings


A list of the parameters that describe the network configuration.






##### Implements



System.IDisposable






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkSettings : IDisposable
```



### Constructors

#### NetworkSettings(Allocator)


Creates a new NetworkSettings object using the provided allocator. If no
Allocator is provided, Allocator.Temp will be used.






##### Declaration


``` lang-csharp
public NetworkSettings(Allocator allocator)
```



##### Parameters

| Type      | Name      | Description                                                                                                                   |
|-----------|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| Allocator | allocator | The allocator used for the parameters list. When Allocator.Temp is used, the settings are valid to use only during one frame. |

### Methods

#### AddRawParameterStruct\<T\>(ref T)


Adds a new parameter to the list. There must be only one instance per
parameter type.






##### Declaration


``` lang-csharp
public void AddRawParameterStruct<T>(ref T parameter)
    where T : struct, INetworkParameter
```



##### Parameters

| Type | Name      | Description           |
|------|-----------|-----------------------|
| T    | parameter | The parameter to add. |

##### Type Parameters

| Name | Description                           |
|------|---------------------------------------|
| T    | The type of INetworkParameter to add. |

##### Exceptions

| Type                     | Condition                                                                                                  |
|--------------------------|------------------------------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an argument exception if the paramter type is already in the list or if it contains invalid values. |

#### Dispose()







##### Declaration


``` lang-csharp
public void Dispose()
```



#### TryGet\<T\>(out T)


Try to get the parameter values for the specified type.






##### Declaration


``` lang-csharp
public bool TryGet<T>(out T parameter)
    where T : struct, INetworkParameter
```



##### Parameters

| Type | Name      | Description                  |
|------|-----------|------------------------------|
| T    | parameter | The stored parameter values. |

##### Returns

| Type           | Description                                              |
|----------------|----------------------------------------------------------|
| System.Boolean | Returns true if the parameter is in the paramaters list. |

##### Type Parameters

| Name | Description                        |
|------|------------------------------------|
| T    | The type of the parameters to get. |

### Implements



System.IDisposable



### Extension Methods



BaselibNetworkParameterExtensions.WithBaselibNetworkInterfaceParameters(ref
NetworkSettings, Int32, Int32, UInt32)





BaselibNetworkParameterExtensions.GetBaselibNetworkInterfaceParameters(ref
NetworkSettings)





CommonNetworkParametersExtensions.WithDataStreamParameters(ref
NetworkSettings, Int32)





CommonNetworkParametersExtensions.GetDataStreamParameters(ref
NetworkSettings)





CommonNetworkParametersExtensions.WithNetworkConfigParameters(ref
NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32)





CommonNetworkParametersExtensions.GetNetworkConfigParameters(ref
NetworkSettings)





NetworkPipelineParametersExtensions.WithPipelineParameters(ref
NetworkSettings, Int32)





NetworkPipelineParametersExtensions.GetPipelineParameters(ref
NetworkSettings)





FragmentationStageParameterExtensions.WithFragmentationStageParameters(ref
NetworkSettings, Int32)





FragmentationStageParameterExtensions.GetFragmentationStageParameters(ref
NetworkSettings)





ReliableStageParameterExtensions.WithReliableStageParameters(ref
NetworkSettings, Int32)





ReliableStageParameterExtensions.GetReliableStageParameters(ref
NetworkSettings)





SimulatorStageParameterExtensions.WithSimulatorStageParameters(ref
NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32,
UInt32)





SimulatorStageParameterExtensions.GetSimulatorStageParameters(ref
NetworkSettings)





RelayParameterExtensions.WithRelayParameters(ref NetworkSettings, ref
RelayServerData, Int32)





RelayParameterExtensions.GetRelayParameters(ref NetworkSettings)





