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

1. Select an object in your scene.
2. Add the RNSM commponent by either:
   1. Selecting **Add Component** in the **Inspector** tab, you can start typing `RuntimeNetStatsMonitor` in the search field to select the **RuntimeNetStatsMonitor** component.

   OR

   2. Selecting **Add Component** in the **Inspector** tab, navigate to **Netcode** and select **RuntimeNetStatsMonitor**.

   OR
   
   3. From the top menu bar, go to **Component** > **Netcode** > **RuntimeNetStatsMonitor**.

:::bestpractice Best Practice
You can add the Runtime Network Stats Monitor component to any object in your scene and will work. However, you may want to consider creating an empty object specifically for the RNSM.
:::

## Configuring

You can configure the RNSM to your liking with its [Display Elements](#display-elements), [Panel Settings](#panel-settings), and [Styling](#styling-the-runtime-network-stats-monitor). Each of these settings can be found from the **Inspector** tab of the RNSM component. The RNSM package comes with default settings for each option that can be used "as is" or as guidance for creating your own.

:::note
The default setting for the Display Elements, Panel Settings, and Styling are greyed out and not adjustable by default. To make modifications or build your own, you will need to create your own configuration presets. Instructions for each customization are below.
:::

### Display Elements

Each Display Element displays one or more stats that can be added, removed, or modified under the element's **Stats** field.

#### To use the default Display Elements:

1. It may already be the default in the **Configuration** field of the **Inspector** tab of the RNSM component.

OR

1. Open the RNSM component in the **Inspector** tab.
2. Click the circle to the right of the **Configuration** field.
3. Click the eye icon in the popup menu.
4. Search for `default` and select the **DefaultNetStatsMonitorConfiguration**.

OR

1. From the **Project** tab, go to **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Assets** > **Configurations**. The default configuration for the RNSM is in this folder.
2. Select the `GameObject` with the RNSM component so that it appears in the **Inspector** tab.
3. Drag the default configuration asset from the **Project** tab to the **Configuration** field under the **RuntimeNetStatsMonitor** component of your `GameObject`.

#### To configure your own Display Elements presets:

1. Select the **Assets** folder under the **Project** tab.
2. Right-click in the **Assets** folder, then navigate to **Create** > **Multiplayer** and click on **NetStatsMonitorConfiguration**.
3. The configuration script appears under the **Assets** folder and also opens in the **Inspector** tab.
4. From the **Inspector** tab, you can use the + or - symbols to add each Display Element you want to include in this preset. Each field is configurable from here.
5. Once configured, you can add your Display Elements configuration preset to your RNSM `GameObject` by selecting the the RNSM `GameObject` to appear in the **Inspector** tab.
6. Your **Assets** folder should still be visible in the **Project** tab, so select your newly created configuration preset to drag and drop over the **Configuration** field under the **RuntimeNetStatsMonitor** component in the **Inspector** tab.
7. **Save** your scene.

:::tip
We recommend using the default configuration as a guide to create your own for the RNSM. It can be found from the **Project** tab, go to **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Assets** > **Configurations**.
:::

### Panel Settings

While working in the Unity Editor with the Runtime Network Stats Monitor, you may find your screen real estate to be difficult to work with. To help remedy these situations, you can use the default panel settings or create your own to set up your workspace exactly as you want it.

#### To use the default Panel Settings:

1. From the **Project** tab, go to **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Implementation** > **UI** > **Resources**. The default panel settings configuration for the RNSM is in this folder: `UnityMpToolsRnsmDefaultPanelSettings.asset`.
2. Select the `GameObject` with the RNSM component so that it appears in the **Inspector** tab.
3. Drag the default panel setting asset from the **Project** tab to the **Panel Settings Override** field under the **RuntimeNetStatsMonitor** component of your `GameObject`.

:::note
You can use the default Panel Settings for your RNSM or use it as a starting point for custom settings. Leaving the **Panel Settings Override** field blank enables the default settings.
:::

#### To configure your own Panel Settings presets:

1. Select the **Assets** folder under the **Project** tab.
2. Right-click in the **Assets** folder, then navigate to **Create** > **UI Toolkit** and click on **Panel Settings Asset**.
3. The configuration script appears under the **Assets** folder and also opens in the **Inspector** tab.
4. From the **Inspector** tab, you can adjust each of the fields to fit your screen needs.
5. Once configured, you can add your Panel Settings preset to your RNSM `GameObject` by selecting the the RNSM `GameObject` to appear in the **Inspector** tab.
6. Your **Assets** folder should still be visible in the **Project** tab, so select your newly created Panel Settings to drag and drop over the **Panel Settings Override** field under the **RuntimeNetStatsMonitor** component in the **Inspector** tab.
7. **Save** your scene.

### Styling the Runtime Network Stats Monitor

You can customize the styling of the RNSM by dragging and dropping a Unity Style Sheet (USS) onto the **Custom Style Sheet** field of the RNSM component from the **Inspector** tab.

For more information about Unity Style Sheets (USS), see the Unity Documentation on [Styling the UI with USS](https://docs.unity3d.com/2021.2/Documentation/Manual/UIE-USS.html).

:::note
You can use the default USS file for the RNSM to style your RNSM or use it as a starting point for custom styling. Leaving the **Custom Style Sheet** field blank enables the default style sheet.
:::

#### To create a new style sheet for the RNSM:

1. Select the **Assets** folder under the **Project** tab.
2. Right-click in the **Assets** folder, then navigate to **Create** > **UI Toolkit** and click on **Style Sheet**.
3. The new USS file appears under the **Assets** folder and also opens in the **Inspector** tab.
4. From the **Inspector** tab, you can use the + or - symbols to adjust each style element you want to include in this preset. Each field is configurable from here. You may find it easier to create or modify this file as a text file rather than with the **Inspector** ([Unity Style Sheets](https://docs.unity3d.com/2021.2/Documentation/Manual/UIE-USS.html) function similarly to Cascading Style Sheets).
5. Once configured, you can add your USS configuration preset to your RNSM `GameObject` by selecting the the RNSM `GameObject` to appear in the **Inspector** tab.
6. Your **Assets** folder should still be visible in the **Project** tab, so select your newly created style sheet to drag and drop over the **Custom Style Sheet** field under the **RuntimeNetStatsMonitor** component in the **Inspector** tab.
7. **Save** your scene.

:::tip
We recommend using the default style sheet as a guide to create your own style sheet for the RNSM. It can be found from the **Project** tab under **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Implementation** > **UI** > **Resources** > **UnityMpToolsRnsmDefaultStyleSheet.uss**.
:::

#### USS Classes

A full list of USS class names that you can use to style the RNSM can be found from the **Project** tab under **Packages** > **Multiplayer Tools** > **NetStatsMonitor** > **Configuration** > **UssClassNames.cs**.

## Using Custom Data in the Runtime Network Stats Monitor

To add custom data to the RNSM:

1. Create your custom data as a `.cs` file (see example below) either in an editor of your choice to import into the **Assets** folder of the **Projects** tab. Or right-click in your **Assets** folder of the **Projects** tab, select **Create** > **C# Script**. The new `.cs` file opens in the **Inspector** tab that you can use the **Open** button to edit and save.
2. Once your custom data `.cs` file is ready, you can drag the file from your **Assets** folder to an object in your scene as a new component.

:::best practice
Be sure your file name and class name match for your `.cs` file or it will not work.
:::

Below is an example of custom data you can use with the RNSM. You can use this example as a guide to create your own custom data to explore with RNSM. Be sure to name this file as `CustomStats` to match the class name.

```csharp
using Unity.Multiplayer.Tools.NetStats;
using Unity.Multiplayer.Tools.NetStatsMonitor;
using UnityEngine;

// User-defined metrics can be defined using the MetricTypeEnum attribute
[MetricTypeEnum(DisplayName = "CustomMetric")]
enum CustomMetric
{
    // Metadata for each user-defined metric can be defined using the MetricMetadata Attribute

    [MetricMetadata(Units = Units.Hertz, MetricKind = MetricKind.Gauge)]
    Framerate,

    [MetricMetadata(Units = Units.None, MetricKind = MetricKind.Gauge)]
    TriangleCount,

    [MetricMetadata(Units = Units.None, MetricKind = MetricKind.Gauge, DisplayAsPercentage = true)]
    CpuUsage,
}

public class CustomStats : MonoBehaviour
{
    RuntimeNetStatsMonitor m_NetStatsMonitor;

    void Start()
    {
        m_NetStatsMonitor = FindObjectOfType<RuntimeNetStatsMonitor>();
    }

    void Update()
    {
        // Once you have access to an instance of the RuntimeNetStatsMonitor
        // you can provide custom data to it using AddCustomValue,
        // using an enum with the MetricTypeEnum attribute.

        m_NetStatsMonitor.AddCustomValue(
            MetricId.Create(CustomMetric.Framerate),
            Random.Range(40, 60f));

        m_NetStatsMonitor.AddCustomValue(
            MetricId.Create(CustomMetric.TriangleCount),
            Random.Range(10000, 100000));

        m_NetStatsMonitor.AddCustomValue(
            MetricId.Create(CustomMetric.CpuUsage),
            Random.Range(0.05f, 0.4f));
    }
}
```

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