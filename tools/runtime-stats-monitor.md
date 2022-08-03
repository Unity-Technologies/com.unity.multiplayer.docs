---
id: RNSM
title: Runtime Network Stats Monitor
sidebar_label: Runtime Network Stats Monitor
---

The **Runtime Network Stats Monitor (RNSM)** is a configurable component to display various network stats in an on-screen display at runtime, including stats from the Netcode for GameObjects (Netcode) package and custom, user-defined stats.

## Prerequisites

To enable the Runtime Network Stats Monitor, [install the Multiplayer Tools package](install-tools.md). 

You should now see the Runtime Network Stats Monitor from the **Unity Hub** top menu bar under **Component** > **Netcode**, or when searching for it by name after pressing **Component** > **Add..**. 

:::note
You must have an object selected for these options to be available.
:::

## Adding the Runtime Network Stats Monitor to a Scene

To add the RNSM to your scene, you must add it as a component to an object:

1. Select the an object in your scene. <- SHOULD AN OBJECT BE MADE SPECIFICALLY FOR THE RNSM? LIKE BEST PRACTICE-WISE? EMPTY OBJECT OR A SPECIFIC TYPE
2. Add the RNSM commponent by either:
   1. Selecting **Add Component** in the **Inspector** tab, navigate to **Netcode** and select **RuntimeNetStatsMonitor**.
   OR
   2. From the top menu bar, go to **Component** > **Netcode** > **RuntimeNetStatsMonitor**.

## Configuring

You can configure the RNSM from the **Inspector** tab with its Display Elements. Each Display Element displays one or more stats that can be added, removed, or modified under the element's **Stats** field.

To configure the Display Elements:

Assets > Create > Multiplayer

### Using the panel settings

addressing screen real estate issues. Assets > Create > UI Kit

### Creating Configuration Presets using Scriptable Objects

Doing the thing to create the settings to be adjustable ^ Note that the default settings are not adjustable by default

## Styling the Runtime Network Stats Monitor

You can customize the styling of the RNSM by dragging and dropping a Unity Style Sheet (USS) onto the **Custom Style Sheet** field of the RNSM component from the **Inspector** tab.

For more information about Unity Style Sheets (USS), see the Unity Documentation on [Styling the UI with USS](https://docs.unity3d.com/2021.2/Documentation/Manual/UIE-USS.html).

You can use the default USS file for the RNSM to style your RNSM or use it as a starting point for custom styling. It can be found from the **Project** tab under **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Implementation** > **UI** > **Resources** > **UnityMpToolsRnsmDefaultStyleSheet.uss**

To create a new style sheet = Assets > Create > UI Kit

### USS Classes

A full list of USS class names that you can use to style the RNSM can be found from the **Project** tab under **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Configuration** > **UssClassNames.cs**.

## Using Custom Data in the Runtime Network Stats Monitor

Content - Ian is helping with a sample and such for this - See slack message for content to add

## Including/Excluding the Runtime Network Stats Monitor in Builds

To allow you to save space and other resources from builds, such as on mobile, the RNSM implementation can be included/excluded from a build independently from its interface (the RNSM component). 

:::note
By default, after adding the **Multiplayer Tools** package, the Runtime Network Stats Monitor is included in the editor, included in development builds, and is not included in release builds.
:::

### Excluding the RNSM from Development Builds

By default, the RNSM implementation is included in development builds. The RNSM can be excluded from development builds either by:

1. Navigating to the Unity Editor top bar menu > **Edit** > **Project Settings...** > **Multiplayer Tools** > **Net Stats Monitor**, then uncheck **Include in Develop Builds**.

OR

1. Navigating to the Unity Editor top bar menu > **Edit** > **Project Settings...** > **Player**.
2. Select the **Other Settings** dropdown.
3. Scroll to **Script Compilation** > **Scripting Define Symbols**.
4. Add `UNITY_MP_TOOLS_NET_STATS_MONITOR_DISABLED_IN_DEVELOP` in the empty field. If the field isn't empty, you can select the ![Add symbol](../static/img/add.png).
5. Click **Apply** for the script to compile.

### Including the RNSM in Release Builds

By default, the RNSM implementation is not included in release builds. The RNSM can be included in release builds either by:

1. Navigating to the Unity Editor top bar menu > **Edit** > **Project Settings...** > **Multiplayer Tools** > **Net Stats Monitor**, then check **Include in Release Builds**.

OR

1. Navigating to the Unity Editor top bar menu > **Edit** > **Project Settings...** > **Player**.
2. Select the **Other Settings** dropdown.
3. Scroll to **Script Compilation** > **Scripting Define Symbols**.
4. Add `UNITY_MP_TOOLS_NET_STATS_MONITOR_ENABLED_IN_RELEASE` in the empty field. If the field isn't empty, you can select the ![Add symbol](../static/img/add.png).
5. Click **Apply** for the script to compile.

### Including the RNSM in All Builds

You can forcibly enable the RNSM in all builds by:

1. Navigating to the Unity Editor top bar menu > **Edit** > **Project Settings...** > **Player**.
2. Select the **Other Settings** dropdown.
3. Scroll to **Script Compilation** > **Scripting Define Symbols**.
4. Add `UNITY_MP_TOOLS_NET_STATS_MONITOR_IMPLEMENTATION_ENABLED` in the empty field. If the field isn't empty, you can select the ![Add symbol](../static/img/add.png).
5. Click **Apply** for the script to compile.

:::important
This option takes precedence over the other options to exclude the RNSM from development builds.
:::