---
id: Unity.Networking.Transport.Utilities.SequenceHelpers
title: Unity.Networking.Transport.Utilities.SequenceHelpers
---

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

# Class SequenceHelpers

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

SequenceHelpers

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

###### **Namespace**: Unity.Networking.Transport.Utilities

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public static class SequenceHelpers
```

</div>

### Methods

#### AbsDistance(UInt16, UInt16)

<div class="markdown level1 summary">

Calculate the difference between two sequence IDs, taking integer
overflow/underflow into account. For example, both AbsDistance(65535, 0)
and AbsDistance(0, 65535) will return 1, not 65535.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static int AbsDistance(ushort lhs, ushort rhs)
```

</div>

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

<div class="markdown level1 summary">

Converts a bitmask integer to a string representation of its binary
expression, e.g. a mask value of 4 will return a string with the 3rd bit
set: 00000000000000000000000000000100

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static string BitMaskToString(uint mask)
```

</div>

##### Parameters

| Type          | Name | Description                    |
|---------------|------|--------------------------------|
| System.UInt32 | mask | The bitmask in integer format. |

##### Returns

| Type          | Description                           |
|---------------|---------------------------------------|
| System.String | A string that represents the bitmask. |

#### GreaterThan16(UInt16, UInt16)

<div class="markdown level1 summary">

Describes whether the non-wrapping difference between two sequenceIDs is
less than 2^15 (or 0x8000, or 32768). (The "16" seems to be the 16th bit
in a 16-bit integer.)

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool GreaterThan16(ushort lhs, ushort rhs)
```

</div>

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

<div class="markdown level1 summary">

This method was originally added in February 2019, but does not seem to
be used anywhere currently. Its original context seems to have been
intended for a very simple version of checking whether a packet's
sequence ID was equal to or newer than the last received packet.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool IsNewer(uint current, uint old)
```

</div>

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

<div class="markdown level1 summary">

Describes whether the non-absolute difference between two sequenceIDs is
greater than or equal to 2^15 (or 0x8000, or 32768). (The "16" seems to
be the 16th bit in a 16-bit integer.)

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool LessThan16(ushort lhs, ushort rhs)
```

</div>

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

<div class="markdown level1 summary">

Describes whether a packet is stale in the context of sequenced
pipelines.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static bool StalePacket(ushort sequence, ushort oldSequence, ushort windowSize)
```

</div>

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
