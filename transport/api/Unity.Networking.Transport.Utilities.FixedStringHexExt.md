---
id: Unity.Networking.Transport.Utilities.FixedStringHexExt
title: Unity.Networking.Transport.Utilities.FixedStringHexExt
---


# Class FixedStringHexExt


Provides Extension methods for FixedStrings






##### Inheritance


System.Object




FixedStringHexExt






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
public static class FixedStringHexExt
```



### Methods

#### AppendHex\<T\>(ref T, UInt16)







##### Declaration


``` lang-csharp
public static FormatError AppendHex<T>(this ref T str, ushort val)
    where T : struct, INativeList<byte>, IUTF8Bytes
```



##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| T             | str  |             |
| System.UInt16 | val  |             |

##### Returns

| Type        | Description |
|-------------|-------------|
| FormatError |             |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |



