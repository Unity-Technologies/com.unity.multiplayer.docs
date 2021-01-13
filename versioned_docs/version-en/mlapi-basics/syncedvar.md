---
id: syncedvar
title: SyncedVar
sidebar_label: SyncedVar
---

SyncedVars are simple ways to have syncronized fields in NetworkedBehaviours. SyncedVars are similar to NetworkedVars but have a few differences:

* They are slower
* They are less customizable
* They only sync from server to client
* They require less code
* They support serialization

## Example

Creating a SyncedVar is as easy as creating an attribute on the field. Properties are not supported.

```csharp
[SyncedVar]
public float mySyncedFloat = 5f;
```

## Single Sync Values

If you want values to be synced only once (at spawn), the send rate can be set to a negative value.