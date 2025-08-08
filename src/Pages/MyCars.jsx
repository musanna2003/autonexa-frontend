import React, { useContext, useEffect, useState } from 'react';
import TableRow from '../Components/TableRow';
import axios from 'axios';
import LoadingPage from './LoadingPage';
import { MyContext } from '../MyContext';

const MyCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(MyContext);

    document.title = `${user.name}'s cars | AutoNexa`;

    useEffect(() => {
        setLoading(true);
        axios.get(`https://ph-assignment-11-backend.vercel.app/mycars/${user.email}`, { withCredentials: true })
            .then(res => {
                setCars(res.data);
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