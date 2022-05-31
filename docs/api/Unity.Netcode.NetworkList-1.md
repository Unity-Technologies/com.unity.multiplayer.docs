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

</div>
<div class="level0">

System.Object

</div>

<div class="level1">

NetworkVariableBase

</div>

<div class="level2">

NetworkVariableSerialization\<T\>

</div>

<div class="level3">

NetworkList\<T\>

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

NetworkVariableSerialization\<T\>.Write(FastBufferWriter, T)

</div>

<div>

NetworkVariableSerialization\<T\>.Read(FastBufferReader, T)

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

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NetworkList<T> : NetworkVariableSerialization<T>, IDisposable where T : struct, IEquatable<T>
```

</div>

##### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type for the list |

### Constructors

#### NetworkList()


##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkList()
```

</div>

#### NetworkList(IEnumerable\<T\>, NetworkVariableReadPermission, NetworkVariableWritePermission)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkList(IEnumerable<T> values = null, NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

</div>

##### Parameters

| Type                                        | Name      | Description |
|---------------------------------------------|-----------|-------------|
| System.Collections.Generic.IEnumerable\<T\> | values    |             |
| NetworkVariableReadPermission               | readPerm  |             |
| NetworkVariableWritePermission              | writePerm |             |

### Properties

#### Count

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Count { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Item\[Int32\]

##### Declaration

<div class="codewrapper">

``` lang-csharp
public T this[int index] { get; set; }
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

##### Property Value

| Type | Description |
|------|-------------|
| T    |             |

#### LastModifiedTick

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int LastModifiedTick { get; }
```

</div>

##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Add(T)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Add(T item)
```

</div>

##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

#### Clear()

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Clear()
```

</div>

#### Contains(T)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Contains(T item)
```

</div>

##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Dispose()

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void Dispose()
```

</div>

##### Overrides

<div>

NetworkVariableBase.Dispose()

</div>

#### GetEnumerator()

##### Declaration

<div class="codewrapper">

``` lang-csharp
public IEnumerator<T> GetEnumerator()
```

</div>

##### Returns

| Type                                        | Description |
|---------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator\<T\> |             |

#### IndexOf(T)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int IndexOf(T item)
```

</div>

##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Insert(Int32, T)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Insert(int index, T item)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |
| T            | item  |             |

#### IsDirty()

<div class="markdown level1 summary">

Gets Whether or not the container is dirty

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool IsDirty()
```

</div>

##### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

##### Overrides

<div>

NetworkVariableBase.IsDirty()

</div>

#### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

</div>

##### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

##### Overrides

<div>

NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)

</div>

#### ReadField(FastBufferReader)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void ReadField(FastBufferReader reader)
```

</div>

##### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

##### Overrides

<div>

NetworkVariableBase.ReadField(FastBufferReader)

</div>

#### Remove(T)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Remove(T item)
```

</div>

##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### RemoveAt(Int32)

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void RemoveAt(int index)
```

</div>

##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

#### ResetDirty()

<div class="markdown level1 summary">

Resets the dirty state and marks the variable as synced / clean

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void ResetDirty()
```

</div>

##### Overrides

<div>

NetworkVariableBase.ResetDirty()

</div>

#### WriteDelta(FastBufferWriter)

<div class="markdown level1 summary">

Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| FastBufferWriter | writer | The stream to write the dirty changes to |

##### Overrides

<div>

NetworkVariableBase.WriteDelta(FastBufferWriter)

</div>

#### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override void WriteField(FastBufferWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

##### Overrides

<div>

NetworkVariableBase.WriteField(FastBufferWriter)

</div>

### Events

#### OnListChanged

<div class="markdown level1 summary">

The callback to be invoked when the list gets changed

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public event NetworkList<T>.OnListChangedDelegate OnListChanged
```

</div>

##### Event Type

| Type                                  | Description |
|---------------------------------------|-------------|
| NetworkList.OnListChangedDelegate\<\> |             |

### Implements

<div>

System.IDisposable

</div>

 
