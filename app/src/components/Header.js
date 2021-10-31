import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Flex } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex p={4} color="white" justifyContent="center">
      <Box>
        {showSidebarButton && (
          <IconButton
            icon={<HamburgerIcon w={8} h={8} />}
            colorScheme="whiteAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Box flex="1" />
    </Flex>
  );
};

Header.propTypes = {
  onShowSidebar: PropTypes.func.isRequired,
  showSidebarButton: PropTypes.bool,
};

export default Header;
