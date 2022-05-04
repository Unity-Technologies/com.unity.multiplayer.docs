---
id: ticks-and-update-rates
title: Ticks and update rates
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

Every player is affected by a certain amount of latency, which is the result of the distance to the server or host, the number of hops a packet has to make, and the server's tick rate and update rate.

This is where Network Latency Management comes in. Due to these delays, you would see where a player was a few milliseconds ago, not where they are right now. If the game did not compensate for at least a portion of this delay, then you would be unable to hit other players.


## Interpolation Period

A period of time it takes to smoothly transition from old state to the new state.

## Packet Sending Period 

The time the server waits between sending packets to clients.

## Latency and Lag

See [Latency](../../Learn/lagandpacketloss)

## Update Rate

What adds an extra delay on top of the travel time of our data (ping), is how frequently a game sends and receives that data. When a game sends and receives updates at 30Hz (30 updates per second), then there is more time between updates than when it sends and receives updates at 60Hz.

Update Rates, additional delay:

<ImageSwitcher 
lightImageSrc="/img/update-rates-light.png?text=LightMode"
darkImageSrc="/img/update-rates-dark.png?text=DarkMode"/>

Low update rates do not only affect the network delay; they also cause issues like "super bullets," where a single hit from a gun deals more damage than it should be able to deal. 

For example, a game server sends 10 updates per second. At this update rate we have 100ms between the updates, which is the same time that we have between two bullets when a gun fires 600 rounds per minute.

But many shooters have guns which fire 750 rounds per minute or more. As a result, we then run out of updates and so the game has to send multiple bullets with one update. If two bullets hit a player, then the damage of these two hits will be sent in a single update, and so the receiving player will get the experience that he got hit by a "super bullet" that dealt more damage than a single hit should be able to deal.

RPM vs Update Rates: "Super Bullets" damage of multiple hits sent in one update:

<ImageSwitcher 
lightImageSrc="/img/rpm_update_rates-light.png?text=LightMode"
darkImageSrc="/img/rpm_update_rates-dark.png?text=DarkMode"/>

## Tick or Simulation Rate

The tick rate, or simulation rate, tells us how many times per second the game produces and processes data.

At the beginning of a tick, the server starts to process the data it received and runs its simulations. Then it sends the result to the clients and sleeps until the next tick happens. The faster the server finishes a tick the earlier the clients will receive new data from the server, which reduces the delay between player and server. That leads to a more responsive hit registration. 

Tick rate: Simulation, tick processing:

![Tick rate](/img/tick_rate.png)

A tick or simulation rate of 60Hz will cause less delay than a tick rate of 30Hz, as it decreases the time between the simulation steps. A tick rate of 60Hz will also allow the server to send 60 updates per second, which compared to 30Hz reduces the round trip delay between the client and the server by about 33ms (-16ms from the client to the server, and another -16ms from the server to the client).

When a server gets close to the limit, or even fails to process a tick inside that timeframe, then you will instantly notice the results: all sorts of strange gameplay issues like rubber banding, players teleporting, hits getting rejected, and physics failing.
