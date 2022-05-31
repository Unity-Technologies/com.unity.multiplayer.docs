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

System.ValueType.Equals(System.Object)

</div>

<div>

System.ValueType.GetHashCode()

</div>

<div>

System.ValueType.ToString()

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public struct NetworkListEvent<T>
```

</div>

##### Type Parameters

| Name | Description                                   |
|------|-----------------------------------------------|
| T    | The type for the list that the event is about |

### Fields

#### Index

<div class="markdown level1 summary">

the index changed, added or removed if available

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public int Index
```

</div>

##### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### PreviousValue

<div class="markdown level1 summary">

The previous value when "Value" has changed, if available.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public T PreviousValue
```

</div>

##### Field Value

| Type | Description |
|------|-------------|
| T    |             |

#### Type

<div class="markdown level1 summary">

Enum representing the operation made to the list.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public NetworkListEvent<T>.EventType Type
```

</div>

##### Field Value

| Type                           | Description |
|--------------------------------|-------------|
| NetworkListEvent.EventType\<\> |             |

#### Value

<div class="markdown level1 summary">

The value changed, added or removed if available.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public T Value
```

</div>

##### Field Value

| Type | Description |
|------|-------------|
| T    |             |

 
