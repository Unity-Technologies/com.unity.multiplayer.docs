---
id: Unity.Netcode.NetworkManager.ConnectionApprovalResponse
title: Unity.Netcode.NetworkManager.ConnectionApprovalResponse
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:35:38 pm
---

<div class="markdown level0 summary">

Connection Approval Response

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

## Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

## Inherited Members

<div>

Object.ToString()

</div>

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.GetHashCode()

</div>

<div>

Object.GetType()

</div>

<div>

Object.MemberwiseClone()

</div>

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public class ConnectionApprovalResponse
```

## Fields

### Approved

<div class="markdown level1 summary">

Whether or not the client was approved

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Approved
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### CreatePlayerObject

<div class="markdown level1 summary">

If true, a player object will be created. Otherwise the client will have no object.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool CreatePlayerObject
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### Pending

<div class="markdown level1 summary">

If the Approval decision cannot be made immediately, the client code can set Pending to true, keep a reference to the ConnectionApprovalResponse object and write to it later. Client code must exercise care to setting all the members to the value it wants before marking Pending to false, to indicate completion. If the field is set as Pending = true, we'll monitor the object until it gets set to not pending anymore and use the parameters then.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool Pending
```

#### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### PlayerPrefabHash

<div class="markdown level1 summary">

The prefabHash to use for the client. If createPlayerObject is false, this is ignored. If playerPrefabHash is null, the default player prefab is used.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public uint? PlayerPrefabHash
```

#### Field Value

| Type                             | Description |
|----------------------------------|-------------|
| System.Nullable\<System.UInt32\> |             |

### Position

<div class="markdown level1 summary">

The position to spawn the client at. If null, the prefab position is used.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public Vector3? Position
```

#### Field Value

| Type                       | Description |
|----------------------------|-------------|
| System.Nullable\<Vector3\> |             |

### Reason

<div class="markdown level1 summary">

Optional reason. If Approved is false, this reason will be sent to the client so they know why they were not approved.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public string Reason
```

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.String |             |

### Rotation

<div class="markdown level1 summary">

The rotation to spawn the client with. If null, the prefab position is used.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public Quaternion? Rotation
```

#### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| System.Nullable\<Quaternion\> |             |
