---  
id: Unity.Networking.Transport.NetworkSettings  
title: Unity.Networking.Transport.NetworkSettings  
---

<div class="markdown level0 summary">

A list of the parameters that describe the network configuration.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkSettings : IDisposable
```

## 

### NetworkSettings(Allocator)

<div class="markdown level1 summary">

Creates a new NetworkSettings object using the provided allocator. If no
Allocator is provided, Allocator.Temp will be used.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkSettings(Allocator allocator)
```

#### Parameters

| Type      | Name      | Description                                                                                                                   |
|-----------|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| Allocator | allocator | The allocator used for the parameters list. When Allocator.Temp is used, the settings are valid to use only during one frame. |

## 

### AddRawParameterStruct\&lt;T&gt;(ref T)

<div class="markdown level1 summary">

Adds a new parameter to the list. There must be only one instance per
parameter type.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddRawParameterStruct<T>(ref T parameter)
    where T : struct, INetworkParameter
```

#### Parameters

| Type | Name      | Description           |
|------|-----------|-----------------------|
| T    | parameter | The parameter to add. |

#### Type Parameters

| Name | Description                           |
|------|---------------------------------------|
| T    | The type of INetworkParameter to add. |

#### Exceptions

| Type                     | Condition                                                                                                  |
|--------------------------|------------------------------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an argument exception if the paramter type is already in the list or if it contains invalid values. |

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### TryGet\&lt;T&gt;(out T)

<div class="markdown level1 summary">

Try to get the parameter values for the specified type.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool TryGet<T>(out T parameter)
    where T : struct, INetworkParameter
```

#### Parameters

| Type | Name      | Description                  |
|------|-----------|------------------------------|
| T    | parameter | The stored parameter values. |

#### Returns

| Type           | Description                                              |
|----------------|----------------------------------------------------------|
| System.Boolean | Returns true if the parameter is in the paramaters list. |

#### Type Parameters

| Name | Description                        |
|------|------------------------------------|
| T    | The type of the parameters to get. |

### Implements

<div>

System.IDisposable

</div>

### Extension Methods

<div>

BaselibNetworkParameterExtensions.WithBaselibNetworkInterfaceParameters(ref
NetworkSettings, Int32, Int32, UInt32)

</div>

<div>

BaselibNetworkParameterExtensions.GetBaselibNetworkInterfaceParameters(ref
NetworkSettings)

</div>

<div>

CommonNetworkParametersExtensions.WithDataStreamParameters(ref
NetworkSettings, Int32)

</div>

<div>

CommonNetworkParametersExtensions.GetDataStreamParameters(ref
NetworkSettings)

</div>

<div>

CommonNetworkParametersExtensions.WithNetworkConfigParameters(ref
NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32, Int32)

</div>

<div>

CommonNetworkParametersExtensions.GetNetworkConfigParameters(ref
NetworkSettings)

</div>

<div>

NetworkPipelineParametersExtensions.WithPipelineParameters(ref
NetworkSettings, Int32)

</div>

<div>

NetworkPipelineParametersExtensions.GetPipelineParameters(ref
NetworkSettings)

</div>

<div>

FragmentationStageParameterExtensions.WithFragmentationStageParameters(ref
NetworkSettings, Int32)

</div>

<div>

FragmentationStageParameterExtensions.GetFragmentationStageParameters(ref
NetworkSettings)

</div>

<div>

ReliableStageParameterExtensions.WithReliableStageParameters(ref
NetworkSettings, Int32)

</div>

<div>

ReliableStageParameterExtensions.GetReliableStageParameters(ref
NetworkSettings)

</div>

<div>

SimulatorStageParameterExtensions.WithSimulatorStageParameters(ref
NetworkSettings, Int32, Int32, ApplyMode, Int32, Int32, Int32, Int32,
Int32, Int32, Int32, UInt32)

</div>

<div>

SimulatorStageParameterExtensions.GetSimulatorStageParameters(ref
NetworkSettings)

</div>

<div>

RelayParameterExtensions.WithRelayParameters(ref NetworkSettings, ref
RelayServerData, Int32)

</div>

<div>

RelayParameterExtensions.GetRelayParameters(ref NetworkSettings)

</div>
