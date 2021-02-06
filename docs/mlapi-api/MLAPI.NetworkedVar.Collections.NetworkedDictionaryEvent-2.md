---

id: MLAPI.NetworkedVar.Collections.NetworkedDictionaryEvent-2

title: MLAPI.NetworkedVar.Collections.NetworkedDictionaryEvent-2

---

Struct NetworkedDictionaryEvent\<TKey, TValue\>

<div class="markdown level0 summary" markdown="1">

Struct containing event information about changes to a
NetworkedDictionary.

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

ValueType.Equals(Object)

</div>

<div markdown="1">

ValueType.GetHashCode()

</div>

<div markdown="1">

ValueType.ToString()

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_NetworkedVar_Collections_NetworkedDictionaryEvent_2_syntax]

    public struct NetworkedDictionaryEvent<TKey, TValue>

##### Type Parameters [type-parameters]

| Name   | Description                                               |
|--------|-----------------------------------------------------------|
| TKey   | The type for the dictionary key that the event is about   |
| TValue | The type for the dictionary value that the event is about |

## Fields

### eventType [MLAPI_NetworkedVar_Collections_NetworkedDictionaryEvent_2_eventType]

<div class="markdown level1 summary" markdown="1">

Enum representing the operation made to the dictionary.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedDictionaryEvent<TKey, TValue>.NetworkedListEventType eventType

#### Field Value [field-value]

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkedDictionaryEvent.NetworkedListEventType\<\> |             |

### key [MLAPI_NetworkedVar_Collections_NetworkedDictionaryEvent_2_key]

<div class="markdown level1 summary" markdown="1">

the key changed, added or removed if available.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public TKey key

#### Field Value [field-value-1]

| Type | Description |
|------|-------------|
| TKey |             |

### value [MLAPI_NetworkedVar_Collections_NetworkedDictionaryEvent_2_value]

<div class="markdown level1 summary" markdown="1">

The value changed, added or removed if available.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public TValue value

#### Field Value [field-value-2]

| Type   | Description |
|--------|-------------|
| TValue |             |
