---
id: Unity.Netcode.NetworkSpawnManager
title: Unity.Netcode.NetworkSpawnManager
---

# Class NetworkSpawnManager


Class that handles object spawning







##### Inheritance


System.Object




NetworkSpawnManager






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Netcode

###### **Assembly**: MLAPI.dll

##### Syntax


``` lang-csharp
public class NetworkSpawnManager
```



### Fields

#### OwnershipToObjectsTable


Use to get all NetworkObjects owned by a client Ownership to Objects
Table Format: \[ClientId\]\[NetworkObjectId\]\[NetworkObject\] Server:
Keeps track of all clients' ownership Client: Keeps track of only its
ownership






##### Declaration


``` lang-csharp
public readonly Dictionary<ulong, Dictionary<ulong, NetworkObject>> OwnershipToObjectsTable
```



##### Field Value

| Type                                                                                                                          | Description |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, System.Collections.Generic.Dictionary\<System.UInt64, NetworkObject\>\> |             |

#### SpawnedObjects


The currently spawned objects






##### Declaration


``` lang-csharp
public readonly Dictionary<ulong, NetworkObject> SpawnedObjects
```



##### Field Value

| Type                                                                  | Description |
|-----------------------------------------------------------------------|-------------|
| System.Collections.Generic.Dictionary\<System.UInt64, NetworkObject\> |             |

#### SpawnedObjectsList


A list of the spawned objects






##### Declaration


``` lang-csharp
public readonly HashSet<NetworkObject> SpawnedObjectsList
```



##### Field Value

| Type                                                | Description |
|-----------------------------------------------------|-------------|
| System.Collections.Generic.HashSet\<NetworkObject\> |             |

### Properties

#### NetworkManager


Gets the NetworkManager associated with this SpawnManager.






##### Declaration


``` lang-csharp
public NetworkManager NetworkManager { get; }
```



##### Property Value

| Type           | Description |
|----------------|-------------|
| NetworkManager |             |

### Methods

#### GetClientOwnedObjects(UInt64)


Returns a list of all NetworkObjects that belong to a client.






##### Declaration


``` lang-csharp
public List<NetworkObject> GetClientOwnedObjects(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                   |
|---------------|----------|-------------------------------|
| System.UInt64 | clientId | the client's id LocalClientId |

##### Returns

| Type                                             | Description                                            |
|--------------------------------------------------|--------------------------------------------------------|
| System.Collections.Generic.List\<NetworkObject\> | returns the list of NetworkObjects owned by the client |

#### GetLocalPlayerObject()


Returns the local player object or null if one does not exist






##### Declaration


``` lang-csharp
public NetworkObject GetLocalPlayerObject()
```



##### Returns

| Type          | Description                                           |
|---------------|-------------------------------------------------------|
| NetworkObject | The local player object or null if one does not exist |

#### GetPlayerNetworkObject(UInt64)


Returns the player object with a given clientId or null if one does not
exist. This is only valid server side.






##### Declaration


``` lang-csharp
public NetworkObject GetPlayerNetworkObject(ulong clientId)
```



##### Parameters

| Type          | Name     | Description                         |
|---------------|----------|-------------------------------------|
| System.UInt64 | clientId | the client identifier of the player |

##### Returns

| Type          | Description                                                           |
|---------------|-----------------------------------------------------------------------|
| NetworkObject | The player object with a given clientId or null if one does not exist |



