---  
id: Unity.Networking.Transport.NetworkConnection  
title: Unity.Networking.Transport.NetworkConnection  
---

<div class="markdown level0 summary">

The NetworkConnection is a struct that hold all information needed by
the driver to link it with a virtual connection. The NetworkConnection
is a public representation of a connection.

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

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

Check to see if a NetworkConnection is Created.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsCreated { get; }
```

#### Property Value

| Type           | Description                                                                                                  |
|----------------|--------------------------------------------------------------------------------------------------------------|
| System.Boolean | `true` if the NetworkConnection has been correctly created by a call to Accept() or Connect(NetworkEndPoint) |

### Version

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Version { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### Close(NetworkDriver)

<div class="markdown level1 summary">

Close an active NetworkConnection, similar to .

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Close(NetworkDriver driver)
```

#### Parameters

| Type          | Name   | Description                                  |
|---------------|--------|----------------------------------------------|
| NetworkDriver | driver | The driver that owns the virtual connection. |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Disconnect(NetworkDriver)

<div class="markdown level1 summary">

Disconnects a virtual connection and marks it for deletion. This
connection will be removed on next the next frame.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Disconnect(NetworkDriver driver)
```

#### Parameters

| Type          | Name   | Description                                  |
|---------------|--------|----------------------------------------------|
| NetworkDriver | driver | The driver that owns the virtual connection. |

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

Receive an event for this specific connection. Should be called until it
returns Empty, even if the socket is disconnected.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream)
```

#### Parameters

| Type             | Name   | Description                                  |
|------------------|--------|----------------------------------------------|
| NetworkDriver    | driver | The driver that owns the virtual connection. |
| DataStreamReader | stream |                                              |

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

### ToString()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override string ToString()
```

#### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### Overrides

<div>

System.ValueType.ToString()

</div>

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
