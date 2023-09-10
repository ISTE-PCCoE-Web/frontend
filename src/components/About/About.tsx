import React from "react";
import "./about.css";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';


// import required modules
// import  {Pagination}  from 'swiper/modules';
import { Pagination } from 'swiper';

const AboutPage: React.FC = () => {
  return (
    <Box
      w="100%"
      color="#fff"
      scrollSnapAlign="start"
      scrollSnapStop="always"
      mb="2rem"
    >
      <Flex flexDirection="column" paddingTop="2rem">
        <Heading as="h2" fontSize={{base: "50px", sm: "60px", md: "70", lg:"80px"}}  padding={{base: "50px 0 0", md: "50px 0px 0px 2rem"}} textAlign={{base: "center", lg: "left"}}>
          who are we?
        </Heading>
        <Text fontSize={{base: "18px", md:"24px"}} padding={{base: "50px 0 0", md: "50px 0px 0px 2rem"}} w={{base: "90%", sm: "80%", lg: "65%"}} mx={{base: "auto", lg: "0"}} textAlign={{base: "center", lg: "left"}}>
          We are a community of passionate students who are committed to
          advancing technology education and innovation. Our chapter is a part
          of the larger Indian Society for Technical Education (ISTE), which is
          a global organization dedicated to empowering educators to transform
          learning and teaching through the effective use of technology.
        </Text>
        <Flex justifyContent={{base: "center", lg: "left"}} pl={{base: "0", md:"2rem"}}>
          <Button
              fontSize="24px"
              my="1rem"
              variant="link"
              bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
              bgClip="text"
              bgBlendMode="transparent"
            >
              Read More&nbsp;
              <BsArrowRightCircle color="#fff" />
          </Button>
        </Flex>
      </Flex>
      
    </Box>
  );
};

export default AboutPage;
