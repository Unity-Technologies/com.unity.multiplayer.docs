---  
id: Unity.Networking.Transport.INetworkInterface  
title: Unity.Networking.Transport.INetworkInterface  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

IDisposable.Dispose()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public interface INetworkInterface : IDisposable
```

## 

### LocalEndpoint

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
NetworkEndpoint LocalEndpoint { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

## 

### Bind(NetworkEndpoint)

<div class="markdown level1 summary">

Binds the medium to a specific endpoint.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int Bind(NetworkEndpoint endpoint)
```

#### Parameters

| Type            | Name     | Description              |
|-----------------|----------|--------------------------|
| NetworkEndpoint | endpoint | A valid NetworkEndpoint. |

#### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

### Initialize(ref NetworkSettings, ref Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int Initialize(ref NetworkSettings settings, ref int packetPadding)
```

#### Parameters

| Type            | Name          | Description |
|-----------------|---------------|-------------|
| NetworkSettings | settings      |             |
| System.Int32    | packetPadding |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Listen()

<div class="markdown level1 summary">

Start listening for incoming connections. This is normally a no-op for
real UDP sockets.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
int Listen()
```

#### Returns

| Type         | Description  |
|--------------|--------------|
| System.Int32 | 0 on Success |

### ScheduleReceive(ref ReceiveJobArguments, JobHandle)

<div class="markdown level1 summary">

Schedule a ReceiveJob. This is used to read data from your supported
medium and pass it to the AppendData function supplied by NetworkDriver

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
JobHandle ScheduleReceive(ref ReceiveJobArguments arguments, JobHandle dep)
```

#### Parameters

| Type                | Name      | Description                                                        |
|---------------------|-----------|--------------------------------------------------------------------|
| ReceiveJobArguments | arguments | A set of ReceiveJobArguments that can be used in the receive jobs. |
| JobHandle           | dep       | A to any dependency we might have.                                 |

#### Returns

| Type      | Description                                 |
|-----------|---------------------------------------------|
| JobHandle | A to our newly created ScheduleReceive Job. |

### ScheduleSend(ref SendJobArguments, JobHandle)

<div class="markdown level1 summary">

Schedule a SendJob. This is used to flush send queues to your supported
medium

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
JobHandle ScheduleSend(ref SendJobArguments arguments, JobHandle dep)
```

#### Parameters

| Type             | Name      | Description                                                  |
|------------------|-----------|--------------------------------------------------------------|
| SendJobArguments | arguments | A set of SendJobArguments that can be used in the send jobs. |
| JobHandle        | dep       | A to any dependency we might have.                           |

#### Returns

| Type      | Description                              |
|-----------|------------------------------------------|
| JobHandle | A to our newly created ScheduleSend Job. |

### Extension Methods

<div>

ManagedNetworkInterfaceExtensions.WrapToUnmanaged\<T>(T)

</div>
