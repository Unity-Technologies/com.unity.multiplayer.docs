---  
id: Unity.Networking.Transport.NetworkParameterConstants  
title: Unity.Networking.Transport.NetworkParameterConstants  
---

<div class="markdown level0 summary">

Default NetworkParameter Constants.

</div>

<div class="markdown level0 conceptual">

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

##### **Assembly**: MLAPI.dll

##### Syntax

    public struct NetworkParameterConstants

## Fields

### ConnectTimeoutMS

<div class="markdown level1 summary">

The default connection timeout value. This value can be overridden using
the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int ConnectTimeoutMS = 1000

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### DisconnectTimeoutMS

<div class="markdown level1 summary">

The default disconnect timeout attempts value. This value can be
overridden using the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int DisconnectTimeoutMS = 30000

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### DriverDataStreamSize

<div class="markdown level1 summary">

The default size of the DataStreamWriter. This value can be overridden
using the NetworkConfigParameter.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int DriverDataStreamSize = 65536

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### InitialEventQueueSize

<div class="markdown level1 summary">

The default size of the event queue.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int InitialEventQueueSize = 100

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### InvalidConnectionId

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int InvalidConnectionId = -1

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaxConnectAttempts

<div class="markdown level1 summary">

The default max connection attempts value. This value can be overridden
using the NetworkConfigParameter

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int MaxConnectAttempts = 60

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MTU

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public const int MTU = 1400

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |
