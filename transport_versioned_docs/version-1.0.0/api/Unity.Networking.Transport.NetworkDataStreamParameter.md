---
id: Unity.Networking.Transport.NetworkDataStreamParameter
title: Unity.Networking.Transport.NetworkDataStreamParameter
---


# Struct NetworkDataStreamParameter


The NetworkDataStreamParameter is used to set a fixed data stream size.






##### Implements



INetworkParameter






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
public struct NetworkDataStreamParameter : INetworkParameter
```



##### **Remarks**


The DataStreamWriter will grow on demand if the size is set to zero.



### Fields

#### size


Size of the default DataStreamWriter






##### Declaration


``` lang-csharp
public int size
```



##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Validate()







##### Declaration


``` lang-csharp
public bool Validate()
```



##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Implements



INetworkParameter





