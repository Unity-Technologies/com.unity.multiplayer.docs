---
id: Unity.Netcode.NetworkPrefab
title: Unity.Netcode.NetworkPrefab
date created: Wednesday, January 25th 2023, 5:30:22 pm
date modified: Wednesday, January 25th 2023, 5:35:51 pm
---

<div class="markdown level0 summary">

Class that represents a NetworkPrefab

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
[Serializable]
public class NetworkPrefab
```

## Fields

### Override

<div class="markdown level1 summary">

The override settings for this NetworkPrefab

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkPrefabOverride Override
```

#### Field Value

| Type                  | Description |
|-----------------------|-------------|
| NetworkPrefabOverride |             |

### OverridingTargetPrefab

<div class="markdown level1 summary">

The prefab to replace (override) the source prefab with

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GameObject OverridingTargetPrefab
```

#### Field Value

| Type       | Description |
|------------|-------------|
| GameObject |             |

### Prefab

<div class="markdown level1 summary">

Asset reference of the network prefab

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GameObject Prefab
```

#### Field Value

| Type       | Description |
|------------|-------------|
| GameObject |             |

### SourceHashToOverride

<div class="markdown level1 summary">

Used when hash is selected for the source prefab to override value (i.e. a direct reference is not possible such as in a multi-project pattern)

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint SourceHashToOverride
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### SourcePrefabToOverride

<div class="markdown level1 summary">

Used when prefab is selected for the source prefab to override value (i.e. direct reference, the prefab is within the same project) We keep a separate value as the user might want to have something different than the default Prefab for the SourcePrefabToOverride

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public GameObject SourcePrefabToOverride
```

#### Field Value

| Type       | Description |
|------------|-------------|
| GameObject |             |

## Properties

### SourcePrefabGlobalObjectIdHash

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint SourcePrefabGlobalObjectIdHash { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

### TargetPrefabGlobalObjectIdHash

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint TargetPrefabGlobalObjectIdHash { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt32 |             |

## Methods

### Equals(NetworkPrefab)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkPrefab other)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| NetworkPrefab | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ToString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override string ToString()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Overrides

<div>

System.Object.ToString()

</div>

### Validate(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Validate(int index = -1)
```

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
