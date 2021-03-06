import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

const Preferences = () => (
  <Box bg="gray.900" w="100%" p={4} color="white">
    <ColorModeSwitcher justifySelf="flex-end" />
    <Text>Preferences Page</Text>
  </Box>
);

export default Preferences;
