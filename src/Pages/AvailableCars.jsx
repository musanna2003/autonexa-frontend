import React from 'react';
import Card from '../Components/Card';
import { useLoaderData } from 'react-router';

const AvailableCars = () => {

    const cars = useLoaderData();

    return (
        <div className='w-[90vw] md:w[90vw] mx-auto space-y-10'>
            <div className='text-4xl font-bold'>Available Cars</div>
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