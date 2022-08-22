---
id: Unity.Netcode.NetworkManager.ConnectionApprovalResponse
title: Unity.Netcode.NetworkManager.ConnectionApprovalResponse
---

# Class NetworkManager.ConnectionApprovalResponse


Connection Approval Response







##### Inheritance


System.Object




NetworkManager.ConnectionApprovalResponse






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
public class ConnectionApprovalResponse
```



### Fields

#### Approved


Whether or not the client was approved






##### Declaration


``` lang-csharp
public bool Approved
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### CreatePlayerObject


If true, a player object will be created. Otherwise the client will have
no object.






##### Declaration


``` lang-csharp
public bool CreatePlayerObject
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### Pending


If the Approval decision cannot be made immediately, the client code can
set Pending to true, keep a reference to the ConnectionApprovalResponse
object and write to it later. Client code must exercise care to setting
all the members to the value it wants before marking Pending to false,
to indicate completion. If the field is set as Pending = true, we'll
monitor the object until it gets set to not pending anymore and use the
parameters then.






##### Declaration


``` lang-csharp
public bool Pending
```



##### Field Value

| Type           | Description |
|----------------|-------------|
| System.Boolean |             |

#### PlayerPrefabHash


The prefabHash to use for the client. If createPlayerObject is false,
this is ignored. If playerPrefabHash is null, the default player prefab
is used.






##### Declaration


``` lang-csharp
public uint? PlayerPrefabHash
```



##### Field Value

| Type                             | Description |
|----------------------------------|-------------|
| System.Nullable\<System.UInt32\> |             |

#### Position


The position to spawn the client at. If null, the prefab position is
used.






##### Declaration


``` lang-csharp
public Vector3? Position
```



##### Field Value

| Type                       | Description |
|----------------------------|-------------|
| System.Nullable\<Vector3\> |             |

#### Rotation


The rotation to spawn the client with. If null, the prefab position is
used.






##### Declaration


``` lang-csharp
public Quaternion? Rotation
```



##### Field Value

| Type                          | Description |
|-------------------------------|-------------|
| System.Nullable\<Quaternion\> |             |



