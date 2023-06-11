import React from 'react';
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa';

const AllInstructorCard = ({ singleInstructor }) => {

    const { image, name, email } = singleInstructor;

    return (
        // <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 border">
        //     <figure><img src={image} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{email}</p>
        //     </div>
        // </div>

        <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 border">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center py-4 px-5">
                <h2 className="card-title">{name}</h2>
                <div className='flex items-center gap-2'><FaRegEnvelope className='text-red-500' /> {email}</div>
                <div className='divider my-0'></div>
                <div className="card-actions">
                    <button className="btn btn-circle btn-error btn-outline">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorCard;