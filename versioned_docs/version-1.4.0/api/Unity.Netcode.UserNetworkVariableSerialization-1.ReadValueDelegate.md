---
id: Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate
title: Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:39:15 pm
---

<div class="markdown level0 summary">

The read value delegate handler definition

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void ReadValueDelegate(FastBufferReader reader, out T value);
```

## Parameters

| Type             | Name     | Description                                        |
|------------------|----------|----------------------------------------------------|
| FastBufferReader | \*reader | The FastBufferReader to read the value of type `T` |
| T                | \*value  | The value of type `T` to be read                   |
