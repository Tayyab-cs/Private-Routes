import { VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <VStack
        spacing={4}
        align="center"
        p={4}
        w={"fit-content"}
        bg="gray.800"
        color="white"
      >
        <Link to="/contact/email" _active={{ color: "blue.500" }}>
          Email
        </Link>
        <Link to="/contact/phone-no" _active={{ color: "blue.500" }}>
          PhoneNo
        </Link>
        <Link to="/contact/address" _active={{ color: "blue.500" }}>
          Address
        </Link>
      </VStack>
      <Outlet />
    </>
  );
}
