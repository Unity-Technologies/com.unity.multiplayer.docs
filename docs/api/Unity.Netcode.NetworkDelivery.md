---  
id: Unity.Netcode.NetworkDelivery  
title: Unity.Netcode.NetworkDelivery  
---

<div class="markdown level0 summary">

Delivery methods

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

``` lang-csharp
public enum NetworkDelivery
```

## 

| Name                        | Description                                                             |
|-----------------------------|-------------------------------------------------------------------------|
| Reliable                    | Reliable message                                                        |
| ReliableFragmentedSequenced | A reliable message with guaranteed order with fragmentation support     |
| ReliableSequenced           | Reliable message where messages are guaranteed to be in the right order |
| Unreliable                  | Unreliable message                                                      |
| UnreliableSequenced         | Unreliable with sequencing                                              |
