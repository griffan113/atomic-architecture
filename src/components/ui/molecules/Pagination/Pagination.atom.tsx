import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

import { PaginationButton } from '@/components/ui/atoms';

export const Pagination: React.FC = () => {
  return (
    <Stack
      spacing="6"
      mt="8"
      direction="row"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButton page={1} active />
        <PaginationButton page={2} />
        <PaginationButton page={3} />
        <PaginationButton page={4} />
      </Stack>
    </Stack>
  );
};
