import React from "react";
import "./about.css";
import { Box, Heading,Text,Image,Flex } from "@chakra-ui/react";

const AboutPage: React.FC = () => {
  return (
    <Box
    background="#000"
      w="100%"
      h="80vh"
    >
      {/* <Box w="75%">
      
      </Box> */}
      <Flex flexDirection="column" paddingTop="70px" h="100%" w="75%" >
        <Heading as="h2" padding="50px 0px 0px 90px">
          ABOUT US
        </Heading>
        <Text fontSize='30px' padding="50px 0px 0px 90px">
          We are a community of passionate students who are committed to advancing technology education and innovation. Our chapter is a part of the larger Indian Society for Technical Education (ISTE), which is a global organization dedicated to empowering educators to transform learning and teaching through the effective use of technology.
        </Text>
      </Flex>
    </Box>
   
  );
};

export default AboutPage;