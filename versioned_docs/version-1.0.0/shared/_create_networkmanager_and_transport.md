1. Right-click in the **Hierarchy** tab of your Unity Project Window.
1. Select **Create Empty**.
1. Rename the `GameObject` **NetworkManager**.
   
  :::note
  We renamed the `GameObject` because:
    * It makes it  easier to refer to later.
    * There should only be one **NetworkManager** object that contains the  `NetworkManager` component. You may get unexpected results if you create more than one **NetworkManager**.
  :::

You have created a new `GameObject` called **NetworkManager**. Now we will add the `NetworkManager` component and select the transport type.

1. Select **NetworkManager**.
1. Click **Add Component** in the **Inspector** tab.
1. Select **Netcode* from the list.
1. Select `NetworkManager` component.
1. Inside the `NetworkManager` component tab, locate the  `NetworkTransport` field. It may have a warning icon stating that a transport is required for Netcode to work. 
1. From the **Select Transport...** dropdown, select `UnetTransport`.
1. Save your scene.


<iframe src="https://www.youtube.com/embed/ZYEUWzsXEoY?playlist=ZYEUWzsXEoY&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

