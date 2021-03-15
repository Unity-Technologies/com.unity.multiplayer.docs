---
id: migratingfrommlapi
title: Upgrade Guide
sidebar_label: Upgrade Guide
---



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrading Old MLAPI Versions to Package Manager

:::important
This upgrade guide targets project using the MLAPI version which was installed by the MLAPI installer or by cloning the source code from Github.
If your project uses a Package Manager version of MLAPI then this guide is not relevant.
:::

The aqcuisiton of MLAPI has been a unique event in Unity history. In our efforts to integrate MLAPI into the Unity eco system we are turning it in a Unity package.

What this means for you is:
- MLAPI will be easily accessible from the Unity Editor in the Package Manager window.
- 

## First, Backup your Project!
:::important
This step is **not** optional. Upgrading to the package version of MLAPI can screw up your project. Backup your project by either creating a copy of your entire project folder or by using source control software like Git. Best do both to be safe.
:::


## Upgrading

Previously there were two major ways to use MLAPI in projects. You could either download a release version of MLAPI using the MLAPI installer or manually. 

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'Upgrading from release version.', value: 'tab1'},
    {label: 'Upgrading from source.', value: 'tab2'},
  ]}>

<TabItem value="tab1">

Manually upgrading from the dll version installed by MLAPI to the new package version breaks all MLAPI component references in your scenes and prefabs. To allow you to upgrade smoothly to the new version of MLAPI we have created an upgrade tool.

To start upgrading add the upgrade tool to your project by using the `Add package from git URL..` option in the package manager window and using the following url: TODO url

Open the MLAPI patcher window by selecting `Window > MLAPI Patcher` in the menu bar. The Patcher will lead you through a 4 step process of upgrading your project.

1. **Cache Script References**
This step captures the existing guid links to MLAPI components in a temporary json file.
1. **Upgrade to package version**
This step removes the existing dll version of MLAPI by **deleting** the `Assets/MLAPI` and `Assets/Editor/MLAPI` folder and then installing the package version of MLAPI. After running this process you should see the MLAPI package in the installed packages list of the package manager.
1. **Update Script References**
After switching to the package version of MLAPI all references to MLAPI components on your prefabs and scenes will point to missing scripts. This process fixes the references in your project by using the captured references in step 1 to upgrade your project. After running this step 
1. **Auto update type names in scripts.**
This is a voluntary step. It performs a string replace over all the .cs files in your project to upgrade many of the type names which got changed by our recent API changes. If you are familiar with replacing things on a project level in an IDE you can do this process by yourself.

After following the steps in the patcher you will most likely still have a few error messages in the console. Please follow the rest of the content in this guide to figure out how to patch them up.


</TabItem>
<TabItem value="tab2">

Welcome to hell :)

</TabItem>
</Tabs>


## Fixing Serialization

After upgrading the NetworkPrefabs list of the NetworkMananger will be empty. You will have to manually readd all your network prefabs to it.

## Upgrade RPCs

The way RPCs are invoked has drasticly changed with this version of MLAPI. Please read our new [documentation about RPCs](TODO link) and replace your existing RPCs with the new system.

## SyncVars
SyncVars don't longer exist in MLAPI. Convert your existing SyncVars into [NetworkVariables](TODO link).

## Troubleshooting

### The type or namespace name 'MLAPI' could not be found

This error will pop up if your project uses Assembly definition (.asmdef) files. After switching to the package version your assembly definition files will need to reference `com.unity.multiplayer.mlapi.runtime`.

### The type or namespace name 'NetworkedBehaviour' could not be found

If you get an error message like this (or for another MLAPI type then `NetworkedBehaviour`) in the console it is most likely because your code contains outdated APIs. Open the script indicated in the error messagea and update all APIs to the new names. You can find a table of what we renamed in the [changelog](TODO link).
