---  
id: Unity.Netcode.NetworkList-1  
title: Unity.Netcode.NetworkList-1  
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

<div class="level2">

System.Dynamic.ExpandoObject

</div>

</div>

<div classs="implements">

##### Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

NetworkVariableBase.Initialize(NetworkBehaviour)

</div>

<div>

NetworkVariableBase.Name

</div>

<div>

NetworkVariableBase.ReadPerm

</div>

<div>

NetworkVariableBase.SetDirty(Boolean)

</div>

<div>

NetworkVariableBase.ShouldWrite(UInt64, Boolean)

</div>

<div>

NetworkVariableBase.CanClientRead(UInt64)

</div>

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

``` lang-csharp
public class NetworkList<T> : NetworkVariableBase, IDisposable where T : struct, IEquatable<T>
```

##### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type for the list |

## 

### NetworkList()

<div class="markdown level1 summary">

Creates a NetworkList with the default value and settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkList()
```

### NetworkList(IEnumerable\&lt;T&gt;)

<div class="markdown level1 summary">

Creates a NetworkList with a custom value and the default settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkList(IEnumerable<T> values)
```

#### Parameters

| Type                                       | Name   | Description                                  |
|--------------------------------------------|--------|----------------------------------------------|
| System.Collections.Generic.IEnumerable\&lt;T&gt; | values | The initial value to use for the NetworkList |

### NetworkList(NetworkVariableReadPermission, IEnumerable\&lt;T&gt;)

<div class="markdown level1 summary">

Creates a NetworkList with the default value and custom settings

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkList(NetworkVariableReadPermission readPerm, IEnumerable<T> values)
```

#### Parameters

| Type                                       | Name     | Description                                    |
|--------------------------------------------|----------|------------------------------------------------|
| NetworkVariableReadPermission              | readPerm | The read permission to use for the NetworkList |
| System.Collections.Generic.IEnumerable\&lt;T&gt; | values   | The initial value to use for the NetworkList   |

## 

### Count

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Count { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Item\[Int32\]

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public T this[int index] { get; set; }
```

#### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

#### Property Value

| Type | Description |
|------|-------------|
| T    |             |

### LastModifiedTick

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int LastModifiedTick { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Add(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Add(T item)
```

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

### Clear()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Clear()
```

### Contains(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Contains(T item)
```

#### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void Dispose()
```

#### Overrides

<div>

NetworkVariableBase.Dispose()

</div>

### GetEnumerator()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

| Type                                       | Description |
|--------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator\&lt;T&gt; |             |

### IndexOf(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int IndexOf(T item)
```

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

``` lang-csharp
public void Insert(int index, T item)
```

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

``` lang-csharp
public override bool IsDirty()
```

#### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

#### Overrides

<div>

NetworkVariableBase.IsDirty()

</div>

### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

#### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

#### Overrides

<div>

NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)

</div>

### ReadField(FastBufferReader)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadField(FastBufferReader reader)
```

#### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

#### Overrides

<div>

NetworkVariableBase.ReadField(FastBufferReader)

</div>

### Remove(T)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Remove(T item)
```

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

``` lang-csharp
public void RemoveAt(int index)
```

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

``` lang-csharp
public override void ResetDirty()
```

#### Overrides

<div>

NetworkVariableBase.ResetDirty()

</div>

### WriteDelta(FastBufferWriter)

<div class="markdown level1 summary">

Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| FastBufferWriter | writer | The stream to write the dirty changes to |

#### Overrides

<div>

NetworkVariableBase.WriteDelta(FastBufferWriter)

</div>

### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteField(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

#### Overrides

<div>

NetworkVariableBase.WriteField(FastBufferWriter)

</div>

## 

### OnListChanged

<div class="markdown level1 summary">

The callback to be invoked when the list gets changed

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public event NetworkList<T>.OnListChangedDelegate OnListChanged
```

#### Event Type

| Type                                  | Description |
|---------------------------------------|-------------|
| NetworkList.OnListChangedDelegate\<\> |             |

### Implements

<div>

System.IDisposable

</div>
