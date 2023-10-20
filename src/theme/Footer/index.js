/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  ...props
}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true
  });
  return <Link className="footer__link-item" {...href ? {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: prependBaseUrlToHref ? normalizedHref : href
  } : {
    to: toUrl
  }} {...props}>
      {label}
    </Link>;
}

const FooterLogo = ({
  url,
  alt
}) => <img className="footer__logo" alt={alt} src={url} />;

function Footer() {
  const {
    footer
  } = useThemeConfig();
  const {
    copyright,
    links = [],
    logo = {}
  } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return <footer className={clsx('footer', {
    'footer--dark': footer.style === 'dark'
  })}>
      <div className="container">
        {links && links.length > 0 && <div className="row footer__links">
            {links.map((linkItem, i) => <div key={i} className="col footer__col">
                {linkItem.title != null ? <h4 className="footer__title">{linkItem.title}</h4> : null}
                {linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? <ul className={styles.footer__items}>
                    {linkItem.items.map((item, key) => item.html ? <li key={key} className="footer__item" // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: item.html
            }} /> : <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>)}
                  </ul> : null}
              </div>)}
          </div>}
        {(logo || copyright) && <div className="footer__bottom text--center">
            {logo && logo.src && <div className="margin-bottom--sm">
                {logo.href ? <a href={logo.href} target="_blank" rel="noopener noreferrer" className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a> : <FooterLogo alt={logo.alt} url={logoUrl} />}
              </div>}
            {copyright ? <div className="footer__copyright" 
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: copyright
        }} /> : null}
        <div className="footer__legal" >
          <ul>
            <li><a href="https://unity.com/legal">Legal</a></li>
            <li><a href="https://unity.com/legal/privacy-policy">Privacy Policy </a></li>
            <li><a href="https://unity.com/legal/cookie-policy">Cookies</a></li>
            <li><a href="https://unity.com/legal/do-not-sell-my-personal-information">Do Not Sell or Share My Personal Information</a></li>
            <li><a href="javascript:void(0);" id="ot-sdk-btn" class="ot-sdk-show-settings">Your Privacy Choices (Cookie Settings)</a></li>
         </ul>
        </div>
        <div className="footer__details" >"Unity", Unity logos, and other Unity trademarks are trademarks or registered trademarks of Unity Technologies or its affiliates in the U.S. and elsewhere (<a href="https://unity.com/legal/trademarks">more info here</a>). Other names or brands are trademarks of their respective owners.</div>
        </div>}
      </div>
      <script type="text/javascript">
        function OptanonWrapper() { }
      </script>
    </footer>;
}

export default Footer;
