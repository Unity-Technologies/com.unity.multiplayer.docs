---
id: Unity.Netcode.UserNetworkVariableSerialization-1
title: Unity.Netcode.UserNetworkVariableSerialization-1
---

# Class UserNetworkVariableSerialization\<T\>


This class is used to register user serialization with NetworkVariables
for types that are serialized via user serialization, such as with
FastBufferReader and FastBufferWriter extension methods. Finding those
methods isn't achievable efficiently at runtime, so this allows users to
tell NetworkVariable about those extension methods (or simply pass in a
lambda)







##### Inheritance


System.Object




UserNetworkVariableSerialization\<T\>






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
public class UserNetworkVariableSerialization<T>
```



##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Fields

#### ReadValue


The UserNetworkVariableSerialization\<T\>.ReadValueDelegate delegate
handler declaration






##### Declaration


``` lang-csharp
public static UserNetworkVariableSerialization<T>.ReadValueDelegate ReadValue
```



##### Field Value

| Type                                                   | Description |
|--------------------------------------------------------|-------------|
| UserNetworkVariableSerialization.ReadValueDelegate\<\> |             |

#### WriteValue


The UserNetworkVariableSerialization\<T\>.WriteValueDelegate delegate
handler declaration






##### Declaration


``` lang-csharp
public static UserNetworkVariableSerialization<T>.WriteValueDelegate WriteValue
```



##### Field Value

| Type                                                    | Description |
|---------------------------------------------------------|-------------|
| UserNetworkVariableSerialization.WriteValueDelegate\<\> |             |



