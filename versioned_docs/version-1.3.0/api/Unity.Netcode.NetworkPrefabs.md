---
id: Unity.Netcode.NetworkPrefabs
title: Unity.Netcode.NetworkPrefabs
date created: Wednesday, January 25th 2023, 5:30:22 pm
date modified: Wednesday, January 25th 2023, 5:35:57 pm
---

<div class="markdown level0 summary">

A class that represents the runtime aspect of network prefabs. This class contains processed prefabs from the NetworkPrefabsList, as well as additional modifications (additions and removals) made at runtime.

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

Object.ToString()

</div>

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
public class NetworkPrefabs
```

## Fields

### NetworkPrefabOverrideLinks

<div class="markdown level1 summary">

This dictionary provides a quick way to check and see if a NetworkPrefab has a NetworkPrefab override. Generated at runtime and OnValidate

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[NonSerialized]
public Dictionary<uint, NetworkPrefab> NetworkPrefabOverrideLinks
```

#### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt32, NetworkPrefab\> |             |

### NetworkPrefabsLists

<div class="markdown level1 summary">

Edit-time scripted object containing a list of NetworkPrefabs.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public List<NetworkPrefabsList> NetworkPrefabsLists
```

#### Field Value

| Type                                                  | Description |
|-------------------------------------------------------|-------------|
| System.Collections.Generic.List\<NetworkPrefabsList\> |             |

#### Remarks

<div class="markdown level1 remarks">

This field can be null if no prefabs are pre-configured. Runtime usages of NetworkPrefabs should not depend on this edit-time field for execution.

</div>

### OverrideToNetworkPrefab

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
[NonSerialized]
public Dictionary<uint, uint> OverrideToNetworkPrefab
```

#### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt32, System.UInt32\> |             |

## Properties

### Prefabs

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IReadOnlyList<NetworkPrefab> Prefabs { get; }
```

#### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<NetworkPrefab\> |             |

## Methods

### Add(NetworkPrefab)

<div class="markdown level1 summary">

Add a new NetworkPrefab instance to the list

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Add(NetworkPrefab networkPrefab)
```

#### Parameters

| Type          | Name          | Description |
|---------------|---------------|-------------|
| NetworkPrefab | networkPrefab |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Remarks

<div class="markdown level1 remarks">

The framework does not synchronize this list between clients. Any runtime changes must be handled manually. Any modifications made here are not persisted. Permanent configuration changes should be done through the NetworkPrefabsList scriptable object property.

</div>

### Contains(GameObject)

<div class="markdown level1 summary">

Check if the given GameObject is present as a prefab within the list

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Contains(GameObject prefab)
```

#### Parameters

| Type       | Name   | Description         |
|------------|--------|---------------------|
| GameObject | prefab | The prefab to check |

#### Returns

| Type           | Description                      |
|----------------|----------------------------------|
| System.Boolean | Whether or not the prefab exists |

### Contains(NetworkPrefab)

<div class="markdown level1 summary">

Check if the given NetworkPrefab is present within the list

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Contains(NetworkPrefab prefab)
```

#### Parameters

| Type          | Name   | Description         |
|---------------|--------|---------------------|
| NetworkPrefab | prefab | The prefab to check |

#### Returns

| Type           | Description                      |
|----------------|----------------------------------|
| System.Boolean | Whether or not the prefab exists |

### Finalize()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected void Finalize()
```

### Initialize(Boolean)

<div class="markdown level1 summary">
Processes the NetworkPrefabsList if one is present for use during runtime execution, else processes Prefabs.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Initialize(bool warnInvalid = true)
```

#### Parameters

| Type           | Name        | Description |
|----------------|-------------|-------------|
| System.Boolean | warnInvalid |             |

### Remove(GameObject)

<div class="markdown level1 summary">

Remove a NetworkPrefab instance with matching Prefab from the list

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Remove(GameObject prefab)
```

#### Parameters

| Type       | Name   | Description |
|------------|--------|-------------|
| GameObject | prefab |             |

#### Remarks

<div class="markdown level1 remarks">

The framework does not synchronize this list between clients. Any runtime changes must be handled manually. Any modifications made here are not persisted. Permanent configuration changes should be done through the NetworkPrefabsList scriptable object property.
</div>

### Remove(NetworkPrefab)

<div class="markdown level1 summary">

Remove a NetworkPrefab instance from the list

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Remove(NetworkPrefab prefab)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkPrefab | prefab |             |

#### Remarks

<div class="markdown level1 remarks">

The framework does not synchronize this list between clients. Any runtime changes must be handled manually. Any modifications made here are not persisted. Permanent configuration changes should be done through the NetworkPrefabsList scriptable object property.

</div>
