---
id: object-visibility
title: Object Visibility
sidebar_label: Object Visibility
---

Starting with MLAPI version 6.0.0, clients have no explicit knowledge of all objects or clients that are connected to the server.

This allows you to only show a subset of objects to any client at any given time. To allow this, a visibility API was introduced to the `NetworkObject` component and consists of four parts.

The first part is a callback that gets invoked when new clients connect or when the object is about to get spawned. It asks whether the object should be shown to a specific client. If you do not register this callback, it will default to true, meaning visible.

```csharp
NetworkObject netObject = GetComponent<NetworkObject>();
netObject.CheckObjectVisibility = ((clientId) => {
    // return true to show the object, return false to hide it


    if (Vector3.Distance(NetworkManager.Singleton.ConnectedClients[clientId].PlayerObject.transform.position, transform.position) < 5)
    {
        // Only show the object to players that are within 5 meters. Note that this has to be rechecked by your own code
        // If you want it to update as the client and objects distance change.
        // This callback is usually only called once per client
        return true;
    }
    else
    {
        // Dont show this object
        return false;
    }
});
```

To change the visibility during the game, you can use the following APIs:

```csharp
NetworkObject netObject = GetComponent<NetworkObject>();
netObject.NetworkShow(clientIdToShowTo);
```

```csharp
NetworkObject netObject = GetComponent<NetworkObject>();
netObject.NetworkHide(clientIdToHideFrom);
```
