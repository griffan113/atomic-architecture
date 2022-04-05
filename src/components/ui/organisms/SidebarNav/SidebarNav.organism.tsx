import React from 'react';
import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { SidebarNavSection } from '@/components/ui/molecules';
import { SidebarNavLink } from '@/components/ui/atoms';
import { routesPaths } from '@/src/routes/routesPaths';

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <SidebarNavSection title="GERAL">
        <SidebarNavLink href={routesPaths.DASHBOARD} icon={RiDashboardLine}>
          Dashboard
        </SidebarNavLink>
        <SidebarNavLink href={routesPaths.USERS.MAIN} icon={RiContactsLine}>
          Users
        </SidebarNavLink>
      </SidebarNavSection>
      <SidebarNavSection title="AUTOMATION">
        <SidebarNavLink href="/forms" icon={RiInputMethodLine}>
          Forms
        </SidebarNavLink>
        <SidebarNavLink href="/automation" icon={RiGitMergeLine}>
          Automation
        </SidebarNavLink>
      </SidebarNavSection>
    </Stack>
  );
};
