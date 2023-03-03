/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Swizzled this component since Docusaurus doesn't support versioning and dropdown both together (till yet)
 * Otherwise while viewing an old versioned doc, the dropdown will always link to the latest version irrespective of the activeVersion
 * Since the dropdown provided by Docusaurus in default are only static hyperlinks
 */
import React, {useState, useRef, useEffect} from 'react';
import {useActiveVersion, useLatestVersion} from '@docusaurus/theme-common'; //version links normal drop-down
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {isSamePath} from '@docusaurus/theme-common';

function NavLink({
  activeBasePath,
  activeBaseRegex,
  docsPluginId, //version links normal drop-down
  to,
  href,
  label,
  activeClassName = 'navbar__link--active',
  prependBaseUrlToHref,
  ...props
}) {
  const latestVersion = useLatestVersion(docsPluginId); //version links normal drop-down
  const activeVersion = useActiveVersion(docsPluginId); //version links normal drop-down
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
          isNavLink: true,
          activeClassName,
          // Modified this (to)
          //`activeVersion` becomes undefined on the home page
          //Since the `stable/${toUrl}` is served as route
          //otherwise `activeVersion.path/${toUrl}`
          to: activeVersion ? activeVersion.path + toUrl : latestVersion.path + toUrl, //version links normal drop-down
          ...(activeBasePath || activeBaseRegex
            ? {
                isActive: (_match, location) =>
                  activeBaseRegex
                    ? new RegExp(activeBaseRegex).test(location.pathname)
                    : location.pathname.startsWith(activeBaseUrl),
              }
            : null),
          })}
      {...props}>
      {label}
    </Link>
  );
}

function NavItemDesktop({items, position, className, ...props}) {
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }

      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  const navLinkClassNames = (extraClassName, isDropdownItem = false) =>
    clsx(
      {
        'navbar__item navbar__link': !isDropdownItem,
        dropdown__link: isDropdownItem,
      },
      extraClassName,
    );

  if (!items) {
    return <NavLink className={navLinkClassNames(className)} {...props} />;
  }

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--left': position === 'left',
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}>
      <NavLink
        className={navLinkClassNames(className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavLink>
      <ul ref={dropdownMenuRef} className="dropdown__menu">
        {items.map(({className: childItemClassName, ...childItemProps}, i) => (
          <li key={i}>
            <NavLink
              onKeyDown={(e) => {
                if (i === items.length - 1 && e.key === 'Tab') {
                  e.preventDefault();
                  setShowDropdown(false);
                  const nextNavbarItem = dropdownRef.current.nextElementSibling;

                  if (nextNavbarItem) {
                    nextNavbarItem.focus();
                  }
                }
              }}
              activeClassName="dropdown__link--active"
              className={navLinkClassNames(childItemClassName, true)}
              {...childItemProps}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavItemMobile({
  items,
  className,
  position: _position,
  // Need to destructure position from props so that it doesn't get passed on.
  ...props
}) {
  const menuListRef = useRef(null);
  const {pathname} = useLocation();
  const [collapsed, setCollapsed] = useState(
    () => !items?.some((item) => isSamePath(item.to, pathname)) ?? true,
  );

  const navLinkClassNames = (extraClassName, isSubList = false) =>
    clsx(
      'menu__link',
      {
        'menu__link--sublist': isSubList,
      },
      extraClassName,
    );

  if (!items) {
    return (
      <li className="menu__list-item">
        <NavLink className={navLinkClassNames(className)} {...props} />
      </li>
    );
  }

  const menuListHeight = menuListRef.current?.scrollHeight
    ? `${menuListRef.current?.scrollHeight}px`
    : undefined;
  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}>
      <NavLink
        role="button"
        className={navLinkClassNames(className, true)}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          setCollapsed((state) => !state);
        }}>
        {props.children ?? props.label}
      </NavLink>
      <ul
        className="menu__list"
        ref={menuListRef}
        style={{
          height: !collapsed ? menuListHeight : undefined,
        }}>
        {items.map(({className: childItemClassName, ...childItemProps}, i) => (
          <li className="menu__list-item" key={i}>
            <NavLink
              activeClassName="menu__link--active"
              className={navLinkClassNames(childItemClassName)}
              {...childItemProps}
              onClick={props.onClick}
            />
          </li>
        ))}
      </ul>
    </li>
  );
}

function DefaultNavbarItem({mobile = false, ...props}) {
  const Comp = mobile ? NavItemMobile : NavItemDesktop;
  return <Comp {...props} />;
}

export default DefaultNavbarItem;
