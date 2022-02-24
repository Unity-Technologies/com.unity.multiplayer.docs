---  
id: Unity.Netcode.Interest.InterestNodeStatic-1  
title: Unity.Netcode.Interest.InterestNodeStatic-1  
---

<div class="markdown level0 summary">

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

<div classs="implements">

##### Implements

<div>

IInterestNode\&lt;TObject&gt;

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

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public class InterestNodeStatic<TObject> : IInterestNode<TObject>
```

##### Type Parameters

| Name    | Description |
|---------|-------------|
| TObject |             |

## 

### InterestNodeStatic()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public InterestNodeStatic()
```

## 

### AddAdditiveKernel(IInterestKernel\&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddAdditiveKernel(IInterestKernel<TObject> kernel)
```

#### Parameters

| Type                      | Name   | Description |
|---------------------------|--------|-------------|
| IInterestKernel\&lt;TObject&gt; | kernel |             |

### AddObject(TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddObject(TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### AddSubtractiveKernel(IInterestKernel\\&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddSubtractiveKernel(IInterestKernel<TObject> kernel)
```

#### Parameters

| Type                      | Name   | Description |
|---------------------------|--------|-------------|
| IInterestKernel\&lt;TObject&gt; | kernel |             |

### QueryFor(TObject, HashSet\&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void QueryFor(TObject client, HashSet<TObject> results)
```

#### Parameters

| Type                                         | Name    | Description |
|----------------------------------------------|---------|-------------|
| TObject                                      | client  |             |
| System.Collections.Generic.HashSet\&lt;TObject&gt; | results |             |

### RemoveObject(TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RemoveObject(TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### UpdateObject(TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void UpdateObject(TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### Implements

<div>

IInterestNode\&lt;TObject&gt;>

</div>
