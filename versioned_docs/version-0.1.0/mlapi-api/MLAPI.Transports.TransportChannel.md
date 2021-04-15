---  
id: MLAPI.Transports.TransportChannel  
title: MLAPI.Transports.TransportChannel  
---

<div class="markdown level0 summary">

A transport channel used by the MLAPI

</div>

<div class="markdown level0 conceptual">

</div>

<div class="inheritedMembers">

##### Inherited Members

<div>

ValueType.Equals(Object)

</div>

<div>

ValueType.GetHashCode()

</div>

<div>

ValueType.ToString()

</div>

<div>

Object.Equals(Object, Object)

</div>

<div>

Object.GetType()

</div>

<div>

Object.ReferenceEquals(Object, Object)

</div>

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    [Serializable]
    public struct TransportChannel

## Constructors 

### TransportChannel(NetworkChannel, NetworkDelivery)

<div class="markdown level1 summary">

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public TransportChannel(NetworkChannel channel, NetworkDelivery delivery)

#### Parameters

| Type            | Name     | Description |
|-----------------|----------|-------------|
| NetworkChannel  | channel  |             |
| NetworkDelivery | delivery |             |

## Fields

### Channel

<div class="markdown level1 summary">

Channel identifier

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkChannel Channel

#### Field Value

| Type           | Description |
|----------------|-------------|
| NetworkChannel |             |

### Delivery

<div class="markdown level1 summary">

Delivery type

</div>

<div class="markdown level1 conceptual">

</div>

#### Declaration

    public NetworkDelivery Delivery

#### Field Value

| Type            | Description |
|-----------------|-------------|
| NetworkDelivery |             |
