---  
id: Unity.Netcode.RadiusInterestKernel  
title: Unity.Netcode.RadiusInterestKernel  
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

IInterestKernel\<NetworkObject\>

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
public class RadiusInterestKernel : IInterestKernel<NetworkObject>
```

## 

### RadiusInterestKernel()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RadiusInterestKernel()
```

### RadiusInterestKernel(Single)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RadiusInterestKernel(float radius)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| System.Single | radius |             |

## 

### Radius

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public float Radius
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

## 

### QueryFor(NetworkObject, NetworkObject)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool QueryFor(NetworkObject clientNetworkObject, NetworkObject obj)
```

#### Parameters

| Type          | Name                | Description |
|---------------|---------------------|-------------|
| NetworkObject | clientNetworkObject |             |
| NetworkObject | obj                 |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

IInterestKernel &lt;TObject&gt;

</div>
