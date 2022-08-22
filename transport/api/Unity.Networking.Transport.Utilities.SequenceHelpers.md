---
id: Unity.Networking.Transport.Utilities.SequenceHelpers
title: Unity.Networking.Transport.Utilities.SequenceHelpers
---


# Class SequenceHelpers







##### Inheritance


System.Object




SequenceHelpers






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Networking.Transport.Utilities

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public static class SequenceHelpers
```



### Methods

#### AbsDistance(UInt16, UInt16)


Calculate the difference between two sequence IDs, taking integer
overflow/underflow into account. For example, both AbsDistance(65535, 0)
and AbsDistance(0, 65535) will return 1, not 65535.






##### Declaration


``` lang-csharp
public static int AbsDistance(ushort lhs, ushort rhs)
```



##### Parameters

| Type          | Name | Description                                         |
|---------------|------|-----------------------------------------------------|
| System.UInt16 | lhs  | The first sequence ID. Compared against the second. |
| System.UInt16 | rhs  | The second sequence ID. Compared against the first. |

##### Returns

| Type         | Description                                                      |
|--------------|------------------------------------------------------------------|
| System.Int32 | An integer value equal to the distance between the sequence IDs. |

#### BitMaskToString(UInt32)


Converts a bitmask integer to a string representation of its binary
expression, e.g. a mask value of 4 will return a string with the 3rd bit
set: 00000000000000000000000000000100






##### Declaration


``` lang-csharp
public static string BitMaskToString(uint mask)
```



##### Parameters

| Type          | Name | Description                    |
|---------------|------|--------------------------------|
| System.UInt32 | mask | The bitmask in integer format. |

##### Returns

| Type          | Description                           |
|---------------|---------------------------------------|
| System.String | A string that represents the bitmask. |

#### GreaterThan16(UInt16, UInt16)


Describes whether the non-wrapping difference between two sequenceIDs is
less than 2^15 (or 0x8000, or 32768). (The "16" seems to be the 16th bit
in a 16-bit integer.)






##### Declaration


``` lang-csharp
public static bool GreaterThan16(ushort lhs, ushort rhs)
```



##### Parameters

| Type          | Name | Description         |
|---------------|------|---------------------|
| System.UInt16 | lhs  | The first operand.  |
| System.UInt16 | rhs  | The second operand. |

##### Returns

| Type           | Description                                                                                                   |
|----------------|---------------------------------------------------------------------------------------------------------------|
| System.Boolean | Whether or not the non-wrapping difference between the two operands is less than or equal to unsigned 0x7FFF. |

#### IsNewer(UInt32, UInt32)


This method was originally added in February 2019, but does not seem to
be used anywhere currently. Its original context seems to have been
intended for a very simple version of checking whether a packet's
sequence ID was equal to or newer than the last received packet.






##### Declaration


``` lang-csharp
public static bool IsNewer(uint current, uint old)
```



##### Parameters

| Type          | Name    | Description                                        |
|---------------|---------|----------------------------------------------------|
| System.UInt32 | current | The sequence ID of a newly-arrived packet to check |
| System.UInt32 | old     | The sequence ID of a previously received packet    |

##### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true if current is newer than old |

#### LessThan16(UInt16, UInt16)


Describes whether the non-absolute difference between two sequenceIDs is
greater than or equal to 2^15 (or 0x8000, or 32768). (The "16" seems to
be the 16th bit in a 16-bit integer.)






##### Declaration


``` lang-csharp
public static bool LessThan16(ushort lhs, ushort rhs)
```



##### Parameters

| Type          | Name | Description         |
|---------------|------|---------------------|
| System.UInt16 | lhs  | The first operand.  |
| System.UInt16 | rhs  | The second operand. |

##### Returns

| Type           | Description                                                                                          |
|----------------|------------------------------------------------------------------------------------------------------|
| System.Boolean | Whether or not the non-wrapping difference between the two operands is greater than unsigned 0x7FFF. |

#### StalePacket(UInt16, UInt16, UInt16)


Describes whether a packet is stale in the context of sequenced
pipelines.






##### Declaration


``` lang-csharp
public static bool StalePacket(ushort sequence, ushort oldSequence, ushort windowSize)
```



##### Parameters

| Type          | Name        | Description                  |
|---------------|-------------|------------------------------|
| System.UInt16 | sequence    | The more recent sequence ID. |
| System.UInt16 | oldSequence | The older sequence ID.       |
| System.UInt16 | windowSize  | The window size              |

##### Returns

| Type           | Description                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | A boolean value containing the results of LessThan16(UInt16, UInt16) where lhs = sequence and rhs = oldSequence - windowSize. |



