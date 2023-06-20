import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import TestimonialsBg from '../../../assets/testimonials.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

const Testimonials = () => {
    return (
        <div className='mb-20'>
            <div className='my-container mb-10'>
                <SectionTitle subHeading='Testimonials' heading='What Our Students Say' />
            </div>

            <div style={{ height: "80vh", borderRadius: "0", background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${TestimonialsBg}) no-repeat center / cover` }}></div>
        </div>
    );
};

export default Testimonials;