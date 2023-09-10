import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

import { EffectCards, Pagination, Autoplay } from 'swiper';
import { Flex, Text } from '@chakra-ui/react';

function CardsCarousel({ cardsData, title }:any) {
  return (
    <> 
      <Text fontSize={{base: "26px", sm: "30px", lg: "40px"}} color="#fff" fontWeight="semibold" textAlign="center">{title}</Text>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{
          padding: "1rem"
        }}
      >
        {cardsData.map((card: any) => {
          return (
            <SwiperSlide>{card}</SwiperSlide>
          );
        })}
        
      </Swiper>
    </>
  );
}

function QuotesCarousel({ cardsData, title }:any) {
  return (
    <> 
      <Text fontSize={{base: "26px", sm: "30px", lg: "40px"}} color="#fff" fontWeight="semibold" textAlign="center">{title}</Text>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {cardsData.map((card: any) => {
          return (
            <SwiperSlide>{card}</SwiperSlide>
          );
        })}
        
      </Swiper>
    </>
  );
}
export { CardsCarousel, QuotesCarousel };