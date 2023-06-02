---
id: Unity.Netcode.NetworkList-1
title: Unity.Netcode.NetworkList-1
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:41:19 pm
---

<div class="markdown level0 summary">

Event based NetworkVariable container for syncing Lists

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

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

## Implements

<div>

System.IDisposable

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

NetworkVariableBase.GetBehaviour()

</div>

<div>

NetworkVariableBase.Initialize(NetworkBehaviour)

</div>

<div>

NetworkVariableBase.DefaultReadPerm

</div>

<div>

NetworkVariableBase.DefaultWritePerm

</div>

<div>

NetworkVariableBase.Name

</div>

<div>

NetworkVariableBase.ReadPerm

</div>

<div>

NetworkVariableBase.WritePerm

</div>

<div>

NetworkVariableBase.SetDirty(Boolean)

</div>

<div>

NetworkVariableBase.CanClientRead(UInt64)

</div>

<div>

NetworkVariableBase.CanClientWrite(UInt64)

</div>

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

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

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class NetworkList<T> : NetworkVariableBase, IDisposable where T : struct, IEquatable<T>
```

## Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type for the list |

## Constructors

### NetworkList()

<div class="markdown level1 summary">

Constructor method for

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkList()
```

### NetworkList(IEnumerable\<T\>, NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkList(IEnumerable<T> values = null, NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

#### Parameters

| Type                                        | Name      | Description |
|---------------------------------------------|-----------|-------------|
| System.Collections.Generic.IEnumerable\<T\> | values    |             |
| NetworkVariableReadPermission               | readPerm  |             |
| NetworkVariableWritePermission              | writePerm |             |

## Properties

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

This is actually unused left-over from a previous interface

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

## Methods

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

Overridden System.IDisposable implementation. CAUTION: If you derive from this class and override the Dispose() method, you **must** always invoke the base.Dispose() method!

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

| Type                                        | Description |
|---------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator\<T\> |             |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool IsDirty()
```

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

NetworkVariableBase.IsDirty()

</div>

### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

#### Parameters

| Type             | Name           | Description |
|------------------|----------------|-------------|
| FastBufferReader | reader         |             |
| System.Boolean   | keepDirtyDelta |             |

#### Overrides

<div>

NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)

</div>

### ReadField(FastBufferReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void ReadField(FastBufferReader reader)
```

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferReader | reader |             |

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

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferWriter | writer |             |

#### Overrides

<div>

NetworkVariableBase.WriteDelta(FastBufferWriter)

</div>

### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override void WriteField(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| FastBufferWriter | writer |             |

#### Overrides

<div>

NetworkVariableBase.WriteField(FastBufferWriter)

</div>

## Events

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
