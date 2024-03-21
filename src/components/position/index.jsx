import { Box, Flex } from "@chakra-ui/react";

const Position = () => {
  return (
    <Box>
      <h1>position</h1>

      <Flex justifyContent={"center"} alignItems={"center"} mt={"40px"}>
        <Box w={"200px"} h={"200px"} bgColor={"yellow"} position={"relative"}>
          box1
          <Box
            w={"150px"}
            h={"150px"}
            bgColor={"red"}
            position={"absolute"}
            top={7}
            left={6}
          >
            box2
            <Box
              w={"100px"}
              h={"100px"}
              bgColor={"green"}
              position={"absolute"}
              top={7}
              left={6}
            >
              box3
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Position;
