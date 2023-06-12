import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import LoaderSpinner from '../pages/Shared/LoaderSpinner/LoaderSpinner';

const Main = () => {

    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false);
        }, 1600)
    }, [])

    return (
        <>
            {preloader ? <LoaderSpinner /> : <><Navbar />
                <Outlet />
                <Footer /></>}
        </>
    );
};

export default Main;