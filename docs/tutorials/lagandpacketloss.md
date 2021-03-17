---
id: lagandpacketloss
title: Lag and Packet Loss
sidebar_label: Lag and Packet Loss
---
A multiplayer game operating over the internet has to deal with several adverse factors that are not present when developing single-player or LAN-only multiplayer games.

:::important
It is important to mention that there are different game genres and platforms that allow for different acceptable latency budgets: 
- VR games are very sensitive to latency
    (7-20ms)
- fighting games and shooter games with twitchy gameplay are the next most sensitive        
(16-150ms latency before the user starts noticing lag regardless of framerate).
-  RTS games are on the other side of the latency tolerance spectrum.
  (values up to 500ms can be acceptable and not degrade the overall experience.
:::

## [Latency](../reference/glossary/network-latency-management.md#latency)

One of these factors is Latency, which in the context of games means the amount of time between cause and it's visible effect. An example can be a click on a button and a message popping up in response to said click.

Excessive latency that causes noticeable delay between cause and effect is typically referred to as Lag. 

:::note  
It is important to realise that while we can minimize the perceived impact of latency, but we can not get rid of it - latency is just a fact of life that has to be taken into account.
:::
There are both network and non-network related components of latency.

## Non-network latency:

- **Input sampling delay**: The time it takes for the input device to recognize that it has been activated and the time it takes for the game to detect that change
- **Render pipeline delay**: GPUs do not perform draw commands immediately, instead they batch them to be performed later on
- **Vsync**: - prevents an artifact known as screen tearing by locking the GPU to the vertical blanking interval of the monitor
- **Display processing delay**: Monitors typically process the incoming signal in some ways (deinterlacing, noise cancellation etc.), which adds to latency
- **Pixel response time**: LCD screen pixels physically take time to change their brightness

All in all a sum of non-network latency contributors can be called Input Lag - the time it takes user input to be rendered on screen (without any network communications being involved).

## Network latency:

- **Processing delay**: This is the time it takes for the router to read the packet header and to figure out the next machine that should receive the packet and then to forward it to the appropriate interface.  
  :::note
  This delay also includes any encryption, NAT, network mapping and other work that the router might be doing. Typically this delay is very low, but it's total effect can accumulate the more hops the packet takes).
  :::
- **Transmission delay**: This is the time it takes to push the packet bits onto the physical link, irrespective of the distance to the destination. It is proportional to the packet length in bits. Transmission delay is greatest at the "last mile" of the internet - the parts of the network that goes to the end users. Fewer but bigger packets sent would reduce the amount of bits being spent on headers (in proportion to the bits used for the game data), thus reducing your transmission delay somewhat.
- **Queueing delay**:  Becasue a router can only process a limited number of packets at a time, if it receives more packets that it can handle - these packets get queued in the receive queue. In a similar way, a network interface can also only output a single packet at a time, so if after the packet is processed the appropriate network interface is busy, then the packet will land in the transmission queue.  Queueing delay can be a significant contributor to overall latency. 
  
  :::tip
  Typically fewer large packets perform better than many smaller packets because typical routing requires examining only the header of the packet.
  :::
- **Propagation delay**: This is the time signal spends traveling through the physical medium. It can't be less than the speed of light multiplied by the distance between source and destination, which is: 
    
    `Propagation Delay = 0.3-ns * meters-to-travel` 

    In practice that means that even under ideal conditions, it would take at least 50ms for a packet to go from Montreal to Australia, and approximately 15ms to cross the USA east to west. 

    This type of delay is very optimizable in a client-server game - by placing servers closer to your players you effectively reduce propagation delay. In case dispersing servers is not an option for gameplay reasons (for instance when your players NEED to be able to play with as little latency across, say, the entire US) an even more expensive and performant option is possible - a so-called edge network can be built.

 :::info
    Riot games famously had to go that route for their League of Legends, building their own network that peered with ISPs across North America to provide the fastest connection possible and reducing network hops as much as possible.
 :::

:::note
 According to wikipedia, 200 ms of input lag is the upper threshold at which people typically notice lag.
:::

Non-network latency is a serious issue and can eat up a large chunk of our ~200ms latency budget. This means that for online games input lag, and specifically the part that is largely under our control (render pipeline related lag) should be minimized.

In the context of networking it is valuable to consider the combination of network latency factors which is typically referred to as **Ping** or **Round Trip Time (RTT)**.

## [Round Trip Time (RTT)](../reference/glossary/network-latency-management.md#round-trip-time-rtt)
RTT is the time it takes for a packet to travel from one host to another and then for a response packet to travel back. This ends up including not only the two-way sum of network latency factors, but also the frame rate of the remote host, as it contributes to how quickly the server can send out a response.

Since the traffic is unlikely to travel at the same speed in each direction, the RTT is rarely exactly the time it takes for a packet to go from one host to another. Regardless, it is a very common practice to approximate one-way travel time by dividing RTT by 2.

Another complication arises from the fact that for any two hosts, the RTT time between them is not a constant. It varies over time, normally hovering around a certain average value. But, since the components of network latency can vary over time themselves, the RTT could deviate from the expected value. This deviation is called **Jitter**.

## [Jitter](../reference/glossary/network-latency-management.md#jitter)

Jitter can affect RTT mitigation and it can also make packets arrive out of order if the router chooses to send packets via different routes and the one sent later actually arrives prior to the packet that was supposed to come before it.


## Packet Loss

Another danger that can befall our packets apart from being delayed is being lost entirely. In fact packet loss is probably a bigger problem than even Jitter.

Packet Loss, apart from degrading and potentially making the game unplayable can contribute to the overall delay the user would experience. This would occur if packet loss would heavily affect the data that must be delivered reliably - packet loss would force the game to resend data, multiplying the delays.







