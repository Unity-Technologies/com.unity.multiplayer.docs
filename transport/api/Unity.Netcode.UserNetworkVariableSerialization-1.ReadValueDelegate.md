---  
id: Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate  
title: Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate  
---

<div class="markdown level0 summary">

The read value delegate handler definition

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public delegate void ReadValueDelegate(FastBufferReader reader, out T value);
```

##### Parameters

| Type             | Name     | Description                                        |
|------------------|----------|----------------------------------------------------|
| FastBufferReader | \*reader | The FastBufferReader to read the value of type `T` |
| T                | \*value  | The value of type `T` to be read                   |
