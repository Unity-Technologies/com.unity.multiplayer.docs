---
id: Unity.Networking.Transport.TransportFunctionPointer-1
title: Unity.Networking.Transport.TransportFunctionPointer-1
---


# Struct TransportFunctionPointer\<T\>


Represents a wrapper around burst compatible function pointers in a
portable way






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct TransportFunctionPointer<T>
    where T : Delegate
```



##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### Constructors

#### TransportFunctionPointer(T)


Initializes a new instance of the class






##### Declaration


``` lang-csharp
public TransportFunctionPointer(T executeDelegate)
```



##### Parameters

| Type | Name            | Description          |
|------|-----------------|----------------------|
| T    | executeDelegate | The execute delegate |

#### TransportFunctionPointer(FunctionPointer\<T\>)


Initializes a new instance of the class






##### Declaration


``` lang-csharp
public TransportFunctionPointer(FunctionPointer<T> Pointer)
```



##### Parameters

| Type                 | Name    | Description |
|----------------------|---------|-------------|
| FunctionPointer\<T\> | Pointer | The pointer |

### Fields

#### Ptr


Returns Burst






##### Declaration


``` lang-csharp
public readonly FunctionPointer<T> Ptr
```



##### Field Value

| Type                 | Description |
|----------------------|-------------|
| FunctionPointer\<T\> |             |

### Methods

#### Burst(T)


returns a wrapped Burst compiled function pointer






##### Declaration


``` lang-csharp
public static TransportFunctionPointer<T> Burst(T burstCompilableDelegate)
```



##### Parameters

| Type | Name                    | Description                   |
|------|-------------------------|-------------------------------|
| T    | burstCompilableDelegate | The burst compilable delegate |

##### Returns

| Type                          | Description                       |
|-------------------------------|-----------------------------------|
| TransportFunctionPointer\<T\> | A transport function pointer of t |

#### Managed(T)


Returns a wrapped managed function pointer






##### Declaration


``` lang-csharp
public static TransportFunctionPointer<T> Managed(T managedDelegate)
```



##### Parameters

| Type | Name            | Description          |
|------|-----------------|----------------------|
| T    | managedDelegate | The managed delegate |

##### Returns

| Type                          | Description                       |
|-------------------------------|-----------------------------------|
| TransportFunctionPointer\<T\> | A transport function pointer of t |



