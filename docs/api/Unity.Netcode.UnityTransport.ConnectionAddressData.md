---  
id: Unity.Netcode.UnityTransport.ConnectionAddressData  
title: Unity.Netcode.UnityTransport.ConnectionAddressData  
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

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
[Serializable]
public struct ConnectionAddressData
```

## 

### Address

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Address
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Port

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Port
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Implicit(NetworkEndPoint to UnityTransport.ConnectionAddressData)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator UnityTransport.ConnectionAddressData(NetworkEndPoint d)
```

#### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | d    |             |

#### Returns

| Type                                 | Description |
|--------------------------------------|-------------|
| UnityTransport.ConnectionAddressData |             |

### Implicit(UnityTransport.ConnectionAddressData to NetworkEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator NetworkEndPoint(UnityTransport.ConnectionAddressData d)
```

#### Parameters

| Type                                 | Name | Description |
|--------------------------------------|------|-------------|
| UnityTransport.ConnectionAddressData | d    |             |

#### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |
