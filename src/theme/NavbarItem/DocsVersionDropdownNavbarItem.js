//Swizzled this component to adopt the changes done in DefaultNavbarItem.js

import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import {
  useVersions,
  useActiveDocContext,
} from '@docusaurus/theme-common';
import {useLatestVersion} from '@docusaurus/plugin-content-docs/client'
import {useDocsPreferredVersion} from '@docusaurus/theme-common';

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);
  const {preferredVersion, savePreferredVersionName} = useDocsPreferredVersion(
    docsPluginId,
  );

  function getItems() {
    const versionLinks = versions.map((version) => {
      const versionDoc =
        activeDocContext?.alternateDocVersions[version.name] ||
        getVersionMainDoc(version);
      return {
        isNavLink: true,
        label: version.label,
        // Modified this (to) to (href)
        href: versionDoc.path, //Added
        isActive: () => version === activeDocContext?.activeVersion,
        onClick: () => {
          savePreferredVersionName(version.name);
        },
      };
    });
    const items = [
      ...dropdownItemsBefore,
      ...versionLinks,
      ...dropdownItemsAfter,
    ];

    if (items.length <= 1) {
      return undefined;
    }

    return items;
  }

  const dropdownVersion =
    activeDocContext.activeVersion ?? preferredVersion ?? latestVersion; // Mobile is handled a bit differently

  const dropdownLabel = mobile ? 'Versions' : dropdownVersion.label;
  const dropdownTo = mobile
    ? undefined
    : getVersionMainDoc(dropdownVersion).path;
  return (
    <DefaultNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      href={dropdownTo}
      items={getItems()}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}