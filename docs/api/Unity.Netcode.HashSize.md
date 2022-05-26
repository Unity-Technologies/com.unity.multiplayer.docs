---  
id: Unity.Netcode.HashSize  
title: Unity.Netcode.HashSize  
---

<div class="markdown level0 summary">

Represents the length of a var int encoded hash Note that the HashSize
does not say anything about the actual final output due to the var int
encoding It just says how many bytes the maximum will be

</div>

<div class="markdown level0 conceptual">

</div>

##### Syntax

<div class="codewrapper">

``` lang-csharp
public enum HashSize : byte
```

</div>

### Fields

Name

Description

VarIntEightBytes

Eight byte hash

VarIntFourBytes

Four byte hash


