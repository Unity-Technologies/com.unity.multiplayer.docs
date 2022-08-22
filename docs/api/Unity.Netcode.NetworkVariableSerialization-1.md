---
id: Unity.Netcode.NetworkVariableSerialization-1
title: Unity.Netcode.NetworkVariableSerialization-1
---

# Class NetworkVariableSerialization\<T\>


Support methods for reading/writing NetworkVariables Because there are
multiple overloads of WriteValue/ReadValue based on different generic
constraints, but there's no way to achieve the same thing with a class,
this sets up various read/write schemes based on which constraints are
met by `T` using reflection, which is done at module load time.







##### Inheritance


System.Object




NetworkVariableSerialization\<T\>






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
[Serializable]
public static class NetworkVariableSerialization<T>
    where T : struct
```



##### Type Parameters

| Name | Description                                             |
|------|---------------------------------------------------------|
| T    | The type the associated NetworkVariable is templated on |



