---
id: mppm-experimental
title: Multiplayer Play Mode Release Notes
description: Release notes for Multiplayer Play Mode including new features, updates, bug fixes, and known issues.
---

## [0.2.0] - 2023-06-26

### Fixed

* Fixed null exception when loading into a new scene with unsaved changes.
* Fixed exception triggered on players when changing scene in play mode.
* Updated text to "Show in Finder" on MacOS for revealing Players location on disk.
* Fixed issues with the Asset Database syncing.

### Features

* Display a message to the console log when opening Clones that don't have the required symlinked folders.
* Trigger play mode for clones before main editor starts entering play mode.
* Clone players will have the same behaviour as the main editor regarding the "Stop playing and compile" option.
 
## [0.1.1] - 2023-01-26

### Fixed

- Reduced GC allocations in the messaging system loop.
- Fixed CurrentPlayer.Tag returning "Untagged" instead of an empty string if a tag is not assigned.
- Fixed bug where pressing Return or Enter would not submit a created tag to the UI.
- Fixed missing XMLDoc for CurrentPlayer API.
- Fixed broken links in the package documentation.

### Features

* Added support for additive scenes.

## [0.1.0] - 2022-11-15

This release adds the Multiplayer Play Mode, which is a multiplayer development workflow aiming to offer a more efficient and quick development cycle of multiplayer games. The tool enables opening multiple Unity Editor instances simultaneously on the same development device, using the same source assets on disk.

### Known issues

* Player windows can't be reopened if they're closed during Play Mode
* Virtual Players can remain in Play Mode after the Main Editor has exited in certain circumstances, such as if script changes are made during Play Mode and the “Stop Playing and Recompile” option is active.
* Entering Play Mode with multiple scenes open isn't currently supported
* Virtual Players lose some Game view settings, such as Aspect Ratio, when exiting and entering Play Mode
* Opening a Virtual Player with unresolved script updater issues will cause an API Update prompt to appear
* Scripts won't be reloaded correctly in Virtual Players with “Enter Play Mode” settings set with “Reload Domain” disabled
* In some cases, an error may appear in Virtual Player windows indicating that assets were imported when they weren't supposed to be
* Non-Prefab assets like Scriptable Objects aren't synced to Virtual Players unless you save your scene or invoke the Save Project command
* Authentication with UGS won't work without manually overriding configuration values at runtime