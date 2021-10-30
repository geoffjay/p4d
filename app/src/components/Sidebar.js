import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { DiCode } from "react-icons/di";
import { FaCog, FaRegChartBar } from "react-icons/fa";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  Spacer,
} from "@chakra-ui/react";

const SidebarContent = () => (
  <Flex direction="column" h="100%">
    <Box h="40px">
      <Link as={ReactLink} to="/">
        <Icon as={FaRegChartBar} w={6} h={6} color="gray.200" />
      </Link>
    </Box>
    <Box h="40px">
      <Link as={ReactLink} to="/configuration">
        <Icon as={DiCode} w={6} h={6} color="gray.200" />
      </Link>
    </Box>
    <Spacer />
    <Box h="40px">
      <Link as={ReactLink} to="/preferences">
        <Icon as={FaCog} w={6} h={6} color="gray.200" />
      </Link>
    </Box>
  </Flex>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={4}
      pt={20}
      w="60px"
      top={0}
      h="100%"
      bg="gray.800"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>p4d</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
