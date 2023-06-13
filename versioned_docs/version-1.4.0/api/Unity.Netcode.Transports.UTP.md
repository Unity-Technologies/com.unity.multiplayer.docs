---
id: Unity.Netcode.Transports.UTP
title: Unity.Netcode.Transports.UTP
date created: Tuesday, December 6th 2022, 1:36:00 pm
date modified: Wednesday, January 25th 2023, 5:38:29 pm
---

## Namespace Unity.Netcode.Transports.UTP

<div class="markdown level0 summary">

</div>

<div class="markdown level0 conceptual">

</div>

<div class="markdown level0 remarks">

</div>

## Classes

### Unity.Netcode.Transports.UTP.ErrorUtilities

<div class="section">

Helper utility class to convert error codes to human readable error messages.

</div>

### Unity.Netcode.Transports.UTP.SecretsLoaderHelper

<div class="section">

Component to add to a NetworkManager if you want the certificates to be

loaded from files. Mostly helpful to ease development and testing,

especially with self-signed certificates

Shipping code should make the calls to

* SetServerSecrets
* SetClientSecrets directly, instead of relying on this.

</div>

### Unity.Netcode.Transports.UTP.UnityTransport

<div class="section">

The Netcode for GameObjects NetworkTransport for UnityTransport. Note:

This is highly recommended to use over UNet.

</div>

## Structs

### Unity.Netcode.Transports.UTP.NetworkMetricsContext

<div class="section">

Caching structure to track network metrics related information.

</div>

### Unity.Netcode.Transports.UTP.UnityTransport.ConnectionAddressData

<div class="section">

Structure to store the address to connect to

</div>

### Unity.Netcode.Transports.UTP.UnityTransport.SimulatorParameters

<div class="section">

Parameters for the Network Simulator

</div>

## Interfaces

### Unity.Netcode.Transports.UTP.INetworkStreamDriverConstructor

<div class="section">

Provides an interface that overrides the ability to create your own

drivers and pipelines

</div>

## Enums

### Unity.Netcode.Transports.UTP.UnityTransport.ProtocolType

<div class="section">

Enum type stating the type of protocol

</div>
