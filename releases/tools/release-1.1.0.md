---
id: tools-1-1-0
title: Multiplayer Tools 1.1.0
description: Release notes for Multiplayer Tools including new features, updates, bug fixes, known issues, and information to help you upgrade.
---

## [1.1.0] - 2022-11-07

### Metrics

- Improve the warning message for throttling, and increase the threshold for throttling a metric from 100 to 1,000 recorded events per frame

### Misc

- Fixed compilation warning related to unsupported build targets

### Network Simulator

This release adds the Network Simulator to the Multiplayer Tools Package.
This tool offers a configurable component to simulate adverse network condition.
Packet delay, jitter, packet loss and loss interval are all parameters that can be configured to simulate different kind of networks.
A set of built-in network scenarios are provided to simulate more complex scenarios. User-defined scenarios are also supported.

For more information, see the [Network Simulator documentation](../../tools/network-simulator.md).

### Runtime Net Stats Monitor

- You can now configure graphs and Simple Moving Average counters to be sampled per-second rather than per-frame.
- Fixed an issue where RNSM line graphs can retain incorrect maximum values in some cases