---
id: tools-2-0-0
title: Multiplayer Tools 2.0.0+
description: Release notes for Multiplayer Tools including new features, updates, bug fixes, known issues, and information to help you upgrade.
---

## [2.1.0] - 2023-11-21

### General

- Increased minimum version to 2023.3+

### Network Simulator

- Fixed an issue with execution order depended initialization of NetworkAdapters.

### Network Scene Visualization

- Improved usability when pausing the editor.

## [2.0.0-pre.5] - 2023-09-19

### General

- *New*: Find all the multiplayer tools in a central place in the multiplayer tools window.

### Network Profiler

- Fixed an issue causing inconsistent foldout behavior.
- Fixed a bug where switching frames would reset the sorting filter.
- Improved UI for the Network Profiler.

### Runtime Net Stats Monitor

- Fix an index out of range exception that could occur when adding a new RNSM graph at runtime.
- Renamed the Component in the "Add Component" menu from "RuntimeNetStatsMonitor" to "Runtime Network Stats Monitor".

### Network Simulator

- Added presets for common home broadband connections and situations.

### Network Scene Visualization

- Text Overlays now also work in 2D scenes with 2D colliders.
- Removed slight delay between bandwidth text and color change.
- Made bandwidth update instantly after switching back from Ownership mode

## [2.0.0-pre.3] - 2023-05-23

### General

* Remove unintentionally public classes (such as test classes), most of which were already deprecated.

### Network Scene Visualization

* Fix to prevent NGO from throwing a NotServerException when visualizing ownership on a client that is not connected as the server or host.

## [2.0.0-pre.2] - 2023-05-02

### General

* Dropped support for Unity 2020.3; the next supported version is Unity 2021.3
* Fixed `Failed to load type initialization for assembly Unity.Multiplayer.Tools.MetricTypes` runtime exception when building using Managed Stripping level set to high.

### Network Scene Visualization

This release adds [Network Scene Visualization](../../tools/network-scene-vis.md) to the Multiplayer Tools Package. This tool allows users to visualize networking information (like bandwidth and ownership) on a per-object basis in the scene view using a number of visualizations, including mesh shading and a text overlay.

### Runtime Net Stats Monitor

* Fixed an issue that prevented using the `RuntimeNetStatsMonitor.AddCustomValue` API for stats that are only sampled per second.
* Switched to a new color-blind friendly color-palette for default variable colors in graphs, which will provide increased contrast and more default values. This new color palette is the same one used in the new Network Scene Visualization tool.
* Reduced the maximum sample count in Graphs and Simple Moving Average counters from 4096 to 512. Sample counts higher than 512 are no longer needed since per-second sampling was introduced in 1.1.0.
* Deprecated public methods that could be used to control the conditional compilation of the RNSM. Conditional compilation of the RNSM will be removed in a future major release.
