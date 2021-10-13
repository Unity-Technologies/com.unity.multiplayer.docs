---  
id: MLAPI.SnapshotSystem  
title: MLAPI.SnapshotSystem  
---

<div class="markdown level0 summary">

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

<div classs="implements">

##### Implements

<div>

INetworkUpdateSystem

</div>

<div>

System.IDisposable

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

    public class SnapshotSystem : INetworkUpdateSystem, IDisposable

## Constructors 

### SnapshotSystem()

<div class="markdown level1 summary">

Constructor

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public SnapshotSystem()

## Methods 

### Dispose()

<div class="markdown level1 summary">

Dispose

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Dispose()

### NetworkUpdate(NetworkUpdateStage)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void NetworkUpdate(NetworkUpdateStage updateStage)

#### Parameters

| Type               | Name        | Description |
|--------------------|-------------|-------------|
| NetworkUpdateStage | updateStage |             |

### ReadSnapshot(Stream)

<div class="markdown level1 summary">

Entry point when a Snapshot is received This is where we read and store
the received snapshot

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void ReadSnapshot(Stream snapshotStream)

#### Parameters

| Type             | Name           | Description             |
|------------------|----------------|-------------------------|
| System.IO.Stream | snapshotStream | The stream to read from |

### Store(UInt64, Int32, Int32, INetworkVariable)

<div class="markdown level1 summary">

Called by the rest of MLAPI when a NetworkVariable changed and need to
go in our snapshot Might not happen for all variable on every frame.
Might even happen more than once.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public void Store(ulong networkObjectId, int behaviourIndex, int variableIndex, INetworkVariable networkVariable)

#### Parameters

| Type             | Name            | Description                                                   |
|------------------|-----------------|---------------------------------------------------------------|
| System.UInt64    | networkObjectId |                                                               |
| System.Int32     | behaviourIndex  |                                                               |
| System.Int32     | variableIndex   |                                                               |
| INetworkVariable | networkVariable | The NetworkVariable to write, or rather, its INetworkVariable |

### Implements

<div>

INetworkUpdateSystem

</div>

<div>

System.IDisposable

</div>

### Extension Methods

<div>

NetworkUpdateLoop.RegisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.RegisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)

</div>

<div>

NetworkUpdateLoop.UnregisterAllNetworkUpdates(INetworkUpdateSystem)

</div>

<div>

NetworkUpdateLoop.UnregisterNetworkUpdate(INetworkUpdateSystem,
NetworkUpdateStage)

</div>
