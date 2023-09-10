//@ts-nocheck

import { ReactNode } from "react";


import "./about.css";
import { Footer } from "../components"
import { Box, Heading, Text, Image, Flex, Button, SimpleGrid, Stack, Container } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import about_image from "../img/ISTELogo/ISTELogo.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper';


export default function About() {
  return (
    <div className="Box" >
      <section className="about-us">
        <div className="about">
          <img src={about_image} className="logo" />
          <div className="text">
            <h2>About Us</h2>
            <h5>WE ARE HERE TO <span>BRING CHANGE</span></h5>
            <p>Indian Society for Technical Education (ISTE) is the leading National
              Professional non-profit making Society for the Technical Education in the
              field of engineering and technology registered under the Societies
              Registration Act of 1860. The organization established in the year 1941 with
              the motto of Career Development of Engineering Teachers and Personality
              Development of Students and overall development of our Technical Education
              System.</p>
            <div className="data">
              <a href="#" className="hire">ISTE Official</a>
            </div>
          </div>
        </div>
      </section>
      <Box width={'100%'}>
        <Box p={{ base: '0 1em', lg: '0 10em' }}>
          <Stack direction={{ base: 'row', lg: 'column' }}>
            <Stack
              flex={1}
              color={'gray.100'}
              justify={{ lg: 'center' }}
              py={{ base: 4, md: 10, lg: 10 }}
            >
              <Box
                mb={{ base: 8, md: 10 }}
              >
                <Text
                  fontFamily={'heading'}
                  fontWeight={700}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={'xl'}
                  color={'gray.100'}>
                  Our Mission
                </Text>
                <Heading color={'white'} mb={5} fontSize={{ base: 'xl', md: '5xl' }}>
                  Empowering India's Tech Education
                </Heading>
                <Text fontSize={{ base: 'l', md: '20px' }} color={'gray.100'}>
                  By fostering collaboration among educators, 
                  facilitating knowledge exchange, and promoting innovative teaching methods, 
                  ultimately elevating the standard of technical education across India.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 10, lg: 10 }}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                      {stat.title}
                    </Text>
                    <Text fontSize={'xl'} color={'gray.400'}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}


const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: '100+',
    content: (
      <>
        <StatsText>Colleges covered</StatsText> in order to spread the technical expertise 
        among future engineers.
      </>
    ),
  },
  {
    title: '47+',
    content: (
      <>
        <StatsText>Years of experience</StatsText> with a solid foundation for serving Indian 
        Institutions. 
      </>
    ),
  },
  {
    title: '138',
    content: (
      <>
        <StatsText>Members</StatsText> trying their best to implement the vision of ISTE through due diligence
        and hardwork.
      </>
    ),
  },
  {
    title: '25000+',
    content: (
      <>
        <StatsText>Members</StatsText> currently serving their institutions under the guidance and supervision of ISTE.
      </>
    ),
  },
]