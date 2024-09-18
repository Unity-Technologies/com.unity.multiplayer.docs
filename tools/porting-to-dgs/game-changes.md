---
id: porting-to-dgs-game-changes
title: Porting from client-hosted to DGS - Game changes
sidebar_label: Game changes
---
:::note
This is part three of the [Porting from client-hosted to dedicated server-hosted series](../porting-to-dgs).

See the other pages in this series:

- [Part 1 - Introduction](../porting-to-dgs)
- [Part 2 - Client-hosted versus DGS-hosted](./client-vs-dgs)
- **Part 3** - Current
- [Part 4 - Optimizing server builds](./optimizing-server-builds)
- [Part 5 - Hosting considerations](./hosting-considerations)

:::

This section covers the changes required to change your game from a client-hosted hosting approach to a dedicated-server hosting approach, organized by [NGO-specific changes](#ngo-specific-changes), [in-game automation](#in-game-automation), and [general game changes](#general-game-changes).

## NGO-specific changes

See the following sections to learn about the NGO-specific game changes required to port a game from client-hosted to server-hosted.

- [Switch from StartHost to StartServer](#switch-from-starthost-to-startserver)
- [Change the listen address and port](#change-the-listen-address-and-port)
- [Synchronize scene loading between the server and clients](#synchronize-scene-loading-between-the-server-and-clients)
- [Use scene events instead of OnNetworkSpawn for static objects](#use-scene-events-instead-of-onnetworkspawn-for-static-objects)

### Switch from `StartHost` to `StartServer`

NGO provides [`StartHost`](../../api/Unity.Netcode.NetworkManager#starthost) and [`StartServer`](../../api/Unity.Netcode.NetworkManager#startserver). `StartHost` makes the player act as both a client and a server. `StartServer` acts only as a server; players can't run on `StartServer`.

You must adapt the `if (IsServer)` logic of your game so that it doesn't assume a player is there.

### Change the listen address and port

Porting from a client-hosted to a server-hosted game often requires you to change the IP address your game listens on.

By default, NGO uses `127.0.0.1` as the listen address; however, that address is only reachable by other processes on the same machine, which isn’t useful for server-hosted games. Typically, server-hosted games listen on all addresses using `0.0.0.0`.

Most hosting providers allow you to specify a port or give you a specific port to listen on. You need to capture the port your game uses to set them in [UTP](../../../transport/about.md). You can do this in many ways. For example, you can:

- Use [command-line arguments](https://learn.microsoft.com/en-us/dotnet/api/system.environment.getcommandlineargs?view=net-7.0) (`Environment.GetCommandLineArgs`).
- Use [environment variables](https://learn.microsoft.com/en-us/dotnet/api/system.environment.getenvironmentvariable?view=net-7.0) (`Environment.GetEnvironmentVariable`).

### Synchronize scene loading between the server and clients

A common difference between client-hosted and server-hosted games is that there are scenes the client uses but the server doesn’t need to know about.

If you use [scene management](../../basics/scenemanagement/scene-management-overview), NGO automatically tracks all scene changes on the server and syncs connected clients. You can exclude specific scenes from loading client-side or server-side by excluding those scenes from NGO’s scene management using `SceneManager`’s `VerifySceneBeforeLoading`.

```csharp
NetworkManager.Singleton.SceneManager.VerifySceneBeforeLoading += DontSyncClientOnlyScenes;
```

### Use scene events instead of OnNetworkSpawn for static objects

It's tempting to use `NetworkBehaviours` on offline objects to get access to `OnNetworkSpawn`. However, there are a couple of issues with this approach discussed in the [stripping section below](./optimizing-server-builds#ngo-and-script-stripping). You should use [Scene events](../../basics/scenemanagement/using-networkscenemanager#scene-events-and-scene-event-progress) for static spawn events instead. In general, you should avoid using `NetworkBehaviour` if you expect to strip them.

You can also use a placeholder [`NetworkBehaviour`](../../basics/networkbehavior) that exposes its `OnNetworkSpawn` to other components on the same `NetworkObject`.

## In-game automation

Games using a DGS hosting approach rely on automation to handle startup events and post-game cleanup.

- [Automate start-up logic](#automate-start-up-logic)
- [Automate closing the lobby](#automate-closing-the-lobby)
- [Automate game session cleanup](#automate-game-session-cleanup)
- [Automate exit codes](#automate-exit-codes)

### Automate start-up logic

Instead of using in-game menus on start-up, you’ll need to implement an automated startup flow that will `StartServer()` automatically, then wait for your clients to connect. This is also when you might want to set up a lobby in your lobby service or advertise yourself as “ready” to your hosting provider and matchmaking service. After your service knows you’re ready, it can redirect clients to your server.

:::note
If you’re interested in using other Unity services for your multiplayer game, see [Lobby](https://docs.unity.com/lobby), [Multiplay Hosting](https://docs.unity.com/game-server-hosting), and [Matchmaker](https://docs.unity.com/matchmaker).
:::

### Automate closing the lobby

In a client-hosted game, the lobby automatically closes when the last player leaves (since the last player would be the host). However, because a headless server doesn't count as a player, the dedicated server remains open even after all the clients disconnect. As a result, and depending on your game implementation, you might want to update your lobby management flow. The best solution depends on your specific needs, but some common options include:

- Closing the lobby after the last player leaves and prepare the server for the next game session.
- Leaving the lobby open for the next game session.
- Marking the server as “empty” and waiting for the hosting provider to kill the instance. This might result in some cost savings because you won’t have to pay to keep an unnecessary instance online.

### Automate game session cleanup

Another automation you might want to consider is returning the player to character select after a game session ends.

With a DGS hosting approach, there’s no “return to lobby” button for the host after a game is over. As a result, you must decide how to handle when a game session ends. In general, you have two options:

1. [Queue players for a new game session](#queue-players-for-a-new-game-session).
2. [Reuse the same game session](#reuse-the-same-game-session).

Ultimately, the difference between these two options comes to reusing game sessions versus sending players to a queue for a new game session.

For most match-based games, it’s easier to send players to a matchmaking queue than it's to reuse the same game session. Reusing the same game session leads to long-running server processes, which increases the risk of corruption and bugs.

However, if you have a continuous-world game, such as a massively multiplayer online (MMO) game, reusing game sessions better facilitates a continuous connected experience.

#### Queue players for a new game session

Placing players in a queue for a new game session makes it easier to develop, as it’s easier to test short game sessions. Long game sessions make it difficult to change your game code, then test hundreds of hours of uptime with that change to make sure that change works for your typical server lifetime.

Finishing game sessions and sending users back to a matchmaking queue can also help with [server fragmentation](https://docs.unity.com/game-server-hosting/legacy/server-fragmentation.html). It allows your hosting provider to scale down servers as needed without worrying about kicking out players.

| PROS | CONS |
|---|---|
| Better for match-based games | Not desirable for continuous player experience, such as with MMO games |
| Less likely to introduce issues with corruption and long-running bugs |  |
| Memory leak issues are less clear |  |
| Best for short game sessions |  |
| Reduces the likelihood of server fragmentation |  |

#### Reuse the same game session

Starting a new game with connected players and keeping the same game session is more seamless and introduces less wait time, but it’s harder to make sure nothing breaks long-term.

| PROS | CONS |
|---|---|
| Better for a seamless or continuous player experience | More likely to introduce issues with corruption and long-running bugs |
| Desirable for MMO games | Memory leaks are harder to test for. |
| Best for long game sessions |  |

### Automate exit codes

Many hosting providers, such as [Unity’s Multiplay Hosting service](https://docs.unity.com/multiplay/), watch your server and react to exit codes. For example, if you have a bug resulting in `StartServer` failing, you can call `Application.Quit(1)` with exit code `1`. Exit codes greater than `0` let the hosting provider know something went wrong and the provider can automatically react to this appropriately by trying to reboot your server or just destroying it.

## General game changes

See the following sections to learn about the general game changes involved in porting a game from client-hosted to server-hosted.

### Update logging

There are some distinct differences between logging for client-hosted games and server-hosted games. With a server-hosted game, you don't have a view into your game as you'd have with other types of platforms. You'll need to rely on logging to get insights into what's happening on your servers, especially with live fleets of thousands of servers.

Unity's built-in logging (`Debug.Log`) doesn’t work for server-hosted games because it lacks the following requirements:

- [Structured logging](#structured-logging)
- [Log levels](#log-levels)
- [Log file rotation](#log-file-rotation)
- [Performance](#performance)

Instead, you should use an alternative solution such as Unity’s [logging package](https://docs.unity3d.com/Packages/com.unity.logging@1.0/manual/index.html).

#### Structured logging

You don't want to look at log files individually when you have thousands of servers in your fleet. Ideally, to support a dedicated-server game, you want:

- Log ingestion tools
- Log analysis tools
- Log parsing tools (for example, Elasticsearch)

Many logging services encompass all the above. To use these tools, you should structure your logs in a machine-readable manner (for example, `JSON`). Structured machine-friendly logs make it easier to integrate with the log tooling you’ll need to analyze your data.

#### Log levels

In a production environment, you won't typically want to receive `INFO` or `DEBUG` level logs, only critical logs (such as warnings and errors). Including non-essential logging information in your production environment might spam your logging tools and increase the cost of parsing and analyzing logs. Log level support allows you to control which log levels you receive in each environment. That way, you can have `INFO` and `DEBUG` logs in your development environment and only the critical logs in your production environment.

#### Log file rotation

Unlike client-hosted game logs, which only last as long as the game session, dedicated-server game logs can grow larger for days or weeks at a time. This means your log file will grow increasingly large. The best way to prevent log files from becoming too large is to use log rotation. Log rotation is an automated way to swap log files at a consistent time interval, allowing you to manage and delete older log files.

:::note
If you’re using containers to host game servers, you should log to `STDERR`/`STDOUT` instead of a log file. `STDERR`/`STDOUT` is preferable in this case because the container orchestration layer (for example, Docker, Nomad, and K8S) is better suited to persist, collect, and ship the logs to central locations. Some logging solutions have [“sinks”](https://docs.unity3d.com/Packages/com.unity.logging@1.0/manual/sinks.html) available to customize log outputting.
:::

#### Performance

Logging can become a performance-costly operation, contributing to your CPU performance costs, which translates to increased hosting costs.

The logging solution you select should optimize for these scenarios. Such optimizations might include support for burst, multi-threading, and the ability to prevent logging full stack traces in production environments.

### Throttle the server-side frame rate

Because there’s no need to render in a headless server-side build, it’s useless to let it run at max frame rate. Usually, you can set `Application.targetFrameRate` to a low value, such as `30`. Doing so prevents the server-side simulation from spinning too fast, preventing useless micro-updates and saving on server hosting costs.

See [Servers using too much CPU](https://docs.unity.com/game-server-hosting/guides/troubleshooting.html#Servers_using_too_much_CPU).

### Update testing flows

Testing a server-hosted game is a bit more involved than testing a client-hosted game.

With the dedicated server build target, you don’t have visuals anymore; there’s no camera rendering anything for you.

When you’re testing in the Unity Editor, you can use the Scene view, Scene hierarchy, Inspector, and other tools. However, when testing builds that you intend to scale for a multiplayer game, you need to rely on other means. Some options for testing server builds include:

- [Console logs](#console-logs)
- [REST debugging servers](#rest-debugging-servers)
- [Virtual testing environments](#virtual-testing-environments)
- [Automated load testing](#automated-load-testing)

#### Console logs

You can use console logging to log all the [Scene hierarchy](https://docs.unity3d.com/Manual/Hierarchy.html), including all object information from them. However, doing so involves hard coding print statements at key points during runtime, and you can’t interact with them dynamically.

#### REST debugging servers

You can use debugging REST servers with multiple ports listening for different types of features in a single game.

Some games implement an extra TCP (transmission control protocol) endpoint listening for REST calls, which provides a debugging backdoor in your server that you can use for debugging, customer support, and quality assurance (QA). For example, you might have a debugging endpoint that responds to `GET` calls and returns an `index.html` that has server debugging information in a human-friendly format.

Some other ideas for increasing the usability of a REST debugging server include:

- Add support for dynamically changing the log level.
- Allow the REST server to access live logs redirected to an internal buffer.
- Send positional information about objects and display a live map of your game in-browser.
- Use [SSE (server sent events)](https://en.wikipedia.org/wiki/Server-sent_events) for sending updates to the REST server at regular intervals instead of having the REST server poll for logs.

:::warning
If you use a debugging REST server like described above, make sure to configure the port so that only developers can access it (but players can’t).
:::

#### Virtual testing environments

While you can usually test your build directly using a test instance from your provider, that requires you to upload your test build before you can test it, which can be cumbersome for quick local iteration flows.

A faster way to test builds is to set up a virtual machine (VM) locally with similar specifications as your hosting provider (and use a shared folder to send your local builds to it). You can use tools like SSH to access the VM from your local machine.

#### Automated load testing

:::note
There are many ways to perform load testing; the solutions mentioned in this section aren't exhaustive.
:::

You don’t want to launch your game live without load testing your hosting setup to ensure it can handle all your players and changes in CCU (concurrently connected users). You want to ensure your hosting and scaling rules can handle unexpected spikes in CCU. Otherwise, players might be unable to connect to your servers due to unexpected loads. Some benefits of load testing include:

- Ensuring auto scaling works. You can do this by launching automated clients to test how your hosting reacts to changes in load. You don’t need to test millions of users; you can extrapolate.
- Getting cost estimates, which you can extrapolate from a few servers running.
- Ensuring you don’t have resource contention between game server processes running on the same hardware. Ensuring processes don’t interfere with one another by using too much CPU and memory.

There are many ways to perform automated load testing. The following list has a couple of common examples:

- Recorded client input

##### Simple scripted input

The simple scripted input method involves creating virtual clients, having them connect to the server, and giving simple automated move inputs to your characters.

| PROS | CONS |
|---|---|
| Doesn’t require a recording setup. | Can become time-consuming for developers to automate. |
|  | Break easily. Manually written automated tests can break if your game behavior changes. For example, if you used to move your character forward to start, but now your map requires your character to jump out of your spawn point, you’ll need to fix your automated tests to add that new flow. |
|  | Not realistic. |

##### Recorded client input

To simple scripted inputs more realistic, you can record client inputs for a sample game session, then replicate the game recording on several servers with virtual clients. However, just like manual tests, game changes can break the automated tests, and you’ll need to re-record the sample game session.

| PROS | CONS |
|---|---|
| More realistic than simple scripted input. | Requires a recording setup, which can be complex. |
| Less time consuming for developers (QA can do the recordings) | Can break easily when you introduce game changes. |

### Profiling ports

Running your dedicated server locally in a virtual machine (VM) requires you to forward ports from the VM to the host computer to access the VM from the host. For example, if you want to access the [profiler](https://docs.unity3d.com/Manual/Profiler.html) from the VM, you must forward the port the profiler is listening to.

You can find the profiler port in the first couple of lines of the `player.log` file. If you have trouble finding the profiler port, try searching for "PlayerConnection Initialized" or "Multi-casting." See [Setting up profiler port manually](https://forum.unity.com/threads/setting-up-profiler-port-manually.862951/) and [Profiler profiling applications](https://docs.unity3d.com/Manual/profiler-profiling-applications.html).

If you use a firewall, you’ll also need to open the ports Unity uses for remote profiling (ports 54998 through 55511) in your firewall’s outbound rules.

With Unity Editor version 2023.1 and later, profiling ports are deterministic and won’t require always consulting player log files.

### Increase security

All game types, client-hosted and server-hosted, must consider security. You can’t trust your players. It’s not a matter of whether users will cheat but when. Switching from a client-hosted hosting approach to a server-hosted hosting approach reduces security risks and enables you to control sensitive game logic server-side. See [Dealing with latency](../../learn/dealing-with-latency/index.html#security).

With a client-hosted game, the world authority is in the hands of the player, an untrustworthy agent. With a server-hosted game, you, as the developer, control the authoritative world. As a result, you can guarantee better security over certain aspects of your gameplay that the server controls, such as authentication and monetization integrations.

For example, imagine you have a Super Sword item you can only access in certain areas of a dungeon. You must protect access to this Super Sword (and the in-game currency associated with it) from players tempering with their local game client.

By using a dedicated server to control sensitive gameplay logic (such as accessing the Super Sword), you can prevent players from going through walls, teleporting, automatically defeating all enemies, and similar exploits.

A dedicated server also allows you to perform authentication checks server-side without the risk of leaking user access tokens.

#### Datagram transport layer security (DTLS)

Some platforms require (or prefer) you to use DTLS (datagram transport layer security) to encrypt your network traffic. You can do this for client-hosted games with services like [Relay](https://docs.unity.com/relay/relay-and-utp.html#Create). However, enabling DTLS encryption for a server-hosted game is more involved.

One way to do this is to [use UTP to set up secure connections with DTLS](../../../transport/workflow-client-server-secure.md)(../../secure-connection/index.html). You must get a certificate from a [CA (certificate authority) provider](https://en.wikipedia.org/wiki/Certificate_authority) before you can use UTP to set up secure connections with DTLS. The instructions in the UTP documentation only cover using self-signed certificates.

DTLS enables you to add additional security measures to ensure players don’t fall victim to [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) and [packet sniffing](https://en.wikipedia.org/wiki/Packet_analyzer) attacks. If you combine DTLS with authentication and other security measures, you can ensure bad actors can’t make purchases and transactions for your players, send chats for your players, or pursue similar attacks.

Several companies use their own root certificate to be able to intercept and decrypt everything that walks on their network. This is a feature that's often found on "enterprise" firewalls. This is technically a use of a self-signed certificate.

It's also used when you have services that you can only reach by an IP address ("normal" certificates are always attached to a domain name). This is rather rare these days because typically most organizations can easily use subdomains of their main domain. On the other hand, it would be a real use for a video game. Like if you deploy on Multiplay, they just give you an IP address and a port. If you want to use DTLS, it's probably easier to have a self-signed certificate. Otherwise you would have to point your DNS to the IP address provided by Multiplay, which isn't practical (and can be problematic if the IP address isn't stable).

I've also seen self-signed certificates used for "offline" purposes, such as encrypting files, or authenticating binaries or configuration files.

### Optimize differential build updates

:::note
The content in this section might only apply to some hosting providers. Other hosting providers might have zero bandwidth costs for in-datacenter and ingress transfers.
:::

Some hosting providers manage build updates for you and charge for in-datacenter and ingress transfers. One such hosting provider is [Unity’s Multiplay Hosting](https://docs.unity.com/multiplay/) solution.

If you use Multiplay Hosting, you can make sure there’s no downtime between updates. Multiplay Hosting performs [build updates and rollouts](https://docs.unity.com/game-server-hosting/legacy/how-do-differential-updates-work.html) in the background. However, you can still [optimize your builds to reduce your bandwidth costs](https://docs.unity.com/game-server-hosting/legacy/cost-optimization.html). For example, you can speed up the update process (and incur fewer charges) by ensuring you have as few changes as possible between build versions.

There are several ways you can mitigate the differences between build versions. For example, you can use:

- [The same build machine to generate deterministic builds](#the-same-build-machine-to-generate-similar-builds)
- [Addressables and asset bundles to split your build](#addressables-and-asset-bundles-to-split-your-build)
- [DGS (dedicated game server) asset stripping](#dgs-asset-stripping)

#### The same build machine to generate similar builds

Use the same build machine with the same operating system (OS) to generate builds that are as similar as possible. Consistently using the same build machine prevents unnecessary inconsistencies between versions, such as those due to floating point arithmetic. One of the easiest ways to ensure you always use the same build machine is to use a dedicated build server. However, you can also designate a person in your team to create your builds but the recommended best practice is to not do this because it relies too heavily on a single individual.

#### Addressables and asset bundles to split your build

Use [addressables](https://docs.unity3d.com/Packages/com.unity.addressables@0.8/manual/index.html) and [asset bundles](https://docs.unity3d.com/Manual/AssetBundlesIntro.html) to split up your build. In this case, if one asset changes, you don't need to re-upload all assets in your game, only the modified asset.

If you implement this approach, make sure to review and refine the content in each `AssetBundle`. They shouldn’t contain any assets your server actually doesn't need, such as textures or meshes.

#### DGS asset stripping

DGS (dedicated game server) asset stripping improves the runtime performance of your game by excluding any assets the server doesn’t need. In addition to improving the runtime performance and reducing the server build, it can optimize the bandwidth consumption of rolling out an update to your fleet. As a result, it improves server build times, server bandwidth costs, deployment times, and loading times.

You can use DGS asset stripping to optimize many aspects of your server-hosted game. For example, it enables you to:

- Reduce the size of server builds
- Reduce server build times
- Decrease deployment  bandwidth costs
- Reduce deployment times
- Increase runtime performance by using less memory

If you’re a small game studio with a small player base, you might not consider the bandwidth costs involved with updating your game. However, these costs can grow quickly without optimizations like incremental builds. A server build of 30 GB and a fleet of 15,000 servers equates to hundreds of terabytes of bandwidth costs for each update.

:::tip
The recommended best practice is to review the bandwidth and related costs of your hosting provider so you can calculate the true cost of rolling out an update. You can view the pricing information for Unity’s Multiplay Hosting [here](https://docs.unity.com/game-server-hosting/concepts/pricing.html).
:::
