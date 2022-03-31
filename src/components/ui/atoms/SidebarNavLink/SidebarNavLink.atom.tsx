import React, { ElementType } from 'react';
import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';

type SidebarNavLinkProps = {
  icon: ElementType;
} & LinkProps;

export const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({
  icon,
  children,
  ...rest
}) => {
  return (
    <Link {...rest} display="flex">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};
