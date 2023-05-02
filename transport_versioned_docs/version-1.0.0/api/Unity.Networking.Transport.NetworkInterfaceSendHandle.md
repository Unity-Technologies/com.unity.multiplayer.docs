---
id: Unity.Networking.Transport.NetworkInterfaceSendHandle
title: Unity.Networking.Transport.NetworkInterfaceSendHandle
---


# Struct NetworkInterfaceSendHandle


A handle to data that's going to be sent on an interface.






##### Inherited Members



System.ValueType.Equals(System.Object)





System.ValueType.GetHashCode()





System.ValueType.ToString()





System.Object.Equals(System.Object, System.Object)





System.Object.GetType()





System.Object.ReferenceEquals(System.Object, System.Object)





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public struct NetworkInterfaceSendHandle
```



### Fields

#### capacity


Maximum capacity of the data buffer.






##### Declaration


``` lang-csharp
public int capacity
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### data


Pointer to the data buffer.






##### Declaration


``` lang-csharp
public IntPtr data
```



##### Field Value

| Type          | Description |
|---------------|-------------|
| System.IntPtr |             |

#### flags


Internal flags used by the driver (tracks who allocated the memory).






##### Declaration


``` lang-csharp
public SendHandleFlags flags
```



##### Field Value

| Type            | Description |
|-----------------|-------------|
| SendHandleFlags |             |

#### id


Internal ID for this handle.






##### Declaration


``` lang-csharp
public int id
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### size


Actual size of the data in the buffer.






##### Declaration


``` lang-csharp
public int size
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |



