import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Slider1 from './Slider1';
import Slider2 from './Slider2';

const SpecialOffers = () => {
    return (
        <div className='w-[90vw] md:w[90vw] xl:w-[75vw]  mx-auto space-y-10'>
            <div className="">
                <h1 className='text-4xl font-bold'>Special Offers</h1>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide><Slider1></Slider1></SwiperSlide>
                <SwiperSlide><Slider2></Slider2></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SpecialOffers;

