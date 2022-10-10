---  
id: Unity.Networking.Transport.NetworkPacketReceiver  
title: Unity.Networking.Transport.NetworkPacketReceiver  
---

<div class="markdown level0 summary">

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

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
[Obsolete("Use ReceiveJobArguments.ReceiveQueue instead", true)]
public struct NetworkPacketReceiver
```

## 

### LastUpdateTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly long LastUpdateTime { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int64 |             |

### ReceiveErrorCode

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int ReceiveErrorCode { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### AllocateMemory(ref Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public IntPtr AllocateMemory(ref int dataLen)
```

#### Parameters

| Type         | Name    | Description |
|--------------|---------|-------------|
| System.Int32 | dataLen |             |

#### Returns

| Type          | Description |
|---------------|-------------|
| System.IntPtr |             |

### AppendPacket(IntPtr, ref NetworkEndpoint, Int32, NetworkPacketReceiver.AppendPacketMode)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AppendPacket(IntPtr data, ref NetworkEndpoint address, int dataLen, NetworkPacketReceiver.AppendPacketMode mode = NetworkPacketReceiver.AppendPacketMode.None)
```

#### Parameters

| Type                                   | Name    | Description |
|----------------------------------------|---------|-------------|
| System.IntPtr                          | data    |             |
| NetworkEndpoint                        | address |             |
| System.Int32                           | dataLen |             |
| NetworkPacketReceiver.AppendPacketMode | mode    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### IsAddressUsed(NetworkEndpoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool IsAddressUsed(NetworkEndpoint address)
```

#### Parameters

| Type            | Name    | Description |
|-----------------|---------|-------------|
| NetworkEndpoint | address |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
