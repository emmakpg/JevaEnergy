// import Swiper core and required modules

"use client"
import { hero } from '@/constants';

import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSwipe = () => {
  return (
    <div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        { hero.map((item,index)=>(

<SwiperSlide key={index}>
<div>
              <h1 className="text-[55px] font-medium text-white leading-10 sm:text-6xl lg:text-7xl pt-16" >
                  {item.title}
                  
              </h1>

              <p className="mt-8 text-base text-slate-100 leading-normal sm:text-xl">{item.text}</p>
            </div>
</SwiperSlide>
        ))
      
}
    </Swiper>
    
    </div>
  );
};

export default HeroSwipe