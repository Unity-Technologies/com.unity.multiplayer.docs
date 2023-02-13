---
id: connection-approval
title: Connection Approval
---

With every new connection,  Netcode for GameObjects (Netcode) performs a handshake in addition to handshakes done by the transport. This ensures the `NetworkConfig` on the Client matches the Server's `NetworkConfig`. You can enable `ConnectionApproval` in the `NetworkManager` or via code by setting `NetworkManager.NetworkConfig.ConnectionApproval` to `true`.

Connection approval allows you to decide, on a per connection basis, if the connection should be allowed. Connection approval also enables you to specify the player Prefab to be created, allowing you to override the default `NetworkManager` defined player Prefab on a per player basis. By setting `ConnectionApproval` property of the `NetworkManager` to `true` Netcode will then check to make sure the `NetworkManager.ConnectionApprovalCallback` has been assigned. If it has been assigned, then Netcode will use the connection approval process for connecting clients. 

:::note
If it isn't assigned even with the `NetworkManager.ConnectionApprovalCallback` set to `true`, then the basic authentication will be used for the user! (that is, automatically authorizes and assigns the default player prefab)
:::

### NetworkManager.ConnectionApprovalRequest

This class represents the client-to-server request which contains:
- **ClientNetworkId**: the connecting client identifier
- **Payload**: any additional user defined connection data

### NetworkManager.ConnectionApprovalResponse

This is how the connection approval response is formed by server-side specific user code in the handler assigned to 'NetworkManager.ConnectionApprovalCallback'. On the server side, this class has all of the connection approval response information required to either authorize or reject a player attempting to connect. It also has the following properties:
- **Approved**: When `true` the player is approved and `false` the player is denied.
- **CreatePlayerObject**: When `true` the server will spawn a player Prefab for the connecting player. The default player Prefab is defined in NetworkManager. to specify a player Prefab other than the default use the `PlayerPrefabHash` property.
- **PlayerPrefabHash**: The type of player Prefab to use for the authorized player (_if this is null it uses the default `NetworkManager` defined player prefab_)
- **Position** and **Rotation**: The position and rotation of the player when spawned
- **Pending**: Provides the ability to mark the approval "pending" to delay the authorization until other user-specific code finishes the approval process.
- **Reason**: If `Approved` is `false` you can populate this with a `string` based message (or `json`) to send the reason why the client wasn't approved.

:::note
Unlike previous versions of Netcode for GameObjects where users were provided a callback to be invoked within the connection approval handler method, users now only need to set the appropriate properties of the `NetworkManager.ConnectionApprovalResponse` class.  Part of this update allows users to set their `ConnectionApprovalResponse` to `Pending` which provides users additional time to process any other tasks involved with the player approval process.
:::

## Server Side Connection Approval Example

```csharp
using Unity.Netcode;

private void Setup() 
{
    NetworkManager.Singleton.ConnectionApprovalCallback = ApprovalCheck;
    NetworkManager.Singleton.StartHost();
}

private void ApprovalCheck(NetworkManager.ConnectionApprovalRequest request, NetworkManager.ConnectionApprovalResponse response)
{
    // The client identifier to be authenticated
    var clientId = request.ClientNetworkId;

    // Additional connection data defined by user code
    var connectionData = request.Payload;

    // Your approval logic determines the following values
    response.Approved = true;
    response.CreatePlayerObject = true;

    // The Prefab hash value of the NetworkPrefab, if null the default NetworkManager player Prefab is used
    response.PlayerPrefabHash = null;

    // Position to spawn the player object (if null it uses default of Vector3.zero)
    response.Position = Vector3.zero;

    // Rotation to spawn the player object (if null it uses the default of Quaternion.identity)
    response.Rotation = Quaternion.identity;
    
    // If response.Approved is false, you can provide a message that explains the reason why via ConnectionApprovalResponse.Reason
    // On the client-side, NetworkManager.DisconnectReason will be populated with this message via DisconnectReasonMessage
    response.Reason = "Some reason for not approving the client";

    // If additional approval steps are needed, set this to true until the additional steps are complete
    // once it transitions from true to false the connection approval response will be processed.
    response.Pending = false;
}
```

## Sending An Approval Declined Reason (_`NetworkManager.ConnectionApprovalResponse.Reason`_)

Under the condition that you need to deny a player from connecting for any particular reason (*reached maximum number of connections, invalid authorization, etc.*), the `NetworkManager.ConnectionApprovalResponse` structure provides you with the optional `NetworkManager.ConnectionApprovalResponse.Reason` property.  When `NetworkManager.ConnectionApprovalResponse.Approved` is false and `NetworkManager.ConnectionApprovalResponse.Reason` has been populated with the reason for denying the player's request to connect, then the server will send the client a `DisconnectReasonMessage`. Upon the client side receiving the `DisconnectReasonMessage`, the `NetworkManager.DisconnectReason` property will be populated with the `NetworkManager.ConnectionApprovalResponse.Reason` message. The example provided below shows how this works:


```csharp
using UnityEngine;
using Unity.Netcode;

/// <summary>
/// Connection Approval Handler Component
/// </summary>
/// <remarks>
/// This should be placed on the same GameObject as the NetworkManager.
/// It automatically declines the client connection for example purposes.
/// </remarks>
public class ConnectionApprovalHandler : MonoBehaviour
{
    private NetworkManager m_NetworkManager;

    private void Start()
    {
        m_NetworkManager = GetComponent<NetworkManager>();
        if (m_NetworkManager != null)
        {
            m_NetworkManager.OnClientDisconnectCallback += OnClientDisconnectCallback;
            m_NetworkManager.ConnectionApprovalCallback = ApprovalCheck;
        }
    }

    private void ApprovalCheck(NetworkManager.ConnectionApprovalRequest request, NetworkManager.ConnectionApprovalResponse response)
    {
        response.Approved = false;
        response.Reason = "Testing the declined approval message";
    }

    private void OnClientDisconnectCallback(ulong obj)
    {
        if (!m_NetworkManager.IsServer && m_NetworkManager.DisconnectReason != string.Empty)
        {
            Debug.Log($"Approval Declined Reason: {m_NetworkManager.DisconnectReason}");
        }
    }
}
```


## Connection data  (_`NetworkManager.ConnectionApprovalRequest.Payload`_)

The `ConnectionApprovalRequest.Payload` parameter takes any custom data of your choice that the client should send to the server. Usually, this data should be some sort of ticket, room password, or similar that will decide if a connection should be approved or not. The `connectionData` is specified on the Client-side in the `NetworkingConfig` supplied when connecting.

Example:

```csharp
using Unity.Netcode;

NetworkManager.Singleton.NetworkConfig.ConnectionData = System.Text.Encoding.ASCII.GetBytes("room password");
NetworkManager.Singleton.StartClient();
```

The `Payload`, defined by the client-side `NetworkConfig.ConnectionData`, will be sent to the server as part of the `Payload` of the connection request message that will be used on the server-side to determine if the client is approved or not.  The connetion data is completely optional and the connection approval process can be used to simply assign player's unique prefabs, other than the default, as well as facilitates the ability to spawn players at various locations (without requiring the client to send any form of connection data).

## Timeout

Netcode uses a callback system to allow for external validation. For example, you might have a steam authentication ticket sent as the `ConnectionData` that you want to validate against steam servers.  This can take some time, so you will want to set the `NetworkManager.ConnectionApprovalResponse.Pending` to true while the steam server(or other third party authentication service) occurs.  However, if the third party authentication process (that is, steam servers, etc) takes longer than the time specified by the `NetworkConfig.ClientConnectionBufferTimeout`, then the connection will be dropped.  The timer for this starts when the server notified of the new inbound client connection. The "Client Connection Buffer Timeout" value can be set via the `NetworkManager` in the inspector view or accessed via the `NetworkManager.NetworkConfig.ClientConnectionBufferTimeout` property.

## Security

If connection approval is enabled. Any messages sent before a connection is setup are silently ignored.

### Connection data security

The connection data isn't encrypted or authenticated. 

:::important
A man in the middle attack can be done. it's strongly suggested to not send authentication tokens such as steam tickets or user passwords over connection approval.
:::

## Changing the Player Prefab
There might be times when you want to specify an alternate player Prefab to use for a player connecting. The connection approval process provides you with the ability to accomplish this task.
### Step 1: Modify/Create an In-Scene Placed Connection Approval Component
```csharp
    public class ClientConnectionHandler : NetworkBehaviour
    {
        public List<uint> AlternatePlayerPrefabs;

        public void SetClientPlayerPrefab(int index)
        {
            if (index > AlternatePlayerPrefabs.Count)
            {
                Debug.LogError($"Trying to assign player Prefab index of {index} when there are onlky {AlternatePlayerPrefabs.Count} entries!");
                return;
            }
            if (NetworkManager.IsListening || IsSpawned)
            {
                Debug.LogError("This needs to be set this before connecting!");
                return;
            }
            NetworkManager.NetworkConfig.ConnectionData = System.BitConverter.GetBytes(index);
        }

        public override void OnNetworkSpawn()
        {
            if (IsServer)
            {
                NetworkManager.ConnectionApprovalCallback = ConnectionApprovalCallback;
            }
        }

        private void ConnectionApprovalCallback(NetworkManager.ConnectionApprovalRequest request, NetworkManager.ConnectionApprovalResponse response)
        {
            var playerPrefabIndex = System.BitConverter.ToInt32(request.Payload);
            if (AlternatePlayerPrefabs.Count < playerPrefabIndex)
            {
                response.PlayerPrefabHash = AlternatePlayerPrefabs[playerPrefabIndex];
            }
            else
            {
                Debug.LogError($"Client provided player Prefab index of {playerPrefabIndex} when there are onlky {AlternatePlayerPrefabs.Count} entries!");
                return;
            }
            // Continue filling out the response
        }
    }

```
In the above example, we created a list of unsigned integers to store our alternate player Prefab GlobalObjectIdHash values (`AlternatePlayerPrefabs`).  For example purposes, we added a public method that a client can invoke to set their selected player prefab's index that is relative to `AlternatePlayerPrefabs` (you can do this in some other component). The general idea for this approach is that the client provides the server with the alternate player Prefab index that the player whishes to use.

The server assigns the `ConnectionApprovalCallback` when it spawns the in-scene placed NetworkObject that the `ClientConnectionHandler` is attached to.  When a connection request is handled, the server grabs the alternate player Prefab index from the request's Payload field and then obtains the GlobalObjectIdHash value from the `AlternatePlayerPrefabs` list and assigns that to the `response.PlayerPrefabHash`.

### Step 2: Copy the Alternate Player Prefab's GlobalObjectIdHash Value
![Copy-GlobalObjectIdHash](images/CopyGlobalObjectIdHash.png)

In order to populate the `AlternatePlayerPrefabs` list:
- Open the scene containing the in-scene placed `NetworkObject` that the `ConnectionApprovalCallback` is attached to.
- Find each alternate player Prefab you wish to add to the list, select the Prefab (but don't open it), and copy the GlobalObjectIdHash value by right-clicking and selecting "copy".
- Paste the copied GlobalObjectIdHash value into a new list item entry in the `AlternatePlayerPrefabs` list.

### Step 3: Assign Client's Selected Player Prefab Index
This part is up to your project's design.  We did include a method that can be invoked by the client, but that also requires the client to have that scene loaded. You can choose to have a ScriptableObject that has the list of alternate player Prefab GlobalObjectIdHash values and share that between components (this would require you to change the `AlternatePlayerPrefabs` to a reference of the `ScriptableObject`).  The general idea is to have the client populate the NetworkConfig.ConnectionData before starting.

:::tip
An alternate way to handle this is by using a generic player Prefab that is used as the parent to the actual player's character and allowing the player to select their player once they're connected. This would involve dynamically spawning the player's selected character with the client as the owner and parenting that under the player's generic player Prefab instance.<br />
Suggested Reading: <br />
[NetworkObject Parenting](../advanced-topics/networkobject-parenting.md)<br />
[Session Management](../advanced-topics/session-management.md)<br />
:::
