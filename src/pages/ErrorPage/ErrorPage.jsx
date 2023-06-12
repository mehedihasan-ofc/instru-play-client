import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import ErrorImg from '../../assets/errorPage.png';

const ErrorPage = () => {

    const { error } = useRouteError();

    return (
        <section className='flex items-center h-screen p-16 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='w-full md:w-96 mb-5'>
                    <img src={ErrorImg} alt="" />
                </div>
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl my-4'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='btn btn-secondary bg-pink-500 text-white hover:bg-pink-600 font-bold py-2 px-7 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;