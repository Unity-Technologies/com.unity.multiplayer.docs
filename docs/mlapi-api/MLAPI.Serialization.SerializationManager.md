---  
id: MLAPI.Serialization.SerializationManager  
title: MLAPI.Serialization.SerializationManager  
---

<div class="markdown level0 summary">

Helper class to manage the MLAPI serialization.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class SerializationManager

## Methods 

### IsTypeSupported(Type)

<div class="markdown level1 summary">

Returns if a type is supported for serialization

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool IsTypeSupported(Type type)

#### Parameters

| Type        | Name | Description       |
|-------------|------|-------------------|
| System.Type | type | The type to check |

#### Returns

| Type           | Description                          |
|----------------|--------------------------------------|
| System.Boolean | Whether or not the type is supported |

### RegisterSerializationHandlers&lt;T&gt;(SerializationManager.CustomSerializationDelegate&lt;T&gt;, SerializationManager.CustomDeserializationDelegate&lt;T&gt;)

<div class="markdown level1 summary">

Registers a custom serialization and deserialization pair for a object.
This is useful for writing objects that are behind the third party wall.
Such as .NET types.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static void RegisterSerializationHandlers<T>(SerializationManager.CustomSerializationDelegate<T> onSerialize, SerializationManager.CustomDeserializationDelegate<T> onDeserialize)

#### Parameters

| Type                                                        | Name          | Description                                     |
|-------------------------------------------------------------|---------------|-------------------------------------------------|
| SerializationManager.CustomSerializationDelegate&lt;T&gt;   | onSerialize   | The delegate to invoke to serialize the type.   |
| SerializationManager.CustomDeserializationDelegate&lt;T&gt; | onDeserialize | The delegate to invoke to deserialize the type. |

#### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type to register. |

### RemoveSerializationHandlers&lt;T&gt;()

<div class="markdown level1 summary">

Removes a serialization handler that was registered previously for a
specific type. This will remove both the serialization and
deserialization handler.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool RemoveSerializationHandlers<T>()

#### Returns

| Type           | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| System.Boolean | Whether or not either the serialization or deserialization handlers for the type was removed. |

#### Type Parameters

| Name | Description                                        |
|------|----------------------------------------------------|
| T    | The type for the serialization handlers to remove. |
