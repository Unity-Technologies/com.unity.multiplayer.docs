---
id: relevancy
title: Relevancy (Scope)
sidebar_label: Relevancy (Scope)
---

“Is this object/data important to me?” Frequently used as part of the systems which deal with the realities of limited bandwidth.

## Spatial Relevance

- **Distance from player:**
  How many units away is this object from the networked player
- **Static Zones:**
  Predefined areas of a game world, where a player typically only finds objects within their same zone or adjacent zones as relevant. Examples would be a room, building, or town.
- **View Frustum:**
  If it’s in the camera’s view it’s relevant. If it’s behind me, it’s not.
- **Instances:**
  Static zones which can be instantiated/copied multiple times. Example would be a dungeon raid.

## Gameplay Relevance

- **Interaction:**
  Have I, or am I likely about to, interact with a gameplay element. Example would be a grenade I threw far away
- **Objective:**
  Critical gameplay elements which need constant awareness. Example would be a player carrying a flag across the map in CTF.
