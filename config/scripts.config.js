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
    attributes: {},
    innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5V25JL6');"
  }
];

module.exports = headTags;
