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

1. Select the an object in your scene. <- SHOULD AN OBJECT BE MADE SPECIFICALLY FOR THE RNSM? LIKE BEST PRACTICE-WISE?
2. Add the RNSM commponent by either:
   1. Selecting **Add Component** in the **Inspector** tab, navigate to **Netcode** and select **RuntimeNetStatsMonitor**.
   OR
   2. From the top menu bar, go to **Component** > **Netcode** > **RuntimeNetStatsMonitor**.

## Configuring

You can configure the RNSM from the **Inspector** tab with its Display Elements. Each Display Element displays one or more stats that can be added, removed, or modified under the element's **Stats** field.

To configure the Display Elements:

1. From the **Project** tab, navigate to **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Assets** > **Configurations** > **Default Net Stats Monitor Configuration**.
2. <!-- Everything is greyed out so will need to play around more. -->

### Using the panel settings

addressing screen real estate issues <!-- Greyed out here as well -->

### Creating Configuration Presets using Scriptable Objects

## Styling the Runtime Network Stats Monitor

You can customize the styling of the RNSM by dragging and dropping a Unity Style Sheet (USS) onto the **Custom Style Sheet** field of the RNSM component from the **Inspector** tab.

The styling of the RNSM can be customized by dragging and dropping a USS stylesheet into the “Custom Style Sheet” field of the RNSM component. More information about USS is available at the following link: https://docs.unity3d.com/2021.2/Documentation/Manual/UIE-USS.html.

The USS file containing the default styling for the RNSM is Implementation/UI/Resources/rnsmStyleSheet.uss, and can be used either as an example of how to style the RNSM or copied and used as a jumping-of-point for custom styling.

### USS Classes

A full list of USS class names that can be used to style the RNSM can be found in Configuration/UssClassNames.cs.

## Using Custom Data in the Runtime Network Stats Monitor

## Including/Excluding the Runtime Network Stats Monitor in Builds

When using the tools package, the implementation of the Runtime Net Stats Monitor (RNSM) can be included/excluded from a build independently from its interface (the RuntimeNetStatsMonitor component), to enable developers to save space and other resources in cases where this is important, such as on mobile.

The RNSM implementation is always included in the editor, is included by default in development builds, and is not included by default in release builds.

### Excluding the RNSM from Development Builds

The RNSM implementation is included in development builds by default. The RNSM can be excluded from development builds either by:

Unchecking the “Include in Develop Builds” toggle under Project Settings > Multiplayer Tools > Net Stats Monitor.
Manually defining the symbol UNITY_MP_TOOLS_NET_STATS_MONITOR_DISABLED_IN_DEVELOP under Project Settings > Player > Other Settings > Scripting Define Symbols.

### Including the RNSM in Release Builds

The RNSM implementation is not included in release builds by default. The RNSM can be included in release builds either by:

Checking the “Include in Release Builds” toggle under Project Settings > Multiplayer Tools > Net Stats Monitor.
Manually defining the symbol UNITY_MP_TOOLS_NET_STATS_MONITOR_ENABLED_IN_RELEASE under Project Settings > Player > Other Settings > Scripting Define Symbols.

### Including the RNSM in All Builds

In addition to the settings above that allow the RNSM to be included/excluded in development and release builds independently, the RNSM can be forcibly enabled in all builds by defining the symbol UNITY_MP_TOOLS_NET_STATS_MONITOR_IMPLEMENTATION_ENABLED under Project Settings > Player > Other Settings > Scripting Define Symbols. This option takes precedence over the options mentioned above to exclude the RNSM from development builds.