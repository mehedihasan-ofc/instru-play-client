import React from 'react';
import { useQuery } from '@tanstack/react-query';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './sliders.css';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Hero = () => {

    const { data: sliders = [] } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sliders');
            return res.json();
        }
    });

    return (
        <div>
            <>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        sliders.map((item, id) => <SwiperSlide
                            style={
                                {
                                    height: "90vh",
                                    borderRadius: "0",
                                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.image}) no-repeat center / cover`
                                }
                            }
                            key={id}

                        >
                            <div>
                                <h1 className="text-white font-secondary font-extrabold uppercase text-3xl md:text-4xl">{item.title}</h1>
                                <p className="w-full font-secondary text-xs md:text-base text-white py-3 md:py-4">{item.description}</p>
                                <button className="border border-gray-100 text-white px-4 py-2 text-sm hover:border-cyan-500 hover:text-cyan-500 transition duration-200">{item.button}</button>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Hero;

/* 
<div>
                                <h1 className="text-white font-primary uppercase text-3xl md:text-5xl">{singleSlider.title}</h1>
                                <p className="w-full font-secondary text-xs md:text-base text-white py-3 md:py-4">{singleSlider.description}</p>

                                <button className="border border-gray-100 text-white px-4 py-2 text-sm hover:border-cyan-500 hover:text-cyan-500 transition duration-200">Explore Now</button>
                            </div>
*/