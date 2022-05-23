---
id: reconnecting-mid-game
title: Reconnecting Mid-Game
---

In a multiplayer game, clients may get disconnected from the server for a variety of reasons (network issues, application/device crashes, etc). For those reasons, you may want to allow your players to reconnect to the game.

## Considerations

Review the following considerations before allowing clients to reconnect in the middle of an active game:

- Clients may have specific state and in-game data associated with them. If you want them to reconnect with that same state and data, implement a mechanism to maintain the association of state and data with the client for when they reconnect. See [Session Management](session-management.md) for more information.
- When using [scene management](../basics/scene-management.md), remember that the synchronization process launches when connecting to a game. Therefore, all additive scenes currently loaded on the server will load without unloading anything on the client when the client's active main scene is the same as the server's. <!-- What is the negative affect of this? Like is it slower loading/initial lag, etc? Or is it just cleaner and better practice? -->
  - If you want to avoid this behavior, you can
    - Unload those scenes when a client disconnects
    - Unload those scenes when a client reconnects
    - Use the `NetworkSceneManager.VerifySceneBeforeLoading` callback to prevent loading scenes already loaded on the client
- Depending on your game's requirements, make sure the client's state is properly reset and ready to connect before attempting reconnection. This may require resetting some external services.


## Automatic reconnection

For a smoother experience for your players, clients can automatically attempt to reconnect to a game when connection is lost unexpectedly.

To implement automatic reconnection: <!-- Does order matter for these steps -->
- Define what will trigger the reconnection process and when it will start. <!-- I'm assuming the user is making this definition for the automatic reconnection vs finding something already existing the triggers the disconnect/reconnect process. Tried to clarify that difference. it was a little ambiguous before. --> For example, the `NetworkManager.OnClientDisconnectCallback` callback.
- Ensure the `NetworkManager` properly shuts down before attempting any reconnection. You can use the `NetworkManager.ShutdownInProgress` property to manage this.
- Ensure automatic reconnection does not trigger when you do not want it.
  - Examples
    - A client purposefully quits a game
    - The server shuts down as expected when the game session ends
    - A client gets kicked from a game
    - A client is denied during connection approval

Depending on your game, you may want to add the following featurs as well:
- Include multiple reconnection attempts in case of failure. You need to define how many attempts these should be, ensure that `NetworkManager` properly shuts down between each attempt, and reset the client's state (if needed).
- Provide an option for players to cancel the reconnection process. This may be useful when there are a lot of reconnection attempts or each attempts takes a long time.

### Automatic reconnection example

Check out our [Boss Room sample](../learn/getting-started-boss-room.md) for an example implementation of automatic reconnection.

The entry point for this feature is in [this class](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Game/ConnectionManagement/ClientGameNetPortal.cs). Boss Room's implementation uses a coroutine (`TryToReconnect`) that attempts to reconnect a few times sequentially, until it either succeeds or surpasses the defined maximum number of attempts.

The coroutine is triggered when a client disconnects, depending on the reason of that disconnect (see `OnDisconnectOrTimeout`) and is stopped when a succesfull reconnection occurs, or when a user cancels it (see `OnConnectFinished` and `OnUserDisconnectRequest`). 

:::note
This sample connects with [Lobby](https://docs.unity.com/lobby/unity-lobby-service-overview.html) and [Relay](https://docs.unity.com/relay/get-started.html) services, so the client must make sure it has properly left the lobby before each reconnection attempt.

For more information about how Boss Room leverages Lobby and Relay, see [Getting Started with Boss Room](../learn/getting-started-boss-room.md#register-the-project-with-unity-gaming-services-ugs)
:::