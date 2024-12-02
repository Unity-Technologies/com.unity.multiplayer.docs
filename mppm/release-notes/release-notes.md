---
id: mppm-release-notes
title: Release notes
description: Release notes for Multiplayer Play Mode including new features, updates, bug fixes, and known issues.
---

## [1.3.2] - 2024-11-14

### Fixed
- Fixed clones so that they correctly deactivate when you stop a play mode scenario during the clone activation.
- Fixed the clone editor's layout configuration so that it displays correctly when you enable Playmode Tools.
- Fixed the compilation error "'UnityPlayer' does not contain a definition for 'Role'" when the Dedicated Server package version doesn't match.

### Added
- Avoid reconstructing virtual player windows through Play modes if their layouts in PlayMode and EditMode are the same. This helps retain anchoring in Windows.

## [1.3.1] - 2024-10-21

### Fixed

- Fixed an issue where the "Player [X] failed to sync" window appeared without a synchronization issue.
- The Virtual Player folder now refreshes when you update the package, engine, or engine changeset version.

### Added

- Added a help box to the Multiplayer window to stop package imports while the virtual player(s) are activating. The help box remains visible until all virtual player(s) are ready.
- Added Multiplayer Menu links to the **Scenario Configuration** and the **Scenarios** status in **Windows** > **Multiplayer**.

## [1.3.0] - 2024-09-26

### Changed

- Updated `com.unity.services.multiplayer` to release version 1.3.0.

### Fixed

- Increased the minimum Engine version to 6000.0.22f1 to fix a crash that happened when you use virtual players and a build profile.

## [1.3.0-exp.3] - 2024-09-20

### Changed

- Replaced the **Original Name** property in the **Remote Instances** > **Advance Configuration** section with the **Identifier** property. The **Identifier** string field produces a unique name for the Multiplay Build, Build Configuration, and Fleet. This name is in the form `CreatedFromTheUnityEditor-[identifier]-[username]`.

### Added

- Added stream logs to main editor option for additional editor instances.
- Fixed an issue where streaming logs from local instances stopped when domain reloads are enabled.
- Added a percentage progress to the Playmode Status Window for the preparing, deploying, and launching stages.

### Fixed

- Removed the compilation warning "This async method lacks 'await' operators and will run synchronously".
- Fixed an issues that disabled streaming logs from remote instances.
- Fixed an issue where code changes didn't consistently sync between the main editor and the clone when you use Rider.
- Fixed the asset out of sync error that happened when the clone didn't start in the correct build target.

## [1.3.0-exp.2] - 2024-07-03

### Fixed
- Fixed an issue to make the **Stream logs to main editor** property work in local instances.

## [1.3.0-exp.1] - 2024-06-24

### Added
- Added the Playmode Scenarios window that you can use to configure Editor, local and remote instances.

### Fixed
- No longer hit an exception when launching the standalone profiler.

## [1.2.0] - 2024-06-04

### Added
- Added tooltips to the preferences window

### Fixed
- Fixed an issue that hid Multiplayer roles when you reinstalled the Dedicated Server Package.
- Fixed the main view window so that when you make it smaller the UI is not affected.

## [1.1.0] - 2024-04-24

### Added
- Added a new layout option to each Multiplayer Play Mode clone in projects that include the Netcode For Entities package.
- Updated the **Close** button to display a warning dialog prompt that deactivates a Virtual Player.
- Added the mute setting to mute specific users.
- Added a setting that changes the Asset Database refresh timeout.
- Updated the focus shortcut behavior to focus on other individual Virtual Player windows from inside an individual Player.
- Updated the message that appears when a Symlink failure (on FAT32) happens because it isn't supported.

### Fixed
- The local clone cache clears automatically when you update the Multiplayer Play Mode package.
- Fixed a crash caused by devices set to certain regions.
- Changed the default multiplayer role of Player clones to Client and Server.
- Added a minimum width for the main view of the Multiplayer Play Mode window.
- The escape key no longer closes Virtual Player windows on Windows devices.
- Fixed issues with heartbeat timeout.
- Removed the forward slash **/** character from tags because it's for drop-down behavior only.

## [1.0.0] - 2024-03-12

### Added

- A Multiplayer development workflow aiming to offer a more efficient development cycle for multiplayer games. The tool enables opening multiple Unity Editor instances simultaneously on the same development device, using the same source assets on disk.

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

- Can now focus Player with hotkeys (CTRL+F9-F12).
- Just show the layout view toggles as disabled during playmode.
- Automatically focus Players after activating.

## [0.5.0] - 2023-09-27

### Fixed

- Fix broken links in documentation.

### Features

- Moved PlayerTags to the project settings window.
- Players can now have multiple PlayerTags.
- Updated `CurrentPlayer.ReadOnlyTag` to be `CurrentPlayer.ReadOnlyTags`.

## [0.4.0] - 2023-08-26

### Fixed

- Fixed an issue where a Player could still show up as active after it had exited.
- Fixed an issue where you could have multiple add tag views.
- Fixed an issue where `CurrentPlayer.ReadOnlyTag` would not return the correct value when domain reload on play mode is disabled.
- Fixed an issue where clones were crashing when scrolling mouse over menu top bar

### Features

- Debug workflows now has dynamic layouts that persist between runs.
- Players that are unresponsive will now result in a prompt appearing in the main Editor Player asking if they should be restarted. (Only on Windows for now.)
- Now support for content selection in your Players (Requires dedicated server package to be installed).

## [0.3.0] - 2023-07-26

### Fixed

- Fixed PlayerTags starting and ending with whitespace.
- Fixed handling of relative paths in the package.json of a Player.

### Features

- Can now have your Players reboot if they fail to import or stop unexpectedly (e.g. crash). A prompt will appear asking what action to take.
- Debugging workflows is now enabled (giving users more access to the editor in Players). It can be accessed by using the Layout Dropdown in the top left of a Player to enable more views (Scene, Game, etc).
- Can disable Multiplayer Play Mode in settings.
- Updated Tag to be ReadOnlyTag to better communicate how tags as a feature works.

## [0.2.0] - 2023-06-26

### Fixed

* Fixed null exception when loading into a new scene with unsaved changes.
* Fixed exception triggered on Players when changing scene in play mode.
* Updated text to "Show in Finder" on MacOS for revealing Players location on disk.
* Fixed issues with the Asset Database syncing.

### Features

* Display a message to the console log when opening Clones that don't have the required symlinked folders.
* Trigger play mode for clones before main Editor Player starts entering play mode.
* Clone Players will have the same behaviour as the main Editor Player regarding the "Stop playing and compile" option.

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
* Virtual Players can remain in Play Mode after the main Editor Player has exited in certain circumstances, such as if script changes are made during Play Mode and the “Stop Playing and Recompile” option is active.
* Entering Play Mode with multiple scenes open isn't currently supported
* Virtual Players lose some Game view settings, such as Aspect Ratio, when exiting and entering Play Mode
* Opening a Virtual Player with unresolved script updater issues will cause an API Update prompt to appear
* Scripts won't be reloaded correctly in Virtual Players with “Enter Play Mode” settings set with “Reload Domain” disabled
* In some cases, an error may appear in Virtual Player windows indicating that assets were imported when they weren't supposed to be
* Non-Prefab assets like Scriptable Objects aren't synced to Virtual Players unless you save your scene or invoke the Save Project command
* Authentication with UGS won't work without manually overriding configuration values at runtime
