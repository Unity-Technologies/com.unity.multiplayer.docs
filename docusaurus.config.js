module.exports = {
  title: 'Unity Multiplayer Technology',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'unity', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Unity Multiplayer Technology',
      logo: {
        alt: 'Unity',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
