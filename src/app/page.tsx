'use client';

import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1">
        <Sidebar />
        <Box flex="1" p={4} overflowY="auto">
          <h1>Witaj w Żory 3D App</h1>
          <p>Tu będzie dynamiczna treść na podstawie wybranych lokalizacji.</p>
        </Box>
      </Flex>
    </Flex>
  );
}
