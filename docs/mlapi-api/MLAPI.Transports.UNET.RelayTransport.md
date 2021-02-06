---

id: MLAPI.Transports.UNET.RelayTransport

title: MLAPI.Transports.UNET.RelayTransport

---

Class RelayTransport

<div class="markdown level0 summary" markdown="1">

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Transports_UNET_RelayTransport_syntax]

    public static class RelayTransport

## Properties <span id="MLAPI_Transports_UNET_RelayTransport_Enabled_"></span>

### Enabled [MLAPI_Transports_UNET_RelayTransport_Enabled]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public static bool Enabled { get; set; }

#### Property Value [property-value]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_RelayAddress_"></span>

### RelayAddress [MLAPI_Transports_UNET_RelayTransport_RelayAddress]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public static string RelayAddress { get; set; }

#### Property Value [property-value-1]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.String</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_RelayPort_"></span>

### RelayPort [MLAPI_Transports_UNET_RelayTransport_RelayPort]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public static ushort RelayPort { get; set; }

#### Property Value [property-value-2]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.UInt16</span> |             |

## Methods <span id="MLAPI_Transports_UNET_RelayTransport_AddHost_"></span>

### AddHost(HostTopology, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddHost_UnityEngine_Networking_HostTopology_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public static int AddHost(HostTopology topology, bool createServer)

#### Parameters [parameters]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_AddHost_"></span>

### AddHost(HostTopology, Int32, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddHost_UnityEngine_Networking_HostTopology_System_Int32_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-4]

    public static int AddHost(HostTopology topology, int port, bool createServer)

#### Parameters [parameters-1]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">port</span>         |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-1]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_AddHost_"></span>

### AddHost(HostTopology, Int32, String, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddHost_UnityEngine_Networking_HostTopology_System_Int32_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-5]

    public static int AddHost(HostTopology topology, int port, string ip, bool createServer)

#### Parameters [parameters-2]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">port</span>         |             |
| <span class="xref">System.String</span>                       | <span class="parametername">ip</span>           |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-2]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_AddHostWithSimulator_"></span>

### AddHostWithSimulator(HostTopology, Int32, Int32, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddHostWithSimulator_UnityEngine_Networking_HostTopology_System_Int32_System_Int32_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-6]

    public static int AddHostWithSimulator(HostTopology topology, int minTimeout, int maxTimeout, bool createServer)

#### Parameters [parameters-3]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">minTimeout</span>   |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">maxTimeout</span>   |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-3]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_AddHostWithSimulator_"></span>

### AddHostWithSimulator(HostTopology, Int32, Int32, Int32, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddHostWithSimulator_UnityEngine_Networking_HostTopology_System_Int32_System_Int32_System_Int32_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-7]

    public static int AddHostWithSimulator(HostTopology topology, int minTimeout, int maxTimeout, int port, bool createServer)

#### Parameters [parameters-4]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">minTimeout</span>   |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">maxTimeout</span>   |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">port</span>         |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-4]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_AddHostWithSimulator_"></span>

### AddHostWithSimulator(HostTopology, Int32, Int32, Int32, String, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddHostWithSimulator_UnityEngine_Networking_HostTopology_System_Int32_System_Int32_System_Int32_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-8]

    public static int AddHostWithSimulator(HostTopology topology, int minTimeout, int maxTimeout, int port, string ip, bool createServer)

#### Parameters [parameters-5]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">minTimeout</span>   |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">maxTimeout</span>   |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">port</span>         |             |
| <span class="xref">System.String</span>                       | <span class="parametername">ip</span>           |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-5]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_AddWebsocketHost_"></span>

### AddWebsocketHost(HostTopology, Int32, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddWebsocketHost_UnityEngine_Networking_HostTopology_System_Int32_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-9]

    public static int AddWebsocketHost(HostTopology topology, int port, bool createServer)

#### Parameters [parameters-6]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">port</span>         |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-6]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_AddWebsocketHost_"></span>

### AddWebsocketHost(HostTopology, Int32, String, Boolean) [MLAPI_Transports_UNET_RelayTransport_AddWebsocketHost_UnityEngine_Networking_HostTopology_System_Int32_System_String_System_Boolean_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-10]

    public static int AddWebsocketHost(HostTopology topology, int port, string ip, bool createServer)

#### Parameters [parameters-7]

| Type                                                          | Name                                            | Description |
|---------------------------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.HostTopology</span> | <span class="parametername">topology</span>     |             |
| <span class="xref">System.Int32</span>                        | <span class="parametername">port</span>         |             |
| <span class="xref">System.String</span>                       | <span class="parametername">ip</span>           |             |
| <span class="xref">System.Boolean</span>                      | <span class="parametername">createServer</span> |             |

#### Returns [returns-7]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_Connect_"></span>

### Connect(Int32, String, Int32, Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_Connect_System_Int32_System_String_System_Int32_System_Int32_System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-11]

    public static int Connect(int hostId, string serverAddress, int serverPort, int exceptionConnectionId, out byte error)

#### Parameters [parameters-8]

| Type                                    | Name                                                     | Description |
|-----------------------------------------|----------------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>  | <span class="parametername">hostId</span>                |             |
| <span class="xref">System.String</span> | <span class="parametername">serverAddress</span>         |             |
| <span class="xref">System.Int32</span>  | <span class="parametername">serverPort</span>            |             |
| <span class="xref">System.Int32</span>  | <span class="parametername">exceptionConnectionId</span> |             |
| <span class="xref">System.Byte</span>   | <span class="parametername">error</span>                 |             |

#### Returns [returns-8]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_ConnectEndPoint_"></span>

### ConnectEndPoint(Int32, EndPoint, Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_ConnectEndPoint_System_Int32_System_Net_EndPoint_System_Int32_System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-12]

    public static int ConnectEndPoint(int hostId, EndPoint endPoint, int exceptionConnectionId, out byte error)

#### Parameters [parameters-9]

| Type                                          | Name                                                     | Description |
|-----------------------------------------------|----------------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>        | <span class="parametername">hostId</span>                |             |
| <span class="xref">System.Net.EndPoint</span> | <span class="parametername">endPoint</span>              |             |
| <span class="xref">System.Int32</span>        | <span class="parametername">exceptionConnectionId</span> |             |
| <span class="xref">System.Byte</span>         | <span class="parametername">error</span>                 |             |

#### Returns [returns-9]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_ConnectWithSimulator_"></span>

### ConnectWithSimulator(Int32, String, Int32, Int32, out Byte, ConnectionSimulatorConfig) [MLAPI_Transports_UNET_RelayTransport_ConnectWithSimulator_System_Int32_System_String_System_Int32_System_Int32_System_Byte__UnityEngine_Networking_ConnectionSimulatorConfig_]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-13]

    public static int ConnectWithSimulator(int hostId, string serverAddress, int serverPort, int exceptionConnectionId, out byte error, ConnectionSimulatorConfig conf)

#### Parameters [parameters-10]

| Type                                                                       | Name                                                     | Description |
|----------------------------------------------------------------------------|----------------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>                                     | <span class="parametername">hostId</span>                |             |
| <span class="xref">System.String</span>                                    | <span class="parametername">serverAddress</span>         |             |
| <span class="xref">System.Int32</span>                                     | <span class="parametername">serverPort</span>            |             |
| <span class="xref">System.Int32</span>                                     | <span class="parametername">exceptionConnectionId</span> |             |
| <span class="xref">System.Byte</span>                                      | <span class="parametername">error</span>                 |             |
| <span class="xref">UnityEngine.Networking.ConnectionSimulatorConfig</span> | <span class="parametername">conf</span>                  |             |

#### Returns [returns-10]

| Type                                   | Description |
|----------------------------------------|-------------|
| <span class="xref">System.Int32</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_Disconnect_"></span>

### Disconnect(Int32, Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_Disconnect_System_Int32_System_Int32_System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-14]

    public static bool Disconnect(int hostId, int connectionId, out byte error)

#### Parameters [parameters-11]

| Type                                   | Name                                            | Description |
|----------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">System.Int32</span> | <span class="parametername">hostId</span>       |             |
| <span class="xref">System.Int32</span> | <span class="parametername">connectionId</span> |             |
| <span class="xref">System.Byte</span>  | <span class="parametername">error</span>        |             |

#### Returns [returns-11]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_QueueMessageForSending_"></span>

### QueueMessageForSending(Int32, Int32, Int32, Byte\[\], Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_QueueMessageForSending_System_Int32_System_Int32_System_Int32_System_Byte___System_Int32_System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-15]

    public static bool QueueMessageForSending(int hostId, int connectionId, int channelId, byte[] buffer, int size, out byte error)

#### Parameters [parameters-12]

| Type                                      | Name                                            | Description |
|-------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>    | <span class="parametername">hostId</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">connectionId</span> |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">channelId</span>    |             |
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">size</span>         |             |
| <span class="xref">System.Byte</span>     | <span class="parametername">error</span>        |             |

#### Returns [returns-12]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_Receive_"></span>

### Receive(out Int32, out Int32, out Int32, Byte\[\], Int32, out Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_Receive_System_Int32__System_Int32__System_Int32__System_Byte___System_Int32_System_Int32__System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-16]

    public static NetworkEventType Receive(out int hostId, out int connectionId, out int channelId, byte[] buffer, int bufferSize, out int receivedSize, out byte error)

#### Parameters [parameters-13]

| Type                                      | Name                                            | Description |
|-------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>    | <span class="parametername">hostId</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">connectionId</span> |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">channelId</span>    |             |
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">bufferSize</span>   |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">receivedSize</span> |             |
| <span class="xref">System.Byte</span>     | <span class="parametername">error</span>        |             |

#### Returns [returns-13]

| Type                                                              | Description |
|-------------------------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.NetworkEventType</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_ReceiveFromHost_"></span>

### ReceiveFromHost(Int32, out Int32, out Int32, Byte\[\], Int32, out Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_ReceiveFromHost_System_Int32_System_Int32__System_Int32__System_Byte___System_Int32_System_Int32__System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-17]

    public static NetworkEventType ReceiveFromHost(int hostId, out int connectionId, out int channelId, byte[] buffer, int bufferSize, out int receivedSize, out byte error)

#### Parameters [parameters-14]

| Type                                      | Name                                            | Description |
|-------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>    | <span class="parametername">hostId</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">connectionId</span> |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">channelId</span>    |             |
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">bufferSize</span>   |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">receivedSize</span> |             |
| <span class="xref">System.Byte</span>     | <span class="parametername">error</span>        |             |

#### Returns [returns-14]

| Type                                                              | Description |
|-------------------------------------------------------------------|-------------|
| <span class="xref">UnityEngine.Networking.NetworkEventType</span> |             |

<span id="MLAPI_Transports_UNET_RelayTransport_Send_"></span>

### Send(Int32, Int32, Int32, Byte\[\], Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_Send_System_Int32_System_Int32_System_Int32_System_Byte___System_Int32_System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-18]

    public static bool Send(int hostId, int connectionId, int channelId, byte[] buffer, int size, out byte error)

#### Parameters [parameters-15]

| Type                                      | Name                                            | Description |
|-------------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">System.Int32</span>    | <span class="parametername">hostId</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">connectionId</span> |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">channelId</span>    |             |
| <span class="xref">System.Byte</span>\[\] | <span class="parametername">buffer</span>       |             |
| <span class="xref">System.Int32</span>    | <span class="parametername">size</span>         |             |
| <span class="xref">System.Byte</span>     | <span class="parametername">error</span>        |             |

#### Returns [returns-15]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

<span
id="MLAPI_Transports_UNET_RelayTransport_SendQueuedMessages_"></span>

### SendQueuedMessages(Int32, Int32, out Byte) [MLAPI_Transports_UNET_RelayTransport_SendQueuedMessages_System_Int32_System_Int32_System_Byte__]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-19]

    public static bool SendQueuedMessages(int hostId, int connectionId, out byte error)

#### Parameters [parameters-16]

| Type                                   | Name                                            | Description |
|----------------------------------------|-------------------------------------------------|-------------|
| <span class="xref">System.Int32</span> | <span class="parametername">hostId</span>       |             |
| <span class="xref">System.Int32</span> | <span class="parametername">connectionId</span> |             |
| <span class="xref">System.Byte</span>  | <span class="parametername">error</span>        |             |

#### Returns [returns-16]

| Type                                     | Description |
|------------------------------------------|-------------|
| <span class="xref">System.Boolean</span> |             |

## Events

### OnRemoteEndpointReported [MLAPI_Transports_UNET_RelayTransport_OnRemoteEndpointReported]

<div class="markdown level1 summary" markdown="1">

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-20]

    public static event Action<IPEndPoint> OnRemoteEndpointReported

#### Event Type [event-type]

| Type                                                                                       | Description |
|--------------------------------------------------------------------------------------------|-------------|
| <span class="xref">System.Action</span>\<<span class="xref">System.Net.IPEndPoint</span>\> |             |
