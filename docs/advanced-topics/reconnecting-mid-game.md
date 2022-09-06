---
id: reconnecting-mid-game
title: Reconnecting Mid-Game
---

In a multiplayer game, clients may get disconnected from the server for a variety of reasons (network issues, application/device crashes, etc). For those reasons, you may want to allow your players to reconnect to the game.

## Considerations

Review the following considerations before allowing clients to reconnect in the middle of an active game:

- Clients may have specific state and in-game data associated with them. If you want them to reconnect with that same state and data, implement a mechanism to maintain the association of state and data with the client for when they reconnect. See [Session Management](session-management.md) for more information.
- Depending on your game's requirements, make sure the client's state is properly reset and ready to connect before attempting reconnection. This may require resetting some external services.
- When using [scene management](../basics/scenemanagement/scene-management-overview.md) and multiple additive scenes, there is a specific case to keep in mind. During the synchronization process, which launches when connecting to a game, if the client's active main scene is the same as the server's, it will not initiate a scene load in single mode for that scene. Instead, it will load all additive scenes that are currently loaded on the server. This means that if the client has additive scenes currently loaded, it will not unload them like it would if the client's main scene was different than the server's.
  - For example, if during a game, the server loads **main scene A**, then additively loads scenes **B** and **C**, the client has all three loaded. If the client disconnects and reconnects without changing scenes, the scene synchronization process recognizes that **main scene A** is already loaded on the client, and then simply proceeds to load the server's additive scenes. In that case, the client loads the scenes **B** and **C** a second time and then has two copies of those scenes loaded.

  However, if, while the client is disconnected, the server loads or unloads a scene additively, there is also a mismatch between the scenes loaded on the client and on the server. For example, if the server unloads scene **C** and loads scene **D**, the client loads scene **D** when synchronizing, but doesn't unload scene C, so the client has loaded scenes **A**, **B** (twice), **C**, and **D**, while the server only has loaded scenes **A**, **B**, and **D**.
  - If you want to avoid this behavior, you can
    - Load a different scene in single mode on the client when disconnecting
    - Unload additive scenes on the client when disconnecting
    - Unload additive scenes on the client when reconnecting
    - Use the `NetworkSceneManager.VerifySceneBeforeLoading` callback to prevent loading scenes already loaded on the client. However, this will not handle unloading scenes that were unloaded by the server between the time the client disconnected and reconnected.


## Automatic reconnection

For a smoother experience for your players, clients can automatically attempt to reconnect to a game when connection is lost unexpectedly.

To implement automatic reconnection:
- Define what will trigger the reconnection process and when it will start.
  - For example, you can use the `NetworkManager.OnClientDisconnectCallback` callback, or some other unique event depending on your game.
- Ensure the `NetworkManager` properly shuts down before attempting any reconnection.
  - You can use the `NetworkManager.ShutdownInProgress` property to manage this.
- Add additional checks to ensure automatic reconnection does not trigger under the wrong conditions.
  - Examples
    - A client purposefully quits a game
    - The server shuts down as expected when the game session ends
    - A client gets kicked from a game
    - A client is denied during connection approval

Depending on your game, you may want to add the following features as well:
- Include multiple reconnection attempts in case of failure. You need to define how many attempts these should be, ensure that `NetworkManager` properly shuts down between each attempt, and reset the client's state (if needed).
- Provide an option for players to cancel the reconnection process. This may be useful when there are a lot of reconnection attempts or when each attempt lasts a long duration.

### Automatic reconnection example

Check out our [Boss Room sample](../learn/bossroom/getting-started-boss-room.md) for an example implementation of automatic reconnection.

The entry point for this feature is in [this class](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/ConnectionManagement/ClientGameNetPortal.cs). Boss Room's implementation uses a coroutine (`TryToReconnect`) that attempts to reconnect a few times sequentially, until it either succeeds or surpasses the defined maximum number of attempts.

The coroutine is triggered when a client disconnects, depending on the reason of that disconnect (see `OnDisconnectOrTimeout`) and is stopped when a succesfull reconnection occurs, or when a user cancels it (see `OnConnectFinished` and `OnUserDisconnectRequest`). 

:::note
This sample connects with [Lobby](https://docs.unity.com/lobby/unity-lobby-service-overview.html) and [Relay](https://docs.unity.com/relay/get-started.html) services, so the client must make sure it has properly left the lobby before each reconnection attempt.

For more information about how Boss Room leverages Lobby and Relay, see [Getting Started with Boss Room](../learn/bossroom/getting-started-boss-room.md#register-the-project-with-unity-gaming-services-ugs)
:::
