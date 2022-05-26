---  
id: Unity.Netcode.NetworkVariableBase  
title: Unity.Netcode.NetworkVariableBase  
---

<div class="markdown level0 summary">

Interface for network value containers

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Object

</div>

<div class="level1">

NetworkVariableBase

</div>

<div class="level2">

NetworkVariableSerialization\<T\>

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
public abstract class NetworkVariableBase : IDisposable
```

</div>

### Constructors

#### NetworkVariableBase(NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
protected NetworkVariableBase(NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

</div>

##### Parameters

| Type                           | Name      | Description |
|--------------------------------|-----------|-------------|
| NetworkVariableReadPermission  | readPerm  |             |
| NetworkVariableWritePermission | writePerm |             |

### Fields

#### DefaultReadPerm

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const NetworkVariableReadPermission DefaultReadPerm = NetworkVariableReadPermission.Everyone
```

</div>

##### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| NetworkVariableReadPermission |             |

#### DefaultWritePerm

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public const NetworkVariableWritePermission DefaultWritePerm = NetworkVariableWritePermission.Server
```

</div>

##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkVariableWritePermission |             |

#### ReadPerm

<div class="markdown level1 summary">

The read permission for this var

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly NetworkVariableReadPermission ReadPerm
```

</div>

##### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| NetworkVariableReadPermission |             |

#### WritePerm

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public readonly NetworkVariableWritePermission WritePerm
```

</div>

##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkVariableWritePermission |             |

### Properties

#### Name

<div class="markdown level1 summary">

Gets or sets the name of the network variable's instance (MemberInfo)
where it was declared.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public string Name { get; }
```

</div>

##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Methods

#### CanClientRead(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool CanClientRead(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### CanClientWrite(UInt64)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool CanClientWrite(ulong clientId)
```

</div>

##### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.UInt64 | clientId |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Dispose()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void Dispose()
```

</div>

#### Initialize(NetworkBehaviour)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void Initialize(NetworkBehaviour networkBehaviour)
```

</div>

##### Parameters

| Type             | Name             | Description |
|------------------|------------------|-------------|
| NetworkBehaviour | networkBehaviour |             |

#### IsDirty()

<div class="markdown level1 summary">

Gets Whether or not the container is dirty

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual bool IsDirty()
```

</div>

##### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

#### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public abstract void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

</div>

##### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

#### ReadField(FastBufferReader)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public abstract void ReadField(FastBufferReader reader)
```

</div>

##### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

#### ResetDirty()

<div class="markdown level1 summary">

Resets the dirty state and marks the variable as synced / clean

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void ResetDirty()
```

</div>

#### SetDirty(Boolean)

<div class="markdown level1 summary">

Sets whether or not the variable needs to be delta synced

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public virtual void SetDirty(bool isDirty)
```

</div>

##### Parameters

| Type           | Name    | Description |
|----------------|---------|-------------|
| System.Boolean | isDirty |             |

#### WriteDelta(FastBufferWriter)

<div class="markdown level1 summary">

Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public abstract void WriteDelta(FastBufferWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| FastBufferWriter | writer | The stream to write the dirty changes to |

#### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public abstract void WriteField(FastBufferWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

### Implements

<div>

System.IDisposable

</div>

 
