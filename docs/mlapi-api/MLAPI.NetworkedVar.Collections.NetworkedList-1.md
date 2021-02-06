---

id: MLAPI.NetworkedVar.Collections.NetworkedList1

title: MLAPI.NetworkedVar.Collections.NetworkedList1

---

Class NetworkedList\<T\>

<div class="markdown level0 summary" markdown="1">

Event based networkedVar container for syncing Lists

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

<div markdown="1" classs="implements">

##### Implements

<div markdown="1">

<span class="xref">System.Collections.Generic.IList</span>\<T\>

</div>

<div markdown="1">

<span class="xref">System.Collections.Generic.ICollection</span>\<T\>

</div>

<div markdown="1">

<span class="xref">System.Collections.Generic.IEnumerable</span>\<T\>

</div>

<div markdown="1">

<span class="xref">System.Collections.IEnumerable</span>

</div>

<div markdown="1">

INetworkedVar

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

##### Syntax [MLAPI_NetworkedVar_Collections_NetworkedList_1_syntax]

    public class NetworkedList<T> : IList<T>, ICollection<T>, IEnumerable<T>, IEnumerable, INetworkedVar

##### Type Parameters [type-parameters]

| Name                                 | Description           |
|--------------------------------------|-----------------------|
| <span class="parametername">T</span> | The type for the list |

## Constructors <span id="MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_"></span>

### NetworkedList() [MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedList with the default value and settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedList()

<span id="MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_"></span>

### NetworkedList(NetworkedVarSettings) [MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedList with the default value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedList(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name                                        | Description                               |
|----------------------|---------------------------------------------|-------------------------------------------|
| NetworkedVarSettings | <span class="parametername">settings</span> | The settings to use for the NetworkedList |

<span id="MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_"></span>

### NetworkedList(NetworkedVarSettings, IList\<T\>) [MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Collections_Generic_IList__0__]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedList with a custom value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedList(NetworkedVarSettings settings, IList<T> value)

#### Parameters [parameters-1]

| Type                                                            | Name                                        | Description                                    |
|-----------------------------------------------------------------|---------------------------------------------|------------------------------------------------|
| NetworkedVarSettings                                            | <span class="parametername">settings</span> | The settings to use for the NetworkedList      |
| <span class="xref">System.Collections.Generic.IList</span>\<T\> | <span class="parametername">value</span>    | The initial value to use for the NetworkedList |

<span id="MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_"></span>

### NetworkedList(IList\<T\>) [MLAPI_NetworkedVar_Collections_NetworkedList_1__ctor_System_Collections_Generic_IList__0__]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedList with a custom value and the default settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedList(IList<T> value)

#### Parameters [parameters-2]

| Type                                                            | Name                                     | Description                                    |
|-----------------------------------------------------------------|------------------------------------------|------------------------------------------------|
| <span class="xref">System.Collections.Generic.IList</span>\<T\> | <span class="parametername">value</span> | The initial value to use for the NetworkedList |

## Fields

### Settings [MLAPI_NetworkedVar_Collections_NetworkedList_1_Settings]

<div class="markdown level1 summary" markdown="1">

The settings for this container

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public readonly NetworkedVarSettings Settings

#### Field Value [field-value]

| Type                 | Description |
|----------------------|-------------|
| NetworkedVarSettings |             |

## Properties <span id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Count_"></span>

### Count [MLAPI_NetworkedVar_Collections_NetworkedList_1_Count]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public int Count { get; }

#### Property Value [property-value]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_IsReadOnly_"></span>

### IsReadOnly [MLAPI_NetworkedVar_Collections_NetworkedList_1_IsReadOnly]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public bool IsReadOnly { get; }

#### Property Value [property-value-1]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Item_"></span>

### Item\[Int32\] [MLAPI_NetworkedVar_Collections_NetworkedList_1_Item_System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public T this[int index] { get; set; }

#### Parameters [parameters-3]

| Type                                   | Name                                     | Description |
|----------------------------------------|------------------------------------------|-------------|
| <span class="xref">System.Int32</span> | <span class="parametername">index</span> |             |

#### Property Value [property-value-2]

| Type                        | Description |
|-----------------------------|-------------|
| <span class="xref">T</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_LastSyncedTime_"></span>

### LastSyncedTime [MLAPI_NetworkedVar_Collections_NetworkedList_1_LastSyncedTime]

<div class="markdown level1 summary" markdown="1">

Gets the last time the variable was synced

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public float LastSyncedTime { get; }

#### Property Value [property-value-3]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.Single</span> |             |

## Methods <span id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Add_"></span>

### Add(T) [MLAPI_NetworkedVar_Collections_NetworkedList_1_Add__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public void Add(T item)

#### Parameters [parameters-4]

| Type                        | Name                                    | Description |
|-----------------------------|-----------------------------------------|-------------|
| <span class="xref">T</span> | <span class="parametername">item</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_CanClientRead_"></span>

### CanClientRead(UInt64) [MLAPI_NetworkedVar_Collections_NetworkedList_1_CanClientRead_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public bool CanClientRead(ulong clientId)

#### Parameters [parameters-5]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_CanClientWrite_"></span>

### CanClientWrite(UInt64) [MLAPI_NetworkedVar_Collections_NetworkedList_1_CanClientWrite_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public bool CanClientWrite(ulong clientId)

#### Parameters [parameters-6]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns-1]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Clear_"></span>

### Clear() [MLAPI_NetworkedVar_Collections_NetworkedList_1_Clear]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public void Clear()

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Contains_"></span>

### Contains(T) [MLAPI_NetworkedVar_Collections_NetworkedList_1_Contains__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public bool Contains(T item)

#### Parameters [parameters-7]

| Type                        | Name                                    | Description |
|-----------------------------|-----------------------------------------|-------------|
| <span class="xref">T</span> | <span class="parametername">item</span> |             |

#### Returns [returns-2]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_CopyTo_"></span>

### CopyTo(T\[\], Int32) [MLAPI_NetworkedVar_Collections_NetworkedList_1_CopyTo__0___System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public void CopyTo(T[] array, int arrayIndex)

#### Parameters [parameters-8]

| Type                                   | Name                                          | Description |
|----------------------------------------|-----------------------------------------------|-------------|
| T\[\]                                  | <span class="parametername">array</span>      |             |
| <span class="xref">System.Int32</span> | <span class="parametername">arrayIndex</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_GetChannel_"></span>

### GetChannel() [MLAPI_NetworkedVar_Collections_NetworkedList_1_GetChannel]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public string GetChannel()

#### Returns [returns-3]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.String</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_GetEnumerator_"></span>

### GetEnumerator() [MLAPI_NetworkedVar_Collections_NetworkedList_1_GetEnumerator]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public IEnumerator<T> GetEnumerator()

#### Returns [returns-4]

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.IEnumerator</span>\<T\> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_IndexOf_"></span>

### IndexOf(T) [MLAPI_NetworkedVar_Collections_NetworkedList_1_IndexOf__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public int IndexOf(T item)

#### Parameters [parameters-9]

| Type                        | Name                                    | Description |
|-----------------------------|-----------------------------------------|-------------|
| <span class="xref">T</span> | <span class="parametername">item</span> |             |

#### Returns [returns-5]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Insert_"></span>

### Insert(Int32, T) [MLAPI_NetworkedVar_Collections_NetworkedList_1_Insert_System_Int32__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void Insert(int index, T item)

#### Parameters [parameters-10]

| Type                                   | Name                                     | Description |
|----------------------------------------|------------------------------------------|-------------|
| <span class="xref">System.Int32</span> | <span class="parametername">index</span> |             |
| <span class="xref">T</span>            | <span class="parametername">item</span>  |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_IsDirty_"></span>

### IsDirty() [MLAPI_NetworkedVar_Collections_NetworkedList_1_IsDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public bool IsDirty()

#### Returns [returns-6]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_ReadDelta_"></span>

### ReadDelta(Stream, Boolean) [MLAPI_NetworkedVar_Collections_NetworkedList_1_ReadDelta_System_IO_Stream_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters [parameters-11]

| Type                                       | Name                                              | Description |
|--------------------------------------------|---------------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span>         |             |
| <span class="xref">System.Boolean</span>   | <span class="parametername">keepDirtyDelta</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_ReadField_"></span>

### ReadField(Stream) [MLAPI_NetworkedVar_Collections_NetworkedList_1_ReadField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public void ReadField(Stream stream)

#### Parameters [parameters-12]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_Remove_"></span>

### Remove(T) [MLAPI_NetworkedVar_Collections_NetworkedList_1_Remove__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public bool Remove(T item)

#### Parameters [parameters-13]

| Type                        | Name                                    | Description |
|-----------------------------|-----------------------------------------|-------------|
| <span class="xref">T</span> | <span class="parametername">item</span> |             |

#### Returns [returns-7]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_RemoveAt_"></span>

### RemoveAt(Int32) [MLAPI_NetworkedVar_Collections_NetworkedList_1_RemoveAt_System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public void RemoveAt(int index)

#### Parameters [parameters-14]

| Type                                   | Name                                     | Description |
|----------------------------------------|------------------------------------------|-------------|
| <span class="xref">System.Int32</span> | <span class="parametername">index</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_ResetDirty_"></span>

### ResetDirty() [MLAPI_NetworkedVar_Collections_NetworkedList_1_ResetDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public void ResetDirty()

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_SetNetworkedBehaviour_"></span>

### SetNetworkedBehaviour(NetworkedBehaviour) [MLAPI_NetworkedVar_Collections_NetworkedList_1_SetNetworkedBehaviour_MLAPI_NetworkedBehaviour_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters [parameters-15]

| Type               | Name                                         | Description |
|--------------------|----------------------------------------------|-------------|
| NetworkedBehaviour | <span class="parametername">behaviour</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_WriteDelta_"></span>

### WriteDelta(Stream) [MLAPI_NetworkedVar_Collections_NetworkedList_1_WriteDelta_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public void WriteDelta(Stream stream)

#### Parameters [parameters-16]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedList_1_WriteField_"></span>

### WriteField(Stream) [MLAPI_NetworkedVar_Collections_NetworkedList_1_WriteField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public void WriteField(Stream stream)

#### Parameters [parameters-17]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

## Events

### OnListChanged [MLAPI_NetworkedVar_Collections_NetworkedList_1_OnListChanged]

<div class="markdown level1 summary" markdown="1">

The callback to be invoked when the list gets changed

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public event NetworkedList<T>.OnListChangedDelegate OnListChanged

#### Event Type [event-type]

| Type                                    | Description |
|-----------------------------------------|-------------|
| NetworkedList.OnListChangedDelegate\<\> |             |

## Explicit Interface Implementations <span id="MLAPI_NetworkedVar_Collections_NetworkedList_1_System_Collections_IEnumerable_GetEnumerator_"></span> [eii]

### IEnumerable.GetEnumerator() [MLAPI_NetworkedVar_Collections_NetworkedList_1_System_Collections_IEnumerable_GetEnumerator]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    IEnumerator IEnumerable.GetEnumerator()

#### Returns [returns-8]

| Type                                                     | Description |
|----------------------------------------------------------|-------------|
| <span class="xref">System.Collections.IEnumerator</span> |             |

### Implements [implements]

<div markdown="1">

<span class="xref">System.Collections.Generic.IList\<T\></span>

</div>

<div markdown="1">

<span class="xref">System.Collections.Generic.ICollection\<T\></span>

</div>

<div markdown="1">

<span class="xref">System.Collections.Generic.IEnumerable\<T\></span>

</div>

<div markdown="1">

<span class="xref">System.Collections.IEnumerable</span>

</div>

<div markdown="1">

INetworkedVar

</div>
