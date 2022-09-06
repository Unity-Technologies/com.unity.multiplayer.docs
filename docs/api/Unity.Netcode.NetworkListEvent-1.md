---
id: Unity.Netcode.NetworkListEvent-1
title: Unity.Netcode.NetworkListEvent-1
---

# Struct NetworkListEvent\<T\>


Struct containing event information about changes to a NetworkList.







##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct NetworkListEvent<T>
```



##### Type Parameters

| Name | Description                                   |
|------|-----------------------------------------------|
| T    | The type for the list that the event is about |

### Fields

#### Index


the index changed, added or removed if available






##### Declaration


``` lang-csharp
public int Index
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PreviousValue


The previous value when "Value" has changed, if available.






##### Declaration


``` lang-csharp
public T PreviousValue
```



##### Field Value

| Type | Description |
|------|-------------|
| T    |             |

#### Type


Enum representing the operation made to the list.






##### Declaration


``` lang-csharp
public NetworkListEvent<T>.EventType Type
```



##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkListEvent.EventType\<\> |             |

#### Value


The value changed, added or removed if available.






##### Declaration


``` lang-csharp
public T Value
```



##### Field Value

| Type | Description |
|------|-------------|
| T    |             |



