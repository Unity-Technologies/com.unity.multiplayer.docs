---
id: Unity.Netcode.ForceNetworkSerializeByMemcpy-1
title: Unity.Netcode.ForceNetworkSerializeByMemcpy-1
---

# Struct ForceNetworkSerializeByMemcpy\<T\>


This is a wrapper that adds `INetworkSerializeByMemcpy` support to
existing structs that the developer doesn't have the ability to modify
(for example, external structs like `Guid`).







##### Implements



INetworkSerializeByMemcpy





System.IEquatable\<ForceNetworkSerializeByMemcpy\<T\>\>






##### Inherited Members



System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public struct ForceNetworkSerializeByMemcpy<T> : INetworkSerializeByMemcpy, IEquatable<ForceNetworkSerializeByMemcpy<T>> where T : struct, IEquatable<T>
```



##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Constructors

#### ForceNetworkSerializeByMemcpy(T)


The default constructor for ForceNetworkSerializeByMemcpy\<T\>






##### Declaration


``` lang-csharp
public ForceNetworkSerializeByMemcpy(T value)
```



##### Parameters

| Type | Name  | Description                        |
|------|-------|------------------------------------|
| T    | value | sets the initial value of type `T` |

### Fields

#### Value


The wrapped value






##### Declaration


``` lang-csharp
public T Value
```



##### Field Value

| Type | Description |
|------|-------------|
| T    |             |

### Methods

#### Equals(Object)


Check if this value is equal to a boxed object value






##### Declaration


``` lang-csharp
public override bool Equals(object obj)
```



##### Parameters

| Type          | Name | Description                      |
|---------------|------|----------------------------------|
| System.Object | obj  | The boxed value to check against |

##### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true if equal |

##### Overrides



System.ValueType.Equals(System.Object)



#### Equals(ForceNetworkSerializeByMemcpy\<T\>)


Check if wrapped values are equal






##### Declaration


``` lang-csharp
public bool Equals(ForceNetworkSerializeByMemcpy<T> other)
```



##### Parameters

| Type                               | Name  | Description   |
|------------------------------------|-------|---------------|
| ForceNetworkSerializeByMemcpy\<T\> | other | Other wrapper |

##### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true if equal |

#### GetHashCode()


Obtains the wrapped value's hash code






##### Declaration


``` lang-csharp
public override int GetHashCode()
```



##### Returns

| Type         | Description               |
|--------------|---------------------------|
| System.Int32 | Wrapped value's hash code |

##### Overrides



System.ValueType.GetHashCode()



### Operators

#### Implicit(T to ForceNetworkSerializeByMemcpy\<T\>)


Convert implicitly from a T value to a ForceNetworkSerializeByMemcpy
wrapper






##### Declaration


``` lang-csharp
public static implicit operator ForceNetworkSerializeByMemcpy<T>(T underlyingValue)
```



##### Parameters

| Type | Name            | Description |
|------|-----------------|-------------|
| T    | underlyingValue | the value   |

##### Returns

| Type                               | Description   |
|------------------------------------|---------------|
| ForceNetworkSerializeByMemcpy\<T\> | a new wrapper |

#### Implicit(ForceNetworkSerializeByMemcpy\<T\> to T)


Convert implicitly from the ForceNetworkSerializeByMemcpy wrapper to the
underlying value






##### Declaration


``` lang-csharp
public static implicit operator T(ForceNetworkSerializeByMemcpy<T> container)
```



##### Parameters

| Type                               | Name      | Description |
|------------------------------------|-----------|-------------|
| ForceNetworkSerializeByMemcpy\<T\> | container | The wrapper |

##### Returns

| Type | Description          |
|------|----------------------|
| T    | The underlying value |

### Implements



INetworkSerializeByMemcpy





System.IEquatable\<T\>





