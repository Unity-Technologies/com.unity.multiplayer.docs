---  
id: Unity.Networking.Transport.NetworkInterfaceEndPoint  
title: Unity.Networking.Transport.NetworkInterfaceEndPoint  
---

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

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

    public struct NetworkInterfaceEndPoint

## Fields

### data

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte *data

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.Byte\* |             |

### dataLength

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public int dataLength

#### Field Value

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

## Properties 

### IsValid

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool IsValid { get; }

#### Property Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

## Methods 

### Equals(Object)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override bool Equals(object other)

#### Parameters

| Type          | Name  | Description |
|---------------|-------|-------------|
| System.Object | other |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Overrides

<div>

System.ValueType.Equals(System.Object)

</div>

### GetHashCode()

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public override int GetHashCode()

#### Returns

| Type         | Description |
|--------------|-------------|
| System.Int32 |             |

#### Overrides

<div>

System.ValueType.GetHashCode()

</div>

## Operators 

### Equality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool operator ==(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)

#### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Inequality(NetworkInterfaceEndPoint, NetworkInterfaceEndPoint)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public static bool operator !=(NetworkInterfaceEndPoint lhs, NetworkInterfaceEndPoint rhs)

#### Parameters

| Type                     | Name | Description |
|--------------------------|------|-------------|
| NetworkInterfaceEndPoint | lhs  |             |
| NetworkInterfaceEndPoint | rhs  |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |
