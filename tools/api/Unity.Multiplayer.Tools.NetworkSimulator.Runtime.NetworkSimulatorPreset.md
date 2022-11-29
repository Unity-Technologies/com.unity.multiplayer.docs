---  
id: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPreset  
title: Unity.Multiplayer.Tools.NetworkSimulator.Runtime.NetworkSimulatorPreset  
---

<div class="markdown level0 summary">

Preset containing the parameters to configure and simulate network
conditions.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

INetworkSimulatorPreset

</div>

<div>

System.IEquatable\<NetworkSimulatorPreset\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public class NetworkSimulatorPreset : INetworkSimulatorPreset, IEquatable<NetworkSimulatorPreset>
```

## Properties 

### Description

<div class="markdown level1 summary">

Optional description of the configuration.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Description { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Name

<div class="markdown level1 summary">

Network simulation configuration name.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Name { get; set; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### PacketDelayMs

<div class="markdown level1 summary">

Value for the delay between packet in milliseconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketDelayMs { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketJitterMs

<div class="markdown level1 summary">

Value for the network jitter (variance) in milliseconds.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketJitterMs { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketLossInterval

<div class="markdown level1 summary">

Value for at which interval packet are dropped This value is a drop
every X packet, not in time.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketLossInterval { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### PacketLossPercent

<div class="markdown level1 summary">

Value for the average percentage of packet are dropped.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int PacketLossPercent { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Methods 

### Create(String, String, Int32, Int32, Int32, Int32)

<div class="markdown level1 summary">

Utility function to create a configuration at runtime.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkSimulatorPreset Create(string name, string description = "", int packetDelayMs = 0, int packetJitterMs = 0, int packetLossInterval = 0, int packetLossPercent = 0)
```

#### Parameters

| Type          | Name               | Description                                   |
|---------------|--------------------|-----------------------------------------------|
| System.String | name               | Name of the configuration.                    |
| System.String | description        | Description of the configuration.             |
| System.Int32  | packetDelayMs      | Value for the packet delay in milliseconds.   |
| System.Int32  | packetJitterMs     | Value for the network jitter in milliseconds. |
| System.Int32  | packetLossInterval | Value for the packet loss interval.           |
| System.Int32  | packetLossPercent  | Value for the packet loss percentage.         |

#### Returns

| Type                   | Description                       |
|------------------------|-----------------------------------|
| NetworkSimulatorPreset | A valid simulation configuration. |

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object obj)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | obj  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.Object.Equals(System.Object)

</div>

### Equals(NetworkSimulatorPreset)

<div class="markdown level1 summary">

Determines whether the specified object is equal to the current object.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkSimulatorPreset other)
```

#### Parameters

| Type                   | Name  | Description                                    |
|------------------------|-------|------------------------------------------------|
| NetworkSimulatorPreset | other | The object to compare with the current object. |

#### Returns

| Type           | Description                                                                    |
|----------------|--------------------------------------------------------------------------------|
| System.Boolean | true if the specified object is equal to the current object; otherwise, false. |

### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override int GetHashCode()
```

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Overrides

<div>

System.Object.GetHashCode()

</div>

### ToString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override string ToString()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Overrides

<div>

System.Object.ToString()

</div>

### Implements

<div>

INetworkSimulatorPreset

</div>

<div>

System.IEquatable\<T\>

</div>
