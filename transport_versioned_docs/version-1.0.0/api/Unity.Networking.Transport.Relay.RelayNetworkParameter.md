---  
id: Unity.Networking.Transport.Relay.RelayNetworkParameter  
title: Unity.Networking.Transport.Relay.RelayNetworkParameter  
---

<div class="markdown level0 summary">

Relay protocol network parementers used to connect to the Unity Relay
service. This data must be provided to the Create(INetworkParameter\[\])
function in order to be able to use connect to Relay.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

INetworkParameter

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

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
public struct RelayNetworkParameter : INetworkParameter
```

## 

### RelayConnectionTimeMS

<div class="markdown level1 summary">

The timeout in milliseconds after which a ping message is sent to the
Relay Server to keep the connection alive.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int RelayConnectionTimeMS
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ServerData

<div class="markdown level1 summary">

The data that is used to describe the connection to the Relay Server.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public RelayServerData ServerData
```

#### Field Value

| Type            | Description |
|-----------------|-------------|
| RelayServerData |             |

### Implements

<div>

INetworkParameter

</div>
