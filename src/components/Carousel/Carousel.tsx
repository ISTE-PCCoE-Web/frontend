import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

import { EffectCards } from 'swiper';

function CardsCarousel({ cardsData }:any) {
  return (
    <>
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
export { CardsCarousel }