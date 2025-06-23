import React from 'react';
import { useLoaderData } from 'react-router';
import Tr2 from '../Components/Tr2';

const MyBookings = () => {

    const bookings = useLoaderData();

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
                        <th>BookingDate</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                            bookings.map((booking,index) => (
                                // <Card key={car._id} car={car}></Card>
                                <Tr2 key={booking._id} booking={booking} index={index}></Tr2>
                                
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;