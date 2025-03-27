'use client';

import { Box, Flex, Icon, Text, VStack, Collapse } from '@chakra-ui/react';
import { FiHome, FiSettings, FiInfo, FiChevronDown, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

const Sidebar = () => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w={{ base: 'full', md: '60' }}
      h="full"
      bg="gray.800"
      color="white"
      p={4}
    >
      <VStack align="start" spacing={4}>
        <Flex align="center" gap={2} cursor="pointer">
          <Icon as={FiHome} />
          <Text>Strona główna</Text>
        </Flex>

        <Flex
          align="center"
          gap={2}
          cursor="pointer"
          onClick={() => setShowLocations(!showLocations)}
        >
          <Icon as={FiMapPin} />
          <Text>Lokalizacje</Text>
          <Icon
            as={FiChevronDown}
            ml="auto"
            transform={showLocations ? 'rotate(180deg)' : 'rotate(0deg)'}
          />
        </Flex>
        <Collapse in={showLocations} animateOpacity>
          <VStack align="start" pl={6} mt={2} spacing={2}>
            <Text cursor="pointer">🍽 Restauracja</Text>
            <Text cursor="pointer">🦷 Dentysta</Text>
            <Text cursor="pointer">🏨 Hotel</Text>
          </VStack>
        </Collapse>

        <Flex align="center" gap={2} cursor="pointer">
          <Icon as={FiSettings} />
          <Text>Ustawienia</Text>
        </Flex>
        <Flex align="center" gap={2} cursor="pointer">
          <Icon as={FiInfo} />
          <Text>Informacje</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Sidebar;
