---
id: Unity.Multiplayer.Tools.NetStats
title: Unity.Multiplayer.Tools.NetStats
---


### Classes

#### AssemblyRequiresTypeRegistrationAttribute



For internal use. This attribute is automatically added to assemblies
that use types from the multiplayer tools package that require code
generation to work correctly



#### MetricIdTypeLibrary



For internal use. Static class to register MetricId and make them
available to all tools.



#### MetricMetadataAttribute



Attribute to provide more information about a metric, such as a custom
name and units.



#### MetricTypeEnumAttribute



Use this attribute to declare an enum that represents custom metrics for
use with the Multiplayer Tools package. In particular, this attribute
can be used to declare custom metrics that can be displayed in the .



### Structs

#### MetricId



Wrapper around an enum with the MetricTypeEnumAttribute. The struct
provide a way to create metric that can be used with multiplayer tools.



### Enums

#### MetricKind



Represent the kind a metric can be.



#### Units



This enum can be used to indicate the units that a metric is reported
in, so that they can be displayed in the Runtime Network Stats Monitor
with the appropriate units.


