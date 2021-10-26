---  
id: MLAPI.NetworkVariable.Collections.NetworkList-1  
title: MLAPI.NetworkVariable.Collections.NetworkList-1
---

<div class="markdown level0 summary">

Event based NetworkVariable container for syncing Lists

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

System.Collections.Generic.IList&lt;T&gt;

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

    public class NetworkList<T> : IList<T>, ICollection<T>, IEnumerable<T>, IEnumerable, INetworkVariable

##### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type for the list |

## Constructors 

### NetworkList()

<div class="markdown level1 summary">

Creates a NetworkList with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkList()

### NetworkList(NetworkVariableSettings)

<div class="markdown level1 summary">

Creates a NetworkList with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkList(NetworkVariableSettings settings)

#### Parameters

| Type                    | Name     | Description                             |
|-------------------------|----------|-----------------------------------------|
| NetworkVariableSettings | settings | The settings to use for the NetworkList |

### NetworkList(NetworkVariableSettings, IList&lt;T&gt;)

<div class="markdown level1 summary">

Creates a NetworkList with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkList(NetworkVariableSettings settings, IList<T> value)

#### Parameters

| Type                                      | Name     | Description                                  |
|-------------------------------------------|----------|----------------------------------------------|
| NetworkVariableSettings                   | settings | The settings to use for the NetworkList      |
| System.Collections.Generic.IList&lt;T&gt; | value    | The initial value to use for the NetworkList |

### NetworkList(IList&lt;T&gt;)

<div class="markdown level1 summary">

Creates a NetworkList with a custom value and the default settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkList(IList<T> value)

#### Parameters

| Type                                      | Name  | Description                                  |
|-------------------------------------------|-------|----------------------------------------------|
| System.Collections.Generic.IList&lt;T&gt; | value | The initial value to use for the NetworkList |

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

### Item\[Int32\]

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public T this[int index] { get; set; }

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

#### Property Value

| Type | Description |
|------|-------------|
| T    |             |

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

## Methods 

### Add(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Add(T item)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

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

### Contains(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Contains(T item)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CopyTo(T\[\], Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void CopyTo(T[] array, int arrayIndex)

#### Parameters

| Type         | Name       | Description |
|--------------|------------|-------------|
| T\[\]        | array      |             |
| System.Int32 | arrayIndex |             |

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

    public IEnumerator<T> GetEnumerator()

#### Returns

| Type                                            | Description |
|-------------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator&lt;T&gt; |             |

### IndexOf(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int IndexOf(T item)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Insert(Int32, T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Insert(int index, T item)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |
| T            | item  |             |

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

### Remove(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool Remove(T item)

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RemoveAt(Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void RemoveAt(int index)

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

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

### OnListChanged

<div class="markdown level1 summary">

The callback to be invoked when the list gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkList<T>.OnListChangedDelegate OnListChanged

#### Event Type

| Type                                      | Description |
|-------------------------------------------|-------------|
| NetworkList.OnListChangedDelegate&lt;&gt; |             |

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

System.Collections.Generic.IList&lt;T&gt;

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
