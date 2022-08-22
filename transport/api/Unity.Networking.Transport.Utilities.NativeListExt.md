---
id: Unity.Networking.Transport.Utilities.NativeListExt
title: Unity.Networking.Transport.Utilities.NativeListExt
---


# Class NativeListExt







##### Inheritance


System.Object




NativeListExt






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
public static class NativeListExt
```



### Methods

#### ResizeUninitializedTillPowerOf2\<T\>(NativeList\<T\>, Int32)


This function will make sure that can fit into . If \>= 's Length then
will be ResizeUninitialized to a new length. New Length will be the next
highest power of 2 of






##### Declaration


``` lang-csharp
public static void ResizeUninitializedTillPowerOf2<T>(this NativeList<T> list, int sizeToFit)
    where T : struct
```



##### Parameters

| Type            | Name      | Description                                           |
|-----------------|-----------|-------------------------------------------------------|
| NativeList\<T\> | list      | List that should be resized if sizeToFit \>= its size |
| System.Int32    | sizeToFit | Requested size that should fit into list              |

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |



