import React, { useState } from "react";
import { Box, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";

import { Header, Sidebar } from "../components";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box id="layout" textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Sidebar
          id="sidebar"
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Flex direction="column" ml={10}>
          <Box ml={!variants?.navigationButton}>
            <Header
              id="header"
              showSidebarButton={variants?.navigationButton}
              onShowSidebar={toggleSidebar}
            />
          </Box>
          <Box id="layout-body" flex="1" h="100%">
            {children}
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
}
