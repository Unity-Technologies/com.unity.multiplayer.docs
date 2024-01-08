const headTags = [
  {
    tagName: 'script',
    attributes: {
      src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
      async: "true",
      "data-domain-script": "6e91be4c-3145-4ea2-aa64-89d716064836",
      "data-dLayer-ignore": "true",
      "data-document-language": "true",
    },
  },

  {
    tagName: 'script',
    attributes: {},
    innerHTML: "function OptanonWrapper() {}",
  },

  {
    tagName: 'script',
    attributes: {
      src: 'https://www.googletagmanager.com/gtm.js?id=GTM-5V25JL6',
      async: "true",
    },
  }
];

module.exports = headTags;
