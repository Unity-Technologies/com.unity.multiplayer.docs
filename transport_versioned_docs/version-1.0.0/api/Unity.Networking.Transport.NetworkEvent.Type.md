---  
id: Unity.Networking.Transport.NetworkEvent.Type  
title: Unity.Networking.Transport.NetworkEvent.Type  
---

<div class="markdown level0 summary">

The different types of events that can be returned for a connection.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: transport.dll

##### Syntax

``` lang-csharp
public enum Type : short
```

## 

| Name       | Description                                   |
|------------|-----------------------------------------------|
| Connect    | The connection is now established.            |
| Data       | Data was received on the connection.          |
| Disconnect | The connection is now closed.                 |
| Empty      | No event actually occured. Should be ignored. |
