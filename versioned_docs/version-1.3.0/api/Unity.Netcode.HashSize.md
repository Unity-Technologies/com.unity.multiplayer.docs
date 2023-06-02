---
id: Unity.Netcode.HashSize
title: Unity.Netcode.HashSize
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:34:52 pm
---

<div class="markdown level0 summary">

Represents the length of a var int encoded hash Note that the HashSize does not say anything about the actual final output due to the var int encoding It just says how many bytes the maximum will be

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public enum HashSize : byte
```

## Fields

| Name             | Description     |
|------------------|-----------------|
| VarIntEightBytes | Eight byte hash |
| VarIntFourBytes  | Four byte hash  |
