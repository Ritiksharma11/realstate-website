import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import home1 from '../../public/home1.jpg'
import home2 from '../../public/home2.jpg'
import home3 from '../../public/home3.jpg'

const imgArray = [
    {
        id: 1,
        img: home1,
        quote: 'Find Your Dream Home'
    },
    {
        id: 2,
        img: home2,
        quote: 'Best Real State Company'
    },
    {
        id: 3,
        img: home3,
        quote: 'Affordable Rates with EMI'
    },

]

import "swiper/css";
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[40vh] md:h-[75vh] flex">
                {
                    imgArray.map(({ id, img, quote }) => (
                        <SwiperSlide key={id} className='flex justify-center items-center w-full relative'>
                            <div className='absolute flex justify-center items-center top-40 left-10 right-10 bottom-40 py-12 md:top-40 md:bottom-40 md:left-40 md:right-40 text-2xl md:text-4xl font-semibold bg-white/80'>
                                <h1>{quote}</h1>
                            </div>
                            <img src={img} alt="" className='block w-full h-full object-cover' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Hero