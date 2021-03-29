// Docusaurus v2, see package.json for versions
module.exports = {
    title: 'Unity Multiplayer Networking',
    tagline: 'Build multiplayer games in Unity',
    url: 'https://docs-multiplayer.unity3d.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'unity', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    scripts: [{
      //OneTrust Cookie required by Unity web team
        src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js', 
        async: true,
        'data-domain-script': '6e91be4c-3145-4ea2-aa64-89d716064836'
    }],
    themeConfig: {
      //button on sidebar
      hideableSidebar: true,
      announcementBar: {
        id: 'prerelease', // Any value that will identify this message.
        content:
          '⭐️ If you like our documentation, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Unity-Technologies/com.unity.multiplayer.docs">GitHub</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/Unity-Technologies/com.unity.multiplayer.docs/wiki">contribute</a>! ⭐️',
        backgroundColor: '#3578e5', // Defaults to `#fff`.
        textColor: '#ffffff', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },
      algolia: {
        apiKey: 'dd157a25931bf7948bfc08e79fbe2c8c',
        appId: '42DEOQD6E7',
        indexName: 'MultiplayerDocs',
  
        // Optional: for versioned docs
        //contextualSearch: false,
  
        // Optional: Algolia search parameters
        //searchParameters: {},
  
        //... other Algolia params
      },
  
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
        title: 'Unity Multiplayer Networking',
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
            docId: 'learn/introduction',
            label: 'Learn',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'release-notes/introduction',
            label: 'Release Notes',
            position: 'left',
          },
          
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
              {to: 'blog', label: 'Blog', position: 'right'},
              {
                label: 'Product Roadmap',
                href: 'https://resources.unity.com/unity-engine-roadmap/multiplayer',
              },
              { 
                label: 'Discord',
                href: 'https://discord.gg/buMxnnPvTb',
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
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
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
            title: 'Multiplayer Networking',
            items: [
              {
                label: 'Licenses',
                type: 'doc',
                to: 'docs/license',
              },
              {
                label: 'Product Roadmap',
                href: 'https://resources.unity.com/unity-engine-roadmap/multiplayer',
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
                label: 'Releases',
                href: 'https://github.com/Unity-Technologies/com.unity.multiplayer.mlapi/releases/',
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
                label: 'Unity Blog',
                href: 'https://blogs.unity3d.com/',
              },
              {
                label: 'Forums',
                href: 'https://forum.unity.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/buMxnnPvTb',
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
                },
                faq: {
                  keyword: `faq`,
                  infima: true,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>'
                },
                unity: {
                  keyword: `unity`,
                  infima: true,
                  svg: '<svg width="25px" height="24px" viewBox="0 0 507 506" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="unity-logo-black" fill="#757575" fill-rule="nonzero"><path d="M451.009018,0.49163636 L244.575273,54.2842182 L214.027491,106.713018 L152.028945,106.261527 L0.92378182,253.214836 L152.028945,400.135564 L213.994909,399.684073 L244.612509,452.080291 L451.009018,505.872873 L506.305018,305.192145 L474.886836,253.214836 L506.305018,201.237527 L451.009018,0.49163636 Z M218.998545,115.151709 L376.908655,75.6811636 L286.261382,228.387491 L104.943564,228.387491 L218.998545,115.151709 Z M218.998545,391.240727 L104.943564,278.0096 L286.261382,278.0096 L376.908655,430.711273 L218.998545,391.240727 Z M421.098909,405.888582 L330.419055,253.214836 L421.098909,100.475927 L464.884218,253.214836 L421.098909,405.888582 L421.098909,405.888582 Z" id="Fill-1"></path></g></g></svg>'
                }
              }
            },
          },
          blog: {
            postsPerPage: 3,
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
              },
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All our posts',
          },
          theme: {
            customCss: require.resolve('./src/css/unity-custom.scss'),
          },
          sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            trailingSlash: true, //do not change, search requires
          },
        },
      ],
    ],
    plugins: [
      [require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-5V25JL6', // GTM Container ID
      }],
        'plugin-image-zoom',
        'docusaurus-plugin-sass',
        '@saucelabs/theme-github-codeblock',
        'react-iframe'
    ],
  };