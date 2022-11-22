---  
id: Unity.Multiplayer.Tools.NetStats.MetricId  
title: Unity.Multiplayer.Tools.NetStats.MetricId  
---

<div class="markdown level0 summary">

Wrapper around an enum with the MetricTypeEnumAttribute. The struct
provide a way to create metric that can be used with multiplayer tools.

</div>

<div class="markdown level0 conceptual">

</div>

<div classs="implements">

##### Implements

<div>

System.IEquatable\<MetricId\>

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetType()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public struct MetricId : IEquatable<MetricId>
```

## Methods 

### Create\<T\>(T)

<div class="markdown level1 summary">

Static function to create a MetricId.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static MetricId Create<T>(T value)

    where T : struct, IConvertible
```

#### Parameters

| Type | Name  | Description                |
|------|-------|----------------------------|
| T    | value | Enum value for the metric. |

#### Returns

| Type     | Description |
|----------|-------------|
| MetricId |             |

#### Type Parameters

| Name | Description                              |
|------|------------------------------------------|
| T    | An enum with the MetricTypeEnumAttribute |

### Equals(Object)

<div class="markdown level1 summary">

Determines whether the specified object is equal to the current object.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override bool Equals(object obj)
```

#### Parameters

| Type          | Name | Description                                     |
|---------------|------|-------------------------------------------------|
| System.Object | obj  | The object to compare with the current object.. |

#### Returns

| Type           | Description                                                                    |
|----------------|--------------------------------------------------------------------------------|
| System.Boolean | true if the specified object is equal to the current object; otherwise, false. |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### Equals(MetricId)

<div class="markdown level1 summary">

Determines whether the specified MetricId is equal to the current
MetricId.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Equals(MetricId other)
```

#### Parameters

| Type     | Name  | Description                                        |
|----------|-------|----------------------------------------------------|
| MetricId | other | The MetricId to compare with the current MetricId. |

#### Returns

| Type           | Description                                                                        |
|----------------|------------------------------------------------------------------------------------|
| System.Boolean | true if the specified MetricId is equal to the current MetricId; otherwise, false. |

### GetHashCode()

<div class="markdown level1 summary">

Serves as the default hash function.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override int GetHashCode()
```

#### Returns

| Type         | Description                           |
|--------------|---------------------------------------|
| System.Int32 | A hash code for the current MetricId. |

#### Overrides

<div>

System.ValueType.GetHashCode()

</div>

### ToString()

<div class="markdown level1 summary">

Returns a string that represents the current MetricId.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public override string ToString()
```

#### Returns

| Type          | Description                                    |
|---------------|------------------------------------------------|
| System.String | A string that represents the current MetricId. |

#### Overrides

<div>

System.ValueType.ToString()

</div>

## Operators 

### Implicit(MetricId to String)

<div class="markdown level1 summary">

Implicit operator to convert to string.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public static implicit operator string (MetricId metricId)
```

#### Parameters

| Type     | Name     | Description                        |
|----------|----------|------------------------------------|
| MetricId | metricId | The MetricId to convert to string. |

#### Returns

| Type          | Description               |
|---------------|---------------------------|
| System.String | The name of the MetricId. |

### Implements

<div>

System.IEquatable\<T\>

</div>
