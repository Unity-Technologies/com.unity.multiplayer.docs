---
id: ways-synchronize
title: Ways To Synchronize
---

Achieve Synchronization with multiple methods in Netcode for GameObjects (Netcode). Each method has a different optimal use case and supports various features.

## Messaging System

For starters, utilizing the messaging system. The messaging system provides sending any data. The parameters supported include most primitives and any classes and structures that implement the `INetworkSerializable` interface allowing for custom types to be serialized easily. This way, custom types allow being sent in `RPC`'s without extra work. For more information, see the Messaging System [API](https://docs-multiplayer.unity3d.com/docs/advanced-topics/messaging-system).

## INetworkedVar

Another method is to use the `NetworkVariable` system to be synced by the library rather than by the developer. The `NetworkVariable` system supports syncing of data to new users in the spawn call automatically and delta compression. 

See [NetworkVariable](../basics/networkvariable) for details.
