---
id: local_iteration_testing_locally
title: Local Iteration - Testing multiplayer games locally
description: Guide covering the available workflows for testing multiplayer games locally.
---

Testing a multiplayer game presents unique challenges to developers. 
Currently Unity does not have a first-party streamlined solution to the problem of local iteration while developing a multiplayer game. Developers have to either repeatedly create player builds, or they have to use a symbolic link solution which comes with a set of drawbacks and is not officially supported by Unity.

In lieu of a first-party solution we document the practices that can be used today, along with call-outs for specific risks and things to watch out for.

Our goal here is to document the approaches for managing multiplayer development/testing on a local machine that should be "safe enough", meaning that the project integrity is maintained regardless of the workflow and work progress is not lost.

## Player Builds

First we need to build an executable. The default way of doing that is via  `File->Build Settings` in the menu bar, and then pressing `Build` button.

Once the build has completed you can launch several instances of the built executable in order to both host and join a game.

It is also possible to run the builds along with an editor that produced said build, which could be useful during iterations.

> Mac users: to run multiple instances of the same app, you need to use the command line.
> Run `open -n YourAppName.app`

This approach, though functional, is somewhat inconvenient and slow - thus we list another option - ParrelSync.

## ParrelSync
![parrelsync-bossroom-demo](/static/img/parrelsync-bossroom-demo.gif)

[ParrelSync](https://github.com/VeriorPies/ParrelSync) is an open-source Unity editor extension that allows users to **test multiplayer gameplay without building the project** by having another Unity editor window opened and mirror the changes from the original project. 

ParrelSync works by making a copy of the original project folder and creating symbolic links to the `Asset` and `Project Settings` folders back from the original project.

We use ParrelSync for local iteration in [BossRoom sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/).

### Installation
1.  Backup your project folder or use a version control system such as [Git](https://git-scm.com/), [SVN](https://subversion.apache.org/), [Plastic](https://www.plasticscm.com/) or any other.
2.  Download .unitypackage from the [latest release](https://github.com/VeriorPies/ParrelSync/releases) and import it to your project.
3.  ParrelSync should appear in the menu item bar after it has imported

### Usage
 - Open the `ParrelSync->Preferences` menu in the menu bar to open the preferences window
 - Verify that your settings are set to the following: ![parrelsync-preferences](/static/img/parrelsync-preferences.png)
:::important

By default ParrelSync prevents asset serialization in all clone instances and changes can only be made from the original project editor. This is a **very important setting** that prevents issues with multiple editors accessing the same `Library` folder (which is not supported and breaks basic assumptions in Unity design).

:::

 - Open the `ParrelSync->Clones Manager` from which you can launch, create and remove clone editors.
	 - Advanced usage is to utilize ParrelSync's capability of passing [Arguments](https://github.com/VeriorPies/ParrelSync/wiki/Argument) to clones, thus allowing to run custom logic on a per-clone basis.

### Known issues and workarounds
 - An important nuance is that ParrelSync does not sync changes made to packages. `Packages` folder is synced on clone opening, so if you made package changes - you should close and re-open your clones.
 - If you encounter an error that mentions `soft sync` - that generally means that prefabs or scenes are not in sync between editors. You should save the project in the main editor via `File->Save Project` and refresh the projects in the clone editors by pressing `Ctrl + R` (which is by default done automatically) or reimport networked prefabs in the main editor.
 - More information and general ParrelSync FAQ: https://github.com/VeriorPies/ParrelSync/wiki/Troubleshooting-&-FAQs
 - The ultimate workaround in case nothing helps - deleting and re-creating the clone instance via `ParrelSync->Clones Manager` window.

## General tips
 - Bigger screens or multi-screen setups allow for more screen real estate, which is handy when one has to have multiple instances of an app opened at the same time.
 - ParrelSync has to copy and update separate `Packages` and `Library` folders for every clone, and in certain cases a fix for misbehaving clone is re-creation - a good SSD makes this process quite a bit faster.
 - Creating a fork of any git repository that your project relies upon in production could help avoid bad surprises if the repo gets taken down or introduces an undesirable change.