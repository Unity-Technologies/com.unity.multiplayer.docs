---
id: object-ownership
title: Object Ownership
sidebar_label: Object Ownership
---

Each NetworkedObject is owned by a specific client. This can be any client or the server.

Give ownership of an object using the following:

```csharp
GetComponent<NetworkedObject>().ChangeOwnership(clientId);
```

The default behavior is that an object is owned by the server. To give ownership back to the server, you can use the `RemoveOwnership` call:

```csharp
GetComponent<NetworkedObject>().RemoveOwnership();
```

When you are owner of an object, you can check for `IsOwner` in any NetworkedBehaviour, similar to how player objects can do `IsLocalPlayer`.

## Object destruction

When a client disconnects, all objects owned by that client will be destroyed. If you don't want that (for example, if you want the objects to be dropped), you can remove ownership just before they are destroyed.

Simply remove the ownership in the OnDestroy method on the player object that owns the object and remove ownership there. That will be handled before the owned object is destroyed.
