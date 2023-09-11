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
import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import {
  About,
  CardsCarousel,
  CellCard,
  ContactBackground,
  EventsCard,
  Navbar,
  QuotesCarousel,
  ScrollDownIndicator,
} from "../components";
import { EventData } from "../data/EventData";
import collage from "../img/collage.jpg";
import { BsArrowRightCircle, BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CellData } from "../data/CellData";
import contactImage from "../img/contactImage.png";
import MainLoader from "../components/Page Loader/MainLoader";
import RahulPatil from "../img/ProfRAP.jpeg";
import Sambare from "../img/ProfSambare.jpg";
import Rajput from "../img/ProfSSR.jpg";
import Quotations from "../img/quotations.png";
import { testimonials } from "../data/Testimonials";

const Home = () => {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], [0.15, 0]);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "30%"]);

  const navigate = useNavigate();

  const [showPageLoader, setShowPageLoader] = React.useState(true);

  React.useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem("hasVisited");

    if (hasVisitedBefore) {
      setShowPageLoader(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
      setTimeout(() => setShowPageLoader(false), 5000);
    }
    // setTimeout(() => setShowPageLoader(false), 5000);
  }, []);

  return (
    <Box
      bg="rgba(0,1,22,1)"
      position="relative"
      ref={ref}
      bgGradient="radial-gradient(at 12% 11%, hsla(237,100%,4%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(240,99%,48%,0.21) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 20%);"
    >
      {showPageLoader ? (
        <Box h={showPageLoader ? "100dvh" : "auto"} overflow="hidden">
          <MainLoader />
        </Box>
      ) : (
        <>
          <Box
            as={motion.div}
            style={{
              y,
              opacity,
              scale,
            }}
            position="absolute"
            top={{ base: "0%", md: "0%" }}
            left={{ base: "0%", md: "0%" }}
            width="100%"
            h="100vh"
            zIndex={0}
            backgroundImage={collage}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
          >
            {/* <Img src={collage} alt="image" w="100%"/> */}
          </Box>
          <Flex
            flexDir="column"
            className="home"
            // height="100vh"
            w="100%"
            padding={{ base: "1.5rem 1.5rem", lg: "1.5rem 2.5rem" }}
            position="relative"
            zIndex={5}
            scrollSnapAlign="start"
            scrollSnapStop="always"
            alignItems="center"
            h="100dvh"
          >
            <Navbar color={"#fff"} />
            <Flex
              flexDir="column"
              mt={{ base: "0.5rem", md: "1rem" }}
              flexGrow={1}
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize={{
                  base: "3.5rem",
                  sm: "4.2rem",
                  md: "5.5rem",
                  lg: "120px",
                }}
                bg="rgba(255, 255, 255, 1)"
                bgClip="text"
                bgBlendMode="transparent"
                fontWeight="bold"
                textAlign="center"
              >
                ISTE&nbsp;PCCoE
              </Text>
              
              <Text
                fontWeight="semibold"
                color="#fff"
                fontSize="2rem"
                textAlign="center"
              >
                Students Chapter
              </Text>
              
              <AnimatedSentences sentences={["Illuminating minds for unfolding excellence", "Diverse Branches, Collective Brilliance", "Crafting Ideas, Engineering Solutions"]}/>
              <Button
                size="lg"
                width={{ base: "auto", md: "20%" }}
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
            <ScrollDownIndicator targetSection={"#about-us"} />
          </Flex>

          {/* About us */}
          <Box id="about-us">
            <About />
          </Box>

          {/* Events */}
          <Box
            px={{ base: "1.5rem", md: "2rem" }}
            py="1rem"
            scrollSnapAlign="start"
            scrollSnapStop="always"
          >
            <Heading
              as="h1"
              color="#fff"
              fontSize={{ base: "50px", sm: "60px", md: "70", lg: "80px" }}
              textAlign="right"
            >
              events.
            </Heading>
            <Text
              fontSize={{ base: "18px", md: "24px" }}
              color="#fff"
              textAlign="right"
            >
              discover the crossroads of innovation as we unite all engineering
              branches in our dynamic community event hub!
            </Text>
            <Flex justifyContent="right">
              <Button
                mr="0"
                fontSize="24px"
                my="1.5rem"
                variant="link"
                bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
                bgClip="text"
                bgBlendMode="transparent"
                onClick={() => navigate("/events")}
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
                    eventLink={card.eventLink}
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
            <Heading
              as="h1"
              color="#fff"
              fontSize={{ base: "50px", sm: "60px", md: "70", lg: "80px" }}
              textAlign="left"
            >
              our cells.
            </Heading>
            <Text
              fontSize={{ base: "18px", md: "24px" }}
              color="#fff"
              textAlign="left"
            >
              Dive into specialized excellence with our diverse cells, each
              offering a unique avenue for your passion and growth.
            </Text>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              templateRows={{
                base: "repeat(200px, 6)",
                md: "repeat(200px, 3)",
              }}
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
                      bgColor={item.color}
                      bg="#fff"
                      width="100%"
                      height="16em"
                      cursor="pointer"
                      mx = 'auto'
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
            <Heading
              as="h1"
              color="#fff"
              fontSize={{ base: "50px", sm: "60px", md: "70", lg: "80px" }}
              textAlign="right"
            >
              our backbone.
            </Heading>
            <Text
              fontSize={{ base: "18px", md: "24px" }}
              color="#fff"
              textAlign="right"
            >
              the three people without whom ISTE PCCoE would be impossible  
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
                onClick={() => navigate("/Team")}
              >
                View Team &nbsp;
                <BsArrowRightCircle color="#fff" />
              </Button>
            </Flex>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="6rem"
              mt="1rem"
              flexWrap="wrap"
            >
              <Stack alignItems="center">
                <Img
                  src={RahulPatil}
                  h={{ base: "135px", md: "175px", lg: "200px" }}
                  w={{ base: "135px", md: "175px", lg: "200px" }}
                  borderRadius="full"
                />
                <Text color="#fff" fontWeight="semibold">Prof. Rahul Patil</Text>
              </Stack>
              <Stack alignItems="center">
                <Img
                  src={Sambare}
                  h={{ base: "135px", md: "175px", lg: "200px" }}
                  w={{ base: "135px", md: "175px", lg: "200px" }}
                  borderRadius="full"
                />
                <Text color="#fff" fontWeight="semibold">Prof. Santosh Sambare</Text>
              </Stack>
              <Stack alignItems="center">
                <Img
                  src={Rajput}
                  h={{ base: "135px", md: "175px", lg: "200px" }}
                  w={{ base: "135px", md: "175px", lg: "200px" }}
                  borderRadius="full"
                />
                <Text color="#fff" fontWeight="semibold">Prof. SatpalSing Rajput</Text>
              </Stack>
            </Box>
          </Box>
          <QuotesCarousel 
            cardsData = {testimonials.map((item) => {
              return (
                <Box width="100%" bg="#ffffff50" h="50%" borderRadius="1rem" backdropFilter="blur(5px)" color="#fff" padding="1.5rem">
                    <Img src={Quotations}/>
                    <Text fontSize={{base:"1.2rem", md: "1.5rem"}}>{item.message}</Text>
                    <Flex alignItems="center" mt="1rem" gap="1.5rem">
                      <Img width={{base: "1.5rem", md: "2rem"}} height={{base: "1.5rem", md: "2rem"}} borderRadius="full" src={item.image} alt="prof-image"/>
                      <Box>
                        <Text fontSize={{base: "1.2rem", md:"1.5rem"}} fontWeight="semibold">{item.name}</Text>
                      </Box>
                    </Flex>
                </Box>
              );
            })}
          />
          {/* Gallery */}
          <Box
            px="2rem"
            py="1rem"
            mt="2rem"
            scrollSnapAlign="start"
            scrollSnapStop="always"
          >
            <Heading
              as="h1"
              color="#fff"
              fontSize={{ base: "50px", sm: "60px", md: "70", lg: "80px" }}
              textAlign="left"
            >
              memories.
            </Heading>
            <Text
              fontSize={{ base: "18px", md: "24px" }}
              color="#fff"
              textAlign="left"
            >
              a glimpse of our activities
            </Text>
            <Box height="200px"></Box>
          </Box>

          {/* Connect */}
          <Box
            display="flex"
            flexDirection={{base: "column", md: "row"}}
            justifyContent="space-between"
            alignItems="center"
            borderTopLeftRadius="2rem"
            borderTopRightRadius="2rem"
            bg="linear-gradient(180deg, rgba(0,82,100,1) 0% ,rgba(0,1,22,1) 25%)"
            p="1rem"
          >
            <Box w={{base: "80%", md: "50%"}} padding="1rem" borderRadius="2rem">
              <Img src={contactImage} alt="img" />
            </Box>
            <Box w={{base: "100%", md: "50%"}} padding={{base: "2rem", md:"1rem"}}>
              <Heading
                as="h1"
                color="#fff"
                fontSize={{ base: "50px", sm: "60px", md: "70", lg: "80px" }}
                textAlign="left"
              >
                connect.
              </Heading>
              <Text fontSize="24px" color="#fff" textAlign="left">
                wanna stay connected with us? visit our socials
              </Text>
              <Flex flexWrap="wrap" alignItems="center" my="1rem" gap="1.5rem">
                <Box color="#fff" padding= "0.5rem" borderRadius= "full" cursor="pointer" _hover={{bg:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}>
                  <a href="https://www.instagram.com/iste_pccoe/"><BsInstagram size="2rem" /></a>
                </Box>
                <Box color="#fff" padding= "0.5rem" borderRadius= "full" cursor="pointer" _hover={{bg:"#FF0000"}}>
                  <a href="https://www.youtube.com" target="_blank"><BsYoutube size="2rem" /></a>
                </Box>
                <Box color="#fff" padding= "0.5rem" borderRadius= "full" cursor="pointer" _hover={{bg:"#0077b5"}}  onClick={() => navigate("https://www.linkedin.com/company/iste-pccoe-student-chapter")}>
                  <a href="https://www.linkedin.com/company/iste-pccoe-student-chapter" target="_blank"><BsLinkedin size="2rem" /></a>
                </Box>
                <Box color="#fff" padding= "0.5rem" borderRadius= "full" cursor="pointer" _hover={{bg:"#fff", color:"#000"}}>
                  <a href="https://twitter.com/iste_pccoe" target="_blank"><BsTwitter size="2rem" /></a>
                </Box>
              </Flex>
              <Text fontSize="23px" color="#fff" textAlign="left" mt="2rem">
                thinking of organizing a session? We can help you
              </Text>
              <Button
                bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
                mt="1.5rem"
                borderRadius="1rem"
                padding="0.5rem 1rem"
                color="rgba(0,1,22,1)"
              >
                Organize Session
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

const AnimatedSentences = ({ sentences }: any) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSentenceIndex((prevIndex: number) =>
      prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  console.log(currentSentenceIndex);

  const sentenceVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 2 }}
        >
          <Text
            fontSize={{ base: "18px", sm: "22px", md: "26px", lg: "30px" }}
            mt={{ base: "1.5rem", md: "0" }}
            textAlign="center"
            bg="linear-gradient(90deg, rgba(43,241,251,1) 25%, rgba(43,241,251,1) 91%)"
            bgClip="text"
            bgBlendMode="transparent"
            fontWeight="semibold"
          >
            {sentences[currentSentenceIndex]}
          </Text>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Home;
