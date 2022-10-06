---
id: Unity.Netcode.NetworkVariable-1
title: Unity.Netcode.NetworkVariable-1
---

# Class NetworkVariable\<T\>


A variable that can be synchronized over the network.







##### Inheritance


System.Object




NetworkVariableBase




NetworkVariable\<T\>






##### Implements



System.IDisposable






##### Inherited Members



NetworkVariableBase.Initialize(NetworkBehaviour)





NetworkVariableBase.DefaultReadPerm





NetworkVariableBase.DefaultWritePerm





NetworkVariableBase.Name





NetworkVariableBase.ReadPerm





NetworkVariableBase.WritePerm





NetworkVariableBase.SetDirty(Boolean)





NetworkVariableBase.ResetDirty()





NetworkVariableBase.IsDirty()





NetworkVariableBase.CanClientRead(UInt64)





NetworkVariableBase.CanClientWrite(UInt64)





NetworkVariableBase.Dispose()





System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
[Serializable]
public class NetworkVariable<T> : NetworkVariableBase, IDisposable where T : struct
```



##### Type Parameters

| Name | Description                                 |
|------|---------------------------------------------|
| T    | the unmanaged type for NetworkVariable\<T\> |

### Constructors

#### NetworkVariable(T, NetworkVariableReadPermission, NetworkVariableWritePermission)


Constructor for NetworkVariable\<T\>






##### Declaration


``` lang-csharp
public NetworkVariable(T value = default(T), NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```



##### Parameters

| Type                           | Name      | Description                                                      |
|--------------------------------|-----------|------------------------------------------------------------------|
| T                              | value     | initial value set that is of type T                              |
| NetworkVariableReadPermission  | readPerm  | the NetworkVariableReadPermission for this NetworkVariable\<T\>  |
| NetworkVariableWritePermission | writePerm | the NetworkVariableWritePermission for this NetworkVariable\<T\> |

### Fields

#### OnValueChanged


The callback to be invoked when the value gets changed






##### Declaration


``` lang-csharp
public NetworkVariable<T>.OnValueChangedDelegate OnValueChanged
```



##### Field Value

| Type                                       | Description |
|--------------------------------------------|-------------|
| NetworkVariable.OnValueChangedDelegate\<\> |             |

### Properties

#### Value


The value of the NetworkVariable container






##### Declaration


``` lang-csharp
public virtual T Value { get; set; }
```



##### Property Value

| Type | Description |
|------|-------------|
| T    |             |

### Methods

#### ReadDelta(FastBufferReader, Boolean)


Reads value from the reader and applies it






##### Declaration


``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```



##### Parameters

| Type             | Name           | Description                                                                             |
|------------------|----------------|-----------------------------------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the value from                                                       |
| System.Boolean   | keepDirtyDelta | Whether or not the container should keep the dirty delta, or mark the delta as consumed |

##### Overrides



NetworkVariableBase.ReadDelta(FastBufferReader, Boolean)



#### ReadField(FastBufferReader)


Reads the complete state from the reader and applies it






##### Declaration


``` lang-csharp
public override void ReadField(FastBufferReader reader)
```



##### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

##### Overrides



NetworkVariableBase.ReadField(FastBufferReader)



#### WriteDelta(FastBufferWriter)


Writes the variable to the writer






##### Declaration


``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```



##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the value to |

##### Overrides



NetworkVariableBase.WriteDelta(FastBufferWriter)



#### WriteField(FastBufferWriter)


Writes the complete state of the variable to the writer






##### Declaration


``` lang-csharp
public override void WriteField(FastBufferWriter writer)
```



##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

##### Overrides



NetworkVariableBase.WriteField(FastBufferWriter)



### Implements



System.IDisposable





