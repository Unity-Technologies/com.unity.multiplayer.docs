---
id: dilmer
title: Dilmer Valecillos tutorial videos
---

Dilmer Valecillos teaches various concepts about Netcode for GameObjects in the following video tutorials. Learn more about Dilmer Valecillos and his [Youtube channel](https://www.youtube.com/channel/UCHM37DnT_QGJT5Zyl4EmqcA), and don't forget to click the **Subscribe** button.

:::important
These tutorials use Unity v2021.1, and Netcode for GameObjects 1.0.0 prerelease.
:::

This Unity Multiplayer tutorial will teach you how to implement connection approval so that clients have to send the correct password to be able to connect to the server.

<Iframe url="https://www.youtube.com/embed/d1FpS5hYlVE"
        width="854px"
        height="480px"
        id="myId"
        className="video-container"
        display="initial"
        position="relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />

Video published 14th Nov 2021

This Unity Multiplayer tutorial will teach you how to implement:
- NetworkVariable types and how to use them
- Network Transforms to synchronize player position across the network
- Synchronization of Player HUD over many clients
- Player client controller and Network Behaviors
- How and why should you use ServerRpc (Remote Procedure Calls)

<Iframe url="https://www.youtube.com/embed/rFCFMkzFaog"
        width="854px"
        height="480px"
        id="myId"
        className="video-container"
        display="initial"
        position="relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />

Video published 15th Nov 2021

Dilmer takes a look at the Network Animator component and how you can synchronise animation states with other clients connected to the server or client-host. Features covered:
<ul>
<li> NetworkAnimator component</li>
<li> NetworkVariables Vector3 and permissions</li>
<li> NetworkVariables with enum type for player state</li>
<li>Using CharacterController to control the player</li>
<li>Using ServerRpc to keep track of player state</li>
<li>Animation state based on NetworkVariable player state</li>
</ul>

<Iframe url="https://www.youtube.com/embed/GOtE96OKyVA"
        width="854px"
        height="480px"
        id="myId"
        className="video-container"
        display="initial"
        position="relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />

Video published 15th Nov 2021

Dilmer looks at how to set up multiplayer capabilities available over the internet

<ul>
<li> Setting up Relay server through Unity Services</li>
<li> Adding Unity Relay and Unity Transport UDP packages</li>
<li> Adding a new multiplayer relay scene with the Unity Transport in the NetworkManager</li>
<li> Creating a RelayManager singleton to create a Relay allocation and also provide a join code to clients connecting via relay</li>
</ul>

<Iframe url="https://www.youtube.com/embed/82Lbho7S0OA"
        width="854px"
        height="480px"
        id="myId"
        className="video-container"
        display="initial"
        position="relative"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />

Video published 25th Nov 2021

For project files access, check out the repository here: https://github.com/dilmerv/UnityMultiplayerPlayground

:::contribution Community Contribution
Thank you to Dilmer Valecillos and his [Youtube channel](https://www.youtube.com/channel/UCHM37DnT_QGJT5Zyl4EmqcA) for the video tutorials! These contributions are a fantastic help to the community.
:::

import Iframe from 'react-iframe'
