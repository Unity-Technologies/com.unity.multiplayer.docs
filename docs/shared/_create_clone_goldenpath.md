
:::important
Cloning your Foundation **GoldenPath** project does not support rollback, so it will only work on the Unity version that it was originally created for. Attempting to open the clone on a newer or older version of Unity may cause unexpected funcationality.
:::

We create a clone of the Golden Path Foundation project for further Golden Path modules, if you have not yet created a `GoldenPath` project then you should follow the steps [here](goldenpath_foundation_module) to create one. Working from a clone of the initial project will help you learn about new features and concepts without having to repeat  previous work.
 
### Create a clone of GoldenPath

1. Navigate to where your Golden Path project is stored.
  :::note
  For the video guide we used a Mac and our path was `~/dev/mlapi-golden-path/`. On a Windows machine your path may be slightly different.
  As one of our writer's stepped through the process in both Mac and Windows, these are her comparative paths:
   * Mac: `~ GoldenPath`
   * Windows: `C:\Users\sarao\GoldenPath`
   :::
2. Create a new folder and name it `Golden Path_<modulenumber>`. 
   :::tip
   For the purposes of the Golden Path series, I will replace `modulenumber`  with the current module number of the series. You do not have to, though, you may find it makes following the series easier.

   Our comparative paths of the new folder for module one:
   * Mac in video: `~/dev/mlapi-golden-path/Golden_Path_One`
   * Mac: `~GoldenPath_One`
   * Windows: `C:\Users\sarao\GoldenPath_One`
   ::: 
3. Open your `GoldenPath` folder from the Foundation module, select all the content within to **Copy**, then **Paste** into your new `Golden Path_<modulenumber>` folder.

:::tip From the Video
I moved my new folder to keep my file structure clean its not a required step, but it does look nice.
:::

<iframe src="https://www.youtube.com/embed/xbJiYNx1uNg?playlist=xbJiYNx1uNg&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

### Add the clone to Unity Hub

<Tabs
  className="unique-tabs"
  defaultValue="tab1"
  values={[
    {label: 'Unity Hub Version 3.0.0+', value: 'tab1'},
    {label: 'Unity Hub Previous Versions', value: 'tab2'},
  ]}>
 
<TabItem value="tab1">
 
To add your clone project in Unity Hub version 3.0.0+:
 
1. Open Unity Hub.
1. From the dropdown arrow between **Open** and **New project**, click **Add project from disk**.
1. Navigate to where the clone folder is saved, select `GoldenPath_&lt;modulenumber&gt;`, and click **Open**/**Select Folder**.

The clone project should now appear in your projects list of the Unity Hub as `GoldenPath_&lt;modulenumber&gt;`.
</TabItem>

<TabItem value="tab2">
 
To add your clone project in previous Unity Hub versions:
 
1. Open Unity Hub.
2. Click **Add**.
3. Navigate to where the clone folder is saved, select `GoldenPath_&lt;modulenumber&gt;`, and click **Open**/**Select Folder**.

The clone project should now appear in your projects list of the Unity Hub as `GoldenPath_&lt;modulenumber&gt;`.
</TabItem>
</Tabs>