import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoutes({ Component, authorize }) {
  const navigate = useNavigate();

  return (
    <>
      {!authorize ? (
        <>
          <Text fontSize="4xl">unauthorized user</Text>
          <Button colorScheme="green" onClick={() => navigate("/")}>
            navigate
          </Button>
        </>
      ) : (
        <Component />
      )}
    </>
  );
}
