---
id: mppm-release-notes
title: Multiplayer Play Mode Release Notes
description: Release notes for Multiplayer Play Mode including new features, updates, bug fixes, and known issues.
---

## [1.0.0-pre.2] - 2023-12-21

### Fixed

- Better handling of custom implicit packages on the clones.

## [1.0.0-pre.1] - 2023-11-17

### Fixed

- Some compatibility fixes with Dedicated Server.

## [0.6.0] - 2023-11-08

### Fixed

- Some fixes for Clone heartbeats.
- More fixes for persistent window layouts.

### Features

- Can now focus player with hotkeys (CTRL+F9-F12).
- Just show the layout view toggles as disabled during playmode.
- Automatically focus players after activating.

## [0.5.0] - 2023-09-27

### Fixed

- Fix broken links in documentation.

### Features

- Moved PlayerTags to the project settings window.
- Players can now have multiple PlayerTags.
- Updated `CurrentPlayer.ReadOnlyTag` to be `CurrentPlayer.ReadOnlyTags`.

## [0.4.0] - 2023-08-26

### Fixed

- Fixed an issue where a player could still show up as active after it had exited.
- Fixed an issue where you could have multiple add tag views.
- Fixed an issue where `CurrentPlayer.ReadOnlyTag` would not return the correct value when domain reload on play mode is disabled.
- Fixed an issue where clones were crashing when scrolling mouse over menu top bar

### Features

- Debug workflows now has dynamic layouts that persist between runs.
- Players that are unresponsive will now result in a prompt appearing in the main editor asking if they should be restarted. (Only on Windows for now.)
- Now support for content selection in your players (Requires dedicated server package to be installed).

## [0.3.0] - 2023-07-26

### Fixed

- Fixed PlayerTags starting and ending with whitespace.
- Fixed handling of relative paths in the package.json of a player.

### Features

- Can now have your players reboot if they fail to import or stop unexpectedly (e.g. crash). A prompt will appear asking what action to take.
- Debugging workflows is now enabled (giving users more access to the editor in players). It can be accessed by using the Layout Dropdown in the top left of a player to enable more views (Scene, Game, etc).
- Can disable MPPM in settings.
- Updated Tag to be ReadOnlyTag to better communicate how tags as a feature works.

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
- Fixed CurrentPlayer.ReadOnlyTags() returning "Untagged" instead of an empty string if a tag is not assigned.
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
