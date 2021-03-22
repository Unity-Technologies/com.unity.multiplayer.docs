---
id: relevancy
title: Relevancy (Scope)
sidebar_label: Relevancy
---

Relevancy, or scope, indicates if the object or data is important to you. It is frequently used as part of systems that deal with the realities of limited bandwidth.

## Spatial Relevance

- **Distance from player:** How many units away is this object from the networked player
- **Static Zones:** Predefined areas of a game world, where a player typically only finds objects within their same zone or adjacent zones as relevant. Examples would be a room, building, or town.
- **View Frustum:** If it is in the camera’s view it’s relevant. If it is behind me, it is not.
- **Instances:** Static zones which can be instantiated/copied multiple times. Example would be a dungeon raid.

## Gameplay Relevance

- **Interaction:** Have I, or am I likely about to, interact with a gameplay element. For example, a grenade I threw far away.
- **Objective:** Critical gameplay elements which need constant awareness. For example, a player carrying a flag across the map in CTF.
