---  
id: MLAPI.Transports.UNET.RelayTransport  
title: MLAPI.Transports.UNET.RelayTransport
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public static class RelayTransport

## Properties 

### Enabled

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool Enabled { get; set; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RelayAddress

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static string RelayAddress { get; set; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### RelayPort

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static ushort RelayPort { get; set; }

#### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

## Methods 

### AddHost(HostTopology, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddHost(HostTopology topology, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddHost(HostTopology, Int32, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddHost(HostTopology topology, int port, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | port         |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddHost(HostTopology, Int32, String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddHost(HostTopology topology, int port, string ip, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | port         |             |
| System.String                       | ip           |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddHostWithSimulator(HostTopology, Int32, Int32, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddHostWithSimulator(HostTopology topology, int minTimeout, int maxTimeout, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | minTimeout   |             |
| System.Int32                        | maxTimeout   |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddHostWithSimulator(HostTopology, Int32, Int32, Int32, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddHostWithSimulator(HostTopology topology, int minTimeout, int maxTimeout, int port, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | minTimeout   |             |
| System.Int32                        | maxTimeout   |             |
| System.Int32                        | port         |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddHostWithSimulator(HostTopology, Int32, Int32, Int32, String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddHostWithSimulator(HostTopology topology, int minTimeout, int maxTimeout, int port, string ip, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | minTimeout   |             |
| System.Int32                        | maxTimeout   |             |
| System.Int32                        | port         |             |
| System.String                       | ip           |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddWebsocketHost(HostTopology, Int32, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddWebsocketHost(HostTopology topology, int port, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | port         |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### AddWebsocketHost(HostTopology, Int32, String, Boolean)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int AddWebsocketHost(HostTopology topology, int port, string ip, bool createServer)

#### Parameters

| Type                                | Name         | Description |
|-------------------------------------|--------------|-------------|
| UnityEngine.Networking.HostTopology | topology     |             |
| System.Int32                        | port         |             |
| System.String                       | ip           |             |
| System.Boolean                      | createServer |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Connect(Int32, String, Int32, Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int Connect(int hostId, string serverAddress, int serverPort, int exceptionConnectionId, out byte error)

#### Parameters

| Type          | Name                  | Description |
|---------------|-----------------------|-------------|
| System.Int32  | hostId                |             |
| System.String | serverAddress         |             |
| System.Int32  | serverPort            |             |
| System.Int32  | exceptionConnectionId |             |
| System.Byte   | error                 |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ConnectEndPoint(Int32, EndPoint, Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int ConnectEndPoint(int hostId, EndPoint endPoint, int exceptionConnectionId, out byte error)

#### Parameters

| Type                | Name                  | Description |
|---------------------|-----------------------|-------------|
| System.Int32        | hostId                |             |
| System.Net.EndPoint | endPoint              |             |
| System.Int32        | exceptionConnectionId |             |
| System.Byte         | error                 |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### ConnectWithSimulator(Int32, String, Int32, Int32, out Byte, ConnectionSimulatorConfig)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static int ConnectWithSimulator(int hostId, string serverAddress, int serverPort, int exceptionConnectionId, out byte error, ConnectionSimulatorConfig conf)

#### Parameters

| Type                                             | Name                  | Description |
|--------------------------------------------------|-----------------------|-------------|
| System.Int32                                     | hostId                |             |
| System.String                                    | serverAddress         |             |
| System.Int32                                     | serverPort            |             |
| System.Int32                                     | exceptionConnectionId |             |
| System.Byte                                      | error                 |             |
| UnityEngine.Networking.ConnectionSimulatorConfig | conf                  |             |

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Disconnect(Int32, Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool Disconnect(int hostId, int connectionId, out byte error)

#### Parameters

| Type         | Name         | Description |
|--------------|--------------|-------------|
| System.Int32 | hostId       |             |
| System.Int32 | connectionId |             |
| System.Byte  | error        |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### QueueMessageForSending(Int32, Int32, Int32, Byte\[\], Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool QueueMessageForSending(int hostId, int connectionId, int channelId, byte[] buffer, int size, out byte error)

#### Parameters

| Type            | Name         | Description |
|-----------------|--------------|-------------|
| System.Int32    | hostId       |             |
| System.Int32    | connectionId |             |
| System.Int32    | channelId    |             |
| System.Byte\[\] | buffer       |             |
| System.Int32    | size         |             |
| System.Byte     | error        |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Receive(out Int32, out Int32, out Int32, Byte\[\], Int32, out Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static NetworkEventType Receive(out int hostId, out int connectionId, out int channelId, byte[] buffer, int bufferSize, out int receivedSize, out byte error)

#### Parameters

| Type            | Name         | Description |
|-----------------|--------------|-------------|
| System.Int32    | hostId       |             |
| System.Int32    | connectionId |             |
| System.Int32    | channelId    |             |
| System.Byte\[\] | buffer       |             |
| System.Int32    | bufferSize   |             |
| System.Int32    | receivedSize |             |
| System.Byte     | error        |             |

#### Returns

| Type                                    | Description |
|-----------------------------------------|-------------|
| UnityEngine.Networking.NetworkEventType |             |

### ReceiveFromHost(Int32, out Int32, out Int32, Byte\[\], Int32, out Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static NetworkEventType ReceiveFromHost(int hostId, out int connectionId, out int channelId, byte[] buffer, int bufferSize, out int receivedSize, out byte error)

#### Parameters

| Type            | Name         | Description |
|-----------------|--------------|-------------|
| System.Int32    | hostId       |             |
| System.Int32    | connectionId |             |
| System.Int32    | channelId    |             |
| System.Byte\[\] | buffer       |             |
| System.Int32    | bufferSize   |             |
| System.Int32    | receivedSize |             |
| System.Byte     | error        |             |

#### Returns

| Type                                    | Description |
|-----------------------------------------|-------------|
| UnityEngine.Networking.NetworkEventType |             |

### Send(Int32, Int32, Int32, Byte\[\], Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool Send(int hostId, int connectionId, int channelId, byte[] buffer, int size, out byte error)

#### Parameters

| Type            | Name         | Description |
|-----------------|--------------|-------------|
| System.Int32    | hostId       |             |
| System.Int32    | connectionId |             |
| System.Int32    | channelId    |             |
| System.Byte\[\] | buffer       |             |
| System.Int32    | size         |             |
| System.Byte     | error        |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### SendQueuedMessages(Int32, Int32, out Byte)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool SendQueuedMessages(int hostId, int connectionId, out byte error)

#### Parameters

| Type         | Name         | Description |
|--------------|--------------|-------------|
| System.Int32 | hostId       |             |
| System.Int32 | connectionId |             |
| System.Byte  | error        |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Events

### OnRemoteEndpointReported

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static event Action<IPEndPoint> OnRemoteEndpointReported

#### Event Type

| Type                                       | Description |
|--------------------------------------------|-------------|
| System.Action&lt;System.Net.IPEndPoint&gt; |             |
