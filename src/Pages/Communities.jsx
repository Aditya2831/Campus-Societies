import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 const TechSocieties = () => {
  return (
    <>
     <div className="bg-gradient-to-r from-purple-900 via-purple-400 to-purple-900 pb-12">
    <div>
    <h1 className="text-7xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-chakraPetch mb-10">COMMUNITIES</h1>
    </div>

    <Swiper
    effect={'coverflow'}
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      navigation
      pagination={{ clickable: true }}
      
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

      <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

      <SwiperSlide  className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

      <SwiperSlide  className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

      <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>

      <SwiperSlide className="w-64"><img src="https://th.bing.com/th/id/OIG4.PUDHnwXx2jG_BQcYonMl?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" /></SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default TechSocieties;
