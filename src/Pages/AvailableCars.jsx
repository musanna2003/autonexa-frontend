import React, { useState } from 'react';
import Card from '../Components/Card';
import Card2 from '../Components/card2';
import { NavLink, useLoaderData } from 'react-router'; // fix: use react-router-dom, not 'react-router'
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { MdSort } from "react-icons/md";

const AvailableCars = () => {
    const cars = useLoaderData();
    const [gridView, setGridView] = useState(false); // true = Card, false = Card2

    const handleViewToggle = (e) => {
        setGridView(e.target.checked);
    };

    return (
        <div className='w-[90vw] md:w-[90vw] mt-10 mx-auto space-y-10'>
            <div className='text-4xl font-bold flex justify-between items-center'>
                Available Cars

                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>

                <div className="flex items-center gap-1.5">
                    {/* View Toggle */}
                    <label className="swap">
                        <input type="checkbox" onChange={handleViewToggle} />
                        <div className="swap-on"><CiGrid41 /></div>
                        <div className="swap-off"><CiGrid2H /></div>
                    </label>

                    {/* Sort Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button"><MdSort /></div>
                        <ul tabIndex={0} className="dropdown-content font-[400] menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><NavLink to="/available/new">Newest First</NavLink></li>
                            <li><NavLink to="/available/old">Oldest First</NavLink></li>
                            <li><NavLink to="/available/high">Highest First</NavLink></li>
                            <li><NavLink to="/available/low">Lowest First</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Cars List */}
            <div className={`${!gridView ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'space-y-6'}`}>
                {
                    cars.map((car) => (
                        gridView
                            ? <Card2 key={car._id} car={car} />
                            : <Card key={car._id} car={car} />
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableCars;
