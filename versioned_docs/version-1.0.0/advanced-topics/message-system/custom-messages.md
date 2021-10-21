---
id: custom-messages
title: Custom Messages 
description: A brief explanation of Custom Messages use in Netcode for GameObjects (Netcode) covering Named and Unnamed messages.
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';


If you do not want to use the Netcode for GameObjects (Netcode) messaging system, you do not have to. You can use a thin layer called "Custom Messages" to implement your own behaviour and add custom targeting. They are unbound to any game object. Custom messages can be used in combination with [RPC messages](../messaging-system.md). 

Custom messages comes in two forms: named and unnamed. 

To send messages from client to client, server to client, and client to server through the provided `clientId`. For example, from client to server provide `NetworkManager.Singleton.ServerClientId` as the `clientId`.

## Unnamed Messages

Unnamed messages can be thought of as a single sending channel. A message sent has one receive handler, this is useful for building your own custom messaging system. 

**Usage**

```csharp
private void Start()
{
    //Receiving
    CustomMessagingManager.OnUnnamedMessage += ((senderClientId, reader) =>
    {
        reader.ReadValueSafe(out string message); //Example
    });

    //Sending
    using FastBufferWriter writer = new FastBufferWriter(maxSize, Allocator.Temp);
    writer.WriteValueSafe(message);
    CustomMessagingManager.SendUnnamedMessage(clientId, writer, NetworkDelivery.Reliable); //NetworkDelivery is optional.
}

```
## Named Messages

If you want a completed messaging system, you can use named messages. The receiver registers one listen handler for each message type, and the sender can choose what type to send.

**Usage**

```csharp

private void Start()
{
    //Receiving
    CustomMessagingManager.RegisterNamedMessageHandler("myMessageName", (senderClientId, reader) =>
    {
        reader.ReadValueSafe(out string message); //Example
    });

    //Sending
    using FastBufferWriter writer = new FastBufferWriter(maxSize, Allocator.Temp);
    writer.WriteValueSafe(message);
    CustomMessagingManager.SendNamedMessage("myMessageName", clientId, writer, NetworkDelivery.Reliable); //NetworkDelivery is optional.
}
```
