import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { SidebarNavSection } from '@/components/ui/molecules';
import { SidebarNavLink } from '@/components/ui/atoms';

export const Sidebar: React.FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <SidebarNavSection title="GERAL">
          <SidebarNavLink icon={RiDashboardLine}>Dashboard</SidebarNavLink>
          <SidebarNavLink icon={RiContactsLine}>Users</SidebarNavLink>
        </SidebarNavSection>
        <SidebarNavSection title="AUTOMATION">
          <SidebarNavLink icon={RiInputMethodLine}>Forms</SidebarNavLink>
          <SidebarNavLink icon={RiGitMergeLine}>Automation</SidebarNavLink>
        </SidebarNavSection>
      </Stack>
    </Box>
  );
};
