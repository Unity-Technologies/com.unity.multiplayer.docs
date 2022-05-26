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

System.Object

</div>

<div class="level1">

NetworkPrefabHandler

</div>

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

System.Object.Equals(System.Object)

</div>

<div>

System.Object.Equals(System.Object, System.Object)

</div>

<div>

System.Object.GetHashCode()

</div>

<div>

System.Object.GetType()

</div>

<div>

System.Object.MemberwiseClone()

</div>

<div>

System.Object.ReferenceEquals(System.Object, System.Object)

</div>

<div>

System.Object.ToString()

</div>

</div>

 

##### Syntax

<div class="codewrapper">

``` lang-csharp
public class NetworkPrefabHandler
```

</div>

### Methods

#### AddHandler(GameObject, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a to register a class that implements the
INetworkPrefabInstanceHandler interface with the NetworkPrefabHandler

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool AddHandler(GameObject networkPrefabAsset, INetworkPrefabInstanceHandler instanceHandler)
```

</div>

##### Parameters

| Type                          | Name               | Description                                                                        |
|-------------------------------|--------------------|------------------------------------------------------------------------------------|
| GameObject                    | networkPrefabAsset | the of the network prefab asset to be overridden                                   |
| INetworkPrefabInstanceHandler | instanceHandler    | class that implements the INetworkPrefabInstanceHandler interface to be registered |

##### Returns

| Type           | Description                                  |
|----------------|----------------------------------------------|
| System.Boolean | true (registered) false (failed to register) |

#### AddHandler(UInt32, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a Unity.Netcode.NetworkObject.GlobalObjectIdHash to register a class
that implements the INetworkPrefabInstanceHandler interface with the
NetworkPrefabHandler

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool AddHandler(uint globalObjectIdHash, INetworkPrefabInstanceHandler instanceHandler)
```

</div>

##### Parameters

| Type                          | Name               | Description                                                                                           |
|-------------------------------|--------------------|-------------------------------------------------------------------------------------------------------|
| System.UInt32                 | globalObjectIdHash | the Unity.Netcode.NetworkObject.GlobalObjectIdHash value of the network prefab asset being overridden |
| INetworkPrefabInstanceHandler | instanceHandler    | a class that implements the INetworkPrefabInstanceHandler interface                                   |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### AddHandler(NetworkObject, INetworkPrefabInstanceHandler)

<div class="markdown level1 summary">

Use a NetworkObject to register a class that implements the
INetworkPrefabInstanceHandler interface with the NetworkPrefabHandler

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool AddHandler(NetworkObject prefabAssetNetworkObject, INetworkPrefabInstanceHandler instanceHandler)
```

</div>

##### Parameters

| Type                          | Name                     | Description                                                                            |
|-------------------------------|--------------------------|----------------------------------------------------------------------------------------|
| NetworkObject                 | prefabAssetNetworkObject | the NetworkObject of the network prefab asset to be overridden                         |
| INetworkPrefabInstanceHandler | instanceHandler          | the class that implements the INetworkPrefabInstanceHandler interface to be registered |

##### Returns

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### RegisterHostGlobalObjectIdHashValues(GameObject, List\<GameObject\>)

<div class="markdown level1 summary">

HOST ONLY! Since a host is unique and is considered both a client and a
server, for each source NetworkPrefab you must manually register all
potential target overrides that have the NetworkObject component.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public void RegisterHostGlobalObjectIdHashValues(GameObject sourceNetworkPrefab, List<GameObject> networkPrefabOverrides)
```

</div>

##### Parameters

| Type                                          | Name                   | Description                                                                   |
|-----------------------------------------------|------------------------|-------------------------------------------------------------------------------|
| GameObject                                    | sourceNetworkPrefab    | source NetworkPrefab to be overridden                                         |
| System.Collections.Generic.List\<GameObject\> | networkPrefabOverrides | one or more NetworkPrefabs could be used to override the source NetworkPrefab |

#### RemoveHandler(GameObject)

<div class="markdown level1 summary">

Use the of the overridden network prefab asset to remove a registered
class that implements the INetworkPrefabInstanceHandler interface.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool RemoveHandler(GameObject networkPrefabAsset)
```

</div>

##### Parameters

| Type       | Name               | Description                                           |
|------------|--------------------|-------------------------------------------------------|
| GameObject | networkPrefabAsset | of the network prefab asset that was being overridden |

##### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (success) or false (failure) |

#### RemoveHandler(UInt32)

<div class="markdown level1 summary">

Use the Unity.Netcode.NetworkObject.GlobalObjectIdHash of the overridden
network prefab asset to remove a registered class that implements the
INetworkPrefabInstanceHandler interface.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool RemoveHandler(uint globalObjectIdHash)
```

</div>

##### Parameters

| Type          | Name               | Description                                                                                          |
|---------------|--------------------|------------------------------------------------------------------------------------------------------|
| System.UInt32 | globalObjectIdHash | Unity.Netcode.NetworkObject.GlobalObjectIdHash of the source NetworkPrefab that was being overridden |

##### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (success) or false (failure) |

#### RemoveHandler(NetworkObject)

<div class="markdown level1 summary">

Use the NetworkObject of the overridden network prefab asset to remove a
registered class that implements the INetworkPrefabInstanceHandler
interface.

</div>

<div class="markdown level1 conceptual">

</div>

##### Declaration

<div class="codewrapper">

``` lang-csharp
public bool RemoveHandler(NetworkObject networkObject)
```

</div>

##### Parameters

| Type          | Name          | Description                                                         |
|---------------|---------------|---------------------------------------------------------------------|
| NetworkObject | networkObject | NetworkObject of the source NetworkPrefab that was being overridden |

##### Returns

| Type           | Description                       |
|----------------|-----------------------------------|
| System.Boolean | true (success) or false (failure) |

 
