import { VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <VStack spacing={4} align="center" p={4} bg="gray.800" color="white">
      <Link to="/" _active={{ color: "blue.500" }}>
        Home
      </Link>
      <Link to="/content" _active={{ color: "blue.500" }}>
        Content
      </Link>
      <Link to="/about" _active={{ color: "blue.500" }}>
        About
      </Link>
      <Link to="/contact" _active={{ color: "blue.500" }}>
        Contact
      </Link>
    </VStack>
  );
}
