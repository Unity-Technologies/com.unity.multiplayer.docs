---
id: Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate
title: Unity.Netcode.UserNetworkVariableSerialization-1.ReadValueDelegate
---

# Delegate UserNetworkVariableSerialization\<T\>.ReadValueDelegate


The read value delegate handler definition






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void ReadValueDelegate(FastBufferReader reader, out T value);
```



##### Parameters

| Type             | Name   | Description                                        |
|------------------|--------|----------------------------------------------------|
| FastBufferReader | reader | The FastBufferReader to read the value of type `T` |
| T                | value  | The value of type `T` to be read                   |



