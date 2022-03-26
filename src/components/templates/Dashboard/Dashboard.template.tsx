import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Header, Sidebar } from '@/components/ui/organisms';

export const DashboardTemplate: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
};
