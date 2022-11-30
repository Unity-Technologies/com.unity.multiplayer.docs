---  
id: Unity.Multiplayer.Tools.NetStats  
title: Unity.Multiplayer.Tools.NetStats  
---

## Namespace Unity.Multiplayer.Tools.NetStats

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### Unity.Multiplayer.Tools.NetStats.AssemblyRequiresTypeRegistrationAttribute

<div class="section">

For internal use. This attribute is automatically added to assemblies
that use types from the multiplayer tools package that require code
generation to work correctly

</div>

### Unity.Multiplayer.Tools.NetStats.MetricIdTypeLibrary

<div class="section">

For internal use. Static class to register MetricId and make them
available to all tools.

</div>

### Unity.Multiplayer.Tools.NetStats.MetricMetadataAttribute

<div class="section">

Attribute to provide more information about a metric, such as a custom
name and units.

</div>

### Unity.Multiplayer.Tools.NetStats.MetricTypeEnumAttribute

<div class="section">

Use this attribute to declare an enum that represents custom metrics for
use with the Multiplayer Tools package. In particular, this attribute
can be used to declare custom metrics that can be displayed in the .

</div>

## Structs

### Unity.Multiplayer.Tools.NetStats.MetricId

<div class="section">

Wrapper around an enum with the MetricTypeEnumAttribute. The struct
provide a way to create metric that can be used with multiplayer tools.

</div>

## Enums

### Unity.Multiplayer.Tools.NetStats.MetricKind

<div class="section">

Represent the kind a metric can be.

</div>

### Unity.Multiplayer.Tools.NetStats.Units

<div class="section">

This enum can be used to indicate the units that a metric is reported
in, so that they can be displayed in the Runtime Network Stats Monitor
with the appropriate units.

</div>
