---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.INetworkEventsApi  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.INetworkEventsApi  
---

<div class="markdown level0 summary">

API that can be used to inspect the state of the simulated network and
trigger events.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
public interface INetworkEventsApi
```

## Properties 

### CurrentPreset

<div class="markdown level1 summary">

Returns the current connection preset used to simulate network
conditions.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
INetworkSimulatorPreset CurrentPreset { get; }
```

#### Property Value

| Type                    | Description |
|-------------------------|-------------|
| INetworkSimulatorPreset |             |

### IsAvailable

<div class="markdown level1 summary">

Returns whether the Network Simulator fulfills all required dependencies
and is available to be used.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
bool IsAvailable { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsConnected

<div class="markdown level1 summary">

Returns true when Network Simulator is connected.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
bool IsConnected { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### ChangeConnectionPreset(INetworkSimulatorPreset)

<div class="markdown level1 summary">

Changes the current connection preset used to simulate network condition
parameters.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void ChangeConnectionPreset(INetworkSimulatorPreset preset)
```

#### Parameters

| Type                    | Name   | Description                             |
|-------------------------|--------|-----------------------------------------|
| INetworkSimulatorPreset | preset | The Network Simulator Preset being set. |

### Disconnect()

<div class="markdown level1 summary">

Simulates a network disconnection.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void Disconnect()
```

### Reconnect()

<div class="markdown level1 summary">

Reconnects after simulating a network disconnection.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void Reconnect()
```

### TriggerLagSpike(TimeSpan)

<div class="markdown level1 summary">

Simulates a lag spike for the specified duration.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void TriggerLagSpike(TimeSpan duration)
```

#### Parameters

| Type            | Name     | Description                                      |
|-----------------|----------|--------------------------------------------------|
| System.TimeSpan | duration | The duration for which the lag spike shall last. |

### TriggerLagSpikeAsync(TimeSpan)

<div class="markdown level1 summary">

Simulates a lag spike for the specified duration.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
Task TriggerLagSpikeAsync(TimeSpan duration)
```

#### Parameters

| Type            | Name     | Description                                      |
|-----------------|----------|--------------------------------------------------|
| System.TimeSpan | duration | The duration for which the lag spike shall last. |

#### Returns

| Type | Description                                           |
|------|-------------------------------------------------------|
| Task | The task that runs for the duration of the lag spike. |
