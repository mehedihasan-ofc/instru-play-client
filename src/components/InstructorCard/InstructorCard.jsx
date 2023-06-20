import React from 'react';
import { FaFacebookF, FaInstagram, FaRegBookmark, FaTwitter, FaUserCheck } from 'react-icons/fa';

const InstructorCard = ({ singleInstructor }) => {

    const { image, name, students } = singleInstructor;

    return (

        <div className="card relative w-full mb-5 md:mb-0 md:w-96 bg-base-100 border shadow-sm">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center py-4 px-5">
                <h2 className="card-title font-secondary font-extrabold">{name}</h2>
                <div className='flex items-center gap-2'>
                    <FaUserCheck className='text-[#FF7703]' />
                    <p><span className='font-medium'>{students}+</span> satisfied students</p>
                </div>
                <div className='divider my-0'></div>
                <div className="card-actions">
                    <span className='bg-[#FF7703] p-2 text-white rounded-full cursor-pointer'><FaFacebookF /></span>
                    <span className='bg-[#FF7703] p-2 text-white rounded-full cursor-pointer'><FaTwitter /></span>
                    <span className='bg-[#FF7703] p-2 text-white rounded-full cursor-pointer'><FaInstagram /></span>
                </div>
            </div>

            <span className='absolute text-[#FF7703] top-5 text-2xl right-5'><FaRegBookmark /></span>
        </div>
    );
};

export default InstructorCard;