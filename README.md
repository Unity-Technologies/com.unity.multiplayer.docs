# Unity Multiplayer Networking Docs

Welcome to the Unity Multiplayer Networking Documentation. This site includes the MLAPI, Unity Transport Package, Boss Room Sample Coop, and other tools and features.

The documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/) using [Yarn](https://yarnpkg.com/en/) and [Node.js](https://nodejs.org/en/download/). 

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdocs-multiplayer.unity3d.com%2F)](https://docs-multiplayer.unity3d.com/)
[![Forums](https://img.shields.io/badge/unity--forums-multiplayer-blue)](https://forum.unity.com/forums/multiplayer.26/)
[![Discord](https://img.shields.io/discord/449263083769036810.svg?label=discord&logo=discord&color=informational)](https://discord.gg/FM8SE9E)

## Contributing Content

Always cut branches from **master** branch. 

See the [Contribution Guide](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki) to learn about writing and submitting content, our GitHub labels, and more. A [template file](https://github.com/Unity-Technologies/com.unity.multiplayer.docs/blob/master/docs/template.md) (/docs/template.md) is included in the repo to understand markdown formatting and options.

## Tools Used

Our site uses Docusaurus with Yarn commands. Always use Yarn commands, to update, build, and serve the server locally. If you need a preview without building locally, the Unity Doc Team can get you a preview!

## Installation

The first time you clone the repo, run the following command to install required node modules into the local cloned directory. You only need to run this once.

```console
yarn install
```

If you need to update packages and local plugins, use:

```console
yarn upgrade
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

## Connect with Unity 

Connect with the Unity Multitplayer team and community on the [MLAPI by Unity](http://discord.mlapi.network/) Discord using channel #documentation. You can also raise threads on the [Unity Multiplayer Forum](https://forum.unity.com/forums/multiplayer.26/)
