---

id: MLAPI.NetworkedVar.Collections.NetworkedListEvent-1

title: MLAPI.NetworkedVar.Collections.NetworkedListEvent-1

---

Struct NetworkedListEvent\<T\>

<div class="markdown level0 summary" markdown="1">

Struct containing event information about changes to a NetworkedList.

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

##### Syntax [MLAPI_NetworkedVar_Collections_NetworkedListEvent_1_syntax]

    public struct NetworkedListEvent<T>

##### Type Parameters [type-parameters]

| Name                                 | Description                                   |
|--------------------------------------|-----------------------------------------------|
| <span class="parametername">T</span> | The type for the list that the event is about |

## Fields

### eventType [MLAPI_NetworkedVar_Collections_NetworkedListEvent_1_eventType]

<div class="markdown level1 summary" markdown="1">

Enum representing the operation made to the list.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedListEvent<T>.EventType eventType

#### Field Value [field-value]

| Type                             | Description |
|----------------------------------|-------------|
| NetworkedListEvent.EventType\<\> |             |

### index [MLAPI_NetworkedVar_Collections_NetworkedListEvent_1_index]

<div class="markdown level1 summary" markdown="1">

the index changed, added or removed if available

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public int index

#### Field Value [field-value-1]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

### value [MLAPI_NetworkedVar_Collections_NetworkedListEvent_1_value]

<div class="markdown level1 summary" markdown="1">

The value changed, added or removed if available.

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public T value

#### Field Value [field-value-2]

| Type                        | Description |
|-----------------------------|-------------|
| <span class="xref">T</span> |             |
