Now we will test that the command line helper script works.

1. Select **File** > **Build and Run**. 
1. Create a new folder called `Build` inside your Golden Path project folder.
1. **Save As** the binary `GoldenPath`.
1. Your project will build and launch in a new window, and you should see the plane.  
1. Quit your app.
1. Now to launch from the command line.  


<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'For Windows:', value: 'tab1'},
    {label: 'For Mac', value: 'tab2'},
  ]}>

<TabItem value="tab1">
  
For Windows you should do the following:  


1. Open your Command Prompt.
1. Enter the following. Be sure to change the noted section `< >` of **both** commands to your project. 
   
:::note
You may get a UAC prompt requesting permission for the binary to run you should allow it.
:::

  Server: 
  ```
  <Path to Project>\Build\GoldenPath.exe -mlapi server
  ```
  
  Client:
  ```
  <path to project>\Build\GoldenPath.exe -mlapi client
  ```

  To run these commands on a single line:
  ```
  GoldenPath\Build\GoldenPath.exe -mlapi server & GoldenPath\Build\GoldenPath.exe -mlapi client
  ```

  Example:
  ```
  C:\Users\sarao>GoldenPath\Build\GoldenPath.exe -mlapi server & GoldenPath\Build\GoldenPath.exe -mlapi client
  ```

:::important
On Windows, no standard out stream exists by default, so you will need to view the Debug.log file to see the outputs. You can find the Debug.log  files in:

`C:\Users\username\AppData\LocalLow\CompanyName\ProductName\Player.log`

Where the `CompanyName` should default to `DefaultCompany` for a new project and  `ProductName` should be equal to the project's name.

Alternatively you can modify the Windows commands to create a log.txt file in the same folder as your **GoldenPath** folder.

Modify the commands as follows:

  Server: 
  ```
  <Path to Project>\Build\GoldenPath.exe -logfile log-server.txt -mlapi server 
  ```
  
  Client:
  ```
  <Path to Project>\Build\GoldenPath.exe  -logfile log-client.txt -mlapi client
  ```

  Example (Running as a single command line):
  ```
  C:\Users\sarao>GoldenPath\Build\GoldenPath.exe -logfile -log-server.txt -mlapi server & GoldenPath\Build\GoldenPath.exe -logfile log-client.txt -mlapi client
  ```
:::


</TabItem>
<TabItem value="tab2">

For Mac you should do the following:

1. Open Terminal.
2. Enter the following. Be sure to change the noted section `< >` of **both** commands to your project.

Server
```
<Path to Project>/Build/GoldenPath.app/Contents/MacOS/<Project Name> -mlapi server -logfile -
```

Client
```
<Path to Project>/Build/GoldenPath.app/Contents/MacOS/<Project Name> -mlapi client -logfile -
```

Run both as a single command:
```
<Path to Project>/Build/GoldenPath.app/Contents/MacOS/<Project Name> -mlapi server -logfile - & ; ~ <Path to Project>/Build/GoldenPath.app/Contents/MacOS/<Project Name> -mlapi client -logfile -
```

Example scene in video:
   ```
   ~/dev/mlapi-golden-path/GoldenPath/Build/GoldenPath.app/Contents/MacOS/GoldenPath -mlapi server -logfile - & ; ~/dev/mlapi-golden-path/GoldenPath/Build/GoldenPath.app/Contents/MacOS/GoldenPath -mlapi client -logfile -
   ```

<iframe src="https://www.youtube.com/embed/84wxdetXUQw?playlist=84wxdetXUQw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

</TabItem>
</Tabs>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';