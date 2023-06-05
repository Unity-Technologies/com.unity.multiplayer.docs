---
id: Unity.Netcode.NetworkVariableBase
title: Unity.Netcode.NetworkVariableBase
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:36:43 pm
---

<div class="markdown level0 summary">

Interface for network value containers

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
public abstract class NetworkVariableBase : IDisposable
```

## Constructors

### NetworkVariableBase(NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

The default constructor for NetworkVariableBase that can be used to

create a custom NetworkVariable.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
protected NetworkVariableBase(NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```

#### Parameters

| Type                           | Name      | Description                                        |
|--------------------------------|-----------|----------------------------------------------------|
| NetworkVariableReadPermission  | readPerm  | the NetworkVariableReadPermission access settings  |
| NetworkVariableWritePermission | writePerm | the NetworkVariableWritePermission access settings |

## Fields

### DefaultReadPerm

<div class="markdown level1 summary">

The default read permissions

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const NetworkVariableReadPermission DefaultReadPerm = NetworkVariableReadPermission.Everyone
```

#### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| NetworkVariableReadPermission |             |

### DefaultWritePerm

<div class="markdown level1 summary">

The default write permissions

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const NetworkVariableWritePermission DefaultWritePerm = NetworkVariableWritePermission.Server
```

#### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkVariableWritePermission |             |

### ReadPerm

<div class="markdown level1 summary">

The read permission for this var

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkVariableReadPermission ReadPerm
```

#### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| NetworkVariableReadPermission |             |

### WritePerm

<div class="markdown level1 summary">

The write permission for this var

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly NetworkVariableWritePermission WritePerm
```

#### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkVariableWritePermission |             |

## Properties

### Name

<div class="markdown level1 summary">

Gets or sets the name of the network variable's instance (MemberInfo)

where it was declared.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Name { get; }
```

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

## Methods

### CanClientRead(UInt64)

<div class="markdown level1 summary">

Gets if a specific client has permission to read the var or not

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool CanClientRead(ulong clientId)
```

#### Parameters

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt64 | clientId | The client id |

#### Returns

| Type           | Description                                      |
|----------------|--------------------------------------------------|
| System.Boolean | Whether or not the client has permission to read |

### CanClientWrite(UInt64)

<div class="markdown level1 summary">

Gets if a specific client has permission to write the var or not

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool CanClientWrite(ulong clientId)
```

#### Parameters

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt64 | clientId | The client id |

#### Returns

| Type           | Description                                       |
|----------------|---------------------------------------------------|
| System.Boolean | Whether or not the client has permission to write |

### Dispose()

<div class="markdown level1 summary">

Virtual System.IDisposable implementation

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void Dispose()
```

### GetBehaviour()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkBehaviour GetBehaviour()
```

#### Returns

| Type             | Description |
|------------------|-------------|
| NetworkBehaviour |             |

### Initialize(NetworkBehaviour)

<div class="markdown level1 summary">

Initializes the NetworkVariable

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Initialize(NetworkBehaviour networkBehaviour)
```

#### Parameters

| Type             | Name             | Description                                         |
|------------------|------------------|-----------------------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour the NetworkVariable belongs to |

### IsDirty()

<div class="markdown level1 summary">

Gets Whether or not the container is dirty

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual bool IsDirty()
```

#### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

### ReadDelta(FastBufferReader, Boolean)

<div class="markdown level1 summary">

Reads delta from the reader and applies them to the internal value

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```

#### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

### ReadField(FastBufferReader)

<div class="markdown level1 summary">

Reads the complete state from the reader and applies it

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void ReadField(FastBufferReader reader)
```

#### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

### ResetDirty()

<div class="markdown level1 summary">

Resets the dirty state and marks the variable as synced / clean

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void ResetDirty()
```

### SetDirty(Boolean)

<div class="markdown level1 summary">

Sets whether or not the variable needs to be delta synced

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public virtual void SetDirty(bool isDirty)
```

#### Parameters

| Type           | Name    | Description                     |
|----------------|---------|---------------------------------|
| System.Boolean | isDirty | Whether or not the var is dirty |

### WriteDelta(FastBufferWriter)

<div class="markdown level1 summary">

Writes the dirty changes, that is, the changes since the variable was

last dirty, to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void WriteDelta(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| FastBufferWriter | writer | The stream to write the dirty changes to |

### WriteField(FastBufferWriter)

<div class="markdown level1 summary">

Writes the complete state of the variable to the writer

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public abstract void WriteField(FastBufferWriter writer)
```

#### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

### Implements

<div>

System.IDisposable

</div>
