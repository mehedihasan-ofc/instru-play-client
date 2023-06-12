import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";

const SectionTitle = ({ heading, subHeading, description }) => {
    return (
        <div className='text-center'>
            <Fade delay={1e3} cascade damping={1e-1}>
                <p className='text-[#F24080] font-bold text-xl md:text-2xl'>{subHeading}</p>
            </Fade>
            <Zoom>
                <h3 className='text-[#0C4B65] font-extrabold text-2xl md:text-4xl mt-2'>{heading}</h3>
            </Zoom>
        </div>
    );
};

export default SectionTitle;