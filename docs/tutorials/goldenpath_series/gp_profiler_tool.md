This Golden Path is a standalone experience and does not require completion of the Golden Path Foundation module.

In this guide, we cover how to use profiling data to optimize performance and balance enhancements in your multiplayer game to determine the most efficient build strategy. For multiplayer games, the three primary resources you should monitor and control are bandwidth consumption, CPU, and packet delivery latency (not network latency).

For more information about CPU usage profiling, see the [Unity manual](https://docs.unity3d.com/Manual/ProfilerCPU.html).

## Prerequisites

Before working with the profiler tool, take time to familiarize yourself with the Netcode for GameObjects (Netcode) [profiling overview](../../basics/profiling.md). You may also want to review how to [profile your application](https://docs.unity3d.com/Manual/profiler-profiling-applications.html) from the Unity manual.

For this Golden Path, we use the Boss Room sample to provide enough data to examine and analyze. If you don't already have Boss Room installed, follow the steps in the [Getting Started](../learn/../../learn/getting-started-boss-room.md).

Be sure you are using Unity 2021.1+ to use the profiler with Netcode data.

## Enabling profiling support for Netcode

Netcode extends the Unity profiler features to include Netcode Profiler Messages, Netcode Profiler Operations, and Netcode Profiler RPCs. To enable this support, install the `com.unity.multiplayer.tools` package from the Unity Package Manager on your installation of the Boss Room project.

<!-- Confirm these steps for how it will work at release since package is presently internal

1. From the menu bar of your Unity editor, go to **Window** > **Package Manager**.
2. In the Package Manager window, click on the plus sign (+) near the top to select **Add package by name...**.
3. Enter {PACKAGE NAME} in the popup window and click **Add**.
4. You may need to manually resolve your packages by either:
   1. In the Package Manager, click the dropdown arrow then **Manual resolve** in the bottom bar of the window.
   2. Closing out of the Unity project and reopening.

-->

## Using the profiler tool

After enabling profiler support for Netcode, you can find the profiler tool in the menu bar of your Unity editor > **Window** > **Analysis** > **Profiler**. The **Netcode Profiler Messages**, **Netcode Profiler Operation**, and **Netcode Profiler RPC** modules are visible in the side panel, if they are not, you can choose to [show/hide profiler modules](#hide-unnecessary-content) from the dropdown.

For the purpose of this tutorial, we are [profiling inside the Unity editor](#profiling-inside-the-unity-editor) so we can quickly see changes in performance. However, you may choose to [profile a development build of your game](#profiling-a-development-build-of-your-game) for more accurate results.

1. While in your Boss Room project, {we going to run the profiler tool, examine the data, note possible changes/adjustments and what they do}

## Best practices

The profiler tool is capable of provider a lot of information and can be intimidating to determine the best strategy for optimization. Use the following best practices to make your optimization process easier.

### Module elements and filtering results

For descriptions of the messages, operations, and RPCs the Netcode profiler counts and filter rules you can use to narrow search results, see the [Profiling](../../basics/profiling.md) overview.

### Hide unnecessary content

You can hide profiler data to focus only on information you are interested in.

1. In the Profiler window, select the dropdown arrow for **Profiler Modules** and check only the modules you would like to focus on. For example, the **Netcode Profiler Messages**, **Netcode Profiler Operation**, and **Netcode Profiler RPC** modules.

### Profiling a development build of your game

For the most accurate results, you want to profile your game as a development build on the target hardware whenever possible. To profile a development build of your game on Windows, OS X, Linux, or WebGL, see [Profile your application on a target platform](https://docs.unity3d.com/Manual/profiler-profiling-applications.html) for more information.

<!-- Link to Unity docs about this. Steps written here for my use while writing.
To profile a development build of your game on Windows, OS X, Linux, and WebGL:

1. Open project. Open Profiler. Ensure Record is selected.
2. Open the Build Settings window by File > Build Settings
3. Ensure Development Build is checked
4. Ensure that the Autoconnect Profiler is checked
5. Click Build and Run.
--->
For iOS and Android, see [Profiling on mobile devices](https://docs.unity3d.com/Manual/profiler-profiling-applications.html).

### Profiling inside the Unity editor

When it is more useful to have a broader sense of performance quickly than high accuracy, you want to profile inside the Unity editor. For example, you may try enabling and disabling multiple GameObjects at runtime to determine the culprit for a performance problem.

To profile inside the Unity editor, see [Profiling in the Unity Editor](https://docs.unity3d.com/Manual/profiler-profiling-applications.html) for more information.
<!-- Link to Unity docs about this. Steps written here for my use while writing.
To profile inside the Unity editor:

1. Open your Unity project.
2. Open Profiler window by **Window** > Analysis > Profiler
3. In the tools section at top of Profiler window, ensure that Record is selected.
4. Enter Play Mode. Data will gather and display in real-time as you interact with the game
--->

### Iterate your optimization

Every time you make  new feature or refactor an old one, profile your game. This allows you to compare each change with your performance to adjust for peak efficiency.

There are no definite rules with performance optimization. Profile your game regularly, investigate the nature of your optimization problems, experiment with different solutions, and measure the results of your changes.