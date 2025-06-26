import React, { useContext, useEffect, useState } from 'react';
import Tr2 from '../Components/Tr2';
import { MyContext } from '../MyContext';
import axios from 'axios';
import LoadingPage from './LoadingPage';

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(MyContext);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/bookings/${user.email}`, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    

    if (loading) {
        return <LoadingPage />;
    }


    return (
        <div className='w-[90vw] md:w[90vw] mt-10 mx-auto space-y-10'>
            {/* <div className='text-4xl font-bold'>My Cars</div> */}
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
                            bookings?.map((booking,index) => (
                                // <Card key={car._id} car={car}></Card>
                                <Tr2 key={booking._id} booking={booking} index={index}></Tr2>
                                
                            ))
                        }
                    </tbody>
                </table>
                {
                    (bookings.length === 0) && <div className="  w-fit text-2xl font-bold mx-auto mt-10">You Do Not Have Any Booking Data..</div>

                }
            </div>
        </div>
    );
};

export default MyBookings;