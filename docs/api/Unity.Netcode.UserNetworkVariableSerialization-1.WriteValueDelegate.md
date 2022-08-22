---
id: Unity.Netcode.UserNetworkVariableSerialization-1.WriteValueDelegate
title: Unity.Netcode.UserNetworkVariableSerialization-1.WriteValueDelegate
---

# Delegate UserNetworkVariableSerialization\<T\>.WriteValueDelegate


The write value delegate handler definition






###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public delegate void WriteValueDelegate(FastBufferWriter writer, in T value);
```



##### Parameters

| Type             | Name   | Description                                         |
|------------------|--------|-----------------------------------------------------|
| FastBufferWriter | writer | The FastBufferWriter to write the value of type `T` |
| T                | value  | The value of type `T` to be written                 |



