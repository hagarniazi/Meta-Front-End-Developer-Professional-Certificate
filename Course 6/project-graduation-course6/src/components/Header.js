import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, HStack, Link, Icon } from "@chakra-ui/react";
import socials from "../data/socials";

const HEADER_OFFSET = 80; // keeps the section heading clear of the fixed header

function scrollToId(id) {
  const target = document.getElementById(id);
  if (target) {
    const top =
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Ignore tiny scroll jitters (e.g. momentum scrolling) so the
      // header doesn't flicker.
      if (Math.abs(delta) < 4) {
        return;
      }

      const goingDown = delta > 0;
      const pastThreshold = currentY > 24;

      setShowHeader(!(goingDown && pastThreshold));
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg="gray.900"
      color="white"
      transform={showHeader ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.35s ease-in-out"
    >
      <Flex
        maxW="1100px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={4}
      >
        {/* 5 external social links */}
        <HStack as="nav" aria-label="Social links" spacing={4}>
          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              isExternal
              aria-label={social.label}
              title={social.label}
              color="gray.300"
              _hover={{ color: "white" }}
            >
              <Icon as={social.icon} boxSize={5} />
            </Link>
          ))}
        </HStack>

        {/* 2 internal links */}
        <HStack as="nav" aria-label="Section navigation" spacing={6}>
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("projects");
            }}
            fontWeight="medium"
            _hover={{ color: "blue.300" }}
          >
            Projects
          </Link>
          <Link
            href="#contactme"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contactme");
            }}
            fontWeight="medium"
            _hover={{ color: "blue.300" }}
          >
            Contact Me
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
