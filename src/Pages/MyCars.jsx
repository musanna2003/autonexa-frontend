import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const MyCars = () => {
    const cars = useLoaderData();

    return (
        <div className='w-[90vw] md:w[90vw] mx-auto space-y-10'>
            <div className='text-4xl font-bold'>my Cars</div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Car Model</th>
                        <th>Availability</th>
                        <th>TimesBooked</th>
                        <th>Price/Day</th>
                        <th>Date Added</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                            cars.map((car,index) => (
                                // <Card key={car._id} car={car}></Card>
                                <tr>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                    src={car.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                                                    alt={car.carModel || "Car"}/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{car.carModel}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{car.availability ? "Available" : "Not Available"}</span>
                                    </td>
                                    <td>
                                        <span>{car.count}</span>
                                    </td>
                                    <td>
                                        <span className='text-green-500'>{car.dailyRentalPrice} taka</span>
                                    </td>
                                    <td>
                                        <span >{car.date}</span>
                                    </td>
                                    <th>
                                        <button className='btn'><CiEdit /></button>
                                        <button className='btn'><CiTrash /></button>
                                    </th>
                                </tr>
                                
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCars;