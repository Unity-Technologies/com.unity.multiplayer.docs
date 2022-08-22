<div id="wrapper">

<div>

<div class="container">

<div class="navbar-header">

Toggle navigation

<img src="../logo.svg" id="logo" class="svg" />

</div>

<div id="navbar" class="collapse navbar-collapse">

<div class="form-group">

</div>

</div>

</div>

<div class="subnav navbar navbar-default">

<div id="breadcrumb" class="container hide-when-search">

-   

</div>

</div>

</div>

<div class="container body-content hide-when-search" role="main">

<div class="sidenav hide-when-search">

Show / Hide Table of Contents

<div id="sidetoggle" class="sidetoggle collapse">

<div id="sidetoc">

</div>

</div>

</div>

<div class="article row grid-right">

<div class="col-md-10">

# Class NetworkVariableBase

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

NetworkList\<T\>

</div>

<div class="level2">

NetworkVariable\<T\>

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

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public abstract class NetworkVariableBase : IDisposable
```

</div>

### Constructors

#### NetworkVariableBase(NetworkVariableReadPermission, NetworkVariableWritePermission)

<div class="markdown level1 summary">

The default constructor for NetworkVariableBase that can be used to
create a custom NetworkVariable.

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

| Type                           | Name      | Description                                        |
|--------------------------------|-----------|----------------------------------------------------|
| NetworkVariableReadPermission  | readPerm  | the NetworkVariableReadPermission access settings  |
| NetworkVariableWritePermission | writePerm | the NetworkVariableWritePermission access settings |

### Fields

#### DefaultReadPerm

<div class="markdown level1 summary">

The default read permissions

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

The default write permissions

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

The write permission for this var

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

Gets if a specific client has permission to read the var or not

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

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt64 | clientId | The client id |

##### Returns

| Type           | Description                                      |
|----------------|--------------------------------------------------|
| System.Boolean | Whether or not the client has permission to read |

#### CanClientWrite(UInt64)

<div class="markdown level1 summary">

Gets if a specific client has permission to write the var or not

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

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt64 | clientId | The client id |

##### Returns

| Type           | Description                                       |
|----------------|---------------------------------------------------|
| System.Boolean | Whether or not the client has permission to write |

#### Dispose()

<div class="markdown level1 summary">

Virtual System.IDisposable implementation

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

Initializes the NetworkVariable

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

| Type             | Name             | Description                                         |
|------------------|------------------|-----------------------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour the NetworkVariable belongs to |

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

| Type           | Name    | Description                     |
|----------------|---------|---------------------------------|
| System.Boolean | isDirty | Whether or not the var is dirty |

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

</div>

<div class="hidden-sm col-md-2" role="complementary">

<div class="sideaffix">

<div class="contribution">

</div>

##### In This Article

<div>

</div>

</div>

</div>

</div>

</div>

<div class="grad-bottom">

</div>

<div class="footer">

<div class="container">

Back to top Generated by **DocFX**

</div>

</div>

</div>
