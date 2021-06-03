Now we will test that the command line helper script works.

1. Select **File > Build and Run**. 
1. Create a folder called `Build`.
1. Name the binary `GoldenPath`.
1. Your project will build, and it will launch, and you should see the plane.  
1. Quit your app.
1. Launch from the command line.  


<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'For Windows:', value: 'tab1'},
    {label: 'For Mac', value: 'tab2'},
  ]}>

<TabItem value="tab1">
  
For Windows you should do the following:  


1. Open CMD.
1. Enter the following: 
   
:::note
You may get a UAC prompt requesting prermission for the binary to run you should allow it.
:::

  Server: 

  ```
  <path to project>/Build/GoldenPath.exe -mlapi server
  ```
  
  Client:
  
  ```
  <path to project>/Build/GoldenPath.exe -mlapi client
  ```

:::important
On Windows, no standard out stream exists by default, so you will need to view the Debug.log file to see the outputs. You can find the Debug.log  files in:

`C:\Users\username\AppData\LocalLow\CompanyName\ProductName\Player.log`

Where the `CompanyName` should default to `DefaultCompany` for a new project and  `ProductName` should be equal to the project's name.

Alternatively you can modify the Windows commands to create a log.txt file in the same folder as the .exe which maybe more convenient.

Modify the commands as follows:

  Server: 

  ```
  <path to project>/Build/GoldenPath.exe -logfile log-server.txt -mlapi server 
  ```
  
  Client:
  
  ```
  <path to project>/Build/GoldenPath.exe  -logfile log-client.txt -mlapi client
  ```

:::


</TabItem>
<TabItem value="tab2">

For Mac you should do the following:

1. Open Terminal.
1. Enter the following.

   ```
   ~/dev/mlapi-golden-path/GoldenPath/Build/GoldenPath.app/Contents/MacOS/GoldenPath -mlapi server -logfile - & ; ~/dev/mlapi-golden-path/GoldenPath/Build/GoldenPath.app/Contents/MacOS/GoldenPath -mlapi client -logfile -
   ```

Both windows should show a plane and a capsule (the capsule being the single player that was spawned). 

<iframe src="https://www.youtube.com/embed/84wxdetXUQw?playlist=84wxdetXUQw&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

</TabItem>
</Tabs>