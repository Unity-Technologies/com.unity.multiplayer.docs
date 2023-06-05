const admonitions = require("./config/admonitions.config.js");
const scripts = require("./config/scripts.config.js");

module.exports = {
  title: "Unity Multiplayer Networking",
  tagline: "Build multiplayer games in Unity",
  url: "https://docs-multiplayer.unity3d.com/",
  staticDirectories: ["public", "static"],
  baseUrl: "/",
  onBrokenLinks: "ignore", // todo: review and set to throw or at least warn
  onBrokenMarkdownLinks: "ignore", // todo: review and set to throw or at least warn
  favicon: "img/favicon.ico",
  trailingSlash: true,
  organizationName: "unity", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  scripts,
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // Announcement across entire site at top of pages
    announcementBar: {
      id: "prerelease", // Any value that will identify this message.
      content:
        '⭐️ If you like our documentation, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Unity-Technologies/com.unity.multiplayer.docs">GitHub</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki">contribute</a>! ⭐️',
      backgroundColor: "#3578e5", // Defaults to `#fff`.
      textColor: "#ffffff", // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    algolia: {
      apiKey: "dd157a25931bf7948bfc08e79fbe2c8c",
      appId: "42DEOQD6E7",
      indexName: "MultiplayerDocs",

      // Optional: for versioned docs
      //contextualSearch: false,

      // Optional: Algolia search parameters
      //searchParameters: {},

      //... other Algolia params
    },

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Code block themes and languages
    prism: {
      theme: require("prism-react-renderer/themes/vsLight"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      additionalLanguages: ["csharp", "powershell", "java", "markdown"],
    },
    // FOOTER links and content
    footer: {
      style: "dark",
      links: [
        {
          title: "Unity",
          items: [
            {
              label: "Our Company",
              href: "https://unity.com/",
            },
            {
              label: "Unity Learn",
              href: "https://learn.unity.com/",
            },
            {
              label: "Unity Manual",
              href: "https://docs.unity3d.com/Manual/index.html",
            },
            {
              label: "Unity Scripting Reference",
              href: "https://docs.unity3d.com/ScriptReference/index.html",
            },
          ],
        },
        {
          title: "Multiplayer Networking",
          items: [
            {
              label: "Licenses",
              type: "doc",
              to: "/reference/license",
              docsPluginId: "reference",
            },
            {
              label: "GitHub - Netcode",
              href: "https://github.com/Unity-Technologies/com.unity.netcode.gameobjects",
            },
            {
              label: "GitHub - Docs",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.docs",
            },
            {
              label: "Netcode for GameObjects Releases",
              href: "https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/releases",
            },
            {
              label: "Boss Room Releases",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases/latest",
            },
            {
              label: "Bitesize Samples",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize",
            },
            {
              label: "Multiplayer RFCs",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.rfcs",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Unity Multiplayer Forum",
              href: "https://forum.unity.com/forums/multiplayer.26/",
            },
            {
              label: "Unity Forums",
              href: "https://forum.unity.com/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/buMxnnPvTb",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Unity Technologies. Built with Docusaurus.`,
    },
    navbar: {
      title: "Multiplayer Networking",
      logo: {
        alt: "Unity",
        src: "img/logo.png",
      },
      items: [
        // Netcode for GameObjects Dropdown
        {
          label: "Netcode for GameObjects",
          // className: 'nav-break',
          type: "dropdown",
          docId: "about",
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "releases",
              label: "Release Notes",
              docsPluginId: "releases",
            },
            {
              type: "doc",
              docId: "about",
              label: "Documentation",
            },
            {
              label: "API Reference",
              href: "https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.4/api/index.html",
            },
          ],
        },
        // Netcode for Gameobjects Versions Dropdown
        {
          type: "docsVersionDropdown",
          position: "left",
          // Add additional dropdown items at the beginning/end of the dropdown.
          //dropdownItemsBefore: [],
          // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: "default",
        },
        // Transport Dropdown
        {
          type: "dropdown",
          docId: "about",
          label: "Transport",
          position: "left",
          docsPluginId: "transport",
          className: "nav-break",
          items: [
            {
              type: "doc",
              docId: "transport/transport-2-0-0",
              label: "Release Notes",
              docsPluginId: "releases",
            },
            {
              type: "doc",
              docId: "about",
              label: "Documentation",
              docsPluginId: "transport",
            },

            {
              label: "API Reference",
              href: "https://docs.unity3d.com/Packages/com.unity.transport@2.0/api/index.html",
              docsPluginId: "transport",
            },
          ],
        },
        // Transport Versions Dropdown
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
          docsPluginId: "transport",
        },
        // Multiplayer Tools Dropdown
        {
          type: "dropdown",
          docId: "install-tools",
          label: "Multiplayer Tools",
          position: "left",
          docsPluginId: "tools",
          className: "nav-break",
          items: [
            {
              type: "doc",
              docId: "tools/tools-2-0-0",
              label: "Release Notes",
              docsPluginId: "releases",
            },
            {
              type: "doc",
              docId: "install-tools",
              label: "Documentation",
              docsPluginId: "tools",
            },
            {
              label: "API Reference",
              href: "https://docs.unity3d.com/Packages/com.unity.multiplayer.tools@1.1/api/index.html",
              docsPluginId: "tools",
            },
          ],
        },
        // Multiplayer Tools Versions Dropdown
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
          docsPluginId: "tools",
        },
        {
          className: "navbar-github-link",
          position: "right",
          to: "contribute",
          docsPluginId: "reference",
          items: [
            {
              to: "/introduction",
              label: "Release Notes",
              docsPluginId: "releases",
            },
            {
              label: "Docs Repo",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.docs",
            },
            {
              label: "Netcode for GameObjects Repo",
              href: "https://github.com/Unity-Technologies/com.unity.netcode.gameobjects",
            },
            {
              label: "Multiplayer Community Contributions",
              href: "https://github.com/Unity-Technologies/multiplayer-community-contributions",
            },
            {
              label: "Boss Room Repo",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop",
            },
            {
              label: "Bitesize Samples Repo",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize",
            },
            {
              label: "Contribution Guide",
              href: "https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki",
            },
            {
              type: "doc",
              docId: "template",
              label: "Markdown Template",
              docsPluginId: "reference",
            },
          ],
        },
        {
          position: "right",
          className: "navbar-grid-menu",
          to: "contribute",
          docsPluginId: "reference",
          items: [
            {
              label: "Product Roadmap",
              href: "https://unity.com/roadmap/unity-platform/multiplayer-networking",
            },
            {
              label: "Discord",
              href: "https://discord.gg/buMxnnPvTb",
            },
            {
              label: "Unity Multiplayer Forum",
              href: "https://forum.unity.com/forums/multiplayer.26/",
            },
            {
              label: "Netcode for GameObjects Forum",
              href: "https://forum.unity.com/forums/netcode-for-gameobjects.661/",
            },
            {
              label: "Unity Transport Forum",
              href: "https://forum.unity.com/forums/unity-transport.664/",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      // Configs for Netcode versioned content
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "netcode",
          sidebarPath: require.resolve("./sidebars.js"),
          // remarkPlugins: [require("mdx-mermaid")],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Edit URL for version
          editUrl: function ({ versionDocsDirPath, docPath }) {
            return `https://github.com/Unity-Technologies/com.unity.multiplayer.docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          includeCurrentVersion: true,
          lastVersion: "current",
          versions: {
            current: {
              label: "1.5.0",
              path: "current",
            },
            "1.4.0": {
              label: "1.4.0",
              path: "1.4.0",
            },
            "1.3.0": {
              label: "1.3.0",
              path: "1.3.0",
            },
            "1.1.0": {
              label: "1.1.0",
              path: "1.1.0",
            },
            "1.0.0": {
              label: "1.0.0",
              path: "1.0.0",
            },
            "0.1.0": {
              label: "0.1.0",
              path: "0.1.0",
            },
          },
          admonitions,
        },
        blog: {
          //postsPerPage: 3,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Unity Technologies`,
          },
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All Blog Posts",
        },
        theme: {
          customCss: require.resolve("./src/css/unity-custom.scss"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5, //do not change, search requires
        },
      },
    ],
  ],
  plugins: [
    [
      // Configs for Release Note unversioned content
      "@docusaurus/plugin-content-docs",
      {
        id: "releases",
        path: "releases",
        editUrl: ({ docPath }) => {
          return `https://github.com/Unity-Technologies/com.unity.multiplayer.docs/edit/main/${docPath}`;
        },
        editCurrentVersion: true,
        routeBasePath: "releases",
        sidebarPath: require.resolve("./sidebarsReleases.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        admonitions,
      },
    ],
    [
      // Configs for Reference unversioned content
      "@docusaurus/plugin-content-docs",
      {
        id: "reference",
        path: "reference",
        editUrl: ({ docPath }) => {
          return `https://github.com/Unity-Technologies/com.unity.multiplayer.docs/edit/main/${docPath}`;
        },
        editCurrentVersion: true,
        routeBasePath: "reference",
        sidebarPath: require.resolve("./sidebarsReference.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        admonitions,
      },
    ],
    [
      // Configs for Transport versioned content
      "@docusaurus/plugin-content-docs",
      {
        id: "transport",
        path: "transport",
        editUrl: function ({ versionDocsDirPath, docPath }) {
          return `https://github.com/Unity-Technologies/com.unity.multiplayer.docs/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        includeCurrentVersion: true,
        lastVersion: "current",
        versions: {
          current: {
            label: "2.0.0",
            path: "current",
          },
          "1.0.0": {
            label: "1.0.0",
            path: "1.0.0",
          },
          "0.8.0": {
            label: "0.8.0",
            path: "0.8.0",
          },
        },
        editCurrentVersion: true,
        routeBasePath: "transport",
        sidebarPath: require.resolve("./sidebarsTransport.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        admonitions,
      },
    ],
    [
      // Configs for Tools versioned content
      "@docusaurus/plugin-content-docs",
      {
        id: "tools",
        path: "tools",
        editUrl: function ({ versionDocsDirPath, docPath }) {
          return `https://github.com/Unity-Technologies/com.unity.multiplayer.docs/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        includeCurrentVersion: true,
        lastVersion: "current",
        versions: {
          current: {
            label: "2.0.0-pre",
            path: "current",
          },
          "1.1.0" : {
            label: "1.1.0",
            path: "1.1.0",
          },
          "1.0.0": {
            label: "1.0.0",
            path: "1.0.0",
          },
        },
        editCurrentVersion: true,
        routeBasePath: "tools",
        sidebarPath: require.resolve("./sidebarsTools.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        admonitions,
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-5V25JL6", // GTM Container ID
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/netcode/current/learn/bossroom/bossroom",
            from: "/docs/learn/bossroom/index.html",
          },
        ],
      },
    ],
    "plugin-image-zoom",
    "docusaurus-plugin-sass",
    "@saucelabs/theme-github-codeblock",
    "react-iframe",
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
  },
};
