This command line helper will launch our project outside Unity and make testing builds easier.

1. Click the **Assets** folder.
1. Create a new Folder and call it **Scripts**.
1. Create a script called `NetworkCommandLine`.
1. Right click on the `NetworkManager` in the hierarchy view and choose **Create Empty**.
   
   This will create an  empty `GameObject` with `NetworkManager` as its parent.

1. Rename this child `GameObject` `NetworkCommandLine`.
1. Inside the `NetworkCommandLine` Inspector tab., click **Add Component**. 
1. Click **Scripts** and add the `NetworkCommandLine.cs` script you created earlier.
1. Open the `NetworkCommandLine.cs` script.
1. Edit the `NetworkCommandLine.cs` script to match the following.

:::tip 
You can copy the script from here and paste it into your file.
1. Select the code sample.
1. Click **Copy** in the top right corner.
1. Paste it into your code editor.
:::

<details open>
<summary>Click to show/hide the Code.

</summary>

``` csharp
using System.Collections.Generic;
using MLAPI;
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

10. Back in the Editor, select **File > Build Settings > Player Settings...**
1. In the **Resolution and Presentation** tab change `Fullscreen Window` mode into `Windowed` mode.    
1. Save your scene.

   
:::tip
   If you are on a Pro Unity license, you may want to disable the splash screen.
:::

<iframe src="https://www.youtube.com/embed/2swybHUigM8?playlist=2swybHUigM8&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>