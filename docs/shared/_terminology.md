[A](#a) &nbsp; | &nbsp; *B* &nbsp; | &nbsp; [C](#c) &nbsp; | &nbsp; *D* &nbsp; | &nbsp; [E](#e) &nbsp; | &nbsp; *F* &nbsp; | &nbsp; [G](#g) &nbsp; | &nbsp; [H](#h) &nbsp; | &nbsp; [I](#i) &nbsp; | &nbsp; *J* &nbsp; | &nbsp; *K* &nbsp; | &nbsp; *L* &nbsp; | &nbsp; *M* &nbsp; | &nbsp; [N](#n) &nbsp; | &nbsp; [O](#o) &nbsp; | &nbsp; [P](#p) &nbsp; | &nbsp; *Q* &nbsp; | &nbsp; [R](#r) &nbsp; | &nbsp; [S](#s) &nbsp; | &nbsp; [T](#t) &nbsp; | &nbsp; [U](#u) &nbsp; | &nbsp; *V* &nbsp; | &nbsp; *W* &nbsp; | &nbsp; *X* &nbsp; | &nbsp; *Y* &nbsp; | &nbsp; *Z*

## A

### Age (Staleness)

Objects or data which hasn’t been transmitted in a long time becomes higher-priority, until the next time it's transmitted, at which time its priority returns to a lower value.

### Asymmetrical multiplayer

A type of gameplay in which players can have significantly different roles or abilities from each other; enough to provide a significantly different experience of the game. 

- **Soft Asymmetry:** Players have the same basic mechanics (such as movement and death), yet have different roles in the game.

- **Strong Asymmetry:** One player/team may have one gameplay experience (or be in softly asymmetric roles) while the other player/team play in a drastically different way, with different mechanics and/or a different type of objective.

## B

## C

###  Client 

Is a network client that connects an individual user to the server, used mainly in multiplayer video games. It collects data such as score, player status, position and movement from a single player and sends it to the  server, which allows the server to collect each individual's data and show every player in game.

### Client Runtime

Is the active software and instructions executed while your applications are running on your local client. This includes mobile devices and desktop computers using a client application.

## D

## E

### Errors

Sometimes packets are corrupted due to bit errors caused by noise and interference, especially in wireless communications and long copper wires. The receiver has to detect this, and, just as if the packet was dropped, may ask for this information to be retransmitted.

## F

## G

### Gameplay Relevance
See also *[Spatial Relevance](#spatial-relevance)*
- **Interaction:** Have I, or am I likely about to, interact with a gameplay element. For example, a grenade I threw far away.
- **Objective:** Critical gameplay elements which need constant awareness. For example, a player carrying a flag across the map in CTF.

### Goodput

Due to varying load from disparate users sharing the same network resources, the maximum throughput that can be provided to a certain data stream may be too low for real-time multimedia services.

## H

### Hit Registration

This is how a shooter determines if your shot hit something. There are two main forms of hit registration.

:::note
There are more than just two cases. The non physics version of bullets via raycast is often also used for weapons with travel time such as snipers. Parabolas of bullets can be calculated without the need of a physics simulation.
:::

1. Games where bullet travel time isn't a factor in close quarters combat can use a simple and fast form where bullets have no travel time. 

1. Games where you need more complex and demanding bullet physics simulations for hit registration. Every projectile has a travel speed and trajectory, affected by various factors.

Hit registration can be done by your game client (client side), which then tells the server (or in p2p, the other clients) that you hit something. 

## I

### Interaction

Similar to interaction as it relates to Relevancy, objects which you have recently, or are about to interact with should typically be treated as higher priority to keep more frequent updates/synchronization.

Many things can happen to packets as they travel from origin to destination, resulting in the following problems as seen from the point of view of the sender and receiver:
See *[Goodput](#goodput)*, *[Packet loss](#packet-loss)*, *[Errors](#errors)*, *[Latency](../learn/dealing-with-latency.md)*, *[Packet delay variation](#packet-delay-variation)*, [Out-of-order delivery](#out-of-order-delivery)*

### Interactive Connectivity Establishment (ICE) 

*ICE* is a technique used in computer networking to find ways for two computers to talk to each other as directly as possible in peer-to-peer networking. This is most commonly used for interactive media such as Voice over Internet Protocol (VoIP), peer-to-peer communications, video, and instant messaging.

### IP address 

An Internet Protocol address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: host or network interface identification and location addressing.

## J

## K

## L

## M

## N

### Netcode

Is a blanket term for anything that somehow relates to networking in online games; netcode is a term most commonly used by gamers when discussing synchronization issues between clients and servers.

### Network address translation (NAT) 

*Network address translation (NAT)* is a method of mapping an *IP address* space into another by modifying network address information in the IP header of packets while they're in transit across a traffic routing device.

### Networking Transport Layer

The transport layer collects message segments from applications, and transmits them into the network. The transport layer is also responsible for the management of error correction, providing quality and reliability to the end user.

This layer enables the host to send and receive error corrected data, packets or messages over a network 

![Networking Transport](/img/networking-transport.png)

## O

### Out-of-order delivery

When a collection of related packets is routed through a network, different packets may take different routes, each resulting in a different delay. The result is that the packets arrive in a different order than they were sent. This problem requires special additional protocols for rearranging out-of-order packets. The reordering process requires additional buffering at the receiver, and, as with packet delay variation, increases the overall latency for the stream.

## P

### Packet

Packets are composed of a header and payload. 

- The **header** consists of fixed and optional fields. 
- The **payload** is the data that is carried on behalf of an application

The payload appears immediately after the header.

### Packet delay variation

Packets from the source will reach the destination with different delays. A packet's delay varies with its position in the queues of the routers along the path between source and destination, and this position can vary unpredictably. Delay variation can be absorbed at the receiver, but in so doing increases the overall latency for the stream.

### Packet loss

The network may fail to deliver (drop) some packets due to network congestion. The receiving application may ask for this information to be retransmitted, possibly resulting in congestive collapse or unacceptable delays in the overall transmission.

### Port 

A network port is a process-specific or an application-specific software construct serving as a communication endpoint, which is used by the Transport Layer protocols of Internet Protocol suite, such as User Diagram Protocol (UDP) and Transmission Control Protocol (TCP)

## Q

## R

### Reliable User Datagram Protocol (RUDP)

Reliable User Datagram Protocol (RUDP) provides a solution where UDP is too primitive because guaranteed-order packet delivery is desirable, but TCP adds too much complexity and overhead. It provides real-time, reliability and algorithm simplicity of embedded systems, both requirements for RCP and UDP. In order for RUDP to gain higher quality of service, RUDP implements features that are similar to TCP with less overhead.

### Routing

A data packet travels at a more or less fixed speed, so a player's ping is directly affected by the distance between the player and the server. However, the copper and fiber optic cables don't take a direct path to the data center, so the path, or route, to a data center that's physically farther away can actually end up being shorter than a route a data center that's physically closer to you.

Another factor that affects the data travel time is the number of stops (or hops) that your data packet must make on its way. Every additional hop also increases the risk that you lose a data packet.

<ImageSwitcher 
lightImageSrc="/img/data-relay-light.png?text=LightMode"
darkImageSrc="/img/data-relay-dark.png?text=DarkMode"/>

## S

###  Server 

Is a server which is the authoritative source of events in a multiplayer video game. The server transmits enough data about its internal state to allow its connected clients to keep their own accurate version of the game world for display to players. They also receive and process each player's input

### Server Runtime

Is the active software and instructions executed while your applications are running on your server. This includes physical and virtual servers running hosted services and software communicating with additional services and clients.

### Session Traversal Utilities for NAT (STUN)

*STUN* is a tool for communications protocols to detect and traverse network address translators that are located in the path between two endpoints of communication. it's implemented as a light-weight client-server protocol, requiring only simple query and response components with a third-party server located on the common, easily accessible network, typically the Internet.

The basic protocol operates essentially as follows: The client, typically operating inside a private network, sends a binding request to a *STUN* server on the public Internet. The STUN server responds with a success response that has the IP address and port number of the client, as observed from the server's perspective. 

*STUN* messages are sent in *User Datagram Protocol (UDP)* packets. Since UDP does not provide reliable transport guarantees, reliability is achieved by application-controlled retransmissions of the *STUN* requests. *STUN* servers don't implement any reliability mechanism for their responses. When reliability is mandatory, the *Transmission Control Protocol (TCP)* may be used, but induces extra networking overhead

### Socket

A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to. An endpoint is a combination of an IP address and a port number.

### Spatial Relevance
See also: *[Gameplay Relevance](#gameplay-relevance)*
- **Distance from player:** How many units away is this object from the networked player
- **Static Zones:** Predefined areas of a game world, where a player typically only finds objects within their same zone or adjacent zones as relevant. Examples would be a room, building, or town.
- **View Frustum:** If it's in the camera’s view it’s relevant. If it's behind me, it isn't.
- **Instances:** Static zones which can be instantiated/copied multiple times. Example would be a dungeon raid.

## T

### Transmission Control Protocol (TCP)

Transmission Control Protocol (TCP) is a connection-oriented communications protocol that facilitates the exchange of messages between computing devices in a network. it's the most common protocol in networks that use the Internet Protocol (IP); together they're sometimes referred to as TCP/IP.

TCP takes messages from an application/server and divides them into packets, which can then be forwarded by the devices in the network – switches, routers, security gateways – to the destination. TCP numbers each packet and reassembles them before handing them off to the application/server recipient. Because it's connection-oriented, it ensures a connection is established and maintained until the exchange between the application/servers sending and receiving the message is complete.

## U

### User Datagram Protocol (UDP)

User Datagram Protocol (UDP) uses a simple connectionless communication model with a minimum of protocol mechanisms. UDP provides checksums for data integrity, and port numbers for addressing different functions at the source and destination of the datagram. It has no handshaking dialogues, and thus exposes the user's program to any unreliability of the underlying network; there is no guarantee of delivery, ordering, or duplicate protection. 

UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the protocol stack. Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to retransmission, which may not be an option in a real-time system.

### UDP hole punching

*UDP hole punching* is a commonly used technique employed in *Network Address Translation (NAT)* applications for maintaining *User Datagram Protocol (UDP)* packet streams that traverse the *NAT*. NAT traversal techniques are typically required for client-to-client networking applications on the Internet involving hosts connected in private networks, especially in peer-to-peer, Direct Client-to-Client (DCC) and Voice over Internet Protocol (VoIP) deployments.

UDP hole punching establishes connectivity between two hosts communicating across one or more network address translators. Typically, third-party hosts on the public transit network are used to establish UDP port states that may be used for direct communications between the communicating hosts. Once port state has been successfully established and the hosts are communicating, port state may be maintained either by normal communications traffic, or in the prolonged absence thereof, by keep-alive packets, usually consisting of empty UDP packets or packets with minimal non-intrusive content.

## V

## W

## X

## Y

## Z

import ImageSwitcher from '@site/src/ImageSwitcher.js';
