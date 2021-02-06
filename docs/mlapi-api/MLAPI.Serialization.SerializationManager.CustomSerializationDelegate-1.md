---  
id: MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1  
title: MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1  
---

<div class="markdown level0 summary" markdown="1">

The delegate used when registering custom serialization for a type.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_SerializationManager_CustomSerializationDelegate_1_syntax]

    public delegate void CustomSerializationDelegate<T>(Stream stream, T instance);

##### Parameters [parameters]

| Type             | Name       | Description                                                                                           |
|------------------|------------|-------------------------------------------------------------------------------------------------------|
| System.IO.Stream | \*stream   | The stream to write data to that is required to reconstruct the type in the deserialization delegate. |
| T                | \*instance | The instance to serialize to the stream.                                                              |

##### Type Parameters [type-parameters]

| Name | Description            |
|------|------------------------|
| T    | The type to serialize. |
