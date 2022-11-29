---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime  
---

## Namespace Unity.Multiplayer.Tools.NetworkSimulator.Runtime

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.MinMaxRangeAttribute

<div class="section">

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenario

<div class="section">

Base class to implement network scenarios, used to start, pause, and
resume their behavior at runtime.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenarioBehaviour

<div class="section">

Base class to use a MonoBehaviour-style frame update loop with network
scenarios.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkScenarioTask

<div class="section">

Base class to use network scenarios with asynchronous Tasks.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulator

<div class="section">

Add this component to any game object to configure network simulation
parameters.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPreset

<div class="section">

Preset containing the parameters to configure and simulate network
conditions.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPresetAsset

<div class="section">

ScriptableObject used to store the parameters to configure and simulate
network conditions.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPresets

<div class="section">

Static class containing the built-in presets to configure and simulate
network conditions.

</div>

## Interfaces

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.INetworkEventsApi

<div class="section">

API that can be used to inspect the state of the simulated network and
trigger events.

</div>

### Unity.Multiplayer.Tools.NetworkSimulator.Runtime.INetworkSimulatorPreset

<div class="section">

Aggregates configuration values used as presets for the network
simulator.

</div>
