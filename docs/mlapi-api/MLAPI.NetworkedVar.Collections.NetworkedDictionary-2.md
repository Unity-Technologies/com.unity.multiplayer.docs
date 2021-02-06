---

id: MLAPI.NetworkedVar.Collections.NetworkedDictionary-2

title: MLAPI.NetworkedVar.Collections.NetworkedDictionary-2

---

Class NetworkedDictionary\<TKey, TValue\>

<div class="markdown level0 summary" markdown="1">

Event based networkedVar container for syncing Dictionaries

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

System.Collections.Generic.IDictionary\<TKey, TValue\>

</div>

<div markdown="1">

System.Collections.Generic.ICollection\<System.Collections.Generic.KeyValuePair\<TKey, TValue\>\>

</div>

<div markdown="1">

System.Collections.Generic.IEnumerable\<System.Collections.Generic.KeyValuePair\<TKey, TValue\>\>

</div>

<div markdown="1">

System.Collections.IEnumerable

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

##### Syntax [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_syntax]

    public class NetworkedDictionary<TKey, TValue> : IDictionary<TKey, TValue>, ICollection<KeyValuePair<TKey, TValue>>, IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, INetworkedVar

##### Type Parameters [type-parameters]

| Name   | Description                        |
|--------|------------------------------------|
| TKey   | The type for the dictionary keys   |
| TValue | The type for the dictionary values |

## Constructors 

### NetworkedDictionary() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with the default value and settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedDictionary()

### NetworkedDictionary(NetworkedVarSettings) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with the default value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedDictionary(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name     | Description                                     |
|----------------------|----------|-------------------------------------------------|
| NetworkedVarSettings | settings | The settings to use for the NetworkedDictionary |

### NetworkedDictionary(NetworkedVarSettings, IDictionary\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Collections_Generic_IDictionary__0__1__]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with a custom value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedDictionary(NetworkedVarSettings settings, IDictionary<TKey, TValue> value)

#### Parameters [parameters-1]

| Type                                                   | Name     | Description                                          |
|--------------------------------------------------------|----------|------------------------------------------------------|
| NetworkedVarSettings                                   | settings | The settings to use for the NetworkedDictionary      |
| System.Collections.Generic.IDictionary\<TKey, TValue\> | value    | The initial value to use for the NetworkedDictionary |

### NetworkedDictionary(IDictionary\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_System_Collections_Generic_IDictionary__0__1__]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with a custom value and the default
settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedDictionary(IDictionary<TKey, TValue> value)

#### Parameters [parameters-2]

| Type                                                   | Name  | Description                                          |
|--------------------------------------------------------|-------|------------------------------------------------------|
| System.Collections.Generic.IDictionary\<TKey, TValue\> | value | The initial value to use for the NetworkedDictionary |

## Fields

### Settings [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Settings]

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

## Properties 

### Count [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Count]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public int Count { get; }

#### Property Value [property-value]

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### IsReadOnly [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_IsReadOnly]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public bool IsReadOnly { get; }

#### Property Value [property-value-1]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Item\[TKey\] [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Item__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public TValue this[TKey key] { get; set; }

#### Parameters [parameters-3]

| Type | Name | Description |
|------|------|-------------|
| TKey | key  |             |

#### Property Value [property-value-2]

| Type   | Description |
|--------|-------------|
| TValue |             |

### Keys [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Keys]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public ICollection<TKey> Keys { get; }

#### Property Value [property-value-3]

| Type                                           | Description |
|------------------------------------------------|-------------|
| System.Collections.Generic.ICollection\<TKey\> |             |

### LastSyncedTime [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_LastSyncedTime]

<div class="markdown level1 summary" markdown="1">

Gets the last time the variable was synced

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public float LastSyncedTime { get; }

#### Property Value [property-value-4]

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### Values [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Values]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public ICollection<TValue> Values { get; }

#### Property Value [property-value-5]

| Type                                             | Description |
|--------------------------------------------------|-------------|
| System.Collections.Generic.ICollection\<TValue\> |             |

## Methods 

### Add(TKey, TValue) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Add__0__1_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public void Add(TKey key, TValue value)

#### Parameters [parameters-4]

| Type   | Name  | Description |
|--------|-------|-------------|
| TKey   | key   |             |
| TValue | value |             |

### Add(KeyValuePair\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Add_System_Collections_Generic_KeyValuePair__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public void Add(KeyValuePair<TKey, TValue> item)

#### Parameters [parameters-5]

| Type                                                    | Name | Description |
|---------------------------------------------------------|------|-------------|
| System.Collections.Generic.KeyValuePair\<TKey, TValue\> | item |             |

### CanClientRead(UInt64) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CanClientRead_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public bool CanClientRead(ulong clientId)

#### Parameters [parameters-6]

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns [returns]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CanClientWrite(UInt64) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CanClientWrite_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public bool CanClientWrite(ulong clientId)

#### Parameters [parameters-7]

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns [returns-1]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Clear() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Clear]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public void Clear()

### Contains(KeyValuePair\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Contains_System_Collections_Generic_KeyValuePair__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public bool Contains(KeyValuePair<TKey, TValue> item)

#### Parameters [parameters-8]

| Type                                                    | Name | Description |
|---------------------------------------------------------|------|-------------|
| System.Collections.Generic.KeyValuePair\<TKey, TValue\> | item |             |

#### Returns [returns-2]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ContainsKey(TKey) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ContainsKey__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public bool ContainsKey(TKey key)

#### Parameters [parameters-9]

| Type | Name | Description |
|------|------|-------------|
| TKey | key  |             |

#### Returns [returns-3]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CopyTo(KeyValuePair\<TKey, TValue\>\[\], Int32) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CopyTo_System_Collections_Generic_KeyValuePair__0__1____System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)

#### Parameters [parameters-10]

| Type                                                        | Name       | Description |
|-------------------------------------------------------------|------------|-------------|
| System.Collections.Generic.KeyValuePair\<TKey, TValue\>\[\] | array      |             |
| System.Int32                                                | arrayIndex |             |

### GetChannel() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_GetChannel]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public string GetChannel()

#### Returns [returns-4]

| Type          | Description |
|---------------|-------------|
| System.String |             |

### GetEnumerator() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_GetEnumerator]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()

#### Returns [returns-5]

| Type                                                                                              | Description |
|---------------------------------------------------------------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator\<System.Collections.Generic.KeyValuePair\<TKey, TValue\>\> |             |

### IsDirty() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_IsDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public bool IsDirty()

#### Returns [returns-6]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ReadDelta(Stream, Boolean) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ReadDelta_System_IO_Stream_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters [parameters-11]

| Type             | Name           | Description |
|------------------|----------------|-------------|
| System.IO.Stream | stream         |             |
| System.Boolean   | keepDirtyDelta |             |

### ReadField(Stream) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ReadField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public void ReadField(Stream stream)

#### Parameters [parameters-12]

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

### Remove(TKey) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Remove__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public bool Remove(TKey key)

#### Parameters [parameters-13]

| Type | Name | Description |
|------|------|-------------|
| TKey | key  |             |

#### Returns [returns-7]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Remove(KeyValuePair\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Remove_System_Collections_Generic_KeyValuePair__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public bool Remove(KeyValuePair<TKey, TValue> item)

#### Parameters [parameters-14]

| Type                                                    | Name | Description |
|---------------------------------------------------------|------|-------------|
| System.Collections.Generic.KeyValuePair\<TKey, TValue\> | item |             |

#### Returns [returns-8]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ResetDirty() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ResetDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public void ResetDirty()

### SetNetworkedBehaviour(NetworkedBehaviour) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_SetNetworkedBehaviour_MLAPI_NetworkedBehaviour_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters [parameters-15]

| Type               | Name      | Description |
|--------------------|-----------|-------------|
| NetworkedBehaviour | behaviour |             |

### TryGetValue(TKey, out TValue) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_TryGetValue__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public bool TryGetValue(TKey key, out TValue value)

#### Parameters [parameters-16]

| Type   | Name  | Description |
|--------|-------|-------------|
| TKey   | key   |             |
| TValue | value |             |

#### Returns [returns-9]

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteDelta(Stream) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_WriteDelta_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public void WriteDelta(Stream stream)

#### Parameters [parameters-17]

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

### WriteField(Stream) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_WriteField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public void WriteField(Stream stream)

#### Parameters [parameters-18]

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

## Events

### OnDictionaryChanged [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_OnDictionaryChanged]

<div class="markdown level1 summary" markdown="1">

The callback to be invoked when the dictionary gets changed

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-31]

    public event NetworkedDictionary<TKey, TValue>.OnDictionaryChangedDelegate OnDictionaryChanged

#### Event Type [event-type]

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| NetworkedDictionary.OnDictionaryChangedDelegate\<\> |             |

## Explicit Interface Implementations  [eii]

### IEnumerable.GetEnumerator() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_System_Collections_IEnumerable_GetEnumerator]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    IEnumerator IEnumerable.GetEnumerator()

#### Returns [returns-10]

| Type                           | Description |
|--------------------------------|-------------|
| System.Collections.IEnumerator |             |

### Implements [implements]

<div markdown="1">

System.Collections.Generic.IDictionary\<TKey, TValue\>

</div>

<div markdown="1">

System.Collections.Generic.ICollection\<T\>

</div>

<div markdown="1">

System.Collections.Generic.IEnumerable\<T\>

</div>

<div markdown="1">

System.Collections.IEnumerable

</div>

<div markdown="1">

INetworkedVar

</div>
