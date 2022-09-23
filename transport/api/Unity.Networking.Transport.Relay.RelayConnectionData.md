---
id: Unity.Networking.Transport.Relay.RelayConnectionData
title: Unity.Networking.Transport.Relay.RelayConnectionData
---


# Struct RelayConnectionData


This is the encrypted data that the Relay server uses for describing a
connection. Used mainly in the connection establishing process
(Binding).






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
public struct RelayConnectionData
```



### Fields

#### k_Length


The length in bytes of the Connection Data.






##### Declaration


``` lang-csharp
public const int k_Length = 255
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Value


The raw data of the Connection Data






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


Converts a byte pointer to a RelayConnectionData.






##### Declaration


``` lang-csharp
public static RelayConnectionData FromBytePointer(byte *dataPtr, int length)
```



##### Parameters

| Type          | Name    | Description                                     |
|---------------|---------|-------------------------------------------------|
| System.Byte\* | dataPtr | The pointer to the data of the Connection Data. |
| System.Int32  | length  | The length of the data.                         |

##### Returns

| Type                | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| RelayConnectionData | Returns a RelayConnectionData constructed from the provided data. |

##### Exceptions

| Type                     | Condition                                                                   |
|--------------------------|-----------------------------------------------------------------------------|
| System.ArgumentException | Provided byte array length is invalid, must be {k_Length} but got {length}. |



