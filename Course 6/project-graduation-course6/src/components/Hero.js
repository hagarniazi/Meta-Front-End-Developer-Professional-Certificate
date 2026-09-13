import React from "react";
import { Flex, Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import avatar from "../assets/avatar.jpg";

function Hero() {
  return (
    <Flex
      id="home"
      as="section"
      minH="100vh"
      bg="blue.600"
      color="white"
      align="center"
      justify="center"
      textAlign="center"
      px={4}
    >
      <VStack spacing={8} maxW="520px">
        <Avatar
          src={avatar}
          name="Hagar Khaled Niazi"
          size="2xl"
          border="4px solid white"
        />
        <Heading as="h1" size="xl">
          Hello, I am Hagar!
        </Heading>
        <Text fontSize="2xl" color="blue.100">
          A frontend developer specialised in React
        </Text>
      </VStack>
    </Flex>
  );
}

export default Hero;
