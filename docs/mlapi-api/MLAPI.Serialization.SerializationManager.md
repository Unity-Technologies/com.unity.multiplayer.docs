---  
id: MLAPI.Serialization.SerializationManager  
title: MLAPI.Serialization.SerializationManager  
---

<div class="markdown level0 summary" markdown="1">

Helper class to manage the MLAPI serialization.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Serialization_SerializationManager_syntax]

    public static class SerializationManager

## Methods 

### IsTypeSupported(Type) [MLAPI_Serialization_SerializationManager_IsTypeSupported_System_Type_]

<div class="markdown level1 summary" markdown="1">

Returns if a type is supported for serialization

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static bool IsTypeSupported(Type type)

#### Parameters [parameters]

| Type        | Name | Description       |
|-------------|------|-------------------|
| System.Type | type | The type to check |

#### Returns [returns]

| Type           | Description                          |
|----------------|--------------------------------------|
| System.Boolean | Whether or not the type is supported |

### RegisterSerializationHandlers\<T\>(SerializationManager.CustomSerializationDelegate\<T\>, SerializationManager.CustomDeserializationDelegate\<T\>) [MLAPI_Serialization_SerializationManager_RegisterSerializationHandlers__1_MLAPI_Serialization_SerializationManager_CustomSerializationDelegate___0__MLAPI_Serialization_SerializationManager_CustomDeserializationDelegate___0__]

<div class="markdown level1 summary" markdown="1">

Registers a custom serialization and deserialization pair for a object.
This is useful for writing objects that are behind the third party wall.
Such as .NET types.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static void RegisterSerializationHandlers<T>(SerializationManager.CustomSerializationDelegate<T> onSerialize, SerializationManager.CustomDeserializationDelegate<T> onDeserialize)

#### Parameters [parameters-1]

| Type                                                    | Name          | Description                                     |
|---------------------------------------------------------|---------------|-------------------------------------------------|
| SerializationManager.CustomSerializationDelegate\<T\>   | onSerialize   | The delegate to invoke to serialize the type.   |
| SerializationManager.CustomDeserializationDelegate\<T\> | onDeserialize | The delegate to invoke to deserialize the type. |

#### Type Parameters [type-parameters]

| Name | Description           |
|------|-----------------------|
| T    | The type to register. |

### RemoveSerializationHandlers\<T\>() [MLAPI_Serialization_SerializationManager_RemoveSerializationHandlers__1]

<div class="markdown level1 summary" markdown="1">

Removes a serialization handler that was registered previously for a
specific type. This will remove both the serialization and
deserialization handler.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static bool RemoveSerializationHandlers<T>()

#### Returns [returns-1]

| Type           | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| System.Boolean | Whether or not either the serialization or deserialization handlers for the type was removed. |

#### Type Parameters [type-parameters-1]

| Name | Description                                        |
|------|----------------------------------------------------|
| T    | The type for the serialization handlers to remove. |
