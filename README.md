# Unity Multiplayer Docs

Welcome to the Unity Multiplayer Technology (MTT) Documentation. This site includes the MLAPI, Unity Transport Package, and other tools and features supporting MTT.

The documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/). 

[![Forums](https://img.shields.io/badge/unity--forums-multiplayer-blue)](https://forum.unity.com/forums/multiplayer.26/)
[![Discord](https://img.shields.io/discord/449263083769036810.svg?label=discord&logo=discord&color=informational)](https://discord.gg/FM8SE9E)

## Contributing Content

Always cut branches from **master** branch. 

See the [Contribution Guide](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki) for details. A [template file](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/blob/master/docs/template.md) (/docs/template.md) is included in the repo to understand markdown formatting and options.

## Installation

The first time you clone the repo, run the following command to install required node modules into the local cloned directory. You only need to run this once.

```console
npm install
```

## Building on Local

For full building content, see [Building Locally](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki/Building-Locally):

1. Run the build command to generate a site. This command generates static content into the `build` directory.

    ```console
    yarn build
    ```

2. Start a local development server and open up a browser window with the following command. Most changes are hot-loaded, displaying without requiring a rebuild and restart.

    ```console
    yarn start
    ```

We recommend running `npm update` to update your local plugins and packages as needed.

## Connect with Unity 

Connect with the Unity Multitplayer team and community on the [MLAPI by Unity](http://discord.mlapi.network/) Discord using channel #documentation. You can also raise threads on the [Unity Multiplayer Forum](https://forum.unity.com/forums/multiplayer.26/)
