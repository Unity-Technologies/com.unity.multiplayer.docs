// Docusaurus v2, see package.json for versions
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
      title: 'Unity Multiplayer Technology',
      logo: {
        alt: 'Unity',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'MLAPI Docs',
          position: 'left',
        },
        { 
          //href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.docs',
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
          ]
        },
        {
          position: 'right',
          //label: 'Community',
          className: 'navbar-grid-menu',
          items: [
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
            {
              label: 'Blog',
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
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          /*remarkPlugins: [
            [ remark-custom-blocks
              {
                options: {
                  blocks: {
                    danger: {
                      classes: "danger",
                    }
                  }
                }
              },
            ],
          ]*/
        },
        theme: {
          customCss: require.resolve('./src/css/unity-custom.css'),
        },
      },
    ],
  ],
  plugins: [
    //'@docusaurus/plugin-google-gtag'
      'plugin-image-zoom' 
  ],
};
