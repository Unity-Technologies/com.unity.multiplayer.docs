---
id: custom-messages
title: Custom Messages 
description: A brief explaination of Custom Message use in MLAPI coveing Named and Unnames messages.
---

If you don't want to use the MLAPI's messaging. You don't have to. You can use a thin layer called "Custom Messages" (these can be used in combination with [RPC messages](about-rpc.md) as well). Custom messages allows you to implement your own behaviour and add custom targeting etc. Custom messages are messages unbound to any game object.

Custom messages comes in two forms, named and unnamed. Unnamed messages can be thought of as a single sending channel. A message sent has one receive handler, this is useful for building your own custom messaging system. If you want a completed messaging system, you can use named messages. The receiver registers one listen handler for each message type, and the sender can choose what type to send.

## Unnamed Messages

**Usage**

```csharp
private void Start()
{
    //Receiving
    CustomMessagingManager.OnUnnamedMessage += ((senderClientId, stream) =>
    {
        using (PooledBitReader reader = PooledBitReader.Get(stream))
        {
            string message = reader.ReadString(); //Example
        }
    });

    //Sending
    CustomMessagingManager.SendUnnamedMessage(clientId, myStream, "myCustomChannel"); //Channel is optional.
}

```
## Named Messages

**Usage**

```csharp

private void Start()
{
    //Receiving
    CustomMessagingManager.RegisterNamedMessageHandler("myMessageName", (senderClientId, stream) =>
    {
        using (PooledBitReader reader = PooledBitReader.Get(stream))
        {
            StringBuilder stringBuilder = reader.ReadString(); //Example
            string message = stringBuilder.ToString();
        }
    });

    //Sending
    CustomMessagingManager.SendNamedMessage("myMessageName", clientId, myStream, "myCustomChannel"); //Channel is optional.
}
```