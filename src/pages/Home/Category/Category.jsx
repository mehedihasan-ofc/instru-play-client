import React from 'react';
import { FaGuitar, FaHouseUser, FaRocketchat, FaUsers } from 'react-icons/fa';

const Category = () => {
    return (
        <div className='my-container flex flex-col md:flex-row justify-between items-center gap-7 my-10'>

            <div className='w-full text-center border shadow-md px-7 py-10 transform transition-transform hover:scale-105 cursor-pointer duration-200'>
                <FaHouseUser className='w-full text-3xl text-[#F24080] mb-3' />
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Individually</h4>
            </div>
            <div className='w-full text-center border shadow-md px-7 py-10 transform transition-transform hover:scale-105 cursor-pointer duration-200'>
                <FaGuitar className='w-full text-3xl text-[#F24080] mb-3' />
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Free Equipment</h4>
            </div>
            <div className='w-full text-center border shadow-md px-7 py-10 transform transition-transform hover:scale-105 cursor-pointer duration-200'>
                <FaUsers className='w-full text-3xl text-[#F24080] mb-3' />
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Expert Instructor</h4>
            </div>
            <div className='w-full text-center border shadow-md px-7 py-10 transform transition-transform hover:scale-105 cursor-pointer duration-200'>
                <FaRocketchat className='w-full text-3xl text-[#F24080] mb-3' />
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Care and Support</h4>
            </div>

        </div>
    );
};

export default Category;