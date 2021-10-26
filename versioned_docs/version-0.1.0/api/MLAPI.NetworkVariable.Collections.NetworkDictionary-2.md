---  
id: MLAPI.NetworkVariable.Collections.NetworkDictionary-2  
title: MLAPI.NetworkVariable.Collections.NetworkDictionary-2
---

<div class="markdown level0 summary">

Event based NetworkVariable container for syncing Dictionaries

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

INetworkVariable

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

    public class NetworkDictionary<TKey, TValue> : IDictionary<TKey, TValue>, ICollection<KeyValuePair<TKey, TValue>>, IEnumerable<KeyValuePair<TKey, TValue>>, IEnumerable, INetworkVariable

##### Type Parameters

| Name   | Description                        |
|--------|------------------------------------|
| TKey   | The type for the dictionary keys   |
| TValue | The type for the dictionary values |

## Constructors 

### NetworkDictionary()

<div class="markdown level1 summary">

Creates a NetworkDictionary with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDictionary()

### NetworkDictionary(NetworkVariableSettings)

<div class="markdown level1 summary">

Creates a NetworkDictionary with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDictionary(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description                                   |
|-------------------------|----------|-----------------------------------------------|
| NetworkVariableSettings | settings | The settings to use for the NetworkDictionary |

### NetworkDictionary(NetworkVariableSettings, IDictionary&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

Creates a NetworkDictionary with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDictionary(NetworkVariableSettings settings, IDictionary<TKey, TValue> value)

#### Parameters

| Type                                                       | Name     | Description                                        |
|------------------------------------------------------------|----------|----------------------------------------------------|
| NetworkVariableSettings                                    | settings | The settings to use for the NetworkDictionary      |
| System.Collections.Generic.IDictionary&lt;TKey, TValue&gt; | value    | The initial value to use for the NetworkDictionary |

### NetworkDictionary(IDictionary&lt;TKey, TValue&gt;)

<div class="markdown level1 summary">

Creates a NetworkDictionary with a custom value and the default settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDictionary(IDictionary<TKey, TValue> value)

#### Parameters

| Type                                                       | Name  | Description                                        |
|------------------------------------------------------------|-------|----------------------------------------------------|
| System.Collections.Generic.IDictionary&lt;TKey, TValue&gt; | value | The initial value to use for the NetworkDictionary |

## Fields

### Settings

<div class="markdown level1 summary">

The settings for this container

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly NetworkVariableSettings Settings

#### Field Value

| Type                    | Description |
|-------------------------|-------------|
| NetworkVariableSettings |             |

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

### RemoteTick

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ushort RemoteTick { get; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

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

Gets Whether or not a specific client can read to the varaible

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientRead(ulong clientId)

#### Parameters

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The clientId of the remote client |

#### Returns

| Type           | Description                                        |
|----------------|----------------------------------------------------|
| System.Boolean | Whether or not the client can read to the variable |

### CanClientWrite(UInt64)

<div class="markdown level1 summary">

Gets Whether or not a specific client can write to the varaible

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool CanClientWrite(ulong clientId)

#### Parameters

| Type          | Name     | Description                       |
|---------------|----------|-----------------------------------|
| System.UInt64 | clientId | The clientId of the remote client |

#### Returns

| Type           | Description                                         |
|----------------|-----------------------------------------------------|
| System.Boolean | Whether or not the client can write to the variable |

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

Returns the name of the channel to be used for syncing

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkChannel GetChannel()

#### Returns

| Type           | Description                                    |
|----------------|------------------------------------------------|
| NetworkChannel | The name of the channel to be used for syncing |

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

Gets Whether or not the container is dirty

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsDirty()

#### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

### ReadDelta(Stream, Boolean, UInt16, UInt16)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadDelta(Stream stream, bool keepDirtyDelta, ushort localTick, ushort remoteTick)

#### Parameters

| Type             | Name           | Description                                                                         |
|------------------|----------------|-------------------------------------------------------------------------------------|
| System.IO.Stream | stream         | The stream to read the delta from                                                   |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed                        |
| System.UInt16    | localTick      | The local network tick at which this var was written, on the machine it was written |
| System.UInt16    | remoteTick     | The remote network tick at which this var was sent by the host                      |

### ReadField(Stream, UInt16, UInt16)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadField(Stream stream, ushort localTick, ushort remoteTick)

#### Parameters

| Type             | Name       | Description                                                                         |
|------------------|------------|-------------------------------------------------------------------------------------|
| System.IO.Stream | stream     | The stream to read the state from                                                   |
| System.UInt16    | localTick  | The local network tick at which this var was written, on the machine it was written |
| System.UInt16    | remoteTick | The remote network tick at which this var was sent by the host                      |

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

Resets the dirty state and marks the variable as synced / clean

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ResetDirty()

### SetNetworkBehaviour(NetworkBehaviour)

<div class="markdown level1 summary">

Sets NetworkBehaviour the container belongs to.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void SetNetworkBehaviour(NetworkBehaviour behaviour)

#### Parameters

| Type             | Name      | Description                            |
|------------------|-----------|----------------------------------------|
| NetworkBehaviour | behaviour | The behaviour the container behaves to |

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

Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteDelta(Stream stream)

#### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| System.IO.Stream | stream | The stream to write the dirty changes to |

### WriteField(Stream)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void WriteField(Stream stream)

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| System.IO.Stream | stream | The stream to write the state to |

## Events

### OnDictionaryChanged

<div class="markdown level1 summary">

The callback to be invoked when the dictionary gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkDictionary<TKey, TValue>.OnDictionaryChangedDelegate OnDictionaryChanged

#### Event Type

| Type                                                  | Description |
|-------------------------------------------------------|-------------|
| NetworkDictionary.OnDictionaryChangedDelegate&lt;&gt; |             |

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

INetworkVariable

</div>
