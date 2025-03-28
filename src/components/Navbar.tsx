'use client';

import { Box, Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="gray.900" color="white" px={6} py={4}>
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Żory 3D
        </Text>
        <Text fontSize="sm">Google API Integration</Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
