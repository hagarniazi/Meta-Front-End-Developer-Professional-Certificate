import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import projects from "../data/projects";
import Card from "./Card";

function Projects() {
  return (
    <Box
      id="projects"
      as="section"
      bg="green.500"
      py={20}
      px={4}
      scrollMarginTop="80px"
    >
      <Heading as="h2" size="xl" color="white" textAlign="center" mb={12}>
        Projects
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        maxW="900px"
        mx="auto"
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
