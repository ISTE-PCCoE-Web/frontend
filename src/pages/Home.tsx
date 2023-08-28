import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { About, Navbar } from "../components";
import logo from "../img/ISTELogo.png";

const Home = () => {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Events", link: "/events" },
    { name: "Teams", link: "/team" },
    { name: "Feedback", link: "/feedback" },
  ];

  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  let y = useTransform(scrollYProgress, [0,1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0,1], [0.1,0]);
  let scale = useTransform(scrollYProgress, [0,1],["100%", "50%"]);


  return (
    <Box
      bg="linear-gradient(180deg, rgba(0,82,100,1) 0% ,rgba(0,1,22,1) 25%)"
      position="relative"
      ref={ref}
    >
      <motion.div
        style={{
          y, 
          opacity, 
          scale, 
          position: "absolute",
          top:"-100px",
          left:"20%",
          width:"70%",
          zIndex: 0
        }}
      >
        <Img
          src={logo}
          alt="image"
          w="100%"
        />
      </motion.div>
      <Flex
        flexDir="column"
        className="home"
        height="100vh"
        w="100%"
        padding="1.5rem 2.5rem"
        position="relative"
        zIndex={5}
      >
        <Navbar navLinks={navItems} color={"#fff"} />
        <Flex flexDir="column" flexGrow={1} justifyContent="center" pl="4rem">
          <Text fontSize="40px" color="#fff" fontWeight="semibold">
            PCCoE's
          </Text>
          <Text
            fontSize="150px"
            bg="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(43,241,251,1) 25%, rgba(0,145,255,1) 59%, rgba(43,241,251,1) 91%)"
            bgClip="text"
            bgBlendMode="transparent"
            fontWeight="bold"
          >
            ISTE{" "}
            <Box as="span" fontSize="80px" fontWeight="medium">
              Chapter
            </Box>
          </Text>
          <Text fontSize="30px" color="#fff" fontWeight="medium">
            Diverse Branches, Collective Brilliance
          </Text>
          <Button size="lg" width="20%" padding="0.5rem 0" mt="1rem">
            View Events
          </Button>
        </Flex>
      </Flex>
      <About />
    </Box>
  );
};

export default Home;
