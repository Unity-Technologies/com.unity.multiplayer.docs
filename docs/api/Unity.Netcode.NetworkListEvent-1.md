---  
id: Unity.Netcode.NetworkListEvent-1  
title: Unity.Netcode.NetworkListEvent-1  
---

<div class="markdown level0 summary">

Struct containing event information about changes to a NetworkList.

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

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public struct NetworkListEvent<T>
```

##### Type Parameters

| Name | Description                                   |
|------|-----------------------------------------------|
| T    | The type for the list that the event is about |

## 

### Index

<div class="markdown level1 summary">

the index changed, added or removed if available

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public int Index
```

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

### Type

<div class="markdown level1 summary">

Enum representing the operation made to the list.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public NetworkListEvent<T>.EventType Type
```

#### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkListEvent.EventType\<\> |             |

### Value

<div class="markdown level1 summary">

The value changed, added or removed if available.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public T Value
```

#### Field Value

| Type | Description |
|------|-------------|
| T    |             |
