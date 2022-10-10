---  
id: Unity.Networking.Transport.INetworkParameter  
title: Unity.Networking.Transport.INetworkParameter  
---

<div class="markdown level0 summary">

The interface for NetworkParameters

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public interface INetworkParameter
```

## 

### Validate()

<div class="markdown level1 summary">

Checks if the values for all fields are valid. This method will be
automatically called when adding a paramter to the NetworkSettings.

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

``` lang-csharp
bool Validate()
```

#### Returns

| Type           | Description                             |
|----------------|-----------------------------------------|
| System.Boolean | Returns true if the parameter is valid. |
