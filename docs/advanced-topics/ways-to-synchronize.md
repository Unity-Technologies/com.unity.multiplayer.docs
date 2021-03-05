`---
id: ways-synchronize
title: Ways To Synchronize
---

Synchronization can be done in multiple ways in the MLAPI. Each method has a different optimal usecase and support different features.

## Messaging System

For starters, the messaing system can be used. This provides sending any data. The parameters supported include most primitives and any classes and structures that implement the IBitWritable interface. This allows for custom types to be serialized easily. This way, custom types can be sent in RPC's without extra work. For more information, see the Messaging System wiki.

## INetworkedVar

The second way is to use the NetworkVariable system. This allows data to be synced by the library rather than by the developer. The NetworkVariable system supports syncing of data to new users in the spawn call automatically and delta compression. 

See [NetworkVariable](../mlapi-basics/networkvariable.md) for details.
