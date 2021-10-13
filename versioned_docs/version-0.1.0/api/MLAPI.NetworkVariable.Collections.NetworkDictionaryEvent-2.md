---  
id: MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2  
title: MLAPI.NetworkVariable.Collections.NetworkDictionaryEvent-2
---

<div class="markdown level0 summary">

Struct containing event information about changes to a
NetworkDictionary.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct NetworkDictionaryEvent<TKey, TValue>

##### Type Parameters

| Name   | Description                                               |
|--------|-----------------------------------------------------------|
| TKey   | The type for the dictionary key that the event is about   |
| TValue | The type for the dictionary value that the event is about |

## Fields

### Key

<div class="markdown level1 summary">

the key changed, added or removed if available.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public TKey Key

#### Field Value

| Type | Description |
|------|-------------|
| TKey |             |

### Type

<div class="markdown level1 summary">

Enum representing the operation made to the dictionary.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDictionaryEvent<TKey, TValue>.EventType Type

#### Field Value

| Type                                     | Description |
|------------------------------------------|-------------|
| NetworkDictionaryEvent.EventType&lt;&gt; |             |

### Value

<div class="markdown level1 summary">

The value changed, added or removed if available.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public TValue Value

#### Field Value

| Type   | Description |
|--------|-------------|
| TValue |             |
