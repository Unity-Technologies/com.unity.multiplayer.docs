---

id:
MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1

title:
MLAPI.Serialization.SerializationManager.CustomSerializationDelegate-1

---

Delegate SerializationManager.CustomSerializationDelegate\<T\>

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

| Type                                       | Name       | Description                                                                                           |
|--------------------------------------------|------------|-------------------------------------------------------------------------------------------------------|
| <span class="xref">System.IO.Stream</span> | \*stream   | The stream to write data to that is required to reconstruct the type in the deserialization delegate. |
| <span class="xref">T</span>                | \*instance | The instance to serialize to the stream.                                                              |

##### Type Parameters [type-parameters]

| Name                                 | Description            |
|--------------------------------------|------------------------|
| <span class="parametername">T</span> | The type to serialize. |
