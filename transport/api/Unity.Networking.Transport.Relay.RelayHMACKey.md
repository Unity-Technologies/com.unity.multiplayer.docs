---
id: Unity.Networking.Transport.Relay.RelayHMACKey
title: Unity.Networking.Transport.Relay.RelayHMACKey
---


# Struct RelayHMACKey


Used to represent the HMACKey for the Relay Service






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport.Relay

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct RelayHMACKey
```



### Fields

#### k_Length


The length in bytes of the RelayHMACKey.






##### Declaration


``` lang-csharp
public const int k_Length = 64
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Value


The raw data of the HMAC key.






##### Declaration


``` lang-csharp
public byte *Value
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### Methods

#### FromBytePointer(Byte\*, Int32)


Converts a byte pointer to a RelayHMACKey.






##### Declaration


``` lang-csharp
public static RelayHMACKey FromBytePointer(byte *data, int length)
```



##### Parameters

| Type          | Name   | Description                                   |
|---------------|--------|-----------------------------------------------|
| System.Byte\* | data   | The pointer to the data of the Allocation Id. |
| System.Int32  | length | The length of the data.                       |

##### Returns

| Type         | Description                                                |
|--------------|------------------------------------------------------------|
| RelayHMACKey | Returns a RelayHMACKey constructed from the provided data. |

##### Exceptions

| Type                     | Condition                                                                   |
|--------------------------|-----------------------------------------------------------------------------|
| System.ArgumentException | Provided byte array length is invalid, must be {k_Length} but got {length}. |



