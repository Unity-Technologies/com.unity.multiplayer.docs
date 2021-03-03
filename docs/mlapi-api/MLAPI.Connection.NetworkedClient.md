---  
id: MLAPI.Connection.NetworkedClient  
title: MLAPI.Connection.NetworkedClient  
---

<div class="markdown level0 summary">

A NetworkedClient

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritance">

##### Inheritance

<div class="level0">

System.Dynamic.ExpandoObject

</div>

<div class="level1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

Object.Equals(Object)

</div>

<div>

Object.Equals(Object, Object)

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

<div>

Object.ReferenceEquals(Object, Object)

</div>

<div>

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public class NetworkedClient

## Fields

### AesKey

<div class="markdown level1 summary">

The encryption key used for this client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public byte[] AesKey

#### Field Value

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### ClientId

<div class="markdown level1 summary">

The Id of the NetworkedClient

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public ulong ClientId

#### Field Value

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### OwnedObjects

<div class="markdown level1 summary">

The NetworkedObject's owned by this Client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public readonly List<NetworkedObject> OwnedObjects

#### Field Value

| Type                                                   | Description |
|--------------------------------------------------------|-------------|
| System.Collections.Generic.List&lt;NetworkedObject&gt; |             |

### PlayerObject

<div class="markdown level1 summary">

The PlayerObject of the Client

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkedObject PlayerObject

#### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkedObject |             |
