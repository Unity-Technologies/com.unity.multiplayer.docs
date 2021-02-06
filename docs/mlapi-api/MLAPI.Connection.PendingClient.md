---

id: MLAPI.Connection.PendingClient

title: MLAPI.Connection.PendingClient

---

Class PendingClient

<div class="markdown level0 summary" markdown="1">

A class representing a client that is currently in the process of
connecting

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

##### Syntax [MLAPI_Connection_PendingClient_syntax]

    public class PendingClient

## Fields

### AesKey [MLAPI_Connection_PendingClient_AesKey]

<div class="markdown level1 summary" markdown="1">

The current AesKey

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration]

    public byte[] AesKey

#### Field Value [field-value]

| Type            | Description |
|-----------------|-------------|
| System.Byte\[\] |             |

### ClientId [MLAPI_Connection_PendingClient_ClientId]

<div class="markdown level1 summary" markdown="1">

The ClientId of the client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-1]

    public ulong ClientId

#### Field Value [field-value-1]

| Type          | Description |
|---------------|-------------|
| System.UInt64 |             |

### ConnectionState [MLAPI_Connection_PendingClient_ConnectionState]

<div class="markdown level1 summary" markdown="1">

The state of the connection process for the client

</div>

<div class="markdown level1 conceptual" markdown="1">

</div>

#### Declaration [declaration-2]

    public PendingClient.State ConnectionState

#### Field Value [field-value-2]

| Type                | Description |
|---------------------|-------------|
| PendingClient.State |             |
