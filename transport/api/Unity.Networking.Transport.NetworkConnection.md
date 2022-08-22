---
id: Unity.Networking.Transport.NetworkConnection
title: Unity.Networking.Transport.NetworkConnection
---


# Struct NetworkConnection







##### Implements



System.IEquatable\<NetworkConnection\>






##### Inherited Members



System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkConnection : IEquatable<NetworkConnection>
```



### Properties

#### InternalId


Gets the value of the connection's internal ID.






##### Declaration


``` lang-csharp
public readonly int InternalId { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### IsCreated







##### Declaration


``` lang-csharp
public readonly bool IsCreated { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Methods

#### Close(NetworkDriver)







##### Declaration


``` lang-csharp
public int Close(NetworkDriver driver)
```



##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Disconnect(NetworkDriver)







##### Declaration


``` lang-csharp
public int Disconnect(NetworkDriver driver)
```



##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Equals(Object)







##### Declaration


``` lang-csharp
public override bool Equals(object o)
```



##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | o    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides



System.ValueType.Equals(System.Object)



#### Equals(NetworkConnection)







##### Declaration


``` lang-csharp
public bool Equals(NetworkConnection o)
```



##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | o    |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### GetHashCode()







##### Declaration


``` lang-csharp
public override int GetHashCode()
```



##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Overrides



System.ValueType.GetHashCode()



#### GetState(NetworkDriver)







##### Declaration


``` lang-csharp
public NetworkConnection.State GetState(NetworkDriver driver)
```



##### Parameters

| Type          | Name   | Description |
|---------------|--------|-------------|
| NetworkDriver | driver |             |

##### Returns

| Type                    | Description |
|-------------------------|-------------|
| NetworkConnection.State |             |

#### PopEvent(NetworkDriver, out DataStreamReader)







##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream)
```



##### Parameters

| Type             | Name   | Description |
|------------------|--------|-------------|
| NetworkDriver    | driver |             |
| DataStreamReader | stream |             |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

#### PopEvent(NetworkDriver, out DataStreamReader, out NetworkPipeline)







##### Declaration


``` lang-csharp
public NetworkEvent.Type PopEvent(NetworkDriver driver, out DataStreamReader stream, out NetworkPipeline pipeline)
```



##### Parameters

| Type             | Name     | Description |
|------------------|----------|-------------|
| NetworkDriver    | driver   |             |
| DataStreamReader | stream   |             |
| NetworkPipeline  | pipeline |             |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type |             |

### Operators

#### Equality(NetworkConnection, NetworkConnection)







##### Declaration


``` lang-csharp
public static bool operator ==(NetworkConnection lhs, NetworkConnection rhs)
```



##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | lhs  |             |
| NetworkConnection | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkConnection, NetworkConnection)







##### Declaration


``` lang-csharp
public static bool operator !=(NetworkConnection lhs, NetworkConnection rhs)
```



##### Parameters

| Type              | Name | Description |
|-------------------|------|-------------|
| NetworkConnection | lhs  |             |
| NetworkConnection | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



System.IEquatable\<T\>





