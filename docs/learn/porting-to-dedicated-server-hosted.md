---
id: porting-to-dgs
title: Porting from Client-hosted to DGS-hosted
---

You might have started developing your game with client-hosted in mind but then realized it wasn’t giving you the performance, reliability, or security you wanted. There are multiple reasons for choosing both a dedicated game server (DGS) solution and a client-hosted solution. This document provides guidance around switching from a client-hosted game to a dedicated-server game in Unity using Netcode for GameObjects (NGO).

:::note
There are two distinct meanings of the word “host” that you must take care not to confuse: the NGO host and the hardware host.

- The **NGO host** is where both a client and a server run simultaneously. The hosting provider (the hardware host) runs your Unity server build.
- The **hardware host** (virtual or bare-metal) runs your Unity server build in a data center or hosting provider.

In this article, host refers to the NGO host.
:::

:::note
If your server and clients run the same code, it’s usually simpler to port from DGS to client-hosted than the other way around. It’s easier to place a client on top of a DGS than to extract a DGS from your host. By starting with your DGS logic already isolated, you can then more easily change to client-hosted by enabling client-side logic for the host. This isn't the case if your server uses a different technology stack than your clients.
:::

## Client-hosted vs dedicated server-hosted games

Choosing between a client-hosted and a dedicated server game isn’t as straightforward as it might initially seem. There are multiple pros and cons to each solution, and the scales can easily tip one way or another depending on a multitude of factors, such as the game type, the latency tolerance, the game integrity (how easily players can cheat), and the expectations of your players. Sometimes, it might even make sense to provide multiple hosting options. This section covers some pros and cons of each solution.

### Client-hosted games

A client-hosted game is a game that doesn’t rely on a dedicated server (or a server-specific build) to host game servers. Instead, the same executable has the code to run as a client or as a host. Players can run the client build locally as a host and allow other players to join through peer-to-peer connections or a peer-to-peer mimicking solution like [Relay](https://docs.unity.com/relay/).

:::note
NGO has three start options: [`StartClient`](../api/Unity.Netcode.NetworkTransport.md#startclient), `StartHost`, and [`StartServer`](../api/Unity.Netcode.NetworkTransport.md#startserver). A host acts as both a client and a server.
:::

Games that benefit most from a client-hosted hosting approach include games that:

- Don’t need to scale to large numbers of players
- Aren’t sensitive to lag or latency
- Aren’t sensitive to cheating

The following table lists some pros and cons of using a client-hosted hosting approach to host your multiplayer game.

| PROS | CONS |
|---|---|
| There are fewer costs associated with a client-hosted game because you don’t need to worry about paying for a hosting provider. ✝ | You don’t have control over the quality of service (QoS) of connections because they depend on the host player’s network. |
| It is easier to manage builds in client-hosted games because you only need to release a single build for players. | Depending on the game type, players might become frustrated because it’s not fair that the host player has zero latency. |
| Client-hosted games are simpler to debug and profile compared to dedicated server-hosted games (your development PC can also run the host, a DGS might run on specialized hardware). | Players can more easily cheat because they have physical access to the server. |
| The above makes it great for LAN (local area network) parties. | Client-hosted games don’t scale well. Player hardware usually isn’t capable of hosting game sessions with hundreds of connections. |

✝ However, some games might generate more traffic (compared to compute resources), which might make a client-hosted game more expensive than using a service like Multiplay if relying too much on Relay.

### Dedicated server-hosted games

A dedicated server-hosted game is a game that runs server builds on hardware that’s dedicated to hosting the game. The dedicated server might be in an [on-premise data center](#developer-hosted-cloud), in the [cloud](#developer-hosted-cloud), or made available through a [managed service provider](#managed-service-provider), such as Unity’s [Game Server Hosting](https://docs.unity.com/game-server-hosting). In any case, players don’t usually have access to the server build.

Games that benefit most from a dedicated server-hosted hosting approach include those that:

- Are sensitive to latency and lag
- Are competitive and sensitive to cheating
- Need to scale to large numbers of players

The following table lists some pros and cons of using a dedicated server hosting approach to host your multiplayer game.

| PROS | CONS |
|---|---|
| Players don’t have access to your server build, which makes it easier to maintain game authority and security. | You have to worry about uptime, quality of service, latency, and geographic availability. |
| There’s no additional lag due to relay based connections. | You must consider scalability because the number of players connected to your server fleet could change drastically in a short time period. |
| You have more control over performance and quality of service since you as a developer control the hardware the server runs on. | It can quickly get expensive, depending on how you host the server build. |
| It’s easier to think about the server part of your code and the client part of your code when there’s no overlap like a client-hosted game. | It’s more complicated to debug because you usually need to run the production build in a virtual machine for testing. |
| Clients don’t require as much performance because they aren’t responsible for the processing and bandwidth overhead involved with hosting. | You have to maintain a server build and a client build. |
| You don’t have to worry about host migrations or what to do when the host player disconnects. ✝ |  |
| You don’t have to worry about the unfairness of the host having zero latency or lag. |  |
| You have the option of using a managed service provider like Game Server Hosting, which allows you to focus on other aspects of your game. |  |

✝ However, you still need to accommodate for unexpected server failures. These failures are less likely to happen, but you still need to handle them with appropriate error messaging.

## Game changes

This section covers the changes required to change your game from a client-hosted hosting approach to a dedicated-server hosting approach, organized by [NGO-specific changes](#ngo-specific-changes), [in-game automation](#in-game-automation), and [general game changes](#general-game-changes).

### NGO-specific changes

See the following sections to learn about the NGO-specific game changes required to port a game from client-hosted to server-hosted.

- [Switch from StartHost to StartServer](#switch-from-starthost-to-startserver)
- [Change the listen address and port](#change-the-listen-address-and-port)
- [Synchronize scene loading between the server and clients](#synchronize-scene-loading-between-the-server-and-clients)
- [Use scene events instead of OnNetworkSpawn for static objects](#use-scene-events-instead-of-onnetworkspawn-for-static-objects)

#### Switch from `StartHost` to `StartServer`

NGO provides [`StartHost`](../api/Unity.Netcode.NetworkManager#starthost) and [`StartServer`](../api/Unity.Netcode.NetworkManager#startserver). `StartHost` makes the player act as both a client and a server. `StartServer` acts only as a server; players can't run on `StartServer`.

You must adapt the `if ([IsServer](https://docs-multiplayer.unity3d.com/netcode/0.1.0/api/MLAPI.NetworkBehaviour/index.html#isserver))` logic of your game so that it doesn't assume a player is there.

#### Change the listen address and port

Porting from a client-hosted to a server-hosted game often requires you to change the IP address your game listens on.

By default, NGO uses 127.0.0.1 as the listen address; however, that address is only reachable by other processes on the same machine, which isn’t useful for server-hosted games. Typically, server-hosted games listen on all addresses using 0.0.0.0.

Most hosting providers allow you to specify a port or give you a specific port to listen on. You need to capture the port your game uses to set them in [UTP](../../transport/about.md). You can do this in many ways. For example, you can:

- Use [command-line arguments](https://learn.microsoft.com/en-us/dotnet/api/system.environment.getcommandlineargs?view=net-7.0) (`Environment.GetCommandLineArgs`).
- Use [environment variables](https://learn.microsoft.com/en-us/dotnet/api/system.environment.getenvironmentvariable?view=net-7.0) (`Environment.GetEnvironmentVariable`).

#### Synchronize scene loading between the server and clients

A common difference between client-hosted and server-hosted games is that there are scenes the client uses but the server doesn’t need to know about.

If you use [scene management](../basics/scenemanagement/scene-management-overview), NGO automatically tracks all scene changes on the server and syncs connected clients. You can exclude specific scenes from loading client-side or server-side by excluding those scenes from NGO’s scene management using `SceneManager`’s `VerifySceneBeforeLoading`.

```csharp
NetworkManager.Singleton.SceneManager.VerifySceneBeforeLoading += DontSyncClientOnlyScenes;
```

#### Use scene events instead of OnNetworkSpawn for static objects

You might have been tempted to use `NetworkBehaviours` on offline objects to get access to `OnNetworkSpawn`. However, a couple of issues with this approach are discussed in the [stripping section below](#ngo-and-script-stripping). You should use [scene events](../basics/scenemanagement/using-networkscenemanager#scene-events-and-scene-event-progress) for static spawn events instead. In general, you should avoid using `NetworkBehaviour` if you anticipate stripping them.

You can also use a dummy [`NetworkBehaviour`](../basics/networkbehavior) that exposes its `OnNetworkSpawn` to other components on the same `NetworkObject`.

### In-game automation

Games using a DGS hosting approach rely on automation to handle startup events and post-game cleanup.

- [Automate start-up logic](#automate-start-up-logic)
- [Automate closing the lobby](#automate-closing-the-lobby)
- [Automate game session cleanup](#automate-game-session-cleanup)
- [Automate exit codes](#automate-exit-codes)

#### Automate start-up logic

Instead of using in-game menus on start-up, you’ll need to implement an automated startup flow that will `StartServer()` automatically, then wait for your clients to connect. This is also when you might want to set up a lobby in your lobby service or advertise yourself as “ready” to your hosting provider and matchmaking service. After your service knows you’re ready, it can redirect clients to your server.

:::note
If you’re interested in using other Unity services for your multiplayer game, see [Lobby](https://docs.unity.com/lobby), [Game Server Hosting](https://docs.unity.com/game-server-hosting), and [Matchmaker](https://docs.unity.com/matchmaker).
:::

#### Automate closing the lobby

In a client-hosted game, the lobby automatically closes when the last player leaves (since the last player would be the host). However, because a headless server doesn't count as a player, the dedicated server remains open even after all the clients disconnect. As a result, and depending on your game implementation, you might want to update your lobby management flow. The best solution depends on your specific needs, but some common options include:

- Closing the lobby after the last player leaves and prepare the server for the next game session.
- Leaving the lobby open for the next game session.
- Marking the server as “empty” and waiting for the hosting provider to kill the instance. This might result in some cost savings because you won’t have to pay to keep an unnecessary instance online.

#### Automate game session cleanup

Another automation you might want to consider is returning the player to character select after a game session ends.

With a DGS hosting approach, there’s no “return to lobby” button for the host after a game is over. As a result, you must decide how to handle when a game session ends. In general, you have two options:

1. [Queue players for a new game session](#queue-players-for-a-new-game-session).
2. [Reuse the same game session](#reuse-the-same-game-session).

Ultimately, the difference between these two options comes to reusing game sessions versus sending players to a queue for a new game session.

For most match-based games, it’s easier to send players to a matchmaking queue than it's to reuse the same game session. Reusing the same game session leads to long-running server processes, which increases the risk of corruption and bugs.

However, if you have a continuous-world game, such as a massively multiplayer online (MMO) game, reusing game sessions better facilitates a continuous connected experience.

##### Queue players for a new game session

Placing players in a queue for a new game session makes it easier to develop, as it’s easier to test short game sessions. Long game sessions make it difficult to change your game code, then test hundreds of hours of uptime with that change to make sure that change works for your typical server lifetime.

Finishing game sessions and sending users back to a matchmaking queue can also help with [server fragmentation](https://docs.unity.com/game-server-hosting/legacy/server-fragmentation.html). It allows your hosting provider to scale down servers as needed without worrying about kicking out players.

| PROS | CONS |
|---|---|
| Better for match-based games | Not desirable for continuous player experience, such as with MMO games |
| Less likely to introduce issues with corruption and long-running bugs |  |
| Memory leak issues are less apparent |  |
| Best for short game sessions |  |
| Reduces the likelihood of server fragmentation |  |

##### Reuse the same game session

Starting a new game with connected players and keeping the same game session is more seamless and introduces less wait time, but it’s harder to make sure nothing breaks long-term.

| PROS | CONS |
|---|---|
| Better for a seamless or continuous player experience | More likely to introduce issues with corruption and long-running bugs |
| Desirable for MMO games | Memory leaks are harder to test for. |
| Best for long game sessions |  |

#### Automate exit codes

Many hosting providers, such as [Unity’s Game Server Hosting service](https://docs.unity.com/multiplay/), watch your server and react to exit codes. For example, if you have a bug resulting in `StartServer` failing, you can call `Application.Quit(1)` with exit code `1`. Exit codes greater than `0` let the hosting provider know something went wrong and the provider can automatically react to this appropriately by trying to reboot your server or just destroying it.

### General game changes

See the following sections to learn about the general game changes involved in porting a game from client-hosted to server-hosted.

#### Update logging

There are some distinct differences between logging for client-hosted games and server-hosted games. With a server-hosted game, you don't have a view into your game as you'd have with other types of platforms. You'll need to rely on logging to get insights into what's happening on your servers, especially with live fleets of thousands of servers.

Unity's built-in logging (`Debug.Log`) doesn’t work for server-hosted games because it lacks the following requirements:

- [Structured logging](#structured-logging)
- [Log levels](#log-levels)
- [Log file rotation](#log-file-rotation)
- [Performance](#performance)

Instead, you should use an alternative solution such as Unity’s [logging package](https://docs.unity3d.com/Packages/com.unity.logging@1.0/manual/index.html).

##### Structured logging

You don't want to look at log files individually when you have thousands of servers in your fleet. Ideally, to support a dedicated-server game, you want:

- Log ingestion tools
- Log analysis tools
- Log parsing tools (for example, Elasticsearch)

Many logging services encompass all the above. To use these tools, you should structure your logs in a machine-readable manner (for example, JSON). Structured machine-friendly logs make it easier to integrate with the log tooling you’ll need to analyze your data.

##### Log levels

In a production environment, you won't typically want to receive `INFO` or `DEBUG` level logs, only critical logs (such as warnings and errors). Including non-essential logging information in your production environment might spam your logging tools and increase the cost of parsing and analyzing logs. Log level support allows you to control which log levels you receive in each environment. That way, you can have `INFO` and `DEBUG` logs in your development environment and only the critical logs in your production environment.

##### Log file rotation

Unlike client-hosted game logs, which only last as long as the game session, dedicated-server game logs can grow larger for days or weeks at a time. This means your log file will grow increasingly large. The best way to prevent log files from becoming too large is to use log rotation. Log rotation is an automated way to swap log files at a consistent time interval, allowing you to manage and delete older log files.

:::note
If you’re using containers to host game servers, you should log to STDERR/STDOUT instead of a log file. STDERR/STDOUT is preferable in this case because the container orchestration layer (for example, Docker, Nomad, and K8S) is better suited to persist, collect, and ship the logs to central locations. Some logging solutions have [“sinks”](https://docs.unity3d.com/Packages/com.unity.logging@1.0/manual/sinks.html) available to customize log outputting.
:::

##### Performance

Logging can become a performance-costly operation, contributing to your CPU performance costs, which translates to increased hosting costs.

The logging solution you select should optimize for these scenarios. Such optimizations might include support for burst, multi-threading, and the ability to prevent logging full stack traces in production environments.

#### Throttle the server-side frame rate

Because there’s no need to render in a headless server-side build, it’s useless to let it run at max frame rate. Usually, you can set `Application.targetFrameRate` to a low value, such as 30. Doing so prevents the server-side simulation from spinning too fast, preventing useless micro-updates and saving on server hosting costs.

See [Servers using too much CPU](https://docs.unity.com/game-server-hosting/guides/troubleshooting.html#Servers_using_too_much_CPU).

#### Update testing flows

Testing a server-hosted game is a bit more involved than testing a client-hosted game.

With the dedicated server build target, you don’t have visuals anymore; there’s no camera rendering anything for you.

When you’re testing in the Unity Editor, you can use the Scene view, scene hierarchy, inspector, and other tools. However, when testing builds that you intend to scale for a multiplayer game, you need to rely on other means. Some options for testing server builds include:

- [Console logs](#console-logs)
- [REST debugging servers](#rest-debugging-servers)
- [Virtual testing environments](#virtual-testing-environments)
- [Automated load testing](#automated-load-testing)

##### Console logs

You can use console logging to log all the [Scene hierarchy](https://docs.unity3d.com/Manual/Hierarchy.html), including all object information from them. However, doing so involves hard coding print statements at key points during runtime, and you can’t interact with them dynamically.

##### REST debugging servers

You can use debugging REST servers with multiple ports listening for different types of features in a single game.

Some games implement an extra TCP (transmission control protocol) endpoint listening for REST calls, which provides a debugging backdoor in your server that you can use for debugging, customer support, and quality assurance (QA). For example, you might have a debugging endpoint that responds to GET calls and returns an `index.html` that has server debugging information in a human-friendly format.

Some other ideas for increasing the usability of a REST debugging server include:

- Add support for dynamically changing the log level.
- Allow the REST server to access live logs redirected to an internal buffer.
- Send positional information about objects and display a live map of your game in-browser.
- Use [SSE (server sent events)](https://en.wikipedia.org/wiki/Server-sent_events) for sending updates to the REST server at regular intervals instead of having the REST server poll for logs.

:::warning
If you use a debugging REST server like described above, make sure to configure the port so that only developers can access it (but players can’t).
:::

##### Virtual testing environments

While you can usually test your build directly using a test instance from your provider, that requires you to upload your test build before you can test it, which can be cumbersome for quick local iteration flows.

A faster way to test builds is to set up a virtual machine (VM) locally with similar specifications as your hosting provider (and use a shared folder to send your local builds to it). You can use tools like SSH to access the VM from your local machine.

##### Automated load testing

:::note
There are many ways to perform load testing; the solutions mentioned in this section aren't exhaustive.
:::

You don’t want to launch your game live without load testing your hosting setup to ensure it can handle all your players and changes in CCU (concurrently connected users). You want to ensure your hosting and scaling rules can handle unexpected spikes in CCU. Otherwise, players might be unable to connect to your servers due to unexpected loads. Some benefits of load testing include:

- Ensuring auto-scaling works. You can do this by launching automated clients to test how your hosting reacts to changes in load. You don’t need to test millions of users; you can extrapolate.
- Getting cost estimates, which you can extrapolate from a few servers running.
- Ensuring you don’t have resource contention between game server processes running on the same hardware. Ensuring processes don’t interfere with one another by using too much CPU and memory.

There are many ways to perform automated load testing. The following list has a couple of common examples:

- Recorded client input

###### Simple scripted input

The simple scripted input method involves creating virtual clients, having them connect to the server, and giving simple automated move inputs to your characters.

| PROS | CONS |
|---|---|
| Doesn’t require a recording setup. | Can become time-consuming for developers to automate. |
|  | Break easily. Manually written automated tests can break if your game behavior changes. For example, if you used to move your character forward to start, but now your map requires your character to jump out of your spawn point, you’ll need to fix your automated tests to add that new flow. |
|  | Not realistic. |

###### Recorded client input

To simple scripted inputs more realistic, you can record client inputs for a sample game session, then replicate the game recording on several servers with virtual clients. However, just like manual tests, game changes can break the automated tests, and you’ll need to re-record the sample game session.

| PROS | CONS |
|---|---|
| More realistic than simple scripted input. | Requires a recording setup, which can be complex. |
| Less time consuming for devs (as those recordings can be done by QA) | Can break easily when you introduce game changes. |

#### Profiling ports

Running your dedicated server locally in a virtual machine (VM) requires you to forward ports from the VM to the host computer to access the VM from the host. For example, if you want to access the [profiler](https://docs.unity3d.com/Manual/Profiler.html) from the VM, you must forward the port the profiler is listening to.

You can find the profiler port in the first couple of lines of the `player.log` file. If you have trouble finding the profiler port, try searching for "PlayerConnection Initialized" or "Multi-casting." See [Setting up profiler port manually](https://forum.unity.com/threads/setting-up-profiler-port-manually.862951/) and [Profiler profiling applications](https://docs.unity3d.com/Manual/profiler-profiling-applications.html).

If you use a firewall, you’ll also need to open the ports Unity uses for remote profiling (ports 54998 through 55511) in your firewall’s outbound rules.

With Unity Editor version 2023.1 and later, profiling ports are deterministic and won’t require always consulting player log files.

#### Increase security

All game types, client-hosted and server-hosted, must consider security. You can’t trust your players. It’s not a matter of whether users will cheat but when. Switching from a client-hosted hosting approach to a server-hosted hosting approach reduces security risks and enables you to control sensitive game logic server-side. See [Dealing with latency](../learn/dealing-with-latency/index.html#security).

With a client-hosted game, the world authority is in the hands of the player, an untrustworthy agent. With a server-hosted game, you, as the developer, control the authoritative world. As a result, you can guarantee better security over certain aspects of your gameplay that the server controls, such as authentication and monetization integrations.

For example, imagine you have a Super Sword item you can only access in certain areas of a dungeon. You must protect access to this Super Sword (and the in-game currency associated with it) from players tempering with their local game client.

By using a dedicated server to control sensitive gameplay logic (such as accessing the Super Sword), you can prevent players from going through walls, teleporting, automatically defeating all enemies, and similar exploits.

A dedicated server also allows you to perform authentication checks server-side without the risk of leaking user access tokens.

##### Datagram transport layer security (DTLS)

Some platforms require (or prefer) you to use DTLS (datagram transport layer security) to encrypt your network traffic. You can do this for client-hosted games with services like [Relay](https://docs.unity.com/relay/relay-and-utp.html#Create). However, enabling DTLS encryption for a server-hosted game is more involved.

One way to accomplish this is to [use UTP to set up secure connections with DTLS](../secure-connection/index.html). You must get a certificate from a [CA (certificate authority) provider](https://en.wikipedia.org/wiki/Certificate_authority) before you can use UTP to set up secure connections with DTLS. The instructions in the UTP documentation only cover using self-signed certificates.

DTLS enables you to add additional security measures to ensure players don’t fall victim to [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) and [packet sniffing](https://en.wikipedia.org/wiki/Packet_analyzer) attacks. If you combine DTLS with authentication and other security measures, you can ensure bad actors can’t make purchases and transactions for your players, send chats for your players, or pursue similar attacks.

Several companies use their own root certificate to be able to intercept and decrypt everything that walks on their network. This is a feature that's often found on "enterprise" firewalls. This is technically a use of a self-signed certificate.

It's also used when you have services that you can only reach by an IP address ("normal" certificates are always attached to a domain name). This is rather rare these days because typically most organizations can easily use subdomains of their main domain. On the other hand, it would be a real use case for a video game. Like if you deploy on Multiplay, they just give you an IP address and a port. If you want to use DTLS, it's probably easier to have a self-signed certificate. Otherwise you would have to point your DNS to the IP address provided by Multiplay, which isn't practical (and can be problematic if the IP address isn't stable).

I've also seen self-signed certificates used for "offline" purposes, such as encrypting files, or authenticating binaries or configuration files.

#### Optimize differential build updates

:::note
The content in this section might only apply to some hosting providers. Other hosting providers might have zero bandwidth costs for in-datacenter and ingress transfers.
:::

Some hosting providers manage build updates for you and charge for in-datacenter and ingress transfers. One such hosting provider is [Unity’s Game Server Hosting (GSH)](https://docs.unity.com/multiplay/) solution (Multiplay).

If you use GSH, you can make sure there’s no downtime between updates. GSH performs [build updates and rollouts](https://docs.unity.com/game-server-hosting/legacy/how-do-differential-updates-work.html) in the background. However, you can still [optimize your builds to reduce your bandwidth costs](https://docs.unity.com/game-server-hosting/legacy/cost-optimization.html). For example, you can speed up the update process (and incur fewer charges) by ensuring you have as few changes as possible between build versions.

There are several ways you can mitigate the differences between build versions. For example, you can use:

- [The same build machine to generate deterministic builds](#the-same-build-machine-to-generate-similar-builds)
- [Addressables and asset bundles to split your build](#addressables-and-asset-bundles-to-split-your-build)
- [DGS (dedicated game server) asset stripping](#dgs-asset-stripping)

##### The same build machine to generate similar builds

Use the same build machine with the same operating system (OS) to generate builds that are as similar as possible. Consistently using the same build machine prevents unnecessary inconsistencies between versions, such as those due to floating point arithmetics. One of the easiest ways to ensure you always use the same build machine is to use a dedicated build server. However, you can also designate a person in your team to create your builds but the recommended best practice is to not do this because it relies too heavily on a single individual.

##### Addressables and asset bundles to split your build

Use [addressables](https://docs.unity3d.com/Packages/com.unity.addressables@0.8/manual/index.html) and [asset bundles](https://docs.unity3d.com/Manual/AssetBundlesIntro.html) to split up your build. In this case, if one asset changes, you don't need to re-upload all assets in your game, only the modified asset.

If you implement this approach, make sure to review and refine the content in each `AssetBundle`. They shouldn’t contain any assets your server actually doesn't need, such as textures or meshes.

##### DGS asset stripping

DGS (dedicated game server) asset stripping improves the runtime performance of your game by excluding any assets the server doesn’t need. In addition to improving the runtime performance and reducing the server build, it can optimize the bandwidth consumption of rolling out an update to your fleet. As a result, it improves server build times, server bandwidth costs, deployment times, and loading times.

You can use DGS asset stripping to optimize many aspects of your server-hosted game. For example, it enables you to:

- Reduce the size of server builds
- Reduce server build times
- Decrease deployment  bandwidth costs
- Reduce deployment times
- Increase runtime performance by using less memory

If you’re a small game studio with a small player base, you might not consider the bandwidth costs involved with updating your game. However, these costs can grow quickly without optimizations like incremental builds. A server build of 30 GB and a fleet of 15,000 servers equates to hundreds of terabytes of bandwidth costs for each update.

:::tip
The recommended best practice is to review the bandwidth and related costs of your hosting provider so you can calculate the true cost of rolling out an update. You can view the pricing information for Unity’s Game Server Hosting [here](https://docs.unity.com/game-server-hosting/concepts/pricing.html).
:::

## Optimizing server builds

Unlike client builds, server builds have no need for visuals, sounds, inputs, or anything related to a user's device like mobile notifications. You can reduce the size of server builds and, as a result, save a lot of hardware resources by removing client-specific scripts and assets.

You can do this by stripping the unnecessary assets from the server build at build time; this way, the client-side assets aren’t included in memory when loading the executable. Server build stripping allows you to pack as many server instances as possible on your dedicated hosting, saving you money.

### Server build stripping

In Unity Editor version 2021 and later, you can use the Dedicated Server build target option. The Dedicated Server build target automatically strips content the server doesn’t need at build time in addition to starting headless automatically. See the [Unity Build Settings documentation](https://docs.unity3d.com/2019.1/Documentation/Manual/BuildSettings.html).

You should see a reduction in memory and CPU usage with the Dedicated Server build (compared to a build that includes client-side assets).

### Script stripping

Script stripping involves removing client-only scripts from a server build. You can strip scripts from a server build using the [UNITY_SERVER scripting symbol](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html). You can use the UNITY_SERVER option per script or per assembly to strip whole client-only assemblies.

For example, you might want to set all audio-specific code in an Audio assembly, then strip the Audio assembly from server build targets. This would ensure you have no audio code running on your server. Because Unity performs stripping operations at compile time, it’s easier to find compiler errors than runtime errors.

:::warning
There are some indexing issues that arise when using Netcode for GameObjects (NGO) with asset stripping. See [NGO and script stripping](#ngo-and-script-stripping).
:::

#### NGO and script stripping

Netcode for GameObjects (NGO) relies on `[NetworkBehaviour](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkbehavior)`’s index position on a GameObject to know to which `NetworkBehaviour` it needs to route network messages. By stripping a script, you can unintentionally create holes in the GameObject’s list of components, interfering with NGO’s indexing. In general, you shouldn’t strip `NetworkBehaviours`; in fact, `NetworkBehaviours` should always be the same between the client and server. To avoid indexing issues with NGO, use script stripping with caution (and only strip as necessary).

Your server build can have a few `NetworkBehaviours` scripts to allow callbacks like `[OnNetworkSpawn](https://docs-multiplayer.unity3d.com/netcode/current/api/Unity.Netcode.NetworkBehaviour/#onnetworkspawn)`. These callbacks should use the `NetcodeHook` class (see [Boss Room’s Utilities package](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/tree/main/Packages/com.unity.multiplayer.samples.coop/Utilities)).

### Manual stripping

You can use third-party solutions, such as [BuildStripper](https://github.com/JesusLuvsYooh/BuildStripper) and [Headless Builder](https://assetstore.unity.com/packages/tools/utilities/headless-builder-108317), to manually strip prefab and GameObject assets one by one.

### GameObjects stripping

It’s possible to create automation workflows that selectively strip GameObjects depending on the build target. Such automation might allow you to remove performance-heavy GameObjects and ensure the server is as lightweight as possible, resulting in reduced hosting costs.

### Other stripping opportunities

You can also strip other client-specific data to improve the performance of your build. Some examples include:

- [Animations](#animations)
- [Animation-only bones](#animation-only-bones)
- [Rigidbody physics](#rigidbody-physics)

#### Animations

Because server builds are headless, you might be able to exclude some animation-related code, such as character animation and bones that aren’t linked to gameplay, further reducing the resource requirements. Animations often increase the performance demands of a build; as a result, removing unnecessary animations server-side can improve performance a great deal.

#### Animation-only bones

It’s usually safe to do per-bone stripping on server builds, where you delete bones that aren’t linked to gameplay. For example, you might keep a character’s right arm for weapons, but you strip the left arm because it’s only used for animation.

:::warning
Don’t remove bones if you have hitboxes or gameplay attached to those bones.
:::

#### Rigidbody physics

You can also improve server build performance by disabling server-side interpolation of [Rigidbody physics](https://docs.unity3d.com/Manual/RigidbodiesOverview.html). For example, you might add a post-process step to your scene that disables server-side Rigidbody interpolation.

## Hosting considerations

:::note
The content in the section isn’t intended as a definitive guide; it’s more of an introduction to hosting considerations.
:::

Now that you have an optimized dedicated server build, you need to make it accessible to your players. This section provides a high-level overview of the various available hosting options, including the pros and cons of each and some key considerations. This list isn't exhaustive, or meant as a single resource for decision-making; rather, a jumping-off point for further exploration of your needs.

### Hosting types

There are a few general categories of hosting types: [player self-hosted](#player-self-hosted), [developer-hosted on-premise](#developer-hosted-on-premise), [developer-hosted cloud](#developer-hosted-cloud), and [managed service provider](#managed-service-provider).

#### Player self-hosted

Player self-hosted games are games that allow players to download both the headless server build and the client build. An example of a player self-hosted game is Minecraft. Players can host a Minecraft server locally, make it available from outside their local network through port forwarding to allow their friends to connect to it. See the following table for the pros and cons of a player self-hosted game.

| PROS | CONS |
|---|---|
| You, as the developer, incur minimal hosting costs because the players are responsible for hosting the server build. | Players must have a network provider that enables outside access to the local network. |
| Players have freedom and control of the server they play on. | Players must know how to run and manage the server build. |
|  | Players must know how to port forward. |
|  | Players must have hardware capable of running the server build or pay a provider to host the server build. |
|  | The server's reliability depends on the reliability of the player’s network (unless the player uses a hosting provider). |

#### Developer-hosted on-premise

Developer-hosted on-premise means that you, as the developer, host your game on your own server infrastructure.

There’s a lot that goes into maintaining a server farm. For example, you must make sure your infrastructure can:

- Support high CCU (concurrently connected users)
- Automatically manage instances and scaling
- Offer high availability (usually around 99.9% availability which translates to 43 minutes of “acceptable” downtime per month)
- Remain cost-effective as you scale
- Enable non-interrupted games

Usually it makes more sense to use a cloud-hosted solution or a managed service provider. However, there are benefits to hosting your game on-premise.

| PROS | CONS |
|---|---|
| You don’t have to pay for ongoing cloud (or managed services) to keep your game online. | Hosting on-premise requires a large initial investment of time, money, and resources. |
| Ongoing maintenance costs might be lower, depending on your infrastructure. | You must pay for ongoing hardware software, licensing, and general maintenance. |
| You have more control over your data and the security of your servers. However, keep in mind that it’s difficult to achieve the same level of security as services such as AWS. | You must ensure your infrastructure is secure; you can’t rely on a provider. |
|  | You don’t have access to some of the quality-of-life features providers might offer, such as automatic backup and differential syncing. You can implement these features on-premise, but you must invest the resources to do so. |
|  | If your users are located across the globe, you’ll need multiple data centers. |
|  | It’s difficult to achieve the same level of security provided by services such as AWS. |
|  | There’s a lot you must consider that a service or hosting provider would normally handle for you, such as redundancy, fire suppression, backup generators, geographic availability, and staffing. |

See the following resources to learn more about hosting in the cloud versus on-premise:

- Microsoft documentation on [Cloud storage vs. on-premises servers: 9 things to keep in mind](https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/cloud-storage-vs-on-premises-servers)

#### Developer-hosted cloud

Developer-hosted cloud games are games that you, as the developer, host through a cloud provider, such as Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure. You can use one (or more) cloud providers to create a virtual infrastructure tailored to your needs (without dealing with all the considerations of on-premise hosting).

Using a cloud hosting solution often saves you money upfront but can cost more than a similar on-premise solution in the long run. See the following comparison of the pros and cons of using a cloud provider to host your game.

| PROS | CONS |
|---|---|
| Requires less upfront investment in time, money, and other resources (when compared to hosting on-premise). | Often costs more than an on-premise solution in the long run. |
| Using a cloud provider makes it easier to scale resources up or down. You can quickly terminate resources you no longer need. | You still need to create the virtual infrastructure you host your game on and ensure you minimize the downtime of your servers. |
| There’s less risk involved with overestimating or underestimating your resource requirements. |  |
| Cloud providers often have data centers located across the world, so you can always have your servers near your users, reducing the latency of their connection. | If there’s a problem in your code causing servers to crash at some odd hour of the night, you can’t rely on the cloud provider to fix it. |

:::note
You can also opt to host your servers with a bare-metal data center, such as Rackspace or Servers.com. Using bare-metal servers comes with its own set of pros and cons. Unity’s Game Server Hosting uses a combination of bare-metal and cloud servers to leverage the advantages of both. See [Machine capacity](https://docs.unity.com/game-server-hosting/legacy/machine-capacity.html) to learn more about the differences between the two options.
:::

##### Managed service provider

A managed service provider is a service that takes your game server build and manages hosting, scaling, and maintaining it in a white-glove environment. You tell the managed service provider how to run your game, and you often have control over scaling, availability, and other key operation points. Examples of managed service providers include [Unity’s Game Server Hosting](https://docs.unity.com/multiplay/), Amazon Web Services’ Gamelift, Microsoft’s Playfab, and Google’s Agones.

See the following table to learn more about the pros and cons of opting for a managed service provider to host your game.

| PROS | CONS |
|---|---|
| You don’t have to worry about creating and maintaining the virtual or physical infrastructure to host your game. | You often don’t have visibility into the inner workings of the service. |
| Managed service providers often make it easy to scale up or down in response to changing resource requirements. | You must rely on the managed service provider to guarantee uptime, availability, and support. |
| Managed service providers often provide quality-of-life features, such as analytic dashboards, automatic scaling, and logging solutions. | Some managed service providers require you to make code changes to use their service. |
| Because you don’t have to worry about infrastructure, you can spend more time improving the player experience of your game. | Similar to cloud hosting solutions, managed services often cost more than on-premise solutions. |
| Some managed service providers (such as Unity’s GSH) often have deals with multiple cloud providers, which increases the redundancy and availability of your game. |  |

### Hosting provider SDK

Your game server usually needs a way to communicate with their hosting provider, to expose essential information, like the number of connected players, available player slots, map information, and server readiness to accept new player connections.

Managed service providers usually provide an SDK you can use to integrate your game. For example, if you use Unity’s Game Server Hosting solution, you can use the [Game Server SDK](https://docs.unity.com/game-server-hosting/sdk/sdk-overview.html).

You can also create similar tooling internally if you manage your own infrastructure, such as with an on-premise or cloud-hosted solution.

### Matchmaking

Many multiplayer games use a matchmaker to place players into game sessions based on configurable rules. However, other games use server-select workflow in which players manually create and join game sessions.

Depending on the nature of your multiplayer game, you might also need to consider a matchmaking solution. You can use a matchmaking solution like [Unity’s Matchmaker](https://docs.unity.com/matchmaker/) or create an in-house solution.

The Boss Room sample relies on Unity’s [Lobby service](https://docs.unity.com/lobby/) to advertise hosts for client-hosted games, but you can adapt it for a dedicated-server workflow.

The lobby-based matchmaking in the Boss Room sample is minimal and might result in unfair matches if highly skilled players end up in the same lobby as low-skilled players. You can extend the example implementation with Unity’s Matchmaker service, which integrates with Game Server Hosting to match the right players together and send them to the best possible service. See the [Matchplay sample](https://github.com/Unity-Technologies/com.unity.services.samples.matchplay).

### Continuous integration (CI)

Continuous integration is important with single-player and client-hosted games. It’s even more important as you add more complexity and moving pieces required for dedicated server games.

Ideally, you’d have a big button that releases your game and automates all related processes. While the ideal might be out of reach, it’s possible to remove the human aspect from the process as much as possible. For example, you can usually automate:

- [Infrastructure setup](#infrastructure-setup)
- [Quality assurance (QA) testing](#quality-assurance-qa-testing)

#### Infrastructure setup

You can usually automate setting up your infrastructure in a cloud environment with your hosting provider's orchestration SDK. However, you can also use APIs and infrastructure as code integrations.

:::note
[Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) and [declarative APIs](https://google.aip.dev/news/2020-10) are usually easier to manage than creating your own procedures with REST APIs and SDKs.
:::

#### Quality assurance (QA) testing

You can use continuous integration to automate your QA team’s flows. For example, you can automate a custom build pipeline for creating daily test builds and setting up a custom dedicated server for testing. Additionally, you can automate setting up playtests with the test builds and test servers.

When you create a custom build pipeline using `BuildPipeline.BuildPlayer`, you must set `buildPlayerOptions.subtarget` to `(int)StandaloneBuildSubtarget.Server` to set your build as a dedicated server build. This means you need both `buildPlayerOptions.subtarget` and `buildPlayerOptions.target`.

Make sure to add the `-standaloneBuildSubtarget Server` command-line argument (in addition to your specified build target) when using the command line.

:::tip
You can use Unity services, such as [Remote Config](https://docs.unity.com/remote-config/), to improve your continuous integration pipeline.
:::

## Support and resources

[Join the Multiplayer Technology group on Discord](https://discord.gg/buMxnnPvTb) for questions, comments, and discussions. Also check out the following resources:

- [An Introduction to multiplayer network and server models](https://unity.com/how-to/intro-to-network-server-models)
- [Dedicated Server target and stripping optimizations discussion in the Unity Forum](https://forum.unity.com/threads/unity-2021-2-dedicated-server-target-and-stripping-optimizations-now-live-please-share-feedback.1143734/)
- [Unity Support](https://support.unity.com/hc/en-us)
