---
id: netscenevis
title: Network Scene Visualization
---
<!-- README location: https://github.com/Unity-Technologies/com.unity.multiplayer.tools/blob/develop/NetVis/readme.org -->

Network Scene Visualization (NetSceneVis) is a tool included in the Multiplayer Tools package that allows users to visualize networking information (like bandwidth and ownership) on a per-object basis in the scene view using a number of visualizations, including mesh shading and a text overlay.

### Prerequisites
- git
- Unity 2023.2.0a11 or later
  - Unity 2023.2 is required for NetSceneVis overall
  - Unity 2023.2.0a11 is required for NetSceneVis mesh shading in particular, as ~rpfoundation/object-id-render-request~ landed in 2023.2.0a11
- A recent version of the Multiplayer Tools package develop branch

### Using NetSceneVis in an existing NGO project
In order to use NetSceneVis in an existing NGO project, you need to install a recent copy of the develop branch of the Multiplayer Tools package.

### Installing the Multiplayer Tools package from a git URL
Instructions for installing a package from a git URL can be found [[https://docs.unity3d.com/Manual/upm-ui-giturl.html][here]. The URL for the Multiplayer Tools package is https://github.com/Unity-Technologies/com.unity.multiplayer.tools.

### Installing the Multiplayer Tools package from a local git clone
Instructions for installing a package from a local folder can be found [[https://docs.unity3d.com/Manual/upm-ui-local.html][here]. A local clone of the Multiplayer Tools package can be created using the following git command:
#+BEGIN_SRC
git clone https://github.com/Unity-Technologies/com.unity.multiplayer.tools.git
#+END_SRC

### After Installing
After installing a recent copy of the develop branch of the Multiplayer Tools package, the Network Scene Visualization overlay should now be available in the scene view.

### Using NetSceneVis in the EcoSim Test Project
A test project (called EcoSim) containing a mock multiplayer game is available for testing NetSceneVis, and [[https://github.com/Unity-Technologies/Multiplayer-Tools-Sandbox/blob/main/TestProjects/EcoSim/readme.org][includes a readme file with setup instructions]].

The Multiplayer Tools Sandbox and the tools package can be quickly installed in a directory using the following commands:
#+BEGIN_SRC
git clone https://github.com/Unity-Technologies/Multiplayer-Tools-Sandbox.git
git clone https://github.com/Unity-Technologies/com.unity.multiplayer.tools.git
#+END_SRC

The EcoSim test project uses the MockNgoAdapter to generate mock network data based on the actions of some simulated animals without requiring user input, and includes a number of different projects for testing NetSceneVis using different rendering backends. After cloning the Multiplayer Tools Sandbox repository alongside the Multiplayer Tools package as described above, you can open any of the EcoSim projects to test NetSceneVis.

## Using NetSceneVis
With a recent version of the tools package develop branch installed in a project using either NGO or the MockNgoAdapter, the "Network Visualization" toolbar should now be available in the scene view. This toolbar includes options that allow the user to visualize networking information (like bandwidth and ownership) on a per-object in the scene view using a number of visualizations, including mesh shading and a text overlay.