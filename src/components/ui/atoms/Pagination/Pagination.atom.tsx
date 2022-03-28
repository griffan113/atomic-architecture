import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

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
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: '  pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button size="sm" fontSize="xs" width="4">
          2
        </Button>
        <Button size="sm" fontSize="xs" width="4">
          3
        </Button>
        <Button size="sm" fontSize="xs" width="4">
          4
        </Button>
      </Stack>
    </Stack>
  );
};
