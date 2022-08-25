---
id: tools-1-0-0-pre
title: Multiplayer Tools 1.0.0 and earlier
description: Release notes for Multiplayer Tools including new features, updates, bug fixes, known issues, and information to help you upgrade.
---

## [1.0.0] - 2022-06-27

### *Runtime Net Stats Monitor*
- Doc-comment fixes based on 1.0 release XML doc validation 

## [1.0.0-pre.8] - 2022-06-15

### *Runtime Net Stats Monitor*
- Clamping numerical values to acceptable limits for public APIs
- Improve generated counter labels
- Prevent an exception when there's only one sample
- Added spacing between divider graph and axis number alignment
- Reusing existing numerical labels when the value doesn't change or barely changed
- Fix incorrect values for gauges in counter display elements using SMA
- Ensure RNSM counters display 1 rather than 1,000 milli
- Use infinity rather than float.Min for counter config bounds
- Reduce vertices in graphs with large sample count

## [1.0.0-pre.7] - 2022-04-27

### Runtime Net Stats Monitor

This release adds the Runtime Net Stats Monitor (RNSM) to the Multiplayer Tools Package. This tool offers a configurable component for displaying various network stats in an on-screen display at runtime, including stats from the Netcode for GameObjects package, as well as custom, user-defined stats.

## [1.0.0-pre.6] - 2022-02-28

### Network Profiler
- Changed NetworkMessage to use the name of the message in the Type column (#133)

### Metrics
- Added throttling to event metric types (#142)
- Added a system to generate random data for tests (#141)
- Refactored underlying data structures to reduce redundancy (#146)
- Dramatically reduced runtime allocations caused by dispatching metrics to the profiler by updating the serialization implementation to use native buffers instead of BinaryFormatter
- Deprecated support for String when collecting metric payloads
- Added RTT to server metrics (#192)
- Added Packet count to metrics (#180)

### Misc
- Updated some internals exposed flags to enable some test improvements on NGO side

## [1.0.0-pre.2] - 2021-10-19

- Updated documentation files in preparation for publish

## [1.0.0-pre.1] - 2021-08-18

### Netcode Profiler

This release adds the Netcode Profiler to the Multiplayer Tools Package. This tool is used to inspect the network activity of **Netcode for GameObjects**.

#### Activity Section
- View detailed metrics about custom messages, scene transitions, and server logs
- View activity related to individual game objects, including network variable updates, rpcs, spawn and destroy events, and ownership changes

#### Messages Section
- View the raw messages that are being sent to the transport interface

#### Other Usability
- Connect to built players to inspect netcode activity remotely
- Filter results by name, type, number of bytes, and network direction
- Correlate network objects in the profiler with objects in the scene hierarchy
- View key metrics in graph form in the profiler charts