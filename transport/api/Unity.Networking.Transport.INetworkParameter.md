---
id: Unity.Networking.Transport.INetworkParameter
title: Unity.Networking.Transport.INetworkParameter
---


# Interface INetworkParameter


The interface for NetworkParameters





###### **Namespace**: Unity.Networking.Transport

###### **Assembly**: Transport.dll

##### Syntax


``` lang-csharp
public interface INetworkParameter
```



### Methods

#### Validate()


Checks if the values for all fields are valid. This method will be
automatically called when adding a paramter to the NetworkSettings.






##### Declaration


``` lang-csharp
bool Validate()
```



##### Returns

| Type           | Description                             |
|----------------|-----------------------------------------|
| System.Boolean | Returns true if the parameter is valid. |



