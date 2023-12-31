import React from 'react';
import { FaRegStar, FaUserFriends, FaRegMoneyBillAlt } from 'react-icons/fa';

const ClassCard = ({ singleClass }) => {

    const { image, className, instructorName, price, students } = singleClass;

    return (

        <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md group">
            <figure><img className='relative transition duration-300 ease-in-out group-hover:scale-110' src={image} alt="Shoes" /></figure>
            <span className='bg-black bg-opacity-30 p-3 rounded-full text-white absolute top-5 right-5 text-xl'><FaRegStar /></span>
            <div className="card-body">
                <h2 className="card-title font-secondary font-extrabold">{className}</h2>
                <p>Instructor: {instructorName}</p>
                <div className='divider my-0'></div>
                <div className="card-actions justify-between">
                    <div className='flex items-center gap-2'>
                        <FaUserFriends className='text-[#FF7703]' />
                        <span className='text-base'>{students}+ Students</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegMoneyBillAlt className='text-[#FF7703]' />
                        <span className='text-base'>${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;