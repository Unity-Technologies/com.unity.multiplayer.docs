---  
id: Unity.Networking.Transport.HMACSHA256  
title: Unity.Networking.Transport.HMACSHA256  
---

<div class="markdown level0 summary">

Utility class used to compute HMACSHA256 hash

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

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public static class HMACSHA256
```

## 

### ComputeHash(Byte\*, Int32, Byte\*, Int32, Byte\*)

<div class="markdown level1 summary">

Writes 32 bytes to result using key and message

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void ComputeHash(byte *keyValue, int keyArrayLength, byte *messageBytes, int messageLength, byte *result)
```

#### Parameters

| Type          | Name           | Description                            |
|---------------|----------------|----------------------------------------|
| System.Byte\* | keyValue       | Key data                               |
| System.Int32  | keyArrayLength | Length of the key data                 |
| System.Byte\* | messageBytes   | Message to hash                        |
| System.Int32  | messageLength  | Length of the message                  |
| System.Byte\* | result         | Where to write resulting 32 bytes hash |
