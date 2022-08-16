---
id: Unity.Multiplayer.Tools.NetStats.MetricId
title: Unity.Multiplayer.Tools.NetStats.MetricId
---

# Struct MetricId

Wrapper around an enum with the MetricTypeEnumAttribute. The struct
provide a way to create metric that can be used with multiplayer tools.

##### Implements

System.IEquatable\<MetricId\>

##### Inherited Members

System.Object.Equals(System.Object, System.Object)

System.Object.GetType()

System.Object.ReferenceEquals(System.Object, System.Object)

###### **Namespace**: Unity.Multiplayer.Tools.NetStats

###### **Assembly**: Tools.dll

##### Syntax

``` lang-csharp
[Serializable]
public struct MetricId : IEquatable<MetricId>
```

### Methods

#### Create\<T\>(T)

Static function to create a MetricId.

##### Declaration

``` lang-csharp
public static MetricId Create<T>(T value)
    where T : struct, IConvertible
```

##### Parameters

| Type | Name  | Description                |
|------|-------|----------------------------|
| T    | value | Enum value for the metric. |

##### Returns

| Type     | Description |
|----------|-------------|
| MetricId |             |

##### Type Parameters

| Name | Description                              |
|------|------------------------------------------|
| T    | An enum with the MetricTypeEnumAttribute |

#### Equals(Object)

Determines whether the specified object is equal to the current object.

##### Declaration

``` lang-csharp
public override bool Equals(object obj)
```

##### Parameters

| Type          | Name | Description                                     |
|---------------|------|-------------------------------------------------|
| System.Object | obj  | The object to compare with the current object.. |

##### Returns

| Type           | Description                                                                    |
|----------------|--------------------------------------------------------------------------------|
| System.Boolean | true if the specified object is equal to the current object; otherwise, false. |

##### Overrides

System.ValueType.Equals(System.Object)

#### Equals(MetricId)

Determines whether the specified MetricId is equal to the current
MetricId.

##### Declaration

``` lang-csharp
public bool Equals(MetricId other)
```

##### Parameters

| Type     | Name  | Description                                        |
|----------|-------|----------------------------------------------------|
| MetricId | other | The MetricId to compare with the current MetricId. |

##### Returns

| Type           | Description                                                                        |
|----------------|------------------------------------------------------------------------------------|
| System.Boolean | true if the specified MetricId is equal to the current MetricId; otherwise, false. |

#### GetHashCode()

Serves as the default hash function.

##### Declaration

``` lang-csharp
public override int GetHashCode()
```

##### Returns

| Type         | Description                           |
|--------------|---------------------------------------|
| System.Int32 | A hash code for the current MetricId. |

##### Overrides

System.ValueType.GetHashCode()

#### ToString()

Returns a string that represents the current MetricId.

##### Declaration

``` lang-csharp
public override string ToString()
```

##### Returns

| Type          | Description                                    |
|---------------|------------------------------------------------|
| System.String | A string that represents the current MetricId. |

##### Overrides

System.ValueType.ToString()

### Operators

#### Implicit(MetricId to String)

Implicit operator to convert to string.

##### Declaration

``` lang-csharp
public static implicit operator string (MetricId metricId)
```

##### Parameters

| Type     | Name     | Description                        |
|----------|----------|------------------------------------|
| MetricId | metricId | The MetricId to convert to string. |

##### Returns

| Type          | Description               |
|---------------|---------------------------|
| System.String | The name of the MetricId. |

### Implements

System.IEquatable\<T\>