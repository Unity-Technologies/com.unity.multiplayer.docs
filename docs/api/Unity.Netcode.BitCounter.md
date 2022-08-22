---
id: Unity.Netcode.BitCounter
title: Unity.Netcode.BitCounter
---

# Class BitCounter


Utility class to count the number of bytes or bits needed to serialize a
value.







##### Inheritance


System.Object




BitCounter






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public static class BitCounter
```



### Methods

#### GetUsedBitCount(UInt32)


Get the minimum number of bits required to represent the given value






##### Declaration


``` lang-csharp
public static int GetUsedBitCount(uint value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

##### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The number of bits required |

#### GetUsedBitCount(UInt64)


Get the minimum number of bits required to represent the given value






##### Declaration


``` lang-csharp
public static int GetUsedBitCount(ulong value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value | The value   |

##### Returns

| Type         | Description                 |
|--------------|-----------------------------|
| System.Int32 | The number of bits required |

#### GetUsedByteCount(UInt32)


Get the minimum number of bytes required to represent the given value






##### Declaration


``` lang-csharp
public static int GetUsedByteCount(uint value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt32 | value | The value   |

##### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of bytes required |

#### GetUsedByteCount(UInt64)


Get the minimum number of bytes required to represent the given value






##### Declaration


``` lang-csharp
public static int GetUsedByteCount(ulong value)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.UInt64 | value | The value   |

##### Returns

| Type         | Description                  |
|--------------|------------------------------|
| System.Int32 | The number of bytes required |



