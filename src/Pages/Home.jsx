import React from 'react';
import Hero from '../Components/home_component/Hero';
import RecentCar from '../Components/home_component/RecentCar';
import Why_Choose_Us from '../Components/home_component/Why_Choose_Us';

const Home = () => {
    return (
        <div className='space-y-16'>
            <Hero></Hero>
            <Why_Choose_Us></Why_Choose_Us>
            <RecentCar></RecentCar>
        </div>
    );
};

export default Home;