---  
id: MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1  
title: MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1  
---

<div class="markdown level0 summary" markdown="1">

The delegate used when registering custom deserialization for a type.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_SerializationManager_CustomDeserializationDelegate_1_syntax]

    public delegate T CustomDeserializationDelegate<T>(Stream stream);

##### Parameters [parameters]

| Type             | Name     | Description                                                 |
|------------------|----------|-------------------------------------------------------------|
| System.IO.Stream | \*stream | The stream to read the data required to construct the type. |

##### Returns [returns]

| Type | Description |
|------|-------------|
| T    |             |

##### Type Parameters [type-parameters]

| Name | Description              |
|------|--------------------------|
| T    | The type to deserialize. |
