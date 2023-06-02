---
id: Unity.Netcode.NetworkDelivery
title: Unity.Netcode.NetworkDelivery
date created: Tuesday, October 11th 2022, 11:08:26 am
date modified: Wednesday, January 25th 2023, 5:35:22 pm
---

<div class="markdown level0 summary">

Delivery methods

</div>

<div class="markdown level0 conceptual">

</div>

## **Namespace**: System.Dynamic.ExpandoObject

## **Assembly**: Netcode.dll

## Syntax

``` lang-csharp
public enum NetworkDelivery
```

## Fields

| Name                        | Description                                                             |
|-----------------------------|-------------------------------------------------------------------------|
| Reliable                    | Reliable message                                                        |
| ReliableFragmentedSequenced | A reliable message with guaranteed order with fragmentation support     |
| ReliableSequenced           | Reliable message where messages are guaranteed to be in the right order |
| Unreliable                  | Unreliable message                                                      |
| UnreliableSequenced         | Unreliable with sequencing                                              |
