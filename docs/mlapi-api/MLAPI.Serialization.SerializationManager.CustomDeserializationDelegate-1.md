---  
id: MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1  
title: MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1  
---

<div class="markdown level0 summary">

The delegate used when registering custom deserialization for a type.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public delegate T CustomDeserializationDelegate<T>(Stream stream);

##### Parameters

| Type             | Name     | Description                                                 |
|------------------|----------|-------------------------------------------------------------|
| System.IO.Stream | \*stream | The stream to read the data required to construct the type. |

##### Returns

| Type | Description |
|------|-------------|
| T    |             |

##### Type Parameters

| Name | Description              |
|------|--------------------------|
| T    | The type to deserialize. |
