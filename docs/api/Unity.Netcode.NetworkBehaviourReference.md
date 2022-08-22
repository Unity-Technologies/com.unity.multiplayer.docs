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

# Struct NetworkBehaviourReference

<div class="markdown level0 summary">

A helper struct for serializing NetworkBehaviours over the network. Can
be used in RPCs and NetworkVariable\<T\>. Note: network ids get recycled
by the NetworkManager after a while. So a reference pointing to

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<NetworkBehaviourReference\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

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

###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkBehaviourReference : INetworkSerializable, IEquatable<NetworkBehaviourReference>
```

</div>

### Constructors

#### NetworkBehaviourReference(NetworkBehaviour)

<div class="markdown level1 summary">

Creates a new instance of the struct.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkBehaviourReference(NetworkBehaviour networkBehaviour)
```

</div>

##### Parameters

| Type             | Name             | Description                        |
|------------------|------------------|------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour to reference. |

##### Exceptions

| Type                     | Condition |
|--------------------------|-----------|
| System.ArgumentException |           |

### Methods

#### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override bool Equals(object obj)
```

</div>

##### Parameters

| Type          | Name | Description |
|---------------|------|-------------|
| System.Object | obj  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

#### Equals(NetworkBehaviourReference)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool Equals(NetworkBehaviourReference other)
```

</div>

##### Parameters

| Type                      | Name  | Description |
|---------------------------|-------|-------------|
| NetworkBehaviourReference | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public override int GetHashCode()
```

</div>

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

##### Overrides

<div>

System.ValueType.GetHashCode()

</div>

#### NetworkSerialize\<T\>(BufferSerializer\<T\>)

<div class="markdown level1 summary">

Provides bi-directional serialization to read and write the desired data
to serialize this type.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void NetworkSerialize<T>(BufferSerializer<T> serializer)
    where T : IReaderWriter
```

</div>

##### Parameters

| Type                  | Name       | Description                                       |
|-----------------------|------------|---------------------------------------------------|
| BufferSerializer\<T\> | serializer | The serializer to use to read and write the data. |

##### Type Parameters

| Name | Description                                                                                                              |
|------|--------------------------------------------------------------------------------------------------------------------------|
| T    | Either BufferSerializerReader or BufferSerializerWriter, depending whether the serializer is in read mode or write mode. |

#### TryGet(out NetworkBehaviour, NetworkManager)

<div class="markdown level1 summary">

Tries to get the NetworkBehaviour referenced by this reference.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryGet(out NetworkBehaviour networkBehaviour, NetworkManager networkManager = null)
```

</div>

##### Parameters

| Type             | Name             | Description                                                                                  |
|------------------|------------------|----------------------------------------------------------------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour which was found. Null if the corresponding NetworkObject was not found. |
| NetworkManager   | networkManager   | The networkmanager. Uses Singleton to resolve if null.                                       |

##### Returns

| Type           | Description                                                                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkBehaviour was found; False if the NetworkBehaviour was not found. This can happen if the corresponding NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

#### TryGet\<T\>(out T, NetworkManager)

<div class="markdown level1 summary">

Tries to get the NetworkBehaviour referenced by this reference.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool TryGet<T>(out T networkBehaviour, NetworkManager networkManager = null)
    where T : NetworkBehaviour
```

</div>

##### Parameters

| Type           | Name             | Description                                                                                  |
|----------------|------------------|----------------------------------------------------------------------------------------------|
| T              | networkBehaviour | The NetworkBehaviour which was found. Null if the corresponding NetworkObject was not found. |
| NetworkManager | networkManager   | The networkmanager. Uses Singleton to resolve if null.                                       |

##### Returns

| Type           | Description                                                                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System.Boolean | True if the NetworkBehaviour was found; False if the NetworkBehaviour was not found. This can happen if the corresponding NetworkObject has not been spawned yet. you can try getting the reference at a later point in time. |

##### Type Parameters

| Name | Description                                       |
|------|---------------------------------------------------|
| T    | The type of the networkBehaviour for convenience. |

### Operators

#### Implicit(NetworkBehaviour to NetworkBehaviourReference)

<div class="markdown level1 summary">

Implicitly convert NetworkBehaviour to NetworkBehaviourReference.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator NetworkBehaviourReference(NetworkBehaviour networkBehaviour)
```

</div>

##### Parameters

| Type             | Name             | Description                           |
|------------------|------------------|---------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour to convert from. |

##### Returns

| Type                      | Description                                                                              |
|---------------------------|------------------------------------------------------------------------------------------|
| NetworkBehaviourReference | The NetworkBehaviourReference created from the NetworkBehaviour passed in as a parameter |

#### Implicit(NetworkBehaviourReference to NetworkBehaviour)

<div class="markdown level1 summary">

Implicitly convert NetworkBehaviourReference to NetworkBehaviour.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public static implicit operator NetworkBehaviour(NetworkBehaviourReference networkBehaviourRef)
```

</div>

##### Parameters

| Type                      | Name                | Description                                    |
|---------------------------|---------------------|------------------------------------------------|
| NetworkBehaviourReference | networkBehaviourRef | The NetworkBehaviourReference to convert from. |

##### Returns

| Type             | Description                                               |
|------------------|-----------------------------------------------------------|
| NetworkBehaviour | The NetworkBehaviour this class is holding a reference to |

### Implements

<div>

INetworkSerializable

</div>

<div>

System.IEquatable\<T\>

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
