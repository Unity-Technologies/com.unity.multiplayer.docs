---

id: MLAPI.Connection.NetworkedClient

title: MLAPI.Connection.NetworkedClient

---

Class NetworkedClient

<div class="markdown level0 summary" markdown="1">

A NetworkedClient

</div>

<div class="markdown level0 conceptual" markdown="1">

</div>

<div class="inheritance" markdown="1">

##### Inheritance

<div class="level0" markdown="1">

System.Dynamic.ExpandoObject

</div>

<div class="level1" markdown="1">

System.Dynamic.ExpandoObject

</div>

</div>

<div class="inheritedMembers" markdown="1">

##### Inherited Members

<div markdown="1">

Object.Equals(Object)

</div>

<div markdown="1">

Object.Equals(Object, Object)

</div>

<div markdown="1">

Object.GetHashCode()

</div>

<div markdown="1">

Object.GetType()

</div>

<div markdown="1">

Object.MemberwiseClone()

</div>

<div markdown="1">

Object.ReferenceEquals(Object, Object)

</div>

<div markdown="1">

Object.ToString()

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax [MLAPI_Connection_NetworkedClient_syntax]

    public class NetworkedClient

## Fields

### AesKey [MLAPI_Connection_NetworkedClient_AesKey]

<div class="markdown level1 summary" markdown="1">

The encryption key used for this client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public byte[] AesKey

#### Field Value [field-value]

| Type                                      | Description |
|-------------------------------------------|-------------|
| <span class="xref">System.Byte</span>\[\] |             |

### ClientId [MLAPI_Connection_NetworkedClient_ClientId]

<div class="markdown level1 summary" markdown="1">

The Id of the NetworkedClient

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public ulong ClientId

#### Field Value [field-value-1]

| Type                                    | Description |
|-----------------------------------------|-------------|
| <span class="xref">System.UInt64</span> |             |

### OwnedObjects [MLAPI_Connection_NetworkedClient_OwnedObjects]

<div class="markdown level1 summary" markdown="1">

The NetworkedObject's owned by this Client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public readonly List<NetworkedObject> OwnedObjects

#### Field Value [field-value-2]

| Type                                                                         | Description |
|------------------------------------------------------------------------------|-------------|
| <span class="xref">System.Collections.Generic.List</span>\<NetworkedObject\> |             |

### PlayerObject [MLAPI_Connection_NetworkedClient_PlayerObject]

<div class="markdown level1 summary" markdown="1">

The PlayerObject of the Client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-3]

    public NetworkedObject PlayerObject

#### Field Value [field-value-3]

| Type            | Description |
|-----------------|-------------|
| NetworkedObject |             |
