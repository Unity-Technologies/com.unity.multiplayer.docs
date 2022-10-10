---  
id: Unity.Networking.Transport.Utilities.ReliableUtility  
title: Unity.Networking.Transport.Utilities.ReliableUtility  
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
public struct ReliableUtility
```

## 

### DefaultMinimumResendTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int DefaultMinimumResendTime = 64
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### MaximumResendTime

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public const int MaximumResendTime = 200
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### GetLocalPacketTimer(Byte\*, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ReliableUtility.PacketTimers*GetLocalPacketTimer(byte *sharedBuffer, ushort sequenceId)
```

#### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |

#### Returns

| Type                           | Description |
|--------------------------------|-------------|
| ReliableUtility.PacketTimers\* |             |

### GetPacketInformation(Byte\*, Int32)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ReliableUtility.PacketInformation*GetPacketInformation(byte *self, int sequence)
```

#### Parameters

| Type          | Name     | Description |
|---------------|----------|-------------|
| System.Byte\* | self     |             |
| System.Int32  | sequence |             |

#### Returns

| Type                                | Description |
|-------------------------------------|-------------|
| ReliableUtility.PacketInformation\* |             |

### GetRemotePacketTimer(Byte\*, UInt16)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static ReliableUtility.PacketTimers*GetRemotePacketTimer(byte *sharedBuffer, ushort sequenceId)
```

#### Parameters

| Type          | Name         | Description |
|---------------|--------------|-------------|
| System.Byte\* | sharedBuffer |             |
| System.UInt16 | sequenceId   |             |

#### Returns

| Type                           | Description |
|--------------------------------|-------------|
| ReliableUtility.PacketTimers\* |             |

### SetMinimumResendTime(Int32, NetworkDriver, NetworkPipeline, NetworkConnection)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static void SetMinimumResendTime(int value, NetworkDriver driver, NetworkPipeline pipeline, NetworkConnection con)
```

#### Parameters

| Type              | Name     | Description |
|-------------------|----------|-------------|
| System.Int32      | value    |             |
| NetworkDriver     | driver   |             |
| NetworkPipeline   | pipeline |             |
| NetworkConnection | con      |             |
