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
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      switchConfig: {
        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        // Icon for the switch while in dark mode
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
          label: 'Docs',
          position: 'left',
        },
        { 
          href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.docs',
          label: 'GitHub',
          className: 'fp-github',
          position: 'right',
        },
        { 
          href: 'https://blogs.unity3d.com/',
          label: 'Blog',
          position: 'right'},
        {
          label: 'Language', 
          position: 'right', 
          items:[
            {label:'English', to:'/about-mlapi'},
            {label:'日本人', to:'/jp/about-mlapi'}
          ]
        }
      ],
    },
    prism: {
      additionalLanguages: ['csharp', 'powershell', 'java'],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            {
              label: 'Unity',
              href: 'https://unity.com/',
            },
            {
              label: 'Manual',
              href: 'https://docs.unity3d.com/Manual/index.html',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Multiplay',
              href: 'https://multiplay.com/',
            },
            {
              label: 'Multiplay Docs',
              href: 'https://docs.multiplay.com/',
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
              label: 'GitHub',
              href: 'https://unity-technologies.github.io',
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
          path: 'docs', //frozen version do not remove
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: false
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/unity-custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ],
  ],
};
