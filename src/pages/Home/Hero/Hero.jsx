import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import carousel image
import slide1 from '../../../assets/slider/slide1.jpg';
import slide2 from '../../../assets/slider/slide2.jpg';
import slide3 from '../../../assets/slider/slide3.jpg';
import slide4 from '../../../assets/slider/slide4.jpg';
import slide5 from '../../../assets/slider/slide5.jpg';

const Hero = () => {
    return (
        <Carousel>
            <div>
                <img src={slide1} />
            </div>
            <div>
                <img src={slide2} />
            </div>
            <div>
                <img src={slide3} />
            </div>
            <div>
                <img src={slide4} />
            </div>
            <div>
                <img src={slide5} />
            </div>
        </Carousel>
    );
};

export default Hero;