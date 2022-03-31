import React from 'react';
import { Box, Stack, Text, BoxProps } from '@chakra-ui/react';

type SidebarNavSectionProps = {
  title: string;
} & BoxProps;

export const SidebarNavSection: React.FC<SidebarNavSectionProps> = ({
  title,
  children,
}) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
