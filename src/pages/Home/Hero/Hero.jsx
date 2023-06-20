import React from 'react';
import { useQuery } from '@tanstack/react-query';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './sliders.css';

// import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";
import LoaderSpinner from '../../Shared/LoaderSpinner/LoaderSpinner';

const Hero = () => {

    const { data: sliders = [], isLoading } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch('https://instru-play-server-mehedihasan-ofc.vercel.app/sliders');
            return res.json();
        }
    });

    if (isLoading) {
        return <LoaderSpinner />
    }

    return (
        <div>
            <>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    slidesPerView={1}
                    loop={true}
                    modules={[EffectFade, Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        sliders.map((item, id) => <SwiperSlide
                            style={
                                {
                                    height: "100vh",
                                    borderRadius: "0",
                                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image}) no-repeat center / cover`
                                }
                            }
                            key={id}

                        >
                            <div>
                                <h1 className="text-white font-secondary font-extrabold uppercase text-sm md:text-4xl">{item.title}</h1>
                                <p className="w-3/4 md:w-full mx-auto font-secondary text-xs md:text-base text-white my-3 md:my-5">{item.description}</p>
                                <button className="border border-gray-100 text-white px-5 py-2 text-sm hover:border-pink-500 hover:text-pink-500 transition duration-200">{item.button}</button>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Hero;