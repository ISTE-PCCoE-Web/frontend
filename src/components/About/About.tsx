import React from "react";
import "./about.css";
import { Box, Heading,Text,Image,Flex } from "@chakra-ui/react";

const AboutPage: React.FC = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      color="#fff"
    >
      <Flex flexDirection="column" paddingTop="70px" h="100%" w="75%" >
        <Heading as="h2" padding="50px 0px 0px 2rem" >
          ABOUT US
        </Heading>
        <Text fontSize='24px' padding="50px 0px 0px 2rem" >
          We are a community of passionate students who are committed to advancing technology education and innovation. Our chapter is a part of the larger Indian Society for Technical Education (ISTE), which is a global organization dedicated to empowering educators to transform learning and teaching through the effective use of technology.
        </Text>
      </Flex>
    </Box>
   
  );
};

export default AboutPage;
