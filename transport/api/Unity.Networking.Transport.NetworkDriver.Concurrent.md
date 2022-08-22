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

# Struct NetworkDriver.Concurrent

<div class="markdown level0 summary">

The Concurrent struct is used to create an Concurrent instance of the
NetworkDriver.

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
public struct Concurrent
```

</div>

### Methods

#### AbortSend(DataStreamWriter)

<div class="markdown level1 summary">

Aborts a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void AbortSend(DataStreamWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                                       |
|------------------|--------|---------------------------------------------------|
| DataStreamWriter | writer | If you require the payload to be of certain size. |

##### Exceptions

| Type                             | Condition                                                            |
|----------------------------------|----------------------------------------------------------------------|
| System.InvalidOperationException | If endsend is called with a matching BeginSend call.                 |
| System.InvalidOperationException | If the connection got closed between the call of being and end send. |

#### BeginSend(NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

Acquires a DataStreamWriter for starting a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int BeginSend(NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

</div>

##### Parameters

| Type              | Name                | Description                                      |
|-------------------|---------------------|--------------------------------------------------|
| NetworkConnection | id                  | The NetworkConnection id to write through        |
| DataStreamWriter  | writer              | A DataStreamWriter to write to                   |
| System.Int32      | requiredPayloadSize | If you require the payload to be of certain size |

##### Returns

| Type         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| System.Int32 | Returns Success on a successful acquire. Otherwise returns an StatusCode indicating the error. |

##### Remarks

<div class="markdown level1 remarks">

Will throw a System.InvalidOperationException if the connection is in a
Connecting state.

</div>

#### BeginSend(NetworkPipeline, NetworkConnection, out DataStreamWriter, Int32)

<div class="markdown level1 summary">

Acquires a DataStreamWriter for starting a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int BeginSend(NetworkPipeline pipe, NetworkConnection id, out DataStreamWriter writer, int requiredPayloadSize = 0)
```

</div>

##### Parameters

| Type              | Name                | Description                                      |
|-------------------|---------------------|--------------------------------------------------|
| NetworkPipeline   | pipe                | The NetworkPipeline to write through             |
| NetworkConnection | id                  | The NetworkConnection id to write through        |
| DataStreamWriter  | writer              | A DataStreamWriter to write to                   |
| System.Int32      | requiredPayloadSize | If you require the payload to be of certain size |

##### Returns

| Type         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| System.Int32 | Returns Success on a successful acquire. Otherwise returns an StatusCode indicating the error. |

##### Remarks

<div class="markdown level1 remarks">

Will throw a System.InvalidOperationException if the connection is in a
Connecting state.

</div>

#### EndSend(DataStreamWriter)

<div class="markdown level1 summary">

Ends a asynchronous send.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int EndSend(DataStreamWriter writer)
```

</div>

##### Parameters

| Type             | Name   | Description                                       |
|------------------|--------|---------------------------------------------------|
| DataStreamWriter | writer | If you require the payload to be of certain size. |

##### Returns

| Type         | Description                                          |
|--------------|------------------------------------------------------|
| System.Int32 | The length of the buffer sent if nothing went wrong. |

##### Exceptions

| Type                             | Condition                                                            |
|----------------------------------|----------------------------------------------------------------------|
| System.InvalidOperationException | If endsend is called with a matching BeginSend call.                 |
| System.InvalidOperationException | If the connection got closed between the call of being and end send. |

#### GetConnectionState(NetworkConnection)

<div class="markdown level1 summary">

Gets the connection state using the specified id

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkConnection.State GetConnectionState(NetworkConnection id)
```

</div>

##### Parameters

| Type              | Name | Description       |
|-------------------|------|-------------------|
| NetworkConnection | id   | The connection id |

##### Returns

| Type                    | Description                  |
|-------------------------|------------------------------|
| NetworkConnection.State | The network connection state |

#### MaxHeaderSize(NetworkPipeline)

<div class="markdown level1 summary">

Max headersize including a NetworkPipeline

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int MaxHeaderSize(NetworkPipeline pipe)
```

</div>

##### Parameters

| Type            | Name | Description                                             |
|-----------------|------|---------------------------------------------------------|
| NetworkPipeline | pipe | The pipeline with which to get the maximum header size. |

##### Returns

| Type         | Description     |
|--------------|-----------------|
| System.Int32 | The header size |

#### PopEventForConnection(NetworkConnection, out DataStreamReader)

<div class="markdown level1 summary">

Pops events for a connection using the specified connection id

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader)
```

</div>

##### Parameters

| Type              | Name         | Description                         |
|-------------------|--------------|-------------------------------------|
| NetworkConnection | connectionId | The connection id                   |
| DataStreamReader  | reader       | Stream reader for the event's data. |

##### Returns

| Type              | Description            |
|-------------------|------------------------|
| NetworkEvent.Type | The network event type |

#### PopEventForConnection(NetworkConnection, out DataStreamReader, out NetworkPipeline)

<div class="markdown level1 summary">

Pops events for a connection using the specified connection id

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkEvent.Type PopEventForConnection(NetworkConnection connectionId, out DataStreamReader reader, out NetworkPipeline pipeline)
```

</div>

##### Parameters

| Type              | Name         | Description                                    |
|-------------------|--------------|------------------------------------------------|
| NetworkConnection | connectionId | The connection id                              |
| DataStreamReader  | reader       | Stream reader for the event's data.            |
| NetworkPipeline   | pipeline     | Pipeline on which the data event was received. |

##### Returns

| Type              | Description |
|-------------------|-------------|
| NetworkEvent.Type | The type    |

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
