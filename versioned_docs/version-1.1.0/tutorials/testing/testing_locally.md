---
id: testing_locally
title: Testing multiplayer games locally
description: Guide covering the available workflows for testing multiplayer games locally.
---
Testing a multiplayer game presents unique challenges:

* You need to run multiple instances of the game to test multiplayer scenarios. 
* You also need to iterate quickly on  custom code and asset changes and validate  work in a multiplayer scenario.
* You need to be able to debug  work in a multiplayer scenario using editor tools.

Currently, Unity does not offer any workflow that covers all of these requirements. (See our [roadmap here](https://unity.com/roadmap/unity-platform/multiplayer-networking))

There will always be a need to validate work in the target distribution format (that is, on platform) and the way to do it's by creating [Player Builds](#player-builds). 

:::important
Player builds don't meet the quick iteration and easy debuggability using editor tools requirement. As such the current recommended workflow for local iteration is [ParrelSync](#parrelsync).
:::

## Player Builds

:::tip hint
This approach is great when we need to verify work on the target platform or with a wider group of testers.
:::

First step is to build an executable.

1. Navigate to  `File->Build Settings` in the menu bar.
1. Click `Build`.

Then the build can be shared among the testers.

### Local iteration using Player Builds

Once the build has completed you can launch several instances of the built executable to both host and join a game.

It is also possible to run the builds along with an editor that produced said build, which can be useful during iterations.

:::unity For Mac
Mac users: to run multiple instances of the same app, you need to use the command line.
Run `open -n YourAppName.app`
:::

:::tip hint
Though functional, we find this approach to be somewhat slow for the purposes of local iteration. Head on to the [ParrelSync](#parrelsync) section for our suggested workflow for local iteration.
:::

## ParrelSync

[**ParrelSync**](https://github.com/VeriorPies/ParrelSync) is an open-source Unity Editor extension that allows users to **test multiplayer gameplay without building the project** by having another Unity Editor window opened and mirror the changes from the original project. 

:::caution
ParallelSync is **not** supported by Unity.  Please see the repositor for more information and [troubleshooting information](https://github.com/VeriorPies/ParrelSync/wiki/Troubleshooting-&-FAQs)
:::

**ParrelSync** works by making a copy of the original project folder and creating symbolic links to the `Asset` and `Project Settings` folders back from the original project.

We use **ParrelSync** for local iteration in [Boss Room sample](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/).

![parrelsync-bossroom-demo](../../../../static/img/parrelsync-bossroom-demo.gif)

ParrelSync is generally safe because it relies on symbolic links and partial copies of the original project folder structure.

:::important
Although ParrelSync is generally safe, you should still consistently back up your project or use a version control system to ensure you don't lose your work.
:::

### Installation

Follow the installation instructions on **ParrelSync** repo [page](https://github.com/VeriorPies/ParrelSync#installation)

### Usage

* Navigate to `ParrelSync->Preferences` in the menu bar to open the preferences window.
* Ensure that both Options are selected as shown below

![parrelsync-preferences](/img/parrelsync-preferences.png)

:::important

By default **ParrelSync** prevents asset serialization in all clone instances and changes can only be made from the original project editor. This is a **very important setting** that prevents issues with multiple editors accessing the same `Library` folder (which isn't supported and breaks basic assumptions in Unity design).

:::

* Open the `ParrelSync->Clones Manager` from which you can launch, create and remove clone editors.
  * Advanced usage is to utilize **ParrelSync's** capability of passing [Arguments](https://github.com/VeriorPies/ParrelSync/wiki/Argument) to clones, thus allowing to run custom logic on a per-clone basis.

### UGS Authentication

When you use [Unity Authentication](https://docs.unity.com/authentication/IntroUnityAuthentication.html), it caches the user's identity locally, even with [Anonymous Sign-in](https://docs.unity.com/authentication/UsingAnonSignIn.html).This means that each ParrelSync clone will be signed in as the same user, making testing certain scenarios difficult. You can force each clone to use a different identity using the [profile management in the Authentication SDK](https://docs.unity.com/authentication/ProfileManagement.html). You can use `ParrelSync.ClonesManager` to detect and automate this step.

```csharp
// ParrelSync should only be used within the Unity Editor so you should use the UNITY_EDITOR define
#if UNITY_EDITOR 
if (ParrelSync.ClonesManager.IsClone())
{
    // When using a ParrelSync clone, switch to a different authentication profile to force the clone
    // to sign in as a different anonymous user account.
    string customArgument = ParrelSync.ClonesManager.GetArgument();
    AuthenticationService.Instance.SwitchProfile($"Clone_{customArgument}_Profile");
}
#endif
```

### Known issues and workarounds

* An important nuance is that **ParrelSync** does not sync changes made to packages. `Packages` folder is synced on clone opening, so if you made package changes - you should close and re-open your clones.
  * [Relevant GitHub issue](https://github.com/VeriorPies/ParrelSync/issues/48)
* If you encounter a Netcode error that mentions `soft sync` - that generally means that prefabs or scenes aren't in sync between editors. You should save the project in the main editor via `File->Save Project` and refresh the projects in the clone editors by pressing `Ctrl + R` (which is by default done automatically) or reimport networked prefabs in the main editor.
* More information and general **ParrelSync** FAQ: https://github.com/VeriorPies/ParrelSync/wiki/Troubleshooting-&-FAQs
* The ultimate workaround in case nothing helps - deleting and re-creating the clone instance via `ParrelSync->Clones Manager` window.

## General tips

* Bigger screens or multi-screen setups allow for more screen real estate, which is handy when one has to have multiple instances of an app opened at the same time.
* **ParrelSync** has to copy and update separate `Packages` and `Library` folders for every clone, and in certain cases a fix for misbehaving clone is re-creation - a good SSD makes this process quite a bit faster.
* Creating a fork of any git repository that your project relies upon in production can help avoid bad surprises if the repo gets taken down or introduces an undesirable change. You should fork **ParrelSync** before using it in your live project.

:::contribution Special Thanks
This guide would not have been possible without the hard work and support of Philipp Deschain, Unity.
:::
