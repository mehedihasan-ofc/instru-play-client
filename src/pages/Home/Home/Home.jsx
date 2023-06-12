import React from 'react';
import Hero from '../Hero/Hero';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import HomeStats from '../HomeStats/HomeStats';
import Category from '../Category/Category';

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <PopularClasses />
            <PopularInstructors />
            <HomeStats />
        </>
    );
};

export default Home;