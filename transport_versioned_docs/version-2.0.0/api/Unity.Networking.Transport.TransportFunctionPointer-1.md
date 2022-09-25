---  
id: Unity.Networking.Transport.TransportFunctionPointer-1  
title: Unity.Networking.Transport.TransportFunctionPointer-1  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

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
public struct TransportFunctionPointer<T>
    where T : Delegate
```

##### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

## 

### TransportFunctionPointer(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer(T executeDelegate)
```

#### Parameters

| Type | Name            | Description |
|------|-----------------|-------------|
| T    | executeDelegate |             |

### TransportFunctionPointer(FunctionPointer\&lt;T&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public TransportFunctionPointer(FunctionPointer<T> Pointer)
```

#### Parameters

| Type                | Name    | Description |
|---------------------|---------|-------------|
| FunctionPointer&lt;T&gt; | Pointer |             |

## 

### Ptr

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly FunctionPointer<T> Ptr
```

#### Field Value

| Type                | Description |
|---------------------|-------------|
| FunctionPointer&lt;T&gt;|             |

## 

### Burst(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static TransportFunctionPointer<T> Burst(T burstCompilableDelegate)
```

#### Parameters

| Type | Name                    | Description |
|------|-------------------------|-------------|
| T    | burstCompilableDelegate |             |

#### Returns

| Type                         | Description |
|------------------------------|-------------|
| TransportFunctionPointer&lt;T&gt;|             |

### Managed(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static TransportFunctionPointer<T> Managed(T managedDelegate)
```

#### Parameters

| Type | Name            | Description |
|------|-----------------|-------------|
| T    | managedDelegate |             |

#### Returns

| Type                         | Description |
|------------------------------|-------------|
| TransportFunctionPointer&lt;T&gt; |             |
