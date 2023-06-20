import React from 'react';
import coverPhoto from '../../../assets/coverPhoto.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Cover = ({ title }) => {

    const navigate = useNavigate();

    return (
        <div style={
            {
                height: "60vh",
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${coverPhoto}) no-repeat center / cover`
            }
        }>

            <div className='flex items-end justify-center h-[40vh]'>
                <div className='text-center'>
                    <h2 className='text-xl md:text-4xl font-bold text-white'>{title}</h2>
                    <button onClick={() => navigate('/')} className="btn bg-orange-500 hover:bg-orange-600 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out text-white font-semibold py-2 px-10 rounded-3xl shadow-md border-0 mt-5"><FaArrowLeft /> Home</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;