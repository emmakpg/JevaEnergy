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
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
     
    
    >
        { hero.map((item,index)=>(

<SwiperSlide key={index}>
<div>
              <h1 className="lg:text-[55px] text-4xl font-medium text-white leading-10 xs:text-[40px] pt-16" >
                  {item.title}
                  
              </h1>

              <p className="mt-8 xs:mt-3 text-base text-slate-100 leading-normal sm:text-xl">{item.text}</p>
            </div>
</SwiperSlide>
        ))
      
}
    </Swiper>
    
    </div>
  );
};

export default HeroSwipe