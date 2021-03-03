---  
id: MLAPI.NetworkedVar.Collections.NetworkedList-1  
title: MLAPI.NetworkedVar.Collections.NetworkedList-1  
---

<div class="markdown level0 summary">

Event based networkedVar container for syncing Lists

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

    public class NetworkedList<T> : IList<T>, ICollection<T>, IEnumerable<T>, IEnumerable, INetworkedVar

##### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type for the list |

## Constructors 

### NetworkedList()

<div class="markdown level1 summary">

Creates a NetworkedList with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedList()

### NetworkedList(NetworkedVarSettings)

<div class="markdown level1 summary">

Creates a NetworkedList with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedList(NetworkedVarSettings settings)

#### Parameters

| Type                 | Name     | Description                               |
|----------------------|----------|-------------------------------------------|
| NetworkedVarSettings | settings | The settings to use for the NetworkedList |

### NetworkedList(NetworkedVarSettings, IList&lt;T&gt;)

<div class="markdown level1 summary">

Creates a NetworkedList with a custom value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedList(NetworkedVarSettings settings, IList<T> value)

#### Parameters

| Type                                      | Name     | Description                                    |
|-------------------------------------------|----------|------------------------------------------------|
| NetworkedVarSettings                      | settings | The settings to use for the NetworkedList      |
| System.Collections.Generic.IList&lt;T&gt; | value    | The initial value to use for the NetworkedList |

### NetworkedList(IList&lt;T&gt;)

<div class="markdown level1 summary">

Creates a NetworkedList with a custom value and the default settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedList(IList<T> value)

#### Parameters

| Type                                      | Name  | Description                                    |
|-------------------------------------------|-------|------------------------------------------------|
| System.Collections.Generic.IList&lt;T&gt; | value | The initial value to use for the NetworkedList |

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

### OnListChanged

<div class="markdown level1 summary">

The callback to be invoked when the list gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public event NetworkedList<T>.OnListChangedDelegate OnListChanged

#### Event Type

| Type                                        | Description |
|---------------------------------------------|-------------|
| NetworkedList.OnListChangedDelegate&lt;&gt; |             |

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

INetworkedVar

</div>
