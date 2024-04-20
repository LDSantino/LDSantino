'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';

import Image from 'next/image';


export default function SwiperAppartamento() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full border-2 h-[280px] sm:w-[650px] sm:h-auto"
      >
        <SwiperSlide>
            <Image src={'/images/a2.jpg'} alt="" className="bject-cover h-[350px] w-full" width={0} height={0} sizes="100vw" priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/images/a4.jpg'} alt="" className="object-cover h-[350px] w-full" priority={true} width={0} height={0} sizes="100vw"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/images/b1.jpg'} alt="" className="object-cover h-[350px] w-full" priority={true} width={0} height={0} sizes="100vw"/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/images/b2.jpg'} alt="" className="object-cover h-[350px] w-full" priority={true} width={0} height={0} sizes="100vw"/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}