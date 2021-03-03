// Docusaurus v2, see package.json for versions
//const remarkCustomBlocks = require('remark-custom-blocks');
module.exports = {
  title: 'Unity Multiplayer Technology',
  tagline: 'MLAPI and MTT Guides',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'unity', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    //gtag: {
      //trackingID: 'UA-123456789-1',
      // Optional fields.
      //anonymizeIP: true, // Should IPs be anonymized?
    //},
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,

      switchConfig: {
        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIcon: '\u{1F319}',
        darkIconStyle: {
          marginLeft: '1px',
        },
        lightIcon: '\u{1F324}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      }
    },
    navbar: {
      title: 'Unity Multiplayer Documentation',
      logo: {
        alt: 'Unity',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              type: 'doc',
              to: 'docs/getting-started/about-mlapi',
              label: 'MLAPI',
            },
            {
              type: 'doc',
              to: 'docs/transport/introduction',
              label: 'Transport',
            },
          ]
        },
        {
          type: 'doc',
          docId: 'mlapi-api/introduction',
          label: 'API',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'tools/introduction',
          label: 'Tools',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'tutorials/introduction',
          label: 'Tutorials',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'release-notes/introduction',
          label: 'Release Notes',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        { 
          className: 'navbar-github-link',
          position: 'right',
          items: [
            {
              label: 'GitHub Doc Repo',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.docs',
            },
            {
              label: 'GitHub Code Repo',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi',
            },
            {
              label: 'Contribution Guide',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki',

            },
            {
              type: 'doc',
              to: 'docs/template',
              label: 'Doc Template',
            },
          ]
        },
        {
          position: 'right',
          //label: 'Community',
          className: 'navbar-grid-menu',
          items: [
            /*{
              type: 'doc',
              to: 'docs/roadmap',
              label: 'Multiplayer Roadmap',
            },*/
            { 
              label: 'Discord',
              href: 'http://discord.mlapi.network/',
            },
            {
              label: 'Unity Multiplayer Forum',
              href: 'https://forum.unity.com/forums/multiplayer.26/',
            },
          ]
          },
      ],
    },
    prism: {
      additionalLanguages: ['csharp', 'powershell', 'java', 'markdown'],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Unity',
          items: [
            {
              label: 'Our Company',
              href: 'https://unity.com/',
            },
            {
              label: 'Unity Learn',
              href: 'https://learn.unity.com/',
            },
            {
              label: 'Unity Manual',
              href: 'https://docs.unity3d.com/Manual/index.html',
            },
            {
              label: 'Unity Scripting Reference',
              href: 'https://docs.unity3d.com/ScriptReference/index.html',
            },
          ],
        },
        {
          title: 'Multiplayer',
          items: [
            {
              label: 'Releases',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/releases/',
            },
            {
              label: 'GitHub - Code',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi',
            },
            {
              label: 'GitHub - Docs',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.docs',
            },
            {
              label: 'Multiplayer RFCs',
              href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.rfcs',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            /*{
              type: 'doc',
              to: 'docs/roadmap',
              label: 'Multiplayer Roadmap',
            },*/
            {
              label: 'Unity Blog',
              href: 'https://blogs.unity3d.com/',
            },
            {
              label: 'Forums',
              href: 'https://forum.unity.com/',
            },
            {
              label: 'Discord',
              href: 'http://discord.mlapi.network/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Unity Technologies. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Edit this page repo domain URL
          editUrl: 'https://github.com/Unity-Technologies/com.unity.multiplayer.docs/edit/master/',
          admonitions: {
            customTypes: {
              contribution: {
                keyword: `contribution`,
                infima: true,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z" fill="#855EF0"/></svg>'
              },
              funfact: {
                keyword: `funfact`,
                infima: true,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><g><rect fill="none" height="24" width="24" x="0" y="0"/></g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57L12,15l-1.57-3.43L7,10l3.43-1.57 L12,5l1.57,3.43L17,10L13.57,11.57z"/></g></svg>'
              },
              bestpractice: {
                keyword: `bestpractice`,
                infima: true,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'
              }
            }
          },
          /*remarkPlugins: [
            [ remarkCustomBlocks, { options: {
                columns: {
                  classes: 'columns-table',
                  title: 'optional',
                },
            },
          },
          ]
          ]*/
        },
        theme: {
          customCss: require.resolve('./src/css/unity-custom.scss'),
          
        },
      },
    ],
  ],
  plugins: [
    //'@docusaurus/plugin-google-gtag'
      'plugin-image-zoom',
      'docusaurus-plugin-sass',
      '@saucelabs/theme-github-codeblock'
  ],
};
