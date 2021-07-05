---
id: custom-messages
title: Custom Messages 
description: A brief explanation of Custom Message use in MLAPI covering Named and Unnamed messages.
---

If you don't want to use MLAPI's messaging system, you don't have to. You can use a thin layer called "Custom Messages" to implement your own behaviour and add custom targeting. They are unbound to any game object. Custom messages can be used in combination with [RPC messages](about-rpc.md). 

Custom messages comes in two forms: named and unnamed.

To send messages from client to client, server to client, and client to server through the provided `clientId`. For example, from client to server provide `NetworkManager.Singleton.ServerClientId` as the `clientId`.

## Unnamed Messages

Unnamed messages can be thought of as a single sending channel. A message sent has one receive handler, this is useful for building your own custom messaging system. 

**Usage**

```csharp
private void Start()
{
    //Receiving
    CustomMessagingManager.OnUnnamedMessage += ((senderClientId, stream) =>
    {
        using (NetworkReader reader = NetworkReader.Get(stream))
        {
            string message = reader.ReadString(); //Example
        }
    });

    //Sending
    CustomMessagingManager.SendUnnamedMessage(clientId, myStream, "myCustomChannel"); //Channel is optional.
}

```

## Named Messages

If you want a completed messaging system, you can use named messages. The receiver registers one listen handler for each message type, and the sender can choose what type to send.

**Usage**

```csharp

private void Start()
{
    //Receiving
    CustomMessagingManager.RegisterNamedMessageHandler("myMessageName", (senderClientId, stream) =>
    {
        using (NetworkReader reader = NetworkReader.Get(stream))
        {
            StringBuilder stringBuilder = reader.ReadString(); //Example
            string message = stringBuilder.ToString();
        }
    });

    //Sending
    CustomMessagingManager.SendNamedMessage("myMessageName", clientId, myStream, "myCustomChannel"); //Channel is optional.
}
```
