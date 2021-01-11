---
id: messaging-system
title: Messaging System
sidebar_label: Messaging System
---

The MLAPI has two parts to it's messaging system. Remote Procedure Call (RPC) messages and Custom Messages. Both types have sub types that change their behaviour, functionality and performance.

## RPC Remote Procedure Call

The multiplayer framework provides two main network constructs [ServerRpc](#ServerRpc)  and [ClientRpc](#ClientRpc) to execute logic on either server-side or client-side. 

 
## <a name="ServerRpc"></a>ServerRpc

A ``ServerRpc`` can be invoked by a client to be executed on the server.

Developers can declare a ``ServerRpc``by marking a method with ``[ServerRpc]`` attribute and making sure to have ``ServerRpc`` suffix in the method name.

```csharp
[ServerRpc]
void PingServerRpc(int somenumber, string sometext) { /* ... */ }
```
Developers can invoke a ``ServerRpc`` by making a direct function call with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PingServerRpc(Time.frameCount, "hello, world"); // Client -> Server
    }
}
```

Marking method with ``[ServerRpc]`` attribute and putting ``ServerRpc`` suffix to the method name are required, otherwise it will prompt error messages:

```csharp
// Error: Invalid, missing 'ServerRpc' suffix in the method name
[ServerRpc]
void Ping(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ServerRpc] attribute on the method
void PingServerRpc(int somenumber, string sometext) { /* ... */ }
```

``[ServerRpc]`` attribute and matching ``...ServerRpc`` suffix in the method name are there to make it crystal clear for RPC call sites to know when they are executing an RPC, it will be replicated and executed on the server-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it is a ServerRpc or [ClientRpc](#ClientRpc):

```csharp
Ping(somenumber, sometext); // Is this an RPC call?

PingRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PingServerRpc(somenumber, sometext); // This is clearly a ServerRpc call
```
## <a name="ClientRpc"></a>ClientRpc

A ``ClientRpc`` can be invoked by the server to be executed on a client.

Developers can declare a ``ClientRpc`` by marking a method with ``[ClientRpc]`` attribute and making sure to have ``ClientRpc`` suffix in the method name.

```csharp
[ClientRpc]
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

Developers can invoke a ``ClientRpc`` by making a direct function call with parameters:

```csharp
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        PongClientRpc(Time.frameCount, "hello, world"); // Server -> Client
    }
}
```
Marking method with ``[ClientRpc]`` attribute and putting ClientRpc suffix to the method name are required, otherwise it will prompt error messages:

```csharp
// Error: Invalid, missing 'ClientRpc' suffix in the method name
[ClientRpc]
void Pong(int somenumber, string sometext) { /* ... */ }

// Error: Invalid, missing [ClientRpc] attribute on the method
void PongClientRpc(int somenumber, string sometext) { /* ... */ }
```

``[ClientRpc]`` attribute and matching ``...ClientRpc`` suffix in the method name are there to make it crystal clear for RPC call sites to know when they are executing an RPC, it will be replicated and executed on the client-side, without necessarily jumping into original RPC method declaration to find out if it was an RPC, if so whether it is a [ServerRpc](#ServerRpc) or ClientRpc:

```csharp
Pong(somenumber, sometext); // Is this an RPC call?

PongRpc(somenumber, sometext); // Is this a ServerRpc call or ClientRpc call?

PongClientRpc(somenumber, sometext); // This is clearly a ClientRpc call
```

### Modes

The RPC methods can be used in two "modes". One is a performance mode where the code is a bit larger but it offers better performance. The other mode is the convenience mode. **The only difference between the two is that the convenience mode boxes all the values on the sender and receiver. If you don't know what that means, use the convenience mode otherwise you are most likely wasting your time.** The performance mode is designed for 100% performance as the MLAPI's goal is to be a general purpose networking library that is not to limit the games capabilities.

### Ownership Checking

By default, ServerRPC's can only be called if the local client owns the object the ServerRPC sits on. 

This can be disabled like this:

```csharp
[ServerRPC(RequireOwnership = false)]
void MyMethod(int myInt)
{

}
```

#### Convenience Example

```csharp
public class Example : NetworkedBehaviour
{
  private void OnGUI()
  {
      if (GUILayout.Button("SendRandomInt"))
      {
          if (IsServer)
          {
              InvokeClientRpcOnEveryone(MyClientRPC, Random.Range(-50, 50));
          }
          else
          {
              InvokeServerRpc(MyServerRpc, Random.Range(-50, 50));
          }
      }
  }

  [ServerRPC]
  private void MyServerRPC(int number)
  {
      Debug.Log("The number received was: " + number);
      Debug.Log("This method ran on the server upon the request of a client");
  }

  [ClientRPC]
  private void MyClientRPC(int number)
  {
      Debug.Log("The number received was: " + number);
      Debug.Log("This method ran on the client upon the request of the server");
  }
}
```

### Custom Type Arguments
Custom types can be sent (Classes or Structs) if they implement the IBitWritable interface.

### Return Values
If you use convenience RPC the MLAPI supports return values starting with version 6.0.0. The method have to return a serializable type which has the same requirements as parameters. When invoking the method you will get a ``RpcResponse<T>`` where ``T`` is the return type. Note that since this requires two way communication, the result might not be available straight away but can be waited for in a coroutine. Here is an example of a RPC with a return value.

```csharp
public IEnumerator MyRpcCoroutine()
{
    RpcResponse<float> response = InvokeServerRpc(MyRpcWithReturnValue, Random.Range(0f, 100f), Random.Range(0f, 100f));

    while (!response.IsDone)
    {
        yield return null;
    }

    Debug.LogFormat("The final result was {0}!", response.Value);
}

[ServerRPC]
public float MyRpcWithReturnValue(float x, float y)
{
    return x * y;
}
```

### Performance Example
To use the performance mode, the RPC method require the following signature ``void (ulong clientId, Stream readStream)`` and the sender is required to use the non generic Stream overload.

```csharp
private void OnGUI()
{
    if (GUILayout.Button("SendRandomInt"))
    {
        if (IsServer)
        {
            using (PooledBitStream stream = PooledBitStream.Get())
            {
                using (PooledBitWriter writer = PooledBitWriter.Get(stream))
                {
                    writer.WriteInt32Packed(Random.Range(-50, 50));

                    InvokeClientRpcOnEveryonePerformance(MyClientRPC, stream);
                }
            }
        }
        else
        {
            using (PooledBitStream stream = PooledBitStream.Get())
            {
                using (PooledBitWriter writer = PooledBitWriter.Get(stream))
                {
                    writer.WriteInt32Packed(Random.Range(-50, 50));

                    InvokeServerRpcPerformance(MyServerRPC, stream);
                }
            }
        }
    }
}

[ServerRPC]
private void MyServerRPC(ulong clientId, Stream stream) //This signature is REQUIRED for the performance mode
{
    using (PooledBitReader reader = PooledBitReader.Get(stream))
    {
        int number = reader.ReadInt32Packed();
        Debug.Log("The number received was: " + number);
        Debug.Log("This method ran on the server upon the request of a client");
    }
}

[ClientRPC]
private void MyClientRPC(ulong clientId, Stream stream) //This signature is REQUIRED for the performance mode
{
    using (PooledBitReader reader = PooledBitReader.Get(stream))
    {
        int number = reader.ReadInt32Packed();
        Debug.Log("The number received was: " + number);
        Debug.Log("This method ran on the client upon the request of the server");
    }
}
```


### Multi project setups

The MLAPI is designed to work with multiple different Unity projects talking to each other. Ex, dedicated server project. One possibility is to create dummy rpc methods on the sender. But it's also possible to replace the method reference with a string containing the name of the method. Like this:

```csharp
InvokeClientRpcOnEveryone(MyClientRPC, Random.Range(-50, 50)); //Instead of this
InvokeClientRpcOnEveryone("MyClientRPC", Random.Range(-50, 50)); //This
```

Both will work the same way, but the bottom one obviously can't do type checking, thus the first one is recommended for single project.

### Targeting

The Invoke methods can ONLY invoke RPC's that are on the same NetworkedBehaviour instance as the Invoke method. 

This does not work:

```csharp
InvokeClientRpc(MyOtherNetworkedBehaviour.MyRPCMethod, myInt);
```
Instead, this can be done:

```csharp
MyOtherNetworkedBehaviour.InvokeClientRpc(MyOtherNetworkedBehaviour.MyRPCMethod, myInt);
```

### Host

When the server has a local client (Host), ServerRPC's can be executed by that client (Even though, technically, he already is the server).

ClientRPC's function the same way. When they are invoked, they are also invoked on the Host. This allows you to write the same code for the host and normal players.

## Custom Messages
If you don't want to use the MLAPI's messaging. You don't have to. You can use a thin layer called "Custom Messages" (these can be used in combination with RPC messages as well). Custom messages allows you to implement your own behaviour and add custom targeting etc. Custom messages are messages unbound to any game object.

Custom messages comes in two forms, named and unnamed. Unnamed messages can be thought of as a single sending channel. A message sent has one receive handler, this is useful for building your own custom messaging **system**. If you want a completed messaging system, you can use named messages. The receiver registers one listen handler for each message type, and the sender can choose what type to send.

### Unnamed Messages

Usage:

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

### Named Messages

Usage:

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
