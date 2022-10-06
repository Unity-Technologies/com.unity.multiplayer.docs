---
id: Unity.Networking.Transport.Relay.RelayParameterExtensions
title: Unity.Networking.Transport.Relay.RelayParameterExtensions
---


# Class RelayParameterExtensions







##### Inheritance


System.Object




RelayParameterExtensions






##### Inherited Members



System.Object.Equals(System.Object)





System.Object.Equals(System.Object, System.Object)





System.Object.GetHashCode()





System.Object.GetType()





System.Object.MemberwiseClone()





System.Object.ReferenceEquals(System.Object, System.Object)





System.Object.ToString()





###### **Namespace**: Unity.Networking.Transport.Relay

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public static class RelayParameterExtensions
```



### Methods

#### GetRelayParameters(ref NetworkSettings)


Gets the RelayNetworkParameter






##### Declaration


``` lang-csharp
public static RelayNetworkParameter GetRelayParameters(this ref NetworkSettings settings)
```



##### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkSettings | settings |             |

##### Returns

| Type                  | Description                                                      |
|-----------------------|------------------------------------------------------------------|
| RelayNetworkParameter | Returns the RelayNetworkParameter values for the NetworkSettings |

#### WithRelayParameters(ref NetworkSettings, ref RelayServerData, Int32)


Sets the RelayNetworkParameter values for the NetworkSettings






##### Declaration


``` lang-csharp
public static ref NetworkSettings WithRelayParameters(this ref NetworkSettings settings, ref RelayServerData serverData, int relayConnectionTimeMS = 3000)
```



##### Parameters

| Type            | Name                  | Description           |
|-----------------|-----------------------|-----------------------|
| NetworkSettings | settings              |                       |
| RelayServerData | serverData            | ServerData            |
| System.Int32    | relayConnectionTimeMS | RelayConnectionTimeMS |

##### Returns

| Type            | Description |
|-----------------|-------------|
| NetworkSettings |             |



