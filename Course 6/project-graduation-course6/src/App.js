import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <Box overflowX="hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
