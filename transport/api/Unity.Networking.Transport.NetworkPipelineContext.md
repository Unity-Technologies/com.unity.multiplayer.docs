---
id: Unity.Networking.Transport.NetworkPipelineContext
title: Unity.Networking.Transport.NetworkPipelineContext
---

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

# Struct NetworkPipelineContext

<div class="markdown level0 summary">

The network pipeline context

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkPipelineContext
```

</div>

### Fields

#### accumulatedHeaderCapacity

<div class="markdown level1 summary">

The accumulated header capacity

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int accumulatedHeaderCapacity
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### header

<div class="markdown level1 summary">

The header

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public DataStreamWriter header
```

</div>

##### Field Value

| Type             | Description |
|------------------|-------------|
| DataStreamWriter |             |

#### internalProcessBuffer

<div class="markdown level1 summary">

The internal process buffer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *internalProcessBuffer
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### internalProcessBufferLength

<div class="markdown level1 summary">

The internal process buffer length

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int internalProcessBufferLength
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### internalSharedProcessBuffer

<div class="markdown level1 summary">

The internal shared process buffer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *internalSharedProcessBuffer
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### internalSharedProcessBufferLength

<div class="markdown level1 summary">

The internal shared process buffer length

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int internalSharedProcessBufferLength
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### staticInstanceBuffer

<div class="markdown level1 summary">

The static instance buffer

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public byte *staticInstanceBuffer
```

</div>

##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

#### staticInstanceBufferLength

<div class="markdown level1 summary">

The static instance buffer length

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int staticInstanceBufferLength
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### timestamp

<div class="markdown level1 summary">

The timestamp

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public long timestamp
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

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
