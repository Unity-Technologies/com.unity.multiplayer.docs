---

id:
MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1

title:
MLAPI.Serialization.SerializationManager.CustomDeserializationDelegate-1

---

Delegate SerializationManager.CustomDeserializationDelegate\<T\>

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

| Type                                       | Name     | Description                                                 |
|--------------------------------------------|----------|-------------------------------------------------------------|
| <span class="xref">System.IO.Stream</span> | \*stream | The stream to read the data required to construct the type. |

##### Returns [returns]

| Type                        | Description |
|-----------------------------|-------------|
| <span class="xref">T</span> |             |

##### Type Parameters [type-parameters]

| Name                                 | Description              |
|--------------------------------------|--------------------------|
| <span class="parametername">T</span> | The type to deserialize. |
