//Admonitions component is swizzled (wrapped) to implement custom types and icons. See `src/theme/Admonitions/index.js` for implementations details.
const admonitions = {
  tag: ":::",
  keywords: [
    "contribution", // custom
    "funfact", // custom
    "bestpractice", // custom
    "faq", // custom
    "unity", // custom

    "caution", // built-in
    "note", // built-in
    "tip", // built-in
    "danger", //built-in
    "info", // built-in

    // "secondary", // deprecated, not used
    // "success", // deprecated, not used
    "warning", // deprecated, but in use
    "important", // deprecated, but in use
  ],
};

module.exports = admonitions;
