---  
id: MLAPI.NetworkedVar.Collections.NetworkedDictionary-2  
title: MLAPI.NetworkedVar.Collections.NetworkedDictionary-2  
---

<div class="markdown level0 summary">

Event based networkedVar container for syncing Dictionaries

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

<div classs="implements">

##### Implements

<div>

System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;

</div>

<div>

System.Collections.Generic.ICollection&lt;System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt;&gt;

</div>

<div>

System.Collections.Generic.IEnumerable&lt;System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt;&gt;

</div>

<div>

System.Collections.IEnumerable

</div>

<div>

INetworkedVar

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

    public class NetworkedDictionary<TKey, TValue> : IDictionary<TKey, TValue>, ICollection<KeyValuePair<TKey, TValue>>, IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, INetworkedVar

##### Type Parameters

| Name   | Description                        |
|--------|------------------------------------|
| TKey   | The type for the dictionary keys   |
| TValue | The type for the dictionary values |

## Constructors 

### NetworkedDictionary()

<div class="markdown level1 summary">

Creates a NetworkedDictionary with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedDictionary()

### NetworkedDictionary(NetworkedVarSettings)

<div class="markdown level1 summary">

Creates a NetworkedDictionary with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedDictionary(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description                                     |
|----------------------|----------|-------------------------------------------------|
| NetworkedVarSettings | settings | The settings to use for the NetworkedDictionary |

### NetworkedDictionary(NetworkedVarSettings, IDictionary&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

Creates a NetworkedDictionary with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedDictionary(NetworkedVarSettings settings, IDictionary<TKey, TValue> value)

#### Parameters

| Type                                                       | Name     | Description                                          |
|------------------------------------------------------------|----------|------------------------------------------------------|
| NetworkedVarSettings                                       | settings | The settings to use for the NetworkedDictionary      |
| System.Collections.Generic.IDictionary&lt;TKey, TValue&gt; | value    | The initial value to use for the NetworkedDictionary |

### NetworkedDictionary(IDictionary&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

Creates a NetworkedDictionary with a custom value and the default
settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedDictionary(IDictionary<TKey, TValue> value)

#### Parameters

| Type                                                       | Name  | Description                                          |
|------------------------------------------------------------|-------|------------------------------------------------------|
| System.Collections.Generic.IDictionary&lt;TKey, TValue&gt; | value | The initial value to use for the NetworkedDictionary |

## Fields

### Settings

<div class="markdown level1 summary">

The settings for this container

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly NetworkedVarSettings Settings

#### Field Value

| Type                 | Description |
|----------------------|-------------|
| NetworkedVarSettings |             |

## Properties 

### Count

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int Count { get; }

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### IsReadOnly

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsReadOnly { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Item\[TKey\]

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public TValue this[TKey key] { get; set; }

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| TKey | key  |             |

#### Property Value

| Type   | Description |
|--------|-------------|
| TValue |             |

### Keys

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ICollection<TKey> Keys { get; }

#### Property Value

| Type                                               | Description |
|----------------------------------------------------|-------------|
| System.Collections.Generic.ICollection&lt;TKey&gt; |             |

### LastSyncedTime

<div class="markdown level1 summary">

Gets the last time the variable was synced

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public float LastSyncedTime { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.Single |             |

### Values

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ICollection<TValue> Values { get; }

#### Property Value

| Type                                                 | Description |
|------------------------------------------------------|-------------|
| System.Collections.Generic.ICollection&lt;TValue&gt; |             |

## Methods 

### Add(TKey, TValue)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Add(TKey key, TValue value)

#### Parameters

| Type   | Name  | Description |
|--------|-------|-------------|
| TKey   | key   |             |
| TValue | value |             |

### Add(KeyValuePair&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Add(KeyValuePair<TKey, TValue> item)

#### Parameters

| Type                                                        | Name | Description |
|-------------------------------------------------------------|------|-------------|
| System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt; | item |             |

### CanClientRead(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientRead(ulong clientId)

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CanClientWrite(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientWrite(ulong clientId)

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Clear()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Clear()

### Contains(KeyValuePair&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Contains(KeyValuePair<TKey, TValue> item)

#### Parameters

| Type                                                        | Name | Description |
|-------------------------------------------------------------|------|-------------|
| System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt; | item |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ContainsKey(TKey)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool ContainsKey(TKey key)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| TKey | key  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CopyTo(KeyValuePair&lt;TKey, TValue&gt;\[\], Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)

#### Parameters

| Type                                                            | Name       | Description |
|-----------------------------------------------------------------|------------|-------------|
| System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt;\[\] | array      |             |
| System.Int32                                                    | arrayIndex |             |

### GetChannel()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public string GetChannel()

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

### GetEnumerator()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()

#### Returns

| Type                                                                                                      | Description |
|-----------------------------------------------------------------------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator&lt;System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt;&gt; |             |

### IsDirty()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDirty()

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ReadDelta(Stream, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadDelta(Stream stream, bool keepDirtyDelta)

#### Parameters

| Type             | Name           | Description |
|------------------|----------------|-------------|
| System.IO.Stream | stream         |             |
| System.Boolean   | keepDirtyDelta |             |

### ReadField(Stream)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadField(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

### Remove(TKey)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Remove(TKey key)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| TKey | key  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Remove(KeyValuePair&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Remove(KeyValuePair<TKey, TValue> item)

#### Parameters

| Type                                                        | Name | Description |
|-------------------------------------------------------------|------|-------------|
| System.Collections.Generic.KeyValuePair&lt;TKey, TValue&gt; | item |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### ResetDirty()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ResetDirty()

### SetNetworkedBehaviour(NetworkedBehaviour)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetNetworkedBehaviour(NetworkedBehaviour behaviour)

#### Parameters

| Type               | Name      | Description |
|--------------------|-----------|-------------|
| NetworkedBehaviour | behaviour |             |

### TryGetValue(TKey, out TValue)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool TryGetValue(TKey key, out TValue value)

#### Parameters

| Type   | Name  | Description |
|--------|-------|-------------|
| TKey   | key   |             |
| TValue | value |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### WriteDelta(Stream)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDelta(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

### WriteField(Stream)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteField(Stream stream)

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| System.IO.Stream | stream |             |

## Events

### OnDictionaryChanged

<div class="markdown level1 summary">

The callback to be invoked when the dictionary gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkedDictionary<TKey, TValue>.OnDictionaryChangedDelegate OnDictionaryChanged

#### Event Type

| Type                                                    | Description |
|---------------------------------------------------------|-------------|
| NetworkedDictionary.OnDictionaryChangedDelegate&lt;&gt; |             |

## Explicit Interface Implementations 

### IEnumerable.GetEnumerator()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    IEnumerator IEnumerable.GetEnumerator()

#### Returns

| Type                           | Description |
|--------------------------------|-------------|
| System.Collections.IEnumerator |             |

### Implements

<div>

System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;

</div>

<div>

System.Collections.Generic.ICollection&lt;T&gt;

</div>

<div>

System.Collections.Generic.IEnumerable&lt;T&gt;

</div>

<div>

System.Collections.IEnumerable

</div>

<div>

INetworkedVar

</div>
