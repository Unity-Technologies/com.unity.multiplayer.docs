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

<span class="xref">System.Collections.Generic.IDictionary</span>\<TKey,
TValue\>

</div>

<div markdown="1">

<span class="xref">System.Collections.Generic.ICollection</span>\<<span
class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey,
TValue\>\>

</div>

<div markdown="1">

<span class="xref">System.Collections.Generic.IEnumerable</span>\<<span
class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey,
TValue\>\>

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

##### Syntax [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_syntax]

    public class NetworkedDictionary<TKey, TValue> : IDictionary<TKey, TValue>, ICollection<KeyValuePair<TKey, TValue>>, IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, INetworkedVar

##### Type Parameters [type-parameters]

| Name                                      | Description                        |
|-------------------------------------------|------------------------------------|
| <span class="parametername">TKey</span>   | The type for the dictionary keys   |
| <span class="parametername">TValue</span> | The type for the dictionary values |

## Constructors <span id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_"></span>

### NetworkedDictionary() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with the default value and settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public NetworkedDictionary()

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_"></span>

### NetworkedDictionary(NetworkedVarSettings) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with the default value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public NetworkedDictionary(NetworkedVarSettings settings)

#### Parameters [parameters]

| Type                 | Name                                        | Description                                     |
|----------------------|---------------------------------------------|-------------------------------------------------|
| NetworkedVarSettings | <span class="parametername">settings</span> | The settings to use for the NetworkedDictionary |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_"></span>

### NetworkedDictionary(NetworkedVarSettings, IDictionary\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_MLAPI_NetworkedVar_NetworkedVarSettings_System_Collections_Generic_IDictionary__0__1__]

<div class="markdown level1 summary" markdown="1">

Creates a NetworkedDictionary with a custom value and custom settings

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public NetworkedDictionary(NetworkedVarSettings settings, IDictionary<TKey, TValue> value)

#### Parameters [parameters-1]

| Type                                                                             | Name                                        | Description                                          |
|----------------------------------------------------------------------------------|---------------------------------------------|------------------------------------------------------|
| NetworkedVarSettings                                                             | <span class="parametername">settings</span> | The settings to use for the NetworkedDictionary      |
| <span class="xref">System.Collections.Generic.IDictionary</span>\<TKey, TValue\> | <span class="parametername">value</span>    | The initial value to use for the NetworkedDictionary |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2__ctor_"></span>

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

| Type                                                                             | Name                                     | Description                                          |
|----------------------------------------------------------------------------------|------------------------------------------|------------------------------------------------------|
| <span class="xref">System.Collections.Generic.IDictionary</span>\<TKey, TValue\> | <span class="parametername">value</span> | The initial value to use for the NetworkedDictionary |

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

## Properties <span id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Count_"></span>

### Count [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Count]

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
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_IsReadOnly_"></span>

### IsReadOnly [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_IsReadOnly]

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

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Item_"></span>

### Item\[TKey\] [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Item__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public TValue this[TKey key] { get; set; }

#### Parameters [parameters-3]

| Type                           | Name                                   | Description |
|--------------------------------|----------------------------------------|-------------|
| <span class="xref">TKey</span> | <span class="parametername">key</span> |             |

#### Property Value [property-value-2]

| Type                             | Description |
|----------------------------------|-------------|
| <span class="xref">TValue</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Keys_"></span>

### Keys [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Keys]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public ICollection<TKey> Keys { get; }

#### Property Value [property-value-3]

| Type                                                                     | Description |
|--------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.ICollection</span>\<TKey\> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_LastSyncedTime_"></span>

### LastSyncedTime [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_LastSyncedTime]

<div class="markdown level1 summary" markdown="1">

Gets the last time the variable was synced

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public float LastSyncedTime { get; }

#### Property Value [property-value-4]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.Single</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Values_"></span>

### Values [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Values]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public ICollection<TValue> Values { get; }

#### Property Value [property-value-5]

| Type                                                                       | Description |
|----------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.ICollection</span>\<TValue\> |             |

## Methods <span id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Add_"></span>

### Add(TKey, TValue) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Add__0__1_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public void Add(TKey key, TValue value)

#### Parameters [parameters-4]

| Type                             | Name                                     | Description |
|----------------------------------|------------------------------------------|-------------|
| <span class="xref">TKey</span>   | <span class="parametername">key</span>   |             |
| <span class="xref">TValue</span> | <span class="parametername">value</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Add_"></span>

### Add(KeyValuePair\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Add_System_Collections_Generic_KeyValuePair__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public void Add(KeyValuePair<TKey, TValue> item)

#### Parameters [parameters-5]

| Type                                                                              | Name                                    | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey, TValue\> | <span class="parametername">item</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CanClientRead_"></span>

### CanClientRead(UInt64) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CanClientRead_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public bool CanClientRead(ulong clientId)

#### Parameters [parameters-6]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CanClientWrite_"></span>

### CanClientWrite(UInt64) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CanClientWrite_System_UInt64_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public bool CanClientWrite(ulong clientId)

#### Parameters [parameters-7]

| Type                                    | Name                                        | Description |
|-----------------------------------------|---------------------------------------------|-------------|
| <span class="xref">System.UInt64</span> | <span class="parametername">clientId</span> |             |

#### Returns [returns-1]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Clear_"></span>

### Clear() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Clear]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public void Clear()

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Contains_"></span>

### Contains(KeyValuePair\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Contains_System_Collections_Generic_KeyValuePair__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public bool Contains(KeyValuePair<TKey, TValue> item)

#### Parameters [parameters-8]

| Type                                                                              | Name                                    | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey, TValue\> | <span class="parametername">item</span> |             |

#### Returns [returns-2]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ContainsKey_"></span>

### ContainsKey(TKey) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ContainsKey__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public bool ContainsKey(TKey key)

#### Parameters [parameters-9]

| Type                           | Name                                   | Description |
|--------------------------------|----------------------------------------|-------------|
| <span class="xref">TKey</span> | <span class="parametername">key</span> |             |

#### Returns [returns-3]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CopyTo_"></span>

### CopyTo(KeyValuePair\<TKey, TValue\>\[\], Int32) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_CopyTo_System_Collections_Generic_KeyValuePair__0__1____System_Int32_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)

#### Parameters [parameters-10]

| Type                                                                                  | Name                                          | Description |
|---------------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey, TValue\>\[\] | <span class="parametername">array</span>      |             |
| <span class="xref">System.Int32</span>                                                | <span class="parametername">arrayIndex</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_GetChannel_"></span>

### GetChannel() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_GetChannel]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public string GetChannel()

#### Returns [returns-4]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.String</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_GetEnumerator_"></span>

### GetEnumerator() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_GetEnumerator]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()

#### Returns [returns-5]

| Type                                                                                                                                                  | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.IEnumerator</span>\<<span class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey, TValue\>\> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_IsDirty_"></span>

### IsDirty() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_IsDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-21]

    public bool IsDirty()

#### Returns [returns-6]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ReadDelta_"></span>

### ReadDelta(Stream, Boolean) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ReadDelta_System_IO_Stream_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-22]

    public void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters [parameters-11]

| Type                                       | Name                                              | Description |
|--------------------------------------------|---------------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span>         |             |
| <span class="xref">System.Boolean</span>   | <span class="parametername">keepDirtyDelta</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ReadField_"></span>

### ReadField(Stream) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ReadField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-23]

    public void ReadField(Stream stream)

#### Parameters [parameters-12]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Remove_"></span>

### Remove(TKey) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Remove__0_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-24]

    public bool Remove(TKey key)

#### Parameters [parameters-13]

| Type                           | Name                                   | Description |
|--------------------------------|----------------------------------------|-------------|
| <span class="xref">TKey</span> | <span class="parametername">key</span> |             |

#### Returns [returns-7]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Remove_"></span>

### Remove(KeyValuePair\<TKey, TValue\>) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_Remove_System_Collections_Generic_KeyValuePair__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-25]

    public bool Remove(KeyValuePair<TKey, TValue> item)

#### Parameters [parameters-14]

| Type                                                                              | Name                                    | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.KeyValuePair</span>\<TKey, TValue\> | <span class="parametername">item</span> |             |

#### Returns [returns-8]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ResetDirty_"></span>

### ResetDirty() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_ResetDirty]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-26]

    public void ResetDirty()

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_SetNetworkedBehaviour_"></span>

### SetNetworkedBehaviour(NetworkedBehaviour) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_SetNetworkedBehaviour_MLAPI_NetworkedBehaviour_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-27]

    public void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters [parameters-15]

| Type               | Name                                         | Description |
|--------------------|----------------------------------------------|-------------|
| NetworkedBehaviour | <span class="parametername">behaviour</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_TryGetValue_"></span>

### TryGetValue(TKey, out TValue) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_TryGetValue__0__1__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-28]

    public bool TryGetValue(TKey key, out TValue value)

#### Parameters [parameters-16]

| Type                             | Name                                     | Description |
|----------------------------------|------------------------------------------|-------------|
| <span class="xref">TKey</span>   | <span class="parametername">key</span>   |             |
| <span class="xref">TValue</span> | <span class="parametername">value</span> |             |

#### Returns [returns-9]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_WriteDelta_"></span>

### WriteDelta(Stream) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_WriteDelta_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-29]

    public void WriteDelta(Stream stream)

#### Parameters [parameters-17]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

<span
id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_WriteField_"></span>

### WriteField(Stream) [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_WriteField_System_IO_Stream_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-30]

    public void WriteField(Stream stream)

#### Parameters [parameters-18]

| Type                                       | Name                                      | Description |
|--------------------------------------------|-------------------------------------------|-------------|
| <span class="xref">System.IO.Stream</span> | <span class="parametername">stream</span> |             |

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

## Explicit Interface Implementations <span id="MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_System_Collections_IEnumerable_GetEnumerator_"></span> [eii]

### IEnumerable.GetEnumerator() [MLAPI_NetworkedVar_Collections_NetworkedDictionary_2_System_Collections_IEnumerable_GetEnumerator]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-32]

    IEnumerator IEnumerable.GetEnumerator()

#### Returns [returns-10]

| Type                                                     | Description |
|----------------------------------------------------------|-------------|
| <span class="xref">System.Collections.IEnumerator</span> |             |

### Implements [implements]

<div markdown="1">

<span class="xref">System.Collections.Generic.IDictionary\<TKey,
TValue\></span>

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
