---
id: Unity.Netcode.NetworkPrefabsList
title: Unity.Netcode.NetworkPrefabsList
date created: Wednesday, January 25th 2023, 5:30:22 pm
date modified: Wednesday, January 25th 2023, 5:35:58 pm
---

<div class="markdown level0 summary">

A ScriptableObject for holding a network prefabs list, which can be shared between multiple NetworkManagers. When NetworkManagers hold references to this list, modifications to the list at runtime will be picked up by all NetworkManagers that reference it.

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

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class NetworkPrefabsList : ScriptableObject
```

## Properties

### PrefabList

<div class="markdown level1 summary">

Read-only view into the prefabs list, enabling iterating and examining the list. Actually modifying the list should be done using Add(NetworkPrefab) and Remove(NetworkPrefab).

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IReadOnlyList<NetworkPrefab> PrefabList { get; }
```

#### Property Value

| Type                           | Description |
|--------------------------------|-------------|
| IReadOnlyList\<NetworkPrefab\> |             |

## Methods

### Add(NetworkPrefab)

<div class="markdown level1 summary">

Adds a prefab to the prefab list. Performing this here will apply the operation to all NetworkManagers that reference this list.
</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Add(NetworkPrefab prefab)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkPrefab | prefab |             |

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

### Remove(NetworkPrefab)

<div class="markdown level1 summary">

Removes a prefab from the prefab list. Performing this here will apply the operation to all NetworkManagers that reference this list.

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
