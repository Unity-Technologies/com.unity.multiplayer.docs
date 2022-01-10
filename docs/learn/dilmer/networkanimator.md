---
id: networkanimator
title:  Network Animator
description: Introduction to Network Animator component and how you can synchronise animation states with other clients connected to the server or client-host.
---

:::important
These tutorials use Unity v2021.1, and Netcode for GameObjects 1.0.0 prerelease. 
:::

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

For project files access, check out the repository here: https://github.com/dilmerv/UnityMultiplayerPlayground

:::contribution Community Contribution
Thank you to Dilmer Valecillos and his [Youtube channel](https://www.youtube.com/channel/UCHM37DnT_QGJT5Zyl4EmqcA) for the video tutorials! These contributions are a fantastic help to the community.
:::

import Iframe from 'react-iframe'