import React from 'react';
import Card from '../Components/Card';
import { useLoaderData } from 'react-router';

const AvailableCars = () => {

    const cars = useLoaderData();

    return (
        <div className='w-[90vw] md:w[90vw] mt-10 mx-auto space-y-10'>
            <div className='text-4xl font-bold flex'>
                Available Cars
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>

                <div className="join">
                    <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
                    <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
                </div>

            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">

                {
                    cars.map((car) => (
                        <Card key={car._id} car={car}></Card>
                    ))
                }

            </div>
        </div>
    );
};

export default AvailableCars;