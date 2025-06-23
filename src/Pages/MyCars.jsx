import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import TableRow from '../Components/TableRow';

const MyCars = () => {
    const cars = useLoaderData();

    return (
        <div className='w-[90vw] md:w[90vw] mx-auto space-y-10'>
            <div className='text-4xl font-bold'>My Cars</div>
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
                                <TableRow key={car._id} car={car} index={index}></TableRow>
                                
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCars;