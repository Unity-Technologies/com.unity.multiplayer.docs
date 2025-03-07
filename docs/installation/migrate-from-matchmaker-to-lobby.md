---
id: migrate-from-matchmaker-to-lobby
title: Migrate from UNet Matchmaker to the Lobby Unity Gaming Service
---

UNet is deprecated and no longer supported. Follow this guide to migrate from UNet to the [Lobby service](https://docs.unity.com/ugs/manual/lobby/manual/unity-lobby-service). If you need help, contact us in the [Unity Multiplayer Networking Discord](https://discord.gg/buMxnnPvTb).

When you migrate a project from UNet Matchmaker to the Unity Gaming Services (UGS), use the Lobby Service to replace the UNet Matchmaker features. 
Both systems allow a game client to create a joinable game lobby or match and allow players to join.

There are some differences between UNet Matchmaker and Lobby features. To learn more, refer to the [Feature comparison](#feature-comparison) section and the [UNet and Lobby SDK scripting comparison](#unet-and-lobby-sdk-scripting-comparison). To see the new features the Lobby service includes, refer to [New features in the Lobby service](#new-features-in-the-lobby-service).

## Feature comparison

|Feature|Supported in UNet Matchmaking|Supported in the Lobby service|
|-|-|-|
|Discoverable via query|Yes|Yes|
|Built-in Domain ID|Yes|Partially supported. <br/>For more information, refer to [Partially-supported UNet features and workarounds](#partially-supported-unet-features-and-workarounds).|
|Join by ID|Yes|Partially supported. <br/>For more information, refer to [Partially-supported UNet features and workarounds](#partially-supported-unet-features-and-workarounds)|
|Join by Code|No|Yes|
|Custom lobby data|No|Yes|
|Search by custom data|No|Yes|
|Password|Yes|Yes|
|Connection information|Yes|Yes|
|Quick join|No|Yes|
|Toggle public and private sessions|Yes|Yes|
|Host can boot players|Yes|Yes|
|Custom per-player data|No|Yes|
|Update lobbies after creation|No|Yes|


## UNet and Lobby SDK scripting comparison

Learn the difference between the following features in UNet and the Lobby service:
* [Imports](#imports)
* [Initialization](#initialization)
* [Authentication](#authentication)
* [Method invocation and return types](#method-invocation-and-return-types)
* [Create a UNet Match or a UGS lobby](#create-a-unet-match-or-a-ugs-lobby)
* [Custom data properties](#custom-data-properties)
* [Connection data](#connection-data)
* [Delete a Match or Lobby](#delete-a-match-or-lobby)
* [Join a Match or Lobby](#join-a-match-or-lobby)
* [Remove a player or leave a lobby](#remove-a-player-or-leave-a-lobby)
* [List a Match or query a lobby](#list-a-match-or-query-a-lobby)
* [Update a Match or lobby](#update-a-match-or-lobby)

### Imports

UNet uses the `using UnityEngine.Networking.Match;` import.

The Lobby service uses the following imports:
* `using Unity.Services.Authentication;`
* `using Unity.Services.Lobbies;`
* `using Unity.Services.Lobbies.Models;`

To use the Lobby service imports in your classes, reference the assemblies of the Relay and Lobby packages in an Assembly Definition Asset:

1. If one doesn’t exist, create a new Assembly definition File by selecting **Assets **> **Create** > **Scripting** > **Assembly Definition.**
2. Select the** Assembly Definition** asset to open it in the Inspector window.
3. In the **Assembly Definition References **section, select **+**.
4. Use the asset picker circle to select the following assembly files for the Relay and Lobby packages:
    1. `Unity.Services.Relay`
    2. `Unity.Services.Authentication`
    3. `Unity.Services.Core`
    4. `Unity.Services.Lobbies`

### Initialization
Initialize Unity Services before you use the Lobby service.

The UNet Matchmaker initialization method: 

```
//in a class
[SerializeField]
NetworkManager networkManager;

//then, in a method
if (networkManager.matchMaker)
{
    return;
}
networkManager.StartMatchMaker();
```

The Lobby service initialization method: 
```
await UnityServices.InitializeAsync();
```

### Authentication

Authentication is only supported in the Lobby service.

You must authenticate players when you use the Lobby service and other Unity Gaming Services. Lobby service APIs do not function unless a player is signed in. Refer to the [Unity Authentication](https://docs.unity.com/authentication/) documentation for more information.

In the following example code, a Player is signed in using [Anonymous authentication](https://docs.unity.com/authentication/AuthenticationApproaches.html#Anonymous_authentication). Authentication also supports [platform-specific / third-party authentication](https://docs.unity.com/authentication/AuthenticationApproaches.html#Platform-specific_/_third-party_authentication).

```
await AuthenticationService.Instance.SignInAnonymouslyAsync();

var player = new Player(AuthenticationService.Instance.PlayerId, null, new Dictionary<string, PlayerDataObject>());
````
While it is not required to create an actual Player object to use the Lobby APIs (signing in is fine for most calls), you can use the Player object to store player-specific data in the Lobby.

### Method invocation and return types

UNet and the Lobby service use the following invocation and return types: 

* UNet: Coroutines with callbacks. 
* The Lobby service: Tasks and `async` or `await`.

API calls to both the UNet matchmaker and the Lobby service are asynchronous, but the patterns used are different in the following ways:

* UNet Matchmaker methods return Coroutines and use callbacks. To call UNet Matchmaker APIs, manually initialize the `NetworkMatch `object of the `NetworkManager`, and reference it.
* Lobby methods return async `Task `or `Task<T>` objects. To call Lobby service APIs, use the built-in singleton `Lobbies.Instance`.


### Create a UNet Match or a UGS lobby

#### Use UNet to create a Match

The following code demonstrates the hard-coded options you can use to create a Match in UNet:

```
networkManager.matchMaker.CreateMatch
(
    matchName: "My Match Name",
    matchSize: 16,
    matchAdvertise: true,
    matchPassword: "Password",
    publicClientAddress: "", //or <WAN Ip>
    privateClientAddress: "",
    eloScoreForMatch: 123,
    requestDomain: 0,
    callback: OnMatchCreated
);
```

#### Use the Lobby service to create a lobby

The Lobby service requires more lines of code to create a lobby than UNet does to create a Match. This is because it uses custom data properties that use additional data structures. 

```
var lobbyData = new Dictionary<string, DataObject>()
{
    ["Domain"] = new DataObject(
        visibility: DataObject.VisibilityOptions.Public,
        value: "MyDomain",
        index: DataObject.IndexOptions.S1),

    ["EloScore"] = new DataObject(
        visibility: DataObject.VisibilityOptions.Public, 
        value: "123", 
        index: DataObject.IndexOptions.N1),
};

var player = new Player(
    AuthenticationService.Instance.PlayerId,
    "MyWanIp",
    new Dictionary<string, PlayerDataObject>()
    {
        ["EloScore"] = new PlayerDataObject(
            visibility: PlayerDataObject.VisibilityOptions.Public,
            value: "123")
    });

var currentLobby = await Lobbies.Instance.CreateLobbyAsync(
    lobbyName: "My Lobby Name",
    maxPlayers: 16,
    options: new CreateLobbyOptions()
    {
        Data = lobbyData,
        IsPrivate = false,
        Player = player
    });

```

### Custom data properties
Custom data properties are one of the most important differences between UNet and Lobby service APIs. This feature allows you to set custom properties at a lobby level, or player level, or both.  You can use lobby-level data when filtering queries of available lobbies. Refer to the [Lobby data and player data](https://docs.unity.com/lobby/lobby-data-and-player-data.html) for more information.

The following code example for the Lobby service re-implements the UNet match fields `Domain` and `EloScore` as custom fields at the Lobby level:

```
    var lobbyData = new Dictionary<string, DataObject>() ...
```
Lobby-level data properties are stored as a Dictionary which maps the property name (string) to the  `DataObject` value.

```
    ["Domain"] = new DataObject(
        visibility: DataObject.VisibilityOptions.Public,
        value: "MyDomain",
        index: DataObject.IndexOptions.S1),
```
The previous snippet declares a new property named `Domain`. Visibility is set to `Public`, which makes it visible by non-members of the lobby, and is required to make it queryable. The value is set to `MyDomain`; in this case, the code uses a string for domain instead of a number for the sake of the example. Index is set to `DataObject.IndexOptions.S1`, which means it is indexed for use with queries, using the S1** **index slot (string #1), and treated as a string (which limits which filtering operations you can use with queries).  

:::note
You can only use a limited number of string and number-based indices.
:::

The initialization for `EloScore` is identical, but uses the index `DataObject.IndexOptions.N1` instead. This means that the value of `EloScore` is stored in the N1 slot, and treated as a number, which changes the available query filter options you can use.

Custom Lobby fields do not support automatic aggregation. If you wanted to use the custom Lobby-scoped data property `EloScore` to represent the average EloScore of all players in the lobby, the lobby host would need to manually aggregate each player's EloScore data as players join and leave, and keep the lobby EloScore field up-to-date.

To show how this might work, the following code example sets per-player EloScore data:

```
    var player = new Player(
        AuthenticationService.Instance.PlayerId,
        "MyWanIp",
        new Dictionary<string, PlayerDataObject>()
        {
            ["EloScore"] = new PlayerDataObject(
                visibility: PlayerDataObject.VisibilityOptions.Public,
                value: "123")
        });
```


When this Player object is used in the `Create` call, the lobby is will automatically be created with the player-scoped data included on the object. The following example includes a player-scoped property called `EloScore`:


```
        ["EloScore"] = new PlayerDataObject(
            visibility: PlayerDataObject.VisibilityOptions.Public,
            value: "123")
```


The lobby stores this data for each player. If you want to show this data to any player who queries the lobby, you can make the visibility public. You can also use the `Member` visibility, which only allows players that have joined the lobby to read the data. For more information, refer to `Enum PlayerDataObject.VisibilityOptions`.

When you include EloScore data for each player, the lobby host can read that data, aggregate it, and update the lobby-level EloScore field with the aggregate EloScore of everyone in the lobby.

Lastly, the lobby itself is created:


```
    var currentLobby = await Lobbies.Instance.CreateLobbyAsync(
        lobbyName: "My Lobby Name",
        maxPlayers: 16,
        options: new CreateLobbyOptions()
        {
            Data = lobbyData,
            IsPrivate = false,
            Player = player
        });
```


Unlike UNet APIs which return coroutines, the `Lobbies.Instance.CreateLobbyAsync()` returns a `Task<Lobby>` object that can be awaited. If the call was successful, the resulting lobby object contains information about the created lobby.

Refer to the [Create a lobby](https://docs.unity.com/ugs/manual/lobby/manual/create-a-lobby) documentation for more information.

### Connection data
In UNet, you can share connection information by embedding each client's WAN or LAN IP in the match. This is also possible in the Lobby service through either the per-player [`ConnectionInfo`](https://docs.unity3d.com/Packages/com.unity.services.lobby@1.2/api/Unity.Services.Lobbies.Models.Player.html#Unity_Services_Lobbies_Models_Player_ConnectionInfo) field or using custom properties at the player or lobby level. However, sharing IPs and directly connecting players to each other is highly discouraged in modern practice due to privacy issues, hacking and DDoS concerns. 

Instead, Unity suggests using the [Relay](https://docs.unity.com/relay/introduction.html) service, which replaces the old UNet Relay service. Use the Relay service to connect players together without exposing IPs and without a direct connection to each other. Relay also supports [special integrations with the Lobby service](https://docs.unity.com/ugs/manual/relay/manual/integration).

When you use the Relay service with the Lobby service, the client who is the game host uses the Relay APIs to create a Relay allocation, and then shares the connection details for that Relay allocation.  Other clients then use the Relay APIs to connect to the same relay allocation.

### Delete a Match or Lobby

In the Lobby service, the lobby host can delete a lobby by calling the `DeleteLobbyAsync()` and passing in the lobby ID.

To delete a match in UNet, use the following code sample:

```
//note: Refer to the section List a Match or query a lobby to understand how to retrieve MatchInfoSnapshot

networkManager.matchMaker.DestroyMatch
(
    netId: matchInfoSnapshot.networkId,
    requestDomain: 0,
    callback: OnMatchDeleted
);
```
To delete a lobby in the Lobby service: 
```
await Lobbies.Instance.DeleteLobbyAsync(lobbyId);
```

Refer to the [Deleting lobbies](https://docs.unity.com/ugs/manual/lobby/manual/delete-a-lobby) documentation for more information.

### Join a Match or lobby

To join a Match in UNet, use the following code sample: 

```
//note: Refer to the section List a Match or query a lobby to understand how to retrieve MatchInfoSnapshot

networkManager.matchMaker.JoinMatch
(
    netId: matchInfoSnapshot.networkId,
    matchPassword: "Password",
    publicClientAddress: "",
    privateClientAddress: "",
    eloScoreForClient: 0,
    requestDomain: 0,
    callback: OnMatchJoined
);

```

To join a lobby in the Lobby service, use the following code sample: 

```
Player player = new Player(
    id: AuthenticationService.Instance.PlayerId,
    connectionInfo: "MyWanIp",
    data: new Dictionary<string, PlayerDataObject>()
    {
        ["EloScore"] = new PlayerDataObject(
            visibility: PlayerDataObject.VisibilityOptions.Public,
            value: "123")
    });

// Using the JoinLobbyByCodeAsync API
Lobby joinedLobbyByCode = await Lobbies.Instance.JoinLobbyByCodeAsync(
    lobbyCode: "myLobbyCode", 
    options: new JoinLobbyByCodeOptions()
    {
        Player = player
    });

// Using the JoinLobbyByIdAsync API
Lobby joinedLobbyById = await Lobbies.Instance.JoinLobbyByIdAsync(
    lobbyId: "myLobbyId",
    options: new JoinLobbyByIdOptions()
    {
        Player = player
    });

// Using the QuickJoinLobbyAsync API
List<QueryFilter> queryFilters = new List<QueryFilter>
{
    // Search for games with domain = a specific value
    new QueryFilter(
        field: QueryFilter.FieldOptions.S1,
        op: QueryFilter.OpOptions.EQ,
        value: "MyDomain"),
};

QuickJoinLobbyOptions options = new QuickJoinLobbyOptions()
{
    Filter = queryFilters,
    Player = player
};

Lobby joinedLobby = await Lobbies.Instance.QuickJoinLobbyAsync(options);
```
You can use the following Lobby service APIs to join a Lobby: 
* `JoinLobbyByCodeAsync()`
* `JoinLobbyByIdAsync()`
* `QuickJoinLobbyAsync()`

Use `JoinLobbyByCodeAsync()` to join a lobby given a Join Code, which is a shareable code which maps to a specific Lobby. These join codes are created automatically for all lobbies and can be viewed by lobby members. Join Codes can be used by players who wish to invite other players to play with them, and are often used in combination with private lobbies (invisible to queries).


```
    Lobby joinedLobbyByCode = await Lobbies.Instance.JoinLobbyByCodeAsync(
        lobbyCode: "myLobbyCode", 
        options: new JoinLobbyByCodeOptions()
        {
            Player = player
        });
```

Use `JoinLobbyByIdAsync()` to join a lobby with a known ID. This is most commonly used to join public lobbies (discoverable by queries) that have been enumerated by a query of available lobbies.

```
    Lobby joinedLobbyById = await Lobbies.Instance.JoinLobbyByIdAsync(
        lobbyId: "myLobbyId",
        options: new JoinLobbyByIdOptions()
        {
            Player = player
        });
```

`QuickJoinLobbyAsync()` performs both a query and join operation in one step. This allows you to avoid the race condition of a player listing lobbies, selecting one, and failing to join because the lobby has filled up. The trade-off is that players are automatically put into the first lobby that matches the query filters you have set, without the ability to manually choose a lobby from a list.

```
    List<QueryFilter> queryFilters = new List<QueryFilter>
    {
        // Search for games with domain = a specific value
        new QueryFilter(
            field: QueryFilter.FieldOptions.S1,
            op: QueryFilter.OpOptions.EQ,
            value: "MyDomain"),
    };

    QuickJoinLobbyOptions options = new QuickJoinLobbyOptions()
    {
        Filter = queryFilters,
        Player = player
    };

    Lobby joinedLobby = await Lobbies.Instance.QuickJoinLobbyAsync(options);
```


In the UNet API, players that join a match can submit their connection information and EloScore. In the Lobby API, these are handled differently. Refer to the notes on EloScore in the [Create a UNet Match or a UGS lobby](#create-a-unet-match-or-a-ugs-lobby) documentation, and the connection info notes in 
[Connection data](#connection-data). If you choose to use these, you can set them as player-level properties, and the player object with those properties would be included in the call to the join API.

All three APIs take an optional `Player `object in some form, allowing you to pass in a `Player `object with player data already set. This data is added to the lobby as part of the join process so that you don't need to do a join followed by an update.

Refer to the [Join a lobby](https://docs.unity.com/ugs/manual/lobby/manual/join-a-lobby) documentation for more information.

### Remove a player or leave a lobby

To remove a player in UNet, use the following code sample: 

```
//prerequisite: you’ll have to store a reference to currentMatch (MatchInfo) upon connecting to a match

networkManager.matchMaker.DropConnection
(
    netId: currentMatch.networkId,
    dropNodeId: currentMatch.nodeId,
    requestDomain: currentMatch.domain,
    callback: OnCurrentMatchLeft
);
```
To leave a lobby in the Lobby service, use the following code sample:
```
await Lobbies.Instance.RemovePlayerAsync(
            lobbyId: "lobbyId",
            playerId: "playerIdToRemove");
```

To remove a player in Lobby, provide the lobby ID and player ID you want to remove.

:::note
Lobby hosts can remove any player using this API, but lobby clients may only remove themselves (leaving the lobby).
:::

If a host uses this API to remove themselves from a lobby, a new lobby host is chosen.

Refer to the on [Leave a lobby](https://docs.unity.com/ugs/manual/lobby/manual/leave-a-lobby) documentation for more information.

### List a Match or query a lobby

List a match in UNet: 
```
networkManager.matchMaker.ListMatches
(
    startPageNumber: 0,
    resultPageSize: 20,
    matchNameFilter: "",
    filterOutPrivateMatchesFromResults: false,
    eloScoreTarget: 0,
    requestDomain: 0,
    callback: OnSessionsListRetrieved
);

```

Query a lobby in the Lobby service: 
```
List<QueryFilter> queryFilters = new List<QueryFilter>
{
    // Search for games with open slots (AvailableSlots greater than 0)
    new QueryFilter(
        field: QueryFilter.FieldOptions.AvailableSlots,
        op: QueryFilter.OpOptions.GT,
        value: "0"),

    // Search for games with domain = a specific value
    new QueryFilter(
        field: QueryFilter.FieldOptions.S1, 
        op: QueryFilter.OpOptions.EQ,
        value: "MyDomain"),

    // EloSkill >= 10
    new QueryFilter(
        field: QueryFilter.FieldOptions.N1,
        op: QueryFilter.OpOptions.GE,
        value: "10"),

    // EloSkill <= 200
    new QueryFilter(
        field: QueryFilter.FieldOptions.N1,
        op: QueryFilter.OpOptions.LE,
        value: "200"),
};

// Query results can also be ordered
List<QueryOrder> queryOrdering = new List<QueryOrder>
{
    new QueryOrder(true, QueryOrder.FieldOptions.AvailableSlots),
    new QueryOrder(false, QueryOrder.FieldOptions.Created),
};

// Call the Query API
QueryResponse response = await Lobbies.Instance.QueryLobbiesAsync(new QueryLobbiesOptions()
{
    Count = 20, // Override default number of results to return
    Filters = queryFilters,
    Order = queryOrdering,
    SampleResults = false,
    Skip = 0
});

List<Lobby> foundLobbies = response.Results;

```

The UNet `ListMatches` command handles querying for existing matches, including settings for pagination, a name filter, Elo score support (tries to find matches with the lowest absolute difference in Elo score), and domain support. It starts a coroutine which executes a callback on completion. The callback includes information on whether the call was successful, error info (if errored), and a list of matches in the form of `MatchInfoSnapshots`.

The process is similar in the Lobby service, with the following differences:
* Lobby does not support Elo or domains by default.
* Lobby allows you to define query filters and order-by rules.
* Pagination is supported but optional; by default the API returns a random sample matching the given filters.

Query filters allow you to specify filter rules against custom lobby data as well as some pre-defined fields, such as name, max players, available open slots. The following sample code demonstrates how you might filter lobbies to only show open lobbies that match a custom domain value and have a custom `EloSkill` property within a specified range.


```
    List<QueryFilter> queryFilters = new List<QueryFilter>
    {
        // Search for games with open slots (AvailableSlots greater than 0)
        new QueryFilter(
            field: QueryFilter.FieldOptions.AvailableSlots,
            op: QueryFilter.OpOptions.GT,
            value: "0"),

        // Search for games with domain = a specific value
        new QueryFilter(
            field: QueryFilter.FieldOptions.S1, 
            op: QueryFilter.OpOptions.EQ,
            value: "MyDomain"),

        // EloSkill >= 10
        new QueryFilter(
            field: QueryFilter.FieldOptions.N1,
            op: QueryFilter.OpOptions.GE,
            value: "10"),

        // EloSkill <= 20
        new QueryFilter(
            field: QueryFilter.FieldOptions.N1,
            op: QueryFilter.OpOptions.LE,
            value: "20"),
    };
```


With query ordering, you can request results in ascending or descending order.  For example, you might wish to order by the number of available slots in a match, or show newest lobbies first, or both:


```
    List<QueryOrder> queryOrdering = new List<QueryOrder>
    {
        new QueryOrder(true, QueryOrder.FieldOptions.AvailableSlots),
        new QueryOrder(false, QueryOrder.FieldOptions.Created),
    };
```


The call to the query API itself provides you with functionality such as filters and ordering, overriding the pagination settings, and overriding whether results are randomly sampled. All of these parameters are optional.


```
    QueryResponse response = await Lobbies.Instance.QueryLobbiesAsync(new QueryLobbiesOptions()
    {
        Count = 20, // Override default number of results to return
        Filters = queryFilters,
        Order = queryOrdering,
        SampleResults = false,
        Skip = 0
    });

    List<Lobby> foundLobbies = response.Results;
```

Refer to the [Query for lobby](https://docs.unity.com/ugs/manual/lobby/manual/query-for-lobbies) documentation for more information.


### Update a Match or lobby

To update a Match in UNet, use the following code sample: 
```
//note: see the section “List/Query for Match/Lobby” to understand how to retrieve MatchInfoSnapshot

networkManager.matchMaker.SetMatchAttributes(
    networkId: matchInfoSnapshot.networkId,
    isListed: matchInfoSnapshot.isPrivate,
    requestDomain: 0,
    callback: OnMatchVisibilityToggled
);

```

To update a lobby in the Lobby service, use the following code sample: 
```
//get an existing lobby reference first
Lobby m_MatchInfo; 

//then, if you want to edit lobby’s data
async Task RenameLobby()
{
    // Lobby custom data
    var lobbyData = new Dictionary<string, DataObject>()
    {
        ["AverageEloScore"] = new DataObject(
        visibility:     DataObject.VisibilityOptions.Public,
        value: "123"),
    };
    try
    {
        var updatedOptions = new UpdateLobbyOptions()
        {
            Data = lobbyData,
            HostId = AuthenticationService.Instance.PlayerId,
            MaxPlayers = 8,
            Name = "new lobby name"
        };

        // Update lobby custom data and metadata
        m_MatchInfo = await Lobbies.Instance.UpdateLobbyAsync(m_MatchInfo.Id, updatedOptions);
    }
    catch (System.Exception e)
    {
        Debug.LogError(e);
    }
    OnMatchVisibilityToggled(m_MatchInfo);
}

//if you want to edit player’s data instead

var updatedPlayerOptions = new UpdatePlayerOptions()
    {
        Data = playerData,
        AllocationId = "myRelayAllocationId",
    };

    // Update custom player data and metadata (relay allocation Id)
    m_MatchInfo = await Lobbies.Instance.UpdatePlayerAsync(m_MatchInfo.Id, AuthenticationService.Instance.PlayerId, updatedPlayerOptions);

```

## Lobby lifecycle

Lobby uses the [heartbeat](https://docs.unity.com/ugs/manual/lobby/manual/heartbeat-a-lobby) pattern in order to prevent inactive lobbies from polluting query results, and to eventually delete inactive lobbies.

The host must heartbeat or update a Lobby at least once every 30 seconds to appear in query results. If lobbies are not updated or heartbeat for over one hours, they may be deleted.

:::note
If all players leave a lobby, it is automatically delisted and deleted.
:::

Refer to the [Heartbeat a lobby](https://docs.unity.com/ugs/manual/lobby/manual/heartbeat-a-lobby) documentation for more information.


## Partially-supported UNet features and workarounds

The following UNet features do not have a direct replacement in Lobby:

* Domain IDs
* Elo Score

### Domain IDs

Domain IDs in UNet Matchmaking partition matches into different domains. If a client creates a match in one domain, another client has to search within the same domain to find the match. This could be used for things like separating builds or game modes.

Lobby does not have a dedicated Domain ID field, but you can easily implement something similar using custom lobby properties and query filters. For example, a client could set properties such as `build` or `game mode` when creating a match, and then other clients could search for `build = 123` or `gamemode = XYZ` when querying.

### Elo Score

**UNet Matchmaking**

This is a dedicated number field designed to represent the average skill level of a match. The host sets it when creating the match. Clients searching for a match get results ordered by their absolute value distance to the ELO score of possible matches.

**The Lobby service**

There is no dedicated EloScore field, but you can use custom public lobby properties to store a custom EloScore value.

The Lobby service query APIs currently do not support ordering results by lowest absolute value difference of a custom data field, which would be required for 1:1 support. This can be emulated, but the results may not be ideal or reliable.

You can use two queries: one to get lobbies with an EloScore greater or equal to the player's score (ordered by EloScore ascending), and one to get lobbies with an EloScore less than or equal to the players score (ordered by EloScore descending). Then, union the results on the client. This should give you the closest results above and below the player's EloSkill value. However, this approach does not work with QuickJoin. It also requires two calls for every attempt, and you must space out your queries to avoid [rate limiting](https://docs.unity.com/lobby/rate-limits.html).

## New features in the Lobby service

This section covers some of the new features that the Lobby service has compared to UNet Matchmaking. Refer to the full [Lobby documentation](https://docs.unity.com/lobby/unity-lobby-service-overview.html) for more detailed information.


### Host Migration

Lobby supports host migration. Refer to the [Host migration](https://docs.unity.com/lobby/host-migration.html) documentation for more information.


### QuickJoin API

The QuickJoin API performs a query-and-join operation in one step. Refer to the section on [Join a match or lobby](#join-a-match-or-lobby) or the documentation on [QuickJoin](https://docs.unity.com/lobby/quick-join.html) for more information.


### Custom lobby and player data

Lobbies have support for custom data, and many features around updating and querying for that data, as well as data access control. Refer to the [Lobby and player data](https://docs.unity.com/lobby/lobby-data-and-player-data.html) documentation for more information.


### Query filters and ordering

Filtering and ordering rules can be used in the Query and QuickJoin APIs to filter and order query results according to the value of custom lobby data fields and default metadata fields. Refer to [List a match or query a lobby](#list-a-match-or-query-a-lobby) or the [Query for lobbies](https://docs.unity.com/ugs/manual/lobby/manual/query-for-lobbies) documentation for more information.


### Relay integration

You can integrate Lobby with the [Relay](https://docs.unity.com/relay/introduction.html) service to keep lobby membership and relay session membership in-sync. Refer to the [Relay integrations](https://docs.unity.com/ugs/manual/relay/manual/integration) documentation for more information.


### Lobby locking

You can lock a Lobby to prevent new players from joining. This is useful if, for example, you don't want players to join while a game is in progress. The lobby can be locked during gameplay and unlocked in between games. Locking can be set via the `Create` or `UpdateLobby` APIs.

For more information, refer to [Using Lobby.](https://docs.unity.com/ugs/en-us/manual/cloud-code/manual/scripts/use-cases/lobby)

### Getting joined lobbies

If a client loses their knowledge of which lobbies they are in, they can call the [`GetJoinedLobbies`](https://docs.unity.com/ugs/manual/lobby/manual/get-joined-lobbies) API to see all the lobbies the logged-in player currently belongs to.

