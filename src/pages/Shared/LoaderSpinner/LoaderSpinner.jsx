import React from 'react';
import { BounceLoader } from 'react-spinners';

const LoaderSpinner = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <BounceLoader color="#FF7703" />
        </div>
    );
};

export default LoaderSpinner;