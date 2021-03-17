---
id: listenserverhostarchitecture
title: Create a game with a listen server / host architecture.
sidebar_label: Create a game with a listen server / host architecture.
---


## What is a listen server

A listen server is hosted on one of the player's machine. It acts both as a server and as a client. This means one of the players will both play and own the game world and other players will connect to it. This has performance, security and cost considerations.

### Disadvantages

- Network Performance  is impacted by having to communicate with remote players over the residential internet connection of the host player.  
- Network Performance may also be reduced because the machine running the server is also generating an output image. 
- Listen servers grant the host player a large latency advantage over other players.
- The hosting client has access to all the world's information, making it easier to cheat for that player. 
- The server will cease to exist when host player leaves the game.

### Advantages 

- Essentially free 
- Do not require any special infrastructure or forward planning to set up, which makes them common at LAN parties where latency and bandwidth issues are not a concern.

## When to use a listen server architecture

The listen server architecture is a popular option for single player games which want to add the option to add a friend into an existing world. Listen servers work best for a smaller amount of players (< 12) and for games which don't need persistent worlds because the game state is often tied to the host. 
:::info
Persistent world in netcode usually means "persistent online world' E.g. the game state is not bound to a player or a session
:::
Listen servers are also much cheaper then dedicated servers because there is no need to run dedicated authorative servers for your game. Often developers chose a listen server approach because they don't want to deal with setting up a system which orchestrates their game server fleet.
:::note
You will still have to setup matchmaking to get your players to join together. You can't just  launch a listen server game and get players playing together, you still have to redirect players to those client-hosted servers.
:::

:::funfact
Valheim is a listen server game with a persistent world. The host has a save game when a group of friends want to play together the host needs to start the world from that save. It's not ideal, but it works.
:::

## Connecting to a listen server

Connecting to someone elses computer is often not as straight forward as one would think. Computers are hidden behind NATs (Network Address Translation devices) and routers. Personal Computers are hidden behind those devices and usually not directly accessible. There are multiple options available to still create a connection to them.

### (Option a) Port Forwarding

Often the host can forward a public port on his router to a machine in his local network and thus allow someone from the outside to connect to a listen server. While this approach works fine it comes with a few caveats.
1. Users need to manually open ports on their router and there is quite a bit of technical knowledge needed to do so.
2. Users won't always have access to their routers. For instance if they use a mobile device or are using a corporate network or public WIFI.
These limitations make port forwarding often not a viable option for a released game but it can be a useful tool for development.  You can learn more about how to port forward here: https://portforward.com/

### (Option b) Relay server

Players will always be able to connect to a dedicated server which has ports already forwarded. This servers could run in the cloud or in a data center.
The relay server approach uses this to send data between two players. In a listen server scenario, the host and all clients would connect to the same listen server. The clients would then send packets to each other by sending them to the relay server and telling it to redirect it to the right client.

The advantages of doing this compared to a direct connection is that connecting to a relay server should always for any client another advantage is that the relay server can know when the host client disconnects and inform other clients about that or start a host migration process. If clients are directly to the host they won't be able if it is their internet or the hosts internet which caused the disconnect. The disavantages are that you'll have to pay for your relay server and the round trip times for messages could be higher because messages have to go over the relay instead of to the other client directly.

### (Option c) NAT Punchthrough

The idea behind NAT Punchthrough is to open a direct connection between clients without having one of them do portforwarding. There are multiple ways to do NAT punchthrough such as [STUN](../reference/glossary/network-terms.md#session-traversal-utilities-for-nat-stun), [ICE](../reference/glossary/network-terms.md#interactive-connectivity-establishment-ice) or [UDP hole punching](../reference/glossary/network-terms.md#udp-hole-punching). When NAT punching suceeds clients will have a direct connection open between them and can send packets to each other. Often NAT punching can fail this depends on the type of NATs which is between the clients. Since most games want everyone to be able to play their games, NAT Punchthrough is not a popular option and is mostly only used with a fallback relay which is the next described option.

### (Option d) NAT Punch + Relay Fallback

This option combines NAT punching with a relay fallback. The idea is to first have clients try connecting to the host via NAT punching and if the connection fails they default back to the relay server. This helps to reduce load on the relay while still allowing any client to connect to the host. This option is widely used because 
it reduces hosting costs of relay servers.

## Which option to chose

Listen server games often use (option d) because it keeps costs low. While allowing anyone to join a session. (Option c) can be a good option as well because
the relay can better handle disconnects and host migration and might have a better connection quality.

A lot of platforms come with platform specific networking solutions. They usually use the NAT punch + relay fallback model behind the scenes. They can be a good option because they are free and integrate with other API features of the platform such as social systems. They are often limited to just their own platforms

There are companies which provide relay servers in your cloud ready for your game to use such as Playfab Party or Photon Realtime. They usually charge a cost based on the CCU (conccurrent users)

## MLAPI and listen servers

MLAPI modular transport system supports all the options above. Most regular transports will allow you to connect to them
via port forwarding. MLAPI can support platform specific relays via Transport. You can find implementations in the mlapi-community-contributions repository. MLAPI also supports cross platform listen servers by integrating a third party relay service via transport. You can also write your own relay server or NAT punch server for MLAPI.