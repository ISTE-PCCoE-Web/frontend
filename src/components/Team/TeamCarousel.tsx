import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './teamCarousel.css';

// import required modules
import { Pagination } from 'swiper';

import membersData from "../../utils/members.json"


export default function EventCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Mapping over membersData to render each member using Card */}
        {membersData.map((member) => (
          // Rendering the Card component for each member
          <SwiperSlide><Card member={member}/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}