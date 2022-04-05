import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';

import { SidebarNav } from '@/components/ui/organisms';
import { useDrawer } from '@/src/hooks/drawer';

export const Sidebar: React.FC = () => {
  const { colorMode } = useColorMode();
  const { onClose, isOpen } = useDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};
