---  
id: Unity.Networking.Transport.NetworkPipelineStageId  
title: Unity.Networking.Transport.NetworkPipelineStageId  
---

<div class="markdown level0 summary">

Identifier for a pipeline stage.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<NetworkPipelineStageId\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public struct NetworkPipelineStageId : IEquatable<NetworkPipelineStageId>
```

## 

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object other)
```

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(NetworkPipelineStageId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkPipelineStageId other)
```

#### Parameters

| Type                   | Name  | Description |
|------------------------|-------|-------------|
| NetworkPipelineStageId | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Get\&lt;T&gt;()

<div class="markdown level1 summary">

Get the stage ID for the given stage type.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static NetworkPipelineStageId Get<T>()
    where T : struct, INetworkPipelineStage
```

#### Returns

| Type                   | Description |
|------------------------|-------------|
| NetworkPipelineStageId |             |

#### Type Parameters

| Name | Description |
|------|-------------|
| T    |             |

### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override int GetHashCode()
```

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Overrides

<div>

System.ValueType.GetHashCode()

</div>

## 

### Equality(NetworkPipelineStageId, NetworkPipelineStageId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(NetworkPipelineStageId lhs, NetworkPipelineStageId rhs)
```

#### Parameters

| Type                   | Name | Description |
|------------------------|------|-------------|
| NetworkPipelineStageId | lhs  |             |
| NetworkPipelineStageId | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(NetworkPipelineStageId, NetworkPipelineStageId)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(NetworkPipelineStageId lhs, NetworkPipelineStageId rhs)
```

#### Parameters

| Type                   | Name | Description |
|------------------------|------|-------------|
| NetworkPipelineStageId | lhs  |             |
| NetworkPipelineStageId | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements

<div>

System.IEquatable\&lt;T&gt;

</div>
