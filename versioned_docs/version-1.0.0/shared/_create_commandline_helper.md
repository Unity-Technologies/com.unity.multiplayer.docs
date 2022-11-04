This command line helper will launch our project outside Unity and make testing builds easier.

1. Right-click the **Assets** folder and create a new folder by hovering over **Create** and selecting **Folder**. Name it **Scripts**.
2. Create a script called `NetworkCommandLine` by right-clicking on your **Scripts** folder, hovering over **Create** and selecting **C# Script**.
3. In the **Hierarchy** menu, right-click on the `NetworkManager` and choose **Create Empty**.
   
   This will create an  empty `GameObject` with `NetworkManager` as its parent.

4. Rename this child `GameObject` `NetworkCommandLine`.
5. With the new `NetworkCommandLine` object selected, click **Add Component** from the **Inspector** tab. 
6. Select **Scripts** from the drop-down and click on the `NetworkCommandLine.cs` script you created earlier.
7. Open the `NetworkCommandLine.cs` script by double-clicking from the **Project** tab > **Assets** > **Scripts**. It will open in your text editor
8. Edit the `NetworkCommandLine.cs` script to match the following:

:::info How to Copy
We recommend that you use the **Copy** function in our code blocks to reduce errors when copying and pasting content. Hover over the block and select the **Copy** button that appears in the upper-right corner of the code block.
:::

<details open>
<summary>Click to show/hide the Code.

</summary>

``` csharp
using System.Collections.Generic;
using Unity.Netcode;
using UnityEngine;

public class NetworkCommandLine : MonoBehaviour
{
   private NetworkManager netManager;

   void Start()
   {
       netManager = GetComponentInParent<NetworkManager>();

       if (Application.isEditor) return;

       var args = GetCommandlineArgs();

       if (args.TryGetValue("-mlapi", out string mlapiValue))
       {
           switch (mlapiValue)
           {
               case "server":
                   netManager.StartServer();
                   break;
               case "host":
                   netManager.StartHost();
                   break;
               case "client":
         
                   netManager.StartClient();
                   break;
           }
       }
   }

   private Dictionary<string, string> GetCommandlineArgs()
   {
       Dictionary<string, string> argDictionary = new Dictionary<string, string>();

       var args = System.Environment.GetCommandLineArgs();

       for (int i = 0; i < args.Length; ++i)
       {
           var arg = args[i].ToLower();
           if (arg.StartsWith("-"))
           {
               var value = i < args.Length - 1 ? args[i + 1].ToLower() : null;
               value = (value?.StartsWith("-") ?? false) ? null : value;

               argDictionary.Add(arg, value);
           }
       }
       return argDictionary;
   }
}
```

</details>

9. Paste the copied code into your code editor.
1. Save your changes. Your script will reload in the Unity Editor.
1. Back in the Editor, select **File** > **Build Settings** > **Player Settings...**. Beneath **Settings for PC, Mac, & Linux Standalone**, click **Resolution and Presentation** to open the section options.
1. From **Resolution** > **Fullscreen Mode**, change `Fullscreen Window` to `Windowed`.    
1. Back to the Editor main window, save your scene.

   
:::tip
   If you are using a Pro Unity license, you may want to disable the splash screen by unchecking **Splash Image** > **Splash Screen** > **Show Splash Screen**.
:::

<iframe src="https://www.youtube.com/embed/2swybHUigM8?playlist=2swybHUigM8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>
