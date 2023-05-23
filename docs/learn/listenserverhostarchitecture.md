---
id: listen-server-host-architecture
title: Create a game with a listen server and host architecture
sidebar_label: Listen server and host architecture
---

## What is a listen server

A listen server acts as both a server and client on a single player's machine for multiplayer game play. This means one player both plays the game and owns the game world while other players connect to this server.

This set up has performance, security, and cost considerations for implementation.

### Disadvantages

- Network performance relies on the residential internet connection of the host player and their machine's output effeciency. Both may cause the remote players connecting to the host to suffer performance issues.
- The host player may have a large latency advantage over the remote players.
- With access to all of the game world's information, the host player has an easier opportunity to cheat.
- The server, i.e. the game ceases to exist when the host player leaves the game.

### Advantages

- Essentially free
- Doesn't require special infrastructure or forward planning to set up. This makes them common use for LAN parties because latency and bandwidth issues aren't a concern.

## When to use a listen server architecture

Listen server architecture is a popular choice for single player games that want to provide the option to add a friend into an existing game world. Listen servers are best suited for a smaller player group (< 12) and games that don't require a persistent world.

:::info
*Persistent world* in Netcode for GameObjects (NGO) means "a persistent online world." 

For example, the game state isn't bound to a player or a session, but is often tied to the host.
:::

In contrast to dedicated servers, listen servers are cheaper without the need to run dedicated authoritative servers for your game. Often, the listen server approach is chosen to avoid setting up a system to orchestrate the game server fleet.

:::note
You still need to set up matchmaking for your player to join together to play. A listen server game requires redirecting players to the client-hosted server.
:::

:::funfact
*Valheim* by Iron Gate Studio is a listen server game with a persistent world. The host has a separate save game for playing with a group of friends versus when playing alone. It may not be ideal, but it works.
:::

## Connecting to a listen server

Connecting to someone elses computer is often not as straight forward as one would think. Computers are hidden behind NATs (Network Address Translation devices) and routers. Personal Computers are hidden behind those devices and usually not directly accessible. There are multiple options available to still create a connection to them.

### Option A: Port Forwarding

Often the host can forward a public port on his router to a machine in his local network and thus allow someone from the outside to connect to a listen server. While this approach works fine it comes with a few caveats.

1. Users need to manually open ports on their router and there is quite a bit of technical knowledge needed to do so.
1. Users won't always have access to their routers. For instance if they use a mobile device or are using a corporate network or public WIFI.

These limitations make port forwarding often not a viable option for a released game but it can be a useful tool for development. You can learn more about how to port forward here: https://portforward.com/

:::caution
There are risks associated port forwarding. If you open ports, then you are opening direct lines for hackers and malware attacks. it's recommended that you close the ports when you have completed your session.
:::

### Option B: Relay server

Players will always be able to connect to a dedicated server which has ports already forwarded. This servers can run in the cloud or in a data center.

The Relay server approach uses this to send data between two players. In a listen server scenario, the host and all clients would connect to the same listen server. The clients would then send packets to each other by sending them to the Relay server and telling it to redirect it to the right client.

The advantages of doing this compared to a direct connection is that connecting to a Relay server should always work for any client another advantage is that the Relay server can know when the host client disconnects and inform other clients about that or start a host migration process. If clients are directly to the host they won't be able if it's their internet or the hosts internet which caused the disconnect. The disavantages are that you'll have to pay for your Relay server and the round trip times for messages can be higher because messages have to go over the relay instead of to the other client directly.

### Option C: NAT Punchthrough

The idea behind NAT Punchthrough is to open a direct connection between clients without having one of them do portforwarding. There are multiple ways to do NAT punchthrough such as [STUN](../reference/glossary/network-terms.md#session-traversal-utilities-for-nat-stun), [ICE](../reference/glossary/network-terms.md#interactive-connectivity-establishment-ice) or [UDP hole punching](../reference/glossary/network-terms.md#udp-hole-punching). When NAT punching suceeds clients will have a direct connection open between them and can send packets to each other. Often NAT punching can fail this depends on the type of NATs which is between the clients. Since most games want everyone to be able to play their games, NAT Punchthrough isn't a popular option and is mostly only used with a fallback relay which is the next described option.

### Option D: NAT Punch and Relay Fallback

This option combines NAT punching with a relay fallback. The idea is to first have clients try connecting to the host via NAT punching and if the connection fails they default back to the relay server. This helps to reduce load on the relay while still allowing any client to connect to the host. This option is widely used because
it reduces hosting costs of relay servers.

## Which option to chose

Listen server games often use Nat Punch and Relay Fallback (option D) because it keeps costs low while allowing anyone to join a session. NAT Punchthrough (option C) can be a good option as well because the relay can better handle disconnects and host migration and might have a better connection quality.

Many platforms come with platform specific networking solutions. They usually use the NAT Punch and Relay Fallback model behind the scenes. They can be a good option because they're free and integrate with other API features of the platform such as social systems. They're often limited to just their own platforms.

There are companies which provide relay servers in your cloud ready for your game to use such as Playfab Party or Photon Realtime. They usually charge a cost based on the CCU (conccurrent users).

## Netcode for GameObjects (Netcode) and listen servers

Netcode modular transport system supports all the options above. Most regular transports will allow you to connect to them
via port forwarding. Netcode can support platform specific relays via Transport. You can find implementations in the Netcode-community-contributions repository. Netcode also supports cross platform listen servers by integrating a third party relay service via transport. You can also write your own Relay server or NAT punch server for Netcode.
