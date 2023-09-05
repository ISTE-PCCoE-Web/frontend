import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  About,
  CardsCarousel,
  CellCard,
  ContactBackground,
  EventsCard,
  Navbar,
} from "../components";
import { EventData } from "../data/EventData";
import logo from "../img/ISTELogo/ISTELogo.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CellData } from "../data/CellData";
import contactImage from "../img/contactImage.png";

const Home = () => {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Teams", link: "/team" },
    { name: "Feedback", link: "/feedback" },
  ];

  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], [0.08, 0]);
  let scale = useTransform(scrollYProgress, [0, 1], ["80%", "60%"]);

  const navigate = useNavigate();

  return (
    <Box
      bg="linear-gradient(180deg, rgba(0,82,100,1) 0% ,rgba(0,1,22,1) 10%)"
      position="relative"
      ref={ref}
    >
      <Box 
        as={motion.div}
        style={{
          y,
          opacity,
          scale,
        }}
          position= "absolute"
          top= {{base: "2%", md:"0%"}}
          left= {{base: "0%", md: "20%"}}
          width= {{base: "100%", sm: "70%"}}
          zIndex= {0}
      >
        <Img src={logo} alt="image" w="100%" />
      </Box>
      <Flex
        flexDir="column"
        className="home"
        // height="100vh"
        w="100%"
        padding={{base: "1.5rem 1.5rem", lg:"1.5rem 2.5rem"}}
        position="relative"
        zIndex={5}
        scrollSnapAlign="start"
        scrollSnapStop="always"
      >
        <Navbar navLinks={navItems} color={"#fff"} />
        <Flex flexDir="column" mt={{base: "0.5rem", md: "1.5rem"}} flexGrow={1} justifyContent={{base: "center", md: "left"}} alignItems={{base: "center", md: "flex-start"}} pl={{base:"1.5rem", md: "2rem", lg: "4rem"}}>
          <Text fontSize={{base: "30px", md: "40px"}} color="#fff" fontWeight="semibold">
            PCCoE's
          </Text>
          <Flex flexDir={"row"} alignItems="baseline" flexWrap="wrap" justifyContent={{base: "center", md: "left"}}>
          <Text
            fontSize={{base: "4.5rem", sm: "5.2rem", md: "6.5rem", lg: "150px"}}
            bg="linear-gradient(90deg, rgba(255, 255, 255, 1) 45%, rgba(43,241,251,1) 91%)"
            bgClip="text"
            bgBlendMode="transparent"
            fontWeight="bold"
          >
            ISTE&nbsp;
          </Text>
          <Text fontSize={{base: "2.5rem", sm: "3.5rem", md: "4rem", lg: "5rem"}} lineHeight={{base: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem"}} bg="rgba(43,241,251,1)"
            bgClip="text"
            bgBlendMode="transparent" fontWeight="medium">
              Chapter
            </Text>
          </Flex>
          <Text fontSize={{base: "18px", sm: "22px" ,md: "26px", lg:"30px"}} mt={{base: "1.5rem", md: "0"}} textAlign={{base: "center", md: "left"}} color="#fff" fontWeight="medium">
            Diverse Branches, Collective Brilliance
          </Text>
          <Button
            size="lg"
            width={{base: "auto", md : "20%"}}
            padding="0.5rem 0.5rem"
            mt="1rem"
            bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
            _hover={{
              bg: "linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)",
            }}
            borderRadius="1rem"
            onClick={() => navigate("/events")}
          >
            View Events
          </Button>
        </Flex>
      </Flex>

      {/* About us */}
      <About />

      {/* Events */}
      <Box px="2rem" py="1rem" scrollSnapAlign="start" scrollSnapStop="always">
        <Heading as="h1" color="#fff" fontSize="80px" textAlign="right">
          events.
        </Heading>
        <Text fontSize="24px" color="#fff" textAlign="right">
          discover the crossroads of innovation as we unite all engineering
          branches in our dynamic community event hub!
        </Text>
        <Flex justifyContent="right">
          <Button
            mr="0"
            fontSize="24px"
            my="1rem"
            variant="link"
            bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
            bgClip="text"
            bgBlendMode="transparent"
          >
            View Past Events&nbsp;
            <BsArrowRightCircle color="#fff" />
          </Button>
        </Flex>
        <CardsCarousel
          cardsData={EventData.map((card) => {
            return (
              <EventsCard
                img={card.img}
                eventTitle={card.eventTitle}
                eventDescription={card.eventDescription}
                eventType={card.eventType}
              />
            );
          })}
          title="upcoming events"
        />
      </Box>

      {/* cells */}
      <Box
        px="2rem"
        py="1rem"
        my="1rem"
        scrollSnapAlign="start"
        scrollSnapStop="always"
      >
        <Heading as="h1" color="#fff" fontSize="80px" textAlign="left">
          our cells.
        </Heading>
        <Text fontSize="24px" color="#fff" textAlign="left">
          Dive into specialized excellence with our diverse cells, each offering
          a unique avenue for your passion and growth.
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          templateRows={{ base: "repeat(200px, 6)", md: "repeat(200px, 3)" }}
          gap="1rem 1rem"
          my="2rem"
          width="80%"
          mx="auto"
        >
          {CellData.map((item: any) => {
            return (
              <GridItem>
                <CellCard
                  cellIcon={item.cellIcon}
                  cellInfo={item.cellInfo}
                  cellName={item.cellName}
                  bg="#fff"
                  width="100%"
                  height="100%"
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>

      {/* team */}
      <Box
        px="2rem"
        py="1rem"
        my="1rem"
        scrollSnapAlign="start"
        scrollSnapStop="always"
      >
        <Heading as="h1" color="#fff" fontSize="80px" textAlign="right">
          our backbone.
        </Heading>
        <Text fontSize="24px" color="#fff" textAlign="right">
          The team of ISTE - the backbone of the Chapter
        </Text>
        <Flex justifyContent="right">
          <Button
            mr="0"
            fontSize="24px"
            my="1rem"
            variant="link"
            bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
            bgClip="text"
            bgBlendMode="transparent"
          >
            View Team&nbsp;
            <BsArrowRightCircle color="#fff" />
          </Button>
        </Flex>
        <Box
          height="200px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="1.5rem"
          mt="1rem"
        >
          <Stack alignItems="center">
            <Img src={CellData[0].cellIcon} h="200px" borderRadius="full" />
            <Text color="#fff">Name 1</Text>
          </Stack>
          <Stack alignItems="center">
            <Img src={CellData[0].cellIcon} h="200px" borderRadius="full" />
            <Text color="#fff">Name 1</Text>
          </Stack>
          <Stack alignItems="center">
            <Img src={CellData[0].cellIcon} h="200px" borderRadius="full" />
            <Text color="#fff">Name 1</Text>
          </Stack>
        </Box>
      </Box>

      {/* Gallery */}
      <Box
        px="2rem"
        py="1rem"
        mt="2rem"
        scrollSnapAlign="start"
        scrollSnapStop="always"
      >
        <Heading as="h1" color="#fff" fontSize="80px" textAlign="left">
          memory.
        </Heading>
        <Text fontSize="24px" color="#fff" textAlign="left">
          a glimpse of our activities
        </Text>
        <Box height="200px"></Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" borderTopLeftRadius="2rem" borderTopRightRadius="2rem" bg="linear-gradient(180deg, rgba(0,82,100,1) 0% ,rgba(0,1,22,1) 25%)" p="1rem">
          <Box w="50%" padding="1rem" borderRadius="2rem">
            <Img src={contactImage} alt="img"/>
          </Box>
          <Box w="50%">
            <Heading as="h1" color="#fff" fontSize="80px" textAlign="left">
              connect.
            </Heading>
            <Text fontSize="24px" color="#fff" textAlign="left">
              wanna stay connected us? visit our socials 
            </Text>
            <Text fontSize="23px" color="#fff" textAlign="left" mt="2rem">thinking of organizing a session? We can help you</Text>
            <Button bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)" mt="1.5rem" borderRadius="1rem" padding="0.5rem 1rem" color="rgba(0,1,22,1)">Organize Session</Button>
          </Box>
      </Box>
    </Box>
  );
};

export default Home;
