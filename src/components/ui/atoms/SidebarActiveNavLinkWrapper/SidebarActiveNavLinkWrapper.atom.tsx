import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { cloneElement, ReactElement } from 'react';

type SidebarActiveNavLinkWrapperProps = {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
} & LinkProps;

export const SidebarActiveNavLinkWrapper: React.FC<
  SidebarActiveNavLinkWrapperProps
> = ({ children, shouldMatchExactHref, ...rest }) => {
  const { asPath } = useRouter();
  let isActive = false;

  if ((shouldMatchExactHref && asPath === rest.href) || asPath === rest.as) {
    isActive = true;
  } else if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive && 'pink.300' })}
    </Link>
  );
};

SidebarActiveNavLinkWrapper.defaultProps = {
  shouldMatchExactHref: false,
};
