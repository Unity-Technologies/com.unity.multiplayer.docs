---
id: hosting-considerations
title: Porting from client-hosted to DGS - Hosting considerations
sidebar_label: Hosting considerations
---

:::note
This is part five of the [Porting from client-hosted to dedicated server-hosted series](../porting-to-dgs).

See the other pages in this series:

- [Part 1 - Introduction](../porting-to-dgs)
- [Part 2 - Client-hosted versus DGS-hosted](./client-vs-dgs)
- [Part 3 - Game changes](./porting-to-dgs-game-changes)
- [Part 4 - Optimizing server builds](./optimizing-server-builds)
- **Part 5** - Current

:::

:::note
The content in the section isn’t intended as a definitive guide; it’s more of an introduction to hosting considerations.
:::

Now that you have an optimized dedicated server build, you need to make it accessible to your players. This section provides a high-level overview of the various available hosting options, including the pros and cons of each and some key considerations. This list isn't exhaustive, or meant as a single resource for decision-making; rather, a jumping-off point for further exploration of your needs.

## Hosting types

There are a few general categories of hosting types: [player self-hosted](#player-self-hosted), [developer-hosted on-premise](#developer-hosted-on-premise), [developer-hosted cloud](#developer-hosted-cloud), and [managed service provider](#managed-service-provider).

### Player self-hosted

Player self-hosted games are games that allow players to download both the headless server build and the client build. An example of a player self-hosted game is Minecraft. Players can host a Minecraft server locally, make it available from outside their local network through port forwarding to allow their friends to connect to it. See the following table for the pros and cons of a player self-hosted game.

| PROS | CONS |
|---|---|
| You, as the developer, incur minimal hosting costs because the players are responsible for hosting the server build. | Players must have a network provider that enables outside access to the local network. |
| Players have freedom and control of the server they play on. | Players must know how to run and manage the server build. |
|  | Players must know how to port forward. |
|  | Players must have hardware capable of running the server build or pay a provider to host the server build. |
|  | The server's reliability depends on the reliability of the player’s network (unless the player uses a hosting provider). |

### Developer-hosted on-premise

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
|  | You don’t have access to some quality-of-life features providers might offer, such as automatic backup and differential syncing. You can implement these features on-premise, but you must invest the resources to do so. |
|  | If your users are located across the globe, you’ll need multiple data centers. |
|  | It’s difficult to achieve the same level of security provided by services such as AWS. |
|  | There’s a lot you must consider that a service or hosting provider would normally handle for you, such as redundancy, fire suppression, backup generators, geographic availability, and staffing. |

See the following resources to learn more about hosting in the cloud versus on-premise:

- Microsoft documentation on [Cloud storage vs. on-premises servers: 9 things to keep in mind](https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/cloud-storage-vs-on-premises-servers)

### Developer-hosted cloud

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

### Managed service provider

A managed service provider is a service that takes your game server build and manages hosting, scaling, and maintaining it in a white-glove environment. You tell the managed service provider how to run your game, and you often have control over scaling, availability, and other key operation points. Examples of managed service providers include [Unity’s Game Server Hosting](https://docs.unity.com/multiplay/), Amazon Web Services’ Gamelift, Microsoft’s Playfab, and Google’s Agones.

See the following table to learn more about the pros and cons of opting for a managed service provider to host your game.

| PROS | CONS |
|---|---|
| You don’t have to worry about creating and maintaining the virtual or physical infrastructure to host your game. | You often don’t have visibility into the inner workings of the service. |
| Managed service providers often make it easy to scale up or down in response to changing resource requirements. | You must rely on the managed service provider to guarantee uptime, availability, and support. |
| Managed service providers often have quality-of-life features, such as analytic dashboards, automatic scaling, and logging solutions. | Some managed service providers require you to make code changes to use their service. |
| Because you don’t have to worry about infrastructure, you can spend more time improving the player experience of your game. | Similar to cloud hosting solutions, managed services often cost more than on-premise solutions. |
| Some managed service providers (such as Unity’s GSH) often have deals with multiple cloud providers, which increases the redundancy and availability of your game. |  |

## Hosting provider SDK

Your game server usually needs a way to communicate with their hosting provider, to expose essential information, like the number of connected players, available player slots, map information, and server readiness to accept new player connections.

Managed service providers usually provide an SDK you can use to integrate your game. For example, if you use Unity’s Game Server Hosting solution, you can use the [Game Server SDK](https://docs.unity.com/game-server-hosting/sdk/sdk-overview.html).

You can also create similar tooling internally if you manage your own infrastructure, such as with an on-premise or cloud-hosted solution.

## Matchmaking

Many multiplayer games use a matchmaker to place players into game sessions based on configurable rules. However, other games use server-select workflow in which players manually create and join game sessions.

Depending on the nature of your multiplayer game, you might also need to consider a matchmaking solution. You can use a matchmaking solution like [Unity’s Matchmaker](https://docs.unity.com/matchmaker/) or create an in-house solution.

The Boss Room sample relies on Unity’s [Lobby service](https://docs.unity.com/lobby/) to advertise hosts for client-hosted games, but you can adapt it for a dedicated-server workflow.

The lobby-based matchmaking in the Boss Room sample is minimal and might result in unfair matches if highly skilled players end up in the same lobby as low-skilled players. You can extend the example implementation with Unity’s Matchmaker service, which integrates with Game Server Hosting to match the right players together and send them to the best possible service. See the [Matchplay sample](https://github.com/Unity-Technologies/com.unity.services.samples.matchplay).

## Continuous integration (CI)

Continuous integration is important with single-player and client-hosted games. It’s even more important as you add more complexity and moving pieces required for dedicated server games.

Ideally, you’d have a big button that releases your game and automates all related processes. While the ideal might be out of reach, it’s possible to remove the human aspect from the process as much as possible. For example, you can usually automate:

- [Infrastructure setup](#infrastructure-setup)
- [Quality assurance (QA) testing](#quality-assurance-qa-testing)

### Infrastructure setup

You can usually automate setting up your infrastructure in a cloud environment with your hosting provider's orchestration SDK. However, you can also use APIs and infrastructure as code integrations.

:::note
[Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) and [declarative APIs](https://google.aip.dev/news/2020-10) are usually easier to manage than creating your own procedures with REST APIs and SDKs.
:::

### Quality assurance (QA) testing

You can use continuous integration to automate your QA team’s flows. For example, you can automate a custom build pipeline for creating daily test builds and setting up a custom dedicated server for testing. Additionally, you can automate setting up play tests with the test builds and test servers.

When you create a custom build pipeline using `BuildPipeline.BuildPlayer`, you must set `buildPlayerOptions.subtarget` to `(int)StandaloneBuildSubtarget.Server` to set your build as a dedicated server build. This means you need both `buildPlayerOptions.subtarget` and `buildPlayerOptions.target`.

Make sure to add the `-standaloneBuildSubtarget Server` command-line argument (in addition to your specified build target) when using the command line.

:::tip
You can use Unity services, such as [Remote Config](https://docs.unity.com/remote-config/), to improve your continuous integration pipeline.
:::
