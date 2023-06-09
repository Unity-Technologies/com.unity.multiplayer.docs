---
id: mppm-release-notes
title: Multiplayer Play Mode
description: Release notes for Multiplayer Play Mode including new features, updates, bug fixes, and known issues.
---

## [0.1.1] - 2023-01-26

* Reduced GC allocations in the messaging system loop.
* Added support for additive scenes.
* Fixed `CurrentPlayer.Tag` returning "Untagged" instead of an empty string if a tag isn't assigned.
* Fixed bug where pressing Return or Enter would not submit a created tag to the UI.
* Fixed missing XMLDoc for CurrentPlayer API.
* Fixed broken links in the package documentation.

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