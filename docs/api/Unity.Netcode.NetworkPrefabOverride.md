---
id: Unity.Netcode.NetworkPrefabOverride
title: Unity.Netcode.NetworkPrefabOverride
date created: Wednesday, January 25th 2023, 5:30:22 pm
date modified: Wednesday, January 25th 2023, 5:35:56 pm
---

<div class="markdown level0 summary">

The method of NetworkPrefab override used to identify the source prefab

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public enum NetworkPrefabOverride
```

## Fields

| Name   | Description                                                                                                                                   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Hash   | Override the prefab when the given SourceHashToOverride is requested Used in situations where the server assets do not exist in client builds |
| None   | No oeverride is present                                                                                                                       |
| Prefab | Override the prefab when the given SourcePrefabToOverride is requested                                                                        |
