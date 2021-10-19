---  
id: Unity.Networking.Transport.Base64  
title: Unity.Networking.Transport.Base64  
---

<div class="markdown level0 summary">

Utility class used to Decode a base64 string

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
public static class Base64
```

## 

### FromBase64String(String, Byte\*, Int32)

<div class="markdown level1 summary">

Decodes base64 string and writes binary data into dest

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static int FromBase64String(string base64, byte *dest, int destMaxLength)
```

#### Parameters

| Type          | Name          | Description                         |
|---------------|---------------|-------------------------------------|
| System.String | base64        | Input base64 string to decode       |
| System.Byte\* | dest          | Decoded base64 will be written here |
| System.Int32  | destMaxLength | Max length that dest can handle.    |

#### Returns

| Type         | Description                                                                                                                                                               |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Int32 | Actual length of data that was written to dest. Less or equal than destLength. On error, will throw if ENABLE_UNITY_COLLECTIONS_CHECK is defined, or return -1 otherwise. |
