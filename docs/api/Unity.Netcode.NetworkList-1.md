---
id: Unity.Netcode.NetworkList-1
title: Unity.Netcode.NetworkList-1
---

# Class NetworkList\<T\>


Event based NetworkVariable container for syncing Lists







##### Inheritance


System.Object




NetworkVariableBase




NetworkList\<T\>






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





NetworkVariableBase.CanClientRead(UInt64)





NetworkVariableBase.CanClientWrite(UInt64)





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
public class NetworkList<T> : NetworkVariableBase, IDisposable where T : struct, IEquatable<T>
```



##### Type Parameters

| Name | Description           |
|------|-----------------------|
| T    | The type for the list |

### Constructors

#### NetworkList()


Constructor method for






##### Declaration


``` lang-csharp
public NetworkList()
```



#### NetworkList(IEnumerable\<T\>, NetworkVariableReadPermission, NetworkVariableWritePermission)







##### Declaration


``` lang-csharp
public NetworkList(IEnumerable<T> values = null, NetworkVariableReadPermission readPerm = NetworkVariableReadPermission.Everyone, NetworkVariableWritePermission writePerm = NetworkVariableWritePermission.Server)
```



##### Parameters

| Type                                        | Name      | Description |
|---------------------------------------------|-----------|-------------|
| System.Collections.Generic.IEnumerable\<T\> | values    |             |
| NetworkVariableReadPermission               | readPerm  |             |
| NetworkVariableWritePermission              | writePerm |             |

### Properties

#### Count







##### Declaration


``` lang-csharp
public int Count { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Item\[Int32\]







##### Declaration


``` lang-csharp
public T this[int index] { get; set; }
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

##### Property Value

| Type | Description |
|------|-------------|
| T    |             |

#### LastModifiedTick


This is actually unused left-over from a previous interface






##### Declaration


``` lang-csharp
public int LastModifiedTick { get; }
```



##### Property Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Methods

#### Add(T)







##### Declaration


``` lang-csharp
public void Add(T item)
```



##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

#### Clear()







##### Declaration


``` lang-csharp
public void Clear()
```



#### Contains(T)







##### Declaration


``` lang-csharp
public bool Contains(T item)
```



##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Dispose()


Overridden System.IDisposable implementation. CAUTION: If you derive
from this class and override the Dispose() method, you **must** always
invoke the base.Dispose() method!






##### Declaration


``` lang-csharp
public override void Dispose()
```



##### Overrides



NetworkVariableBase.Dispose()



#### GetEnumerator()







##### Declaration


``` lang-csharp
public IEnumerator<T> GetEnumerator()
```



##### Returns

| Type                                        | Description |
|---------------------------------------------|-------------|
| System.Collections.Generic.IEnumerator\<T\> |             |

#### IndexOf(T)







##### Declaration


``` lang-csharp
public int IndexOf(T item)
```



##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

##### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Insert(Int32, T)







##### Declaration


``` lang-csharp
public void Insert(int index, T item)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |
| T            | item  |             |

#### IsDirty()


Gets Whether or not the container is dirty






##### Declaration


``` lang-csharp
public override bool IsDirty()
```



##### Returns

| Type           | Description                           |
|----------------|---------------------------------------|
| System.Boolean | Whether or not the container is dirty |

##### Overrides



NetworkVariableBase.IsDirty()



#### ReadDelta(FastBufferReader, Boolean)


Reads delta from the reader and applies them to the internal value






##### Declaration


``` lang-csharp
public override void ReadDelta(FastBufferReader reader, bool keepDirtyDelta)
```



##### Parameters

| Type             | Name           | Description                                                  |
|------------------|----------------|--------------------------------------------------------------|
| FastBufferReader | reader         | The stream to read the delta from                            |
| System.Boolean   | keepDirtyDelta | Whether or not the delta should be kept as dirty or consumed |

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



#### Remove(T)







##### Declaration


``` lang-csharp
public bool Remove(T item)
```



##### Parameters

| Type | Name | Description |
|------|------|-------------|
| T    | item |             |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### RemoveAt(Int32)







##### Declaration


``` lang-csharp
public void RemoveAt(int index)
```



##### Parameters

| Type         | Name  | Description |
|--------------|-------|-------------|
| System.Int32 | index |             |

#### ResetDirty()


Resets the dirty state and marks the variable as synced / clean






##### Declaration


``` lang-csharp
public override void ResetDirty()
```



##### Overrides



NetworkVariableBase.ResetDirty()



#### WriteDelta(FastBufferWriter)


Writes the dirty changes, that is, the changes since the variable was
last dirty, to the writer






##### Declaration


``` lang-csharp
public override void WriteDelta(FastBufferWriter writer)
```



##### Parameters

| Type             | Name   | Description                              |
|------------------|--------|------------------------------------------|
| FastBufferWriter | writer | The stream to write the dirty changes to |

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



### Events

#### OnListChanged


The callback to be invoked when the list gets changed






##### Declaration


``` lang-csharp
public event NetworkList<T>.OnListChangedDelegate OnListChanged
```



##### Event Type

| Type                                  | Description |
|---------------------------------------|-------------|
| NetworkList.OnListChangedDelegate\<\> |             |

### Implements



System.IDisposable





