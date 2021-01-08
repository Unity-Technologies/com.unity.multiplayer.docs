---
id: troubleshooting
title: Troubleshooting
---

See the following information for common troubleshooting for MLAPI.

## NullReferenceException when trying to start a server/host/client

**Issue:** When trying to start a server, host, or client by executing one of these lines of code:

```csharp
NetworkingManager.Singleton.StartServer()
NetworkingManager.Singleton.StartHost()
NetworkingManager.Singleton.StartClient()
```

The following exception is thrown:

```csharp
NullReferenceException: Object reference not set to an instance of an object
```

**Solution:** You most likely forgot to add the `NetworkingManager` component to a game object in your scene.

## NullReferenceException when trying to send an RPC to the server

**Issue:** When the client tries to run `InvokeServerRpc`, the following exception is thrown:

```csharp
NullReferenceException: Object reference not set to an instance of an object
```

**Solution:** You most likely forgot to `Spawn()` your object. Run `Spawn()` on your `NetworkedObject` component as the server to fix this issue.
