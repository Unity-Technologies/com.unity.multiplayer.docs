---  
id: Unity.Netcode.Interest.IInterestNode-1  
title: Unity.Netcode.Interest.IInterestNode-1  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public interface IInterestNode<TObject>
```

##### Type Parameters

| Name    | Description |
|---------|-------------|
| TObject |             |

## 

### AddAdditiveKernel(IInterestKernel\&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void AddAdditiveKernel(IInterestKernel<TObject> kernel)
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
void AddObject(TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### AddSubtractiveKernel(IInterestKernel\&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
void AddSubtractiveKernel(IInterestKernel<TObject> kernel)
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
void QueryFor(TObject client, HashSet<TObject> results)
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
void RemoveObject(TObject obj)
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
void UpdateObject(TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |
