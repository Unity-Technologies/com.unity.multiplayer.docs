import React from "react";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

// https://docusaurus.io/docs/next/markdown-features/assets#themed-images

const ImageSwitcher = ({ lightImageSrc, darkImageSrc, alt }) => {
  return (
    <ThemedImage
      alt={alt}
      sources={{
        light: useBaseUrl(`/img/${lightImageSrc}`),
        dark: useBaseUrl(`/img/${darkImageSrc}`),
      }}
    />
  );
};

export default ImageSwitcher;
