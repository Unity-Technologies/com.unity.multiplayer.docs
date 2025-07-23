# Unity Multiplayer Documentation - Table of Contents

## Release Notes
- [Netcode for GameObjects](docs/release-notes/ngo-changelog.md)
- [Boss Room](docs/samples/release-notes/bossroom-changelog.md)
- [Bitesize](docs/samples/release-notes/bitesize-changelog.md)

## API Reference
- [API Reference](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.4/api/index.html)

## Get Started
- [Installation](docs/installation/installation.md)
- [Get Started with NGO](docs/tutorials/get-started-with-ngo.md)

### Distributed Authority Quickstart
- [Distributed Authority Quick Start](docs/learn/distributed-authority-quick-start.md)
- [Distributed Authority WebGL](docs/learn/distributed-authority-webgl.md)

### Migrating
- [UNet Migration Path](docs/installation/unet-migration-path.md)
- [Upgrade from UNet](docs/installation/migratingfromUNet.md)
- [Migrate from Matchmaker to Lobby](docs/installation/migrate-from-matchmaker-to-lobby.md)
- [Upgrade from MLAPI](docs/installation/migratingfrommlapi.md)

## Networking Concepts
- [Authority](docs/terms-concepts/authority.md)

### Network Topologies
- [Network Topologies](docs/terms-concepts/network-topologies.md)
- [Client-Server](docs/terms-concepts/client-server.md)
- [Listen Server Host Architecture](docs/learn/listenserverhostarchitecture.md)
- [Distributed Authority](docs/terms-concepts/distributed-authority.md)

## Configuration

### Configuring Connections
- [Connection Approval](docs/basics/connection-approval.md)
- [Max Players](docs/basics/maxnumberplayers.md)

- [Transports](docs/advanced-topics/transports.md)
- [Relay](docs/relay/relay.md)

## Networking Components

### NetworkObject
- [NetworkObject](docs/basics/networkobject.md)
- [Player Objects](docs/basics/playerobjects.md)
- [NetworkObject Parenting](docs/advanced-topics/networkobject-parenting.md)

### NetworkBehaviour
- [NetworkBehaviour](docs/basics/networkbehaviour.md)
- [NetworkBehaviour Synchronization](docs/basics/networkbehaviour-synchronize.md)

- [NetworkManager](docs/components/networkmanager.md)
- [NetworkTransform](docs/components/networktransform.md)
- [NetworkAnimator](docs/components/networkanimator.md)
- [Physics](docs/advanced-topics/physics.md)

## Ownership and Authority
- [Ownership](docs/basics/ownership.md)
- [Race Conditions](docs/basics/race-conditions.md)

## Spawning and Despawning
- [Object Spawning](docs/basics/object-spawning.md)
- [Object Pooling](docs/advanced-topics/object-pooling.md)
- [Object Visibility](docs/basics/object-visibility.md)
- [Spawning Synchronization](docs/basics/spawning-synchronization.md)
- [Deferred Despawning](docs/basics/deferred-despawning.md)

## Latency and Performance
- [Lag and Packet Loss](docs/learn/lagandpacketloss.md)
- [Ticks and Update Rates](docs/learn/ticks-and-update-rates.md)
- [Client-side Interpolation](docs/learn/clientside_interpolation.md)
- [Client Anticipation](docs/advanced-topics/client-anticipation.md)
- [Dealing with Latency](docs/learn/dealing-with-latency.md)

## Network Synchronization
- [Ways to Synchronize](docs/advanced-topics/ways-synchronize.md)

### NetworkVariables
- [NetworkVariable](docs/basics/networkvariable.md)
- [Custom NetworkVariables](docs/basics/custom-networkvariables.md)

### Remote Procedure Calls (RPCs)
- [Messaging System](docs/advanced-topics/messaging-system.md)
- [RPC](docs/advanced-topics/message-system/rpc.md)
- [Reliability](docs/advanced-topics/message-system/reliability.md)
- [RPC Parameters](docs/advanced-topics/message-system/rpc-params.md)

#### RPCs vs NetworkVariables
- [RPCs vs NetworkVariables](docs/learn/rpcvnetvar.md)
- [RPC and NetworkVariable Examples](docs/learn/rpcnetvarexamples.md)

- [RPC Compatibility](docs/advanced-topics/message-system/rpc-compatibility.md)

#### Legacy RPC Options
- [ClientRpc](docs/advanced-topics/message-system/clientrpc.md)
- [ServerRpc](docs/advanced-topics/message-system/serverrpc.md)
- [Execution Table](docs/advanced-topics/message-system/execution-table.md)

- [Custom Messages](docs/advanced-topics/message-system/custom-messages.md)
- [Connection Events](docs/advanced-topics/connection-events.md)

### Network Update Loop
- [About Network Update Loop](docs/advanced-topics/network-update-loop-system/about-network-update-loop.md)
- [Network Update Loop Reference](docs/advanced-topics/network-update-loop-system/network-update-loop-reference.md)

- [Network Time and Ticks](docs/advanced-topics/networktime-ticks.md)

## Serialization
- [Serialization Introduction](docs/advanced-topics/serialization/serialization-intro.md)
- [C# Primitives](docs/advanced-topics/serialization/cprimitives.md)
- [Unity Primitives](docs/advanced-topics/serialization/unity-primitives.md)
- [Enum Types](docs/advanced-topics/serialization/enum_types.md)
- [Arrays](docs/advanced-topics/serialization/arrays.md)
- [INetworkSerializable](docs/advanced-topics/serialization/inetworkserializable.md)
- [Custom Serialization](docs/advanced-topics/custom-serialization.md)
- [NetworkObject Serialization](docs/advanced-topics/serialization/networkobject-serialization.md)
- [FastBufferWriter and FastBufferReader](docs/advanced-topics/fastbufferwriter-fastbufferreader.md)

## Scene Management
- [Scene Management Overview](docs/basics/scenemanagement/scene-management-overview.md)

### Integrated Management
- [Using NetworkSceneManager](docs/basics/scenemanagement/using-networkscenemanager.md)
- [Scene Events](docs/basics/scenemanagement/scene-events.md)
- [Client Synchronization Mode](docs/basics/scenemanagement/client-synchronization-mode.md)
- [Timing Considerations](docs/basics/scenemanagement/timing-considerations.md)
- [In-Scene Placed NetworkObjects](docs/basics/scenemanagement/inscene-placed-networkobjects.md)

- [Custom Management](docs/basics/scenemanagement/custom-management.md)

## Session Management
- [Session Management](docs/advanced-topics/session-management.md)
- [Reconnecting Mid-Game](docs/advanced-topics/reconnecting-mid-game.md)

## Testing and Debugging
- [Testing Locally](docs/tutorials/testing/testing_locally.md)
- [Testing with Artificial Conditions](docs/tutorials/testing/testing_with_artificial_conditions.md)
- [Testing Client Connection Management](docs/tutorials/testing/testing_client_connection_management.md)
- [Logging](docs/basics/logging.md)
- [Techniques and Tricks for Debugging Multiplayer Games](docs/tutorials/testing/techniques_and_tricks_for_debugging_multiplayer_games.md)
- [Command Line Helper](docs/tutorials/command-line-helper.md)
- [Troubleshooting](docs/troubleshooting/troubleshooting.md)
- [Error Messages](docs/troubleshooting/error-messages.md)

## Educational Samples
- [Sample Dedicated Server](docs/learn/sample-dedicated-server.md)

### Boss Room
- [Boss Room](docs/learn/bossroom/bossroom.md)
- [Boss Room Architecture](docs/learn/bossroom/bossroom-architecture.md)
- [Boss Room Actions](docs/learn/bossroom/bossroom-actions.md)
- [NetworkObject Parenting](docs/learn/bossroom/networkobject-parenting.md)
- [Optimizing Boss Room](docs/learn/bossroom/optimizing-bossroom.md)
- [NetworkRigidbody](docs/learn/bossroom/networkrigidbody.md)
- [Spawn NetworkObjects](docs/learn/bossroom/spawn-networkobjects.md)

### Bitesize Samples
- [Bitesize Use Cases](docs/learn/bitesize/bitesize-usecases.md)
- [Bitesize Introduction](docs/learn/bitesize/bitesize-introduction.md)
- [Bitesize Space Shooter](docs/learn/bitesize/bitesize-spaceshooter.md)
- [Bitesize Client Driven](docs/learn/bitesize/bitesize-clientdriven.md)
- [Bitesize Dynamic Prefabs](docs/learn/bitesize/bitesize-dynamicPrefabs.md)
- [Bitesize Social Hub](docs/learn/bitesize/bitesize-socialhub.md)

### Deprecated Samples
- [Bitesize Invaders](docs/learn/bitesize/bitesize-invaders.md)

## Community Contributions
- [Code Monkey](docs/community-contributions/codemonkey.md)
- [Dilmer](docs/community-contributions/dilmer.md)
- [Dapper](docs/community-contributions/dapper.md)

## Additional Resources
- [FAQ](docs/learn/faq.md)
- [MTT Terms](docs/terms-concepts/mutliplayer-terms.md)
