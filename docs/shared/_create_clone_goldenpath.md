
:::important
The clone does not support rollback so it will only work on the unity version that it was originaly created for. Attempting to open the clone on a newer or older version of Unity may cause unexpected funcationality.
:::

We  create a clone of the Golden Path foundation project that you created, if you have not yet created a `GoldenPath` project then you should follow the steps [here](goldenpath_foundation_module.md) to create one.

:::tip
 Working from a clone of the initial project will help you learn about new features and concepts without having to repeat  previous work.
:::
 
### Create a clone of GoldenPath

1. Navigate to where you Golden Path project is stored. For this guide we used a Mac and our path was `~/dev/mlapi-golden-path/`. On a Windows machine your path may be slightly different.
1. Create a new folder.
1. Rename the new folder  `Golden Path_<modulenumber>`. 
   :::tip
   For the purposes of this series I will replace `modulenumber`  with the current module number of the series. You do not have to though you may find it makes following the series easier.
   ::: 
1. Open the `Goldenpath` folder.
1. Select **Copy**.
1. Select the folder containg your Golden Path project.
1. Select **Paste**.

:::tip
I moved my new folder to keep my file structure clean its not a required step, but it does look nice.
:::

<iframe src="https://www.youtube.com/embed/xbJiYNx1uNg?playlist=xbJiYNx1uNg&loop=1&&autoplay=0&controls=1&showinfo=0&mute=1"   width="854px"
        height="480px" className="video-container" frameborder="0" position="relative" allow="accelerometer; autoplay; loop; playlist; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen=""></iframe>

### Add the clone to Unity Hub

1. Open Unity Hub.
1. Click **Add**.
1. Navigate to where the clone was saved.
1. Select `GoldenPath_<modulenumber>`.
1. Click **Open**.

The Clone should now appear in the project list of Unity Hub as `GoldenPath_<modulenumber>`.
