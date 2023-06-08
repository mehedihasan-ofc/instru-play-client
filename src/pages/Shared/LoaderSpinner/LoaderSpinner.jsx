import React from 'react';
import { HashLoader } from 'react-spinners';

const LoaderSpinner = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[70vh]'>
            <HashLoader color="#36d7b7" />
        </div>
    );
};

export default LoaderSpinner;