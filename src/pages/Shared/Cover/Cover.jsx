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
                    <button onClick={() => navigate('/')} className="btn btn-secondary bg-pink-500 text-white hover:bg-pink-600 font-bold py-2 px-7 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 mt-5"><FaArrowLeft /> Home</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;