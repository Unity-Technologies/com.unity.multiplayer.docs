---
id: Unity.Netcode.Arithmetic
title: Unity.Netcode.Arithmetic
---

# Class Arithmetic


Arithmetic helper class







##### Inheritance


System.Object




Arithmetic






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
public static class Arithmetic
```



### Methods

#### VarIntSize(UInt64)


Gets the output size in bytes after VarInting a unsigned integer






##### Declaration


``` lang-csharp
public static int VarIntSize(ulong value)
```



##### Parameters

| Type          | Name  | Description                              |
|---------------|-------|------------------------------------------|
| System.UInt64 | value | The unsigned integer whose length to get |

##### Returns

| Type         | Description         |
|--------------|---------------------|
| System.Int32 | The amount of bytes |

#### ZigZagDecode(UInt64)


Decides a ZigZag encoded integer back to a signed integer






##### Declaration


``` lang-csharp
public static long ZigZagDecode(ulong value)
```



##### Parameters

| Type          | Name  | Description          |
|---------------|-------|----------------------|
| System.UInt64 | value | The unsigned integer |

##### Returns

| Type         | Description                       |
|--------------|-----------------------------------|
| System.Int64 | The signed version of the integer |

#### ZigZagEncode(Int64)


ZigZag encodes a signed integer and maps it to a unsigned integer






##### Declaration


``` lang-csharp
public static ulong ZigZagEncode(long value)
```



##### Parameters

| Type         | Name  | Description                  |
|--------------|-------|------------------------------|
| System.Int64 | value | The signed integer to encode |

##### Returns

| Type          | Description                             |
|---------------|-----------------------------------------|
| System.UInt64 | A ZigZag encoded version of the integer |



