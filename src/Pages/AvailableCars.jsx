import React from 'react';
import Card from '../Components/Card';
import { useLoaderData } from 'react-router';
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { MdSort } from "react-icons/md";

const AvailableCars = () => {

    const cars = useLoaderData();

    return (
        <div className='w-[90vw] md:w[90vw] mt-10 mx-auto space-y-10'>
            <div className='text-4xl font-bold flex justify-between items-center'>
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

                <div className=" flex items-center gap-1.5">
                    <label className="swap">
                        <input type="checkbox" />
                        <div className="swap-on"><CiGrid41 /></div>
                        <div className="swap-off"><CiGrid2H /></div>
                    </label>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=""><MdSort /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Newest First</a></li>
                            <li><a>Oldest First</a></li>
                            <li><a>Highest First</a></li>
                            <li><a>Lowest First</a></li>
                        </ul>
                    </div>
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