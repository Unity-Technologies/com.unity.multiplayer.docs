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

# Struct NetworkSettings

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

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkSettings : IDisposable
```

</div>

### Constructors

#### NetworkSettings(Allocator)

<div class="markdown level1 summary">

Creates a new NetworkSettings object using the provided allocator. If no
Allocator is provided, Allocator.Temp will be used.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkSettings(Allocator allocator)
```

</div>

##### Parameters

| Type      | Name      | Description                                                                                                                   |
|-----------|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| Allocator | allocator | The allocator used for the parameters list. When Allocator.Temp is used, the settings are valid to use only during one frame. |

### Methods

#### AddRawParameterStruct\<T\>(ref T)

<div class="markdown level1 summary">

Adds a new parameter to the list. There must be only one instance per
parameter type.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void AddRawParameterStruct<T>(ref T parameter)
    where T : struct, INetworkParameter
```

</div>

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

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Dispose()
```

</div>

#### TryGet\<T\>(out T)

<div class="markdown level1 summary">

Try to get the parameter values for the specified type.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryGet<T>(out T parameter)
    where T : struct, INetworkParameter
```

</div>

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
NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32)

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
NetworkSettings, Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32,
UInt32)

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
