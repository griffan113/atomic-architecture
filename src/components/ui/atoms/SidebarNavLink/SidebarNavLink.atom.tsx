import React, { ElementType } from 'react';
import { Icon, LinkProps, Text, Link as ChakraLink } from '@chakra-ui/react';

import { SidebarActiveNavLinkWrapper } from '@/components/ui/atoms';

type SidebarNavLinkProps = {
  icon: ElementType;
  href: string;
} & LinkProps;

export const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({
  icon,
  children,
  href,
  ...rest
}) => {
  return (
    <SidebarActiveNavLinkWrapper passHref href={href}>
      <ChakraLink {...rest} display="flex">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </SidebarActiveNavLinkWrapper>
  );
};
