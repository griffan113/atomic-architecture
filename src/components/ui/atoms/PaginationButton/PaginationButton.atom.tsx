import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type PaginationButtonProps = {
  page: number;
  active?: boolean;
} & ButtonProps;

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  active,
  page,
}) => {
  if (active) {
    return (
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
        {page}
      </Button>
    );
  }

  return (
    <Button size="sm" fontSize="xs" width="4">
      {page}
    </Button>
  );
};

PaginationButton.defaultProps = {
  active: false,
};
