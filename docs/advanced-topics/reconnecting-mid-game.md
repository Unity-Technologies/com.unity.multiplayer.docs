---
id: reconnecting-mid-game
title: Reconnecting Mid-Game
---

In a multiplayer game, it is possible that a client gets disconnected from the server, for example if they have network issues, or if their application or device crashes. When it happens, you might want to give your players the ability to reconnect to the game.

The following are some considerations to keep in mind when providing mid-game reconnection capabilities to your players:
- In order to preserve a player's in-game state when they are disconnected, you will need to implement a mechanism to keep the player's in-game state in memory and restore that state upon the client reconnecting  (see [Session Management](./session-management.md)).
- If using scene management, keep in mind that connecting to a game launches the synchronization process. If you're using additive scenes, this means that if the client's active main scene is the same as the server's, it will load all additive scenes that are currently loaded on the server, without unloading anything on the client. If that is a behavior you do not want, you can unload those scenes on the client when they disconnect, or before attempting to reconnect, or you can use the `NetworkSceneManager.VerifySceneBeforeLoading` callback to prevent loading scenes that are already loaded on the client.
- If your game requires it, you should make sure that the client's state is properly reset and ready to connect before attempting to reconnect. This could require resetting some external services, for example.


### Reconnecting automatically
Automatically reconnecting a client that has lost its connection unexpectedly improves the player experience.
Guidelines for reconnecting a client automatically:

- Determine what will initiate the reconnection process.
  - For example, it could be the NetworkManager.OnClientDisconnectCallback callback or it could be some other unique event specific to your product.
- Wait for NetworkManager to properly shut down before attempting to reconnect. You can use the NetworkManager.ShutdownInProgress property for this.
  - Typically it takes at least 1 frame for this to happen
- Add additional checks to assure your automatic client reconnection solution it not triggered under the wrong conditions.
  - For example, if a client quits a game purposefully, if the server shuts down normally as the game session ends, if a client gets kicked from a game or if they get denied during connection approval you do not want the client to automatically reconnect.


You could also want to implement the following features, depending on your game:
- Include multiple reconnection attempts, so it retries if an attempt fails. You'll have to define how many attempts there should be, and make sure that the `NetworkManager` properly shuts down between each attempt and that the client's state is properly reset if needed.
- Give an option for players to cancel the process. This could be especially useful in cases where there are a lot of reconnection attempts, or if each attempt takes a long time.


### Automatic reconnection example

To see an example of how to implement automatic reconnection, you can have a look at the Boss Room sample. The entry point for this feature is in [this class](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/develop/Assets/BossRoom/Scripts/Game/ConnectionManagement/ClientGameNetPortal.cs). Boss Room's implementation uses a coroutine (`TryToReconnect`) that attempts to reconnect a few times one after the other, until it either succeeds of goes beyond the maximum number of attempts. The coroutine is triggered when a client disconnects, depending on the reason of that disconnect (see `OnDisconnectOrTimeout`) and is stopped when a succesfull connection occurs, or when a user cancels it (see `OnConnectFinished` and `OnUserDisconnectRequest`). Another thing of note in this sample is that in the case where the connection is done through the Lobby and Relay services, the client has to make sure that it has properly left the lobby before each reconnection attempt.