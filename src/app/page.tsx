'use client';

import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import MapView from '@/components/MapView';

export default function HomePage() {
  return (
    <Flex h="100vh">
      <Sidebar />
      <Box flex="1" position="relative">
        <MapView />
      </Box>
    </Flex>
  );
}
