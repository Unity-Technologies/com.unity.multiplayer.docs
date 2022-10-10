---  
id: Unity.Networking.Transport.OperationResult  
title: Unity.Networking.Transport.OperationResult  
---

<div class="markdown level0 summary">

Stores the result of a NetworkDriver operation.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

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
public struct OperationResult : IDisposable
```

## 

### ErrorCode

<div class="markdown level1 summary">

Allows to get and set the error code for the operation.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int ErrorCode { get; set; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Remarks

<div class="markdown level1 remarks">

Setting an error code different to zero will log it.

</div>

## 

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Dispose()
```

### Implements

<div>

System.IDisposable

</div>
