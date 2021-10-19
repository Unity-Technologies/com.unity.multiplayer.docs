---  
id: Unity.Networking.Transport.NetworkPipelineParams  
title: Unity.Networking.Transport.NetworkPipelineParams  
---

<div class="markdown level0 summary">

The network pipeline params

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkParameter

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkPipelineParams : INetworkParameter
```

## 

### initialCapacity

<div class="markdown level1 summary">

The initial capacity

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int initialCapacity
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### ValidateParameters(INetworkParameter\[\])

<div class="markdown level1 summary">

Validates the parameters using the specified params

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[Conditional("ENABLE_UNITY_COLLECTIONS_CHECKS")]
public static void ValidateParameters(params INetworkParameter[] param)
```

#### Parameters

| Type                  | Name  | Description |
|-----------------------|-------|-------------|
| INetworkParameter\[\] | param | The param   |

#### Exceptions

| Type                     | Condition                                                                 |
|--------------------------|---------------------------------------------------------------------------|
| System.ArgumentException | Value for NetworkPipelineParams.initialCapacity must be larger then zero. |

### Implements

<div>

INetworkParameter

</div>
