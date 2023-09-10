import React from "react";


import "./about.css";
import { Footer } from "../components"
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import about_imag from "../img/about-us-1.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper';


const About: React.FC = () => {
    return ( <>
    <div className="Box" >
    <h1 className="heading">About Us</h1>
  <div className="content">
          <p className="para">
            Indian Society for Technical Education (ISTE) is the leading National
            Professional non-profit making Society for the Technical Education in the
            field of engineering and technology registered under the Societies
            Registration Act of 1860. The organization established in the year 1941 with
            the motto of Career Development of Engineering Teachers and Personality
            Development of Students and overall development of our Technical Education
            System.
          </p>
          <p className="para">
            At present, ISTE has a very large and an effective membership base
            consisting of 1,35,525 technical teachers as Life Members, 5 lakh Student
            members, 3052 Institutional Members (including IITs, IISc., NITs and other
            leading technical institutions), 1453 faculty chapters and 1649 students’
            chapters and 19 Sections at State level throughout the country. The major
            objective of the ISTE is to provide quality training programmes to the
            teachers and the administrators of technical institutions. This is enabling
            to update their knowledge and skills in their fields and lead to the
            production and development of top-quality professional engineers and
            technicians needed by the industry and other organisations.
          </p>
        </div>
        <div className="abtimg">
          <img src={about_imag} alt="image"  />
        </div>
        <h1 className="subheading">Our Image Gallery</h1>
         <div className="image-gallery">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 80,
          
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      
      </Swiper>
      </div>     
      </div>
      <Footer/>
    </>);
};

export default About;