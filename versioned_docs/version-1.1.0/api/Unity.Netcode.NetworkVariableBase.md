---
id: Unity.Netcode.NetworkVariableBase
title: Unity.Netcode.NetworkVariableBase
---

# Class NetworkVariableBase


Interface for network value containers







##### Inheritance


System.Object




NetworkVariableBase




NetworkList\<T\>




NetworkVariable\<T\>






##### Implements



System.IDisposable






##### Inherited Members



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
public abstract class NetworkVariableBase : IDisposable
```



### Constructors

#### NetworkVariableBase(NetworkVariableReadPermission, NetworkVariableWritePermission)


The default constructor for NetworkVariableBase that can be used to
create a custom NetworkVariable.






##### Declaration


``` lang-csharp
protected NetworkVariableBase(NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```



##### Parameters

| Type                           | Name      | Description                                        |
|--------------------------------|-----------|----------------------------------------------------|
| NetworkVariableReadPermission  | readPerm  | the NetworkVariableReadPermission access settings  |
| NetworkVariableWritePermission | writePerm | the NetworkVariableWritePermission access settings |

### Fields

#### DefaultReadPerm


The default read permissions






##### Declaration


``` lang-csharp
public const NetworkVariableReadPermission DefaultReadPerm = NetworkVariableReadPermission.Everyone
```



##### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| NetworkVariableReadPermission |             |

#### DefaultWritePerm


The default write permissions






##### Declaration


``` lang-csharp
public const NetworkVariableWritePermission DefaultWritePerm = NetworkVariableWritePermission.Server
```



##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkVariableWritePermission |             |

#### ReadPerm


The read permission for this var






##### Declaration


``` lang-csharp
public readonly NetworkVariableReadPermission ReadPerm
```



##### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| NetworkVariableReadPermission |             |

#### WritePerm


The write permission for this var






##### Declaration


``` lang-csharp
public readonly NetworkVariableWritePermission WritePerm
```



##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkVariableWritePermission |             |

### Properties

#### Name


Gets or sets the name of the network variable's instance (MemberInfo)
where it was declared.






##### Declaration


``` lang-csharp
public string Name { get; }
```



##### Property Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Methods

#### CanClientRead(UInt64)


Gets if a specific client has permission to read the var or not






##### Declaration


``` lang-csharp
public bool CanClientRead(ulong clientId)
```



##### Parameters

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt64 | clientId | The client id |

##### Returns

| Type           | Description                                      |
|----------------|--------------------------------------------------|
| System.Boolean | Whether or not the client has permission to read |

#### CanClientWrite(UInt64)


Gets if a specific client has permission to write the var or not






##### Declaration


``` lang-csharp
public bool CanClientWrite(ulong clientId)
```



##### Parameters

| Type          | Name     | Description   |
|---------------|----------|---------------|
| System.UInt64 | clientId | The client id |

##### Returns

| Type           | Description                                       |
|----------------|---------------------------------------------------|
| System.Boolean | Whether or not the client has permission to write |

#### Dispose()


Virtual System.IDisposable implementation






##### Declaration


``` lang-csharp
public virtual void Dispose()
```



#### Initialize(NetworkBehaviour)


Initializes the NetworkVariable






##### Declaration


``` lang-csharp
public void Initialize(NetworkBehaviour networkBehaviour)
```



##### Parameters

| Type             | Name             | Description                                         |
|------------------|------------------|-----------------------------------------------------|
| NetworkBehaviour | networkBehaviour | The NetworkBehaviour the NetworkVariable belongs to |

#### IsDirty()


Gets Whether or not the container is dirty






##### Declaration


``` lang-csharp
public virtual bool IsDirty()
```



##### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

#### ReadDelta(FastBufferReader, Boolean)


Reads delta from the reader and applies them to the internal value






##### Declaration


``` lang-csharp
public abstract void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```



##### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

#### ReadField(FastBufferReader)


Reads the complete state from the reader and applies it






##### Declaration


``` lang-csharp
public abstract void ReadField(FastBufferReader reader)
```



##### Parameters

| Type             | Name   | Description                       |
|------------------|--------|-----------------------------------|
| FastBufferReader | reader | The stream to read the state from |

#### ResetDirty()


Resets the dirty state and marks the variable as synced / clean






##### Declaration


``` lang-csharp
public virtual void ResetDirty()
```



#### SetDirty(Boolean)


Sets whether or not the variable needs to be delta synced






##### Declaration


``` lang-csharp
public virtual void SetDirty(bool isDirty)
```



##### Parameters

| Type           | Name    | Description                     |
|----------------|---------|---------------------------------|
| System.Boolean | isDirty | Whether or not the var is dirty |

#### WriteDelta(FastBufferWriter)


Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer






##### Declaration


``` lang-csharp
public abstract void WriteDelta(FastBufferWriter writer)
```



##### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| FastBufferWriter | writer | The stream to write the dirty changes to |

#### WriteField(FastBufferWriter)


Writes the complete state of the variable to the writer






##### Declaration


``` lang-csharp
public abstract void WriteField(FastBufferWriter writer)
```



##### Parameters

| Type             | Name   | Description                      |
|------------------|--------|----------------------------------|
| FastBufferWriter | writer | The stream to write the state to |

### Implements



System.IDisposable





