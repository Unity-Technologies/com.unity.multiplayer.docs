---  
id: Unity.Netcode.Interest.InterestManager-1  
title: Unity.Netcode.Interest.InterestManager-1  
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
public class InterestManager<TObject>
```

##### Type Parameters

| Name    | Description |
|---------|-------------|
| TObject |             |

## 

### InterestManager()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public InterestManager()
```

## 

### Disable

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Disable
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### AddDefaultInterestNode(TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddDefaultInterestNode(TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### AddInterestNode(ref TObject, IInterestNode&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddInterestNode(ref TObject obj, IInterestNode<TObject> node)
```

#### Parameters

| Type                    | Name | Description |
|-------------------------|------|-------------|
| TObject                 | obj  |             |
| IInterestNode&lt;TObject&gt; | node |             |

### AddObject(ref TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AddObject(ref TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### QueryFor(ref TObject, ref HashSet&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void QueryFor(ref TObject client, ref HashSet<TObject> results)
```

#### Parameters

| Type                                         | Name    | Description |
|----------------------------------------------|---------|-------------|
| TObject                                      | client  |             |
| System.Collections.Generic.HashSet&lt;TObject&gt; | results |             |

### RemoveInterestNode(ref TObject, IInterestNode\&lt;TObject&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RemoveInterestNode(ref TObject obj, IInterestNode<TObject> node)
```

#### Parameters

| Type                    | Name | Description |
|-------------------------|------|-------------|
| TObject                 | obj  |             |
| IInterestNode&lt;TObject&gt; | node |             |

### RemoveObject(ref TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RemoveObject(ref TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |

### UpdateObject(ref TObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void UpdateObject(ref TObject obj)
```

#### Parameters

| Type    | Name | Description |
|---------|------|-------------|
| TObject | obj  |             |
