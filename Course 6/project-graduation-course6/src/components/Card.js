import React from "react";
import { Box, Image, Heading, Text, Link, HStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

function Card({ title, description, image, link }) {
  return (
    <Box
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      transition="transform 0.2s ease"
      _hover={{ transform: "translateY(-4px)" }}
    >
      <Image src={image} alt={title} h="200px" w="100%" objectFit="cover" />

      <Box p={6} display="flex" flexDirection="column" gap={2} flex={1}>
        <Heading as="h3" size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm" flex={1}>
          {description}
        </Text>
        <Link
          href={link}
          isExternal
          color="blue.500"
          fontWeight="semibold"
          mt={2}
        >
          <HStack spacing={2}>
            <Text>See more</Text>
            <FaArrowRight />
          </HStack>
        </Link>
      </Box>
    </Box>
  );
}

export default Card;
