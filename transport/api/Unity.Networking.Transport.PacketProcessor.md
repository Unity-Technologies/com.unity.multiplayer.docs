---  
id: Unity.Networking.Transport.PacketProcessor  
title: Unity.Networking.Transport.PacketProcessor  
---

<div class="markdown level0 summary">

Provides an API for processing packets.

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
public struct PacketProcessor
```

## 

### BytesAvailableAtEnd

<div class="markdown level1 summary">

The available amount of bytes at the end of the packet data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int BytesAvailableAtEnd { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### BytesAvailableAtStart

<div class="markdown level1 summary">

The available amount of bytes at the begining of the packet data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int BytesAvailableAtStart { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Capacity

<div class="markdown level1 summary">

The total capacity of the packet.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Capacity { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### EndpointRef

<div class="markdown level1 summary">

A reference to the Endpoint of the packet.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly ref NetworkEndpoint EndpointRef { get; }
```

#### Property Value

| Type            | Description |
|-----------------|-------------|
| NetworkEndpoint |             |

### IsCreated

<div class="markdown level1 summary">

Whether the packet processor is valid.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly bool IsCreated { get; }
```

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Length

<div class="markdown level1 summary">

The size of the current data of the packet.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Length { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Offset

<div class="markdown level1 summary">

The current offset in the packet buffer of the data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public readonly int Offset { get; }
```

#### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## 

### AppendToPayload(Void\*, Int32)

<div class="markdown level1 summary">

Copies the provided bytes at the end of the packet and increases its
size accordingly.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AppendToPayload(void *dataPtr, int size)
```

#### Parameters

| Type          | Name    | Description                      |
|---------------|---------|----------------------------------|
| System.Void\* | dataPtr | The pointer to the data to copy. |
| System.Int32  | size    | The size in bytes to copy.       |

#### Exceptions

| Type                     | Condition                                                                             |
|--------------------------|---------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an exception if there are not enough bytes available at the end of the packet. |

### AppendToPayload(PacketProcessor)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AppendToPayload(PacketProcessor processor)
```

#### Parameters

| Type            | Name      | Description                                 |
|-----------------|-----------|---------------------------------------------|
| PacketProcessor | processor | The packet processor to copy the data from. |

#### Exceptions

| Type                     | Condition                                                                             |
|--------------------------|---------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an exception if there are not enough bytes available at the end of the packet. |

### AppendToPayload\<T>(T)

<div class="markdown level1 summary">

Copies the provided value at the end of the packet and increases its
size accordingly.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void AppendToPayload<T>(T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | The value to copy. |

#### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The type of the data to copy. |

#### Exceptions

| Type                     | Condition                                                                             |
|--------------------------|---------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an exception if there are not enough bytes available at the end of the packet. |

### CopyPayload(Void\*, Int32)

<div class="markdown level1 summary">

Copies the current packet data to the destination pointer.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int CopyPayload(void *destinationPtr, int size)
```

#### Parameters

| Type          | Name           | Description                                            |
|---------------|----------------|--------------------------------------------------------|
| System.Void\* | destinationPtr | The destination pointer where the data will be copied. |
| System.Int32  | size           |                                                        |

#### Returns

| Type         | Description                          |
|--------------|--------------------------------------|
| System.Int32 | Returns the ammount of bytes copied. |

#### Exceptions

| Type                     | Condition                                                    |
|--------------------------|--------------------------------------------------------------|
| System.OverflowException | Throws an exception if the packet has overflowed the buffer. |

### Drop()

<div class="markdown level1 summary">

Drops the packet.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void Drop()
```

### GetPayloadDataRef\<T>(Int32)

<div class="markdown level1 summary">

Gets a reference to the payload data reinterpreted to the type T.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public ref T GetPayloadDataRef<T>(int offset = 0)
    where T : struct
```

#### Parameters

| Type         | Name   | Description                               |
|--------------|--------|-------------------------------------------|
| System.Int32 | offset | The offset from the start of the payload. |

#### Returns

| Type | Description                             |
|------|-----------------------------------------|
| T    | Returns a reference to the Payload data |

#### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type of the data. |

#### Exceptions

| Type                     | Condition                                                                              |
|--------------------------|----------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an execption if there is no enough bytes in the payload for the specified type. |

### GetUnsafePayloadPtr()

<div class="markdown level1 summary">

Gets the unsafe pointer of the packet data.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void *GetUnsafePayloadPtr()
```

#### Returns

| Type          | Description                   |
|---------------|-------------------------------|
| System.Void\* | A pointer to the packet data. |

### PrependToPayload\<T>(T)

<div class="markdown level1 summary">

Copies the provided value at the start of the packet and increases its
size accordingly.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void PrependToPayload<T>(T value)
    where T : struct
```

#### Parameters

| Type | Name  | Description        |
|------|-------|--------------------|
| T    | value | The value to copy. |

#### Type Parameters

| Name | Description                   |
|------|-------------------------------|
| T    | The type of the data to copy. |

#### Exceptions

| Type                     | Condition                                                                             |
|--------------------------|---------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an exception if there are not enough bytes available at the end of the packet. |

### RemoveFromPayloadStart(Void\*, Int32)

<div class="markdown level1 summary">

Fill the buffer with the data at the start of the payload.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RemoveFromPayloadStart(void *ptr, int size)
```

#### Parameters

| Type          | Name | Description                                 |
|---------------|------|---------------------------------------------|
| System.Void\* | ptr  | Pointer to the start of the buffer to fill. |
| System.Int32  | size | Size of the buffer to fill.                 |

#### Exceptions

| Type                     | Condition                                  |
|--------------------------|--------------------------------------------|
| System.ArgumentException | If provided buffer is larger than payload. |

### RemoveFromPayloadStart\<T>()

<div class="markdown level1 summary">

Gets and removes the data at the start of the payload reinterpreted to
the type T.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public T RemoveFromPayloadStart<T>()
    where T : struct
```

#### Returns

| Type | Description              |
|------|--------------------------|
| T    | The extracted data value |

#### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type of the data. |

#### Exceptions

| Type                     | Condition                                                                              |
|--------------------------|----------------------------------------------------------------------------------------|
| System.ArgumentException | Throws an execption if there is no enough bytes in the payload for the specified type. |
