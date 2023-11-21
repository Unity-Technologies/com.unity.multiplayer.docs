---
id: relay
title: Relay
---

Netcode for GameObjects (Netcode) allows you to connect to a host by its IP and port. However, if the host isn't on the same network as you (for example, somewhere over the Internet), you will need some extra services to achieve a successful connection and, as a result, a successful game.

Many factors impact how you connect to the remote host, and it can be tricky to implement. There are two ways of achieving such a connection:

* [NAT punching](../learn/listenserverhostarchitecture.md#option-c-nat-punchthrough): an advanced technique that allows you to directly connect to the host computer even if it's on another network.

* Using a [Relay server](https://docs.unity.com/relay/en/manual/relay-servers): the server is on the Internet with a public-facing IP that you and the host can reach. After each side binds with the Relay, they can establish a connection and send data to each other via the Relay server.

Netcode doesn't offer tools to help you do a successful punch through a NAT. However, Unity Services provides a Relay service that can relay all Unity Transport based technology, like Netcode.

# How to use Relay

The host of your game will need to request a Relay allocation and get a [join code](https://docs.unity.com/relay/en/manual/join-codes) for this allocation. The join code is a random string that your clients will use to join the correct server and allocation. The host and clients will then be able to communicate via the Relay server without disclosing their IP addresses and ports directly.

## Enable Relay in a project

You need to install the Unity Relay SDK if you want to interact with the service. To install it, add `com.unity.services.relay` package to your project.

You need to add the Relay Service to your organization in the Unity Dashboard (under the **Multiplayer** section). After that, link your project to your organization in the Unity Editor (**Project Settings** > **Services**).

See [Get started with Relay](https://docs.unity.com/relay/en/manual/get-started) for more detailed instructions.

## Test the Relay service in the Unity Editor

If you are using Unity 2022.3 or later, you can try the Relay service directly in the editor from the inspector of the Network Manager. The workflow is similar to what you experienced in
the [Get Started with NGO](../tutorials/get-started-with-ngo.md) page: the inspector shows buttons which start a Host, Server or Client without the need to add a UI to your game yet. The biggest difference is that starting a client requires a [join code](https://docs.unity.com/relay/en/manual/join-codes) which you can get from the host or server.

![](/img/relay/ngo-relay-connection.png)

You will get feedback in the UI and in the console if the connection failed. If the connection is successfully established, you will see the following message with the join code in the inspector:

![](/img/relay/ngo-relay-connected.png)

This view enables you to conveniently copy the join code so that you can share it with your colleagues, or test in a second window project (see [Testing Locally](../tutorials/testing/testing_locally.md)).

:::note
This integration is only available in the editor. You can't use it in a build. You may however use the Code Snippets at the end of this page.
They are built on the Unity Transport Package. For more advanced use-cases, please check the [Relay documentation](https://docs.unity.com/relay/en/manual/connection-data) 

:::

## Request an allocation

To create an [allocation](https://docs.unity.com/relay/en/manual/allocations) on a Relay, you need to make an authenticated call to the Unity back end using the SDK. On the host, call the `CreateAllocationAsync` method with the maximum number of expected peers. For example, a host requesting a maximum of `3` peer connections reserves four slots for a four player game. This function can throw exceptions, and catching them can give you hints about the underlying error.

```csharp
//Ask Unity Services to allocate a Relay server that will handle up to eight players: seven peers and the host.
Allocation allocation = await Unity.Services.Relay.RelayService.Instance.CreateAllocationAsync(7);
```

The `Allocation` class represents all the necessary data for a [host player](https://docs.unity.com/relay/manual/players#Host) to start hosting using the specific Relay server allocated. You don't need to understand each part of this allocation; you only need to feed them to your chosen transport that handles the Relay communication on its own. For the more curious (and for reference), here's a simple overview of those parameters:

* A `RelayServer` class containing the IP and port of your allocation's server.

* The allocation ID in a Base64 form and GUID form referred to as `AllocationIdBytes` and `AllocationId`.

* A blob of encrypted bytes representing the [connection data](https://docs.unity.com/relay/en/manual/connection-data) (known as `ConnectionData`) allows users to connect to this host.

* A Base64 encoded `Key` for message signature.

Each allocation creates a unique [join code](https://docs.unity.com/relay/en/manual/join-codes) suitable for sharing over instant messages or other means. This join code allows your clients to join your game. You can retrieve it by calling the Relay SDK like so:

```csharp
string joinCode = await Unity.Services.Relay.RelayService.Instance.GetJoinCodeAsync(allocation.AllocationId);
```

With those two calls, you now have your Relay allocation ready and the associated join code. Pass the allocation parameters to your host transport and send the join code (a simple string) over the Internet by the mean of your choice to your clients.

Remember to [authenticate](https://docs.unity.com/relay/en/manual/authentication) your users before using SDK methods. The easiest way is the anonymous one (shown in the following code snippet), but you can use more advanced techniques.

```csharp
//Initialize the Unity Services engine
await UnityServices.InitializeAsync();
if (!AuthenticationService.Instance.IsSignedIn)
{
    //If not already logged, log the user in
    await AuthenticationService.Instance.SignInAnonymouslyAsync();
}
```

## Join an existing allocation

The host of your game created a Relay allocation, and your client has received its [join code](https://docs.unity.com/relay/en/manual/join-codes). You now need to [request all the allocation parameters](https://docs.unity.com/relay/manual/connection-flow#4) from the join code to join the game. To do that, call the `JoinAllocationAsync` method with your join code like so:

```csharp
//Ask Unity Services to join a Relay allocation based on our join code
JoinAllocation allocation = await Unity.Services.Relay.RelayService.Instance.JoinAllocationAsync(joinCode);
```

## Pass allocation data to a transport component

Now that you have an allocation (either by joining or hosting), you need to make all traffic coming from Netcode go through the Relay. To achieve that, you need to pass allocation parameters to your transport. For now, only the `UnityTransport` supports the Relay protocol. To pass allocation parameters to it, you first need to retrieve it from your `NetworkManager` like so:

```csharp
//Retrieve the Unity transport used by the NetworkManager
UnityTransport transport = NetworkManager.Singleton.gameObject.GetComponent<UnityTransport>();
```

You can now call the method `SetRelayServerData` on the retrieved transport by passing the allocation data that you retrieved, as well as the connection type (here set to [dtls](https://docs.unity.com/relay/en/manual/dtls-encryption)). For example:

```csharp
transport.SetRelayServerData(new RelayServerData(allocation, connectionType:"dtls"));
```

Your transport is now configured. You can call `StartClient`, `StartHost` or `StartServer` and use the Netcode library as usual.

# Code Snippets

Use the following code to work with the [Relay server](https://docs.unity.com/relay/en/manual/relay-servers). To start a server instead of a host, replace the `StartHost` call with `StartServer` in `StartHostWithRelay`.

For more information, refer to [Unity Relay](https://docs.unity.com/ugs/en-us/manual/relay/manual/introduction).

```csharp
/// <summary>
/// Creates a relay server allocation and start a host
/// </summary>
/// <param name="maxConnections">The maximum amount of clients that can connect to the relay</param>
/// <returns>The join code</returns>
public async Task<string> StartHostWithRelay(int maxConnections=5)
{
    //Initialize the Unity Services engine
    await UnityServices.InitializeAsync();
    //Always authenticate your users beforehand
    if (!AuthenticationService.Instance.IsSignedIn)
    {
        //If not already logged, log the user in
        await AuthenticationService.Instance.SignInAnonymouslyAsync();
    }
    
    // Request allocation and join code
    Allocation allocation = await RelayService.Instance.CreateAllocationAsync(maxConnections);
    var joinCode = await RelayService.Instance.GetJoinCodeAsync(allocation.AllocationId);
    // Configure transport
    NetworkManager.Singleton.GetComponent<UnityTransport>().SetRelayServerData(new RelayServerData(allocation, "dtls"));
    // Start host
    return NetworkManager.Singleton.StartHost() ? joinCode : null;
}

/// <summary>
/// Join a Relay server based on the JoinCode received from the Host or Server
/// </summary>
/// <param name="joinCode">The join code generated on the host or server</param>
/// <returns>True if the connection was successful</returns>
public async Task<bool> StartClientWithRelay(string joinCode)
{
    //Initialize the Unity Services engine
    await UnityServices.InitializeAsync();
    //Always authenticate your users beforehand
    if (!AuthenticationService.Instance.IsSignedIn)
    {
        //If not already logged, log the user in
        await AuthenticationService.Instance.SignInAnonymouslyAsync();
    }

    // Join allocation
    var joinAllocation = await RelayService.Instance.JoinAllocationAsync(joinCode: joinCode);
    // Configure transport
    NetworkManager.Singleton.GetComponent<UnityTransport>().SetRelayServerData(new RelayServerData(joinAllocation, "dtls"));
    // Start client
    return !string.IsNullOrEmpty(joinCode) && NetworkManager.Singleton.StartClient();
}

```
