---
id: Unity.Netcode.HashSize
title: Unity.Netcode.HashSize
---

# Enum HashSize


Represents the length of a var int encoded hash Note that the HashSize
does not say anything about the actual final output due to the var int
encoding It just says how many bytes the maximum will be






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public enum HashSize : byte
```



### Fields

Name









Description

VarIntEightBytes

Eight byte hash

VarIntFourBytes

Four byte hash

