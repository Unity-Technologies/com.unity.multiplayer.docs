//Swizzled this component to adopt the changes done in DefaultNavbarItem.js

import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common';
export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  function getLocaleLabel(locale) {
    return localeConfigs[locale].label;
  }

  const localeItems = locales.map((locale) => {
    // Modified this (to) to (href)
    const href = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    return {
      isNavLink: true,
      label: getLocaleLabel(locale),
      href, // Modified this (to) to (href)
      target: '_self',
      autoAddBaseUrl: false,
      className: locale === currentLocale ? 'dropdown__link--active' : '',
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter]; // Mobile is handled a bit differently

  const dropdownLabel = mobile ? 'Languages' : getLocaleLabel(currentLocale);
  return (
    <DefaultNavbarItem
      {...props}
      // href="#"
      mobile={mobile}
      label={
        <span>
          <IconLanguage
            style={{
              verticalAlign: 'text-bottom',
              marginRight: 5,
            }}
          />
          <span>{dropdownLabel}</span>
        </span>
      }
      items={items}
    />
  );
}