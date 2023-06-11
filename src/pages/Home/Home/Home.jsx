import React from 'react';
import Hero from '../Hero/Hero';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import HomeStats from '../HomeStats/HomeStats';

const Home = () => {
    return (
        <>
            <Hero />
            <PopularClasses />
            <PopularInstructors />
            <HomeStats />
        </>
    );
};

export default Home;