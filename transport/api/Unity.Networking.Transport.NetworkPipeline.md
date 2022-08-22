---
id: Unity.Networking.Transport.NetworkPipeline
title: Unity.Networking.Transport.NetworkPipeline
---


# Struct NetworkPipeline


The network pipeline






##### Inherited Members



System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkPipeline
```



### Properties

#### Null


Returns default unreliable Null NetworkPipeline






##### Declaration


``` lang-csharp
public static readonly NetworkPipeline Null { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkPipeline |             |

### Methods

#### Equals(Object)







##### Declaration


``` lang-csharp
public override bool Equals(object compare)
```



##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.Object | compare |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides



System.ValueType.Equals(System.Object)



#### Equals(NetworkPipeline)







##### Declaration


``` lang-csharp
public bool Equals(NetworkPipeline connection)
```



##### Parameters

| Type            | Name       | Description |
|-----------------|------------|-------------|
| NetworkPipeline | connection |             |

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



### Operators

#### Equality(NetworkPipeline, NetworkPipeline)







##### Declaration


``` lang-csharp
public static bool operator ==(NetworkPipeline lhs, NetworkPipeline rhs)
```



##### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkPipeline | lhs  |             |
| NetworkPipeline | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkPipeline, NetworkPipeline)







##### Declaration


``` lang-csharp
public static bool operator !=(NetworkPipeline lhs, NetworkPipeline rhs)
```



##### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkPipeline | lhs  |             |
| NetworkPipeline | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |



