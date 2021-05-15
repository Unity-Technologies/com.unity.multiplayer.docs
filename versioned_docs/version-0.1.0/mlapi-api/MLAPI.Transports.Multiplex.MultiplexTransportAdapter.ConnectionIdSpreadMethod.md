---  
id: MLAPI.Transports.Multiplex.MultiplexTransportAdapter.ConnectionIdSpreadMethod  
title: MLAPI.Transports.Multiplex.MultiplexTransportAdapter.ConnectionIdSpreadMethod
---

<div class="markdown level0 summary">

The method to use to distribute the transport connectionIds in a fixed
size 64 bit integer.

</div>

<div class="markdown level0 conceptual">

</div>

##### **Namespace**: System.Dynamic.ExpandoObject

##### **Assembly**: MLAPI.dll

##### Syntax

    public enum ConnectionIdSpreadMethod

## Fields

Name

Description

MakeRoomFirstBits

Drops the last few bits (right side) by shifting the transport clientId
to the right and inserting the transportId in the first bits. Ensure
that ALL transports dont use the first bits in their produced clientId.

MakeRoomLastBits

Drops the first few bits (left side) by shifting the transport clientId
to the left and inserting the transportId in the first bits. Ensure that
ALL transports dont use the last bits in their produced clientId. For
incremental clientIds, this is the most space efficient assuming that
every transport get used an equal amount.

ReplaceFirstBits

Drops the first few bits (left side) and replaces them with the
transport index. Ensure that ALL transports dont use the first few bits
in the produced clientId.

ReplaceLastBits

Drops the last few bits (right side) and replaces them with the
transport index. Ensure that ALL transports dont use the last bits in
their produced clientId. This option is for advanced users and will not
work with the official MLAPI transports as they use the last bits.

Spread

Spreads the clientIds evenly among the transports.
