---  
id: Unity.Netcode.NetworkPrefabHandler  
title: Unity.Netcode.NetworkPrefabHandler  
---

<div class="markdown level0 summary">

Primary handler to add or remove customized spawn and destroy handlers
for a network prefab (i.e. a prefab with a NetworkObject component)
Register custom prefab handlers by implementing the
INetworkPrefabInstanceHandler interface.

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

``` lang-csharp
public class NetworkPrefabHandler
```

## 

### AddHandler(GameObject, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a to register a class that implements the
INetworkPrefabInstanceHandler interface with the NetworkPrefabHandler

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AddHandler(GameObject networkPrefabAsset, INetworkPrefabInstanceHandler instanceHandler)
```

#### Parameters

| Type                          | Name               | Description                                                                        |
|-------------------------------|--------------------|------------------------------------------------------------------------------------|
| GameObject                    | networkPrefabAsset | the of the network prefab asset to be overridden                                   |
| INetworkPrefabInstanceHandler | instanceHandler    | class that implements the INetworkPrefabInstanceHandler interface to be registered |

#### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | true (registered) false (failed to register) |

### AddHandler(UInt32, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a Unity.Netcode.NetworkObject.GlobalObjectIdHash to register a class
that implements the INetworkPrefabInstanceHandler interface with the
NetworkPrefabHandler

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AddHandler(uint globalObjectIdHash, INetworkPrefabInstanceHandler instanceHandler)
```

#### Parameters

| Type                          | Name               | Description                                                                                           |
|-------------------------------|--------------------|-------------------------------------------------------------------------------------------------------|
| System.UInt32                 | globalObjectIdHash | the Unity.Netcode.NetworkObject.GlobalObjectIdHash value of the network prefab asset being overridden |
| INetworkPrefabInstanceHandler | instanceHandler    | a class that implements the INetworkPrefabInstanceHandler interface                                   |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### AddHandler(NetworkObject, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a NetworkObject to register a class that implements the
INetworkPrefabInstanceHandler interface with the NetworkPrefabHandler

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool AddHandler(NetworkObject prefabAssetNetworkObject, INetworkPrefabInstanceHandler instanceHandler)
```

#### Parameters

| Type                          | Name                     | Description                                                                            |
|-------------------------------|--------------------------|----------------------------------------------------------------------------------------|
| NetworkObject                 | prefabAssetNetworkObject | the NetworkObject of the network prefab asset to be overridden                         |
| INetworkPrefabInstanceHandler | instanceHandler          | the class that implements the INetworkPrefabInstanceHandler interface to be registered |

#### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

### RegisterHostGlobalObjectIdHashValues(GameObject, List\&lt;GameObject&gt;)

<div class="markdown level1 summary">

HOST ONLY! Since a host is unique and is considered both a client and a
server, for each source NetworkPrefab you must manually register all
potential target overrides that have the NetworkObject component.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public void RegisterHostGlobalObjectIdHashValues(GameObject sourceNetworkPrefab, List<GameObject> networkPrefabOverrides)
```

#### Parameters

| Type                                          | Name                   | Description                                                                   |
|-----------------------------------------------|------------------------|-------------------------------------------------------------------------------|
| GameObject                                    | sourceNetworkPrefab    | source NetworkPrefab to be overridden                                         |
| System.Collections.Generic.List\&lt;GameObject&gt; | networkPrefabOverrides | one or more NetworkPrefabs could be used to override the source NetworkPrefab |

### RemoveHandler(GameObject)

<div class="markdown level1 summary">

Use the of the overridden network prefab asset to remove a registered
class that implements the INetworkPrefabInstanceHandler interface.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool RemoveHandler(GameObject networkPrefabAsset)
```

#### Parameters

| Type       | Name               | Description                                           |
|------------|--------------------|-------------------------------------------------------|
| GameObject | networkPrefabAsset | of the network prefab asset that was being overridden |

#### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (success) or false (failure) |

### RemoveHandler(UInt32)

<div class="markdown level1 summary">

Use the Unity.Netcode.NetworkObject.GlobalObjectIdHash of the overridden
network prefab asset to remove a registered class that implements the
INetworkPrefabInstanceHandler interface.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool RemoveHandler(uint globalObjectIdHash)
```

#### Parameters

| Type          | Name               | Description                                                                                          |
|---------------|--------------------|------------------------------------------------------------------------------------------------------|
| System.UInt32 | globalObjectIdHash | Unity.Netcode.NetworkObject.GlobalObjectIdHash of the source NetworkPrefab that was being overridden |

#### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (success) or false (failure) |

### RemoveHandler(NetworkObject)

<div class="markdown level1 summary">

Use the NetworkObject of the overridden network prefab asset to remove a
registered class that implements the INetworkPrefabInstanceHandler
interface.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
public bool RemoveHandler(NetworkObject networkObject)
```

#### Parameters

| Type          | Name          | Description                                                         |
|---------------|---------------|---------------------------------------------------------------------|
| NetworkObject | networkObject | NetworkObject of the source NetworkPrefab that was being overridden |

#### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (success) or false (failure) |
