import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type HeaderProfileInfoProps = {
  showProfileData: boolean;
};

export const HeaderProfileInfo: React.FC<HeaderProfileInfoProps> = ({
  showProfileData,
}) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eliel M. Gaspar</Text>
          <Text color="gray.300" fontSize="small">
            eliel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Eliel"
        src="https://github.com/griffan113.png"
        bgColor="white"
      />
    </Flex>
  );
};

HeaderProfileInfo.defaultProps = {
  showProfileData: true,
};
