---
id: bitesize-invaders
title: Invaders Sample
description: Learn more about game flow, modes, unconventional movement networked, and a shared timer using Netcode for GameObjects.
---

The [Invaders Sample Project](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders) to understand the game flow and modes with  Netcode for GameObjects (Netcode) using Scene Management, Unconventional Movement Networked, and a Shared Timer between clients in a client-side predicted way.

## Game Flows

Most Multiplayer games have multiple Networked Scenes, where players can join, communicate, and progress through scenes and maps together. This is a game flow: players join and establish communication together, the server determines the next scene or map, and transitions all clients to the new scene and loads the required map. This ensures players can play together.

The logic and transitions are a specified game flow. To transition in a smooth manner, you need to create game flows and back-end systems that support those flows.

Invaders implements this game-flow by creating different controller classes that handle each Game Mode such as MainMenu, a simple Networked Lobby and InGame modes, and other support classes that help with the transition from one Game Mode to another.

The backbones of the flow/system mentioned above is consisting of two main components:

* `SceneTransitionHandler`
* `SceneState` 
* `Lobby Controller`

### SceneTransitionHandler

A `SceneTransitionHandler` with a lightweight state machine allows you to track clients' progress in regards to Scene Loading. It notifies the server when clients finish loading so that the other listeners are informed, by encapsulating the `SceneSwitchProgress` or creating a wrapper around it that others can subscribe to.

You track that progress by subscribing to the Netcode's `SceneSwitchProgress`, which is created when you call `NetworkSceneManager.SwitchScene` in the [SceneTransitionHandler.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/SceneTransitionHandler.cs):

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/SceneTransitionHandler.cs#L89-L105
```

### SceneState

At the same time, we have implemented a light State Machine to keep track of the current `SceneState`. For example, the `SceneState` could indicate if players are in the Init or Bootstrap scene, Start or Lobby, or InGame. You can run a different Behavior or in this case a different `UpdateLoop` function, for each state.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/SceneTransitionHandler.cs#L25-L34
```

One example of how to update the current `SceneState` is in *[InvadersGame.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/InvadersGame.cs)*, in the `NetworkStart` function.

:::note
This class has the same role as the Lobby Controller, it acts as a Manager, for a specific part of the game.
:::

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/InvadersGame.cs#L179-L181
```

### Lobby Controller

A Lobby Controller is a Manager for the lobby. This is where we applied a simple Mediator Design Pattern that restricts direct communications between the objects and forces them to collaborate only using a moderator object. In this case, the *[LobbyControl.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/LobbyControl.cs)* handles Lobby interactions and state. This works hand-in-hand with the `SceneTransitionHandler`, by subscribing to the `OnClientLoadedScene` of that class in `Awake`.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/LobbyControl.cs#L40-L49
```

Whenever the `OnClientLoadedScene` callback is called, the custom `ClientLoadedScene` function is also called. And that is the location where you add the new Player to a container that just loaded the Lobby Scene, generates user stats for it (which is just a random name), and then later sends an update to the rest of the users notifying them that someone new has joined the Lobby.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/LobbyControl.cs#L102-L119
```

When the players join this Lobby, they all need to click **Ready** before the game can progress to the next scene (before the Host can start the game). After players click Ready, you send a `ServerRPC` called `OnClientIsReadyServerRpc` (inside the `PlayerIsReady` function). When it arrives server-side, it marks the client state as ready based on its `ClientId`. You keep track of if a client is ready in the `m_ClientsInLobby` `Dictionary`.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/LobbyControl.cs#L208-L222
```

At the same time, in order to sync up with the rest of the clients and update their UI, we send a ClientRpc. The update is handled by the ClientRpc called `SendClientReadyStatusUpdatesClientRpc` in `UpdateAndCheckPlayersInLobby`.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/LobbyControl.cs#L81-L100
```

When all the players have joined the lobby and are ready, `UpdateAndCheckPlayersInLobby` calls `CheckForAllPlayersReady` to transition to the next scene.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/LobbyControl.cs#L158-L186
```

## Unconventional Networked Movement

Invaders has an easy movement type - moving only on one (horizontal) axis - which allows you to only modify the transform client-side without waiting for server-side validation. You can find where we perform the move logic in *[PlayerControl.cs](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/PlayerControl.cs)* in the `InGameUpdate` function . With the help of a [`NetworkTransform`](../components/networktransform.md) that is attached directly to the Player Game Object, it will automatically sync up the Transform with the other clients. At the same time, it will smooth out the movement by interpolating or extrapolating for all of them.

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/PlayerControl.cs#L157-L173
```

## Shared Start/Round Timer with Client-Side Prediction

Games commonly have timers to display in the UI such as Start Timer, Round Timer, and Cooldowns. Invaders also have a shared timer to ensure all players start the game at the same time. Otherwise, players with higher-end devices and better network access may have an unfair advantage by loading scenes and maps faster.

When you implement this kind of timer, usually you would use a `NetworkVariableFloat` to replicate and display the exact time value across all clients. To improve performance, you do not need to replicate that float every Network Tick to the Clients, which would only waste network bandwidth and some minimal CPU resources.

You have two options:

* The best solution is to sync the remaining value of the timer when a new client joins. For the remaining time, clients can locally predict what the next value of that timer is going to be. This method ensures the server does not need to send the value of that timer every Network Update tick since you know what the approximated value will be. There is a minimal overhead of keeping an additional float member variable that will be kept updated, as the clients cannot modify the `NetworkVariable` directly.
* A fair solution is to set the `SendTickRate` of that timer `NetworkVariableFloat`, so that the server only sends an update once every second, without any additional work.

In Invaders and the current state of  Netcode, there is a drawback to implement such a pattern. If you set `NetworkVariableFloat` `SendTickRate` to '-1' (which means "do not send any updates anymore about this NetworkVariable to the clients"), it will not sync up the current timer value with the clients that just joined. It will never catch up with the server, which means you need to write more code to deal with this.

As a workaround, you have to wait for all clients to be connected before setting the `SendTickRate` to '-1' for `m_ReplicatedTimeRemaining` `NetworkVariableFloat`. The code that checks if you need to set this is inside the `ShouldStartCountDown` method in *InvadersGame.cs*. 

:::important
As Netcode evolves and fixes this problem, you can just set `SendTickRate` in the `NetworkStart` and most of the code inside `ShouldStartCountDown` will become obsolete.
:::

### Start the game timer

First, use `ShouldStartCountDown` to start the timer and send the time remaining value to the client-side. THis initiates and sends the value only once, indicating the game has started and how much time remains. The game predictively counts down locally using these values. See [Update game timer Client-Side](#update-game-timer-client-side).

Example code to start the countdown:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/InvadersGame.cs#L186-L213
```

### Update game timer Client-Side

On the client-side, use the `UpdateGameTimer` to predictively calculate and update the `gameTimer`. The server only needs to be contacted once to check if the game has started (`m_HasGameStared` is true) and the `m_TimeRemaining` amount, recieved by `ShouldStartCountDown`. When met, it predictively calculates and updates the `gameTimer` reducing the remaining time on the client-side for all players. When `m_TimeRemaining` reaches 0.0, the timer is up.

When all the players are connected, we will get one last update for `m_TimeRemaining`, so that it will sync up with the server `m_ReplicatedTimeRemaining` value on line 151, then, as long as the game did not start, or the `m_TimeRemaining` did not reach 0.0, we predictively set the `m_TimeRemaining` and update the UI with the result.

Example code to update the game timer:

```csharp reference
https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/blob/master/Basic/Invaders/Assets/Scripts/InvadersGame.cs#L239-L267
```