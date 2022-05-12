---
id: reconnecting-mid-game
title: Reconnecting Mid-Game
---

In a multiplayer game, it is possible that a client gets disconnected from the server, for example if they have network issues, or if their application or device crashes. When it happens, you might want to give the ability to your players to reconnect to the game.

To allow clients to reconnect in the middle of an active game, there are some considerations to have in mind.
- If clients have a specific state and some in-game data associated with them and you want them to reconnect with that same state and that same data, you should implement a mechanism to keep that state in memory and associate it to that client when they reconnect (see [Session Management](./session-management.md))
- If using scene management, keep in mind that connecting to a game launches the synchronization process. If you're using additive scenes, this means that if the client's active main scene is the same as the server's, it will load all additive scenes that are currently loaded on the server, without unloading anything on the client. If that is a behavior you do not want, you can unload those scenes on the client when they disconnect, or before attempting to reconnect, or you can use the `NetworkSceneManager.VerifySceneBeforeLoading` callback to prevent loading scenes that are already loaded on the client.


### Reconnecting automatically

To make the experience smoother for the players, you can have clients automatically attempt to reconnect to a game when losing connection unexpectedly. To implement this, you'll have to do the following:
- Define what triggers this process and when it starts. For example, it could be the `NetworkManager.OnClientDisconnectCallback` callback.
- Wait for `NetworkManager` to properly shut down before attempting to reconnect. You can use the `NetworkManager.ShutdownInProgress` property for this.
- Make sure it does not trigger when you don't want it too. For example, if a client quits a game purposefully, if the server shuts down normally as the game session ends, if a client gets kicked from a game or if they get denied during connection approval.

You could also want to implement the following features, depending on your game:
- Include multiple reconnection attempts, so it retries if an attempt fails. You'll have to define how many attempts there should be, and make sure that the `NetworkManager` properly shuts down between each attempt.
- Give an option for players to cancel the process.