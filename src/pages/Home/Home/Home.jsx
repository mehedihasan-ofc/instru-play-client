import React from 'react';
import Hero from '../Hero/Hero';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <>
            <Hero />
            <PopularClasses />
            <PopularInstructors />
        </>
    );
};

export default Home;