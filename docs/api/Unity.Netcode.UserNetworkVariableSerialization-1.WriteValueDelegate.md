---
id: Unity.Netcode.UserNetworkVariableSerialization-1.WriteValueDelegate
title: Unity.Netcode.UserNetworkVariableSerialization-1.WriteValueDelegate
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:38:58 pm
---

<div class="markdown level0 summary">

The write value delegate handler definition

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public delegate void WriteValueDelegate(FastBufferWriter writer, in T value);
```

## Parameters

| Type             | Name     | Description                                         |
|------------------|----------|-----------------------------------------------------|
| FastBufferWriter | \*writer | The FastBufferWriter to write the value of type `T` |
| T                | \*value  | The value of type `T` to be written                 |
