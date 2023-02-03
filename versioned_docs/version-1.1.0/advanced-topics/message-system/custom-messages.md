---
id: custom-messages
title: Custom Messages 
description: A brief explanation of Custom Messages use in Netcode for GameObjects (Netcode) covering Named and Unnamed messages.
---
import ImageSwitcher from '@site/src/ImageSwitcher.js';

If you do not want to use the Netcode for GameObjects (Netcode) messaging system, you do not have to. You can use a thin layer called "Custom Messages" to implement your own messaging behavior and/or add custom targeting. They are unbound to any game object. Custom messages can be used in combination with [RPC messages](../messaging-system.md). 

There are two types of custom messages:
- Unnamed
- Named

## Unnamed Messages
Unnamed messages can be thought of as a single sending channel. A message sent has one receive handler, this is useful for building your own custom messaging system. Netcode for GameObjects handles delivering and receiving custom unnamed messages, you can provide your own "custom message headers" to determine the type of unnamed message being sent or received.

### Unnamed Message Example
Below is a very basic example of how you might implement your own messaging system using unnamed messages:
```csharp
using UnityEngine;
using Unity.Collections;
using Unity.Netcode;

/// <summary>
/// Using an unnamed message to send a string message
/// <see cref="CustomUnnamedMessageHandler<T>"/> defined
/// further down below.
/// </summary>
public class UnnamedStringMessageHandler : CustomUnnamedMessageHandler<string>
{
    /// <summary>
    /// We override this method to define the unique message type
    /// identifier for this child derived class
    /// </summary>
    protected override byte MessageType()
    {
        // As an example, we could define message type of 1 for string messages
        return 1;
    }

    public override void OnNetworkSpawn()
    {
        // For this example, we always want to invoke the base
        base.OnNetworkSpawn();

        if (IsServer)
        {
            // Server broadcasts to all clients when a new client connects
            // (just for example purposes)
            NetworkManager.OnClientConnectedCallback += OnClientConnectedCallback;
        }
        else
        {
            // Clients send a greeting string message to the server
            SendUnnamedMessage("I am a client connecting!");
        }
    }

    public override void OnNetworkDespawn()
    {
        // For this example, we always want to invoke the base
        base.OnNetworkDespawn();

        // Whether server or not, unregister this.
        NetworkManager.OnClientDisconnectCallback -= OnClientConnectedCallback;
    }

    private void OnClientConnectedCallback(ulong clientId)
    {
        // Server broadcasts a welcome string message to all clients that
        // a new client has joined.
        SendUnnamedMessage($"Everyone welcome the newly joined client ({clientId})!");
    }

    /// <summary>
    /// For this example, we override this message to handle receiving the string
    /// message.
    /// </summary>
    protected override void OnReceivedUnnamedMessage(ulong clientId, FastBufferReader reader)
    {
        var stringMessage = string.Empty;
        reader.ReadValueSafe(out stringMessage);
        if (IsServer)
        {
            Debug.Log($"Server received unnamed message of type ({MessageType()}) from client " +
                $"({clientId}) that contained the string: \"{stringMessage}\"");

            // As an example, we could also broadcast the client message to everyone
            SendUnnamedMessage($"Newly connected client sent this greeting: \"{stringMessage}\"");
        }
        else
        {
            Debug.Log(stringMessage);
        }
    }

    /// <summary>
    /// For this example, we will send a string as the payload.
    ///
    /// IMPORTANT NOTE: You can construct your own header to be
    /// written for custom message types, this example just uses
    /// the message type value as the "header".  This provides us
    /// with the ability to have "different types" of unnamed
    /// messages.
    /// </summary>
    public override void SendUnnamedMessage(string dataToSend)
    {
        var writer = new FastBufferWriter(1100, Allocator.Temp);
        var customMessagingManager = NetworkManager.CustomMessagingManager;
        // Tip: Placing the writer within a using scope assures it will
        // be disposed upon leaving the using scope
        using (writer)
        {
            // Write our message type
            writer.WriteValueSafe(MessageType());

            // Write our string message
            writer.WriteValueSafe(dataToSend);
            if (IsServer)
            {
                // This is a server-only method that will broadcast the unnamed message.
                // Caution: Invoking this method on a client will throw an exception!
                customMessagingManager.SendUnnamedMessageToAll(writer);
            }
            else
            {
                // This method can be used by a client or server (client to server or server to client)
                customMessagingManager.SendUnnamedMessage(NetworkManager.ServerClientId, writer);
            }
        }
    }
}

/// <summary>
/// A templated class to handle sending different data types
/// per unique unnamed message type/child derived class.
/// </summary>
public class CustomUnnamedMessageHandler<T> : NetworkBehaviour
{
    /// <summary>
    /// Since there is no unique way to identify unnamed messages,
    /// adding a message type identifier to the message itself is
    /// one way to handle know:
    /// "what kind of unnamed message was received?"
    /// </summary>
    protected virtual byte MessageType()
    {
        // The default unnamed message type
        return 0;
    }

    /// <summary>
    /// For most cases, you want to register once your NetworkBehaviour's
    /// NetworkObject (typically in-scene placed) is spawned.
    /// </summary>
    public override void OnNetworkSpawn()
    {
        // Both the server-host and client(s) will always subscribe to the
        // the unnamed message received event
        NetworkManager.CustomMessagingManager.OnUnnamedMessage += ReceiveMessage;
    }

    public override void OnNetworkDespawn()
    {
        // Unsubscribe when the associated NetworkObject is despawned.
        NetworkManager.CustomMessagingManager.OnUnnamedMessage -= ReceiveMessage;
    }

    /// <summary>
    /// This method needs to be overridden to handle reading a unique message type
    /// (i.e. derived class)
    /// </summary>
    protected virtual void OnReceivedUnnamedMessage(ulong clientId, FastBufferReader reader)
    {
    }

    /// <summary>
    /// For this unnamed message example, we always read the message type
    /// value to determine if it should be handled by this instance in the
    ///  event it is a child of the CustomUnnamedMessageHandler class.
    /// </summary>
    private void ReceiveMessage(ulong clientId, FastBufferReader reader)
    {
        var messageType = (byte)0;
        // Read the message type value that is written first when we send
        // this unnamed message.
        reader.ReadValueSafe(out messageType);
        // Example purposes only, you might handle this in a more optimal way
        if (messageType == MessageType())
        {
            OnReceivedUnnamedMessage(clientId, reader);
        }
    }

    /// <summary>
    /// For simplicity, the default does nothing
    /// </summary>
    /// <param name="dataToSend"></param>
    public virtual void SendUnnamedMessage(T dataToSend)
    {

    }
}
```
## Named Messages
If you don't want to handle the complexity of creating your own messaging system, Netcode for GameObjects also provides you with the option to use custom "named messages". Custom named messages use the "message name" as the unique identifier (it creates a hash value from the name and links that to a received named message callback). 
:::tip
If you are not quite sure if you need to incorporate the complexity of message identification and handling like you do with custom unnamed messages, you can always start with custom named messages and then if, at a later date, you determine you need "sub-message types" for a specific custom named message then you can always incorporate a type identifier (like you would with unnamed messages) into the named message payload itself.
:::

### Name Message Example
Below is a very basic example of implementing a custom named message:
```csharp
using System;
using UnityEngine;
using Unity.Collections;
using Unity.Netcode;
public class CustomNamedMessageHandler : NetworkBehaviour
{
    [Tooltip("The name identifier used for this custom message handler.")]
    public string MessageName = "MyCustomNamedMessage";

    /// <summary>
    /// For most cases, you want to register once your NetworkBehaviour's
    /// NetworkObject (typically in-scene placed) is spawned.
    /// </summary>
    public override void OnNetworkSpawn()
    {
        // Both the server-host and client(s) register the custom named message.
        NetworkManager.CustomMessagingManager.RegisterNamedMessageHandler(MessageName, ReceiveMessage);

        if (IsServer)
        {
            // Server broadcasts to all clients when a new client connects (just for example purposes)
            NetworkManager.OnClientConnectedCallback += OnClientConnectedCallback;
        }
        else
        {
            // Clients send a unique Guid to the server
            SendMessage(Guid.NewGuid());
        }
    }

    private void OnClientConnectedCallback(ulong obj)
    {
        SendMessage(Guid.NewGuid());
    }

    public override void OnNetworkDespawn()
    {
        // De-register when the associated NetworkObject is despawned.
        NetworkManager.CustomMessagingManager.UnregisterNamedMessageHandler(MessageName);
        // Whether server or not, unregister this.
        NetworkManager.OnClientDisconnectCallback -= OnClientConnectedCallback;
    }

    /// <summary>
    /// Invoked when a custom message of type <see cref="MessageName"/>
    /// </summary>
    private void ReceiveMessage(ulong senderId, FastBufferReader messagePayload)
    {
        var receivedMessageContent = new ForceNetworkSerializeByMemcpy<Guid>(new Guid());
        messagePayload.ReadValueSafe(out receivedMessageContent);
        if (IsServer)
        {
            Debug.Log($"Sever received GUID ({receivedMessageContent.Value}) from client ({senderId})");
        }
        else
        {
            Debug.Log($"Client received GUID ({receivedMessageContent.Value}) from the server.");
        }
    }

    /// <summary>
    /// Invoke this with a Guid by a client or server-host to send a
    /// custom named message.
    /// </summary>
    public void SendMessage(Guid inGameIdentifier)
    {
        var messageContent = new ForceNetworkSerializeByMemcpy<Guid>(inGameIdentifier);
        var writer = new FastBufferWriter(1100, Allocator.Temp);
        var customMessagingManager = NetworkManager.CustomMessagingManager;
        using (writer)
        {
            writer.WriteValueSafe(messageContent);
            if (IsServer)
            {
                // This is a server-only method that will broadcast the named message.
                // Caution: Invoking this method on a client will throw an exception!
                customMessagingManager.SendNamedMessageToAll(MessageName, writer);
            }
            else
            {
                // This is a client or server method that sends a named message to one target destination
                // (client to server or server to client)
                customMessagingManager.SendNamedMessage(MessageName, NetworkManager.ServerClientId, writer);
            }
        }
    }
}
```
