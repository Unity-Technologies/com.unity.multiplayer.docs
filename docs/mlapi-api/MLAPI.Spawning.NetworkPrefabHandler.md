---  
id: MLAPI.Spawning.NetworkPrefabHandler  
title: MLAPI.Spawning.NetworkPrefabHandler  
---

<div class="markdown level0 summary">

Primary handler to add or remove customized spawn and destroy handlers
for a network prefab (i.e. a prefab with a NetworkObject component)

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

    public class NetworkPrefabHandler

## Methods 

### AddHandler(NetworkObject, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a NetworkObject to add a INetworkPrefabInstanceHandler derived class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool AddHandler(NetworkObject prefabAssetNetworkObject, INetworkPrefabInstanceHandler instanceHandler)

#### Parameters

| Type                          | Name                     | Description |
|-------------------------------|--------------------------|-------------|
| NetworkObject                 | prefabAssetNetworkObject |             |
| INetworkPrefabInstanceHandler | instanceHandler          |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### AddHandler(UInt32, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a networkPrefabHash(GlobalObjectIdHash) to add a
INetworkPrefabInstanceHandler derived class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool AddHandler(uint networkPrefabHash, INetworkPrefabInstanceHandler instanceHandler)

#### Parameters

| Type                          | Name              | Description |
|-------------------------------|-------------------|-------------|
| System.UInt32                 | networkPrefabHash |             |
| INetworkPrefabInstanceHandler | instanceHandler   |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### AddHandler(GameObject, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a GameObject to add a INetworkPrefabInstanceHandler derived class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool AddHandler(GameObject networkPrefabAsset, INetworkPrefabInstanceHandler instanceHandler)

#### Parameters

| Type                          | Name               | Description |
|-------------------------------|--------------------|-------------|
| UnityEngine.GameObject        | networkPrefabAsset |             |
| INetworkPrefabInstanceHandler | instanceHandler    |             |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RemoveHandler(NetworkObject)

<div class="markdown level1 summary">

Use the NetworkObject of the network prefab asset to remove a
INetworkPrefabInstanceHandler derived class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool RemoveHandler(NetworkObject networkObject)

#### Parameters

| Type          | Name          | Description |
|---------------|---------------|-------------|
| NetworkObject | networkObject |             |

#### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true or false |

### RemoveHandler(UInt32)

<div class="markdown level1 summary">

Use the networkPrefabHash(GlobalObjectIdHash) of the network prefab
asset to remove a INetworkPrefabInstanceHandler derived class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool RemoveHandler(uint networkPrefabHash)

#### Parameters

| Type          | Name              | Description |
|---------------|-------------------|-------------|
| System.UInt32 | networkPrefabHash |             |

#### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true or false |

### RemoveHandler(GameObject)

<div class="markdown level1 summary">

Use the GameObject of the network prefab asset to remove a
INetworkPrefabInstanceHandler derived class

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public bool RemoveHandler(GameObject networkPrefabAsset)

#### Parameters

| Type                   | Name               | Description |
|------------------------|--------------------|-------------|
| UnityEngine.GameObject | networkPrefabAsset |             |

#### Returns

| Type           | Description   |
|----------------|---------------|
| System.Boolean | true or false |
