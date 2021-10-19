---  
id: Unity.Networking.Transport.NetworkConnection  
title: Unity.Networking.Transport.NetworkConnection  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

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
public struct NetworkConnection
```

## 

### InternalId

<div class="markdown level1 summary">

Gets the value of the connection's internal ID.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int InternalId { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### IsCreated

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsCreated { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## 

### Close(NetworkDriver)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Close(NetworkDriver driver)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Disconnect(NetworkDriver)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Disconnect(NetworkDriver driver)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object o)
```

#### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | o    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(NetworkConnection o)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | o    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

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

### GetState(NetworkDriver)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkConnection.State GetState(NetworkDriver driver)
```

#### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

#### Returns

| Type                    | Description |
|-------------------------|-------------|
| NetworkConnection.State |             |

### PopEvent(NetworkDriver, out DataStreamReader)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream)
```

#### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| NetworkDriver    | driver |             |
| DataStreamReader | stream |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### PopEvent(NetworkDriver, out DataStreamReader, out NetworkPipeline)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream, out NetworkPipeline pipeline)
```

#### Parameters

| Type             | Name     | Description |
|------------------|----------|-------------|
| NetworkDriver    | driver   |             |
| DataStreamReader | stream   |             |
| NetworkPipeline  | pipeline |             |

#### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

## 

### Equality(NetworkConnection, NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator ==(NetworkConnection lhs, NetworkConnection rhs)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | lhs  |             |
| NetworkConnection | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(NetworkConnection, NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static bool operator !=(NetworkConnection lhs, NetworkConnection rhs)
```

#### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | lhs  |             |
| NetworkConnection | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
