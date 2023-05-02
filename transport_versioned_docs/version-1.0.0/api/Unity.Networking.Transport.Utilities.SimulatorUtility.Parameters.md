---
id: Unity.Networking.Transport.Utilities.SimulatorUtility.Parameters
title: Unity.Networking.Transport.Utilities.SimulatorUtility.Parameters
---


# Struct SimulatorUtility.Parameters


Configuration parameters for the simulator pipeline stage.






##### Implements



INetworkParameter






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport.Utilities

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct Parameters : INetworkParameter
```



### Fields

#### FuzzFactor


Use the fuzz factor when you want to fuzz a packet. For every packet a
random number generator is used to determine if the packet should have
the internal bits flipped. A percentage of 5 means approximately every
20th packet will be fuzzed, and that each bit in the packet has a 5
percent chance to get flipped.






##### Declaration


``` lang-csharp
public int FuzzFactor
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### FuzzOffset


Use the fuzz offset in conjunction with the fuzz factor, the fuzz offset
will offset where we start flipping bits. This is useful if you want to
only fuzz a part of the packet.






##### Declaration


``` lang-csharp
public int FuzzOffset
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxPacketCount


The maximum amount of packets the pipeline can keep track of. This used
when a packet is delayed, the packet is stored in the pipeline
processing buffer and can be later brought back.






##### Declaration


``` lang-csharp
public int MaxPacketCount
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### MaxPacketSize


The maximum size of a packet which the simulator stores. If a packet
exceeds this size it will bypass the simulator.






##### Declaration


``` lang-csharp
public int MaxPacketSize
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PacketDelayMs


Fixed delay to apply to all packets which pass through.






##### Declaration


``` lang-csharp
public int PacketDelayMs
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PacketDropInterval


Fixed interval to drop packets on. This is most suitable for tests where
predictable behaviour is desired, every Xth packet will be dropped. If
PacketDropInterval is 5 every 5th packet is dropped.






##### Declaration


``` lang-csharp
public int PacketDropInterval
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PacketDropPercentage


Use a drop percentage when deciding when to drop packet. For every
packet a random number generator is used to determine if the packet
should be dropped or not. A percentage of 5 means approximately every
20th packet will be dropped.






##### Declaration


``` lang-csharp
public int PacketDropPercentage
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PacketJitterMs


Variable delay to apply to all packets which pass through, adds or
subtracts amount from fixed delay.






##### Declaration


``` lang-csharp
public int PacketJitterMs
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### RandomSeed


The random seed is used to set the initial seed of the random number
generator. This is useful to get deterministic runs in tests for example
that are dependant on the random number generator.






##### Declaration


``` lang-csharp
public uint RandomSeed
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### Methods

#### Validate()







##### Declaration


``` lang-csharp
public bool Validate()
```



##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



INetworkParameter





