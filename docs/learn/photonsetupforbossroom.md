---
id: photonsetup
title: Photon Setup Guide for Boss Room
--- 

## Setup Photon

1. Access the Wizard from Window → Photon Realtime → Wizard.
1. Click next through the wizard until you get to the Photon Cloud Setup.
1. If you do not already have an account or an App Id, click the Visit Dashboard button to create one. If you created a new account, create a New Application from Photon's Dashboard.
:::note
The Photon Type for Boss Room is `Photon Realtime`.

       
   ![Photon Dashboard](/img/Photon-App.png)
:::
1. After the Application is setup, you can get its App ID from Photon's Dashboard. Copy the App ID to your clipboard.
    
:::caution 

In order for others to be able to connect to your Photon Room you **must** ensure that this App Id shared with anyione wanting to connect. 

   ![Photon App ID](/img/Photon-Dashboard.png)

:::
1. In the Photon Wizard Window of your Unity Project, paste the App Id.
1. Click on Setup. 
1. You should receive a completion message, for example "Your AppId is now applied to this Project **Done**".
1. Click Next then Done. Setup is complete and you can safely quit the Photon Wizard.

## Playing Boss Room with friends

Once the setup is done, there are two ways you can actually test out is working:

* Launch the Boss Room project using a packaged build.
* Use the Unity Editor With that being said.

> **IMPORTANT!** There is a bug in MLAPI at the moment that could prevent users from connecting to each other through the editor. 



### Hosting a Room

---
If you want to host a session then:


1. Click the Start button.
2. Select `Relay Host` from the dropdown on the left.
   ![Selecting relay host](/img/Boss-Room-Host-Dropdown.png)
   
3. A random generated room name will be assigned.
   ![Hostname generation](/img/Boss-Room-Host-Confirm.png)
   
4. Share the generated room name with your users, and click confirm!
   
5. Done! You are now in the Lobby - also known as the Character Selection Screen. Your friends/users should be able to join now.
   
> **Note:** You can see the Room Name in the top-left corner.
  ![Room name](/img/Boss-Room-Lobby.png)

### Joining a Room

---

If you want to Join a session then:
1. Click the Join Button and select `Relay Host` from the dropdown on the left.
   ![Joining a game](/img/Boss-Room-Join-Dropdown.png)
2. You should be asked to input the room name below.
   ![Enter room name](/img/Boss-Room-Join.png)

3. In this example, the room name is: `YQWOWS`

4. Click Join. Once successfully connected, you should be in the Lobby with the rest of your friends.
   ![IN the lobby](/img/Boss-Room-Lobby-Extra.png)
   