import React from 'react';

const SectionTitle = ({ heading, subHeading, description }) => {
    return (
        <div className='text-center'>
            <p className='text-[#C25934] font-bold text-2xl'>{subHeading}</p>
            <h3 className='text-[#0C4B65] font-extrabold text-4xl mt-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;