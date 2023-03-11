const navbar = {
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
          type: "doc",
          docId: "about",
          label: "About",
        },
        {
          type: "doc",
          docId: "netcode/develop",
          label: "Release Notes",
          docsPluginId: "releases",
        },
        {
          type: "doc",
          docId: "installation/install",
          label: "Documentation",
        },
        {
          type: "doc",
          docId: "api/introduction",
          label: "API Reference",
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
          to: "/transport/transport-1-0-0",
          label: "Release Notes",
          docsPluginId: "releases",
        },
        {
          to: "about",
          label: "Documentation",
          docsPluginId: "transport",
        },

        {
          to: "docs/introduction",
          label: "API Reference",
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
      to: "install-tools",
      label: "Multiplayer Tools",
      position: "left",
      docsPluginId: "tools",
      className: "nav-break",
      items: [
        {
          to: "/tools/tools-1-0-0",
          label: "Release Notes",
          docsPluginId: "releases",
        },
        {
          to: "install-tools",
          label: "Documentation",
          docsPluginId: "tools",
        },
        {
          to: "api/introduction",
          label: "API Reference",
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
          to: "template",
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
        { href: "/blog", label: "Blog" },
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
};

module.exports = navbar;
