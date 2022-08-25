---
id: Unity.Networking.Transport.NetworkEndPoint
title: Unity.Networking.Transport.NetworkEndPoint
---


# Struct NetworkEndPoint


Describes a raw network endpoint (typically IP and port number).






##### Inherited Members



System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkEndPoint
```



### Properties

#### Address







##### Declaration


``` lang-csharp
public readonly string Address { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

#### AnyIpv4


Gets an IPv4 endpoint that can be used to bind to any address available
(0.0.0.0:0).






##### Declaration


``` lang-csharp
public static readonly NetworkEndPoint AnyIpv4 { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### AnyIpv6


Gets an IPv6 endpoint that can be used to bind to any address available
(\[::0\]:0).






##### Declaration


``` lang-csharp
public static readonly NetworkEndPoint AnyIpv6 { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### Family


Gets or sets NetworkFamily of the endpoint.






##### Declaration


``` lang-csharp
public NetworkFamily Family { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| NetworkFamily |             |

#### IsAny


Whether the endpoint is using an "any" address.






##### Declaration


``` lang-csharp
public readonly bool IsAny { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsLoopback


Whether the endpoint is using a loopback address.






##### Declaration


``` lang-csharp
public readonly bool IsLoopback { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### IsValid


Whether the endpoint is valid or not.






##### Declaration


``` lang-csharp
public readonly bool IsValid { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Length


Returns the length of the raw network endpoint in bytes.






##### Declaration


``` lang-csharp
public readonly int Length { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### LoopbackIpv4


Gets an IPv4 loopback endpoint (127.0.0.1:0).






##### Declaration


``` lang-csharp
public static readonly NetworkEndPoint LoopbackIpv4 { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### LoopbackIpv6


Gets an IPv6 loopback endpoint (\[::1\]:0).






##### Declaration


``` lang-csharp
public static readonly NetworkEndPoint LoopbackIpv6 { get; }
```



##### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### Port


Gets or sets port number of the endpoint.






##### Declaration


``` lang-csharp
public ushort Port { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

#### RawPort


Gets or sets the value of the raw port number.






##### Declaration


``` lang-csharp
public ushort RawPort { get; set; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.UInt16 |             |

### Methods

#### Equals(Object)







##### Declaration


``` lang-csharp
public override bool Equals(object other)
```



##### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

##### Overrides



System.ValueType.Equals(System.Object)



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



#### GetRawAddressBytes()


Gets the raw bytes for the endpoint.






##### Declaration


``` lang-csharp
public NativeArray<byte> GetRawAddressBytes()
```



##### Returns

| Type                       | Description                                                        |
|----------------------------|--------------------------------------------------------------------|
| NativeArray\<System.Byte\> | Native array containing the raw bytes (uses temporary allocation). |

#### Parse(String, UInt16, NetworkFamily)







##### Declaration


``` lang-csharp
public static NetworkEndPoint Parse(string address, ushort port, NetworkFamily family = NetworkFamily.Ipv4)
```



##### Parameters

| Type          | Name    | Description |
|---------------|---------|-------------|
| System.String | address |             |
| System.UInt16 | port    |             |
| NetworkFamily | family  |             |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkEndPoint |             |

#### SetRawAddressBytes(NativeArray\<Byte\>, NetworkFamily)


Directly sets the raw bytes of the endpoint using the specified bytes
and family.






##### Declaration


``` lang-csharp
public void SetRawAddressBytes(NativeArray<byte> bytes, NetworkFamily family = NetworkFamily.Ipv4)
```



##### Parameters

| Type                       | Name   | Description                        |
|----------------------------|--------|------------------------------------|
| NativeArray\<System.Byte\> | bytes  | Raw bytes to use for the endpoint. |
| NetworkFamily              | family | Endpoint's address family.         |

##### Exceptions

| Type                             | Condition                             |
|----------------------------------|---------------------------------------|
| System.InvalidOperationException | Length of bytes doesn't match family. |

#### ToString()







##### Declaration


``` lang-csharp
public override string ToString()
```



##### Returns

| Type          | Description |
|---------------|-------------|
| System.String |             |

##### Overrides



System.ValueType.ToString()



#### TryParse(String, UInt16, out NetworkEndPoint, NetworkFamily)







##### Declaration


``` lang-csharp
public static bool TryParse(string address, ushort port, out NetworkEndPoint endpoint, NetworkFamily family = NetworkFamily.Ipv4)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| System.String   | address  |             |
| System.UInt16   | port     |             |
| NetworkEndPoint | endpoint |             |
| NetworkFamily   | family   |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### WithPort(UInt16)


Use the given port number for this endpoint.






##### Declaration


``` lang-csharp
public NetworkEndPoint WithPort(ushort port)
```



##### Parameters

| Type          | Name | Description      |
|---------------|------|------------------|
| System.UInt16 | port | The port number. |

##### Returns

| Type            | Description          |
|-----------------|----------------------|
| NetworkEndPoint | The endpoint (this). |

### Operators

#### Equality(NetworkEndPoint, NetworkEndPoint)







##### Declaration


``` lang-csharp
public static bool operator ==(NetworkEndPoint lhs, NetworkEndPoint rhs)
```



##### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | lhs  |             |
| NetworkEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Inequality(NetworkEndPoint, NetworkEndPoint)







##### Declaration


``` lang-csharp
public static bool operator !=(NetworkEndPoint lhs, NetworkEndPoint rhs)
```



##### Parameters

| Type            | Name | Description |
|-----------------|------|-------------|
| NetworkEndPoint | lhs  |             |
| NetworkEndPoint | rhs  |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |



