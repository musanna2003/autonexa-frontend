import React from 'react';
import Card from '../Card';

const RecentCar = () => {
    return (
        <div className='w-[90vw] md:w[90vw] mx-auto space-y-10'>
            <div className="">
                <h1 className='text-4xl font-bold'> Recent Listings</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 ">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default RecentCar;