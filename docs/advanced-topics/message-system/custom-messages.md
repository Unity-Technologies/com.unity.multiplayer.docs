---
id: custom-messages
title: Custom Messages 
description: A brief explaination of Custom Message use in MLAPI coveing Named and Unnames messages.
---

If you don't want to use the MLAPI's messaging, you don't have to. You can use a thin layer called "Custom Messages" to implement your own behaviour and add custom targeting. They are unbound to any game object. Custom messages can be used in combination with [RPC messages](about-rpc.md). 

Custom messages comes in two forms: named and unnamed.

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
