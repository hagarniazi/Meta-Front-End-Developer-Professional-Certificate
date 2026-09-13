import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" py={6} textAlign="center">
      <Text fontSize="sm">
        © {new Date().getFullYear()} Hagar Khaled Niazi — built with React
      </Text>
    </Box>
  );
}

export default Footer;
