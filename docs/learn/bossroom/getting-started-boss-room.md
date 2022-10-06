---
id: bossroom
title: Getting Started with Boss Room
description: Learn more about installing and running the Boss Room game sample.
---

![Boss Room banner](/img/banner.png)

:::important
This project is currently in early-access.
:::

Boss Room is a fully functional Multiplayer Co-op Sample game made with Unity and  Netcode for GameObjects (Netcode). We are building the sample to serve as an educational showcase of specific typical gameplay patterns frequently featured in similar games.

You can use everything in this project as a starting point or as bits and pieces in your own Unity games.


## Download the project files

1. Go to the Multiplayer Samples Co-Op [Latest Release](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases/latest) on GitHub.
1. Click on `Project.zip` to automatically start downloading the folder.
1. Unzip the Project zip file. It unzips a folder named `com.unity.multiplayer.samples.coop-<version>`.
:::note Windows users
Using Windows' built-in extracting tool may generate an "Error 0x80010135: Path too long" error window which can invalidate the extraction process. As a workaround, shorten the zip file to a single character (for example *c.zip*) and move it to the shortest path on your computer (such as in root C:\) and retry. If that solution fails, another workaround is to extract the downloaded zip file using an application like 7zip.
:::
1. You may choose to move your unzipped folder to a new location. My default location is my `Downloads` folder that I regularly clean out, so I moved the folder to my desktop.
1. You can now add the Boss Room project to your Unity Hub.

:::important Compatibility
- Boss Room supports those platforms supported by Netcode.
- Boss Room is compatible with Unity 2020.3 and later.
- Ensure your Unity installation includes the build support module components for your OS.
:::

## Add the project with Unity Hub

1. Open your Unity Hub.
1. Click the dropdown arrow next to **Open**, then select **Add project from disk**.
1. Select the root folder of the downloaded project. For example, `com.unity.multiplayer.samples.coop-0.2.1`.

<iframe src="https://www.youtube.com/embed/PwPUcj3qwtI?playlist=PwPUcj3qwtI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

:::note
The first time you open the project, Unity will import all assets, which will take longer than usual - this is normal. The Unity Netcode For GameObjects v1.0.0 Netcodepackage will also be installed with Boss Room.

**Issues with importing due to parental control software**: If you have issues with importing you may want to check your DNS settings as some ISP parental controls  may block GitHub access. For example, see this information on [WebSafe](https://community.virginmedia.com/t5/Networking-and-WiFi/Web-Safe-Breaks-GitHub/td-p/4279652).
:::

## Register the project with Unity Gaming Services (UGS)

This project leverages several services from UGS to facilitate connectivity between players. To use these services inside your project, you must first [create an organization](https://support.unity.com/hc/en-us/articles/208592876-How-do-I-create-a-new-Organization-) inside the **Unity Dashboard**, and enable both the [Relay](https://docs.unity.com/relay/get-started.html) and [Lobby](https://docs.unity.com/lobby/game-lobby-sample.html) services.

## Open the project

To open the project for the first time:

1. In your Unity Hub, double-click the project.
1. Navigate to the Editor window.
2. Then under the **Project** tab, go to **Assets** > **Boss Room** > **Scenes** and double-click on the **Startup** scene.
3. Click **Play**. The Boss Room menu scene loads.


<iframe src="https://www.youtube.com/embed/OSSBWOJq6gI?playlist=OSSBWOJq6gI&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Test multiplayer

To see the multiplayer functionality in action, you can either run multiple instances of the game [locally on your computer](#local-multiplayer-setup) or choose to [connect through the internet](#multiplayer-over-internet).

## Local multiplayer setup

For a local multiplayer setup, you must build an executable and launch several instances of this executable to both host and join a game.

1. With the Boss Room project open in your Unity editor, click **File** > **Build Settings** > **Build**.
2. Save the binary as `Boss Room`.

<iframe src="https://www.youtube.com/embed/eZGofxiuAgA?playlist=eZGofxiuAgA&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

After the build has completed, you can launch several instances of the built executable to both host and join a game.

:::important Mac Users
To run multiple instances of the same app, you need to use the command line:
1.  First, change your directory to the folder where you saved the Boss Room executable. For example, `cd Desktop/com.unity.multiplayer.samples.coop-0.2.1`.
2.  Run the command `Open -n YourAppName.app`. If you saved the app as `BossRoom`, your command is `Open -n BossRoom.app`. However, if you saved your app as `Boss Room` with a space, your command needs to include quotation marks ("") around the executable name: `Open -n "BossRoom.app"`.
:::

<iframe src="https://www.youtube.com/embed/27Ikr0t7vzg?playlist=27Ikr0t7vzg&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

## Multiplayer over internet

In contrast to running a local setup, when playing over internet we do not necessarily need a built executable. You can run the game in editor.

Running the game over internet currently requires using [Port Forwarding](#port-forwarding) or [Integrating Boss Room with Unity Gaming Services](#integrating-boss-room-with-unity-gaming-services).

### Port Forwarding

The [Portforward Site](https://portforward.com/) has guides on how to enable port forwarding on a huge number of routers. Boss Room uses UDP and needs a 9998 external port to be open.

import Iframe from 'react-iframe'

### Integrating Boss Room with Unity Gaming Services

With the release of Boss Room 1.1.0, Boss Room integrated with Unity Gaming Services (UGS): [Authentication](https://docs.unity.com/authentication/IntroUnityAuthentication.html), [Relay](https://docs.unity.com/relay/introduction.html), and [Lobby](https://docs.unity.com/lobby/unity-lobby-service-overview.html). These services  make it easy for players to host and join games that are playable over the internet, without the need for port forwarding or out-of-game coordination.

#### Authentication

To interact with the rest of UGS, the user must be authenticated. Therefore, authentication is kicked off as soon as the game launches and the main menu scene loads.

:::note
The Authentication service supports [anonymous sign-in](https://docs.unity.com/authentication/UsingAnonSignIn.html) and doesn't require any additional input from the player.
:::

The Authentication API doesn't distinguish multiple instances of the same project running on the same machine and logs in the same user in all those different instances. Both ParrelSync clones and actual game builds are affected and can mess up testing the game locally.

However, Authentication supports [Profiles](https://docs.unity.com/authentication/ProfileManagement.html) that allows different users existing on the same physical machine. To test locally, we need both builds and editor players to be able to switch to different Profiles.

The [`ProfileManager`](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Utils/ProfileManager.cs) class wraps the logic for deciding what Profile you should be using, if any. In builds, the command-line argument `-AuthProfile` specifies the new profile id. When iterating in the editor, ParrelSync can use its `CloneManager` custom arguments to decide what user profile to use. Users can also change profile using the in-game menu.

`ProfileManager.Profile` generates the custom `InitializationOptions`:

```
var unityAuthenticationInitOptions = new InitializationOptions();
var profile = ProfileManager.Profile;


if (profile.Length > 0)
{
    unityAuthenticationInitOptions.SetProfile(profile);
}

```

The code that executes profile switch and sign-in logic itself is as follows:

```
async Task TrySignIn(InitializationOptions initializationOptions)
{
    await Unity.Services.Core.UnityServices.InitializeAsync(initializationOptions);

    if (!AuthenticationService.Instance.IsSignedIn)
    {
   	 await AuthenticationService.Instance.SignInAnonymouslyAsync();
    }
}
```

Next is lobby and relay.

#### Lobby and Relay

##### The Lobby Host Flow

1. The would-be host enters the lobby name, specifies if it's public or private and hits the **Create** button.
1. The [Lobby creation API](https://docs.unity.com/lobby/creating-a-lobby.html) call is made. The newly created lobby is **locked** (i.e prevented from appearing in the list of publicly available, fully set up games that are ready to be joined) until we successfully complete the relay allocation and Netcode startup steps below.
1. The host requests a relay allocation from the [Relay service](https://docs.unity.com/relay/introduction.html).
2. [UTP](../../../transport/about.md)) starts and the host is switches to the character selection scene. The lobby itself is now considered unlocked and is available for other clients to join.

##### The Lobby Client Flow
* There are several ways to connect to a lobby:
  * Choose one of the public lobbies regularly fetched from the Lobby service
  * [Quickjoin](https://docs.unity.com/lobby/quick-join.html): Randomly selects a public lobby
  * Using a [lobby key](https://docs.unity.com/lobby/joining-lobbies.html), shared through out-of-game means. This works for both public and private lobbies.
* After joining a lobby, the [relay join code passes through lobby metadata](https://docs.unity.com/lobby/relay-integrations.html) to connect to the host via UTP Relay transport.
* The host receives a request to approve the connecting client, and the host would server-authoritatively switch the player to the appropriate scene.

Currently, the Lobby service has to be [polled for updates](https://docs.unity.com/lobby/polling-for-lobby-state.html). This is not ideal for a responsive feel to character selection; however, when there is an option to get real time updates from the Lobby service, it would be a good alternative way to implement something like this.

##### Disconnection and Reconnection

Handling player disconnections and reconnections is a necessity in a multiplayer game.

Boss Room uses a [session management](../../advanced-topics/session-management.md) system that ensures when a player disconnects, some data is kept and accurately assigned back to that player if or when they reconnect (see [SessionManager.cs – OnClientDisconnect](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Packages/com.unity.multiplayer.samples.coop/Utilities/Net/SessionManager.cs)).

The way Boss Room handles restoration of user data on reconnection can be found in [SessionManager.cs - SetupConnectingPlayerSessionData](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Packages/com.unity.multiplayer.samples.coop/Utilities/Net/SessionManager.cs), which is called as a part of a connection approval check that is handled by the host (see [ServerGameNetPortal.s – ApprovalCheck](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/ConnectionManagement/ServerGameNetPortal.cs)).

:::important
It's important to promptly remove disconnected players from the lobby. Otherwise, the disconnected player cannot rejoin the lobby because they are still considered in it.
:::

When a player [disconnects from Relay](https://docs.unity.com/relay/disconnection.html), eventually the Lobby and Relay service integration (necessary before we run UTP connection) kicks out the disconnected players. However, the timeout for disconnect is quite long (~2 minutes), and we do not rely solely on this mechanism.

To make the process of leaving lobby more reliable, there are several additional cleanup mechanisms:
* The client code contains application quit logic (see [ApplicationController.cs - OnWantToQuit and LeaveSession](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/ApplicationLifecycle/ApplicationController.cs)) that sends a request to remove the player from the lobby
* The host has special logic that removes the disconnected player from the lobby as soon as the host knows about it (`NetworkManager.OnClientDisconnectCallback`). This is helpful when the client has crashed and couldn't send a "leave lobby" request.
  * For this to work, the host uses `SessionManager` to store the mapping between UGS playerId and their NGO clientId. You can find this logic in [ServerGameNetPortal.cs - OnClientDisconnect](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/ConnectionManagement/ServerGameNetPortal.cs).
* Lastly, the client contains checks that determine if the host has left the lobby, and if so, the client leaves the lobby too. The code for this can be found at [ClientGameNetPortal.cs - OnDisconnectOrTimeout](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/blob/main/Assets/Scripts/Gameplay/ConnectionManagement/ClientGameNetPortal.cs).

## Troubleshooting

**Errors finding Git installation**

If you receive an OS or Unity error trying to locate Git after updating or installing Git, you need to fully restart your computer. Restarting only Unity may not fully update system information to correctly locate the install.

**Windows Error 0x80010135: Path too long**

Using Windows' built-in extracting tool may generate an "Error 0x80010135: Path too long" error window which can invalidate the extraction process. As a workaround, shorten the zip file to a single character (for example *c.zip*) and move it to the shortest path on your computer (such as in root C:\) and retry. If that solution fails, another workaround is to extract the downloaded zip file using an application like 7zip.

**Run builds on Mac OSX gives "unidentified developer"**

If you attempt to run a build on OSX and receive a warning dialog mentioning an "unidentified developer", you may need to override your security settings for this application:

1. In the Finder on your Mac, locate the application you want to open.

  :::note
  Do not use Launchpad, it does not allow you to access the shortcut menu.
  :::

1. Control-click the app icon, then choose **Open** from the shortcut menu.
1. Click **Open**.
1. The app is saved as an exception to your security settings. You can open it in the future by double-clicking it just as you can any registered app.

See [Apple Support](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac) for details.
